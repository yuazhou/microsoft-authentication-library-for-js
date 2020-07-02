import { AuthorizationUrlRequest, AuthorizationCodeRequest, ClientConfiguration, RefreshTokenRequest, AuthenticationResult, BaseAuthRequest, SilentFlowRequest, Logger } from '@azure/msal-common';
import { Configuration } from '../config/Configuration';
import { TokenCache } from '../cache/TokenCache';
export declare abstract class ClientApplication {
    private config;
    private _authority;
    private readonly cryptoProvider;
    private storage;
    private tokenCache;
    logger: Logger;
    /**
     * Constructor for the ClientApplication
     * @param {@link (Configuration:type)} configuration object for the MSAL ClientApplication instance
     */
    protected constructor(configuration: Configuration);
    /**
     * Creates the URL of the authorization request letting the user input credentials and consent to the
     * application. The URL target the /authorize endpoint of the authority configured in the
     * application object.
     *
     * Once the user inputs their credentials and consents, the authority will send a response to the redirect URI
     * sent in the request and should contain an authorization code, which can then be used to acquire tokens via
     * acquireToken(AuthorizationCodeRequest)
     * @param request
     */
    getAuthCodeUrl(request: AuthorizationUrlRequest): Promise<string>;
    /**
     * Acquires a token by exchanging the Authorization Code received from the first step of OAuth2.0
     * Authorization Code flow.
     *
     * getAuthCodeUrl(AuthorizationCodeUrlRequest) can be used to create the URL for the first step of OAuth2.0
     * Authorization Code flow. Ensure that values for redirectUri and scopes in AuthorizationCodeUrlRequest and
     * AuthorizationCodeRequest are the same.
     *
     * @param request
     */
    acquireTokenByCode(request: AuthorizationCodeRequest): Promise<AuthenticationResult>;
    /**
     * Acquires a token by exchanging the refresh token provided for a new set of tokens.
     *
     * This API is provided only for scenarios where you would like to migrate from ADAL to MSAL. Instead, it is
     * recommended that you use acquireTokenSilent() for silent scenarios. When using acquireTokenSilent, MSAL will
     * handle the caching and refreshing of tokens automatically.
     * @param request
     */
    acquireTokenByRefreshToken(request: RefreshTokenRequest): Promise<AuthenticationResult>;
    /**
     * Acquires a token silently when a user specifies the account the token is requested for.
     *
     * This API expects the user to provide an account object and looks into the cache to retrieve the token if present.
     * There is also an optional "forceRefresh" boolean the user can send, to bypass the cache for access_token and id_token
     * In case the refresh_token is expired or not found, an error is thrown
     * and the guidance is for the user to call any interactive token acquisition API (eg: acquireTokenByCode())
     * @param request
     */
    acquireTokenSilent(request: SilentFlowRequest): Promise<AuthenticationResult>;
    getCacheManager(): TokenCache;
    protected buildOauthClientConfiguration(authority?: string): Promise<ClientConfiguration>;
    /**
     * Generates a request with the default scopes.
     * @param authRequest
     */
    protected initializeRequestScopes(authRequest: BaseAuthRequest): BaseAuthRequest;
    /**
     * Create authority instance. If authority not passed in request, default to authority set on the application
     * object. If no authority set in application object, then default to common authority.
     * @param authorityString
     */
    private createAuthority;
    private get authority();
}
