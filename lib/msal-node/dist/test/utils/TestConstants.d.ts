/**
 * This file contains the string constants used by the test classes.
 */
export declare const TEST_CONSTANTS: {
    CLIENT_ID: string;
    AUTHORITY: string;
    ALTERNATE_AUTHORITY: string;
    REDIRECT_URI: string;
    DEFAULT_GRAPH_SCOPE: string[];
    AUTHORIZATION_CODE: string;
    REFRESH_TOKEN: string;
    AUTH_CODE_URL: string;
    CACHE_LOCATION: string;
};
export declare const AUTHENTICATION_RESULT: {
    status: number;
    body: {
        token_type: string;
        scope: string;
        expires_in: number;
        ext_expires_in: number;
        access_token: string;
        refresh_token: string;
        id_token: string;
    };
};
