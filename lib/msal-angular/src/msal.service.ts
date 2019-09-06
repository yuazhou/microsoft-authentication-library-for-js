import { Injectable } from "@angular/core";
import {
    UserAgentApplication,
    Configuration,
    AuthResponse,
    Account,
    Logger,
    AuthError,
    Constants,
    AuthenticationParameters
} from "msal";
import {
    Router,
    Route
} from "@angular/router";
import { BroadcastService } from 'broadcast.service';
import { isEmpty } from "lodash";
import { StringDict } from 'msal/lib-commonjs/MsalTypes';

class MsalInstance extends UserAgentApplication {
    constructor(config: Configuration) {
        super(config);
    }

    getCachedToken(scopes: Array<string>, account: Account, state: string): AuthResponse {
        return this.getCachedTokenInternal(scopes, account, state);
    }

    getMsalLogger(): Logger {
        return this.getLogger();
    }

    saveToken(hash: string, stateInfo: any): AuthResponse { // TODO export ResponseStateInfo
        return this.saveTokenFromHash(hash, stateInfo);
    }

    setloginInProgress(isInProgress: boolean) {
        return super.setloginInProgress(isInProgress);
    }

    getAcquireTokenInProgress() {
        return super.getAcquireTokenInProgress();
    }

    setAcquireTokenInProgress(isInProgress: boolean) {
        return super.setAcquireTokenInProgress(isInProgress);
    }

    getResponseState(hash: string): any { // TODO export ResponseStateInfo
        return this.getResponseState(hash);
    }

    deserializeHash(hash: string): any {
        return this.deserializeHash(hash);
    }

    getCacheStorage(): any {
        return this.getCacheStorage();
    }

    clearCache(): void {
        return this.clearCache();
    }

    getScopesForEndpoint(endpoint: string): Array<string> {
        return this.getScopesForEndpoint(endpoint);
    }

    clearAccessToken(accessToken: string) {
        return this.clearCacheForScope(accessToken);
    }
}

@Injectable()
export class MsalService {

    private msalInstance: MsalInstance;
    private router: Router;
    private broadcastService: BroadcastService;
    private config: Configuration;
    private unprotectedResources: Array<string>;
    private protectedResources: Map<string, Array<string>>;
    private isAuthenticated: boolean = false;
    private account: Account;
    private _renewActive: boolean;
    private userName: string;
    private idToken: StringDict;
    private loginError: string;

    constructor(config: Configuration, router: Router, broadcastService: BroadcastService) {
        this.msalInstance = new MsalInstance(config); //TODO make sure angular is turned on?
        this.router = router;
        this.broadcastService = broadcastService;
        this.config = config;
        this.unprotectedResources = this.config.framework.unprotectedResources || [];
        this.protectedResources = this.config.framework.protectedResourceMap || new Map();
        // determine if user is logged in
        const cacheResult: AuthResponse = this.msalInstance.getCachedToken([this.config.auth.clientId], this.msalInstance.getAccount(), null);
        this.isAuthenticated = cacheResult && !isEmpty(cacheResult.idToken);
        this.account = this.msalInstance.getAccount();

        this.processHash(window.location.hash);

        window.addEventListener("msal:popUpHashChanged", (e: CustomEvent) => {
            this.msalInstance.getMsalLogger().verbose("popUpHashChanged ");
            this.processHash(e.detail);
        });

        window.addEventListener("msal:popUpClosed", (e: CustomEvent) => {
            const errorParts = e.detail.split("|");
            // TODO pick the right error
            const msalError = new AuthError(errorParts[0], errorParts[1]);
            if (this.msalInstance.getLoginInProgress()) {
                broadcastService.broadcast("msal:loginFailure", msalError);
                this.msalInstance.setloginInProgress(false);
            }
            else if (this.msalInstance.getAcquireTokenInProgress()) {
                broadcastService.broadcast("msal:acquireTokenFailure", msalError);
                this.msalInstance.setAcquireTokenInProgress(false);
            }
        });


        // resource protection
        this.router.events.subscribe(event => {
            this.router.config.forEach((routeItem: Route) => {
                // if the route cant activate
                // and it is not present in the list of unprotected resources... add it
                if (
                    !routeItem.canActivate &&
                    !isEmpty(routeItem.path) &&
                    !this.unprotectedResources.includes(routeItem.path)) {
                    this.config.framework.unprotectedResources.push(routeItem.path);
                }
            });
        });
    }

    updateDataFromCache(scopes: string[], state: string) {
        // only cache lookup here to not interrupt with events
        const cacheResult = this.msalInstance.getCachedToken(scopes, this.msalInstance.getAccount(), state);
        this.isAuthenticated = cacheResult != null && cacheResult.idToken !== null;
        var account = this.msalInstance.getAccount();
        if (account) {
            this.userName = account.userName;
            this.idToken = account.idToken;
        }
    }

    updateLoginError(error: string) {
        this.loginError = error;
    }

