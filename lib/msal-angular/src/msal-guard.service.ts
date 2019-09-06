import { Inject, Injectable } from "@angular/core";
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from "@angular/router";
import { MsalService } from "./msal.service";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pairwise';
import { Location, PlatformLocation } from "@angular/common";
import { BroadcastService } from "./broadcast.service";
import { AuthenticationResult } from "./AuthenticationResult";
import { Configuration, Constants, AuthenticationParameters } from 'msal';
import { AuthResponse } from 'msal';
import { AuthError } from 'msal';
import { isEmpty } from "lodash";

@Injectable()
export class MsalGuard implements CanActivate {

    constructor(
        private clientId: string,
        private popup: boolean,
        private authParams: AuthenticationParameters,
        private authService: MsalService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private platformLocation: PlatformLocation,
        private broadcastService: BroadcastService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
        this.authService.getLogger().verbose("location change event from old url to new url");

        this.authService.updateDataFromCache([this.clientId], null);
        if (!this.authService.getAuthenticationData().isAuthenticated && isEmpty(this.authService.getAuthenticationData().idToken)) {
            if (state.url) {
                if (!this.authService.renewIsActive() && !this.authService.loginInProgress()) {
                    var loginStartPage = this.getBaseUrl() + state.url;
                    if (loginStartPage !== null) {
                        this.authService.getCacheStorage().setItem(Constants.angularLoginRequest, loginStartPage);
                    }
                    if (this.popup) {
                        return this.authService.loginPopup(this.authParams);
                    }
                    else {
                        this.authService.loginRedirect(this.authParams);
                    }
                }
            }
        }
        //token is expired/deleted but userdata still exists in _oauthData object
        else if (!this.authService.getAuthenticationData().isAuthenticated && !isEmpty(this.authService.getAuthenticationData().idToken)) {
            return this.authService.acquireTokenSilent({ scopes: [this.clientId] })
                .then((response: AuthResponse) => {
                    this.authService.setAuthenticated(true);
                    this.broadcastService.broadcast("msal:loginSuccess", response);
                    return true;
                })
                .catch((error: AuthError) => {
                    this.broadcastService.broadcast("msal:loginFailure", error);
                    return false;
                });
        }
        else {
            return true;
        }
    }

    private getBaseUrl(): String {
        var currentAbsoluteUrl = window.location.href;
        var currentRelativeUrl = this.location.path();
        if (isEmpty(currentRelativeUrl)) {
            if (currentAbsoluteUrl.endsWith("/")) {
                currentAbsoluteUrl = currentAbsoluteUrl.replace(/\/$/, "");
            }
            return currentAbsoluteUrl;
        }
        else {
            var index = currentAbsoluteUrl.indexOf(currentRelativeUrl);
            return currentAbsoluteUrl.substring(0, index);
        }
    }
}