    private processHash(hash: string) {
        if (this.msalInstance.isCallback(hash)) {
            let isPopup = false;
            let stateInfo = null; // type ResponseStateInfo
            let callback = null;
            let msal: any;
            // callback can come from popupWindow, iframe or mainWindow
            if (window.openedWindows.length > 0 && window.openedWindows[window.openedWindows.length - 1].opener
                && window.openedWindows[window.openedWindows.length - 1].opener.msal) {
                var mainWindow = window.openedWindows[window.openedWindows.length - 1].opener;
                msal = mainWindow.msal;
                isPopup = true;
                stateInfo = msal.getResponseState(hash); // TODO, can we use our msal instance instead of the window?
                if (mainWindow.callBackMappedToRenewStates[stateInfo.state]) {
                    callback = mainWindow.callBackMappedToRenewStates[stateInfo.state];
                }
            }
            //redirect flow
            else if (window.parent && window.parent.msal) {
                msal = window.parent.msal;
                stateInfo = msal.getResponseState(hash); // TODO, can we use our msal instance instead of the window?
                if (window.parent !== window && window.parent.callBackMappedToRenewStates[stateInfo.state]) {
                    callback = window.parent.callBackMappedToRenewStates[stateInfo.state];
                }
                else {
                    callback = msal.tokenReceivedCallback;
                }
            }


            this.msalInstance.getMsalLogger().verbose("Processing the hash: " + hash);
            const authResponse: AuthResponse = this.msalInstance.saveToken(hash, stateInfo);
            // Return to callback if it is sent from iframe
            const token = authResponse.accessToken || authResponse.idToken;

            // do this to get the error since its not present in the AuthResponse
            const deserializedHash = this.msalInstance.deserializeHash(hash);
            const error = deserializedHash[Constants.error];
            const errorDescription = deserializedHash[Constants.errorDescription];

            let tokenType = null;
            const msalError = new AuthError(error, errorDescription);

            if (stateInfo.stateMatch) {
                if (stateInfo.requestType === Constants.renewToken) {
                    tokenType = Constants.accessToken;
                    this._renewActive = false;
                    // Call within the same context without full page redirect keeps the callback
                    // id_token or access_token can be renewed
                    if (window.parent === window && !window.parent.callBackMappedToRenewStates[stateInfo.state]) {
                        if (token) {
                            this.broadcastService.broadcast("msal:acquireTokenSuccess", authResponse);
                        }
                        else if (error && errorDescription) {
                            this.broadcastService.broadcast("msal:acquireTokenFailure", msalError);
                        }
                    }

                } else if (stateInfo.requestType === Constants.login) {
                    tokenType = Constants.idToken;
                    this.updateDataFromCache([this.config.auth.clientId], stateInfo.state);
                    this.loginError = error;

                    const UPDATE_DATA_TIMEOUT = 1;

                    if (this.userName) { //TODO ... what does this do?
                        setTimeout(() => {
                            // id_token is added as token for the app
                            this.updateDataFromCache([this.config.auth.clientId], stateInfo.state);
                            //todo temp commented
                            //  this.userInfo = this._oauthData;
                        }, UPDATE_DATA_TIMEOUT);
                        this.broadcastService.broadcast("msal:loginSuccess", authResponse);
                    } else {
                        this.broadcastService.broadcast("msal:loginFailure", msalError);
                    }
                }

                if (callback && typeof callback === "function") {
                    callback(authResponse, error && msalError); //TODO Should we change core for this?
                }

                // since this is a token renewal request in iFrame, we don't need to proceed with the location change.
                if (window.parent !== window) {//in iframe
                    if (event && event.preventDefault) {
                        event.preventDefault();
                    }
                    return;
                }

                // redirect to login start page
                if (window.parent === window && !isPopup) {
                    if (this.config.auth.navigateToLoginRequestUrl) {  //Where could this possibly be set ?
                        const loginStartPage = this.msalInstance.getCacheStorage().getItem(Constants.loginRequest);
                        this.msalInstance.getCacheStorage().setItem(Constants.urlHash, hash);
                        if (typeof loginStartPage !== "undefined" && loginStartPage && loginStartPage.length !== 0) {
                            // prevent the current location change and redirect the user back to the login start page
                            this.msalInstance.getMsalLogger().verbose("Redirecting to start page: " + loginStartPage);
                            window.location.href = loginStartPage;
                        }
                    }
                    //redirect to redirect uri. No page reload here since we are only removing the url after the hash
                    else {
                        window.location.hash = "";
                    }
                }
            }
            else {
                // state did not match, broadcast an error
                this.broadcastService.broadcast("msal:stateMismatch", msalError);
            }
        }
        else {
            const pendingCallback = this.msalInstance.getCacheStorage().getItem(Constants.urlHash);
            if (pendingCallback) {
                this.processRedirectCallBack(pendingCallback);
            }
        }
    }


    private processRedirectCallBack(hash: string): void {
        this.msalInstance.getMsalLogger().info('Processing the callback from redirect response');

        const stateInfo = this.msalInstance.getResponseState(hash);
        const authResponse = this.msalInstance.saveToken(hash, stateInfo);

        // do this to get the error since its not present in the AuthResponse
        const deserializedHash = this.msalInstance.deserializeHash(hash);
        const error = deserializedHash[Constants.error];
        const errorDescription = deserializedHash[Constants.errorDescription];

        const token = authResponse[Constants.accessToken] || authResponse[Constants.idToken];

        let tokenType: string;
        this.msalInstance.getCacheStorage().removeItem(Constants.urlHash);
        var msalError = new AuthError(error, errorDescription);
        if (authResponse[Constants.accessToken]) {
            tokenType = Constants.accessToken;
            if (token) {
                this.broadcastService.broadcast("msal:acquireTokenSuccess", authResponse);
            }
            else if (error && errorDescription) {
                //TODO this should also send back the scopes
                this.broadcastService.broadcast("msal:acquireTokenFailure", msalError);
            }
        }
        else {
            tokenType = Constants.idToken;
            if (token) {
                this.broadcastService.broadcast("msal:loginSuccess", authResponse);
            }
            else if (error && errorDescription) {
                this.broadcastService.broadcast("msal:loginFailure", msalError);
            }
        }
    }

    protected clearCache() {
        this.msalInstance.clearCache();
    }


    public loginRedirect(request: AuthenticationParameters) {

        this.msalInstance.getMsalLogger().verbose("login redirect flow");
        this.msalInstance.loginRedirect(request);
    }

    public loginPopup(request: AuthenticationParameters): Promise<any> {
        this.msalInstance.getMsalLogger().verbose("login popup flow");

        return this.msalInstance.loginPopup(request)
            .then((response: AuthResponse) => {
                const idToken = response.idToken;
                this.broadcastService.broadcast("msal:loginSuccess", response);
                return response;
            })
            .catch((err: AuthError) => {
                this.msalInstance.getMsalLogger().error("Error during login:\n" + err);
                this.broadcastService.broadcast("msal:loginFailure", err);
                throw err;
            });
    }

    public logout(): void {
        this.account = null;
        this.msalInstance.logout();
    }


    public acquireTokenSilent(request: AuthenticationParameters): Promise<any> {
        return this.msalInstance.acquireTokenSilent(request)
            // TODO should renew active be true here ?
            .then((response: AuthResponse) => {
                this._renewActive = false;
                this.broadcastService.broadcast("msal:acquireTokenSuccess", response);
                return response;
            })
            .catch((error: AuthError) => {
                //should renew active be false here
                this.broadcastService.broadcast("msal:acquireTokenFailure", error);
                this.msalInstance.getMsalLogger().error(`Error when acquiring token for scopes: ${request.scopes.join(",")} - ${error}`);
                throw error;
            });
    }

    public acquireTokenPopup(request: AuthenticationParameters): Promise<any> {
        // TODO should renew active be true here ?
        return this.msalInstance.acquireTokenPopup(request)
            .then((response: AuthResponse) => {
                this._renewActive = false;
                this.broadcastService.broadcast('msal:acquireTokenSuccess', response);
                return response;
            })
            .catch((error: AuthError) => {
                this._renewActive = false;
                this.broadcastService.broadcast('msal:acquireTokenFailure', error);
                this.msalInstance.getMsalLogger().error(`Error when acquiring token for scopes: ${request.scopes.join(",")} - ${error}`);
                throw error;
            });
    }

    public acquireTokenRedirect(request: AuthenticationParameters) {
        var acquireTokenStartPage = this.msalInstance.getCacheStorage().getItem(Constants.loginRequest);
        if (window.location.href !== acquireTokenStartPage) {
            this.msalInstance.getCacheStorage().setItem(Constants.loginRequest, window.location.href);
        }
        this.msalInstance.acquireTokenRedirect(request);
    }

    getScopesForEndpoint(endpoint: string) {
        // TODO this needs to be witten into this lib, core has no reason to implement it
        return this.msalInstance.getScopesForEndpoint(endpoint);
    }

    clearCacheForScope(accessToken: string) {
        this.msalInstance.clearAccessToken(accessToken);
    }

    removeItem(key: string) {
        return this.msalInstance.getCacheStorage().removeItem(key);
    }

    getLogger() {
        return this.msalInstance.getMsalLogger();
    }

    getAuthenticationData() {
        return {
            isAuthenticated: this.isAuthenticated,
            idToken: this.idToken
        }
    }

    renewIsActive(): boolean {
        return this._renewActive;
    }

    loginInProgress(): boolean {
        return this.msalInstance.getLoginInProgress();
    }

    getCacheStorage(){
        return this.msalInstance.getCacheStorage();
    }

    setAuthenticated(isAuthenticated: boolean) {
        this.isAuthenticated = isAuthenticated;
    }
}