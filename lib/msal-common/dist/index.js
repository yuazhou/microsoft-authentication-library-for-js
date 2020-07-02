/*! @azure/msal-common v1.0.0-beta.3 2020-07-02 */
'use strict';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * AuthErrorMessage class containing string constants used by error codes and messages.
 */
var AuthErrorMessage = {
    unexpectedError: {
        code: "unexpected_error",
        desc: "Unexpected error in authentication."
    }
};
/**
 * General error class thrown by the MSAL.js library.
 */
var AuthError = /** @class */ (function (_super) {
    __extends(AuthError, _super);
    function AuthError(errorCode, errorMessage) {
        var _this = this;
        var errorString = errorMessage ? errorCode + ": " + errorMessage : errorCode;
        _this = _super.call(this, errorString) || this;
        Object.setPrototypeOf(_this, AuthError.prototype);
        _this.errorCode = errorCode;
        _this.errorMessage = errorMessage;
        _this.name = "AuthError";
        return _this;
    }
    /**
     * Creates an error that is thrown when something unexpected happens in the library.
     * @param errDesc
     */
    AuthError.createUnexpectedError = function (errDesc) {
        return new AuthError(AuthErrorMessage.unexpectedError.code, AuthErrorMessage.unexpectedError.desc + ": " + errDesc);
    };
    return AuthError;
}(Error));
//# sourceMappingURL=AuthError.js.map

var name = "@azure/msal-common";
var author = {
	name: "Microsoft",
	email: "nugetaad@microsoft.com",
	url: "https://www.microsoft.com"
};
var license = "MIT";
var repository = {
	type: "git",
	url: "https://github.com/AzureAD/microsoft-authentication-library-for-js.git"
};
var version = "1.0.0-beta.3";
var description = "Microsoft Authentication Library for js";
var keywords = [
	"implicit",
	"authorization code",
	"PKCE",
	"js",
	"AAD",
	"msal",
	"oauth"
];
var main = "./dist/index.js";
var module$1 = "./dist/index.es.js";
var types = "./dist/src/index.d.ts";
var browserslist = [
	"last 1 version",
	"> 1%",
	"maintained node versions",
	"not dead"
];
var engines = {
	node: ">=0.8.0"
};
var directories = {
	test: "test"
};
var files = [
	"dist"
];
var scripts = {
	clean: "shx rm -rf dist lib",
	"clean:coverage": "rimraf ../../.nyc_output/*",
	lint: "eslint src --ext .ts",
	test: "mocha",
	"test:coverage": "nyc --reporter=text mocha --exit",
	"test:coverage:only": "npm run clean:coverage && npm run test:coverage",
	"build:modules": "rollup -c",
	"build:modules:watch": "rollup -cw",
	build: "npm run clean && npm run lint && npm run build:modules",
	prepack: "npm run build"
};
var devDependencies = {
	"@babel/core": "^7.7.2",
	"@babel/plugin-proposal-class-properties": "^7.7.0",
	"@babel/plugin-proposal-object-rest-spread": "^7.6.2",
	"@babel/polyfill": "^7.7.0",
	"@babel/preset-env": "^7.7.1",
	"@babel/preset-typescript": "^7.7.2",
	"@babel/register": "^7.7.0",
	"@istanbuljs/nyc-config-babel": "^2.1.1",
	"@rollup/plugin-json": "^4.0.0",
	"@types/chai": "^4.2.5",
	"@types/chai-as-promised": "^7.1.2",
	"@types/debug": "^4.1.5",
	"@types/mocha": "^5.2.7",
	"@types/sinon": "^7.5.0",
	"@typescript-eslint/eslint-plugin": "^2.4.0",
	"@typescript-eslint/eslint-plugin-tslint": "^2.4.0",
	"@typescript-eslint/parser": "^2.4.0",
	"babel-plugin-istanbul": "^5.2.0",
	chai: "^4.2.0",
	"chai-as-promised": "^7.1.1",
	eslint: "^6.5.1",
	husky: "^3.0.9",
	mocha: "^6.2.2",
	nyc: "^14.1.1",
	rimraf: "^3.0.2",
	rollup: "^1.24.0",
	"rollup-plugin-typescript2": "^0.24.3",
	"rollup-plugin-uglify": "^6.0.4",
	shx: "^0.3.2",
	sinon: "^7.5.0",
	tslib: "^1.10.0",
	tslint: "^5.20.0",
	typescript: "^3.7.5"
};
var dependencies = {
	debug: "^4.1.1"
};
var pkg = {
	name: name,
	author: author,
	license: license,
	repository: repository,
	version: version,
	description: description,
	keywords: keywords,
	main: main,
	module: module$1,
	types: types,
	browserslist: browserslist,
	engines: engines,
	directories: directories,
	files: files,
	scripts: scripts,
	devDependencies: devDependencies,
	dependencies: dependencies
};

/**
 * ClientAuthErrorMessage class containing string constants used by error codes and messages.
 */
var ClientAuthErrorMessage = {
    clientInfoDecodingError: {
        code: "client_info_decoding_error",
        desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
    },
    clientInfoEmptyError: {
        code: "client_info_empty_error",
        desc: "The client info was empty. Please review the trace to determine the root cause."
    },
    idTokenParsingError: {
        code: "id_token_parsing_error",
        desc: "ID token cannot be parsed. Please review stack trace to determine root cause."
    },
    nullOrEmptyIdToken: {
        code: "null_or_empty_id_token",
        desc: "The idToken is null or empty. Please review the trace to determine the root cause."
    },
    endpointResolutionError: {
        code: "endpoints_resolution_error",
        desc: "Error: could not resolve endpoints. Please check network and try again."
    },
    invalidAuthorityType: {
        code: "invalid_authority_type",
        desc: "The given authority is not a valid type of authority supported by MSAL. Please review the trace to determine the root cause."
    },
    hashNotDeserialized: {
        code: "hash_not_deserialized",
        desc: "The hash parameters could not be deserialized. Please review the trace to determine the root cause."
    },
    blankGuidGenerated: {
        code: "blank_guid_generated",
        desc: "The guid generated was blank. Please review the trace to determine the root cause."
    },
    invalidStateError: {
        code: "invalid_state",
        desc: "State was not the expected format. Please check the logs to determine whether the request was sent using ProtocolUtils.setRequestState()."
    },
    stateMismatchError: {
        code: "state_mismatch",
        desc: "State mismatch error. Please check your network. Continued requests may cause cache overflow."
    },
    nonceMismatchError: {
        code: "nonce_mismatch",
        desc: "Nonce mismatch error. This may be caused by a race condition in concurrent requests."
    },
    accountMismatchError: {
        code: "account_mismatch",
        desc: "The cached account and account which made the token request do not match."
    },
    invalidIdToken: {
        code: "invalid_id_token",
        desc: "Invalid ID token format."
    },
    noTokensFoundError: {
        code: "no_tokens_found",
        desc: "No tokens were found for the given scopes, and no authorization code was passed to acquireToken. You must retrieve an authorization code before making a call to acquireToken()."
    },
    cacheParseError: {
        code: "cache_parse_error",
        desc: "Could not parse cache key."
    },
    userLoginRequiredError: {
        code: "user_login_error",
        desc: "User login is required."
    },
    multipleMatchingTokens: {
        code: "multiple_matching_tokens",
        desc: "The cache contains multiple tokens satisfying the requirements. " +
            "Call AcquireToken again providing more requirements such as authority or account."
    },
    multipleMatchingAccounts: {
        code: "multiple_matching_accounts",
        desc: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account"
    },
    tokenRequestCannotBeMade: {
        code: "request_cannot_be_made",
        desc: "Token request cannot be made without authorization code or refresh token."
    },
    appendEmptyScopeError: {
        code: "cannot_append_empty_scope",
        desc: "Cannot append null or empty scope to ScopeSet. Please check the stack trace for more info."
    },
    removeEmptyScopeError: {
        code: "cannot_remove_empty_scope",
        desc: "Cannot remove null or empty scope from ScopeSet. Please check the stack trace for more info."
    },
    appendScopeSetError: {
        code: "cannot_append_scopeset",
        desc: "Cannot append ScopeSet due to error."
    },
    emptyInputScopeSetError: {
        code: "empty_input_scopeset",
        desc: "Empty input ScopeSet cannot be processed."
    },
    DeviceCodePollingCancelled: {
        code: "device_code_polling_cancelled",
        desc: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true."
    },
    DeviceCodeExpired: {
        code: "device_code_expired",
        desc: "Device code is expired."
    },
    NoAccountInSilentRequest: {
        code: "no_account_in_silent_request",
        desc: "Please pass an account object, silent flow is not supported without account information"
    },
    invalidCacheRecord: {
        code: "invalid_cache_record",
        desc: "Cache record object was null or undefined."
    },
    invalidCacheEnvironment: {
        code: "invalid_cache_environment",
        desc: "Invalid environment when attempting to create cache entry"
    },
    noAccountFound: {
        code: "no_account_found",
        desc: "No account found in cache for given key."
    },
    CachePluginError: {
        code: "no cache plugin set on CacheManager",
        desc: "ICachePlugin needs to be set before using readFromStorage or writeFromStorage"
    },
    noCryptoObj: {
        code: "no_crypto_object",
        desc: "No crypto object detected. This is required for the following operation: "
    },
    invalidCacheType: {
        code: "invalid_cache_type",
        desc: "Invalid cache type"
    },
    unexpectedAccountType: {
        code: "unexpected_account_type",
        desc: "Unexpected account type."
    },
    unexpectedCredentialType: {
        code: "unexpected_credential_type",
        desc: "Unexpected credential type."
    }
};
/**
 * Error thrown when there is an error in the client code running on the browser.
 */
var ClientAuthError = /** @class */ (function (_super) {
    __extends(ClientAuthError, _super);
    function ClientAuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientAuthError";
        Object.setPrototypeOf(_this, ClientAuthError.prototype);
        return _this;
    }
    /**
     * Creates an error thrown when client info object doesn't decode correctly.
     * @param caughtError
     */
    ClientAuthError.createClientInfoDecodingError = function (caughtError) {
        return new ClientAuthError(ClientAuthErrorMessage.clientInfoDecodingError.code, ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + caughtError);
    };
    /**
     * Creates an error thrown if the client info is empty.
     * @param rawClientInfo
     */
    ClientAuthError.createClientInfoEmptyError = function (rawClientInfo) {
        return new ClientAuthError(ClientAuthErrorMessage.clientInfoEmptyError.code, ClientAuthErrorMessage.clientInfoEmptyError.desc + " Given Object: " + rawClientInfo);
    };
    /**
     * Creates an error thrown when the id token extraction errors out.
     * @param err
     */
    ClientAuthError.createIdTokenParsingError = function (caughtExtractionError) {
        return new ClientAuthError(ClientAuthErrorMessage.idTokenParsingError.code, ClientAuthErrorMessage.idTokenParsingError.desc + " Failed with error: " + caughtExtractionError);
    };
    /**
     * Creates an error thrown when the id token string is null or empty.
     * @param invalidRawTokenString
     */
    ClientAuthError.createIdTokenNullOrEmptyError = function (invalidRawTokenString) {
        return new ClientAuthError(ClientAuthErrorMessage.nullOrEmptyIdToken.code, ClientAuthErrorMessage.nullOrEmptyIdToken.desc + " Raw ID Token Value: " + invalidRawTokenString);
    };
    /**
     * Creates an error thrown when the endpoint discovery doesn't complete correctly.
     */
    ClientAuthError.createEndpointDiscoveryIncompleteError = function (errDetail) {
        return new ClientAuthError(ClientAuthErrorMessage.endpointResolutionError.code, ClientAuthErrorMessage.endpointResolutionError.desc + " Detail: " + errDetail);
    };
    /**
     * Creates an error thrown if authority type is not valid.
     * @param invalidAuthorityError
     */
    ClientAuthError.createInvalidAuthorityTypeError = function (givenUrl) {
        return new ClientAuthError(ClientAuthErrorMessage.invalidAuthorityType.code, ClientAuthErrorMessage.invalidAuthorityType.desc + " Given Url: " + givenUrl);
    };
    /**
     * Creates an error thrown when the hash cannot be deserialized.
     * @param invalidAuthorityError
     */
    ClientAuthError.createHashNotDeserializedError = function (hashParamObj) {
        return new ClientAuthError(ClientAuthErrorMessage.hashNotDeserialized.code, ClientAuthErrorMessage.hashNotDeserialized.desc + " Given Object: " + hashParamObj);
    };
    /**
     * Creates an error thrown when the state cannot be parsed.
     * @param invalidState
     */
    ClientAuthError.createInvalidStateError = function (invalidState, errorString) {
        return new ClientAuthError(ClientAuthErrorMessage.invalidStateError.code, ClientAuthErrorMessage.invalidStateError.desc + " Invalid State: " + invalidState + ", Root Err: " + errorString);
    };
    /**
     * Creates an error thrown when two states do not match.
     */
    ClientAuthError.createStateMismatchError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.stateMismatchError.code, ClientAuthErrorMessage.stateMismatchError.desc);
    };
    /**
     * Creates an error thrown when the nonce does not match.
     */
    ClientAuthError.createNonceMismatchError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.nonceMismatchError.code, ClientAuthErrorMessage.nonceMismatchError.desc);
    };
    /**
     * Creates an error thrown when the cached account and response account do not match.
     */
    ClientAuthError.createAccountMismatchError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.accountMismatchError.code, ClientAuthErrorMessage.accountMismatchError.desc);
    };
    /**
     * Throws error if idToken is not correctly formed
     * @param idToken
     */
    ClientAuthError.createInvalidIdTokenError = function (idToken) {
        return new ClientAuthError(ClientAuthErrorMessage.invalidIdToken.code, ClientAuthErrorMessage.invalidIdToken.desc + " Given token: " + JSON.stringify(idToken));
    };
    /**
     * Creates an error thrown when the authorization code required for a token request is null or empty.
     */
    ClientAuthError.createNoTokensFoundError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.noTokensFoundError.code, ClientAuthErrorMessage.noTokensFoundError.desc);
    };
    /**
     * Creates an error in cache parsing.
     */
    ClientAuthError.createCacheParseError = function (cacheKey) {
        return new ClientAuthError(ClientAuthErrorMessage.cacheParseError.code, ClientAuthErrorMessage.cacheParseError.desc + " Cache key: " + cacheKey);
    };
    /**
     * Throws error when renewing token without login.
     */
    ClientAuthError.createUserLoginRequiredError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.userLoginRequiredError.code, ClientAuthErrorMessage.userLoginRequiredError.desc);
    };
    /**
     * Throws error when multiple tokens are in cache for the given scope.
     * @param scope
     */
    ClientAuthError.createMultipleMatchingTokensInCacheError = function (scope) {
        return new ClientAuthError(ClientAuthErrorMessage.multipleMatchingTokens.code, "Cache error for scope " + scope + ": " + ClientAuthErrorMessage.multipleMatchingTokens.desc + ".");
    };
    /**
     * Throws error when multiple tokens are in cache for the given scope.
     * @param scope
     */
    ClientAuthError.createMultipleMatchingAccountsInCacheError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.multipleMatchingAccounts.code, ClientAuthErrorMessage.multipleMatchingAccounts.desc);
    };
    /**
     * Throws error when no auth code or refresh token is given to ServerTokenRequestParameters.
     */
    ClientAuthError.createTokenRequestCannotBeMadeError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.tokenRequestCannotBeMade.code, ClientAuthErrorMessage.tokenRequestCannotBeMade.desc);
    };
    /**
     * Throws error when attempting to append a null, undefined or empty scope to a set
     * @param givenScope
     */
    ClientAuthError.createAppendEmptyScopeToSetError = function (givenScope) {
        return new ClientAuthError(ClientAuthErrorMessage.appendEmptyScopeError.code, ClientAuthErrorMessage.appendEmptyScopeError.desc + " Given Scope: " + givenScope);
    };
    /**
     * Throws error when attempting to append a null, undefined or empty scope to a set
     * @param givenScope
     */
    ClientAuthError.createRemoveEmptyScopeFromSetError = function (givenScope) {
        return new ClientAuthError(ClientAuthErrorMessage.removeEmptyScopeError.code, ClientAuthErrorMessage.removeEmptyScopeError.desc + " Given Scope: " + givenScope);
    };
    /**
     * Throws error when attempting to append null or empty ScopeSet.
     * @param appendError
     */
    ClientAuthError.createAppendScopeSetError = function (appendError) {
        return new ClientAuthError(ClientAuthErrorMessage.appendScopeSetError.code, ClientAuthErrorMessage.appendScopeSetError.desc + " Detail Error: " + appendError);
    };
    /**
     * Throws error if ScopeSet is null or undefined.
     * @param givenScopeSet
     */
    ClientAuthError.createEmptyInputScopeSetError = function (givenScopeSet) {
        return new ClientAuthError(ClientAuthErrorMessage.emptyInputScopeSetError.code, ClientAuthErrorMessage.emptyInputScopeSetError.desc + " Given ScopeSet: " + givenScopeSet);
    };
    /**
     * Throws error if user sets CancellationToken.cancel = true during polling of token endpoint during device code flow
     */
    ClientAuthError.createDeviceCodeCancelledError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.DeviceCodePollingCancelled.code, "" + ClientAuthErrorMessage.DeviceCodePollingCancelled.desc);
    };
    /**
     * Throws error if device code is expired
     */
    ClientAuthError.createDeviceCodeExpiredError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.DeviceCodeExpired.code, "" + ClientAuthErrorMessage.DeviceCodeExpired.desc);
    };
    /**
     * Throws error when silent requests are made without an account object
     */
    ClientAuthError.createNoAccountInSilentRequestError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.NoAccountInSilentRequest.code, "" + ClientAuthErrorMessage.NoAccountInSilentRequest.desc);
    };
    /**
     * Throws error when cache record is null or undefined.
     */
    ClientAuthError.createNullOrUndefinedCacheRecord = function () {
        return new ClientAuthError(ClientAuthErrorMessage.invalidCacheRecord.code, ClientAuthErrorMessage.invalidCacheRecord.desc);
    };
    /**
     * Throws error when provided environment is not part of the CloudDiscoveryMetadata object
     */
    ClientAuthError.createInvalidCacheEnvironmentError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.invalidCacheEnvironment.code, ClientAuthErrorMessage.invalidCacheEnvironment.desc);
    };
    /**
     * Throws error when account is not found in cache.
     */
    ClientAuthError.createNoAccountFoundError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.noAccountFound.code, ClientAuthErrorMessage.noAccountFound.desc);
    };
    /**
     * Throws error if ICachePlugin not set on CacheManager.
     */
    ClientAuthError.createCachePluginError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.CachePluginError.code, "" + ClientAuthErrorMessage.CachePluginError.desc);
    };
    /**
     * Throws error if crypto object not found.
     * @param operationName
     */
    ClientAuthError.createNoCryptoObjectError = function (operationName) {
        return new ClientAuthError(ClientAuthErrorMessage.noCryptoObj.code, "" + ClientAuthErrorMessage.noCryptoObj.desc + operationName);
    };
    /**
    * Throws error if cache type is invalid.
    */
    ClientAuthError.createInvalidCacheTypeError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.invalidCacheType.code, "" + ClientAuthErrorMessage.invalidCacheType.desc);
    };
    /**
    * Throws error if unexpected account type.
    */
    ClientAuthError.createUnexpectedAccountTypeError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.unexpectedAccountType.code, "" + ClientAuthErrorMessage.unexpectedAccountType.desc);
    };
    /**
    * Throws error if unexpected credential type.
    */
    ClientAuthError.createUnexpectedCredentialTypeError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.unexpectedCredentialType.code, "" + ClientAuthErrorMessage.unexpectedCredentialType.desc);
    };
    return ClientAuthError;
}(AuthError));
//# sourceMappingURL=ClientAuthError.js.map

/**
 * @hidden
 */
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    /**
     * decode a JWT
     *
     * @param jwtToken
     */
    StringUtils.decodeJwt = function (jwtToken) {
        if (StringUtils.isEmpty(jwtToken)) {
            throw ClientAuthError.createIdTokenNullOrEmptyError(jwtToken);
        }
        var idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
        var matches = idTokenPartsRegex.exec(jwtToken);
        if (!matches || matches.length < 4) {
            throw ClientAuthError.createIdTokenParsingError("Given token is malformed: " + JSON.stringify(jwtToken));
        }
        var crackedToken = {
            header: matches[1],
            JWSPayload: matches[2],
            JWSSig: matches[3]
        };
        return crackedToken;
    };
    /**
     * Check if a string is empty.
     *
     * @param str
     */
    StringUtils.isEmpty = function (str) {
        return (typeof str === "undefined" || !str || 0 === str.length);
    };
    /**
     * Parses string into an object.
     *
     * @param query
     */
    StringUtils.queryStringToObject = function (query) {
        var match; // Regex for replacing addition symbol with a space
        var pl = /\+/g;
        var search = /([^&=]+)=([^&]*)/g;
        var decode = function (s) { return decodeURIComponent(decodeURIComponent(s.replace(pl, " "))); };
        var obj = {};
        match = search.exec(query);
        while (match) {
            obj[decode(match[1])] = decode(match[2]);
            match = search.exec(query);
        }
        return obj;
    };
    /**
     * Trims entries and converts them to lower case.
     *
     * @param arr
     */
    StringUtils.trimAndConvertArrayEntriesToLowerCase = function (arr) {
        return arr.map(function (entry) { return entry.trim().toLowerCase(); });
    };
    /**
     * Removes empty strings from array
     * @param arr
     */
    StringUtils.removeEmptyStringsFromArray = function (arr) {
        return arr.filter(function (entry) {
            return !StringUtils.isEmpty(entry);
        });
    };
    return StringUtils;
}());
//# sourceMappingURL=StringUtils.js.map

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
(function (LogLevel) {
    LogLevel[LogLevel["Error"] = 0] = "Error";
    LogLevel[LogLevel["Warning"] = 1] = "Warning";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
})(exports.LogLevel || (exports.LogLevel = {}));
/**
 * Class which facilitates logging of messages to a specific place.
 */
var Logger = /** @class */ (function () {
    function Logger(loggerOptions) {
        // Current log level, defaults to info.
        this.level = exports.LogLevel.Info;
        if (loggerOptions) {
            this.localCallback = loggerOptions.loggerCallback;
            this.piiLoggingEnabled = loggerOptions.piiLoggingEnabled;
            this.level = loggerOptions.logLevel;
        }
    }
    /**
     * Log message with required options.
     */
    Logger.prototype.logMessage = function (logMessage, options) {
        if ((options.logLevel > this.level) || (!this.piiLoggingEnabled && options.containsPii)) {
            return;
        }
        var timestamp = new Date().toUTCString();
        var logHeader = StringUtils.isEmpty(this.correlationId) ? "[" + timestamp + "] : " : "[" + timestamp + "] : [" + this.correlationId + "]";
        var log = logHeader + " : " + pkg.version + " : " + exports.LogLevel[options.logLevel] + " - " + logMessage;
        // debug(`msal:${LogLevel[options.logLevel]}${options.containsPii ? "-Pii": ""}${options.context ? `:${options.context}` : ""}`)(logMessage);
        this.executeCallback(options.logLevel, log, options.containsPii);
    };
    /**
     * Execute callback with message.
     */
    Logger.prototype.executeCallback = function (level, message, containsPii) {
        if (this.localCallback) {
            this.localCallback(level, message, containsPii);
        }
    };
    /**
     * Logs error messages.
     */
    Logger.prototype.error = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: exports.LogLevel.Error,
            containsPii: false,
            correlationId: correlationId || ""
        });
    };
    /**
     * Logs error messages with PII.
     */
    Logger.prototype.errorPii = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: exports.LogLevel.Error,
            containsPii: true,
            correlationId: correlationId || ""
        });
    };
    /**
     * Logs warning messages.
     */
    Logger.prototype.warning = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: exports.LogLevel.Warning,
            containsPii: false,
            correlationId: correlationId || ""
        });
    };
    /**
     * Logs warning messages with PII.
     */
    Logger.prototype.warningPii = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: exports.LogLevel.Warning,
            containsPii: true,
            correlationId: correlationId || ""
        });
    };
    /**
     * Logs info messages.
     */
    Logger.prototype.info = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: exports.LogLevel.Info,
            containsPii: false,
            correlationId: correlationId || ""
        });
    };
    /**
     * Logs info messages with PII.
     */
    Logger.prototype.infoPii = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: exports.LogLevel.Info,
            containsPii: true,
            correlationId: correlationId || ""
        });
    };
    /**
     * Logs verbose messages.
     */
    Logger.prototype.verbose = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: exports.LogLevel.Verbose,
            containsPii: false,
            correlationId: correlationId || ""
        });
    };
    /**
     * Logs verbose messages with PII.
     */
    Logger.prototype.verbosePii = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: exports.LogLevel.Verbose,
            containsPii: true,
            correlationId: correlationId || ""
        });
    };
    /**
     * Returns whether PII Logging is enabled or not.
     */
    Logger.prototype.isPiiLoggingEnabled = function () {
        return this.piiLoggingEnabled || false;
    };
    return Logger;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var Constants = {
    LIBRARY_NAME: "MSAL.JS",
    SKU: "msal.js.common",
    // Prefix for all library cache entries
    CACHE_PREFIX: "msal",
    // default authority
    DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
    DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
    // ADFS String
    ADFS: "adfs",
    // Default AAD Instance Discovery Endpoint
    AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
    // Resource delimiter - used for certain cache entries
    RESOURCE_DELIM: "|",
    // Placeholder for non-existent account ids/objects
    NO_ACCOUNT: "NO_ACCOUNT",
    // Claims
    CLAIMS: "claims",
    // Consumer UTID
    CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
    // Default scopes
    OPENID_SCOPE: "openid",
    PROFILE_SCOPE: "profile",
    OFFLINE_ACCESS_SCOPE: "offline_access",
    // Default response type for authorization code flow
    CODE_RESPONSE_TYPE: "code",
    CODE_GRANT_TYPE: "authorization_code",
    RT_GRANT_TYPE: "refresh_token",
    FRAGMENT_RESPONSE_MODE: "fragment",
    S256_CODE_CHALLENGE_METHOD: "S256",
    URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
    AUTHORIZATION_PENDING: "authorization_pending",
    NOT_DEFINED: "not_defined"
};
/**
 * Request header names
 */
var HeaderNames;
(function (HeaderNames) {
    HeaderNames["CONTENT_TYPE"] = "Content-Type";
})(HeaderNames || (HeaderNames = {}));
(function (PersistentCacheKeys) {
    PersistentCacheKeys["ID_TOKEN"] = "idtoken";
    PersistentCacheKeys["CLIENT_INFO"] = "client.info";
    PersistentCacheKeys["ADAL_ID_TOKEN"] = "adal.idtoken";
    PersistentCacheKeys["ERROR"] = "error";
    PersistentCacheKeys["ERROR_DESC"] = "error.description";
})(exports.PersistentCacheKeys || (exports.PersistentCacheKeys = {}));
/**
 * String constants related to AAD Authority
 */
var AADAuthorityConstants;
(function (AADAuthorityConstants) {
    AADAuthorityConstants["COMMON"] = "common";
    AADAuthorityConstants["ORGANIZATIONS"] = "organizations";
    AADAuthorityConstants["CONSUMERS"] = "consumers";
})(AADAuthorityConstants || (AADAuthorityConstants = {}));
/**
 * Keys in the hashParams sent by AAD Server
 */
var AADServerParamKeys;
(function (AADServerParamKeys) {
    AADServerParamKeys["CLIENT_ID"] = "client_id";
    AADServerParamKeys["REDIRECT_URI"] = "redirect_uri";
    AADServerParamKeys["RESPONSE_TYPE"] = "response_type";
    AADServerParamKeys["RESPONSE_MODE"] = "response_mode";
    AADServerParamKeys["GRANT_TYPE"] = "grant_type";
    AADServerParamKeys["CLAIMS"] = "claims";
    AADServerParamKeys["SCOPE"] = "scope";
    AADServerParamKeys["ERROR"] = "error";
    AADServerParamKeys["ERROR_DESCRIPTION"] = "error_description";
    AADServerParamKeys["ACCESS_TOKEN"] = "access_token";
    AADServerParamKeys["ID_TOKEN"] = "id_token";
    AADServerParamKeys["REFRESH_TOKEN"] = "refresh_token";
    AADServerParamKeys["EXPIRES_IN"] = "expires_in";
    AADServerParamKeys["STATE"] = "state";
    AADServerParamKeys["NONCE"] = "nonce";
    AADServerParamKeys["PROMPT"] = "prompt";
    AADServerParamKeys["SESSION_STATE"] = "session_state";
    AADServerParamKeys["CLIENT_INFO"] = "client_info";
    AADServerParamKeys["CODE"] = "code";
    AADServerParamKeys["CODE_CHALLENGE"] = "code_challenge";
    AADServerParamKeys["CODE_CHALLENGE_METHOD"] = "code_challenge_method";
    AADServerParamKeys["CODE_VERIFIER"] = "code_verifier";
    AADServerParamKeys["CLIENT_REQUEST_ID"] = "client-request-id";
    AADServerParamKeys["X_CLIENT_SKU"] = "x-client-SKU";
    AADServerParamKeys["X_CLIENT_VER"] = "x-client-VER";
    AADServerParamKeys["X_CLIENT_OS"] = "x-client-OS";
    AADServerParamKeys["X_CLIENT_CPU"] = "x-client-CPU";
    AADServerParamKeys["POST_LOGOUT_URI"] = "post_logout_redirect_uri";
    AADServerParamKeys["DEVICE_CODE"] = "device_code";
})(AADServerParamKeys || (AADServerParamKeys = {}));
/**
 * IdToken claim string constants
 */
var IdTokenClaimName;
(function (IdTokenClaimName) {
    IdTokenClaimName["ISSUER"] = "iss";
    IdTokenClaimName["OBJID"] = "oid";
    IdTokenClaimName["SUBJECT"] = "sub";
    IdTokenClaimName["TENANTID"] = "tid";
    IdTokenClaimName["VERSION"] = "ver";
    IdTokenClaimName["PREF_USERNAME"] = "preferred_username";
    IdTokenClaimName["NAME"] = "name";
    IdTokenClaimName["NONCE"] = "nonce";
    IdTokenClaimName["EXPIRATION"] = "exp";
    IdTokenClaimName["HOME_OBJID"] = "home_oid";
    IdTokenClaimName["SESSIONID"] = "sid";
    IdTokenClaimName["CLOUD_INSTANCE_HOSTNAME"] = "cloud_instance_host_name";
})(IdTokenClaimName || (IdTokenClaimName = {}));
/**
 * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
 * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
 * internal partners too, hence the choice of generic "string" type instead of the "enum"
 */
var PromptValue = {
    LOGIN: "login",
    SELECT_ACCOUNT: "select_account",
    CONSENT: "consent",
    NONE: "none",
};
/**
 * SSO Types - generated to populate hints
 */
var SSOTypes;
(function (SSOTypes) {
    SSOTypes["ACCOUNT"] = "account";
    SSOTypes["SID"] = "sid";
    SSOTypes["LOGIN_HINT"] = "login_hint";
    SSOTypes["ID_TOKEN"] = "id_token";
    SSOTypes["DOMAIN_HINT"] = "domain_hint";
    SSOTypes["ORGANIZATIONS"] = "organizations";
    SSOTypes["CONSUMERS"] = "consumers";
    SSOTypes["ACCOUNT_ID"] = "accountIdentifier";
    SSOTypes["HOMEACCOUNT_ID"] = "homeAccountIdentifier";
})(SSOTypes || (SSOTypes = {}));
/**
 * Disallowed extra query parameters.
 */
var BlacklistedEQParams = [
    SSOTypes.SID,
    SSOTypes.LOGIN_HINT
];
/**
 * allowed values for codeVerifier
 */
var CodeChallengeMethodValues = {
    PLAIN: "plain",
    S256: "S256"
};
(function (ResponseMode) {
    ResponseMode["QUERY"] = "query";
    ResponseMode["FRAGMENT"] = "fragment";
    ResponseMode["FORM_POST"] = "form_post";
})(exports.ResponseMode || (exports.ResponseMode = {}));
/**
 * allowed grant_type
 */
var GrantType;
(function (GrantType) {
    GrantType["IMPLICIT_GRANT"] = "implicit";
    GrantType["AUTHORIZATION_CODE_GRANT"] = "authorization_code";
    GrantType["CLIENT_CREDENTIALS_GRANT"] = "client_credentials";
    GrantType["RESOURCE_OWNER_PASSWORD_GRANT"] = "password";
    GrantType["REFRESH_TOKEN_GRANT"] = "refresh_token";
    GrantType["DEVICE_CODE_GRANT"] = "device_code";
})(GrantType || (GrantType = {}));
/**
 * Account types in Cache
 */
var CacheAccountType;
(function (CacheAccountType) {
    CacheAccountType["MSSTS_ACCOUNT_TYPE"] = "MSSTS";
    CacheAccountType["ADFS_ACCOUNT_TYPE"] = "ADFS";
    CacheAccountType["MSAV1_ACCOUNT_TYPE"] = "MSA";
    CacheAccountType["GENERIC_ACCOUNT_TYPE"] = "Generic"; // NTLM, Kerberos, FBA, Basic etc
})(CacheAccountType || (CacheAccountType = {}));
/**
 * Separators used in cache
 */
var Separators;
(function (Separators) {
    Separators["CACHE_KEY_SEPARATOR"] = "-";
    Separators["CLIENT_INFO_SEPARATOR"] = ".";
})(Separators || (Separators = {}));
(function (CredentialType) {
    CredentialType["ID_TOKEN"] = "IdToken";
    CredentialType["ACCESS_TOKEN"] = "AccessToken";
    CredentialType["REFRESH_TOKEN"] = "RefreshToken";
})(exports.CredentialType || (exports.CredentialType = {}));
(function (CacheSchemaType) {
    CacheSchemaType["ACCOUNT"] = "Account";
    CacheSchemaType["CREDENTIAL"] = "Credential";
    CacheSchemaType["APP_META_DATA"] = "AppMetadata";
    CacheSchemaType["TEMPORARY"] = "TempCache";
})(exports.CacheSchemaType || (exports.CacheSchemaType = {}));
/**
 * Combine all cache types
 */
var CacheType;
(function (CacheType) {
    CacheType[CacheType["ADFS"] = 1001] = "ADFS";
    CacheType[CacheType["MSA"] = 1002] = "MSA";
    CacheType[CacheType["MSSTS"] = 1003] = "MSSTS";
    CacheType[CacheType["GENERIC"] = 1004] = "GENERIC";
    CacheType[CacheType["ACCESS_TOKEN"] = 2001] = "ACCESS_TOKEN";
    CacheType[CacheType["REFRESH_TOKEN"] = 2002] = "REFRESH_TOKEN";
    CacheType[CacheType["ID_TOKEN"] = 2003] = "ID_TOKEN";
    CacheType[CacheType["APP_META_DATA"] = 3001] = "APP_META_DATA";
})(CacheType || (CacheType = {}));
/**
 * More Cache related constants
 */
var APP_META_DATA = "appmetadata";
var ClientInfo = "client_info";
//# sourceMappingURL=Constants.js.map

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Base type for credentials to be stored in the cache: eg: ACCESS_TOKEN, ID_TOKEN etc
 *
 * Key:Value Schema:
 *
 * Key: <home_account_id*>-<environment>-<credential_type>-<client_id>-<realm*>-<target*>
 *
 * Value Schema:
 * {
 *      homeAccountId: home account identifier for the auth scheme,
 *      environment: entity that issued the token, represented as a full host
 *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
 *      clientId: client ID of the application
 *      secret: Actual credential as a string
 *      familyId: Family ID identifier, usually only used for refresh tokens
 *      realm: Full tenant or organizational identifier that the account belongs to
 *      target: Permissions that are included in the token, or for refresh tokens, the resource identifier.
 * }
 */
var CredentialEntity = /** @class */ (function () {
    function CredentialEntity() {
    }
    /**
     * Generate Account Id key component as per the schema: <home_account_id>-<environment>
     */
    CredentialEntity.prototype.generateAccountId = function () {
        return CredentialEntity.generateAccountIdForCacheKey(this.homeAccountId, this.environment);
    };
    /**
     * Generate Credential Id key component as per the schema: <credential_type>-<client_id>-<realm>
     */
    CredentialEntity.prototype.generateCredentialId = function () {
        return CredentialEntity.generateCredentialIdForCacheKey(this.credentialType, this.clientId, this.realm, this.familyId);
    };
    /**
     * Generate target key component as per schema: <target>
     */
    CredentialEntity.prototype.generateTarget = function () {
        return CredentialEntity.generateTargetForCacheKey(this.target);
    };
    /**
     * generates credential key
     */
    CredentialEntity.prototype.generateCredentialKey = function () {
        return CredentialEntity.generateCredentialCacheKey(this.homeAccountId, this.environment, this.credentialType, this.clientId, this.realm, this.target, this.familyId);
    };
    /**
     * returns the type of the cache (in this case credential)
     */
    CredentialEntity.prototype.generateType = function () {
        switch (this.credentialType) {
            case exports.CredentialType.ID_TOKEN:
                return CacheType.ID_TOKEN;
            case exports.CredentialType.ACCESS_TOKEN:
                return CacheType.ACCESS_TOKEN;
            case exports.CredentialType.REFRESH_TOKEN:
                return CacheType.REFRESH_TOKEN;
            default: {
                throw ClientAuthError.createUnexpectedCredentialTypeError();
            }
        }
    };
    /**
     * helper function to return `CredentialType`
     * @param key
     */
    CredentialEntity.getCredentialType = function (key) {
        if (key.indexOf(exports.CredentialType.ACCESS_TOKEN.toLowerCase()) !== -1) {
            return exports.CredentialType.ACCESS_TOKEN;
        }
        else if (key.indexOf(exports.CredentialType.ID_TOKEN.toLowerCase()) !== -1) {
            return exports.CredentialType.ID_TOKEN;
        }
        else if (key.indexOf(exports.CredentialType.REFRESH_TOKEN.toLowerCase()) !== -1) {
            return exports.CredentialType.REFRESH_TOKEN;
        }
        return Constants.NOT_DEFINED;
    };
    /**
     * generates credential key
     */
    CredentialEntity.generateCredentialCacheKey = function (homeAccountId, environment, credentialType, clientId, realm, target, familyId) {
        var credentialKey = [
            this.generateAccountIdForCacheKey(homeAccountId, environment),
            this.generateCredentialIdForCacheKey(credentialType, clientId, realm, familyId),
            this.generateTargetForCacheKey(target),
        ];
        return credentialKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * generates Account Id for keys
     * @param homeAccountId
     * @param environment
     */
    CredentialEntity.generateAccountIdForCacheKey = function (homeAccountId, environment) {
        var accountId = [homeAccountId, environment];
        return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * Generates Credential Id for keys
     * @param credentialType
     * @param realm
     * @param clientId
     * @param familyId
     */
    CredentialEntity.generateCredentialIdForCacheKey = function (credentialType, clientId, realm, familyId) {
        var clientOrFamilyId = credentialType === exports.CredentialType.REFRESH_TOKEN
            ? familyId || clientId
            : clientId;
        var credentialId = [
            credentialType,
            clientOrFamilyId,
            realm || "",
        ];
        return credentialId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * Generate target key component as per schema: <target>
     */
    CredentialEntity.generateTargetForCacheKey = function (scopes) {
        return (scopes || "").toLowerCase();
    };
    return CredentialEntity;
}());
//# sourceMappingURL=CredentialEntity.js.map

/**
 * ClientConfigurationErrorMessage class containing string constants used by error codes and messages.
 */
var ClientConfigurationErrorMessage = {
    redirectUriNotSet: {
        code: "redirect_uri_empty",
        desc: "A redirect URI is required for all calls, and none has been set."
    },
    postLogoutUriNotSet: {
        code: "post_logout_uri_empty",
        desc: "A post logout redirect has not been set."
    },
    claimsRequestParsingError: {
        code: "claims_request_parsing_error",
        desc: "Could not parse the given claims request object."
    },
    authorityUriInsecure: {
        code: "authority_uri_insecure",
        desc: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options"
    },
    urlParseError: {
        code: "url_parse_error",
        desc: "URL could not be parsed into appropriate segments."
    },
    urlEmptyError: {
        code: "empty_url_error",
        desc: "URL was empty or null."
    },
    emptyScopesError: {
        code: "empty_input_scopes_error",
        desc: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token."
    },
    nonArrayScopesError: {
        code: "nonarray_input_scopes_error",
        desc: "Scopes cannot be passed as non-array."
    },
    clientIdSingleScopeError: {
        code: "clientid_input_scopes_error",
        desc: "Client ID can only be provided as a single scope."
    },
    invalidPrompt: {
        code: "invalid_prompt_value",
        desc: "Supported prompt values are 'login', 'select_account', 'consent' and 'none'.  Please see here for valid configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options",
    },
    tokenRequestEmptyError: {
        code: "token_request_empty",
        desc: "Token request was empty and not found in cache."
    },
    logoutRequestEmptyError: {
        code: "logout_request_empty",
        desc: "The logout request was null or undefined."
    },
    invalidCodeChallengeMethod: {
        code: "invalid_code_challenge_method",
        desc: "code_challenge_method passed is invalid. Valid values are \"plain\" and \"S256\"."
    },
    invalidCodeChallengeParams: {
        code: "pkce_params_missing",
        desc: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request"
    },
    knownAuthoritiesAndCloudDiscoveryMetadata: {
        code: "invalid_known_authorities",
        desc: "knownAuthorities and cloudDiscoveryMetadata cannot both be provided. Please provide cloudDiscoveryMetadata object for AAD, knownAuthorities otherwise."
    },
    invalidCloudDiscoveryMetadata: {
        code: "invalid_cloud_discovery_metadata",
        desc: "Invalid cloudDiscoveryMetadata provided. Must be a JSON object containing tenant_discovery_endpoint and metadata fields"
    },
    untrustedAuthority: {
        code: "untrusted_authority",
        desc: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter."
    }
};
/**
 * Error thrown when there is an error in configuration of the MSAL.js library.
 */
var ClientConfigurationError = /** @class */ (function (_super) {
    __extends(ClientConfigurationError, _super);
    function ClientConfigurationError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientConfigurationError";
        Object.setPrototypeOf(_this, ClientConfigurationError.prototype);
        return _this;
    }
    /**
     * Creates an error thrown when the redirect uri is empty (not set by caller)
     */
    ClientConfigurationError.createRedirectUriEmptyError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.redirectUriNotSet.code, ClientConfigurationErrorMessage.redirectUriNotSet.desc);
    };
    /**
     * Creates an error thrown when the post-logout redirect uri is empty (not set by caller)
     */
    ClientConfigurationError.createPostLogoutRedirectUriEmptyError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.postLogoutUriNotSet.code, ClientConfigurationErrorMessage.postLogoutUriNotSet.desc);
    };
    /**
     * Creates an error thrown when the claims request could not be successfully parsed
     */
    ClientConfigurationError.createClaimsRequestParsingError = function (claimsRequestParseError) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.claimsRequestParsingError.code, ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
    };
    /**
     * Creates an error thrown if authority uri is given an insecure protocol.
     * @param urlString
     */
    ClientConfigurationError.createInsecureAuthorityUriError = function (urlString) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.authorityUriInsecure.code, ClientConfigurationErrorMessage.authorityUriInsecure.desc + " Given URI: " + urlString);
    };
    /**
     * Creates an error thrown if URL string does not parse into separate segments.
     * @param urlString
     */
    ClientConfigurationError.createUrlParseError = function (urlParseError) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.urlParseError.code, ClientConfigurationErrorMessage.urlParseError.desc + " Given Error: " + urlParseError);
    };
    /**
     * Creates an error thrown if URL string is empty or null.
     * @param urlString
     */
    ClientConfigurationError.createUrlEmptyError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.urlEmptyError.code, ClientConfigurationErrorMessage.urlEmptyError.desc);
    };
    /**
     * Error thrown when scopes are not an array
     * @param inputScopes
     */
    ClientConfigurationError.createScopesNonArrayError = function (inputScopes) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.nonArrayScopesError.code, ClientConfigurationErrorMessage.nonArrayScopesError.desc + " Given Scopes: " + inputScopes);
    };
    /**
     * Error thrown when scopes are empty.
     * @param scopesValue
     */
    ClientConfigurationError.createEmptyScopesArrayError = function (inputScopes) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.emptyScopesError.code, ClientConfigurationErrorMessage.emptyScopesError.desc + " Given Scopes: " + inputScopes);
    };
    /**
     * Error thrown when client id scope is not provided as single scope.
     * @param inputScopes
     */
    ClientConfigurationError.createClientIdSingleScopeError = function (inputScopes) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.clientIdSingleScopeError.code, ClientConfigurationErrorMessage.clientIdSingleScopeError.desc + " Given Scopes: " + inputScopes);
    };
    /**
     * Error thrown when prompt is not an allowed type.
     * @param promptValue
     */
    ClientConfigurationError.createInvalidPromptError = function (promptValue) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidPrompt.code, ClientConfigurationErrorMessage.invalidPrompt.desc + " Given value: " + promptValue);
    };
    /**
     * Throws error when token request is empty and nothing cached in storage.
     */
    ClientConfigurationError.createEmptyLogoutRequestError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.logoutRequestEmptyError.code, ClientConfigurationErrorMessage.logoutRequestEmptyError.desc);
    };
    /**
     * Throws error when token request is empty and nothing cached in storage.
     */
    ClientConfigurationError.createEmptyTokenRequestError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.tokenRequestEmptyError.code, ClientConfigurationErrorMessage.tokenRequestEmptyError.desc);
    };
    /**
     * Throws error when an invalid code_challenge_method is passed by the user
     */
    ClientConfigurationError.createInvalidCodeChallengeMethodError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCodeChallengeMethod.code, ClientConfigurationErrorMessage.invalidCodeChallengeMethod.desc);
    };
    /**
     * Throws error when both params: code_challenge and code_challenge_method are not passed together
     */
    ClientConfigurationError.createInvalidCodeChallengeParamsError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCodeChallengeParams.code, ClientConfigurationErrorMessage.invalidCodeChallengeParams.desc);
    };
    /**
     * Throws an error when the user passes both knownAuthorities and cloudDiscoveryMetadata
     */
    ClientConfigurationError.createKnownAuthoritiesCloudDiscoveryMetadataError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.knownAuthoritiesAndCloudDiscoveryMetadata.code, ClientConfigurationErrorMessage.knownAuthoritiesAndCloudDiscoveryMetadata.desc);
    };
    /**
     * Throws an error when the user passes invalid cloudDiscoveryMetadata
     */
    ClientConfigurationError.createInvalidCloudDiscoveryMetadataError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCloudDiscoveryMetadata.code, ClientConfigurationErrorMessage.invalidCloudDiscoveryMetadata.desc);
    };
    /**
     * Throws error when provided authority is not a member of the trusted host list
     */
    ClientConfigurationError.createUntrustedAuthorityError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.untrustedAuthority.code, ClientConfigurationErrorMessage.untrustedAuthority.desc);
    };
    return ClientConfigurationError;
}(ClientAuthError));
//# sourceMappingURL=ClientConfigurationError.js.map

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * The ScopeSet class creates a set of scopes. Scopes are case-insensitive, unique values, so the Set object in JS makes
 * the most sense to implement for this class. All scopes are trimmed and converted to lower case strings to ensure uniqueness of strings.
 */
var ScopeSet = /** @class */ (function () {
    function ScopeSet(inputScopes) {
        // Filter empty string and null/undefined array items
        var scopeArr = inputScopes ? StringUtils.trimAndConvertArrayEntriesToLowerCase(__spreadArrays(inputScopes)) : [];
        var filteredInput = scopeArr ? StringUtils.removeEmptyStringsFromArray(scopeArr) : [];
        // Validate and filter scopes (validate function throws if validation fails)
        this.validateInputScopes(filteredInput);
        this.scopes = new Set(filteredInput);
    }
    /**
     * Factory method to create ScopeSet from space-delimited string
     * @param inputScopeString
     * @param appClientId
     * @param scopesRequired
    */
    ScopeSet.fromString = function (inputScopeString) {
        inputScopeString = inputScopeString || "";
        var inputScopes = inputScopeString.split(" ");
        return new ScopeSet(inputScopes);
    };
    /**
     * Used to validate the scopes input parameter requested  by the developer.
     * @param {Array<string>} inputScopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
    */
    ScopeSet.prototype.validateInputScopes = function (inputScopes) {
        // Check if scopes are required but not given or is an empty array
        if (!inputScopes || inputScopes.length < 1) {
            throw ClientConfigurationError.createEmptyScopesArrayError(inputScopes);
        }
    };
    /**
     * Check if a given scope is present in this set of scopes.
     * @param scope
     */
    ScopeSet.prototype.containsScope = function (scope) {
        return !StringUtils.isEmpty(scope) ? this.scopes.has(scope) : false;
    };
    /**
     * Check if a set of scopes is present in this set of scopes.
     * @param scopeSet
     */
    ScopeSet.prototype.containsScopeSet = function (scopeSet) {
        var _this = this;
        if (!scopeSet) {
            return false;
        }
        return (this.scopes.size >= scopeSet.scopes.size && scopeSet.asArray().every(function (scope) { return _this.containsScope(scope); }));
    };
    /**
     * Appends single scope if passed
     * @param newScope
     */
    ScopeSet.prototype.appendScope = function (newScope) {
        if (!StringUtils.isEmpty(newScope)) {
            this.scopes.add(newScope.trim().toLowerCase());
        }
    };
    /**
     * Appends multiple scopes if passed
     * @param newScopes
     */
    ScopeSet.prototype.appendScopes = function (newScopes) {
        var _this = this;
        try {
            newScopes.forEach(function (newScope) { return _this.appendScope(newScope); });
        }
        catch (e) {
            throw ClientAuthError.createAppendScopeSetError(e);
        }
    };
    /**
     * Removes element from set of scopes.
     * @param scope
     */
    ScopeSet.prototype.removeScope = function (scope) {
        if (StringUtils.isEmpty(scope)) {
            throw ClientAuthError.createRemoveEmptyScopeFromSetError(scope);
        }
        this.scopes.delete(scope.trim().toLowerCase());
    };
    /**
     * Combines an array of scopes with the current set of scopes.
     * @param otherScopes
     */
    ScopeSet.prototype.unionScopeSets = function (otherScopes) {
        if (!otherScopes) {
            throw ClientAuthError.createEmptyInputScopeSetError(otherScopes);
        }
        return new Set(__spreadArrays(otherScopes.asArray(), Array.from(this.scopes)));
    };
    /**
     * Check if scopes intersect between this set and another.
     * @param otherScopes
     */
    ScopeSet.prototype.intersectingScopeSets = function (otherScopes) {
        if (!otherScopes) {
            throw ClientAuthError.createEmptyInputScopeSetError(otherScopes);
        }
        var unionScopes = this.unionScopeSets(otherScopes);
        // Do not allow offline_access to be the only intersecting scope
        var sizeOtherScopes = otherScopes.getScopeCount();
        var sizeThisScopes = this.getScopeCount();
        var sizeUnionScopes = unionScopes.size;
        return sizeUnionScopes < (sizeThisScopes + sizeOtherScopes);
    };
    /**
     * Returns size of set of scopes.
     */
    ScopeSet.prototype.getScopeCount = function () {
        return this.scopes.size;
    };
    /**
     * Returns the scopes as an array of string values
     */
    ScopeSet.prototype.asArray = function () {
        return Array.from(this.scopes);
    };
    /**
     * Prints scopes into a space-delimited string
     */
    ScopeSet.prototype.printScopes = function () {
        if (this.scopes) {
            var scopeArr = this.asArray();
            return scopeArr.join(" ");
        }
        return "";
    };
    return ScopeSet;
}());
//# sourceMappingURL=ScopeSet.js.map

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Function to build a client info object
 * @param rawClientInfo
 * @param crypto
 */
function buildClientInfo(rawClientInfo, crypto) {
    if (StringUtils.isEmpty(rawClientInfo)) {
        throw ClientAuthError.createClientInfoEmptyError(rawClientInfo);
    }
    try {
        var decodedClientInfo = crypto.base64Decode(rawClientInfo);
        return JSON.parse(decodedClientInfo);
    }
    catch (e) {
        throw ClientAuthError.createClientInfoDecodingError(e);
    }
}
//# sourceMappingURL=ClientInfo.js.map

var TrustedAuthority = /** @class */ (function () {
    function TrustedAuthority() {
    }
    /**
     * Set the CloudDiscoveryMetadata object from knownAuthorities or cloudDiscoveryMetadata passed into the app config
     * @param knownAuthorities
     * @param cloudDiscoveryMetadata
     */
    TrustedAuthority.setTrustedAuthoritiesFromConfig = function (knownAuthorities, cloudDiscoveryMetadata) {
        if (!this.getTrustedHostList().length) {
            if (knownAuthorities.length > 0 && !StringUtils.isEmpty(cloudDiscoveryMetadata)) {
                throw ClientConfigurationError.createKnownAuthoritiesCloudDiscoveryMetadataError();
            }
            this.createCloudDiscoveryMetadataFromKnownAuthorities(knownAuthorities);
            try {
                if (cloudDiscoveryMetadata) {
                    var parsedMetadata = JSON.parse(cloudDiscoveryMetadata);
                    this.saveCloudDiscoveryMetadata(parsedMetadata.metadata);
                }
            }
            catch (e) {
                throw ClientConfigurationError.createInvalidCloudDiscoveryMetadataError();
            }
        }
    };
    /**
     * Called to get metadata from network if CloudDiscoveryMetadata was not populated by config
     * @param networkInterface
     */
    TrustedAuthority.setTrustedAuthoritiesFromNetwork = function (authorityToVerify, networkInterface) {
        return __awaiter(this, void 0, void 0, function () {
            var instanceDiscoveryEndpoint, response, metadata, e_1, host;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        instanceDiscoveryEndpoint = "" + Constants.AAD_INSTANCE_DISCOVERY_ENDPT + authorityToVerify.urlString + "oauth2/v2.0/authorize";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, networkInterface.sendGetRequestAsync(instanceDiscoveryEndpoint)];
                    case 2:
                        response = _a.sent();
                        metadata = response.body.metadata;
                        this.saveCloudDiscoveryMetadata(metadata);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [2 /*return*/];
                    case 4:
                        host = authorityToVerify.getUrlComponents().HostNameAndPort;
                        if (this.getTrustedHostList().length > 0 && !this.IsInTrustedHostList(host)) {
                            // Custom Domain scenario, host is trusted because Instance Discovery call succeeded 
                            this.createCloudDiscoveryMetadataFromKnownAuthorities([host]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param metadata
     */
    TrustedAuthority.saveCloudDiscoveryMetadata = function (metadata) {
        metadata.forEach(function (entry) {
            var authorities = entry.aliases;
            authorities.forEach(function (authority) {
                TrustedAuthority.TrustedHostList[authority.toLowerCase()] = entry;
            });
        });
    };
    /**
     * Create a generic metadata object for each host passed to knownAuthorities.
     * This is mostly useful for B2C or ADFS scenarios
     * @param knownAuthorities
     */
    TrustedAuthority.createCloudDiscoveryMetadataFromKnownAuthorities = function (knownAuthorities) {
        var _this = this;
        knownAuthorities.forEach(function (authority) {
            _this.TrustedHostList[authority.toLowerCase()] = {
                preferred_cache: authority.toLowerCase(),
                preferred_network: authority.toLowerCase(),
                aliases: [authority.toLowerCase()]
            };
        });
    };
    TrustedAuthority.getTrustedHostList = function () {
        return Object.keys(this.TrustedHostList);
    };
    /**
     * Get metadata for the provided host
     * @param host
     */
    TrustedAuthority.getCloudDiscoveryMetadata = function (host) {
        return this.TrustedHostList[host.toLowerCase()] || null;
    };
    /**
     * Checks to see if the host is in a list of trusted hosts
     * @param host
     */
    TrustedAuthority.IsInTrustedHostList = function (host) {
        return Object.keys(this.TrustedHostList).indexOf(host.toLowerCase()) > -1;
    };
    TrustedAuthority.TrustedHostList = {};
    return TrustedAuthority;
}());
//# sourceMappingURL=TrustedAuthority.js.map

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Type that defines required and optional parameters for an Account field (based on universal cache schema implemented by all MSALs).
 *
 * Key : Value Schema
 *
 * Key: <home_account_id>-<environment>-<realm*>
 *
 * Value Schema:
 * {
 *      homeAccountId: home account identifier for the auth scheme,
 *      environment: entity that issued the token, represented as a full host
 *      realm: Full tenant or organizational identifier that the account belongs to
 *      localAccountId: Original tenant-specific accountID, usually used for legacy cases
 *      username: primary username that represents the user, usually corresponds to preferred_username in the v2 endpt
 *      authorityType: Accounts authority type as a string
 *      name: Full name for the account, including given name and family name,
 *      clientInfo: Full base64 encoded client info received from ESTS
 *      lastModificationTime: last time this entity was modified in the cache
 *      lastModificationApp:
 * }
 */
var AccountEntity = /** @class */ (function () {
    function AccountEntity() {
    }
    /**
     * Generate Account Id key component as per the schema: <home_account_id>-<environment>
     */
    AccountEntity.prototype.generateAccountId = function () {
        var accountId = [this.homeAccountId, this.environment];
        return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * Generate Account Cache Key as per the schema: <home_account_id>-<environment>-<realm*>
     */
    AccountEntity.prototype.generateAccountKey = function () {
        return AccountEntity.generateAccountCacheKey({
            homeAccountId: this.homeAccountId,
            environment: this.environment,
            tenantId: this.realm,
            username: this.username
        });
    };
    /**
     * returns the type of the cache (in this case account)
     */
    AccountEntity.prototype.generateType = function () {
        switch (this.authorityType) {
            case CacheAccountType.ADFS_ACCOUNT_TYPE:
                return CacheType.ADFS;
            case CacheAccountType.MSAV1_ACCOUNT_TYPE:
                return CacheType.MSA;
            case CacheAccountType.MSSTS_ACCOUNT_TYPE:
                return CacheType.MSSTS;
            case CacheAccountType.GENERIC_ACCOUNT_TYPE:
                return CacheType.GENERIC;
            default: {
                throw ClientAuthError.createUnexpectedAccountTypeError();
            }
        }
    };
    /**
     * Returns the AccountInfo interface for this account.
     */
    AccountEntity.prototype.getAccountInfo = function () {
        return {
            homeAccountId: this.homeAccountId,
            environment: this.environment,
            tenantId: this.realm,
            username: this.username
        };
    };
    /**
     * Generates account key from interface
     * @param accountInterface
     */
    AccountEntity.generateAccountCacheKey = function (accountInterface) {
        var accountKey = [
            accountInterface.homeAccountId,
            accountInterface.environment || "",
            accountInterface.tenantId || "",
        ];
        return accountKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * Build Account cache from IdToken, clientInfo and authority/policy
     * @param clientInfo
     * @param authority
     * @param idToken
     * @param policy
     */
    AccountEntity.createAccount = function (clientInfo, authority, idToken, crypto) {
        var account = new AccountEntity();
        account.authorityType = CacheAccountType.MSSTS_ACCOUNT_TYPE;
        account.clientInfo = clientInfo;
        var clientInfoObj = buildClientInfo(clientInfo, crypto);
        account.homeAccountId = "" + clientInfoObj.uid + Separators.CLIENT_INFO_SEPARATOR + clientInfoObj.utid;
        var reqEnvironment = authority.canonicalAuthorityUrlComponents.HostNameAndPort;
        var env = TrustedAuthority.getCloudDiscoveryMetadata(reqEnvironment) ? TrustedAuthority.getCloudDiscoveryMetadata(reqEnvironment).preferred_cache : "";
        if (StringUtils.isEmpty(env)) {
            throw ClientAuthError.createInvalidCacheEnvironmentError();
        }
        account.environment = env;
        account.realm = idToken.claims.tid;
        if (idToken) {
            // How do you account for MSA CID here?
            var localAccountId = !StringUtils.isEmpty(idToken.claims.oid)
                ? idToken.claims.oid
                : idToken.claims.sid;
            account.localAccountId = localAccountId;
            account.username = idToken.claims.preferred_username;
            account.name = idToken.claims.name;
        }
        return account;
    };
    /**
     * Build ADFS account type
     * @param authority
     * @param idToken
     */
    AccountEntity.createADFSAccount = function (authority, idToken) {
        var account = new AccountEntity();
        account.authorityType = CacheAccountType.ADFS_ACCOUNT_TYPE;
        account.homeAccountId = idToken.claims.sub;
        var reqEnvironment = authority.canonicalAuthorityUrlComponents.HostNameAndPort;
        var env = TrustedAuthority.getCloudDiscoveryMetadata(reqEnvironment) ? TrustedAuthority.getCloudDiscoveryMetadata(reqEnvironment).preferred_cache : "";
        if (StringUtils.isEmpty(env)) {
            throw ClientAuthError.createInvalidCacheEnvironmentError();
        }
        account.environment = env;
        account.username = idToken.claims.upn;
        // add uniqueName to claims
        // account.name = idToken.claims.uniqueName;
        return account;
    };
    return AccountEntity;
}());
//# sourceMappingURL=AccountEntity.js.map

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Interface class which implement cache storage functions used by MSAL to perform validity checks, and store tokens.
 */
var CacheManager = /** @class */ (function () {
    function CacheManager() {
    }
    /**
     * Returns all accounts in cache
     */
    CacheManager.prototype.getAllAccounts = function () {
        var currentAccounts = this.getAccountsFilteredBy();
        var accountValues = Object.values(currentAccounts);
        var numAccounts = accountValues.length;
        if (numAccounts < 1) {
            return null;
        }
        else {
            var allAccounts = accountValues.map(function (value) {
                var accountObj = new AccountEntity();
                accountObj = CacheManager.toObject(accountObj, value);
                return accountObj.getAccountInfo();
            });
            return allAccounts;
        }
    };
    /**
     * saves a cache record
     * @param cacheRecord
     */
    CacheManager.prototype.saveCacheRecord = function (cacheRecord) {
        if (!cacheRecord) {
            throw ClientAuthError.createNullOrUndefinedCacheRecord();
        }
        if (!!cacheRecord.account) {
            this.saveAccount(cacheRecord.account);
        }
        if (!!cacheRecord.idToken) {
            this.saveCredential(cacheRecord.idToken);
        }
        if (!!cacheRecord.accessToken) {
            this.saveAccessToken(cacheRecord.accessToken);
        }
        if (!!cacheRecord.refreshToken) {
            this.saveCredential(cacheRecord.refreshToken);
        }
    };
    /**
     * saves account into cache
     * @param account
     */
    CacheManager.prototype.saveAccount = function (account) {
        var key = account.generateAccountKey();
        this.setItem(key, account, exports.CacheSchemaType.ACCOUNT);
    };
    /**
     * saves credential - accessToken, idToken or refreshToken into cache
     * @param credential
     */
    CacheManager.prototype.saveCredential = function (credential) {
        var key = credential.generateCredentialKey();
        this.setItem(key, credential, exports.CacheSchemaType.CREDENTIAL);
    };
    /**
     * saves access token credential
     * @param credential
     */
    CacheManager.prototype.saveAccessToken = function (credential) {
        var _this = this;
        var currentTokenCache = this.getCredentialsFilteredBy({
            clientId: credential.clientId,
            credentialType: exports.CredentialType.ACCESS_TOKEN,
            environment: credential.environment,
            homeAccountId: credential.homeAccountId,
            realm: credential.realm
        });
        var currentScopes = ScopeSet.fromString(credential.target);
        var currentAccessTokens = Object.values(currentTokenCache.accessTokens);
        if (currentAccessTokens) {
            currentAccessTokens.forEach(function (tokenEntity) {
                var tokenScopeSet = ScopeSet.fromString(tokenEntity.target);
                if (tokenScopeSet.intersectingScopeSets(currentScopes)) {
                    _this.removeCredential(tokenEntity);
                }
            });
        }
        this.saveCredential(credential);
    };
    /**
     * Given account key retrieve an account
     * @param key
     */
    CacheManager.prototype.getAccount = function (key) {
        var account = this.getItem(key, exports.CacheSchemaType.ACCOUNT);
        return account;
    };
    /**
     * retrieve a credential - accessToken, idToken or refreshToken; given the cache key
     * @param key
     */
    CacheManager.prototype.getCredential = function (key) {
        return this.getItem(key, exports.CacheSchemaType.CREDENTIAL);
    };
    /**
     * retrieve accounts matching all provided filters; if no filter is set, get all accounts
     * not checking for casing as keys are all generated in lower case, remember to convert to lower case if object properties are compared
     * @param homeAccountId
     * @param environment
     * @param realm
     */
    CacheManager.prototype.getAccountsFilteredBy = function (accountFilter) {
        return this.getAccountsFilteredByInternal(accountFilter ? accountFilter.homeAccountId : "", accountFilter ? accountFilter.environment : "", accountFilter ? accountFilter.realm : "");
    };
    /**
     * retrieve accounts matching all provided filters; if no filter is set, get all accounts
     * not checking for casing as keys are all generated in lower case, remember to convert to lower case if object properties are compared
     * @param homeAccountId
     * @param environment
     * @param realm
     */
    CacheManager.prototype.getAccountsFilteredByInternal = function (homeAccountId, environment, realm) {
        var _this = this;
        var allCacheKeys = this.getKeys();
        var matchingAccounts = {};
        var entity;
        allCacheKeys.forEach(function (cacheKey) {
            var matches = true;
            // don't parse any non-account type cache entities
            if (CredentialEntity.getCredentialType(cacheKey) !== Constants.NOT_DEFINED || _this.isAppMetadata(cacheKey)) {
                return;
            }
            // Attempt retrieval
            try {
                entity = _this.getItem(cacheKey, exports.CacheSchemaType.ACCOUNT);
            }
            catch (e) {
                return;
            }
            if (!StringUtils.isEmpty(homeAccountId)) {
                matches = _this.matchHomeAccountId(entity, homeAccountId);
            }
            if (!StringUtils.isEmpty(environment)) {
                matches = matches && _this.matchEnvironment(entity, environment);
            }
            if (!StringUtils.isEmpty(realm)) {
                matches = matches && _this.matchRealm(entity, realm);
            }
            if (matches) {
                matchingAccounts[cacheKey] = entity;
            }
        });
        return matchingAccounts;
    };
    /**
     * retrieve credentails matching all provided filters; if no filter is set, get all credentials
     * @param homeAccountId
     * @param environment
     * @param credentialType
     * @param clientId
     * @param realm
     * @param target
     */
    CacheManager.prototype.getCredentialsFilteredBy = function (filter) {
        return this.getCredentialsFilteredByInternal(filter.homeAccountId, filter.environment, filter.credentialType, filter.clientId, filter.realm, filter.target);
    };
    /**
     * Support function to help match credentials
     * @param homeAccountId
     * @param environment
     * @param credentialType
     * @param clientId
     * @param realm
     * @param target
     */
    CacheManager.prototype.getCredentialsFilteredByInternal = function (homeAccountId, environment, credentialType, clientId, realm, target) {
        var _this = this;
        var allCacheKeys = this.getKeys();
        var matchingCredentials = {
            idTokens: {},
            accessTokens: {},
            refreshTokens: {}
        };
        allCacheKeys.forEach(function (cacheKey) {
            var matches = true;
            var entity;
            // don't parse any non-credential type cache entities
            var credType = CredentialEntity.getCredentialType(cacheKey);
            if (credType === Constants.NOT_DEFINED) {
                return;
            }
            // Attempt retrieval
            try {
                entity = _this.getItem(cacheKey, exports.CacheSchemaType.CREDENTIAL);
            }
            catch (e) {
                return;
            }
            if (!StringUtils.isEmpty(homeAccountId)) {
                matches = _this.matchHomeAccountId(entity, homeAccountId);
            }
            if (!StringUtils.isEmpty(environment)) {
                matches = matches && _this.matchEnvironment(entity, environment);
            }
            if (!StringUtils.isEmpty(realm)) {
                matches = matches && _this.matchRealm(entity, realm);
            }
            if (!StringUtils.isEmpty(credentialType)) {
                matches = matches && _this.matchCredentialType(entity, credentialType);
            }
            if (!StringUtils.isEmpty(clientId)) {
                matches = matches && _this.matchClientId(entity, clientId);
            }
            // idTokens do not have "target", target specific refreshTokens do exist for some types of authentication
            // TODO: Add case for target specific refresh tokens
            if (!StringUtils.isEmpty(target) && credType === exports.CredentialType.ACCESS_TOKEN) {
                matches = matches && _this.matchTarget(entity, target);
            }
            if (matches) {
                switch (credType) {
                    case exports.CredentialType.ID_TOKEN:
                        matchingCredentials.idTokens[cacheKey] = entity;
                        break;
                    case exports.CredentialType.ACCESS_TOKEN:
                        matchingCredentials.accessTokens[cacheKey] = entity;
                        break;
                    case exports.CredentialType.REFRESH_TOKEN:
                        matchingCredentials.refreshTokens[cacheKey] = entity;
                        break;
                }
            }
        });
        return matchingCredentials;
    };
    /**
     * returns a boolean if the given account is removed
     * @param account
     */
    CacheManager.prototype.removeAccount = function (accountKey) {
        var account = this.getAccount(accountKey);
        if (!account) {
            throw ClientAuthError.createNoAccountFoundError();
        }
        return (this.removeAccountContext(account) && this.removeItem(accountKey, exports.CacheSchemaType.ACCOUNT));
    };
    /**
     * returns a boolean if the given account is removed
     * @param account
     */
    CacheManager.prototype.removeAccountContext = function (account) {
        var _this = this;
        var allCacheKeys = this.getKeys();
        var accountId = account.generateAccountId();
        allCacheKeys.forEach(function (cacheKey) {
            // don't parse any non-credential type cache entities
            if (CredentialEntity.getCredentialType(cacheKey) === Constants.NOT_DEFINED) {
                return;
            }
            var cacheEntity = _this.getItem(cacheKey, exports.CacheSchemaType.CREDENTIAL);
            if (!!cacheEntity && accountId === cacheEntity.generateAccountId()) {
                _this.removeCredential(cacheEntity);
            }
        });
        return true;
    };
    /**
     * returns a boolean if the given credential is removed
     * @param credential
     */
    CacheManager.prototype.removeCredential = function (credential) {
        var key = credential.generateCredentialKey();
        return this.removeItem(key, exports.CacheSchemaType.CREDENTIAL);
    };
    /**
     *
     * @param value
     * @param homeAccountId
     */
    CacheManager.prototype.matchHomeAccountId = function (entity, homeAccountId) {
        return homeAccountId === entity.homeAccountId;
    };
    /**
     *
     * @param value
     * @param environment
     */
    CacheManager.prototype.matchEnvironment = function (entity, environment) {
        var cloudMetadata = TrustedAuthority.getCloudDiscoveryMetadata(environment);
        if (cloudMetadata &&
            cloudMetadata.aliases.indexOf(entity.environment) > -1) {
            return true;
        }
        return false;
    };
    /**
     *
     * @param entity
     * @param credentialType
     */
    CacheManager.prototype.matchCredentialType = function (entity, credentialType) {
        return credentialType.toLowerCase() === entity.credentialType.toLowerCase();
    };
    /**
     *
     * @param entity
     * @param clientId
     */
    CacheManager.prototype.matchClientId = function (entity, clientId) {
        return clientId === entity.clientId;
    };
    /**
     *
     * @param entity
     * @param realm
     */
    CacheManager.prototype.matchRealm = function (entity, realm) {
        return realm === entity.realm;
    };
    /**
     * Returns true if the target scopes are a subset of the current entity's scopes, false otherwise.
     * @param entity
     * @param target
     */
    CacheManager.prototype.matchTarget = function (entity, target) {
        var entityScopeSet = ScopeSet.fromString(entity.target);
        var requestTargetScopeSet = ScopeSet.fromString(target);
        return entityScopeSet.containsScopeSet(requestTargetScopeSet);
    };
    /**
     * returns if a given cache entity is of the type appmetadata
     * @param key
     */
    CacheManager.prototype.isAppMetadata = function (key) {
        return key.indexOf(APP_META_DATA) !== -1;
    };
    /**
     * Helper to convert serialized data to object
     * @param obj
     * @param json
     */
    CacheManager.toObject = function (obj, json) {
        for (var propertyName in json) {
            obj[propertyName] = json[propertyName];
        }
        return obj;
    };
    return CacheManager;
}());
var DefaultStorageClass = /** @class */ (function (_super) {
    __extends(DefaultStorageClass, _super);
    function DefaultStorageClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultStorageClass.prototype.setItem = function () {
        var notImplErr = "Storage interface - setItem() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getItem = function () {
        var notImplErr = "Storage interface - getItem() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.removeItem = function () {
        var notImplErr = "Storage interface - removeItem() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.containsKey = function () {
        var notImplErr = "Storage interface - containsKey() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getKeys = function () {
        var notImplErr = "Storage interface - getKeys() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.clear = function () {
        var notImplErr = "Storage interface - clear() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    return DefaultStorageClass;
}(CacheManager));
//# sourceMappingURL=CacheManager.js.map

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
// Token renewal offset default in seconds
var DEFAULT_TOKEN_RENEWAL_OFFSET_SEC = 300;
var DEFAULT_AUTH_OPTIONS = {
    clientId: "",
    authority: null,
    knownAuthorities: [],
    cloudDiscoveryMetadata: ""
};
var DEFAULT_SYSTEM_OPTIONS = {
    tokenRenewalOffsetSeconds: DEFAULT_TOKEN_RENEWAL_OFFSET_SEC,
    telemetry: null
};
var DEFAULT_LOGGER_IMPLEMENTATION = {
    loggerCallback: function () {
        // allow users to not set loggerCallback
    },
    piiLoggingEnabled: false,
    logLevel: exports.LogLevel.Info
};
var DEFAULT_NETWORK_IMPLEMENTATION = {
    sendGetRequestAsync: function () {
        return __awaiter(this, void 0, void 0, function () {
            var notImplErr;
            return __generator(this, function (_a) {
                notImplErr = "Network interface - sendGetRequestAsync() has not been implemented";
                throw AuthError.createUnexpectedError(notImplErr);
            });
        });
    },
    sendPostRequestAsync: function () {
        return __awaiter(this, void 0, void 0, function () {
            var notImplErr;
            return __generator(this, function (_a) {
                notImplErr = "Network interface - sendPostRequestAsync() has not been implemented";
                throw AuthError.createUnexpectedError(notImplErr);
            });
        });
    }
};
var DEFAULT_CRYPTO_IMPLEMENTATION = {
    createNewGuid: function () {
        var notImplErr = "Crypto interface - createNewGuid() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
    },
    base64Decode: function () {
        var notImplErr = "Crypto interface - base64Decode() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
    },
    base64Encode: function () {
        var notImplErr = "Crypto interface - base64Encode() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
    },
    generatePkceCodes: function () {
        return __awaiter(this, void 0, void 0, function () {
            var notImplErr;
            return __generator(this, function (_a) {
                notImplErr = "Crypto interface - generatePkceCodes() has not been implemented";
                throw AuthError.createUnexpectedError(notImplErr);
            });
        });
    }
};
var DEFAULT_LIBRARY_INFO = {
    sku: Constants.SKU,
    version: version,
    cpu: "",
    os: ""
};
/**
 * Function that sets the default options when not explicitly configured from app developer
 *
 * @param Configuration
 *
 * @returns Configuration
 */
function buildClientConfiguration(_a) {
    var userAuthOptions = _a.authOptions, userSystemOptions = _a.systemOptions, userLoggerOption = _a.loggerOptions, storageImplementation = _a.storageInterface, networkImplementation = _a.networkInterface, cryptoImplementation = _a.cryptoInterface, libraryInfo = _a.libraryInfo;
    return {
        authOptions: __assign(__assign({}, DEFAULT_AUTH_OPTIONS), userAuthOptions),
        systemOptions: __assign(__assign({}, DEFAULT_SYSTEM_OPTIONS), userSystemOptions),
        loggerOptions: __assign(__assign({}, DEFAULT_LOGGER_IMPLEMENTATION), userLoggerOption),
        storageInterface: storageImplementation || new DefaultStorageClass(),
        networkInterface: networkImplementation || DEFAULT_NETWORK_IMPLEMENTATION,
        cryptoInterface: cryptoImplementation || DEFAULT_CRYPTO_IMPLEMENTATION,
        libraryInfo: __assign(__assign({}, DEFAULT_LIBRARY_INFO), libraryInfo)
    };
}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Base application class which will construct requests to send to and handle responses from the Microsoft STS using the authorization code flow.
 */
var BaseClient = /** @class */ (function () {
    function BaseClient(configuration) {
        // Set the configuration
        this.config = buildClientConfiguration(configuration);
        // Initialize the logger
        this.logger = new Logger(this.config.loggerOptions);
        // Initialize crypto
        this.cryptoUtils = this.config.cryptoInterface;
        // Initialize storage interface
        this.cacheManager = this.config.storageInterface;
        // Set the network interface
        this.networkClient = this.config.networkInterface;
        TrustedAuthority.setTrustedAuthoritiesFromConfig(this.config.authOptions.knownAuthorities, this.config.authOptions.cloudDiscoveryMetadata);
        this.authority = this.config.authOptions.authority;
    }
    /**
     * Creates default headers for requests to token endpoint
     */
    BaseClient.prototype.createDefaultTokenRequestHeaders = function () {
        var headers = this.createDefaultLibraryHeaders();
        headers.set(HeaderNames.CONTENT_TYPE, Constants.URL_FORM_CONTENT_TYPE);
        return headers;
    };
    /**
     * addLibraryData
     */
    BaseClient.prototype.createDefaultLibraryHeaders = function () {
        var headers = new Map();
        // client info headers
        headers.set("" + AADServerParamKeys.X_CLIENT_SKU, this.config.libraryInfo.sku);
        headers.set("" + AADServerParamKeys.X_CLIENT_VER, this.config.libraryInfo.version);
        headers.set("" + AADServerParamKeys.X_CLIENT_OS, this.config.libraryInfo.os);
        headers.set("" + AADServerParamKeys.X_CLIENT_CPU, this.config.libraryInfo.cpu);
        return headers;
    };
    /**
     * Http post to token endpoint
     * @param tokenEndpoint
     * @param queryString
     * @param headers
     */
    BaseClient.prototype.executePostToTokenEndpoint = function (tokenEndpoint, queryString, headers) {
        return this.networkClient.sendPostRequestAsync(tokenEndpoint, {
            body: queryString,
            headers: headers,
        });
    };
    return BaseClient;
}());
//# sourceMappingURL=BaseClient.js.map

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Validates server consumable params from the "request" objects
 */
var RequestValidator = /** @class */ (function () {
    function RequestValidator() {
    }
    /**
     * Utility to check if the `redirectUri` in the request is a non-null value
     * @param redirectUri
     */
    RequestValidator.validateRedirectUri = function (redirectUri) {
        if (StringUtils.isEmpty(redirectUri)) {
            throw ClientConfigurationError.createRedirectUriEmptyError();
        }
    };
    /**
     * Utility to validate prompt sent by the user in the request
     * @param prompt
     */
    RequestValidator.validatePrompt = function (prompt) {
        if ([
            PromptValue.LOGIN,
            PromptValue.SELECT_ACCOUNT,
            PromptValue.CONSENT,
            PromptValue.NONE
        ].indexOf(prompt) < 0) {
            throw ClientConfigurationError.createInvalidPromptError(prompt);
        }
    };
    /**
     * Utility to validate code_challenge and code_challenge_method
     * @param codeChallenge
     * @param codeChallengeMethod
     */
    RequestValidator.validateCodeChallengeParams = function (codeChallenge, codeChallengeMethod) {
        if (StringUtils.isEmpty(codeChallenge) || StringUtils.isEmpty(codeChallengeMethod)) {
            throw ClientConfigurationError.createInvalidCodeChallengeParamsError();
        }
        else {
            this.validateCodeChallengeMethod(codeChallengeMethod);
        }
    };
    /**
     * Utility to validate code_challenge_method
     * @param codeChallengeMethod
     */
    RequestValidator.validateCodeChallengeMethod = function (codeChallengeMethod) {
        if ([
            CodeChallengeMethodValues.PLAIN,
            CodeChallengeMethodValues.S256
        ].indexOf(codeChallengeMethod) < 0) {
            throw ClientConfigurationError.createInvalidCodeChallengeMethodError();
        }
    };
    /**
     * Removes unnecessary or duplicate query parameters from extraQueryParameters
     * @param request
     */
    RequestValidator.sanitizeEQParams = function (eQParams, queryParams) {
        if (!eQParams) {
            return null;
        }
        // Remove any query parameters already included in SSO params
        queryParams.forEach(function (value, key) {
            if (eQParams[key]) {
                delete eQParams[key];
            }
        });
        return eQParams;
    };
    return RequestValidator;
}());
//# sourceMappingURL=RequestValidator.js.map

/*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT License.
*/
var RequestParameterBuilder = /** @class */ (function () {
    function RequestParameterBuilder() {
        this.parameters = new Map();
    }
    /**
     * add response_type = code
     */
    RequestParameterBuilder.prototype.addResponseTypeCode = function () {
        this.parameters.set(AADServerParamKeys.RESPONSE_TYPE, encodeURIComponent(Constants.CODE_RESPONSE_TYPE));
    };
    /**
     * add response_mode. defaults to query.
     * @param responseMode
     */
    RequestParameterBuilder.prototype.addResponseMode = function (responseMode) {
        this.parameters.set(AADServerParamKeys.RESPONSE_MODE, encodeURIComponent((responseMode) ? responseMode : exports.ResponseMode.QUERY));
    };
    /**
     * add scopes
     * @param scopeSet
     */
    RequestParameterBuilder.prototype.addScopes = function (scopeSet) {
        this.parameters.set(AADServerParamKeys.SCOPE, encodeURIComponent(scopeSet.printScopes()));
    };
    /**
     * add clientId
     * @param clientId
     */
    RequestParameterBuilder.prototype.addClientId = function (clientId) {
        this.parameters.set(AADServerParamKeys.CLIENT_ID, encodeURIComponent(clientId));
    };
    /**
     * add redirect_uri
     * @param redirectUri
     */
    RequestParameterBuilder.prototype.addRedirectUri = function (redirectUri) {
        RequestValidator.validateRedirectUri(redirectUri);
        this.parameters.set(AADServerParamKeys.REDIRECT_URI, encodeURIComponent(redirectUri));
    };
    /**
     * add domain_hint
     * @param domainHint
     */
    RequestParameterBuilder.prototype.addDomainHint = function (domainHint) {
        this.parameters.set(SSOTypes.DOMAIN_HINT, encodeURIComponent(domainHint));
    };
    /**
     * add login_hint
     * @param loginHint
     */
    RequestParameterBuilder.prototype.addLoginHint = function (loginHint) {
        this.parameters.set(SSOTypes.LOGIN_HINT, encodeURIComponent(loginHint));
    };
    /**
     * add claims
     * @param claims
     */
    RequestParameterBuilder.prototype.addClaims = function (claims) {
        this.parameters.set(AADServerParamKeys.CLAIMS, encodeURIComponent(claims));
    };
    /**
     * add correlationId
     * @param correlationId
     */
    RequestParameterBuilder.prototype.addCorrelationId = function (correlationId) {
        this.parameters.set(AADServerParamKeys.CLIENT_REQUEST_ID, encodeURIComponent(correlationId));
    };
    /**
     * add library info query params
     * @param libraryInfo
     */
    RequestParameterBuilder.prototype.addLibraryInfo = function (libraryInfo) {
        // Telemetry Info
        this.parameters.set(AADServerParamKeys.X_CLIENT_SKU, libraryInfo.sku);
        this.parameters.set(AADServerParamKeys.X_CLIENT_VER, libraryInfo.version);
        this.parameters.set(AADServerParamKeys.X_CLIENT_OS, libraryInfo.os);
        this.parameters.set(AADServerParamKeys.X_CLIENT_CPU, libraryInfo.cpu);
    };
    /**
     * add prompt
     * @param prompt
     */
    RequestParameterBuilder.prototype.addPrompt = function (prompt) {
        RequestValidator.validatePrompt(prompt);
        this.parameters.set("" + AADServerParamKeys.PROMPT, encodeURIComponent(prompt));
    };
    /**
     * add state
     * @param state
     */
    RequestParameterBuilder.prototype.addState = function (state) {
        if (!StringUtils.isEmpty(state)) {
            this.parameters.set(AADServerParamKeys.STATE, encodeURIComponent(state));
        }
    };
    /**
     * add nonce
     * @param nonce
     */
    RequestParameterBuilder.prototype.addNonce = function (nonce) {
        this.parameters.set(AADServerParamKeys.NONCE, encodeURIComponent(nonce));
    };
    /**
     * add code_challenge and code_challenge_method
     * - throw if either of them are not passed
     * @param codeChallenge
     * @param codeChallengeMethod
     */
    RequestParameterBuilder.prototype.addCodeChallengeParams = function (codeChallenge, codeChallengeMethod) {
        RequestValidator.validateCodeChallengeParams(codeChallenge, codeChallengeMethod);
        if (codeChallenge && codeChallengeMethod) {
            this.parameters.set(AADServerParamKeys.CODE_CHALLENGE, encodeURIComponent(codeChallenge));
            this.parameters.set(AADServerParamKeys.CODE_CHALLENGE_METHOD, encodeURIComponent(codeChallengeMethod));
        }
        else {
            throw ClientConfigurationError.createInvalidCodeChallengeParamsError();
        }
    };
    /**
     * add the `authorization_code` passed by the user to exchange for a token
     * @param code
     */
    RequestParameterBuilder.prototype.addAuthorizationCode = function (code) {
        this.parameters.set(AADServerParamKeys.CODE, encodeURIComponent(code));
    };
    /**
     * add the `authorization_code` passed by the user to exchange for a token
     * @param code
     */
    RequestParameterBuilder.prototype.addDeviceCode = function (code) {
        this.parameters.set(AADServerParamKeys.DEVICE_CODE, encodeURIComponent(code));
    };
    /**
     * add the `refreshToken` passed by the user
     * @param refreshToken
     */
    RequestParameterBuilder.prototype.addRefreshToken = function (refreshToken) {
        this.parameters.set(AADServerParamKeys.REFRESH_TOKEN, encodeURIComponent(refreshToken));
    };
    /**
     * add the `code_verifier` passed by the user to exchange for a token
     * @param codeVerifier
     */
    RequestParameterBuilder.prototype.addCodeVerifier = function (codeVerifier) {
        this.parameters.set(AADServerParamKeys.CODE_VERIFIER, encodeURIComponent(codeVerifier));
    };
    /**
     * add client_secret
     * @param clientSecret
     */
    // TODO uncomment when confidential client flow is added.
    // addClientSecret(clientSecret: string): void {
    //     params.set(`${AADServerParamKeys.CLIENT_SECRET}`, clientSecret);
    // }
    /**
     * add grant type
     * @param grantType
     */
    RequestParameterBuilder.prototype.addGrantType = function (grantType) {
        this.parameters.set(AADServerParamKeys.GRANT_TYPE, encodeURIComponent(grantType));
    };
    /**
     * add client info
     *
     */
    RequestParameterBuilder.prototype.addClientInfo = function () {
        this.parameters.set(ClientInfo, "1");
    };
    /**
     * add extraQueryParams
     * @param eQparams
     */
    RequestParameterBuilder.prototype.addExtraQueryParameters = function (eQparams) {
        var _this = this;
        RequestValidator.sanitizeEQParams(eQparams, this.parameters);
        Object.keys(eQparams).forEach(function (key) {
            _this.parameters.set(key, eQparams[key]);
        });
    };
    /**
     * Utility to create a URL from the params map
     */
    RequestParameterBuilder.prototype.createQueryString = function () {
        var queryParameterArray = new Array();
        this.parameters.forEach(function (value, key) {
            queryParameterArray.push(key + "=" + value);
        });
        return queryParameterArray.join("&");
    };
    return RequestParameterBuilder;
}());
//# sourceMappingURL=RequestParameterBuilder.js.map

/**
 * Error thrown when there is an error with the server code, for example, unavailability.
 */
var ServerError = /** @class */ (function (_super) {
    __extends(ServerError, _super);
    function ServerError(errorCode, errorMessage, subError) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ServerError";
        _this.subError = subError;
        Object.setPrototypeOf(_this, ServerError.prototype);
        return _this;
    }
    return ServerError;
}(AuthError));
//# sourceMappingURL=ServerError.js.map

/**
 * Id Token representation class. Parses id token string and generates claims object.
 */
var IdToken = /** @class */ (function () {
    function IdToken(rawIdToken, crypto) {
        if (StringUtils.isEmpty(rawIdToken)) {
            throw ClientAuthError.createIdTokenNullOrEmptyError(rawIdToken);
        }
        this.rawIdToken = rawIdToken;
        this.claims = IdToken.extractIdToken(rawIdToken, crypto);
    }
    /**
     * Extract IdToken by decoding the RAWIdToken
     *
     * @param encodedIdToken
     */
    IdToken.extractIdToken = function (encodedIdToken, crypto) {
        // id token will be decoded to get the username
        var decodedToken = StringUtils.decodeJwt(encodedIdToken);
        if (!decodedToken) {
            return null;
        }
        try {
            var base64IdTokenPayload = decodedToken.JWSPayload;
            // base64Decode() should throw an error if there is an issue
            var base64Decoded = crypto.base64Decode(base64IdTokenPayload);
            return JSON.parse(base64Decoded);
        }
        catch (err) {
            throw ClientAuthError.createIdTokenParsingError(err);
        }
    };
    return IdToken;
}());
//# sourceMappingURL=IdToken.js.map

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Utility class which exposes functions for managing date and time operations.
 */
var TimeUtils = /** @class */ (function () {
    function TimeUtils() {
    }
    /**
     * return the current time in Unix time (seconds).
     */
    TimeUtils.nowSeconds = function () {
        // Date.getTime() returns in milliseconds.
        return Math.round(new Date().getTime() / 1000.0);
    };
    return TimeUtils;
}());
//# sourceMappingURL=TimeUtils.js.map

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
(function (AuthorityType) {
    AuthorityType[AuthorityType["Default"] = 0] = "Default";
    AuthorityType[AuthorityType["Adfs"] = 1] = "Adfs";
})(exports.AuthorityType || (exports.AuthorityType = {}));
//# sourceMappingURL=AuthorityType.js.map

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * ID_TOKEN Cache
 *
 * Key:Value Schema:
 *
 * Key Example: uid.utid-login.microsoftonline.com-idtoken-clientId-contoso.com-
 *
 * Value Schema:
 * {
 *      homeAccountId: home account identifier for the auth scheme,
 *      environment: entity that issued the token, represented as a full host
 *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
 *      clientId: client ID of the application
 *      secret: Actual credential as a string
 *      realm: Full tenant or organizational identifier that the account belongs to
 * }
 */
var IdTokenEntity = /** @class */ (function (_super) {
    __extends(IdTokenEntity, _super);
    function IdTokenEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create IdTokenEntity
     * @param homeAccountId
     * @param authenticationResult
     * @param clientId
     * @param authority
     */
    IdTokenEntity.createIdTokenEntity = function (homeAccountId, environment, idToken, clientId, tenantId) {
        var idTokenEntity = new IdTokenEntity();
        idTokenEntity.credentialType = exports.CredentialType.ID_TOKEN;
        idTokenEntity.homeAccountId = homeAccountId;
        idTokenEntity.environment = environment;
        idTokenEntity.clientId = clientId;
        idTokenEntity.secret = idToken;
        idTokenEntity.realm = tenantId;
        return idTokenEntity;
    };
    return IdTokenEntity;
}(CredentialEntity));
//# sourceMappingURL=IdTokenEntity.js.map

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * ACCESS_TOKEN Credential Type
 *
 * Key:Value Schema:
 *
 * Key Example: uid.utid-login.microsoftonline.com-accesstoken-clientId-contoso.com-user.read
 *
 * Value Schema:
 * {
 *      homeAccountId: home account identifier for the auth scheme,
 *      environment: entity that issued the token, represented as a full host
 *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
 *      clientId: client ID of the application
 *      secret: Actual credential as a string
 *      familyId: Family ID identifier, usually only used for refresh tokens
 *      realm: Full tenant or organizational identifier that the account belongs to
 *      target: Permissions that are included in the token, or for refresh tokens, the resource identifier.
 *      cachedAt: Absolute device time when entry was created in the cache.
 *      expiresOn: Token expiry time, calculated based on current UTC time in seconds. Represented as a string.
 *      extendedExpiresOn: Additional extended expiry time until when token is valid in case of server-side outage. Represented as string in UTC seconds.
 *      keyId: used for POP and SSH tokenTypes
 *      tokenType: Type of the token issued. Usually "Bearer"
 * }
 */
var AccessTokenEntity = /** @class */ (function (_super) {
    __extends(AccessTokenEntity, _super);
    function AccessTokenEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create AccessTokenEntity
     * @param homeAccountId
     * @param environment
     * @param accessToken
     * @param clientId
     * @param tenantId
     * @param scopes
     * @param expiresOn
     * @param extExpiresOn
     */
    AccessTokenEntity.createAccessTokenEntity = function (homeAccountId, environment, accessToken, clientId, tenantId, scopes, expiresOn, extExpiresOn) {
        var atEntity = new AccessTokenEntity();
        atEntity.homeAccountId = homeAccountId;
        atEntity.credentialType = exports.CredentialType.ACCESS_TOKEN;
        atEntity.secret = accessToken;
        var currentTime = TimeUtils.nowSeconds();
        atEntity.cachedAt = currentTime.toString();
        // Token expiry time.
        // This value should be  calculated based on the current UTC time measured locally and the value  expires_in Represented as a string in JSON.
        atEntity.expiresOn = expiresOn.toString();
        atEntity.extendedExpiresOn = extExpiresOn.toString();
        atEntity.environment = environment;
        atEntity.clientId = clientId;
        atEntity.realm = tenantId;
        atEntity.target = scopes;
        return atEntity;
    };
    return AccessTokenEntity;
}(CredentialEntity));
//# sourceMappingURL=AccessTokenEntity.js.map

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * REFRESH_TOKEN Cache
 *
 * Key:Value Schema:
 *
 * Key Example: uid.utid-login.microsoftonline.com-refreshtoken-clientId--
 *
 * Value:
 * {
 *      homeAccountId: home account identifier for the auth scheme,
 *      environment: entity that issued the token, represented as a full host
 *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
 *      clientId: client ID of the application
 *      secret: Actual credential as a string
 *      familyId: Family ID identifier, '1' represents Microsoft Family
 *      realm: Full tenant or organizational identifier that the account belongs to
 *      target: Permissions that are included in the token, or for refresh tokens, the resource identifier.
 * }
 */
var RefreshTokenEntity = /** @class */ (function (_super) {
    __extends(RefreshTokenEntity, _super);
    function RefreshTokenEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create RefreshTokenEntity
     * @param homeAccountId
     * @param authenticationResult
     * @param clientId
     * @param authority
     */
    RefreshTokenEntity.createRefreshTokenEntity = function (homeAccountId, environment, refreshToken, clientId, familyId) {
        var rtEntity = new RefreshTokenEntity();
        rtEntity.clientId = clientId;
        rtEntity.credentialType = exports.CredentialType.REFRESH_TOKEN;
        rtEntity.environment = environment;
        rtEntity.homeAccountId = homeAccountId;
        rtEntity.secret = refreshToken;
        if (familyId)
            rtEntity.familyId = familyId;
        return rtEntity;
    };
    return RefreshTokenEntity;
}(CredentialEntity));
//# sourceMappingURL=RefreshTokenEntity.js.map

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * InteractionRequiredAuthErrorMessage class containing string constants used by error codes and messages.
 */
var InteractionRequiredAuthErrorMessage = [
    "interaction_required",
    "consent_required",
    "login_required"
];
var InteractionRequiredAuthSubErrorMessage = [
    "message_only",
    "additional_action",
    "basic_action",
    "user_password_expired",
    "consent_required"
];
/**
 * Error thrown when user interaction is required at the auth server.
 */
var InteractionRequiredAuthError = /** @class */ (function (_super) {
    __extends(InteractionRequiredAuthError, _super);
    function InteractionRequiredAuthError(errorCode, errorMessage, subError) {
        var _this = _super.call(this, errorCode, errorMessage, subError) || this;
        _this.name = "InteractionRequiredAuthError";
        Object.setPrototypeOf(_this, InteractionRequiredAuthError.prototype);
        return _this;
    }
    InteractionRequiredAuthError.isInteractionRequiredError = function (errorCode, errorString, subError) {
        var isInteractionRequiredErrorCode = !StringUtils.isEmpty(errorCode) && InteractionRequiredAuthErrorMessage.indexOf(errorCode) > -1;
        var isInteractionRequiredSubError = !StringUtils.isEmpty(subError) && InteractionRequiredAuthSubErrorMessage.indexOf(subError) > -1;
        var isInteractionRequiredErrorDesc = !StringUtils.isEmpty(errorString) && InteractionRequiredAuthErrorMessage.some(function (irErrorCode) {
            return errorString.indexOf(irErrorCode) > -1;
        });
        return isInteractionRequiredErrorCode || isInteractionRequiredErrorDesc || isInteractionRequiredSubError;
    };
    return InteractionRequiredAuthError;
}(ServerError));
//# sourceMappingURL=InteractionRequiredAuthError.js.map

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var CacheRecord = /** @class */ (function () {
    function CacheRecord(accountEntity, idTokenEntity, accessTokenEntity, refreshTokenEntity) {
        this.account = accountEntity;
        this.idToken = idTokenEntity;
        this.accessToken = accessTokenEntity;
        this.refreshToken = refreshTokenEntity;
    }
    return CacheRecord;
}());
//# sourceMappingURL=CacheRecord.js.map

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Class which provides helpers for OAuth 2.0 protocol specific values
 */
var ProtocolUtils = /** @class */ (function () {
    function ProtocolUtils() {
    }
    /**
     * Appends user state with random guid, or returns random guid.
     * @param userState
     * @param randomGuid
     */
    ProtocolUtils.setRequestState = function (userState, cryptoObj) {
        var libraryState = ProtocolUtils.generateLibraryState(cryptoObj);
        return !StringUtils.isEmpty(userState) ? "" + libraryState + Constants.RESOURCE_DELIM + userState : libraryState;
    };
    /**
     * Generates the state value used by the library.
     * @param randomGuid
     * @param cryptoObj
     */
    ProtocolUtils.generateLibraryState = function (cryptoObj) {
        if (!cryptoObj) {
            throw ClientAuthError.createNoCryptoObjectError("generateLibraryState");
        }
        // Create a state object containing a unique id and the timestamp of the request creation
        var stateObj = {
            id: cryptoObj.createNewGuid(),
            ts: TimeUtils.nowSeconds()
        };
        var stateString = JSON.stringify(stateObj);
        return cryptoObj.base64Encode(stateString);
    };
    /**
     * Parses the state into the RequestStateObject, which contains the LibraryState info and the state passed by the user.
     * @param state
     * @param cryptoObj
     */
    ProtocolUtils.parseRequestState = function (state, cryptoObj) {
        if (!cryptoObj) {
            throw ClientAuthError.createNoCryptoObjectError("parseRequestState");
        }
        if (StringUtils.isEmpty(state)) {
            throw ClientAuthError.createInvalidStateError(state, "Null, undefined or empty state");
        }
        try {
            // Split the state between library state and user passed state and decode them separately
            var splitState = decodeURIComponent(state).split(Constants.RESOURCE_DELIM);
            var libraryState = splitState[0];
            var userState = splitState.length > 1 ? splitState.slice(1).join(Constants.RESOURCE_DELIM) : "";
            var libraryStateString = cryptoObj.base64Decode(libraryState);
            var libraryStateObj = JSON.parse(libraryStateString);
            return {
                userRequestState: !StringUtils.isEmpty(userState) ? userState : "",
                libraryState: libraryStateObj
            };
        }
        catch (e) {
            throw ClientAuthError.createInvalidStateError(state, e);
        }
    };
    return ProtocolUtils;
}());
//# sourceMappingURL=ProtocolUtils.js.map

/**
 * Class that handles response parsing.
 */
var ResponseHandler = /** @class */ (function () {
    function ResponseHandler(clientId, cacheStorage, cryptoObj, logger) {
        this.clientId = clientId;
        this.cacheStorage = cacheStorage;
        this.cryptoObj = cryptoObj;
        this.logger = logger;
    }
    /**
     * Function which validates server authorization code response.
     * @param serverResponseHash
     * @param cachedState
     * @param cryptoObj
     */
    ResponseHandler.prototype.validateServerAuthorizationCodeResponse = function (serverResponseHash, cachedState, cryptoObj) {
        if (serverResponseHash.state !== cachedState) {
            throw ClientAuthError.createStateMismatchError();
        }
        // Check for error
        if (serverResponseHash.error || serverResponseHash.error_description || serverResponseHash.suberror) {
            if (InteractionRequiredAuthError.isInteractionRequiredError(serverResponseHash.error, serverResponseHash.error_description, serverResponseHash.suberror)) {
                throw new InteractionRequiredAuthError(serverResponseHash.error, serverResponseHash.error_description, serverResponseHash.suberror);
            }
            throw new ServerError(serverResponseHash.error, serverResponseHash.error_description, serverResponseHash.suberror);
        }
        if (serverResponseHash.client_info) {
            buildClientInfo(serverResponseHash.client_info, cryptoObj);
        }
    };
    /**
     * Function which validates server authorization token response.
     * @param serverResponse
     */
    ResponseHandler.prototype.validateTokenResponse = function (serverResponse) {
        // Check for error
        if (serverResponse.error || serverResponse.error_description || serverResponse.suberror) {
            if (InteractionRequiredAuthError.isInteractionRequiredError(serverResponse.error, serverResponse.error_description, serverResponse.suberror)) {
                throw new InteractionRequiredAuthError(serverResponse.error, serverResponse.error_description, serverResponse.suberror);
            }
            var errString = serverResponse.error_codes + " - [" + serverResponse.timestamp + "]: " + serverResponse.error_description + " - Correlation ID: " + serverResponse.correlation_id + " - Trace ID: " + serverResponse.trace_id;
            throw new ServerError(serverResponse.error, errString);
        }
        // generate homeAccountId
        if (serverResponse.client_info) {
            this.clientInfo = buildClientInfo(serverResponse.client_info, this.cryptoObj);
            if (!StringUtils.isEmpty(this.clientInfo.uid) && !StringUtils.isEmpty(this.clientInfo.utid)) {
                this.homeAccountIdentifier = this.clientInfo.uid + "." + this.clientInfo.utid;
            }
        }
    };
    /**
     * Returns a constructed token response based on given string. Also manages the cache updates and cleanups.
     * @param serverTokenResponse
     * @param authority
     */
    ResponseHandler.prototype.handleServerTokenResponse = function (serverTokenResponse, authority, cachedNonce, cachedState) {
        // create an idToken object (not entity)
        var idTokenObj = new IdToken(serverTokenResponse.id_token, this.cryptoObj);
        // token nonce check (TODO: Add a warning if no nonce is given?)
        if (!StringUtils.isEmpty(cachedNonce)) {
            if (idTokenObj.claims.nonce !== cachedNonce) {
                throw ClientAuthError.createNonceMismatchError();
            }
        }
        // save the response tokens
        var requestStateObj = null;
        if (!StringUtils.isEmpty(cachedState)) {
            requestStateObj = ProtocolUtils.parseRequestState(cachedState, this.cryptoObj);
        }
        var cacheRecord = this.generateCacheRecord(serverTokenResponse, idTokenObj, authority, requestStateObj && requestStateObj.libraryState);
        this.cacheStorage.saveCacheRecord(cacheRecord);
        return ResponseHandler.generateAuthenticationResult(cacheRecord, idTokenObj, false, requestStateObj ? requestStateObj.userRequestState : null);
    };
    /**
     * Generates CacheRecord
     * @param serverTokenResponse
     * @param idTokenObj
     * @param authority
     */
    ResponseHandler.prototype.generateCacheRecord = function (serverTokenResponse, idTokenObj, authority, libraryState) {
        // Account
        var cachedAccount = this.generateAccountEntity(serverTokenResponse, idTokenObj, authority);
        var reqEnvironment = authority.canonicalAuthorityUrlComponents.HostNameAndPort;
        var env = TrustedAuthority.getCloudDiscoveryMetadata(reqEnvironment) ? TrustedAuthority.getCloudDiscoveryMetadata(reqEnvironment).preferred_cache : "";
        if (StringUtils.isEmpty(env)) {
            throw ClientAuthError.createInvalidCacheEnvironmentError();
        }
        // IdToken
        var cachedIdToken = IdTokenEntity.createIdTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.id_token, this.clientId, idTokenObj.claims.tid);
        // AccessToken
        var responseScopes = ScopeSet.fromString(serverTokenResponse.scope);
        // Expiration calculation
        var currentTime = TimeUtils.nowSeconds();
        // If the request timestamp was sent in the library state, use that timestamp to calculate expiration. Otherwise, use current time.
        var timestamp = libraryState ? libraryState.ts : currentTime;
        var tokenExpirationSeconds = timestamp + serverTokenResponse.expires_in;
        var extendedTokenExpirationSeconds = tokenExpirationSeconds + serverTokenResponse.ext_expires_in;
        var cachedAccessToken = AccessTokenEntity.createAccessTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.access_token, this.clientId, idTokenObj.claims.tid, responseScopes.printScopes(), tokenExpirationSeconds, extendedTokenExpirationSeconds);
        // refreshToken
        var cachedRefreshToken = RefreshTokenEntity.createRefreshTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.refresh_token, this.clientId, serverTokenResponse.foci);
        return new CacheRecord(cachedAccount, cachedIdToken, cachedAccessToken, cachedRefreshToken);
    };
    /**
     * Generate Account
     * @param serverTokenResponse
     * @param idToken
     * @param authority
     */
    ResponseHandler.prototype.generateAccountEntity = function (serverTokenResponse, idToken, authority) {
        var authorityType = authority.authorityType;
        if (StringUtils.isEmpty(serverTokenResponse.client_info)) {
            throw ClientAuthError.createClientInfoEmptyError(serverTokenResponse.client_info);
        }
        return (authorityType === exports.AuthorityType.Adfs) ?
            AccountEntity.createADFSAccount(authority, idToken) :
            AccountEntity.createAccount(serverTokenResponse.client_info, authority, idToken, this.cryptoObj);
    };
    /**
     * Creates an @AuthenticationResult from @CacheRecord , @IdToken , and a boolean that states whether or not the result is from cache.
     *
     * Optionally takes a state string that is set as-is in the response.
     *
     * @param cacheRecord
     * @param idTokenObj
     * @param fromTokenCache
     * @param stateString
     */
    ResponseHandler.generateAuthenticationResult = function (cacheRecord, idTokenObj, fromTokenCache, stateString) {
        var responseScopes = ScopeSet.fromString(cacheRecord.accessToken.target);
        return {
            uniqueId: idTokenObj.claims.oid || idTokenObj.claims.sub,
            tenantId: idTokenObj.claims.tid,
            scopes: responseScopes.asArray(),
            account: cacheRecord.account.getAccountInfo(),
            idToken: idTokenObj.rawIdToken,
            idTokenClaims: idTokenObj.claims,
            accessToken: cacheRecord.accessToken.secret,
            fromCache: fromTokenCache,
            expiresOn: new Date(Number(cacheRecord.accessToken.expiresOn) * 1000),
            extExpiresOn: new Date(Number(cacheRecord.accessToken.extendedExpiresOn) * 1000),
            familyId: cacheRecord.refreshToken.familyId || null,
            state: stateString || ""
        };
    };
    return ResponseHandler;
}());
//# sourceMappingURL=ResponseHandler.js.map

/**
 * Url object class which can perform various transformations on url strings.
 */
var UrlString = /** @class */ (function () {
    function UrlString(url) {
        this._urlString = url;
        if (!StringUtils.isEmpty(this._urlString) && StringUtils.isEmpty(this.getHash())) {
            this._urlString = this.canonicalizeUri(url);
        }
        else if (StringUtils.isEmpty(this._urlString)) {
            // Throws error if url is empty
            throw ClientConfigurationError.createUrlEmptyError();
        }
    }
    Object.defineProperty(UrlString.prototype, "urlString", {
        get: function () {
            return this._urlString;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Ensure urls are lower case and end with a / character.
     * @param url
     */
    UrlString.prototype.canonicalizeUri = function (url) {
        if (url) {
            url = url.toLowerCase();
        }
        if (url && !url.endsWith("/")) {
            url += "/";
        }
        return url;
    };
    /**
     * Throws if urlString passed is not a valid authority URI string.
     */
    UrlString.prototype.validateAsUri = function () {
        // Attempts to parse url for uri components
        var components;
        try {
            components = this.getUrlComponents();
        }
        catch (e) {
            throw ClientConfigurationError.createUrlParseError(e);
        }
        // Throw error if URI or path segments are not parseable.
        if (!components.HostNameAndPort || !components.PathSegments || components.PathSegments.length < 1) {
            throw ClientConfigurationError.createUrlParseError("Given url string: " + this.urlString);
        }
        // Throw error if uri is insecure.
        if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
            throw ClientConfigurationError.createInsecureAuthorityUriError(this.urlString);
        }
    };
    /**
     * Function to remove query string params from url. Returns the new url.
     * @param url
     * @param name
     */
    UrlString.prototype.urlRemoveQueryStringParameter = function (name) {
        var regex = new RegExp("(\\&" + name + "=)[^\&]+");
        this._urlString = this.urlString.replace(regex, "");
        // name=value&
        regex = new RegExp("(" + name + "=)[^\&]+&");
        this._urlString = this.urlString.replace(regex, "");
        // name=value
        regex = new RegExp("(" + name + "=)[^\&]+");
        this._urlString = this.urlString.replace(regex, "");
        return this.urlString;
    };
    /**
     * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
     * @param href The url
     * @param tenantId The tenant id to replace
     */
    UrlString.prototype.replaceTenantPath = function (tenantId) {
        var urlObject = this.getUrlComponents();
        var pathArray = urlObject.PathSegments;
        if (tenantId && (pathArray.length !== 0 && (pathArray[0] === AADAuthorityConstants.COMMON || pathArray[0] === AADAuthorityConstants.ORGANIZATIONS))) {
            pathArray[0] = tenantId;
        }
        return UrlString.constructAuthorityUriFromObject(urlObject);
    };
    /**
     * Returns the anchor part(#) of the URL
     */
    UrlString.prototype.getHash = function () {
        var hashIndex1 = this.urlString.indexOf("#");
        var hashIndex2 = this.urlString.indexOf("#/");
        if (hashIndex2 > -1) {
            return this.urlString.substring(hashIndex2 + 2);
        }
        else if (hashIndex1 > -1) {
            return this.urlString.substring(hashIndex1 + 1);
        }
        return "";
    };
    /**
     * Returns deserialized portion of URL hash
     */
    UrlString.prototype.getDeserializedHash = function () {
        var hash = this.getHash();
        var deserializedHash = StringUtils.queryStringToObject(hash);
        if (!deserializedHash) {
            throw ClientAuthError.createHashNotDeserializedError(JSON.stringify(deserializedHash));
        }
        return deserializedHash;
    };
    /**
     * Parses out the components from a url string.
     * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
     */
    UrlString.prototype.getUrlComponents = function () {
        // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
        var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
        // If url string does not match regEx, we throw an error
        var match = this.urlString.match(regEx);
        if (!match) {
            throw ClientConfigurationError.createUrlParseError("Given url string: " + this.urlString);
        }
        // Url component object
        var urlComponents = {
            Protocol: match[1],
            HostNameAndPort: match[4],
            AbsolutePath: match[5]
        };
        var pathSegments = urlComponents.AbsolutePath.split("/");
        pathSegments = pathSegments.filter(function (val) { return val && val.length > 0; }); // remove empty elements
        urlComponents.PathSegments = pathSegments;
        return urlComponents;
    };
    UrlString.constructAuthorityUriFromObject = function (urlObject) {
        return new UrlString(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + urlObject.PathSegments.join("/"));
    };
    /**
     * Check if the hash of the URL string contains known properties
     */
    UrlString.hashContainsKnownProperties = function (url) {
        if (StringUtils.isEmpty(url)) {
            return false;
        }
        var urlString = new UrlString(url);
        var parameters = urlString.getDeserializedHash();
        return !!(parameters.code ||
            parameters.error_description ||
            parameters.error ||
            parameters.state);
    };
    return UrlString;
}());
//# sourceMappingURL=UrlString.js.map

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Oauth2.0 Authorization Code client
 */
var AuthorizationCodeClient = /** @class */ (function (_super) {
    __extends(AuthorizationCodeClient, _super);
    function AuthorizationCodeClient(configuration) {
        return _super.call(this, configuration) || this;
    }
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
    AuthorizationCodeClient.prototype.getAuthCodeUrl = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var queryString;
            return __generator(this, function (_a) {
                queryString = this.createAuthCodeUrlQueryString(request);
                return [2 /*return*/, this.authority.authorizationEndpoint + "?" + queryString];
            });
        });
    };
    /**
     * API to acquire a token in exchange of 'authorization_code` acquired by the user in the first leg of the
     * authorization_code_grant
     * @param request
     */
    AuthorizationCodeClient.prototype.acquireToken = function (request, cachedNonce, cachedState) {
        return __awaiter(this, void 0, void 0, function () {
            var response, responseHandler, tokenResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.info("in acquireToken call");
                        // If no code response is given, we cannot acquire a token.
                        if (!request || StringUtils.isEmpty(request.code)) {
                            throw ClientAuthError.createTokenRequestCannotBeMadeError();
                        }
                        return [4 /*yield*/, this.executeTokenRequest(this.authority, request)];
                    case 1:
                        response = _a.sent();
                        responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger);
                        // Validate response. This function throws a server error if an error is returned by the server.
                        responseHandler.validateTokenResponse(response.body);
                        tokenResponse = responseHandler.handleServerTokenResponse(response.body, this.authority, cachedNonce, cachedState);
                        return [2 /*return*/, tokenResponse];
                }
            });
        });
    };
    /**
     * Handles the hash fragment response from public client code request. Returns a code response used by
     * the client to exchange for a token in acquireToken.
     * @param hashFragment
     */
    AuthorizationCodeClient.prototype.handleFragmentResponse = function (hashFragment, cachedState) {
        // Handle responses.
        var responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger);
        // Deserialize hash fragment response parameters.
        var hashUrlString = new UrlString(hashFragment);
        var serverParams = hashUrlString.getDeserializedHash();
        // Get code response
        responseHandler.validateServerAuthorizationCodeResponse(serverParams, cachedState, this.cryptoUtils);
        return serverParams.code;
    };
    /**
     * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     * @param authorityUri
     */
    AuthorizationCodeClient.prototype.getLogoutUri = function (logoutRequest) {
        // Throw error if logoutRequest is null/undefined
        if (!logoutRequest) {
            throw ClientConfigurationError.createEmptyLogoutRequestError();
        }
        if (logoutRequest.account) {
            // Clear given account.
            this.cacheManager.removeAccount(AccountEntity.generateAccountCacheKey(logoutRequest.account));
        }
        else {
            // Clear all accounts and tokens
            this.cacheManager.clear();
        }
        // Get postLogoutRedirectUri.
        var postLogoutUriParam = logoutRequest.postLogoutRedirectUri ?
            "?" + AADServerParamKeys.POST_LOGOUT_URI + "=" + encodeURIComponent(logoutRequest.postLogoutRedirectUri) : "";
        var correlationIdParam = logoutRequest.correlationId ?
            "&" + AADServerParamKeys.CLIENT_REQUEST_ID + "=" + encodeURIComponent(logoutRequest.correlationId) : "";
        // Construct logout URI.
        var logoutUri = "" + this.authority.endSessionEndpoint + postLogoutUriParam + correlationIdParam;
        return logoutUri;
    };
    /**
     * Executes POST request to token endpoint
     * @param authority
     * @param request
     */
    AuthorizationCodeClient.prototype.executeTokenRequest = function (authority, request) {
        return __awaiter(this, void 0, void 0, function () {
            var requestBody, headers;
            return __generator(this, function (_a) {
                requestBody = this.createTokenRequestBody(request);
                headers = this.createDefaultTokenRequestHeaders();
                return [2 /*return*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers)];
            });
        });
    };
    /**
     * Generates a map for all the params to be sent to the service
     * @param request
     */
    AuthorizationCodeClient.prototype.createTokenRequestBody = function (request) {
        var parameterBuilder = new RequestParameterBuilder();
        parameterBuilder.addClientId(this.config.authOptions.clientId);
        // validate the redirectUri (to be a non null value)
        parameterBuilder.addRedirectUri(request.redirectUri);
        var scopeSet = new ScopeSet(request.scopes || []);
        parameterBuilder.addScopes(scopeSet);
        // add code: user set, not validated
        parameterBuilder.addAuthorizationCode(request.code);
        // add code_verifier if passed
        if (request.codeVerifier) {
            parameterBuilder.addCodeVerifier(request.codeVerifier);
        }
        parameterBuilder.addGrantType(GrantType.AUTHORIZATION_CODE_GRANT);
        parameterBuilder.addClientInfo();
        var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
        parameterBuilder.addCorrelationId(correlationId);
        return parameterBuilder.createQueryString();
    };
    /**
     * This API validates the `AuthorizationCodeUrlRequest` and creates a URL
     * @param request
     */
    AuthorizationCodeClient.prototype.createAuthCodeUrlQueryString = function (request) {
        var parameterBuilder = new RequestParameterBuilder();
        parameterBuilder.addClientId(this.config.authOptions.clientId);
        var scopeSet = new ScopeSet(request.scopes || []);
        if (request.extraScopesToConsent) {
            scopeSet.appendScopes(request.extraScopesToConsent);
        }
        parameterBuilder.addScopes(scopeSet);
        // validate the redirectUri (to be a non null value)
        parameterBuilder.addRedirectUri(request.redirectUri);
        // generate the correlationId if not set by the user and add
        var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
        parameterBuilder.addCorrelationId(correlationId);
        // add response_mode. If not passed in it defaults to query.
        parameterBuilder.addResponseMode(request.responseMode);
        // add response_type = code
        parameterBuilder.addResponseTypeCode();
        // add library info parameters
        parameterBuilder.addLibraryInfo(this.config.libraryInfo);
        // add client_info=1
        parameterBuilder.addClientInfo();
        if (request.codeChallenge) {
            parameterBuilder.addCodeChallengeParams(request.codeChallenge, request.codeChallengeMethod);
        }
        if (request.prompt) {
            parameterBuilder.addPrompt(request.prompt);
        }
        if (request.loginHint) {
            parameterBuilder.addLoginHint(request.loginHint);
        }
        if (request.domainHint) {
            parameterBuilder.addDomainHint(request.domainHint);
        }
        if (request.nonce) {
            parameterBuilder.addNonce(request.nonce);
        }
        if (request.state) {
            parameterBuilder.addState(request.state);
        }
        if (request.claims) {
            parameterBuilder.addClaims(request.claims);
        }
        if (request.extraQueryParameters) {
            parameterBuilder.addExtraQueryParameters(request.extraQueryParameters);
        }
        return parameterBuilder.createQueryString();
    };
    return AuthorizationCodeClient;
}(BaseClient));
//# sourceMappingURL=AuthorizationCodeClient.js.map

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * OAuth2.0 Device code client
 */
var DeviceCodeClient = /** @class */ (function (_super) {
    __extends(DeviceCodeClient, _super);
    function DeviceCodeClient(configuration) {
        return _super.call(this, configuration) || this;
    }
    /**
     * Gets device code from device code endpoint, calls back to with device code response, and
     * polls token endpoint to exchange device code for tokens
     * @param request
     */
    DeviceCodeClient.prototype.acquireToken = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var deviceCodeResponse, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDeviceCode(request)];
                    case 1:
                        deviceCodeResponse = _a.sent();
                        request.deviceCodeCallback(deviceCodeResponse);
                        return [4 /*yield*/, this.acquireTokenWithDeviceCode(request, deviceCodeResponse)];
                    case 2:
                        response = _a.sent();
                        // TODO handle response
                        return [2 /*return*/, JSON.stringify(response)];
                }
            });
        });
    };
    /**
     * Creates device code request and executes http GET
     * @param request
     */
    DeviceCodeClient.prototype.getDeviceCode = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var queryString, headers;
            return __generator(this, function (_a) {
                queryString = this.createQueryString(request);
                headers = this.createDefaultLibraryHeaders();
                return [2 /*return*/, this.executePostRequestToDeviceCodeEndpoint(this.authority.deviceCodeEndpoint, queryString, headers)];
            });
        });
    };
    /**
     * Executes POST request to device code endpoint
     * @param deviceCodeEndpoint
     * @param queryString
     * @param headers
     */
    DeviceCodeClient.prototype.executePostRequestToDeviceCodeEndpoint = function (deviceCodeEndpoint, queryString, headers) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, userCode, deviceCode, verificationUri, expiresIn, interval, message;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.networkClient.sendPostRequestAsync(deviceCodeEndpoint, {
                            body: queryString,
                            headers: headers
                        })];
                    case 1:
                        _a = (_b.sent()).body, userCode = _a.user_code, deviceCode = _a.device_code, verificationUri = _a.verification_uri, expiresIn = _a.expires_in, interval = _a.interval, message = _a.message;
                        return [2 /*return*/, {
                                userCode: userCode,
                                deviceCode: deviceCode,
                                verificationUri: verificationUri,
                                expiresIn: expiresIn,
                                interval: interval,
                                message: message
                            }];
                }
            });
        });
    };
    /**
     * Create device code endpoint query parameters and returns string
     */
    DeviceCodeClient.prototype.createQueryString = function (request) {
        var parameterBuilder = new RequestParameterBuilder();
        var scopeSet = new ScopeSet(request.scopes || []);
        parameterBuilder.addScopes(scopeSet);
        parameterBuilder.addClientId(this.config.authOptions.clientId);
        return parameterBuilder.createQueryString();
    };
    /**
     * Creates token request with device code response and polls token endpoint at interval set by the device code
     * response
     * @param request
     * @param deviceCodeResponse
     */
    DeviceCodeClient.prototype.acquireTokenWithDeviceCode = function (request, deviceCodeResponse) {
        return __awaiter(this, void 0, void 0, function () {
            var requestBody, headers, deviceCodeExpirationTime, pollingIntervalMilli;
            var _this = this;
            return __generator(this, function (_a) {
                requestBody = this.createTokenRequestBody(request, deviceCodeResponse);
                headers = this.createDefaultTokenRequestHeaders();
                deviceCodeExpirationTime = TimeUtils.nowSeconds() + deviceCodeResponse.expiresIn;
                pollingIntervalMilli = deviceCodeResponse.interval * 1000;
                // Poll token endpoint while (device code is not expired AND operation has not been cancelled by
                // setting CancellationToken.cancel = true). POST request is sent at interval set by pollingIntervalMilli
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var intervalId = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                            var response, error_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 5, , 6]);
                                        if (!request.cancel) return [3 /*break*/, 1];
                                        this.logger.error("Token request cancelled by setting DeviceCodeRequest.cancel = true");
                                        clearInterval(intervalId);
                                        reject(ClientAuthError.createDeviceCodeCancelledError());
                                        return [3 /*break*/, 4];
                                    case 1:
                                        if (!(TimeUtils.nowSeconds() > deviceCodeExpirationTime)) return [3 /*break*/, 2];
                                        this.logger.error("Device code expired. Expiration time of device code was " + deviceCodeExpirationTime);
                                        clearInterval(intervalId);
                                        reject(ClientAuthError.createDeviceCodeExpiredError());
                                        return [3 /*break*/, 4];
                                    case 2: return [4 /*yield*/, this.executePostToTokenEndpoint(this.authority.tokenEndpoint, requestBody, headers)];
                                    case 3:
                                        response = _a.sent();
                                        if (response.body && response.body.error == Constants.AUTHORIZATION_PENDING) {
                                            // user authorization is pending. Sleep for polling interval and try again
                                            this.logger.info(response.body.error_description);
                                        }
                                        else {
                                            clearInterval(intervalId);
                                            resolve(response.body);
                                        }
                                        _a.label = 4;
                                    case 4: return [3 /*break*/, 6];
                                    case 5:
                                        error_1 = _a.sent();
                                        clearInterval(intervalId);
                                        reject(error_1);
                                        return [3 /*break*/, 6];
                                    case 6: return [2 /*return*/];
                                }
                            });
                        }); }, pollingIntervalMilli);
                    })];
            });
        });
    };
    /**
     * Creates query parameters and converts to string.
     * @param request
     * @param deviceCodeResponse
     */
    DeviceCodeClient.prototype.createTokenRequestBody = function (request, deviceCodeResponse) {
        var requestParameters = new RequestParameterBuilder();
        var scopeSet = new ScopeSet(request.scopes || []);
        requestParameters.addScopes(scopeSet);
        requestParameters.addClientId(this.config.authOptions.clientId);
        requestParameters.addGrantType(GrantType.DEVICE_CODE_GRANT);
        requestParameters.addDeviceCode(deviceCodeResponse.deviceCode);
        var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
        requestParameters.addCorrelationId(correlationId);
        return requestParameters.createQueryString();
    };
    return DeviceCodeClient;
}(BaseClient));
//# sourceMappingURL=DeviceCodeClient.js.map

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * OAuth2.0 refresh token client
 */
var RefreshTokenClient = /** @class */ (function (_super) {
    __extends(RefreshTokenClient, _super);
    function RefreshTokenClient(configuration) {
        return _super.call(this, configuration) || this;
    }
    RefreshTokenClient.prototype.acquireToken = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var response, responseHandler, tokenResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                    case 1:
                        response = _a.sent();
                        responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger);
                        responseHandler.validateTokenResponse(response.body);
                        tokenResponse = responseHandler.handleServerTokenResponse(response.body, this.authority);
                        return [2 /*return*/, tokenResponse];
                }
            });
        });
    };
    RefreshTokenClient.prototype.executeTokenRequest = function (request, authority) {
        return __awaiter(this, void 0, void 0, function () {
            var requestBody, headers;
            return __generator(this, function (_a) {
                requestBody = this.createTokenRequestBody(request);
                headers = this.createDefaultTokenRequestHeaders();
                return [2 /*return*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers)];
            });
        });
    };
    RefreshTokenClient.prototype.createTokenRequestBody = function (request) {
        var parameterBuilder = new RequestParameterBuilder();
        parameterBuilder.addClientId(this.config.authOptions.clientId);
        var scopeSet = new ScopeSet(request.scopes || []);
        parameterBuilder.addScopes(scopeSet);
        parameterBuilder.addGrantType(GrantType.REFRESH_TOKEN_GRANT);
        parameterBuilder.addClientInfo();
        var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
        parameterBuilder.addCorrelationId(correlationId);
        parameterBuilder.addRefreshToken(request.refreshToken);
        return parameterBuilder.createQueryString();
    };
    return RefreshTokenClient;
}(BaseClient));
//# sourceMappingURL=RefreshTokenClient.js.map

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var SilentFlowClient = /** @class */ (function (_super) {
    __extends(SilentFlowClient, _super);
    function SilentFlowClient(configuration) {
        return _super.call(this, configuration) || this;
    }
    /**
     * Retrieves a token from cache if it is still valid, or uses the cached refresh token to renew
     * the given token and returns the renewed token
     * @param request
     */
    SilentFlowClient.prototype.acquireToken = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var requestScopes, accountKey, cachedAccount, homeAccountId, environment, cachedAccessToken, cachedRefreshToken, refreshTokenClient, refreshTokenRequest, cachedIdToken, idTokenObj;
            return __generator(this, function (_a) {
                // Cannot renew token if no request object is given.
                if (!request) {
                    throw ClientConfigurationError.createEmptyTokenRequestError();
                }
                // We currently do not support silent flow for account === null use cases; This will be revisited for confidential flow usecases
                if (!request.account) {
                    throw ClientAuthError.createNoAccountInSilentRequestError();
                }
                requestScopes = new ScopeSet(request.scopes || []);
                accountKey = AccountEntity.generateAccountCacheKey(request.account);
                cachedAccount = this.cacheManager.getAccount(accountKey);
                homeAccountId = cachedAccount.homeAccountId;
                environment = cachedAccount.environment;
                cachedAccessToken = this.readAccessTokenFromCache(homeAccountId, environment, requestScopes, cachedAccount.realm);
                cachedRefreshToken = this.readRefreshTokenFromCache(homeAccountId, environment);
                // Check if refresh is forced, or if tokens are expired. If neither are true, return a token response with the found token entry.
                if (request.forceRefresh || !cachedAccessToken || this.isTokenExpired(cachedAccessToken.expiresOn)) {
                    // no refresh Token
                    if (!cachedRefreshToken) {
                        throw ClientAuthError.createNoTokensFoundError();
                    }
                    refreshTokenClient = new RefreshTokenClient(this.config);
                    refreshTokenRequest = __assign(__assign({}, request), { refreshToken: cachedRefreshToken.secret });
                    return [2 /*return*/, refreshTokenClient.acquireToken(refreshTokenRequest)];
                }
                cachedIdToken = this.readIdTokenFromCache(homeAccountId, environment, cachedAccount.realm);
                idTokenObj = new IdToken(cachedIdToken.secret, this.config.cryptoInterface);
                return [2 /*return*/, ResponseHandler.generateAuthenticationResult({
                        account: cachedAccount,
                        accessToken: cachedAccessToken,
                        idToken: cachedIdToken,
                        refreshToken: cachedRefreshToken
                    }, idTokenObj, true)];
            });
        });
    };
    /**
     * fetches idToken from cache if present
     * @param request
     */
    SilentFlowClient.prototype.readIdTokenFromCache = function (homeAccountId, environment, inputRealm) {
        var idTokenKey = CredentialEntity.generateCredentialCacheKey(homeAccountId, environment, exports.CredentialType.ID_TOKEN, this.config.authOptions.clientId, inputRealm);
        return this.cacheManager.getCredential(idTokenKey);
    };
    /**
     * fetches accessToken from cache if present
     * @param request
     * @param scopes
     */
    SilentFlowClient.prototype.readAccessTokenFromCache = function (homeAccountId, environment, scopes, inputRealm) {
        var accessTokenFilter = {
            homeAccountId: homeAccountId,
            environment: environment,
            credentialType: exports.CredentialType.ACCESS_TOKEN,
            clientId: this.config.authOptions.clientId,
            realm: inputRealm,
            target: scopes.printScopes()
        };
        var credentialCache = this.cacheManager.getCredentialsFilteredBy(accessTokenFilter);
        var accessTokens = Object.values(credentialCache.accessTokens);
        if (accessTokens.length > 1) ;
        else if (accessTokens.length < 1) {
            return null;
        }
        return accessTokens[0];
    };
    /**
     * fetches refreshToken from cache if present
     * @param request
     */
    SilentFlowClient.prototype.readRefreshTokenFromCache = function (homeAccountId, environment) {
        var refreshTokenKey = CredentialEntity.generateCredentialCacheKey(homeAccountId, environment, exports.CredentialType.REFRESH_TOKEN, this.config.authOptions.clientId);
        return this.cacheManager.getCredential(refreshTokenKey);
    };
    /**
     * check if a token is expired based on given UTC time in seconds.
     * @param expiresOn
     */
    SilentFlowClient.prototype.isTokenExpired = function (expiresOn) {
        // check for access token expiry
        var expirationSec = Number(expiresOn) || 0;
        var offsetCurrentTimeSec = TimeUtils.nowSeconds() + this.config.systemOptions.tokenRenewalOffsetSeconds;
        // If current time + offset is greater than token expiration time, then token is expired.
        return (offsetCurrentTimeSec > expirationSec);
    };
    return SilentFlowClient;
}(BaseClient));
//# sourceMappingURL=SilentFlowClient.js.map

/**
 * The authority class validates the authority URIs used by the user, and retrieves the OpenID Configuration Data from the
 * endpoint. It will store the pertinent config data in this object for use during token calls.
 */
var Authority = /** @class */ (function () {
    function Authority(authority, networkInterface) {
        this.canonicalAuthority = authority;
        this._canonicalAuthority.validateAsUri();
        this.networkInterface = networkInterface;
    }
    Object.defineProperty(Authority.prototype, "authorityType", {
        // See above for AuthorityType
        get: function () {
            var pathSegments = this.canonicalAuthorityUrlComponents.PathSegments;
            if (pathSegments.length && pathSegments[0].toLowerCase() === Constants.ADFS) {
                return exports.AuthorityType.Adfs;
            }
            return exports.AuthorityType.Default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "canonicalAuthority", {
        /**
         * A URL that is the authority set by the developer
         */
        get: function () {
            return this._canonicalAuthority.urlString;
        },
        /**
         * Sets canonical authority.
         */
        set: function (url) {
            this._canonicalAuthority = new UrlString(url);
            this._canonicalAuthority.validateAsUri();
            this._canonicalAuthorityUrlComponents = null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "canonicalAuthorityUrlComponents", {
        /**
         * Get authority components.
         */
        get: function () {
            if (!this._canonicalAuthorityUrlComponents) {
                this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents();
            }
            return this._canonicalAuthorityUrlComponents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "tenant", {
        /**
         * Get tenant for authority.
         */
        get: function () {
            return this.canonicalAuthorityUrlComponents.PathSegments[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "authorizationEndpoint", {
        /**
         * OAuth /authorize endpoint for requests
         */
        get: function () {
            if (this.discoveryComplete()) {
                return this.replaceTenant(this.tenantDiscoveryResponse.authorization_endpoint);
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "tokenEndpoint", {
        /**
         * OAuth /token endpoint for requests
         */
        get: function () {
            if (this.discoveryComplete()) {
                return this.replaceTenant(this.tenantDiscoveryResponse.token_endpoint);
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "deviceCodeEndpoint", {
        get: function () {
            if (this.discoveryComplete()) {
                return this.tenantDiscoveryResponse.token_endpoint.replace("/token", "/devicecode");
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "endSessionEndpoint", {
        /**
         * OAuth logout endpoint for requests
         */
        get: function () {
            if (this.discoveryComplete()) {
                return this.replaceTenant(this.tenantDiscoveryResponse.end_session_endpoint);
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "selfSignedJwtAudience", {
        /**
         * OAuth issuer for requests
         */
        get: function () {
            if (this.discoveryComplete()) {
                return this.replaceTenant(this.tenantDiscoveryResponse.issuer);
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Replaces tenant in url path with current tenant. Defaults to common.
     * @param urlString
     */
    Authority.prototype.replaceTenant = function (urlString) {
        return urlString.replace(/{tenant}|{tenantid}/g, this.tenant);
    };
    Object.defineProperty(Authority.prototype, "defaultOpenIdConfigurationEndpoint", {
        /**
         * The default open id configuration endpoint for any canonical authority.
         */
        get: function () {
            if (this.authorityType === exports.AuthorityType.Adfs) {
                return this.canonicalAuthority + ".well-known/openid-configuration";
            }
            return this.canonicalAuthority + "v2.0/.well-known/openid-configuration";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Boolean that returns whethr or not tenant discovery has been completed.
     */
    Authority.prototype.discoveryComplete = function () {
        return !!this.tenantDiscoveryResponse;
    };
    /**
     * Gets OAuth endpoints from the given OpenID configuration endpoint.
     * @param openIdConfigurationEndpoint
     */
    Authority.prototype.discoverEndpoints = function (openIdConfigurationEndpoint) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.networkInterface.sendGetRequestAsync(openIdConfigurationEndpoint)];
            });
        });
    };
    Object.defineProperty(Authority.prototype, "aadInstanceDiscoveryEndpointUrl", {
        // Default AAD Instance Discovery Endpoint
        get: function () {
            return "" + Constants.AAD_INSTANCE_DISCOVERY_ENDPT + this.canonicalAuthority + "oauth2/v2.0/authorize";
        },
        enumerable: true,
        configurable: true
    });
    Authority.prototype.validateAndSetPreferredNetwork = function () {
        return __awaiter(this, void 0, void 0, function () {
            var host, preferredNetwork;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        host = this.canonicalAuthorityUrlComponents.HostNameAndPort;
                        if (!(TrustedAuthority.getTrustedHostList().length === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, TrustedAuthority.setTrustedAuthoritiesFromNetwork(this._canonicalAuthority, this.networkInterface)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!TrustedAuthority.IsInTrustedHostList(host)) {
                            throw ClientConfigurationError.createUntrustedAuthorityError();
                        }
                        preferredNetwork = TrustedAuthority.getCloudDiscoveryMetadata(host).preferred_network;
                        if (host !== preferredNetwork) {
                            this.canonicalAuthority = this.canonicalAuthority.replace(host, preferredNetwork);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Perform endpoint discovery to discover the /authorize, /token and logout endpoints.
     */
    Authority.prototype.resolveEndpointsAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var openIdConfigEndpoint, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validateAndSetPreferredNetwork()];
                    case 1:
                        _a.sent();
                        openIdConfigEndpoint = this.defaultOpenIdConfigurationEndpoint;
                        return [4 /*yield*/, this.discoverEndpoints(openIdConfigEndpoint)];
                    case 2:
                        response = _a.sent();
                        this.tenantDiscoveryResponse = response.body;
                        return [2 /*return*/];
                }
            });
        });
    };
    return Authority;
}());
//# sourceMappingURL=Authority.js.map

var AuthorityFactory = /** @class */ (function () {
    function AuthorityFactory() {
    }
    /**
     * Create an authority object of the correct type based on the url
     * Performs basic authority validation - checks to see if the authority is of a valid type (i.e. aad, b2c, adfs)
     *
     * Also performs endpoint discovery.
     *
     * @param authorityUri
     * @param networkClient
     */
    AuthorityFactory.createDiscoveredInstance = function (authorityUri, networkClient) {
        return __awaiter(this, void 0, void 0, function () {
            var acquireTokenAuthority, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        acquireTokenAuthority = AuthorityFactory.createInstance(authorityUri, networkClient);
                        if (acquireTokenAuthority.discoveryComplete()) {
                            return [2 /*return*/, acquireTokenAuthority];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, acquireTokenAuthority.resolveEndpointsAsync()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, acquireTokenAuthority];
                    case 3:
                        e_1 = _a.sent();
                        throw ClientAuthError.createEndpointDiscoveryIncompleteError(e_1);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Create an authority object of the correct type based on the url
     * Performs basic authority validation - checks to see if the authority is of a valid type (i.e. aad, b2c, adfs)
     *
     * Does not perform endpoint discovery.
     *
     * @param authorityUrl
     * @param networkInterface
     */
    AuthorityFactory.createInstance = function (authorityUrl, networkInterface) {
        // Throw error if authority url is empty
        if (StringUtils.isEmpty(authorityUrl)) {
            throw ClientConfigurationError.createUrlEmptyError();
        }
        return new Authority(authorityUrl, networkInterface);
    };
    return AuthorityFactory;
}());
//# sourceMappingURL=AuthorityFactory.js.map

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * APP_META_DATA Cache
 *
 * Key:Value Schema:
 *
 * Key: appmetadata-<environment>-<client_id>
 *
 * Value:
 * {
 *      clientId: client ID of the application
 *      environment: entity that issued the token, represented as a full host
 *      familyId: Family ID identifier, '1' represents Microsoft Family
 * }
 */
var AppMetadataEntity = /** @class */ (function () {
    function AppMetadataEntity() {
    }
    /**
     * Generate Account Cache Key as per the schema: <home_account_id>-<environment>-<realm*>
     */
    AppMetadataEntity.prototype.generateAppMetaDataEntityKey = function () {
        var appMetaDataKeyArray = [APP_META_DATA, this.environment, this.clientId];
        return appMetaDataKeyArray.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    return AppMetadataEntity;
}());
//# sourceMappingURL=AppMetadataEntity.js.map

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Result returned from the authority's token endpoint.
 * - uniqueId               - `oid` or `sub` claim from ID token
 * - tenantId               - `tid` claim from ID token
 * - scopes                 - Scopes that are validated for the respective token
 * - account                - An account object representation of the currently signed-in user
 * - idToken                - Id token received as part of the response
 * - idTokenClaims          - MSAL-relevant ID token claims
 * - accessToken            - Access token received as part of the response
 * - fromCache              - Boolean denoting whether token came from cache
 * - expiresOn              - Javascript Date object representing relative expiration of access token
 * - extExpiresOn           - Javascript Date object representing extended relative expiration of access token in case of server outage
 * - state                  - Value passed in by user in request
 * - familyId               - Family ID identifier, usually only used for refresh tokens
 */
var AuthenticationResult = /** @class */ (function () {
    function AuthenticationResult() {
    }
    return AuthenticationResult;
}());
//# sourceMappingURL=AuthenticationResult.js.map

exports.AccessTokenEntity = AccessTokenEntity;
exports.AccountEntity = AccountEntity;
exports.AppMetadataEntity = AppMetadataEntity;
exports.AuthError = AuthError;
exports.AuthErrorMessage = AuthErrorMessage;
exports.AuthenticationResult = AuthenticationResult;
exports.Authority = Authority;
exports.AuthorityFactory = AuthorityFactory;
exports.AuthorizationCodeClient = AuthorizationCodeClient;
exports.CacheManager = CacheManager;
exports.ClientAuthError = ClientAuthError;
exports.ClientAuthErrorMessage = ClientAuthErrorMessage;
exports.ClientConfigurationError = ClientConfigurationError;
exports.ClientConfigurationErrorMessage = ClientConfigurationErrorMessage;
exports.Constants = Constants;
exports.CredentialEntity = CredentialEntity;
exports.DEFAULT_SYSTEM_OPTIONS = DEFAULT_SYSTEM_OPTIONS;
exports.DeviceCodeClient = DeviceCodeClient;
exports.IdToken = IdToken;
exports.IdTokenEntity = IdTokenEntity;
exports.InteractionRequiredAuthError = InteractionRequiredAuthError;
exports.Logger = Logger;
exports.PromptValue = PromptValue;
exports.ProtocolUtils = ProtocolUtils;
exports.RefreshTokenClient = RefreshTokenClient;
exports.RefreshTokenEntity = RefreshTokenEntity;
exports.ServerError = ServerError;
exports.SilentFlowClient = SilentFlowClient;
exports.StringUtils = StringUtils;
exports.TimeUtils = TimeUtils;
exports.TrustedAuthority = TrustedAuthority;
exports.UrlString = UrlString;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9lcnJvci9BdXRoRXJyb3IudHMiLCIuLi9zcmMvZXJyb3IvQ2xpZW50QXV0aEVycm9yLnRzIiwiLi4vc3JjL3V0aWxzL1N0cmluZ1V0aWxzLnRzIiwiLi4vc3JjL2xvZ2dlci9Mb2dnZXIudHMiLCIuLi9zcmMvdXRpbHMvQ29uc3RhbnRzLnRzIiwiLi4vc3JjL2NhY2hlL2VudGl0aWVzL0NyZWRlbnRpYWxFbnRpdHkudHMiLCIuLi9zcmMvZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLnRzIiwiLi4vc3JjL3JlcXVlc3QvU2NvcGVTZXQudHMiLCIuLi9zcmMvYWNjb3VudC9DbGllbnRJbmZvLnRzIiwiLi4vc3JjL2F1dGhvcml0eS9UcnVzdGVkQXV0aG9yaXR5LnRzIiwiLi4vc3JjL2NhY2hlL2VudGl0aWVzL0FjY291bnRFbnRpdHkudHMiLCIuLi9zcmMvY2FjaGUvQ2FjaGVNYW5hZ2VyLnRzIiwiLi4vc3JjL2NvbmZpZy9DbGllbnRDb25maWd1cmF0aW9uLnRzIiwiLi4vc3JjL2NsaWVudC9CYXNlQ2xpZW50LnRzIiwiLi4vc3JjL3JlcXVlc3QvUmVxdWVzdFZhbGlkYXRvci50cyIsIi4uL3NyYy9zZXJ2ZXIvUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXIudHMiLCIuLi9zcmMvZXJyb3IvU2VydmVyRXJyb3IudHMiLCIuLi9zcmMvYWNjb3VudC9JZFRva2VuLnRzIiwiLi4vc3JjL3V0aWxzL1RpbWVVdGlscy50cyIsIi4uL3NyYy9hdXRob3JpdHkvQXV0aG9yaXR5VHlwZS50cyIsIi4uL3NyYy9jYWNoZS9lbnRpdGllcy9JZFRva2VuRW50aXR5LnRzIiwiLi4vc3JjL2NhY2hlL2VudGl0aWVzL0FjY2Vzc1Rva2VuRW50aXR5LnRzIiwiLi4vc3JjL2NhY2hlL2VudGl0aWVzL1JlZnJlc2hUb2tlbkVudGl0eS50cyIsIi4uL3NyYy9lcnJvci9JbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yLnRzIiwiLi4vc3JjL2NhY2hlL2VudGl0aWVzL0NhY2hlUmVjb3JkLnRzIiwiLi4vc3JjL3V0aWxzL1Byb3RvY29sVXRpbHMudHMiLCIuLi9zcmMvcmVzcG9uc2UvUmVzcG9uc2VIYW5kbGVyLnRzIiwiLi4vc3JjL3VybC9VcmxTdHJpbmcudHMiLCIuLi9zcmMvY2xpZW50L0F1dGhvcml6YXRpb25Db2RlQ2xpZW50LnRzIiwiLi4vc3JjL2NsaWVudC9EZXZpY2VDb2RlQ2xpZW50LnRzIiwiLi4vc3JjL2NsaWVudC9SZWZyZXNoVG9rZW5DbGllbnQudHMiLCIuLi9zcmMvY2xpZW50L1NpbGVudEZsb3dDbGllbnQudHMiLCIuLi9zcmMvYXV0aG9yaXR5L0F1dGhvcml0eS50cyIsIi4uL3NyYy9hdXRob3JpdHkvQXV0aG9yaXR5RmFjdG9yeS50cyIsIi4uL3NyYy9jYWNoZS9lbnRpdGllcy9BcHBNZXRhZGF0YUVudGl0eS50cyIsIi4uL3NyYy9yZXNwb25zZS9BdXRoZW50aWNhdGlvblJlc3VsdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBBdXRoRXJyb3JNZXNzYWdlIGNsYXNzIGNvbnRhaW5pbmcgc3RyaW5nIGNvbnN0YW50cyB1c2VkIGJ5IGVycm9yIGNvZGVzIGFuZCBtZXNzYWdlcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBBdXRoRXJyb3JNZXNzYWdlID0ge1xyXG4gICAgdW5leHBlY3RlZEVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJ1bmV4cGVjdGVkX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJVbmV4cGVjdGVkIGVycm9yIGluIGF1dGhlbnRpY2F0aW9uLlwiXHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogR2VuZXJhbCBlcnJvciBjbGFzcyB0aHJvd24gYnkgdGhlIE1TQUwuanMgbGlicmFyeS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBdXRoRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcblxyXG4gICAgLy8gU2hvcnQgc3RyaW5nIGRlbm90aW5nIGVycm9yXHJcbiAgICBlcnJvckNvZGU6IHN0cmluZztcclxuICAgIC8vIERldGFpbGVkIGRlc2NyaXB0aW9uIG9mIGVycm9yXHJcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlcnJvckNvZGU6IHN0cmluZywgZXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JTdHJpbmcgPSBlcnJvck1lc3NhZ2UgPyBgJHtlcnJvckNvZGV9OiAke2Vycm9yTWVzc2FnZX1gIDogZXJyb3JDb2RlO1xyXG4gICAgICAgIHN1cGVyKGVycm9yU3RyaW5nKTtcclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgQXV0aEVycm9yLnByb3RvdHlwZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXJyb3JDb2RlID0gZXJyb3JDb2RlO1xyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiQXV0aEVycm9yXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGVycm9yIHRoYXQgaXMgdGhyb3duIHdoZW4gc29tZXRoaW5nIHVuZXhwZWN0ZWQgaGFwcGVucyBpbiB0aGUgbGlicmFyeS5cclxuICAgICAqIEBwYXJhbSBlcnJEZXNjIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlVW5leHBlY3RlZEVycm9yKGVyckRlc2M6IHN0cmluZyk6IEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBdXRoRXJyb3IoQXV0aEVycm9yTWVzc2FnZS51bmV4cGVjdGVkRXJyb3IuY29kZSwgYCR7QXV0aEVycm9yTWVzc2FnZS51bmV4cGVjdGVkRXJyb3IuZGVzY306ICR7ZXJyRGVzY31gKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4vQXV0aEVycm9yXCI7XHJcbmltcG9ydCB7IElkVG9rZW4gfSBmcm9tIFwiLi4vYWNjb3VudC9JZFRva2VuXCI7XHJcbmltcG9ydCB7IFNjb3BlU2V0IH0gZnJvbSBcIi4uL3JlcXVlc3QvU2NvcGVTZXRcIjtcclxuXHJcbi8qKlxyXG4gKiBDbGllbnRBdXRoRXJyb3JNZXNzYWdlIGNsYXNzIGNvbnRhaW5pbmcgc3RyaW5nIGNvbnN0YW50cyB1c2VkIGJ5IGVycm9yIGNvZGVzIGFuZCBtZXNzYWdlcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBDbGllbnRBdXRoRXJyb3JNZXNzYWdlID0ge1xyXG4gICAgY2xpZW50SW5mb0RlY29kaW5nRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImNsaWVudF9pbmZvX2RlY29kaW5nX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgY2xpZW50IGluZm8gY291bGQgbm90IGJlIHBhcnNlZC9kZWNvZGVkIGNvcnJlY3RseS4gUGxlYXNlIHJldmlldyB0aGUgdHJhY2UgdG8gZGV0ZXJtaW5lIHRoZSByb290IGNhdXNlLlwiXHJcbiAgICB9LFxyXG4gICAgY2xpZW50SW5mb0VtcHR5RXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImNsaWVudF9pbmZvX2VtcHR5X2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgY2xpZW50IGluZm8gd2FzIGVtcHR5LiBQbGVhc2UgcmV2aWV3IHRoZSB0cmFjZSB0byBkZXRlcm1pbmUgdGhlIHJvb3QgY2F1c2UuXCJcclxuICAgIH0sXHJcbiAgICBpZFRva2VuUGFyc2luZ0Vycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJpZF90b2tlbl9wYXJzaW5nX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJJRCB0b2tlbiBjYW5ub3QgYmUgcGFyc2VkLiBQbGVhc2UgcmV2aWV3IHN0YWNrIHRyYWNlIHRvIGRldGVybWluZSByb290IGNhdXNlLlwiXHJcbiAgICB9LFxyXG4gICAgbnVsbE9yRW1wdHlJZFRva2VuOiB7XHJcbiAgICAgICAgY29kZTogXCJudWxsX29yX2VtcHR5X2lkX3Rva2VuXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgaWRUb2tlbiBpcyBudWxsIG9yIGVtcHR5LiBQbGVhc2UgcmV2aWV3IHRoZSB0cmFjZSB0byBkZXRlcm1pbmUgdGhlIHJvb3QgY2F1c2UuXCJcclxuICAgIH0sXHJcbiAgICBlbmRwb2ludFJlc29sdXRpb25FcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwiZW5kcG9pbnRzX3Jlc29sdXRpb25fZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIkVycm9yOiBjb3VsZCBub3QgcmVzb2x2ZSBlbmRwb2ludHMuIFBsZWFzZSBjaGVjayBuZXR3b3JrIGFuZCB0cnkgYWdhaW4uXCJcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkQXV0aG9yaXR5VHlwZToge1xyXG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9hdXRob3JpdHlfdHlwZVwiLFxyXG4gICAgICAgIGRlc2M6IFwiVGhlIGdpdmVuIGF1dGhvcml0eSBpcyBub3QgYSB2YWxpZCB0eXBlIG9mIGF1dGhvcml0eSBzdXBwb3J0ZWQgYnkgTVNBTC4gUGxlYXNlIHJldmlldyB0aGUgdHJhY2UgdG8gZGV0ZXJtaW5lIHRoZSByb290IGNhdXNlLlwiXHJcbiAgICB9LFxyXG4gICAgaGFzaE5vdERlc2VyaWFsaXplZDoge1xyXG4gICAgICAgIGNvZGU6IFwiaGFzaF9ub3RfZGVzZXJpYWxpemVkXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgaGFzaCBwYXJhbWV0ZXJzIGNvdWxkIG5vdCBiZSBkZXNlcmlhbGl6ZWQuIFBsZWFzZSByZXZpZXcgdGhlIHRyYWNlIHRvIGRldGVybWluZSB0aGUgcm9vdCBjYXVzZS5cIlxyXG4gICAgfSxcclxuICAgIGJsYW5rR3VpZEdlbmVyYXRlZDoge1xyXG4gICAgICAgIGNvZGU6IFwiYmxhbmtfZ3VpZF9nZW5lcmF0ZWRcIixcclxuICAgICAgICBkZXNjOiBcIlRoZSBndWlkIGdlbmVyYXRlZCB3YXMgYmxhbmsuIFBsZWFzZSByZXZpZXcgdGhlIHRyYWNlIHRvIGRldGVybWluZSB0aGUgcm9vdCBjYXVzZS5cIlxyXG4gICAgfSxcclxuICAgIGludmFsaWRTdGF0ZUVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX3N0YXRlXCIsXHJcbiAgICAgICAgZGVzYzogXCJTdGF0ZSB3YXMgbm90IHRoZSBleHBlY3RlZCBmb3JtYXQuIFBsZWFzZSBjaGVjayB0aGUgbG9ncyB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgcmVxdWVzdCB3YXMgc2VudCB1c2luZyBQcm90b2NvbFV0aWxzLnNldFJlcXVlc3RTdGF0ZSgpLlwiXHJcbiAgICB9LFxyXG4gICAgc3RhdGVNaXNtYXRjaEVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJzdGF0ZV9taXNtYXRjaFwiLFxyXG4gICAgICAgIGRlc2M6IFwiU3RhdGUgbWlzbWF0Y2ggZXJyb3IuIFBsZWFzZSBjaGVjayB5b3VyIG5ldHdvcmsuIENvbnRpbnVlZCByZXF1ZXN0cyBtYXkgY2F1c2UgY2FjaGUgb3ZlcmZsb3cuXCJcclxuICAgIH0sXHJcbiAgICBub25jZU1pc21hdGNoRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcIm5vbmNlX21pc21hdGNoXCIsXHJcbiAgICAgICAgZGVzYzogXCJOb25jZSBtaXNtYXRjaCBlcnJvci4gVGhpcyBtYXkgYmUgY2F1c2VkIGJ5IGEgcmFjZSBjb25kaXRpb24gaW4gY29uY3VycmVudCByZXF1ZXN0cy5cIlxyXG4gICAgfSxcclxuICAgIGFjY291bnRNaXNtYXRjaEVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJhY2NvdW50X21pc21hdGNoXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgY2FjaGVkIGFjY291bnQgYW5kIGFjY291bnQgd2hpY2ggbWFkZSB0aGUgdG9rZW4gcmVxdWVzdCBkbyBub3QgbWF0Y2guXCJcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkSWRUb2tlbjoge1xyXG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9pZF90b2tlblwiLFxyXG4gICAgICAgIGRlc2M6IFwiSW52YWxpZCBJRCB0b2tlbiBmb3JtYXQuXCJcclxuICAgIH0sXHJcbiAgICBub1Rva2Vuc0ZvdW5kRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcIm5vX3Rva2Vuc19mb3VuZFwiLFxyXG4gICAgICAgIGRlc2M6IFwiTm8gdG9rZW5zIHdlcmUgZm91bmQgZm9yIHRoZSBnaXZlbiBzY29wZXMsIGFuZCBubyBhdXRob3JpemF0aW9uIGNvZGUgd2FzIHBhc3NlZCB0byBhY3F1aXJlVG9rZW4uIFlvdSBtdXN0IHJldHJpZXZlIGFuIGF1dGhvcml6YXRpb24gY29kZSBiZWZvcmUgbWFraW5nIGEgY2FsbCB0byBhY3F1aXJlVG9rZW4oKS5cIlxyXG4gICAgfSxcclxuICAgIGNhY2hlUGFyc2VFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwiY2FjaGVfcGFyc2VfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIkNvdWxkIG5vdCBwYXJzZSBjYWNoZSBrZXkuXCJcclxuICAgIH0sXHJcbiAgICB1c2VyTG9naW5SZXF1aXJlZEVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJ1c2VyX2xvZ2luX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJVc2VyIGxvZ2luIGlzIHJlcXVpcmVkLlwiXHJcbiAgICB9LFxyXG4gICAgbXVsdGlwbGVNYXRjaGluZ1Rva2Vuczoge1xyXG4gICAgICAgIGNvZGU6IFwibXVsdGlwbGVfbWF0Y2hpbmdfdG9rZW5zXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgY2FjaGUgY29udGFpbnMgbXVsdGlwbGUgdG9rZW5zIHNhdGlzZnlpbmcgdGhlIHJlcXVpcmVtZW50cy4gXCIgK1xyXG4gICAgICAgICAgICBcIkNhbGwgQWNxdWlyZVRva2VuIGFnYWluIHByb3ZpZGluZyBtb3JlIHJlcXVpcmVtZW50cyBzdWNoIGFzIGF1dGhvcml0eSBvciBhY2NvdW50LlwiXHJcbiAgICB9LFxyXG4gICAgbXVsdGlwbGVNYXRjaGluZ0FjY291bnRzOiB7XHJcbiAgICAgICAgY29kZTogXCJtdWx0aXBsZV9tYXRjaGluZ19hY2NvdW50c1wiLFxyXG4gICAgICAgIGRlc2M6IFwiVGhlIGNhY2hlIGNvbnRhaW5zIG11bHRpcGxlIGFjY291bnRzIHNhdGlzZnlpbmcgdGhlIGdpdmVuIHBhcmFtZXRlcnMuIFBsZWFzZSBwYXNzIG1vcmUgaW5mbyB0byBvYnRhaW4gdGhlIGNvcnJlY3QgYWNjb3VudFwiXHJcbiAgICB9LFxyXG4gICAgdG9rZW5SZXF1ZXN0Q2Fubm90QmVNYWRlOiB7XHJcbiAgICAgICAgY29kZTogXCJyZXF1ZXN0X2Nhbm5vdF9iZV9tYWRlXCIsXHJcbiAgICAgICAgZGVzYzogXCJUb2tlbiByZXF1ZXN0IGNhbm5vdCBiZSBtYWRlIHdpdGhvdXQgYXV0aG9yaXphdGlvbiBjb2RlIG9yIHJlZnJlc2ggdG9rZW4uXCJcclxuICAgIH0sXHJcbiAgICBhcHBlbmRFbXB0eVNjb3BlRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImNhbm5vdF9hcHBlbmRfZW1wdHlfc2NvcGVcIixcclxuICAgICAgICBkZXNjOiBcIkNhbm5vdCBhcHBlbmQgbnVsbCBvciBlbXB0eSBzY29wZSB0byBTY29wZVNldC4gUGxlYXNlIGNoZWNrIHRoZSBzdGFjayB0cmFjZSBmb3IgbW9yZSBpbmZvLlwiXHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlRW1wdHlTY29wZUVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJjYW5ub3RfcmVtb3ZlX2VtcHR5X3Njb3BlXCIsXHJcbiAgICAgICAgZGVzYzogXCJDYW5ub3QgcmVtb3ZlIG51bGwgb3IgZW1wdHkgc2NvcGUgZnJvbSBTY29wZVNldC4gUGxlYXNlIGNoZWNrIHRoZSBzdGFjayB0cmFjZSBmb3IgbW9yZSBpbmZvLlwiXHJcbiAgICB9LFxyXG4gICAgYXBwZW5kU2NvcGVTZXRFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwiY2Fubm90X2FwcGVuZF9zY29wZXNldFwiLFxyXG4gICAgICAgIGRlc2M6IFwiQ2Fubm90IGFwcGVuZCBTY29wZVNldCBkdWUgdG8gZXJyb3IuXCJcclxuICAgIH0sXHJcbiAgICBlbXB0eUlucHV0U2NvcGVTZXRFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwiZW1wdHlfaW5wdXRfc2NvcGVzZXRcIixcclxuICAgICAgICBkZXNjOiBcIkVtcHR5IGlucHV0IFNjb3BlU2V0IGNhbm5vdCBiZSBwcm9jZXNzZWQuXCJcclxuICAgIH0sXHJcbiAgICBEZXZpY2VDb2RlUG9sbGluZ0NhbmNlbGxlZDoge1xyXG4gICAgICAgIGNvZGU6IFwiZGV2aWNlX2NvZGVfcG9sbGluZ19jYW5jZWxsZWRcIixcclxuICAgICAgICBkZXNjOiBcIkNhbGxlciBoYXMgY2FuY2VsbGVkIHRva2VuIGVuZHBvaW50IHBvbGxpbmcgZHVyaW5nIGRldmljZSBjb2RlIGZsb3cgYnkgc2V0dGluZyBEZXZpY2VDb2RlUmVxdWVzdC5jYW5jZWwgPSB0cnVlLlwiXHJcbiAgICB9LFxyXG4gICAgRGV2aWNlQ29kZUV4cGlyZWQ6IHtcclxuICAgICAgICBjb2RlOiBcImRldmljZV9jb2RlX2V4cGlyZWRcIixcclxuICAgICAgICBkZXNjOiBcIkRldmljZSBjb2RlIGlzIGV4cGlyZWQuXCJcclxuICAgIH0sXHJcbiAgICBOb0FjY291bnRJblNpbGVudFJlcXVlc3Q6IHtcclxuICAgICAgICBjb2RlOiBcIm5vX2FjY291bnRfaW5fc2lsZW50X3JlcXVlc3RcIixcclxuICAgICAgICBkZXNjOiBcIlBsZWFzZSBwYXNzIGFuIGFjY291bnQgb2JqZWN0LCBzaWxlbnQgZmxvdyBpcyBub3Qgc3VwcG9ydGVkIHdpdGhvdXQgYWNjb3VudCBpbmZvcm1hdGlvblwiXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZENhY2hlUmVjb3JkOiB7XHJcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2NhY2hlX3JlY29yZFwiLFxyXG4gICAgICAgIGRlc2M6IFwiQ2FjaGUgcmVjb3JkIG9iamVjdCB3YXMgbnVsbCBvciB1bmRlZmluZWQuXCJcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkQ2FjaGVFbnZpcm9ubWVudDoge1xyXG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9jYWNoZV9lbnZpcm9ubWVudFwiLFxyXG4gICAgICAgIGRlc2M6IFwiSW52YWxpZCBlbnZpcm9ubWVudCB3aGVuIGF0dGVtcHRpbmcgdG8gY3JlYXRlIGNhY2hlIGVudHJ5XCJcclxuICAgIH0sXHJcbiAgICBub0FjY291bnRGb3VuZDoge1xyXG4gICAgICAgIGNvZGU6IFwibm9fYWNjb3VudF9mb3VuZFwiLFxyXG4gICAgICAgIGRlc2M6IFwiTm8gYWNjb3VudCBmb3VuZCBpbiBjYWNoZSBmb3IgZ2l2ZW4ga2V5LlwiXHJcbiAgICB9LFxyXG4gICAgQ2FjaGVQbHVnaW5FcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwibm8gY2FjaGUgcGx1Z2luIHNldCBvbiBDYWNoZU1hbmFnZXJcIixcclxuICAgICAgICBkZXNjOiBcIklDYWNoZVBsdWdpbiBuZWVkcyB0byBiZSBzZXQgYmVmb3JlIHVzaW5nIHJlYWRGcm9tU3RvcmFnZSBvciB3cml0ZUZyb21TdG9yYWdlXCJcclxuICAgIH0sXHJcbiAgICBub0NyeXB0b09iajoge1xyXG4gICAgICAgIGNvZGU6IFwibm9fY3J5cHRvX29iamVjdFwiLFxyXG4gICAgICAgIGRlc2M6IFwiTm8gY3J5cHRvIG9iamVjdCBkZXRlY3RlZC4gVGhpcyBpcyByZXF1aXJlZCBmb3IgdGhlIGZvbGxvd2luZyBvcGVyYXRpb246IFwiXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZENhY2hlVHlwZToge1xyXG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9jYWNoZV90eXBlXCIsXHJcbiAgICAgICAgZGVzYzogXCJJbnZhbGlkIGNhY2hlIHR5cGVcIlxyXG4gICAgfSxcclxuICAgIHVuZXhwZWN0ZWRBY2NvdW50VHlwZToge1xyXG4gICAgICAgIGNvZGU6IFwidW5leHBlY3RlZF9hY2NvdW50X3R5cGVcIixcclxuICAgICAgICBkZXNjOiBcIlVuZXhwZWN0ZWQgYWNjb3VudCB0eXBlLlwiXHJcbiAgICB9LFxyXG4gICAgdW5leHBlY3RlZENyZWRlbnRpYWxUeXBlOiB7XHJcbiAgICAgICAgY29kZTogXCJ1bmV4cGVjdGVkX2NyZWRlbnRpYWxfdHlwZVwiLFxyXG4gICAgICAgIGRlc2M6IFwiVW5leHBlY3RlZCBjcmVkZW50aWFsIHR5cGUuXCJcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBFcnJvciB0aHJvd24gd2hlbiB0aGVyZSBpcyBhbiBlcnJvciBpbiB0aGUgY2xpZW50IGNvZGUgcnVubmluZyBvbiB0aGUgYnJvd3Nlci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbGllbnRBdXRoRXJyb3IgZXh0ZW5kcyBBdXRoRXJyb3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlcnJvckNvZGUsIGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJDbGllbnRBdXRoRXJyb3JcIjtcclxuXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIENsaWVudEF1dGhFcnJvci5wcm90b3R5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB0aHJvd24gd2hlbiBjbGllbnQgaW5mbyBvYmplY3QgZG9lc24ndCBkZWNvZGUgY29ycmVjdGx5LlxyXG4gICAgICogQHBhcmFtIGNhdWdodEVycm9yXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVDbGllbnRJbmZvRGVjb2RpbmdFcnJvcihjYXVnaHRFcnJvcjogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNsaWVudEluZm9EZWNvZGluZ0Vycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2xpZW50SW5mb0RlY29kaW5nRXJyb3IuZGVzY30gRmFpbGVkIHdpdGggZXJyb3I6ICR7Y2F1Z2h0RXJyb3J9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGVycm9yIHRocm93biBpZiB0aGUgY2xpZW50IGluZm8gaXMgZW1wdHkuXHJcbiAgICAgKiBAcGFyYW0gcmF3Q2xpZW50SW5mb1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQ2xpZW50SW5mb0VtcHR5RXJyb3IocmF3Q2xpZW50SW5mbzogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNsaWVudEluZm9FbXB0eUVycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2xpZW50SW5mb0VtcHR5RXJyb3IuZGVzY30gR2l2ZW4gT2JqZWN0OiAke3Jhd0NsaWVudEluZm99YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGVycm9yIHRocm93biB3aGVuIHRoZSBpZCB0b2tlbiBleHRyYWN0aW9uIGVycm9ycyBvdXQuXHJcbiAgICAgKiBAcGFyYW0gZXJyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVJZFRva2VuUGFyc2luZ0Vycm9yKGNhdWdodEV4dHJhY3Rpb25FcnJvcjogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmlkVG9rZW5QYXJzaW5nRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5pZFRva2VuUGFyc2luZ0Vycm9yLmRlc2N9IEZhaWxlZCB3aXRoIGVycm9yOiAke2NhdWdodEV4dHJhY3Rpb25FcnJvcn1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gZXJyb3IgdGhyb3duIHdoZW4gdGhlIGlkIHRva2VuIHN0cmluZyBpcyBudWxsIG9yIGVtcHR5LlxyXG4gICAgICogQHBhcmFtIGludmFsaWRSYXdUb2tlblN0cmluZ1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlSWRUb2tlbk51bGxPckVtcHR5RXJyb3IoaW52YWxpZFJhd1Rva2VuU3RyaW5nOiBzdHJpbmcpIDogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm51bGxPckVtcHR5SWRUb2tlbi5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm51bGxPckVtcHR5SWRUb2tlbi5kZXNjfSBSYXcgSUQgVG9rZW4gVmFsdWU6ICR7aW52YWxpZFJhd1Rva2VuU3RyaW5nfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB0aHJvd24gd2hlbiB0aGUgZW5kcG9pbnQgZGlzY292ZXJ5IGRvZXNuJ3QgY29tcGxldGUgY29ycmVjdGx5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlRW5kcG9pbnREaXNjb3ZlcnlJbmNvbXBsZXRlRXJyb3IoZXJyRGV0YWlsOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5lbmRwb2ludFJlc29sdXRpb25FcnJvci5kZXNjfSBEZXRhaWw6ICR7ZXJyRGV0YWlsfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB0aHJvd24gaWYgYXV0aG9yaXR5IHR5cGUgaXMgbm90IHZhbGlkLlxyXG4gICAgICogQHBhcmFtIGludmFsaWRBdXRob3JpdHlFcnJvclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlSW52YWxpZEF1dGhvcml0eVR5cGVFcnJvcihnaXZlblVybDogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRBdXRob3JpdHlUeXBlLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuaW52YWxpZEF1dGhvcml0eVR5cGUuZGVzY30gR2l2ZW4gVXJsOiAke2dpdmVuVXJsfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB0aHJvd24gd2hlbiB0aGUgaGFzaCBjYW5ub3QgYmUgZGVzZXJpYWxpemVkLlxyXG4gICAgICogQHBhcmFtIGludmFsaWRBdXRob3JpdHlFcnJvclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlSGFzaE5vdERlc2VyaWFsaXplZEVycm9yKGhhc2hQYXJhbU9iajogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmhhc2hOb3REZXNlcmlhbGl6ZWQuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5oYXNoTm90RGVzZXJpYWxpemVkLmRlc2N9IEdpdmVuIE9iamVjdDogJHtoYXNoUGFyYW1PYmp9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGVycm9yIHRocm93biB3aGVuIHRoZSBzdGF0ZSBjYW5ub3QgYmUgcGFyc2VkLlxyXG4gICAgICogQHBhcmFtIGludmFsaWRTdGF0ZSBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRTdGF0ZUVycm9yKGludmFsaWRTdGF0ZTogc3RyaW5nLCBlcnJvclN0cmluZz86IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkU3RhdGVFcnJvci5jb2RlLCBcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkU3RhdGVFcnJvci5kZXNjfSBJbnZhbGlkIFN0YXRlOiAke2ludmFsaWRTdGF0ZX0sIFJvb3QgRXJyOiAke2Vycm9yU3RyaW5nfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB0aHJvd24gd2hlbiB0d28gc3RhdGVzIGRvIG5vdCBtYXRjaC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVN0YXRlTWlzbWF0Y2hFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2Uuc3RhdGVNaXNtYXRjaEVycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2Uuc3RhdGVNaXNtYXRjaEVycm9yLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB0aHJvd24gd2hlbiB0aGUgbm9uY2UgZG9lcyBub3QgbWF0Y2guXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVOb25jZU1pc21hdGNoRXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm5vbmNlTWlzbWF0Y2hFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm5vbmNlTWlzbWF0Y2hFcnJvci5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gZXJyb3IgdGhyb3duIHdoZW4gdGhlIGNhY2hlZCBhY2NvdW50IGFuZCByZXNwb25zZSBhY2NvdW50IGRvIG5vdCBtYXRjaC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUFjY291bnRNaXNtYXRjaEVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5hY2NvdW50TWlzbWF0Y2hFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmFjY291bnRNaXNtYXRjaEVycm9yLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGVycm9yIGlmIGlkVG9rZW4gaXMgbm90IGNvcnJlY3RseSBmb3JtZWRcclxuICAgICAqIEBwYXJhbSBpZFRva2VuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVJbnZhbGlkSWRUb2tlbkVycm9yKGlkVG9rZW46IElkVG9rZW4pIDogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRJZFRva2VuLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuaW52YWxpZElkVG9rZW4uZGVzY30gR2l2ZW4gdG9rZW46ICR7SlNPTi5zdHJpbmdpZnkoaWRUb2tlbil9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGVycm9yIHRocm93biB3aGVuIHRoZSBhdXRob3JpemF0aW9uIGNvZGUgcmVxdWlyZWQgZm9yIGEgdG9rZW4gcmVxdWVzdCBpcyBudWxsIG9yIGVtcHR5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlTm9Ub2tlbnNGb3VuZEVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5ub1Rva2Vuc0ZvdW5kRXJyb3IuY29kZSwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5ub1Rva2Vuc0ZvdW5kRXJyb3IuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGVycm9yIGluIGNhY2hlIHBhcnNpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVDYWNoZVBhcnNlRXJyb3IoY2FjaGVLZXk6IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5jYWNoZVBhcnNlRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5jYWNoZVBhcnNlRXJyb3IuZGVzY30gQ2FjaGUga2V5OiAke2NhY2hlS2V5fWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGVycm9yIHdoZW4gcmVuZXdpbmcgdG9rZW4gd2l0aG91dCBsb2dpbi5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVVzZXJMb2dpblJlcXVpcmVkRXJyb3IoKSA6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyTG9naW5SZXF1aXJlZEVycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckxvZ2luUmVxdWlyZWRFcnJvci5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciB3aGVuIG11bHRpcGxlIHRva2VucyBhcmUgaW4gY2FjaGUgZm9yIHRoZSBnaXZlbiBzY29wZS5cclxuICAgICAqIEBwYXJhbSBzY29wZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlTXVsdGlwbGVNYXRjaGluZ1Rva2Vuc0luQ2FjaGVFcnJvcihzY29wZTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm11bHRpcGxlTWF0Y2hpbmdUb2tlbnMuY29kZSxcclxuICAgICAgICAgICAgYENhY2hlIGVycm9yIGZvciBzY29wZSAke3Njb3BlfTogJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm11bHRpcGxlTWF0Y2hpbmdUb2tlbnMuZGVzY30uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3Igd2hlbiBtdWx0aXBsZSB0b2tlbnMgYXJlIGluIGNhY2hlIGZvciB0aGUgZ2l2ZW4gc2NvcGUuXHJcbiAgICAgKiBAcGFyYW0gc2NvcGVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZU11bHRpcGxlTWF0Y2hpbmdBY2NvdW50c0luQ2FjaGVFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UubXVsdGlwbGVNYXRjaGluZ0FjY291bnRzLmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UubXVsdGlwbGVNYXRjaGluZ0FjY291bnRzLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGVycm9yIHdoZW4gbm8gYXV0aCBjb2RlIG9yIHJlZnJlc2ggdG9rZW4gaXMgZ2l2ZW4gdG8gU2VydmVyVG9rZW5SZXF1ZXN0UGFyYW1ldGVycy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVRva2VuUmVxdWVzdENhbm5vdEJlTWFkZUVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS50b2tlblJlcXVlc3RDYW5ub3RCZU1hZGUuY29kZSwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS50b2tlblJlcXVlc3RDYW5ub3RCZU1hZGUuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3Igd2hlbiBhdHRlbXB0aW5nIHRvIGFwcGVuZCBhIG51bGwsIHVuZGVmaW5lZCBvciBlbXB0eSBzY29wZSB0byBhIHNldFxyXG4gICAgICogQHBhcmFtIGdpdmVuU2NvcGVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUFwcGVuZEVtcHR5U2NvcGVUb1NldEVycm9yKGdpdmVuU2NvcGU6IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5hcHBlbmRFbXB0eVNjb3BlRXJyb3IuY29kZSwgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5hcHBlbmRFbXB0eVNjb3BlRXJyb3IuZGVzY30gR2l2ZW4gU2NvcGU6ICR7Z2l2ZW5TY29wZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciB3aGVuIGF0dGVtcHRpbmcgdG8gYXBwZW5kIGEgbnVsbCwgdW5kZWZpbmVkIG9yIGVtcHR5IHNjb3BlIHRvIGEgc2V0XHJcbiAgICAgKiBAcGFyYW0gZ2l2ZW5TY29wZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlUmVtb3ZlRW1wdHlTY29wZUZyb21TZXRFcnJvcihnaXZlblNjb3BlOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UucmVtb3ZlRW1wdHlTY29wZUVycm9yLmNvZGUsIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UucmVtb3ZlRW1wdHlTY29wZUVycm9yLmRlc2N9IEdpdmVuIFNjb3BlOiAke2dpdmVuU2NvcGV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3Igd2hlbiBhdHRlbXB0aW5nIHRvIGFwcGVuZCBudWxsIG9yIGVtcHR5IFNjb3BlU2V0LlxyXG4gICAgICogQHBhcmFtIGFwcGVuZEVycm9yXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVBcHBlbmRTY29wZVNldEVycm9yKGFwcGVuZEVycm9yOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuYXBwZW5kU2NvcGVTZXRFcnJvci5jb2RlLCBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmFwcGVuZFNjb3BlU2V0RXJyb3IuZGVzY30gRGV0YWlsIEVycm9yOiAke2FwcGVuZEVycm9yfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGVycm9yIGlmIFNjb3BlU2V0IGlzIG51bGwgb3IgdW5kZWZpbmVkLlxyXG4gICAgICogQHBhcmFtIGdpdmVuU2NvcGVTZXRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUVtcHR5SW5wdXRTY29wZVNldEVycm9yKGdpdmVuU2NvcGVTZXQ6IFNjb3BlU2V0KTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmVtcHR5SW5wdXRTY29wZVNldEVycm9yLmNvZGUsIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW1wdHlJbnB1dFNjb3BlU2V0RXJyb3IuZGVzY30gR2l2ZW4gU2NvcGVTZXQ6ICR7Z2l2ZW5TY29wZVNldH1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciBpZiB1c2VyIHNldHMgQ2FuY2VsbGF0aW9uVG9rZW4uY2FuY2VsID0gdHJ1ZSBkdXJpbmcgcG9sbGluZyBvZiB0b2tlbiBlbmRwb2ludCBkdXJpbmcgZGV2aWNlIGNvZGUgZmxvd1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlRGV2aWNlQ29kZUNhbmNlbGxlZEVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5EZXZpY2VDb2RlUG9sbGluZ0NhbmNlbGxlZC5jb2RlLCBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLkRldmljZUNvZGVQb2xsaW5nQ2FuY2VsbGVkLmRlc2N9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3IgaWYgZGV2aWNlIGNvZGUgaXMgZXhwaXJlZFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlRGV2aWNlQ29kZUV4cGlyZWRFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuRGV2aWNlQ29kZUV4cGlyZWQuY29kZSwgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5EZXZpY2VDb2RlRXhwaXJlZC5kZXNjfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGVycm9yIHdoZW4gc2lsZW50IHJlcXVlc3RzIGFyZSBtYWRlIHdpdGhvdXQgYW4gYWNjb3VudCBvYmplY3RcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZU5vQWNjb3VudEluU2lsZW50UmVxdWVzdEVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5Ob0FjY291bnRJblNpbGVudFJlcXVlc3QuY29kZSwgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5Ob0FjY291bnRJblNpbGVudFJlcXVlc3QuZGVzY31gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciB3aGVuIGNhY2hlIHJlY29yZCBpcyBudWxsIG9yIHVuZGVmaW5lZC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZU51bGxPclVuZGVmaW5lZENhY2hlUmVjb3JkKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkQ2FjaGVSZWNvcmQuY29kZSwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkQ2FjaGVSZWNvcmQuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3Igd2hlbiBwcm92aWRlZCBlbnZpcm9ubWVudCBpcyBub3QgcGFydCBvZiB0aGUgQ2xvdWREaXNjb3ZlcnlNZXRhZGF0YSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRDYWNoZUVudmlyb25tZW50RXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRDYWNoZUVudmlyb25tZW50LmNvZGUsIENsaWVudEF1dGhFcnJvck1lc3NhZ2UuaW52YWxpZENhY2hlRW52aXJvbm1lbnQuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3Igd2hlbiBhY2NvdW50IGlzIG5vdCBmb3VuZCBpbiBjYWNoZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZU5vQWNjb3VudEZvdW5kRXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm5vQWNjb3VudEZvdW5kLmNvZGUsIENsaWVudEF1dGhFcnJvck1lc3NhZ2Uubm9BY2NvdW50Rm91bmQuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3IgaWYgSUNhY2hlUGx1Z2luIG5vdCBzZXQgb24gQ2FjaGVNYW5hZ2VyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQ2FjaGVQbHVnaW5FcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuQ2FjaGVQbHVnaW5FcnJvci5jb2RlLCBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLkNhY2hlUGx1Z2luRXJyb3IuZGVzY31gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciBpZiBjcnlwdG8gb2JqZWN0IG5vdCBmb3VuZC5cclxuICAgICAqIEBwYXJhbSBvcGVyYXRpb25OYW1lIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlTm9DcnlwdG9PYmplY3RFcnJvcihvcGVyYXRpb25OYW1lOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2Uubm9DcnlwdG9PYmouY29kZSwgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5ub0NyeXB0b09iai5kZXNjfSR7b3BlcmF0aW9uTmFtZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogVGhyb3dzIGVycm9yIGlmIGNhY2hlIHR5cGUgaXMgaW52YWxpZC5cclxuICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlSW52YWxpZENhY2hlVHlwZUVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkQ2FjaGVUeXBlLmNvZGUsIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuaW52YWxpZENhY2hlVHlwZS5kZXNjfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBUaHJvd3MgZXJyb3IgaWYgdW5leHBlY3RlZCBhY2NvdW50IHR5cGUuXHJcbiAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVVuZXhwZWN0ZWRBY2NvdW50VHlwZUVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51bmV4cGVjdGVkQWNjb3VudFR5cGUuY29kZSwgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS51bmV4cGVjdGVkQWNjb3VudFR5cGUuZGVzY31gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogVGhyb3dzIGVycm9yIGlmIHVuZXhwZWN0ZWQgY3JlZGVudGlhbCB0eXBlLlxyXG4gICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVVbmV4cGVjdGVkQ3JlZGVudGlhbFR5cGVFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UudW5leHBlY3RlZENyZWRlbnRpYWxUeXBlLmNvZGUsIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UudW5leHBlY3RlZENyZWRlbnRpYWxUeXBlLmRlc2N9YCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcbmltcG9ydCB7IERlY29kZWRKd3QgfSBmcm9tIFwiLi4vYWNjb3VudC9EZWNvZGVkSnd0XCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RyaW5nVXRpbHMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogZGVjb2RlIGEgSldUXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGp3dFRva2VuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkZWNvZGVKd3Qoand0VG9rZW46IHN0cmluZyk6IERlY29kZWRKd3Qge1xyXG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KGp3dFRva2VuKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSWRUb2tlbk51bGxPckVtcHR5RXJyb3Ioand0VG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpZFRva2VuUGFydHNSZWdleCA9IC9eKFteXFwuXFxzXSopXFwuKFteXFwuXFxzXSspXFwuKFteXFwuXFxzXSopJC87XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGlkVG9rZW5QYXJ0c1JlZ2V4LmV4ZWMoand0VG9rZW4pO1xyXG4gICAgICAgIGlmICghbWF0Y2hlcyB8fCBtYXRjaGVzLmxlbmd0aCA8IDQpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUlkVG9rZW5QYXJzaW5nRXJyb3IoYEdpdmVuIHRva2VuIGlzIG1hbGZvcm1lZDogJHtKU09OLnN0cmluZ2lmeShqd3RUb2tlbil9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNyYWNrZWRUb2tlbjogRGVjb2RlZEp3dCA9IHtcclxuICAgICAgICAgICAgaGVhZGVyOiBtYXRjaGVzWzFdLFxyXG4gICAgICAgICAgICBKV1NQYXlsb2FkOiBtYXRjaGVzWzJdLFxyXG4gICAgICAgICAgICBKV1NTaWc6IG1hdGNoZXNbM11cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBjcmFja2VkVG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiBhIHN0cmluZyBpcyBlbXB0eS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc3RyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2Ygc3RyID09PSBcInVuZGVmaW5lZFwiIHx8ICFzdHIgfHwgMCA9PT0gc3RyLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXJzZXMgc3RyaW5nIGludG8gYW4gb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBxdWVyeVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcXVlcnlTdHJpbmdUb09iamVjdDxUPihxdWVyeTogc3RyaW5nKTogVCB7XHJcbiAgICAgICAgbGV0IG1hdGNoOiBBcnJheTxzdHJpbmc+OyAvLyBSZWdleCBmb3IgcmVwbGFjaW5nIGFkZGl0aW9uIHN5bWJvbCB3aXRoIGEgc3BhY2VcclxuICAgICAgICBjb25zdCBwbCA9IC9cXCsvZztcclxuICAgICAgICBjb25zdCBzZWFyY2ggPSAvKFteJj1dKyk9KFteJl0qKS9nO1xyXG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChzOiBzdHJpbmcpOiBzdHJpbmcgPT4gZGVjb2RlVVJJQ29tcG9uZW50KGRlY29kZVVSSUNvbXBvbmVudChzLnJlcGxhY2UocGwsIFwiIFwiKSkpO1xyXG4gICAgICAgIGNvbnN0IG9iajoge30gPSB7fTtcclxuICAgICAgICBtYXRjaCA9IHNlYXJjaC5leGVjKHF1ZXJ5KTtcclxuICAgICAgICB3aGlsZSAobWF0Y2gpIHtcclxuICAgICAgICAgICAgb2JqW2RlY29kZShtYXRjaFsxXSldID0gZGVjb2RlKG1hdGNoWzJdKTtcclxuICAgICAgICAgICAgbWF0Y2ggPSBzZWFyY2guZXhlYyhxdWVyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmogYXMgVDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyaW1zIGVudHJpZXMgYW5kIGNvbnZlcnRzIHRoZW0gdG8gbG93ZXIgY2FzZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB0cmltQW5kQ29udmVydEFycmF5RW50cmllc1RvTG93ZXJDYXNlKGFycjogQXJyYXk8c3RyaW5nPik6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBhcnIubWFwKGVudHJ5ID0+IGVudHJ5LnRyaW0oKS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgZW1wdHkgc3RyaW5ncyBmcm9tIGFycmF5XHJcbiAgICAgKiBAcGFyYW0gYXJyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyByZW1vdmVFbXB0eVN0cmluZ3NGcm9tQXJyYXkoYXJyOiBBcnJheTxzdHJpbmc+KTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIGFyci5maWx0ZXIoZW50cnkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gIVN0cmluZ1V0aWxzLmlzRW1wdHkoZW50cnkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5pbXBvcnQgcGtnIGZyb20gXCIuLi8uLi9wYWNrYWdlLmpzb25cIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgTG9nZ2VyT3B0aW9ucyB9IGZyb20gXCIuLi9jb25maWcvQ2xpZW50Q29uZmlndXJhdGlvblwiO1xyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgZm9yIGxvZ2dlciBtZXNzYWdlcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIExvZ2dlck1lc3NhZ2VPcHRpb25zID0ge1xyXG4gICAgbG9nTGV2ZWw6IExvZ0xldmVsLFxyXG4gICAgY29ycmVsYXRpb25JZD86IHN0cmluZyxcclxuICAgIGNvbnRhaW5zUGlpPzogYm9vbGVhbixcclxuICAgIGNvbnRleHQ/OiBzdHJpbmdcclxufTtcclxuXHJcbi8qKlxyXG4gKiBMb2cgbWVzc2FnZSBsZXZlbC5cclxuICovXHJcbmV4cG9ydCBlbnVtIExvZ0xldmVsIHtcclxuICAgIEVycm9yLFxyXG4gICAgV2FybmluZyxcclxuICAgIEluZm8sXHJcbiAgICBWZXJib3NlXHJcbn07XHJcblxyXG4vKipcclxuICogQ2FsbGJhY2sgdG8gc2VuZCB0aGUgbWVzc2FnZXMgdG8uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElMb2dnZXJDYWxsYmFjayB7XHJcbiAgICAobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcsIGNvbnRhaW5zUGlpOiBib29sZWFuKTogdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYXNzIHdoaWNoIGZhY2lsaXRhdGVzIGxvZ2dpbmcgb2YgbWVzc2FnZXMgdG8gYSBzcGVjaWZpYyBwbGFjZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xyXG5cclxuICAgIC8vIENvcnJlbGF0aW9uIElEIGZvciByZXF1ZXN0LCB1c3VhbGx5IHNldCBieSB1c2VyLlxyXG4gICAgcHJpdmF0ZSBjb3JyZWxhdGlvbklkOiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ3VycmVudCBsb2cgbGV2ZWwsIGRlZmF1bHRzIHRvIGluZm8uXHJcbiAgICBwcml2YXRlIGxldmVsOiBMb2dMZXZlbCA9IExvZ0xldmVsLkluZm87XHJcblxyXG4gICAgLy8gQm9vbGVhbiBkZXNjcmliaW5nIHdoZXRoZXIgUElJIGxvZ2dpbmcgaXMgYWxsb3dlZC5cclxuICAgIHByaXZhdGUgcGlpTG9nZ2luZ0VuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLy8gQ2FsbGJhY2sgdG8gc2VuZCBtZXNzYWdlcyB0by5cclxuICAgIHByaXZhdGUgbG9jYWxDYWxsYmFjazogSUxvZ2dlckNhbGxiYWNrO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxvZ2dlck9wdGlvbnM6IExvZ2dlck9wdGlvbnMpIHtcclxuICAgICAgICBpZiAobG9nZ2VyT3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2FsQ2FsbGJhY2sgPSBsb2dnZXJPcHRpb25zLmxvZ2dlckNhbGxiYWNrO1xyXG4gICAgICAgICAgICB0aGlzLnBpaUxvZ2dpbmdFbmFibGVkID0gbG9nZ2VyT3B0aW9ucy5waWlMb2dnaW5nRW5hYmxlZDtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbCA9IGxvZ2dlck9wdGlvbnMubG9nTGV2ZWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9nIG1lc3NhZ2Ugd2l0aCByZXF1aXJlZCBvcHRpb25zLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxvZ01lc3NhZ2UobG9nTWVzc2FnZTogc3RyaW5nLCBvcHRpb25zOiBMb2dnZXJNZXNzYWdlT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgICAgIGlmICgob3B0aW9ucy5sb2dMZXZlbCA+IHRoaXMubGV2ZWwpIHx8ICghdGhpcy5waWlMb2dnaW5nRW5hYmxlZCAmJiBvcHRpb25zLmNvbnRhaW5zUGlpKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBsb2dIZWFkZXI6IHN0cmluZyA9IFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5jb3JyZWxhdGlvbklkKSA/IGBbJHt0aW1lc3RhbXB9XSA6IGAgOiBgWyR7dGltZXN0YW1wfV0gOiBbJHt0aGlzLmNvcnJlbGF0aW9uSWR9XWA7XHJcbiAgICAgICAgY29uc3QgbG9nID0gYCR7bG9nSGVhZGVyfSA6ICR7cGtnLnZlcnNpb259IDogJHtMb2dMZXZlbFtvcHRpb25zLmxvZ0xldmVsXX0gLSAke2xvZ01lc3NhZ2V9YDtcclxuICAgICAgICAvLyBkZWJ1ZyhgbXNhbDoke0xvZ0xldmVsW29wdGlvbnMubG9nTGV2ZWxdfSR7b3B0aW9ucy5jb250YWluc1BpaSA/IFwiLVBpaVwiOiBcIlwifSR7b3B0aW9ucy5jb250ZXh0ID8gYDoke29wdGlvbnMuY29udGV4dH1gIDogXCJcIn1gKShsb2dNZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmV4ZWN1dGVDYWxsYmFjayhvcHRpb25zLmxvZ0xldmVsLCBsb2csIG9wdGlvbnMuY29udGFpbnNQaWkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhlY3V0ZSBjYWxsYmFjayB3aXRoIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGV4ZWN1dGVDYWxsYmFjayhsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZywgY29udGFpbnNQaWk6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxDYWxsYmFjayhsZXZlbCwgbWVzc2FnZSwgY29udGFpbnNQaWkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvZ3MgZXJyb3IgbWVzc2FnZXMuXHJcbiAgICAgKi9cclxuICAgIGVycm9yKG1lc3NhZ2U6IHN0cmluZywgY29ycmVsYXRpb25JZD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9nTWVzc2FnZShtZXNzYWdlLCB7XHJcbiAgICAgICAgICAgIGxvZ0xldmVsOiBMb2dMZXZlbC5FcnJvcixcclxuICAgICAgICAgICAgY29udGFpbnNQaWk6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb3JyZWxhdGlvbklkOiBjb3JyZWxhdGlvbklkIHx8IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvZ3MgZXJyb3IgbWVzc2FnZXMgd2l0aCBQSUkuXHJcbiAgICAgKi9cclxuICAgIGVycm9yUGlpKG1lc3NhZ2U6IHN0cmluZywgY29ycmVsYXRpb25JZD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9nTWVzc2FnZShtZXNzYWdlLCB7XHJcbiAgICAgICAgICAgIGxvZ0xldmVsOiBMb2dMZXZlbC5FcnJvcixcclxuICAgICAgICAgICAgY29udGFpbnNQaWk6IHRydWUsXHJcbiAgICAgICAgICAgIGNvcnJlbGF0aW9uSWQ6IGNvcnJlbGF0aW9uSWQgfHwgXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9ncyB3YXJuaW5nIG1lc3NhZ2VzLlxyXG4gICAgICovXHJcbiAgICB3YXJuaW5nKG1lc3NhZ2U6IHN0cmluZywgY29ycmVsYXRpb25JZD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9nTWVzc2FnZShtZXNzYWdlLCB7XHJcbiAgICAgICAgICAgIGxvZ0xldmVsOiBMb2dMZXZlbC5XYXJuaW5nLFxyXG4gICAgICAgICAgICBjb250YWluc1BpaTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvcnJlbGF0aW9uSWQ6IGNvcnJlbGF0aW9uSWQgfHwgXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9ncyB3YXJuaW5nIG1lc3NhZ2VzIHdpdGggUElJLlxyXG4gICAgICovXHJcbiAgICB3YXJuaW5nUGlpKG1lc3NhZ2U6IHN0cmluZywgY29ycmVsYXRpb25JZD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9nTWVzc2FnZShtZXNzYWdlLCB7XHJcbiAgICAgICAgICAgIGxvZ0xldmVsOiBMb2dMZXZlbC5XYXJuaW5nLFxyXG4gICAgICAgICAgICBjb250YWluc1BpaTogdHJ1ZSxcclxuICAgICAgICAgICAgY29ycmVsYXRpb25JZDogY29ycmVsYXRpb25JZCB8fCBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2dzIGluZm8gbWVzc2FnZXMuXHJcbiAgICAgKi9cclxuICAgIGluZm8obWVzc2FnZTogc3RyaW5nLCBjb3JyZWxhdGlvbklkPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKG1lc3NhZ2UsIHtcclxuICAgICAgICAgICAgbG9nTGV2ZWw6IExvZ0xldmVsLkluZm8sXHJcbiAgICAgICAgICAgIGNvbnRhaW5zUGlpOiBmYWxzZSxcclxuICAgICAgICAgICAgY29ycmVsYXRpb25JZDogY29ycmVsYXRpb25JZCB8fCBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2dzIGluZm8gbWVzc2FnZXMgd2l0aCBQSUkuXHJcbiAgICAgKi9cclxuICAgIGluZm9QaWkobWVzc2FnZTogc3RyaW5nLCBjb3JyZWxhdGlvbklkPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKG1lc3NhZ2UsIHtcclxuICAgICAgICAgICAgbG9nTGV2ZWw6IExvZ0xldmVsLkluZm8sXHJcbiAgICAgICAgICAgIGNvbnRhaW5zUGlpOiB0cnVlLFxyXG4gICAgICAgICAgICBjb3JyZWxhdGlvbklkOiBjb3JyZWxhdGlvbklkIHx8IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvZ3MgdmVyYm9zZSBtZXNzYWdlcy5cclxuICAgICAqL1xyXG4gICAgdmVyYm9zZShtZXNzYWdlOiBzdHJpbmcsIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UobWVzc2FnZSwge1xyXG4gICAgICAgICAgICBsb2dMZXZlbDogTG9nTGV2ZWwuVmVyYm9zZSxcclxuICAgICAgICAgICAgY29udGFpbnNQaWk6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb3JyZWxhdGlvbklkOiBjb3JyZWxhdGlvbklkIHx8IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvZ3MgdmVyYm9zZSBtZXNzYWdlcyB3aXRoIFBJSS5cclxuICAgICAqL1xyXG4gICAgdmVyYm9zZVBpaShtZXNzYWdlOiBzdHJpbmcsIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UobWVzc2FnZSwge1xyXG4gICAgICAgICAgICBsb2dMZXZlbDogTG9nTGV2ZWwuVmVyYm9zZSxcclxuICAgICAgICAgICAgY29udGFpbnNQaWk6IHRydWUsXHJcbiAgICAgICAgICAgIGNvcnJlbGF0aW9uSWQ6IGNvcnJlbGF0aW9uSWQgfHwgXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB3aGV0aGVyIFBJSSBMb2dnaW5nIGlzIGVuYWJsZWQgb3Igbm90LlxyXG4gICAgICovXHJcbiAgICBpc1BpaUxvZ2dpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpaUxvZ2dpbmdFbmFibGVkIHx8IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ29uc3RhbnRzID0ge1xyXG4gICAgTElCUkFSWV9OQU1FOiBcIk1TQUwuSlNcIixcclxuICAgIFNLVTogXCJtc2FsLmpzLmNvbW1vblwiLFxyXG4gICAgLy8gUHJlZml4IGZvciBhbGwgbGlicmFyeSBjYWNoZSBlbnRyaWVzXHJcbiAgICBDQUNIRV9QUkVGSVg6IFwibXNhbFwiLFxyXG4gICAgLy8gZGVmYXVsdCBhdXRob3JpdHlcclxuICAgIERFRkFVTFRfQVVUSE9SSVRZOiBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb24vXCIsXHJcbiAgICBERUZBVUxUX0FVVEhPUklUWV9IT1NUOiBcImxvZ2luLm1pY3Jvc29mdG9ubGluZS5jb21cIixcclxuICAgIC8vIEFERlMgU3RyaW5nXHJcbiAgICBBREZTOiBcImFkZnNcIixcclxuICAgIC8vIERlZmF1bHQgQUFEIEluc3RhbmNlIERpc2NvdmVyeSBFbmRwb2ludFxyXG4gICAgQUFEX0lOU1RBTkNFX0RJU0NPVkVSWV9FTkRQVDogXCJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vY29tbW9uL2Rpc2NvdmVyeS9pbnN0YW5jZT9hcGktdmVyc2lvbj0xLjEmYXV0aG9yaXphdGlvbl9lbmRwb2ludD1cIixcclxuICAgIC8vIFJlc291cmNlIGRlbGltaXRlciAtIHVzZWQgZm9yIGNlcnRhaW4gY2FjaGUgZW50cmllc1xyXG4gICAgUkVTT1VSQ0VfREVMSU06IFwifFwiLFxyXG4gICAgLy8gUGxhY2Vob2xkZXIgZm9yIG5vbi1leGlzdGVudCBhY2NvdW50IGlkcy9vYmplY3RzXHJcbiAgICBOT19BQ0NPVU5UOiBcIk5PX0FDQ09VTlRcIixcclxuICAgIC8vIENsYWltc1xyXG4gICAgQ0xBSU1TOiBcImNsYWltc1wiLFxyXG4gICAgLy8gQ29uc3VtZXIgVVRJRFxyXG4gICAgQ09OU1VNRVJfVVRJRDogXCI5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWRcIixcclxuICAgIC8vIERlZmF1bHQgc2NvcGVzXHJcbiAgICBPUEVOSURfU0NPUEU6IFwib3BlbmlkXCIsXHJcbiAgICBQUk9GSUxFX1NDT1BFOiBcInByb2ZpbGVcIixcclxuICAgIE9GRkxJTkVfQUNDRVNTX1NDT1BFOiBcIm9mZmxpbmVfYWNjZXNzXCIsXHJcbiAgICAvLyBEZWZhdWx0IHJlc3BvbnNlIHR5cGUgZm9yIGF1dGhvcml6YXRpb24gY29kZSBmbG93XHJcbiAgICBDT0RFX1JFU1BPTlNFX1RZUEU6IFwiY29kZVwiLFxyXG4gICAgQ09ERV9HUkFOVF9UWVBFOiBcImF1dGhvcml6YXRpb25fY29kZVwiLFxyXG4gICAgUlRfR1JBTlRfVFlQRTogXCJyZWZyZXNoX3Rva2VuXCIsXHJcbiAgICBGUkFHTUVOVF9SRVNQT05TRV9NT0RFOiBcImZyYWdtZW50XCIsXHJcbiAgICBTMjU2X0NPREVfQ0hBTExFTkdFX01FVEhPRDogXCJTMjU2XCIsXHJcbiAgICBVUkxfRk9STV9DT05URU5UX1RZUEU6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLThcIixcclxuICAgIEFVVEhPUklaQVRJT05fUEVORElORzogXCJhdXRob3JpemF0aW9uX3BlbmRpbmdcIixcclxuICAgIE5PVF9ERUZJTkVEOiBcIm5vdF9kZWZpbmVkXCJcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXF1ZXN0IGhlYWRlciBuYW1lc1xyXG4gKi9cclxuZXhwb3J0IGVudW0gSGVhZGVyTmFtZXMge1xyXG4gICAgQ09OVEVOVF9UWVBFID0gXCJDb250ZW50LVR5cGVcIlxyXG59XHJcblxyXG4vKipcclxuICogUGVyc2lzdGVudCBjYWNoZSBrZXlzIE1TQUwgd2hpY2ggc3RheSB3aGlsZSB1c2VyIGlzIGxvZ2dlZCBpbi5cclxuICovXHJcbmV4cG9ydCBlbnVtIFBlcnNpc3RlbnRDYWNoZUtleXMge1xyXG4gICAgSURfVE9LRU4gPSBcImlkdG9rZW5cIixcclxuICAgIENMSUVOVF9JTkZPID0gXCJjbGllbnQuaW5mb1wiLFxyXG4gICAgQURBTF9JRF9UT0tFTiA9IFwiYWRhbC5pZHRva2VuXCIsXHJcbiAgICBFUlJPUiA9IFwiZXJyb3JcIixcclxuICAgIEVSUk9SX0RFU0MgPSBcImVycm9yLmRlc2NyaXB0aW9uXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIFN0cmluZyBjb25zdGFudHMgcmVsYXRlZCB0byBBQUQgQXV0aG9yaXR5XHJcbiAqL1xyXG5leHBvcnQgZW51bSBBQURBdXRob3JpdHlDb25zdGFudHMge1xyXG4gICAgQ09NTU9OID0gXCJjb21tb25cIixcclxuICAgIE9SR0FOSVpBVElPTlMgPSBcIm9yZ2FuaXphdGlvbnNcIixcclxuICAgIENPTlNVTUVSUyA9IFwiY29uc3VtZXJzXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIEtleXMgaW4gdGhlIGhhc2hQYXJhbXMgc2VudCBieSBBQUQgU2VydmVyXHJcbiAqL1xyXG5leHBvcnQgZW51bSBBQURTZXJ2ZXJQYXJhbUtleXMge1xyXG4gICAgQ0xJRU5UX0lEID0gXCJjbGllbnRfaWRcIixcclxuICAgIFJFRElSRUNUX1VSSSA9IFwicmVkaXJlY3RfdXJpXCIsXHJcbiAgICBSRVNQT05TRV9UWVBFID0gXCJyZXNwb25zZV90eXBlXCIsXHJcbiAgICBSRVNQT05TRV9NT0RFID0gXCJyZXNwb25zZV9tb2RlXCIsXHJcbiAgICBHUkFOVF9UWVBFID0gXCJncmFudF90eXBlXCIsXHJcbiAgICBDTEFJTVMgPSBcImNsYWltc1wiLFxyXG4gICAgU0NPUEUgPSBcInNjb3BlXCIsXHJcbiAgICBFUlJPUiA9IFwiZXJyb3JcIixcclxuICAgIEVSUk9SX0RFU0NSSVBUSU9OID0gXCJlcnJvcl9kZXNjcmlwdGlvblwiLFxyXG4gICAgQUNDRVNTX1RPS0VOID0gXCJhY2Nlc3NfdG9rZW5cIixcclxuICAgIElEX1RPS0VOID0gXCJpZF90b2tlblwiLFxyXG4gICAgUkVGUkVTSF9UT0tFTiA9IFwicmVmcmVzaF90b2tlblwiLFxyXG4gICAgRVhQSVJFU19JTiA9IFwiZXhwaXJlc19pblwiLFxyXG4gICAgU1RBVEUgPSBcInN0YXRlXCIsXHJcbiAgICBOT05DRSA9IFwibm9uY2VcIixcclxuICAgIFBST01QVCA9IFwicHJvbXB0XCIsXHJcbiAgICBTRVNTSU9OX1NUQVRFID0gXCJzZXNzaW9uX3N0YXRlXCIsXHJcbiAgICBDTElFTlRfSU5GTyA9IFwiY2xpZW50X2luZm9cIixcclxuICAgIENPREUgPSBcImNvZGVcIixcclxuICAgIENPREVfQ0hBTExFTkdFID0gXCJjb2RlX2NoYWxsZW5nZVwiLFxyXG4gICAgQ09ERV9DSEFMTEVOR0VfTUVUSE9EID0gXCJjb2RlX2NoYWxsZW5nZV9tZXRob2RcIixcclxuICAgIENPREVfVkVSSUZJRVIgPSBcImNvZGVfdmVyaWZpZXJcIixcclxuICAgIENMSUVOVF9SRVFVRVNUX0lEID0gXCJjbGllbnQtcmVxdWVzdC1pZFwiLFxyXG4gICAgWF9DTElFTlRfU0tVID0gXCJ4LWNsaWVudC1TS1VcIixcclxuICAgIFhfQ0xJRU5UX1ZFUiA9IFwieC1jbGllbnQtVkVSXCIsXHJcbiAgICBYX0NMSUVOVF9PUyA9IFwieC1jbGllbnQtT1NcIixcclxuICAgIFhfQ0xJRU5UX0NQVSA9IFwieC1jbGllbnQtQ1BVXCIsXHJcbiAgICBQT1NUX0xPR09VVF9VUkkgPSBcInBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaVwiLFxyXG4gICAgREVWSUNFX0NPREUgPSBcImRldmljZV9jb2RlXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIElkVG9rZW4gY2xhaW0gc3RyaW5nIGNvbnN0YW50c1xyXG4gKi9cclxuZXhwb3J0IGVudW0gSWRUb2tlbkNsYWltTmFtZSB7XHJcbiAgICBJU1NVRVIgPSBcImlzc1wiLFxyXG4gICAgT0JKSUQgPSBcIm9pZFwiLFxyXG4gICAgU1VCSkVDVCA9IFwic3ViXCIsXHJcbiAgICBURU5BTlRJRCA9IFwidGlkXCIsXHJcbiAgICBWRVJTSU9OID0gXCJ2ZXJcIixcclxuICAgIFBSRUZfVVNFUk5BTUUgPSBcInByZWZlcnJlZF91c2VybmFtZVwiLFxyXG4gICAgTkFNRSA9IFwibmFtZVwiLFxyXG4gICAgTk9OQ0UgPSBcIm5vbmNlXCIsXHJcbiAgICBFWFBJUkFUSU9OID0gXCJleHBcIixcclxuICAgIEhPTUVfT0JKSUQgPSBcImhvbWVfb2lkXCIsXHJcbiAgICBTRVNTSU9OSUQgPSBcInNpZFwiLFxyXG4gICAgQ0xPVURfSU5TVEFOQ0VfSE9TVE5BTUUgPSBcImNsb3VkX2luc3RhbmNlX2hvc3RfbmFtZVwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiB3ZSBjb25zaWRlcmVkIG1ha2luZyB0aGlzIFwiZW51bVwiIGluIHRoZSByZXF1ZXN0IGluc3RlYWQgb2Ygc3RyaW5nLCBob3dldmVyIGl0IGxvb2tzIGxpa2UgdGhlIGFsbG93ZWQgbGlzdCBvZlxyXG4gKiBwcm9tcHQgdmFsdWVzIGtlcHQgY2hhbmdpbmcgb3ZlciBwYXN0IGNvdXBsZSBvZiB5ZWFycy4gVGhlcmUgYXJlIHNvbWUgdW5kb2N1bWVudGVkIHByb21wdCB2YWx1ZXMgZm9yIHNvbWVcclxuICogaW50ZXJuYWwgcGFydG5lcnMgdG9vLCBoZW5jZSB0aGUgY2hvaWNlIG9mIGdlbmVyaWMgXCJzdHJpbmdcIiB0eXBlIGluc3RlYWQgb2YgdGhlIFwiZW51bVwiXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUHJvbXB0VmFsdWUgPSB7XHJcbiAgICBMT0dJTjogXCJsb2dpblwiLFxyXG4gICAgU0VMRUNUX0FDQ09VTlQ6IFwic2VsZWN0X2FjY291bnRcIixcclxuICAgIENPTlNFTlQ6IFwiY29uc2VudFwiLFxyXG4gICAgTk9ORTogXCJub25lXCIsXHJcbn07XHJcblxyXG4vKipcclxuICogU1NPIFR5cGVzIC0gZ2VuZXJhdGVkIHRvIHBvcHVsYXRlIGhpbnRzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBTU09UeXBlcyB7XHJcbiAgICBBQ0NPVU5UID0gXCJhY2NvdW50XCIsXHJcbiAgICBTSUQgPSBcInNpZFwiLFxyXG4gICAgTE9HSU5fSElOVCA9IFwibG9naW5faGludFwiLFxyXG4gICAgSURfVE9LRU4gPSBcImlkX3Rva2VuXCIsXHJcbiAgICBET01BSU5fSElOVCA9IFwiZG9tYWluX2hpbnRcIixcclxuICAgIE9SR0FOSVpBVElPTlMgPSBcIm9yZ2FuaXphdGlvbnNcIixcclxuICAgIENPTlNVTUVSUyA9IFwiY29uc3VtZXJzXCIsXHJcbiAgICBBQ0NPVU5UX0lEID0gXCJhY2NvdW50SWRlbnRpZmllclwiLFxyXG4gICAgSE9NRUFDQ09VTlRfSUQgPSBcImhvbWVBY2NvdW50SWRlbnRpZmllclwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXNhbGxvd2VkIGV4dHJhIHF1ZXJ5IHBhcmFtZXRlcnMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQmxhY2tsaXN0ZWRFUVBhcmFtcyA9IFtcclxuICAgIFNTT1R5cGVzLlNJRCxcclxuICAgIFNTT1R5cGVzLkxPR0lOX0hJTlRcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBhbGxvd2VkIHZhbHVlcyBmb3IgY29kZVZlcmlmaWVyXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ29kZUNoYWxsZW5nZU1ldGhvZFZhbHVlcyA9IHtcclxuICAgIFBMQUlOOiBcInBsYWluXCIsXHJcbiAgICBTMjU2OiBcIlMyNTZcIlxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBtZXRob2QgdXNlZCB0byBlbmNvZGUgdGhlIGNvZGUgdmVyaWZpZXIgZm9yIHRoZSBjb2RlIGNoYWxsZW5nZSBwYXJhbWV0ZXIuIGNhbiBiZSBvbmVcclxuICogb2YgcGxhaW4gb3IgczI1Ni4gaWYgZXhjbHVkZWQsIGNvZGUgY2hhbGxlbmdlIGlzIGFzc3VtZWQgdG8gYmUgcGxhaW50ZXh0LiBmb3IgbW9yZVxyXG4gKiBpbmZvcm1hdGlvbiwgc2VlIHRoZSBwa2NlIHJjZjogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzc2MzZcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb2RlQ2hhbGxlbmdlTWV0aG9kVmFsdWVzQXJyYXk6IHN0cmluZ1tdID0gW1xyXG4gICAgQ29kZUNoYWxsZW5nZU1ldGhvZFZhbHVlcy5QTEFJTixcclxuICAgIENvZGVDaGFsbGVuZ2VNZXRob2RWYWx1ZXMuUzI1NlxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIGFsbG93ZWQgdmFsdWVzIGZvciByZXNwb25zZV9tb2RlXHJcbiAqL1xyXG5leHBvcnQgZW51bSBSZXNwb25zZU1vZGUge1xyXG4gICAgUVVFUlkgPSBcInF1ZXJ5XCIsXHJcbiAgICBGUkFHTUVOVCA9IFwiZnJhZ21lbnRcIixcclxuICAgIEZPUk1fUE9TVCA9IFwiZm9ybV9wb3N0XCJcclxufVxyXG5cclxuLyoqXHJcbiAqIGFsbG93ZWQgZ3JhbnRfdHlwZVxyXG4gKi9cclxuZXhwb3J0IGVudW0gR3JhbnRUeXBlIHtcclxuICAgIElNUExJQ0lUX0dSQU5UID0gXCJpbXBsaWNpdFwiLFxyXG4gICAgQVVUSE9SSVpBVElPTl9DT0RFX0dSQU5UID0gXCJhdXRob3JpemF0aW9uX2NvZGVcIixcclxuICAgIENMSUVOVF9DUkVERU5USUFMU19HUkFOVCA9IFwiY2xpZW50X2NyZWRlbnRpYWxzXCIsXHJcbiAgICBSRVNPVVJDRV9PV05FUl9QQVNTV09SRF9HUkFOVCA9IFwicGFzc3dvcmRcIixcclxuICAgIFJFRlJFU0hfVE9LRU5fR1JBTlQgPSBcInJlZnJlc2hfdG9rZW5cIixcclxuICAgIERFVklDRV9DT0RFX0dSQU5UID0gXCJkZXZpY2VfY29kZVwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBY2NvdW50IHR5cGVzIGluIENhY2hlXHJcbiAqL1xyXG5leHBvcnQgZW51bSBDYWNoZUFjY291bnRUeXBlIHtcclxuICAgIE1TU1RTX0FDQ09VTlRfVFlQRSA9IFwiTVNTVFNcIixcclxuICAgIEFERlNfQUNDT1VOVF9UWVBFID0gXCJBREZTXCIsXHJcbiAgICBNU0FWMV9BQ0NPVU5UX1RZUEUgPSBcIk1TQVwiLFxyXG4gICAgR0VORVJJQ19BQ0NPVU5UX1RZUEUgPSBcIkdlbmVyaWNcIiAvLyBOVExNLCBLZXJiZXJvcywgRkJBLCBCYXNpYyBldGNcclxufVxyXG5cclxuLyoqXHJcbiAqIFNlcGFyYXRvcnMgdXNlZCBpbiBjYWNoZVxyXG4gKi9cclxuZXhwb3J0IGVudW0gU2VwYXJhdG9ycyB7XHJcbiAgICBDQUNIRV9LRVlfU0VQQVJBVE9SID0gXCItXCIsXHJcbiAgICBDTElFTlRfSU5GT19TRVBBUkFUT1IgPSBcIi5cIlxyXG59XHJcblxyXG4vKipcclxuICogQ3JlZGVudGFpbCBUeXBlIHN0b3JlZCBpbiB0aGUgY2FjaGVcclxuICovXHJcbmV4cG9ydCBlbnVtIENyZWRlbnRpYWxUeXBlIHtcclxuICAgIElEX1RPS0VOID0gXCJJZFRva2VuXCIsXHJcbiAgICBBQ0NFU1NfVE9LRU4gPSBcIkFjY2Vzc1Rva2VuXCIsXHJcbiAgICBSRUZSRVNIX1RPS0VOID0gXCJSZWZyZXNoVG9rZW5cIixcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWRlbnRhaWwgVHlwZSBzdG9yZWQgaW4gdGhlIGNhY2hlXHJcbiAqL1xyXG5leHBvcnQgZW51bSBDYWNoZVNjaGVtYVR5cGUge1xyXG4gICAgQUNDT1VOVCA9IFwiQWNjb3VudFwiLFxyXG4gICAgQ1JFREVOVElBTCA9IFwiQ3JlZGVudGlhbFwiLFxyXG4gICAgQVBQX01FVEFfREFUQSA9IFwiQXBwTWV0YWRhdGFcIixcclxuICAgIFRFTVBPUkFSWSA9IFwiVGVtcENhY2hlXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbWJpbmUgYWxsIGNhY2hlIHR5cGVzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBDYWNoZVR5cGUge1xyXG4gICAgQURGUyA9IDEwMDEsXHJcbiAgICBNU0EgPSAxMDAyLFxyXG4gICAgTVNTVFMgPSAxMDAzLFxyXG4gICAgR0VORVJJQyA9IDEwMDQsXHJcbiAgICBBQ0NFU1NfVE9LRU4gPSAyMDAxLFxyXG4gICAgUkVGUkVTSF9UT0tFTiA9IDIwMDIsXHJcbiAgICBJRF9UT0tFTiA9IDIwMDMsXHJcbiAgICBBUFBfTUVUQV9EQVRBID0gMzAwMVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1vcmUgQ2FjaGUgcmVsYXRlZCBjb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBjb25zdCBBUFBfTUVUQV9EQVRBID0gXCJhcHBtZXRhZGF0YVwiO1xyXG5leHBvcnQgY29uc3QgQ2xpZW50SW5mbyA9IFwiY2xpZW50X2luZm9cIjtcclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBTZXBhcmF0b3JzLCBDcmVkZW50aWFsVHlwZSwgQ2FjaGVUeXBlLCBDb25zdGFudHMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuLi8uLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBCYXNlIHR5cGUgZm9yIGNyZWRlbnRpYWxzIHRvIGJlIHN0b3JlZCBpbiB0aGUgY2FjaGU6IGVnOiBBQ0NFU1NfVE9LRU4sIElEX1RPS0VOIGV0Y1xyXG4gKiBcclxuICogS2V5OlZhbHVlIFNjaGVtYTpcclxuICogXHJcbiAqIEtleTogPGhvbWVfYWNjb3VudF9pZCo+LTxlbnZpcm9ubWVudD4tPGNyZWRlbnRpYWxfdHlwZT4tPGNsaWVudF9pZD4tPHJlYWxtKj4tPHRhcmdldCo+XHJcbiAqIFxyXG4gKiBWYWx1ZSBTY2hlbWE6XHJcbiAqIHtcclxuICogICAgICBob21lQWNjb3VudElkOiBob21lIGFjY291bnQgaWRlbnRpZmllciBmb3IgdGhlIGF1dGggc2NoZW1lLFxyXG4gKiAgICAgIGVudmlyb25tZW50OiBlbnRpdHkgdGhhdCBpc3N1ZWQgdGhlIHRva2VuLCByZXByZXNlbnRlZCBhcyBhIGZ1bGwgaG9zdFxyXG4gKiAgICAgIGNyZWRlbnRpYWxUeXBlOiBUeXBlIG9mIGNyZWRlbnRpYWwgYXMgYSBzdHJpbmcsIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzogUmVmcmVzaFRva2VuLCBBY2Nlc3NUb2tlbiwgSWRUb2tlbiwgUGFzc3dvcmQsIENvb2tpZSwgQ2VydGlmaWNhdGUsIE90aGVyXHJcbiAqICAgICAgY2xpZW50SWQ6IGNsaWVudCBJRCBvZiB0aGUgYXBwbGljYXRpb25cclxuICogICAgICBzZWNyZXQ6IEFjdHVhbCBjcmVkZW50aWFsIGFzIGEgc3RyaW5nXHJcbiAqICAgICAgZmFtaWx5SWQ6IEZhbWlseSBJRCBpZGVudGlmaWVyLCB1c3VhbGx5IG9ubHkgdXNlZCBmb3IgcmVmcmVzaCB0b2tlbnNcclxuICogICAgICByZWFsbTogRnVsbCB0ZW5hbnQgb3Igb3JnYW5pemF0aW9uYWwgaWRlbnRpZmllciB0aGF0IHRoZSBhY2NvdW50IGJlbG9uZ3MgdG9cclxuICogICAgICB0YXJnZXQ6IFBlcm1pc3Npb25zIHRoYXQgYXJlIGluY2x1ZGVkIGluIHRoZSB0b2tlbiwgb3IgZm9yIHJlZnJlc2ggdG9rZW5zLCB0aGUgcmVzb3VyY2UgaWRlbnRpZmllci5cclxuICogfVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENyZWRlbnRpYWxFbnRpdHkge1xyXG4gICAgaG9tZUFjY291bnRJZDogc3RyaW5nO1xyXG4gICAgZW52aXJvbm1lbnQ6IHN0cmluZztcclxuICAgIGNyZWRlbnRpYWxUeXBlOiBDcmVkZW50aWFsVHlwZTtcclxuICAgIGNsaWVudElkOiBzdHJpbmc7XHJcbiAgICBzZWNyZXQ6IHN0cmluZztcclxuICAgIGZhbWlseUlkPzogc3RyaW5nO1xyXG4gICAgcmVhbG0/OiBzdHJpbmc7XHJcbiAgICB0YXJnZXQ/OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSBBY2NvdW50IElkIGtleSBjb21wb25lbnQgYXMgcGVyIHRoZSBzY2hlbWE6IDxob21lX2FjY291bnRfaWQ+LTxlbnZpcm9ubWVudD5cclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVBY2NvdW50SWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gQ3JlZGVudGlhbEVudGl0eS5nZW5lcmF0ZUFjY291bnRJZEZvckNhY2hlS2V5KHRoaXMuaG9tZUFjY291bnRJZCwgdGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSBDcmVkZW50aWFsIElkIGtleSBjb21wb25lbnQgYXMgcGVyIHRoZSBzY2hlbWE6IDxjcmVkZW50aWFsX3R5cGU+LTxjbGllbnRfaWQ+LTxyZWFsbT5cclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVDcmVkZW50aWFsSWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gQ3JlZGVudGlhbEVudGl0eS5nZW5lcmF0ZUNyZWRlbnRpYWxJZEZvckNhY2hlS2V5KFxyXG4gICAgICAgICAgICB0aGlzLmNyZWRlbnRpYWxUeXBlLFxyXG4gICAgICAgICAgICB0aGlzLmNsaWVudElkLFxyXG4gICAgICAgICAgICB0aGlzLnJlYWxtLFxyXG4gICAgICAgICAgICB0aGlzLmZhbWlseUlkXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlIHRhcmdldCBrZXkgY29tcG9uZW50IGFzIHBlciBzY2hlbWE6IDx0YXJnZXQ+XHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlVGFyZ2V0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIENyZWRlbnRpYWxFbnRpdHkuZ2VuZXJhdGVUYXJnZXRGb3JDYWNoZUtleSh0aGlzLnRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZW5lcmF0ZXMgY3JlZGVudGlhbCBrZXlcclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVDcmVkZW50aWFsS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIENyZWRlbnRpYWxFbnRpdHkuZ2VuZXJhdGVDcmVkZW50aWFsQ2FjaGVLZXkoXHJcbiAgICAgICAgICAgIHRoaXMuaG9tZUFjY291bnRJZCxcclxuICAgICAgICAgICAgdGhpcy5lbnZpcm9ubWVudCxcclxuICAgICAgICAgICAgdGhpcy5jcmVkZW50aWFsVHlwZSxcclxuICAgICAgICAgICAgdGhpcy5jbGllbnRJZCxcclxuICAgICAgICAgICAgdGhpcy5yZWFsbSxcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQsXHJcbiAgICAgICAgICAgIHRoaXMuZmFtaWx5SWRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJucyB0aGUgdHlwZSBvZiB0aGUgY2FjaGUgKGluIHRoaXMgY2FzZSBjcmVkZW50aWFsKVxyXG4gICAgICovXHJcbiAgICBnZW5lcmF0ZVR5cGUoKTogbnVtYmVyIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuY3JlZGVudGlhbFR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBDcmVkZW50aWFsVHlwZS5JRF9UT0tFTjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBDYWNoZVR5cGUuSURfVE9LRU47XHJcbiAgICAgICAgICAgIGNhc2UgQ3JlZGVudGlhbFR5cGUuQUNDRVNTX1RPS0VOOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENhY2hlVHlwZS5BQ0NFU1NfVE9LRU47XHJcbiAgICAgICAgICAgIGNhc2UgQ3JlZGVudGlhbFR5cGUuUkVGUkVTSF9UT0tFTjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBDYWNoZVR5cGUuUkVGUkVTSF9UT0tFTjtcclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRDcmVkZW50aWFsVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBoZWxwZXIgZnVuY3Rpb24gdG8gcmV0dXJuIGBDcmVkZW50aWFsVHlwZWBcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldENyZWRlbnRpYWxUeXBlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoa2V5LmluZGV4T2YoQ3JlZGVudGlhbFR5cGUuQUNDRVNTX1RPS0VOLnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3JlZGVudGlhbFR5cGUuQUNDRVNTX1RPS0VOO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5LmluZGV4T2YoQ3JlZGVudGlhbFR5cGUuSURfVE9LRU4udG9Mb3dlckNhc2UoKSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDcmVkZW50aWFsVHlwZS5JRF9UT0tFTjtcclxuICAgICAgICB9IGVsc2UgaWYgKGtleS5pbmRleE9mKENyZWRlbnRpYWxUeXBlLlJFRlJFU0hfVE9LRU4udG9Mb3dlckNhc2UoKSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDcmVkZW50aWFsVHlwZS5SRUZSRVNIX1RPS0VOO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIENvbnN0YW50cy5OT1RfREVGSU5FRDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdlbmVyYXRlcyBjcmVkZW50aWFsIGtleVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVDcmVkZW50aWFsQ2FjaGVLZXkoXHJcbiAgICAgICAgaG9tZUFjY291bnRJZDogc3RyaW5nLFxyXG4gICAgICAgIGVudmlyb25tZW50OiBzdHJpbmcsXHJcbiAgICAgICAgY3JlZGVudGlhbFR5cGU6IENyZWRlbnRpYWxUeXBlLFxyXG4gICAgICAgIGNsaWVudElkOiBzdHJpbmcsXHJcbiAgICAgICAgcmVhbG0/OiBzdHJpbmcsXHJcbiAgICAgICAgdGFyZ2V0Pzogc3RyaW5nLFxyXG4gICAgICAgIGZhbWlseUlkPzogc3RyaW5nXHJcbiAgICApOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxLZXkgPSBbXHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVBY2NvdW50SWRGb3JDYWNoZUtleShob21lQWNjb3VudElkLCBlbnZpcm9ubWVudCksXHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVDcmVkZW50aWFsSWRGb3JDYWNoZUtleShjcmVkZW50aWFsVHlwZSwgY2xpZW50SWQsIHJlYWxtLCBmYW1pbHlJZCksXHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVUYXJnZXRGb3JDYWNoZUtleSh0YXJnZXQpLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiBjcmVkZW50aWFsS2V5LmpvaW4oU2VwYXJhdG9ycy5DQUNIRV9LRVlfU0VQQVJBVE9SKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2VuZXJhdGVzIEFjY291bnQgSWQgZm9yIGtleXNcclxuICAgICAqIEBwYXJhbSBob21lQWNjb3VudElkXHJcbiAgICAgKiBAcGFyYW0gZW52aXJvbm1lbnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2VuZXJhdGVBY2NvdW50SWRGb3JDYWNoZUtleShcclxuICAgICAgICBob21lQWNjb3VudElkOiBzdHJpbmcsXHJcbiAgICAgICAgZW52aXJvbm1lbnQ6IHN0cmluZ1xyXG4gICAgKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBhY2NvdW50SWQ6IEFycmF5PHN0cmluZz4gPSBbaG9tZUFjY291bnRJZCwgZW52aXJvbm1lbnRdO1xyXG4gICAgICAgIHJldHVybiBhY2NvdW50SWQuam9pbihTZXBhcmF0b3JzLkNBQ0hFX0tFWV9TRVBBUkFUT1IpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZXMgQ3JlZGVudGlhbCBJZCBmb3Iga2V5c1xyXG4gICAgICogQHBhcmFtIGNyZWRlbnRpYWxUeXBlXHJcbiAgICAgKiBAcGFyYW0gcmVhbG1cclxuICAgICAqIEBwYXJhbSBjbGllbnRJZFxyXG4gICAgICogQHBhcmFtIGZhbWlseUlkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGdlbmVyYXRlQ3JlZGVudGlhbElkRm9yQ2FjaGVLZXkoXHJcbiAgICAgICAgY3JlZGVudGlhbFR5cGU6IENyZWRlbnRpYWxUeXBlLFxyXG4gICAgICAgIGNsaWVudElkOiBzdHJpbmcsXHJcbiAgICAgICAgcmVhbG0/OiBzdHJpbmcsXHJcbiAgICAgICAgZmFtaWx5SWQ/OiBzdHJpbmdcclxuICAgICk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgY2xpZW50T3JGYW1pbHlJZCA9XHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxUeXBlID09PSBDcmVkZW50aWFsVHlwZS5SRUZSRVNIX1RPS0VOXHJcbiAgICAgICAgICAgICAgICA/IGZhbWlseUlkIHx8IGNsaWVudElkXHJcbiAgICAgICAgICAgICAgICA6IGNsaWVudElkO1xyXG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxJZDogQXJyYXk8c3RyaW5nPiA9IFtcclxuICAgICAgICAgICAgY3JlZGVudGlhbFR5cGUsXHJcbiAgICAgICAgICAgIGNsaWVudE9yRmFtaWx5SWQsXHJcbiAgICAgICAgICAgIHJlYWxtIHx8IFwiXCIsXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNyZWRlbnRpYWxJZC5qb2luKFNlcGFyYXRvcnMuQ0FDSEVfS0VZX1NFUEFSQVRPUikudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlIHRhcmdldCBrZXkgY29tcG9uZW50IGFzIHBlciBzY2hlbWE6IDx0YXJnZXQ+XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGdlbmVyYXRlVGFyZ2V0Rm9yQ2FjaGVLZXkoc2NvcGVzOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAoc2NvcGVzIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuL0NsaWVudEF1dGhFcnJvclwiO1xyXG5cclxuLyoqXHJcbiAqIENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UgY2xhc3MgY29udGFpbmluZyBzdHJpbmcgY29uc3RhbnRzIHVzZWQgYnkgZXJyb3IgY29kZXMgYW5kIG1lc3NhZ2VzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UgPSB7XHJcbiAgICByZWRpcmVjdFVyaU5vdFNldDoge1xyXG4gICAgICAgIGNvZGU6IFwicmVkaXJlY3RfdXJpX2VtcHR5XCIsXHJcbiAgICAgICAgZGVzYzogXCJBIHJlZGlyZWN0IFVSSSBpcyByZXF1aXJlZCBmb3IgYWxsIGNhbGxzLCBhbmQgbm9uZSBoYXMgYmVlbiBzZXQuXCJcclxuICAgIH0sXHJcbiAgICBwb3N0TG9nb3V0VXJpTm90U2V0OiB7XHJcbiAgICAgICAgY29kZTogXCJwb3N0X2xvZ291dF91cmlfZW1wdHlcIixcclxuICAgICAgICBkZXNjOiBcIkEgcG9zdCBsb2dvdXQgcmVkaXJlY3QgaGFzIG5vdCBiZWVuIHNldC5cIlxyXG4gICAgfSxcclxuICAgIGNsYWltc1JlcXVlc3RQYXJzaW5nRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImNsYWltc19yZXF1ZXN0X3BhcnNpbmdfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIkNvdWxkIG5vdCBwYXJzZSB0aGUgZ2l2ZW4gY2xhaW1zIHJlcXVlc3Qgb2JqZWN0LlwiXHJcbiAgICB9LFxyXG4gICAgYXV0aG9yaXR5VXJpSW5zZWN1cmU6IHtcclxuICAgICAgICBjb2RlOiBcImF1dGhvcml0eV91cmlfaW5zZWN1cmVcIixcclxuICAgICAgICBkZXNjOiBcIkF1dGhvcml0eSBVUklzIG11c3QgdXNlIGh0dHBzLiAgUGxlYXNlIHNlZSBoZXJlIGZvciB2YWxpZCBhdXRob3JpdHkgY29uZmlndXJhdGlvbiBvcHRpb25zOiBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9henVyZS9hY3RpdmUtZGlyZWN0b3J5L2RldmVsb3AvbXNhbC1qcy1pbml0aWFsaXppbmctY2xpZW50LWFwcGxpY2F0aW9ucyNjb25maWd1cmF0aW9uLW9wdGlvbnNcIlxyXG4gICAgfSxcclxuICAgIHVybFBhcnNlRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcInVybF9wYXJzZV9lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiVVJMIGNvdWxkIG5vdCBiZSBwYXJzZWQgaW50byBhcHByb3ByaWF0ZSBzZWdtZW50cy5cIlxyXG4gICAgfSxcclxuICAgIHVybEVtcHR5RXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImVtcHR5X3VybF9lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiVVJMIHdhcyBlbXB0eSBvciBudWxsLlwiXHJcbiAgICB9LFxyXG4gICAgZW1wdHlTY29wZXNFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwiZW1wdHlfaW5wdXRfc2NvcGVzX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJTY29wZXMgY2Fubm90IGJlIHBhc3NlZCBhcyBudWxsLCB1bmRlZmluZWQgb3IgZW1wdHkgYXJyYXkgYmVjYXVzZSB0aGV5IGFyZSByZXF1aXJlZCB0byBvYnRhaW4gYW4gYWNjZXNzIHRva2VuLlwiXHJcbiAgICB9LFxyXG4gICAgbm9uQXJyYXlTY29wZXNFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwibm9uYXJyYXlfaW5wdXRfc2NvcGVzX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJTY29wZXMgY2Fubm90IGJlIHBhc3NlZCBhcyBub24tYXJyYXkuXCJcclxuICAgIH0sXHJcbiAgICBjbGllbnRJZFNpbmdsZVNjb3BlRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImNsaWVudGlkX2lucHV0X3Njb3Blc19lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiQ2xpZW50IElEIGNhbiBvbmx5IGJlIHByb3ZpZGVkIGFzIGEgc2luZ2xlIHNjb3BlLlwiXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZFByb21wdDoge1xyXG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9wcm9tcHRfdmFsdWVcIixcclxuICAgICAgICBkZXNjOiBcIlN1cHBvcnRlZCBwcm9tcHQgdmFsdWVzIGFyZSAnbG9naW4nLCAnc2VsZWN0X2FjY291bnQnLCAnY29uc2VudCcgYW5kICdub25lJy4gIFBsZWFzZSBzZWUgaGVyZSBmb3IgdmFsaWQgY29uZmlndXJhdGlvbiBvcHRpb25zOiBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9henVyZS9hY3RpdmUtZGlyZWN0b3J5L2RldmVsb3AvbXNhbC1qcy1pbml0aWFsaXppbmctY2xpZW50LWFwcGxpY2F0aW9ucyNjb25maWd1cmF0aW9uLW9wdGlvbnNcIixcclxuICAgIH0sXHJcbiAgICB0b2tlblJlcXVlc3RFbXB0eUVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJ0b2tlbl9yZXF1ZXN0X2VtcHR5XCIsXHJcbiAgICAgICAgZGVzYzogXCJUb2tlbiByZXF1ZXN0IHdhcyBlbXB0eSBhbmQgbm90IGZvdW5kIGluIGNhY2hlLlwiXHJcbiAgICB9LFxyXG4gICAgbG9nb3V0UmVxdWVzdEVtcHR5RXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImxvZ291dF9yZXF1ZXN0X2VtcHR5XCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgbG9nb3V0IHJlcXVlc3Qgd2FzIG51bGwgb3IgdW5kZWZpbmVkLlwiXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZENvZGVDaGFsbGVuZ2VNZXRob2Q6IHtcclxuICAgICAgICBjb2RlOiBcImludmFsaWRfY29kZV9jaGFsbGVuZ2VfbWV0aG9kXCIsXHJcbiAgICAgICAgZGVzYzogXCJjb2RlX2NoYWxsZW5nZV9tZXRob2QgcGFzc2VkIGlzIGludmFsaWQuIFZhbGlkIHZhbHVlcyBhcmUgXFxcInBsYWluXFxcIiBhbmQgXFxcIlMyNTZcXFwiLlwiXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZENvZGVDaGFsbGVuZ2VQYXJhbXM6IHtcclxuICAgICAgICBjb2RlOiBcInBrY2VfcGFyYW1zX21pc3NpbmdcIixcclxuICAgICAgICBkZXNjOiBcIkJvdGggcGFyYW1zOiBjb2RlX2NoYWxsZW5nZSBhbmQgY29kZV9jaGFsbGVuZ2VfbWV0aG9kIGFyZSB0byBiZSBwYXNzZWQgaWYgdG8gYmUgc2VudCBpbiB0aGUgcmVxdWVzdFwiXHJcbiAgICB9LFxyXG4gICAga25vd25BdXRob3JpdGllc0FuZENsb3VkRGlzY292ZXJ5TWV0YWRhdGE6IHtcclxuICAgICAgICBjb2RlOiBcImludmFsaWRfa25vd25fYXV0aG9yaXRpZXNcIixcclxuICAgICAgICBkZXNjOiBcImtub3duQXV0aG9yaXRpZXMgYW5kIGNsb3VkRGlzY292ZXJ5TWV0YWRhdGEgY2Fubm90IGJvdGggYmUgcHJvdmlkZWQuIFBsZWFzZSBwcm92aWRlIGNsb3VkRGlzY292ZXJ5TWV0YWRhdGEgb2JqZWN0IGZvciBBQUQsIGtub3duQXV0aG9yaXRpZXMgb3RoZXJ3aXNlLlwiXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZENsb3VkRGlzY292ZXJ5TWV0YWRhdGE6IHtcclxuICAgICAgICBjb2RlOiBcImludmFsaWRfY2xvdWRfZGlzY292ZXJ5X21ldGFkYXRhXCIsXHJcbiAgICAgICAgZGVzYzogXCJJbnZhbGlkIGNsb3VkRGlzY292ZXJ5TWV0YWRhdGEgcHJvdmlkZWQuIE11c3QgYmUgYSBKU09OIG9iamVjdCBjb250YWluaW5nIHRlbmFudF9kaXNjb3ZlcnlfZW5kcG9pbnQgYW5kIG1ldGFkYXRhIGZpZWxkc1wiXHJcbiAgICB9LFxyXG4gICAgdW50cnVzdGVkQXV0aG9yaXR5OiB7XHJcbiAgICAgICAgY29kZTogXCJ1bnRydXN0ZWRfYXV0aG9yaXR5XCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgcHJvdmlkZWQgYXV0aG9yaXR5IGlzIG5vdCBhIHRydXN0ZWQgYXV0aG9yaXR5LiBQbGVhc2UgaW5jbHVkZSB0aGlzIGF1dGhvcml0eSBpbiB0aGUga25vd25BdXRob3JpdGllcyBjb25maWcgcGFyYW1ldGVyLlwiXHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogRXJyb3IgdGhyb3duIHdoZW4gdGhlcmUgaXMgYW4gZXJyb3IgaW4gY29uZmlndXJhdGlvbiBvZiB0aGUgTVNBTC5qcyBsaWJyYXJ5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsaWVudENvbmZpZ3VyYXRpb25FcnJvciBleHRlbmRzIENsaWVudEF1dGhFcnJvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIkNsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gZXJyb3IgdGhyb3duIHdoZW4gdGhlIHJlZGlyZWN0IHVyaSBpcyBlbXB0eSAobm90IHNldCBieSBjYWxsZXIpXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVSZWRpcmVjdFVyaUVtcHR5RXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnJlZGlyZWN0VXJpTm90U2V0LmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UucmVkaXJlY3RVcmlOb3RTZXQuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGVycm9yIHRocm93biB3aGVuIHRoZSBwb3N0LWxvZ291dCByZWRpcmVjdCB1cmkgaXMgZW1wdHkgKG5vdCBzZXQgYnkgY2FsbGVyKVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlUG9zdExvZ291dFJlZGlyZWN0VXJpRW1wdHlFcnJvcigpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UucG9zdExvZ291dFVyaU5vdFNldC5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnBvc3RMb2dvdXRVcmlOb3RTZXQuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGVycm9yIHRocm93biB3aGVuIHRoZSBjbGFpbXMgcmVxdWVzdCBjb3VsZCBub3QgYmUgc3VjY2Vzc2Z1bGx5IHBhcnNlZFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQ2xhaW1zUmVxdWVzdFBhcnNpbmdFcnJvcihjbGFpbXNSZXF1ZXN0UGFyc2VFcnJvcjogc3RyaW5nKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNsYWltc1JlcXVlc3RQYXJzaW5nRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jbGFpbXNSZXF1ZXN0UGFyc2luZ0Vycm9yLmRlc2N9IEdpdmVuIHZhbHVlOiAke2NsYWltc1JlcXVlc3RQYXJzZUVycm9yfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB0aHJvd24gaWYgYXV0aG9yaXR5IHVyaSBpcyBnaXZlbiBhbiBpbnNlY3VyZSBwcm90b2NvbC5cclxuICAgICAqIEBwYXJhbSB1cmxTdHJpbmdcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUluc2VjdXJlQXV0aG9yaXR5VXJpRXJyb3IodXJsU3RyaW5nOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuYXV0aG9yaXR5VXJpSW5zZWN1cmUuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5hdXRob3JpdHlVcmlJbnNlY3VyZS5kZXNjfSBHaXZlbiBVUkk6ICR7dXJsU3RyaW5nfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB0aHJvd24gaWYgVVJMIHN0cmluZyBkb2VzIG5vdCBwYXJzZSBpbnRvIHNlcGFyYXRlIHNlZ21lbnRzLlxyXG4gICAgICogQHBhcmFtIHVybFN0cmluZ1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlVXJsUGFyc2VFcnJvcih1cmxQYXJzZUVycm9yOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UudXJsUGFyc2VFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnVybFBhcnNlRXJyb3IuZGVzY30gR2l2ZW4gRXJyb3I6ICR7dXJsUGFyc2VFcnJvcn1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gZXJyb3IgdGhyb3duIGlmIFVSTCBzdHJpbmcgaXMgZW1wdHkgb3IgbnVsbC5cclxuICAgICAqIEBwYXJhbSB1cmxTdHJpbmdcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVVybEVtcHR5RXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnVybEVtcHR5RXJyb3IuY29kZSxcclxuICAgICAgICAgICAgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS51cmxFbXB0eUVycm9yLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXJyb3IgdGhyb3duIHdoZW4gc2NvcGVzIGFyZSBub3QgYW4gYXJyYXlcclxuICAgICAqIEBwYXJhbSBpbnB1dFNjb3Blc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlU2NvcGVzTm9uQXJyYXlFcnJvcihpbnB1dFNjb3BlczogQXJyYXk8c3RyaW5nPik6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5ub25BcnJheVNjb3Blc0Vycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9uQXJyYXlTY29wZXNFcnJvci5kZXNjfSBHaXZlbiBTY29wZXM6ICR7aW5wdXRTY29wZXN9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFcnJvciB0aHJvd24gd2hlbiBzY29wZXMgYXJlIGVtcHR5LlxyXG4gICAgICogQHBhcmFtIHNjb3Blc1ZhbHVlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVFbXB0eVNjb3Blc0FycmF5RXJyb3IoaW5wdXRTY29wZXM6IEFycmF5PHN0cmluZz4pOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuZW1wdHlTY29wZXNFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmVtcHR5U2NvcGVzRXJyb3IuZGVzY30gR2l2ZW4gU2NvcGVzOiAke2lucHV0U2NvcGVzfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXJyb3IgdGhyb3duIHdoZW4gY2xpZW50IGlkIHNjb3BlIGlzIG5vdCBwcm92aWRlZCBhcyBzaW5nbGUgc2NvcGUuXHJcbiAgICAgKiBAcGFyYW0gaW5wdXRTY29wZXNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUNsaWVudElkU2luZ2xlU2NvcGVFcnJvcihpbnB1dFNjb3BlczogQXJyYXk8c3RyaW5nPik6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jbGllbnRJZFNpbmdsZVNjb3BlRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jbGllbnRJZFNpbmdsZVNjb3BlRXJyb3IuZGVzY30gR2l2ZW4gU2NvcGVzOiAke2lucHV0U2NvcGVzfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXJyb3IgdGhyb3duIHdoZW4gcHJvbXB0IGlzIG5vdCBhbiBhbGxvd2VkIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gcHJvbXB0VmFsdWVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRQcm9tcHRFcnJvcihwcm9tcHRWYWx1ZTogc3RyaW5nKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRQcm9tcHQuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkUHJvbXB0LmRlc2N9IEdpdmVuIHZhbHVlOiAke3Byb21wdFZhbHVlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGVycm9yIHdoZW4gdG9rZW4gcmVxdWVzdCBpcyBlbXB0eSBhbmQgbm90aGluZyBjYWNoZWQgaW4gc3RvcmFnZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUVtcHR5TG9nb3V0UmVxdWVzdEVycm9yKCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoXHJcbiAgICAgICAgICAgIENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UubG9nb3V0UmVxdWVzdEVtcHR5RXJyb3IuY29kZSxcclxuICAgICAgICAgICAgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5sb2dvdXRSZXF1ZXN0RW1wdHlFcnJvci5kZXNjXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciB3aGVuIHRva2VuIHJlcXVlc3QgaXMgZW1wdHkgYW5kIG5vdGhpbmcgY2FjaGVkIGluIHN0b3JhZ2UuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVFbXB0eVRva2VuUmVxdWVzdEVycm9yKCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoXHJcbiAgICAgICAgICAgIENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UudG9rZW5SZXF1ZXN0RW1wdHlFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnRva2VuUmVxdWVzdEVtcHR5RXJyb3IuZGVzY1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3Igd2hlbiBhbiBpbnZhbGlkIGNvZGVfY2hhbGxlbmdlX21ldGhvZCBpcyBwYXNzZWQgYnkgdGhlIHVzZXJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRDb2RlQ2hhbGxlbmdlTWV0aG9kRXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihcclxuICAgICAgICAgICAgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkQ29kZUNoYWxsZW5nZU1ldGhvZC5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRDb2RlQ2hhbGxlbmdlTWV0aG9kLmRlc2NcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGVycm9yIHdoZW4gYm90aCBwYXJhbXM6IGNvZGVfY2hhbGxlbmdlIGFuZCBjb2RlX2NoYWxsZW5nZV9tZXRob2QgYXJlIG5vdCBwYXNzZWQgdG9nZXRoZXJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRDb2RlQ2hhbGxlbmdlUGFyYW1zRXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihcclxuICAgICAgICAgICAgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkQ29kZUNoYWxsZW5nZVBhcmFtcy5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRDb2RlQ2hhbGxlbmdlUGFyYW1zLmRlc2NcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGFuIGVycm9yIHdoZW4gdGhlIHVzZXIgcGFzc2VzIGJvdGgga25vd25BdXRob3JpdGllcyBhbmQgY2xvdWREaXNjb3ZlcnlNZXRhZGF0YVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlS25vd25BdXRob3JpdGllc0Nsb3VkRGlzY292ZXJ5TWV0YWRhdGFFcnJvcigpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uua25vd25BdXRob3JpdGllc0FuZENsb3VkRGlzY292ZXJ5TWV0YWRhdGEuY29kZSxcclxuICAgICAgICAgICAgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5rbm93bkF1dGhvcml0aWVzQW5kQ2xvdWREaXNjb3ZlcnlNZXRhZGF0YS5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBhbiBlcnJvciB3aGVuIHRoZSB1c2VyIHBhc3NlcyBpbnZhbGlkIGNsb3VkRGlzY292ZXJ5TWV0YWRhdGFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRDbG91ZERpc2NvdmVyeU1ldGFkYXRhRXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRDbG91ZERpc2NvdmVyeU1ldGFkYXRhLmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZENsb3VkRGlzY292ZXJ5TWV0YWRhdGEuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3Igd2hlbiBwcm92aWRlZCBhdXRob3JpdHkgaXMgbm90IGEgbWVtYmVyIG9mIHRoZSB0cnVzdGVkIGhvc3QgbGlzdFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlVW50cnVzdGVkQXV0aG9yaXR5RXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnVudHJ1c3RlZEF1dGhvcml0eS5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnVudHJ1c3RlZEF1dGhvcml0eS5kZXNjKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBTY29wZVNldCBjbGFzcyBjcmVhdGVzIGEgc2V0IG9mIHNjb3Blcy4gU2NvcGVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlLCB1bmlxdWUgdmFsdWVzLCBzbyB0aGUgU2V0IG9iamVjdCBpbiBKUyBtYWtlc1xyXG4gKiB0aGUgbW9zdCBzZW5zZSB0byBpbXBsZW1lbnQgZm9yIHRoaXMgY2xhc3MuIEFsbCBzY29wZXMgYXJlIHRyaW1tZWQgYW5kIGNvbnZlcnRlZCB0byBsb3dlciBjYXNlIHN0cmluZ3MgdG8gZW5zdXJlIHVuaXF1ZW5lc3Mgb2Ygc3RyaW5ncy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTY29wZVNldCB7O1xyXG4gICAgLy8gU2NvcGVzIGFzIGEgU2V0IG9mIHN0cmluZ3NcclxuICAgIHByaXZhdGUgc2NvcGVzOiBTZXQ8c3RyaW5nPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpbnB1dFNjb3BlczogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgICAgIC8vIEZpbHRlciBlbXB0eSBzdHJpbmcgYW5kIG51bGwvdW5kZWZpbmVkIGFycmF5IGl0ZW1zXHJcbiAgICAgICAgY29uc3Qgc2NvcGVBcnIgPSBpbnB1dFNjb3BlcyA/IFN0cmluZ1V0aWxzLnRyaW1BbmRDb252ZXJ0QXJyYXlFbnRyaWVzVG9Mb3dlckNhc2UoWy4uLmlucHV0U2NvcGVzXSkgOiBbXTtcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZElucHV0ID0gc2NvcGVBcnIgPyBTdHJpbmdVdGlscy5yZW1vdmVFbXB0eVN0cmluZ3NGcm9tQXJyYXkoc2NvcGVBcnIpIDogW107XHJcblxyXG4gICAgICAgIC8vIFZhbGlkYXRlIGFuZCBmaWx0ZXIgc2NvcGVzICh2YWxpZGF0ZSBmdW5jdGlvbiB0aHJvd3MgaWYgdmFsaWRhdGlvbiBmYWlscylcclxuICAgICAgICB0aGlzLnZhbGlkYXRlSW5wdXRTY29wZXMoZmlsdGVyZWRJbnB1dCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NvcGVzID0gbmV3IFNldDxzdHJpbmc+KGZpbHRlcmVkSW5wdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIFNjb3BlU2V0IGZyb20gc3BhY2UtZGVsaW1pdGVkIHN0cmluZ1xyXG4gICAgICogQHBhcmFtIGlucHV0U2NvcGVTdHJpbmdcclxuICAgICAqIEBwYXJhbSBhcHBDbGllbnRJZFxyXG4gICAgICogQHBhcmFtIHNjb3Blc1JlcXVpcmVkXHJcbiAgICAqL1xyXG4gICAgc3RhdGljIGZyb21TdHJpbmcoaW5wdXRTY29wZVN0cmluZzogc3RyaW5nKTogU2NvcGVTZXQge1xyXG4gICAgICAgIGlucHV0U2NvcGVTdHJpbmcgPSBpbnB1dFNjb3BlU3RyaW5nIHx8IFwiXCI7XHJcbiAgICAgICAgY29uc3QgaW5wdXRTY29wZXM6IEFycmF5PHN0cmluZz4gPSBpbnB1dFNjb3BlU3RyaW5nLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICByZXR1cm4gbmV3IFNjb3BlU2V0KGlucHV0U2NvcGVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZWQgdG8gdmFsaWRhdGUgdGhlIHNjb3BlcyBpbnB1dCBwYXJhbWV0ZXIgcmVxdWVzdGVkICBieSB0aGUgZGV2ZWxvcGVyLlxyXG4gICAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBpbnB1dFNjb3BlcyAtIERldmVsb3BlciByZXF1ZXN0ZWQgcGVybWlzc2lvbnMuIE5vdCBhbGwgc2NvcGVzIGFyZSBndWFyYW50ZWVkIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBhY2Nlc3MgdG9rZW4gcmV0dXJuZWQuXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNjb3Blc1JlcXVpcmVkIC0gQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHNjb3BlcyBhcnJheSBpcyByZXF1aXJlZCBvciBub3RcclxuICAgICovXHJcbiAgICBwcml2YXRlIHZhbGlkYXRlSW5wdXRTY29wZXMoaW5wdXRTY29wZXM6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcclxuICAgICAgICAvLyBDaGVjayBpZiBzY29wZXMgYXJlIHJlcXVpcmVkIGJ1dCBub3QgZ2l2ZW4gb3IgaXMgYW4gZW1wdHkgYXJyYXlcclxuICAgICAgICBpZiAoIWlucHV0U2NvcGVzIHx8IGlucHV0U2NvcGVzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUVtcHR5U2NvcGVzQXJyYXlFcnJvcihpbnB1dFNjb3Blcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgYSBnaXZlbiBzY29wZSBpcyBwcmVzZW50IGluIHRoaXMgc2V0IG9mIHNjb3Blcy5cclxuICAgICAqIEBwYXJhbSBzY29wZVxyXG4gICAgICovXHJcbiAgICBjb250YWluc1Njb3BlKHNjb3BlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gIVN0cmluZ1V0aWxzLmlzRW1wdHkoc2NvcGUpID8gdGhpcy5zY29wZXMuaGFzKHNjb3BlKSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgYSBzZXQgb2Ygc2NvcGVzIGlzIHByZXNlbnQgaW4gdGhpcyBzZXQgb2Ygc2NvcGVzLlxyXG4gICAgICogQHBhcmFtIHNjb3BlU2V0XHJcbiAgICAgKi9cclxuICAgIGNvbnRhaW5zU2NvcGVTZXQoc2NvcGVTZXQ6IFNjb3BlU2V0KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFzY29wZVNldCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKHRoaXMuc2NvcGVzLnNpemUgPj0gc2NvcGVTZXQuc2NvcGVzLnNpemUgJiYgc2NvcGVTZXQuYXNBcnJheSgpLmV2ZXJ5KHNjb3BlID0+IHRoaXMuY29udGFpbnNTY29wZShzY29wZSkpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGVuZHMgc2luZ2xlIHNjb3BlIGlmIHBhc3NlZFxyXG4gICAgICogQHBhcmFtIG5ld1Njb3BlXHJcbiAgICAgKi9cclxuICAgIGFwcGVuZFNjb3BlKG5ld1Njb3BlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkobmV3U2NvcGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcGVzLmFkZChuZXdTY29wZS50cmltKCkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwZW5kcyBtdWx0aXBsZSBzY29wZXMgaWYgcGFzc2VkXHJcbiAgICAgKiBAcGFyYW0gbmV3U2NvcGVzXHJcbiAgICAgKi9cclxuICAgIGFwcGVuZFNjb3BlcyhuZXdTY29wZXM6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBuZXdTY29wZXMuZm9yRWFjaChuZXdTY29wZSA9PiB0aGlzLmFwcGVuZFNjb3BlKG5ld1Njb3BlKSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlQXBwZW5kU2NvcGVTZXRFcnJvcihlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGVsZW1lbnQgZnJvbSBzZXQgb2Ygc2NvcGVzLlxyXG4gICAgICogQHBhcmFtIHNjb3BlXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZVNjb3BlKHNjb3BlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShzY29wZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVJlbW92ZUVtcHR5U2NvcGVGcm9tU2V0RXJyb3Ioc2NvcGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjb3Blcy5kZWxldGUoc2NvcGUudHJpbSgpLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29tYmluZXMgYW4gYXJyYXkgb2Ygc2NvcGVzIHdpdGggdGhlIGN1cnJlbnQgc2V0IG9mIHNjb3Blcy5cclxuICAgICAqIEBwYXJhbSBvdGhlclNjb3Blc1xyXG4gICAgICovXHJcbiAgICB1bmlvblNjb3BlU2V0cyhvdGhlclNjb3BlczogU2NvcGVTZXQpOiBTZXQ8c3RyaW5nPiB7XHJcbiAgICAgICAgaWYgKCFvdGhlclNjb3Blcykge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW1wdHlJbnB1dFNjb3BlU2V0RXJyb3Iob3RoZXJTY29wZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFNldDxzdHJpbmc+KFsuLi5vdGhlclNjb3Blcy5hc0FycmF5KCksIC4uLkFycmF5LmZyb20odGhpcy5zY29wZXMpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiBzY29wZXMgaW50ZXJzZWN0IGJldHdlZW4gdGhpcyBzZXQgYW5kIGFub3RoZXIuXHJcbiAgICAgKiBAcGFyYW0gb3RoZXJTY29wZXMgXHJcbiAgICAgKi9cclxuICAgIGludGVyc2VjdGluZ1Njb3BlU2V0cyhvdGhlclNjb3BlczogU2NvcGVTZXQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIW90aGVyU2NvcGVzKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVFbXB0eUlucHV0U2NvcGVTZXRFcnJvcihvdGhlclNjb3Blcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1bmlvblNjb3BlcyA9IHRoaXMudW5pb25TY29wZVNldHMob3RoZXJTY29wZXMpO1xyXG5cclxuICAgICAgICAvLyBEbyBub3QgYWxsb3cgb2ZmbGluZV9hY2Nlc3MgdG8gYmUgdGhlIG9ubHkgaW50ZXJzZWN0aW5nIHNjb3BlXHJcbiAgICAgICAgY29uc3Qgc2l6ZU90aGVyU2NvcGVzID0gb3RoZXJTY29wZXMuZ2V0U2NvcGVDb3VudCgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVUaGlzU2NvcGVzID0gdGhpcy5nZXRTY29wZUNvdW50KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZVVuaW9uU2NvcGVzID0gdW5pb25TY29wZXMuc2l6ZTtcclxuICAgICAgICByZXR1cm4gc2l6ZVVuaW9uU2NvcGVzIDwgKHNpemVUaGlzU2NvcGVzICsgc2l6ZU90aGVyU2NvcGVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgc2l6ZSBvZiBzZXQgb2Ygc2NvcGVzLlxyXG4gICAgICovXHJcbiAgICBnZXRTY29wZUNvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGVzLnNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBzY29wZXMgYXMgYW4gYXJyYXkgb2Ygc3RyaW5nIHZhbHVlc1xyXG4gICAgICovXHJcbiAgICBhc0FycmF5KCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuc2NvcGVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByaW50cyBzY29wZXMgaW50byBhIHNwYWNlLWRlbGltaXRlZCBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgcHJpbnRTY29wZXMoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5zY29wZXMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2NvcGVBcnIgPSB0aGlzLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNjb3BlQXJyLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuLi91dGlscy9TdHJpbmdVdGlsc1wiO1xyXG5pbXBvcnQgeyBJQ3J5cHRvIH0gZnJvbSBcIi4uL2NyeXB0by9JQ3J5cHRvXCI7XHJcblxyXG4vKipcclxuICogQ2xpZW50IGluZm8gb2JqZWN0IHdoaWNoIGNvbnNpc3RzIG9mIHR3byBJRHMuIE5lZWQgdG8gYWRkIG1vcmUgaW5mbyBoZXJlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ2xpZW50SW5mbyA9IHtcclxuICAgIHVpZDogc3RyaW5nLFxyXG4gICAgdXRpZDogc3RyaW5nXHJcbn07XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gdG8gYnVpbGQgYSBjbGllbnQgaW5mbyBvYmplY3RcclxuICogQHBhcmFtIHJhd0NsaWVudEluZm8gXHJcbiAqIEBwYXJhbSBjcnlwdG8gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRDbGllbnRJbmZvKHJhd0NsaWVudEluZm86IHN0cmluZywgY3J5cHRvOiBJQ3J5cHRvKTogQ2xpZW50SW5mbyB7XHJcbiAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShyYXdDbGllbnRJbmZvKSkge1xyXG4gICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVDbGllbnRJbmZvRW1wdHlFcnJvcihyYXdDbGllbnRJbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRlY29kZWRDbGllbnRJbmZvOiBzdHJpbmcgPSBjcnlwdG8uYmFzZTY0RGVjb2RlKHJhd0NsaWVudEluZm8pO1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZWRDbGllbnRJbmZvKSBhcyBDbGllbnRJbmZvO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVDbGllbnRJbmZvRGVjb2RpbmdFcnJvcihlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IElOZXR3b3JrTW9kdWxlIH0gZnJvbSBcIi4uL25ldHdvcmsvSU5ldHdvcmtNb2R1bGVcIjtcclxuaW1wb3J0IHsgQ2xvdWRJbnN0YW5jZURpc2NvdmVyeVJlc3BvbnNlIH0gZnJvbSBcIi4vQ2xvdWRJbnN0YW5jZURpc2NvdmVyeVJlc3BvbnNlXCI7XHJcbmltcG9ydCB7IFRydXN0ZWRIb3N0TGlzdFR5cGUgfSBmcm9tIFwiLi9UcnVzdGVkSG9zdExpc3RUeXBlXCI7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgQ2xvdWREaXNjb3ZlcnlNZXRhZGF0YSB9IGZyb20gXCIuL0Nsb3VkRGlzY292ZXJ5TWV0YWRhdGFcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgVXJsU3RyaW5nIH0gZnJvbSBcIi4uL3VybC9VcmxTdHJpbmdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUcnVzdGVkQXV0aG9yaXR5IHtcclxuICAgIHByaXZhdGUgc3RhdGljIFRydXN0ZWRIb3N0TGlzdDogVHJ1c3RlZEhvc3RMaXN0VHlwZSA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBDbG91ZERpc2NvdmVyeU1ldGFkYXRhIG9iamVjdCBmcm9tIGtub3duQXV0aG9yaXRpZXMgb3IgY2xvdWREaXNjb3ZlcnlNZXRhZGF0YSBwYXNzZWQgaW50byB0aGUgYXBwIGNvbmZpZ1xyXG4gICAgICogQHBhcmFtIGtub3duQXV0aG9yaXRpZXMgXHJcbiAgICAgKiBAcGFyYW0gY2xvdWREaXNjb3ZlcnlNZXRhZGF0YVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2V0VHJ1c3RlZEF1dGhvcml0aWVzRnJvbUNvbmZpZyhrbm93bkF1dGhvcml0aWVzOiBBcnJheTxzdHJpbmc+LCBjbG91ZERpc2NvdmVyeU1ldGFkYXRhOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ2V0VHJ1c3RlZEhvc3RMaXN0KCkubGVuZ3RoKXtcclxuICAgICAgICAgICAgaWYgKGtub3duQXV0aG9yaXRpZXMubGVuZ3RoID4gMCAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eShjbG91ZERpc2NvdmVyeU1ldGFkYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUtub3duQXV0aG9yaXRpZXNDbG91ZERpc2NvdmVyeU1ldGFkYXRhRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDbG91ZERpc2NvdmVyeU1ldGFkYXRhRnJvbUtub3duQXV0aG9yaXRpZXMoa25vd25BdXRob3JpdGllcyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsb3VkRGlzY292ZXJ5TWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRNZXRhZGF0YSA9IEpTT04ucGFyc2UoY2xvdWREaXNjb3ZlcnlNZXRhZGF0YSkgYXMgQ2xvdWRJbnN0YW5jZURpc2NvdmVyeVJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNsb3VkRGlzY292ZXJ5TWV0YWRhdGEocGFyc2VkTWV0YWRhdGEubWV0YWRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlSW52YWxpZENsb3VkRGlzY292ZXJ5TWV0YWRhdGFFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHRvIGdldCBtZXRhZGF0YSBmcm9tIG5ldHdvcmsgaWYgQ2xvdWREaXNjb3ZlcnlNZXRhZGF0YSB3YXMgbm90IHBvcHVsYXRlZCBieSBjb25maWdcclxuICAgICAqIEBwYXJhbSBuZXR3b3JrSW50ZXJmYWNlIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHNldFRydXN0ZWRBdXRob3JpdGllc0Zyb21OZXR3b3JrKGF1dGhvcml0eVRvVmVyaWZ5OiBVcmxTdHJpbmcsIG5ldHdvcmtJbnRlcmZhY2U6IElOZXR3b3JrTW9kdWxlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2VEaXNjb3ZlcnlFbmRwb2ludCA9IGAke0NvbnN0YW50cy5BQURfSU5TVEFOQ0VfRElTQ09WRVJZX0VORFBUfSR7YXV0aG9yaXR5VG9WZXJpZnkudXJsU3RyaW5nfW9hdXRoMi92Mi4wL2F1dGhvcml6ZWA7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuZXR3b3JrSW50ZXJmYWNlLnNlbmRHZXRSZXF1ZXN0QXN5bmM8Q2xvdWRJbnN0YW5jZURpc2NvdmVyeVJlc3BvbnNlPihpbnN0YW5jZURpc2NvdmVyeUVuZHBvaW50KTtcclxuICAgICAgICAgICAgY29uc3QgbWV0YWRhdGEgPSByZXNwb25zZS5ib2R5Lm1ldGFkYXRhO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVDbG91ZERpc2NvdmVyeU1ldGFkYXRhKG1ldGFkYXRhKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaG9zdCA9IGF1dGhvcml0eVRvVmVyaWZ5LmdldFVybENvbXBvbmVudHMoKS5Ib3N0TmFtZUFuZFBvcnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0VHJ1c3RlZEhvc3RMaXN0KCkubGVuZ3RoID4gMCAmJiAhdGhpcy5Jc0luVHJ1c3RlZEhvc3RMaXN0KGhvc3QpKSB7XHJcbiAgICAgICAgICAgIC8vIEN1c3RvbSBEb21haW4gc2NlbmFyaW8sIGhvc3QgaXMgdHJ1c3RlZCBiZWNhdXNlIEluc3RhbmNlIERpc2NvdmVyeSBjYWxsIHN1Y2NlZWRlZCBcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDbG91ZERpc2NvdmVyeU1ldGFkYXRhRnJvbUtub3duQXV0aG9yaXRpZXMoW2hvc3RdKTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gbWV0YWRhdGEgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2F2ZUNsb3VkRGlzY292ZXJ5TWV0YWRhdGEobWV0YWRhdGE6IEFycmF5PENsb3VkRGlzY292ZXJ5TWV0YWRhdGE+KTogdm9pZCB7XHJcbiAgICAgICAgbWV0YWRhdGEuZm9yRWFjaChmdW5jdGlvbihlbnRyeTogQ2xvdWREaXNjb3ZlcnlNZXRhZGF0YSl7XHJcbiAgICAgICAgICAgIGNvbnN0IGF1dGhvcml0aWVzID0gZW50cnkuYWxpYXNlcztcclxuICAgICAgICAgICAgYXV0aG9yaXRpZXMuZm9yRWFjaChmdW5jdGlvbihhdXRob3JpdHkpIHtcclxuICAgICAgICAgICAgICAgIFRydXN0ZWRBdXRob3JpdHkuVHJ1c3RlZEhvc3RMaXN0W2F1dGhvcml0eS50b0xvd2VyQ2FzZSgpXSA9IGVudHJ5O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIGdlbmVyaWMgbWV0YWRhdGEgb2JqZWN0IGZvciBlYWNoIGhvc3QgcGFzc2VkIHRvIGtub3duQXV0aG9yaXRpZXMuXHJcbiAgICAgKiBUaGlzIGlzIG1vc3RseSB1c2VmdWwgZm9yIEIyQyBvciBBREZTIHNjZW5hcmlvc1xyXG4gICAgICogQHBhcmFtIGtub3duQXV0aG9yaXRpZXMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlQ2xvdWREaXNjb3ZlcnlNZXRhZGF0YUZyb21Lbm93bkF1dGhvcml0aWVzKGtub3duQXV0aG9yaXRpZXM6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcclxuICAgICAgICBrbm93bkF1dGhvcml0aWVzLmZvckVhY2goYXV0aG9yaXR5ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5UcnVzdGVkSG9zdExpc3RbYXV0aG9yaXR5LnRvTG93ZXJDYXNlKCldID0ge1xyXG4gICAgICAgICAgICAgICAgcHJlZmVycmVkX2NhY2hlOiBhdXRob3JpdHkudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgIHByZWZlcnJlZF9uZXR3b3JrOiBhdXRob3JpdHkudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgIGFsaWFzZXM6IFthdXRob3JpdHkudG9Mb3dlckNhc2UoKV1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFRydXN0ZWRIb3N0TGlzdCgpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5UcnVzdGVkSG9zdExpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IG1ldGFkYXRhIGZvciB0aGUgcHJvdmlkZWQgaG9zdFxyXG4gICAgICogQHBhcmFtIGhvc3QgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q2xvdWREaXNjb3ZlcnlNZXRhZGF0YShob3N0OiBzdHJpbmcpOiBDbG91ZERpc2NvdmVyeU1ldGFkYXRhIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5UcnVzdGVkSG9zdExpc3RbaG9zdC50b0xvd2VyQ2FzZSgpXSB8fCBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgaG9zdCBpcyBpbiBhIGxpc3Qgb2YgdHJ1c3RlZCBob3N0c1xyXG4gICAgICogQHBhcmFtIGhvc3QgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgSXNJblRydXN0ZWRIb3N0TGlzdChob3N0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5UcnVzdGVkSG9zdExpc3QpLmluZGV4T2YoaG9zdC50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIFNlcGFyYXRvcnMsXHJcbiAgICBDYWNoZUFjY291bnRUeXBlLFxyXG4gICAgQ2FjaGVUeXBlLFxyXG59IGZyb20gXCIuLi8uLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgQXV0aG9yaXR5IH0gZnJvbSBcIi4uLy4uL2F1dGhvcml0eS9BdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgSWRUb2tlbiB9IGZyb20gXCIuLi8uLi9hY2NvdW50L0lkVG9rZW5cIjtcclxuaW1wb3J0IHsgSUNyeXB0byB9IGZyb20gXCIuLi8uLi9jcnlwdG8vSUNyeXB0b1wiO1xyXG5pbXBvcnQgeyBidWlsZENsaWVudEluZm8gfSBmcm9tIFwiLi4vLi4vYWNjb3VudC9DbGllbnRJbmZvXCI7XHJcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL1N0cmluZ1V0aWxzXCI7XHJcbmltcG9ydCB7IFRydXN0ZWRBdXRob3JpdHkgfSBmcm9tIFwiLi4vLi4vYXV0aG9yaXR5L1RydXN0ZWRBdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgQWNjb3VudEluZm8gfSBmcm9tIFwiLi4vLi4vYWNjb3VudC9BY2NvdW50SW5mb1wiO1xyXG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi4vLi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IGRlZmluZXMgcmVxdWlyZWQgYW5kIG9wdGlvbmFsIHBhcmFtZXRlcnMgZm9yIGFuIEFjY291bnQgZmllbGQgKGJhc2VkIG9uIHVuaXZlcnNhbCBjYWNoZSBzY2hlbWEgaW1wbGVtZW50ZWQgYnkgYWxsIE1TQUxzKS5cclxuICogXHJcbiAqIEtleSA6IFZhbHVlIFNjaGVtYVxyXG4gKiBcclxuICogS2V5OiA8aG9tZV9hY2NvdW50X2lkPi08ZW52aXJvbm1lbnQ+LTxyZWFsbSo+XHJcbiAqIFxyXG4gKiBWYWx1ZSBTY2hlbWE6XHJcbiAqIHtcclxuICogICAgICBob21lQWNjb3VudElkOiBob21lIGFjY291bnQgaWRlbnRpZmllciBmb3IgdGhlIGF1dGggc2NoZW1lLFxyXG4gKiAgICAgIGVudmlyb25tZW50OiBlbnRpdHkgdGhhdCBpc3N1ZWQgdGhlIHRva2VuLCByZXByZXNlbnRlZCBhcyBhIGZ1bGwgaG9zdFxyXG4gKiAgICAgIHJlYWxtOiBGdWxsIHRlbmFudCBvciBvcmdhbml6YXRpb25hbCBpZGVudGlmaWVyIHRoYXQgdGhlIGFjY291bnQgYmVsb25ncyB0b1xyXG4gKiAgICAgIGxvY2FsQWNjb3VudElkOiBPcmlnaW5hbCB0ZW5hbnQtc3BlY2lmaWMgYWNjb3VudElELCB1c3VhbGx5IHVzZWQgZm9yIGxlZ2FjeSBjYXNlc1xyXG4gKiAgICAgIHVzZXJuYW1lOiBwcmltYXJ5IHVzZXJuYW1lIHRoYXQgcmVwcmVzZW50cyB0aGUgdXNlciwgdXN1YWxseSBjb3JyZXNwb25kcyB0byBwcmVmZXJyZWRfdXNlcm5hbWUgaW4gdGhlIHYyIGVuZHB0XHJcbiAqICAgICAgYXV0aG9yaXR5VHlwZTogQWNjb3VudHMgYXV0aG9yaXR5IHR5cGUgYXMgYSBzdHJpbmdcclxuICogICAgICBuYW1lOiBGdWxsIG5hbWUgZm9yIHRoZSBhY2NvdW50LCBpbmNsdWRpbmcgZ2l2ZW4gbmFtZSBhbmQgZmFtaWx5IG5hbWUsXHJcbiAqICAgICAgY2xpZW50SW5mbzogRnVsbCBiYXNlNjQgZW5jb2RlZCBjbGllbnQgaW5mbyByZWNlaXZlZCBmcm9tIEVTVFNcclxuICogICAgICBsYXN0TW9kaWZpY2F0aW9uVGltZTogbGFzdCB0aW1lIHRoaXMgZW50aXR5IHdhcyBtb2RpZmllZCBpbiB0aGUgY2FjaGVcclxuICogICAgICBsYXN0TW9kaWZpY2F0aW9uQXBwOiBcclxuICogfVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFjY291bnRFbnRpdHkge1xyXG4gICAgaG9tZUFjY291bnRJZDogc3RyaW5nO1xyXG4gICAgZW52aXJvbm1lbnQ6IHN0cmluZztcclxuICAgIHJlYWxtOiBzdHJpbmc7XHJcbiAgICBsb2NhbEFjY291bnRJZDogc3RyaW5nO1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIGF1dGhvcml0eVR5cGU6IHN0cmluZztcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBjbGllbnRJbmZvPzogc3RyaW5nO1xyXG4gICAgbGFzdE1vZGlmaWNhdGlvblRpbWU/OiBzdHJpbmc7XHJcbiAgICBsYXN0TW9kaWZpY2F0aW9uQXBwPzogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgQWNjb3VudCBJZCBrZXkgY29tcG9uZW50IGFzIHBlciB0aGUgc2NoZW1hOiA8aG9tZV9hY2NvdW50X2lkPi08ZW52aXJvbm1lbnQ+XHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlQWNjb3VudElkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudElkOiBBcnJheTxzdHJpbmc+ID0gW3RoaXMuaG9tZUFjY291bnRJZCwgdGhpcy5lbnZpcm9ubWVudF07XHJcbiAgICAgICAgcmV0dXJuIGFjY291bnRJZC5qb2luKFNlcGFyYXRvcnMuQ0FDSEVfS0VZX1NFUEFSQVRPUikudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlIEFjY291bnQgQ2FjaGUgS2V5IGFzIHBlciB0aGUgc2NoZW1hOiA8aG9tZV9hY2NvdW50X2lkPi08ZW52aXJvbm1lbnQ+LTxyZWFsbSo+XHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlQWNjb3VudEtleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBBY2NvdW50RW50aXR5LmdlbmVyYXRlQWNjb3VudENhY2hlS2V5KHtcclxuICAgICAgICAgICAgaG9tZUFjY291bnRJZDogdGhpcy5ob21lQWNjb3VudElkLFxyXG4gICAgICAgICAgICBlbnZpcm9ubWVudDogdGhpcy5lbnZpcm9ubWVudCxcclxuICAgICAgICAgICAgdGVuYW50SWQ6IHRoaXMucmVhbG0sXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIHRoZSB0eXBlIG9mIHRoZSBjYWNoZSAoaW4gdGhpcyBjYXNlIGFjY291bnQpXHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlVHlwZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5hdXRob3JpdHlUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ2FjaGVBY2NvdW50VHlwZS5BREZTX0FDQ09VTlRfVFlQRTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBDYWNoZVR5cGUuQURGUztcclxuICAgICAgICAgICAgY2FzZSBDYWNoZUFjY291bnRUeXBlLk1TQVYxX0FDQ09VTlRfVFlQRTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBDYWNoZVR5cGUuTVNBO1xyXG4gICAgICAgICAgICBjYXNlIENhY2hlQWNjb3VudFR5cGUuTVNTVFNfQUNDT1VOVF9UWVBFOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENhY2hlVHlwZS5NU1NUUztcclxuICAgICAgICAgICAgY2FzZSBDYWNoZUFjY291bnRUeXBlLkdFTkVSSUNfQUNDT1VOVF9UWVBFOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENhY2hlVHlwZS5HRU5FUklDO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEFjY291bnRUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIEFjY291bnRJbmZvIGludGVyZmFjZSBmb3IgdGhpcyBhY2NvdW50LlxyXG4gICAgICovXHJcbiAgICBnZXRBY2NvdW50SW5mbygpOiBBY2NvdW50SW5mbyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaG9tZUFjY291bnRJZDogdGhpcy5ob21lQWNjb3VudElkLFxyXG4gICAgICAgICAgICBlbnZpcm9ubWVudDogdGhpcy5lbnZpcm9ubWVudCxcclxuICAgICAgICAgICAgdGVuYW50SWQ6IHRoaXMucmVhbG0sXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlcyBhY2NvdW50IGtleSBmcm9tIGludGVyZmFjZVxyXG4gICAgICogQHBhcmFtIGFjY291bnRJbnRlcmZhY2VcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdlbmVyYXRlQWNjb3VudENhY2hlS2V5KGFjY291bnRJbnRlcmZhY2U6IEFjY291bnRJbmZvKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBhY2NvdW50S2V5ID0gW1xyXG4gICAgICAgICAgICBhY2NvdW50SW50ZXJmYWNlLmhvbWVBY2NvdW50SWQsXHJcbiAgICAgICAgICAgIGFjY291bnRJbnRlcmZhY2UuZW52aXJvbm1lbnQgfHwgXCJcIixcclxuICAgICAgICAgICAgYWNjb3VudEludGVyZmFjZS50ZW5hbnRJZCB8fCBcIlwiLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiBhY2NvdW50S2V5LmpvaW4oU2VwYXJhdG9ycy5DQUNIRV9LRVlfU0VQQVJBVE9SKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnVpbGQgQWNjb3VudCBjYWNoZSBmcm9tIElkVG9rZW4sIGNsaWVudEluZm8gYW5kIGF1dGhvcml0eS9wb2xpY3lcclxuICAgICAqIEBwYXJhbSBjbGllbnRJbmZvXHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXR5XHJcbiAgICAgKiBAcGFyYW0gaWRUb2tlblxyXG4gICAgICogQHBhcmFtIHBvbGljeVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQWNjb3VudChcclxuICAgICAgICBjbGllbnRJbmZvOiBzdHJpbmcsXHJcbiAgICAgICAgYXV0aG9yaXR5OiBBdXRob3JpdHksXHJcbiAgICAgICAgaWRUb2tlbjogSWRUb2tlbixcclxuICAgICAgICBjcnlwdG86IElDcnlwdG9cclxuICAgICk6IEFjY291bnRFbnRpdHkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQ6IEFjY291bnRFbnRpdHkgPSBuZXcgQWNjb3VudEVudGl0eSgpO1xyXG5cclxuICAgICAgICBhY2NvdW50LmF1dGhvcml0eVR5cGUgPSBDYWNoZUFjY291bnRUeXBlLk1TU1RTX0FDQ09VTlRfVFlQRTtcclxuICAgICAgICBhY2NvdW50LmNsaWVudEluZm8gPSBjbGllbnRJbmZvO1xyXG4gICAgICAgIGNvbnN0IGNsaWVudEluZm9PYmogPSBidWlsZENsaWVudEluZm8oY2xpZW50SW5mbywgY3J5cHRvKTtcclxuICAgICAgICBhY2NvdW50LmhvbWVBY2NvdW50SWQgPSBgJHtjbGllbnRJbmZvT2JqLnVpZH0ke1NlcGFyYXRvcnMuQ0xJRU5UX0lORk9fU0VQQVJBVE9SfSR7Y2xpZW50SW5mb09iai51dGlkfWA7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcUVudmlyb25tZW50ID0gYXV0aG9yaXR5LmNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMuSG9zdE5hbWVBbmRQb3J0O1xyXG4gICAgICAgIGNvbnN0IGVudiA9IFRydXN0ZWRBdXRob3JpdHkuZ2V0Q2xvdWREaXNjb3ZlcnlNZXRhZGF0YShyZXFFbnZpcm9ubWVudCkgPyBUcnVzdGVkQXV0aG9yaXR5LmdldENsb3VkRGlzY292ZXJ5TWV0YWRhdGEocmVxRW52aXJvbm1lbnQpLnByZWZlcnJlZF9jYWNoZSA6IFwiXCI7XHJcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoZW52KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSW52YWxpZENhY2hlRW52aXJvbm1lbnRFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBhY2NvdW50LmVudmlyb25tZW50ID0gZW52O1xyXG4gICAgICAgIGFjY291bnQucmVhbG0gPSBpZFRva2VuLmNsYWltcy50aWQ7XHJcblxyXG4gICAgICAgIGlmIChpZFRva2VuKSB7XHJcbiAgICAgICAgICAgIC8vIEhvdyBkbyB5b3UgYWNjb3VudCBmb3IgTVNBIENJRCBoZXJlP1xyXG4gICAgICAgICAgICBjb25zdCBsb2NhbEFjY291bnRJZCA9ICFTdHJpbmdVdGlscy5pc0VtcHR5KGlkVG9rZW4uY2xhaW1zLm9pZClcclxuICAgICAgICAgICAgICAgID8gaWRUb2tlbi5jbGFpbXMub2lkXHJcbiAgICAgICAgICAgICAgICA6IGlkVG9rZW4uY2xhaW1zLnNpZDtcclxuICAgICAgICAgICAgYWNjb3VudC5sb2NhbEFjY291bnRJZCA9IGxvY2FsQWNjb3VudElkO1xyXG4gICAgICAgICAgICBhY2NvdW50LnVzZXJuYW1lID0gaWRUb2tlbi5jbGFpbXMucHJlZmVycmVkX3VzZXJuYW1lO1xyXG4gICAgICAgICAgICBhY2NvdW50Lm5hbWUgPSBpZFRva2VuLmNsYWltcy5uYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFjY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZCBBREZTIGFjY291bnQgdHlwZVxyXG4gICAgICogQHBhcmFtIGF1dGhvcml0eVxyXG4gICAgICogQHBhcmFtIGlkVG9rZW5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUFERlNBY2NvdW50KFxyXG4gICAgICAgIGF1dGhvcml0eTogQXV0aG9yaXR5LFxyXG4gICAgICAgIGlkVG9rZW46IElkVG9rZW5cclxuICAgICk6IEFjY291bnRFbnRpdHkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQ6IEFjY291bnRFbnRpdHkgPSBuZXcgQWNjb3VudEVudGl0eSgpO1xyXG5cclxuICAgICAgICBhY2NvdW50LmF1dGhvcml0eVR5cGUgPSBDYWNoZUFjY291bnRUeXBlLkFERlNfQUNDT1VOVF9UWVBFO1xyXG4gICAgICAgIGFjY291bnQuaG9tZUFjY291bnRJZCA9IGlkVG9rZW4uY2xhaW1zLnN1YjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByZXFFbnZpcm9ubWVudCA9IGF1dGhvcml0eS5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLkhvc3ROYW1lQW5kUG9ydDtcclxuICAgICAgICBjb25zdCBlbnYgPSBUcnVzdGVkQXV0aG9yaXR5LmdldENsb3VkRGlzY292ZXJ5TWV0YWRhdGEocmVxRW52aXJvbm1lbnQpID8gVHJ1c3RlZEF1dGhvcml0eS5nZXRDbG91ZERpc2NvdmVyeU1ldGFkYXRhKHJlcUVudmlyb25tZW50KS5wcmVmZXJyZWRfY2FjaGUgOiBcIlwiO1xyXG5cclxuICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShlbnYpKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVJbnZhbGlkQ2FjaGVFbnZpcm9ubWVudEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhY2NvdW50LmVudmlyb25tZW50ID0gZW52O1xyXG4gICAgICAgIGFjY291bnQudXNlcm5hbWUgPSBpZFRva2VuLmNsYWltcy51cG47XHJcbiAgICAgICAgLy8gYWRkIHVuaXF1ZU5hbWUgdG8gY2xhaW1zXHJcbiAgICAgICAgLy8gYWNjb3VudC5uYW1lID0gaWRUb2tlbi5jbGFpbXMudW5pcXVlTmFtZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFjY291bnQ7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBBY2NvdW50Q2FjaGUsIEFjY291bnRGaWx0ZXIsIENyZWRlbnRpYWxGaWx0ZXIsIENyZWRlbnRpYWxDYWNoZSB9IGZyb20gXCIuL3V0aWxzL0NhY2hlVHlwZXNcIjtcclxuaW1wb3J0IHsgQ2FjaGVSZWNvcmQgfSBmcm9tIFwiLi9lbnRpdGllcy9DYWNoZVJlY29yZFwiO1xyXG5pbXBvcnQgeyBDYWNoZVNjaGVtYVR5cGUsIENyZWRlbnRpYWxUeXBlLCBDb25zdGFudHMsIEFQUF9NRVRBX0RBVEEgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IENyZWRlbnRpYWxFbnRpdHkgfSBmcm9tIFwiLi9lbnRpdGllcy9DcmVkZW50aWFsRW50aXR5XCI7XHJcbmltcG9ydCB7IFNjb3BlU2V0IH0gZnJvbSBcIi4uL3JlcXVlc3QvU2NvcGVTZXRcIjtcclxuaW1wb3J0IHsgQWNjb3VudEVudGl0eSB9IGZyb20gXCIuL2VudGl0aWVzL0FjY291bnRFbnRpdHlcIjtcclxuaW1wb3J0IHsgQWNjZXNzVG9rZW5FbnRpdHkgfSBmcm9tIFwiLi9lbnRpdGllcy9BY2Nlc3NUb2tlbkVudGl0eVwiO1xyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuLi91dGlscy9TdHJpbmdVdGlsc1wiO1xyXG5pbXBvcnQgeyBJZFRva2VuRW50aXR5IH0gZnJvbSBcIi4vZW50aXRpZXMvSWRUb2tlbkVudGl0eVwiO1xyXG5pbXBvcnQgeyBSZWZyZXNoVG9rZW5FbnRpdHkgfSBmcm9tIFwiLi9lbnRpdGllcy9SZWZyZXNoVG9rZW5FbnRpdHlcIjtcclxuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL0F1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBJQ2FjaGVNYW5hZ2VyIH0gZnJvbSBcIi4vaW50ZXJmYWNlL0lDYWNoZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBBY2NvdW50SW5mbyB9IGZyb20gXCIuLi9hY2NvdW50L0FjY291bnRJbmZvXCI7XHJcbmltcG9ydCB7IFRydXN0ZWRBdXRob3JpdHkgfSBmcm9tIFwiLi4vYXV0aG9yaXR5L1RydXN0ZWRBdXRob3JpdHlcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgY2xhc3Mgd2hpY2ggaW1wbGVtZW50IGNhY2hlIHN0b3JhZ2UgZnVuY3Rpb25zIHVzZWQgYnkgTVNBTCB0byBwZXJmb3JtIHZhbGlkaXR5IGNoZWNrcywgYW5kIHN0b3JlIHRva2Vucy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDYWNoZU1hbmFnZXIgaW1wbGVtZW50cyBJQ2FjaGVNYW5hZ2VyIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHRvIHNldCBpdGVtIGluIGNhY2hlLlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBvYmplY3QsIHR5cGU/OiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gd2hpY2ggcmV0cmlldmVzIGl0ZW0gZnJvbSBjYWNoZS5cclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZ2V0SXRlbShrZXk6IHN0cmluZywgdHlwZT86IHN0cmluZyk6IHN0cmluZyB8IG9iamVjdDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHRvIHJlbW92ZSBhbiBpdGVtIGZyb20gY2FjaGUgZ2l2ZW4gaXRzIGtleS5cclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgcmVtb3ZlSXRlbShrZXk6IHN0cmluZywgdHlwZT86IHN0cmluZyk6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB3aGljaCByZXR1cm5zIGJvb2xlYW4gd2hldGhlciBjYWNoZSBjb250YWlucyBhIHNwZWNpZmljIGtleS5cclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgY29udGFpbnNLZXkoa2V5OiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcpOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gd2hpY2ggcmV0cmlldmVzIGFsbCBjdXJyZW50IGtleXMgZnJvbSB0aGUgY2FjaGUuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGdldEtleXMoKTogc3RyaW5nW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB3aGljaCBjbGVhcnMgY2FjaGUuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGNsZWFyKCk6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGFsbCBhY2NvdW50cyBpbiBjYWNoZVxyXG4gICAgICovXHJcbiAgICBnZXRBbGxBY2NvdW50cygpOiBBY2NvdW50SW5mb1tdIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50QWNjb3VudHM6IEFjY291bnRDYWNoZSA9IHRoaXMuZ2V0QWNjb3VudHNGaWx0ZXJlZEJ5KCk7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudFZhbHVlczogQWNjb3VudEVudGl0eVtdID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50QWNjb3VudHMpO1xyXG4gICAgICAgIGNvbnN0IG51bUFjY291bnRzID0gYWNjb3VudFZhbHVlcy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKG51bUFjY291bnRzIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBhbGxBY2NvdW50cyA9IGFjY291bnRWYWx1ZXMubWFwPEFjY291bnRJbmZvPigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBhY2NvdW50T2JqOiBBY2NvdW50RW50aXR5ID0gbmV3IEFjY291bnRFbnRpdHkoKTtcclxuICAgICAgICAgICAgICAgIGFjY291bnRPYmogPSBDYWNoZU1hbmFnZXIudG9PYmplY3QoYWNjb3VudE9iaiwgdmFsdWUpIGFzIEFjY291bnRFbnRpdHk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjb3VudE9iai5nZXRBY2NvdW50SW5mbygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGFsbEFjY291bnRzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNhdmVzIGEgY2FjaGUgcmVjb3JkXHJcbiAgICAgKiBAcGFyYW0gY2FjaGVSZWNvcmRcclxuICAgICAqL1xyXG4gICAgc2F2ZUNhY2hlUmVjb3JkKGNhY2hlUmVjb3JkOiBDYWNoZVJlY29yZCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghY2FjaGVSZWNvcmQpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU51bGxPclVuZGVmaW5lZENhY2hlUmVjb3JkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISFjYWNoZVJlY29yZC5hY2NvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZUFjY291bnQoY2FjaGVSZWNvcmQuYWNjb3VudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISFjYWNoZVJlY29yZC5pZFRva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZUNyZWRlbnRpYWwoY2FjaGVSZWNvcmQuaWRUb2tlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISFjYWNoZVJlY29yZC5hY2Nlc3NUb2tlbikge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVBY2Nlc3NUb2tlbihjYWNoZVJlY29yZC5hY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISFjYWNoZVJlY29yZC5yZWZyZXNoVG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5zYXZlQ3JlZGVudGlhbChjYWNoZVJlY29yZC5yZWZyZXNoVG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNhdmVzIGFjY291bnQgaW50byBjYWNoZVxyXG4gICAgICogQHBhcmFtIGFjY291bnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzYXZlQWNjb3VudChhY2NvdW50OiBBY2NvdW50RW50aXR5KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gYWNjb3VudC5nZW5lcmF0ZUFjY291bnRLZXkoKTtcclxuICAgICAgICB0aGlzLnNldEl0ZW0oXHJcbiAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgYWNjb3VudCxcclxuICAgICAgICAgICAgQ2FjaGVTY2hlbWFUeXBlLkFDQ09VTlRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2F2ZXMgY3JlZGVudGlhbCAtIGFjY2Vzc1Rva2VuLCBpZFRva2VuIG9yIHJlZnJlc2hUb2tlbiBpbnRvIGNhY2hlXHJcbiAgICAgKiBAcGFyYW0gY3JlZGVudGlhbFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNhdmVDcmVkZW50aWFsKGNyZWRlbnRpYWw6IENyZWRlbnRpYWxFbnRpdHkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBjcmVkZW50aWFsLmdlbmVyYXRlQ3JlZGVudGlhbEtleSgpO1xyXG4gICAgICAgIHRoaXMuc2V0SXRlbShcclxuICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsLFxyXG4gICAgICAgICAgICBDYWNoZVNjaGVtYVR5cGUuQ1JFREVOVElBTFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzYXZlcyBhY2Nlc3MgdG9rZW4gY3JlZGVudGlhbFxyXG4gICAgICogQHBhcmFtIGNyZWRlbnRpYWxcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzYXZlQWNjZXNzVG9rZW4oY3JlZGVudGlhbDogQWNjZXNzVG9rZW5FbnRpdHkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VG9rZW5DYWNoZSA9IHRoaXMuZ2V0Q3JlZGVudGlhbHNGaWx0ZXJlZEJ5KHtcclxuICAgICAgICAgICAgY2xpZW50SWQ6IGNyZWRlbnRpYWwuY2xpZW50SWQsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxUeXBlOiBDcmVkZW50aWFsVHlwZS5BQ0NFU1NfVE9LRU4sXHJcbiAgICAgICAgICAgIGVudmlyb25tZW50OiBjcmVkZW50aWFsLmVudmlyb25tZW50LFxyXG4gICAgICAgICAgICBob21lQWNjb3VudElkOiBjcmVkZW50aWFsLmhvbWVBY2NvdW50SWQsXHJcbiAgICAgICAgICAgIHJlYWxtOiBjcmVkZW50aWFsLnJlYWxtXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNjb3BlcyA9IFNjb3BlU2V0LmZyb21TdHJpbmcoY3JlZGVudGlhbC50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRBY2Nlc3NUb2tlbnM6IEFjY2Vzc1Rva2VuRW50aXR5W10gPSBPYmplY3QudmFsdWVzKGN1cnJlbnRUb2tlbkNhY2hlLmFjY2Vzc1Rva2VucykgYXMgQWNjZXNzVG9rZW5FbnRpdHlbXTtcclxuICAgICAgICBpZiAoY3VycmVudEFjY2Vzc1Rva2Vucykge1xyXG4gICAgICAgICAgICBjdXJyZW50QWNjZXNzVG9rZW5zLmZvckVhY2goKHRva2VuRW50aXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlblNjb3BlU2V0ID0gU2NvcGVTZXQuZnJvbVN0cmluZyh0b2tlbkVudGl0eS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuU2NvcGVTZXQuaW50ZXJzZWN0aW5nU2NvcGVTZXRzKGN1cnJlbnRTY29wZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDcmVkZW50aWFsKHRva2VuRW50aXR5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2F2ZUNyZWRlbnRpYWwoY3JlZGVudGlhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlbiBhY2NvdW50IGtleSByZXRyaWV2ZSBhbiBhY2NvdW50XHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIGdldEFjY291bnQoa2V5OiBzdHJpbmcpOiBBY2NvdW50RW50aXR5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gdGhpcy5nZXRJdGVtKGtleSwgQ2FjaGVTY2hlbWFUeXBlLkFDQ09VTlQpIGFzIEFjY291bnRFbnRpdHk7XHJcbiAgICAgICAgcmV0dXJuIGFjY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXRyaWV2ZSBhIGNyZWRlbnRpYWwgLSBhY2Nlc3NUb2tlbiwgaWRUb2tlbiBvciByZWZyZXNoVG9rZW47IGdpdmVuIHRoZSBjYWNoZSBrZXlcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgZ2V0Q3JlZGVudGlhbChrZXk6IHN0cmluZyk6IENyZWRlbnRpYWxFbnRpdHkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW0oa2V5LCBDYWNoZVNjaGVtYVR5cGUuQ1JFREVOVElBTCkgYXMgQ3JlZGVudGlhbEVudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHJpZXZlIGFjY291bnRzIG1hdGNoaW5nIGFsbCBwcm92aWRlZCBmaWx0ZXJzOyBpZiBubyBmaWx0ZXIgaXMgc2V0LCBnZXQgYWxsIGFjY291bnRzXHJcbiAgICAgKiBub3QgY2hlY2tpbmcgZm9yIGNhc2luZyBhcyBrZXlzIGFyZSBhbGwgZ2VuZXJhdGVkIGluIGxvd2VyIGNhc2UsIHJlbWVtYmVyIHRvIGNvbnZlcnQgdG8gbG93ZXIgY2FzZSBpZiBvYmplY3QgcHJvcGVydGllcyBhcmUgY29tcGFyZWRcclxuICAgICAqIEBwYXJhbSBob21lQWNjb3VudElkXHJcbiAgICAgKiBAcGFyYW0gZW52aXJvbm1lbnRcclxuICAgICAqIEBwYXJhbSByZWFsbVxyXG4gICAgICovXHJcbiAgICBnZXRBY2NvdW50c0ZpbHRlcmVkQnkoYWNjb3VudEZpbHRlcj86IEFjY291bnRGaWx0ZXIpOiBBY2NvdW50Q2FjaGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEFjY291bnRzRmlsdGVyZWRCeUludGVybmFsKFxyXG4gICAgICAgICAgICBhY2NvdW50RmlsdGVyID8gYWNjb3VudEZpbHRlci5ob21lQWNjb3VudElkIDogXCJcIixcclxuICAgICAgICAgICAgYWNjb3VudEZpbHRlciA/IGFjY291bnRGaWx0ZXIuZW52aXJvbm1lbnQgOiBcIlwiLFxyXG4gICAgICAgICAgICBhY2NvdW50RmlsdGVyID8gYWNjb3VudEZpbHRlci5yZWFsbSA6IFwiXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0cmlldmUgYWNjb3VudHMgbWF0Y2hpbmcgYWxsIHByb3ZpZGVkIGZpbHRlcnM7IGlmIG5vIGZpbHRlciBpcyBzZXQsIGdldCBhbGwgYWNjb3VudHNcclxuICAgICAqIG5vdCBjaGVja2luZyBmb3IgY2FzaW5nIGFzIGtleXMgYXJlIGFsbCBnZW5lcmF0ZWQgaW4gbG93ZXIgY2FzZSwgcmVtZW1iZXIgdG8gY29udmVydCB0byBsb3dlciBjYXNlIGlmIG9iamVjdCBwcm9wZXJ0aWVzIGFyZSBjb21wYXJlZFxyXG4gICAgICogQHBhcmFtIGhvbWVBY2NvdW50SWRcclxuICAgICAqIEBwYXJhbSBlbnZpcm9ubWVudFxyXG4gICAgICogQHBhcmFtIHJlYWxtXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0QWNjb3VudHNGaWx0ZXJlZEJ5SW50ZXJuYWwoXHJcbiAgICAgICAgaG9tZUFjY291bnRJZD86IHN0cmluZyxcclxuICAgICAgICBlbnZpcm9ubWVudD86IHN0cmluZyxcclxuICAgICAgICByZWFsbT86IHN0cmluZ1xyXG4gICAgKTogQWNjb3VudENhY2hlIHtcclxuICAgICAgICBjb25zdCBhbGxDYWNoZUtleXMgPSB0aGlzLmdldEtleXMoKTtcclxuICAgICAgICBjb25zdCBtYXRjaGluZ0FjY291bnRzOiBBY2NvdW50Q2FjaGUgPSB7fTtcclxuICAgICAgICBsZXQgZW50aXR5OiBBY2NvdW50RW50aXR5O1xyXG5cclxuICAgICAgICBhbGxDYWNoZUtleXMuZm9yRWFjaCgoY2FjaGVLZXkpID0+IHtcclxuICAgICAgICAgICAgbGV0IG1hdGNoZXM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBkb24ndCBwYXJzZSBhbnkgbm9uLWFjY291bnQgdHlwZSBjYWNoZSBlbnRpdGllc1xyXG4gICAgICAgICAgICBpZiAoQ3JlZGVudGlhbEVudGl0eS5nZXRDcmVkZW50aWFsVHlwZShjYWNoZUtleSkgIT09IENvbnN0YW50cy5OT1RfREVGSU5FRCB8fCB0aGlzLmlzQXBwTWV0YWRhdGEoY2FjaGVLZXkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEF0dGVtcHQgcmV0cmlldmFsXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBlbnRpdHkgPSB0aGlzLmdldEl0ZW0oY2FjaGVLZXksIENhY2hlU2NoZW1hVHlwZS5BQ0NPVU5UKSBhcyBBY2NvdW50RW50aXR5O1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShob21lQWNjb3VudElkKSkge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlcyA9IHRoaXMubWF0Y2hIb21lQWNjb3VudElkKGVudGl0eSwgaG9tZUFjY291bnRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShlbnZpcm9ubWVudCkpIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBtYXRjaGVzICYmIHRoaXMubWF0Y2hFbnZpcm9ubWVudChlbnRpdHksIGVudmlyb25tZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KHJlYWxtKSkge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoZXMgJiYgdGhpcy5tYXRjaFJlYWxtKGVudGl0eSwgcmVhbG0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hpbmdBY2NvdW50c1tjYWNoZUtleV0gPSBlbnRpdHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hdGNoaW5nQWNjb3VudHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXRyaWV2ZSBjcmVkZW50YWlscyBtYXRjaGluZyBhbGwgcHJvdmlkZWQgZmlsdGVyczsgaWYgbm8gZmlsdGVyIGlzIHNldCwgZ2V0IGFsbCBjcmVkZW50aWFsc1xyXG4gICAgICogQHBhcmFtIGhvbWVBY2NvdW50SWRcclxuICAgICAqIEBwYXJhbSBlbnZpcm9ubWVudFxyXG4gICAgICogQHBhcmFtIGNyZWRlbnRpYWxUeXBlXHJcbiAgICAgKiBAcGFyYW0gY2xpZW50SWRcclxuICAgICAqIEBwYXJhbSByZWFsbVxyXG4gICAgICogQHBhcmFtIHRhcmdldFxyXG4gICAgICovXHJcbiAgICBnZXRDcmVkZW50aWFsc0ZpbHRlcmVkQnkoZmlsdGVyOiBDcmVkZW50aWFsRmlsdGVyKTogQ3JlZGVudGlhbENhY2hlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDcmVkZW50aWFsc0ZpbHRlcmVkQnlJbnRlcm5hbChcclxuICAgICAgICAgICAgZmlsdGVyLmhvbWVBY2NvdW50SWQsXHJcbiAgICAgICAgICAgIGZpbHRlci5lbnZpcm9ubWVudCxcclxuICAgICAgICAgICAgZmlsdGVyLmNyZWRlbnRpYWxUeXBlLFxyXG4gICAgICAgICAgICBmaWx0ZXIuY2xpZW50SWQsXHJcbiAgICAgICAgICAgIGZpbHRlci5yZWFsbSxcclxuICAgICAgICAgICAgZmlsdGVyLnRhcmdldFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdXBwb3J0IGZ1bmN0aW9uIHRvIGhlbHAgbWF0Y2ggY3JlZGVudGlhbHNcclxuICAgICAqIEBwYXJhbSBob21lQWNjb3VudElkXHJcbiAgICAgKiBAcGFyYW0gZW52aXJvbm1lbnRcclxuICAgICAqIEBwYXJhbSBjcmVkZW50aWFsVHlwZVxyXG4gICAgICogQHBhcmFtIGNsaWVudElkXHJcbiAgICAgKiBAcGFyYW0gcmVhbG1cclxuICAgICAqIEBwYXJhbSB0YXJnZXRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRDcmVkZW50aWFsc0ZpbHRlcmVkQnlJbnRlcm5hbChcclxuICAgICAgICBob21lQWNjb3VudElkPzogc3RyaW5nLFxyXG4gICAgICAgIGVudmlyb25tZW50Pzogc3RyaW5nLFxyXG4gICAgICAgIGNyZWRlbnRpYWxUeXBlPzogc3RyaW5nLFxyXG4gICAgICAgIGNsaWVudElkPzogc3RyaW5nLFxyXG4gICAgICAgIHJlYWxtPzogc3RyaW5nLFxyXG4gICAgICAgIHRhcmdldD86IHN0cmluZ1xyXG4gICAgKTogQ3JlZGVudGlhbENhY2hlIHtcclxuICAgICAgICBjb25zdCBhbGxDYWNoZUtleXMgPSB0aGlzLmdldEtleXMoKTtcclxuICAgICAgICBjb25zdCBtYXRjaGluZ0NyZWRlbnRpYWxzOiBDcmVkZW50aWFsQ2FjaGUgPSB7XHJcbiAgICAgICAgICAgIGlkVG9rZW5zOiB7fSxcclxuICAgICAgICAgICAgYWNjZXNzVG9rZW5zOiB7fSxcclxuICAgICAgICAgICAgcmVmcmVzaFRva2Vuczoge31cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhbGxDYWNoZUtleXMuZm9yRWFjaCgoY2FjaGVLZXkpID0+IHtcclxuICAgICAgICAgICAgbGV0IG1hdGNoZXM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgZW50aXR5OiBDcmVkZW50aWFsRW50aXR5O1xyXG4gICAgICAgICAgICAvLyBkb24ndCBwYXJzZSBhbnkgbm9uLWNyZWRlbnRpYWwgdHlwZSBjYWNoZSBlbnRpdGllc1xyXG4gICAgICAgICAgICBjb25zdCBjcmVkVHlwZSA9IENyZWRlbnRpYWxFbnRpdHkuZ2V0Q3JlZGVudGlhbFR5cGUoY2FjaGVLZXkpO1xyXG4gICAgICAgICAgICBpZiAoY3JlZFR5cGUgPT09IENvbnN0YW50cy5OT1RfREVGSU5FRCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBdHRlbXB0IHJldHJpZXZhbFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZW50aXR5ID0gdGhpcy5nZXRJdGVtKGNhY2hlS2V5LCBDYWNoZVNjaGVtYVR5cGUuQ1JFREVOVElBTCkgYXMgQ3JlZGVudGlhbEVudGl0eTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkoaG9tZUFjY291bnRJZCkpIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLm1hdGNoSG9tZUFjY291bnRJZChlbnRpdHksIGhvbWVBY2NvdW50SWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkoZW52aXJvbm1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gbWF0Y2hlcyAmJiB0aGlzLm1hdGNoRW52aXJvbm1lbnQoZW50aXR5LCBlbnZpcm9ubWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShyZWFsbSkpIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBtYXRjaGVzICYmIHRoaXMubWF0Y2hSZWFsbShlbnRpdHksIHJlYWxtKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KGNyZWRlbnRpYWxUeXBlKSkge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoZXMgJiYgdGhpcy5tYXRjaENyZWRlbnRpYWxUeXBlKGVudGl0eSwgY3JlZGVudGlhbFR5cGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkoY2xpZW50SWQpKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gbWF0Y2hlcyAmJiB0aGlzLm1hdGNoQ2xpZW50SWQoZW50aXR5LCBjbGllbnRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlkVG9rZW5zIGRvIG5vdCBoYXZlIFwidGFyZ2V0XCIsIHRhcmdldCBzcGVjaWZpYyByZWZyZXNoVG9rZW5zIGRvIGV4aXN0IGZvciBzb21lIHR5cGVzIG9mIGF1dGhlbnRpY2F0aW9uXHJcbiAgICAgICAgICAgIC8vIFRPRE86IEFkZCBjYXNlIGZvciB0YXJnZXQgc3BlY2lmaWMgcmVmcmVzaCB0b2tlbnNcclxuICAgICAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KHRhcmdldCkgJiYgY3JlZFR5cGUgPT09IENyZWRlbnRpYWxUeXBlLkFDQ0VTU19UT0tFTikge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoZXMgJiYgdGhpcy5tYXRjaFRhcmdldChlbnRpdHksIHRhcmdldCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNyZWRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDcmVkZW50aWFsVHlwZS5JRF9UT0tFTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hpbmdDcmVkZW50aWFscy5pZFRva2Vuc1tjYWNoZUtleV0gPSBlbnRpdHkgYXMgSWRUb2tlbkVudGl0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDcmVkZW50aWFsVHlwZS5BQ0NFU1NfVE9LRU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nQ3JlZGVudGlhbHMuYWNjZXNzVG9rZW5zW2NhY2hlS2V5XSA9IGVudGl0eSBhcyBBY2Nlc3NUb2tlbkVudGl0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDcmVkZW50aWFsVHlwZS5SRUZSRVNIX1RPS0VOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGluZ0NyZWRlbnRpYWxzLnJlZnJlc2hUb2tlbnNbY2FjaGVLZXldID0gZW50aXR5IGFzIFJlZnJlc2hUb2tlbkVudGl0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hdGNoaW5nQ3JlZGVudGlhbHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGEgYm9vbGVhbiBpZiB0aGUgZ2l2ZW4gYWNjb3VudCBpcyByZW1vdmVkXHJcbiAgICAgKiBAcGFyYW0gYWNjb3VudFxyXG4gICAgICovXHJcbiAgICByZW1vdmVBY2NvdW50KGFjY291bnRLZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSB0aGlzLmdldEFjY291bnQoYWNjb3VudEtleSkgYXMgQWNjb3VudEVudGl0eTtcclxuICAgICAgICBpZiAoIWFjY291bnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU5vQWNjb3VudEZvdW5kRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnJlbW92ZUFjY291bnRDb250ZXh0KGFjY291bnQpICYmIHRoaXMucmVtb3ZlSXRlbShhY2NvdW50S2V5LCBDYWNoZVNjaGVtYVR5cGUuQUNDT1VOVCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJucyBhIGJvb2xlYW4gaWYgdGhlIGdpdmVuIGFjY291bnQgaXMgcmVtb3ZlZFxyXG4gICAgICogQHBhcmFtIGFjY291bnRcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlQWNjb3VudENvbnRleHQoYWNjb3VudDogQWNjb3VudEVudGl0eSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGFsbENhY2hlS2V5cyA9IHRoaXMuZ2V0S2V5cygpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRJZCA9IGFjY291bnQuZ2VuZXJhdGVBY2NvdW50SWQoKTtcclxuXHJcbiAgICAgICAgYWxsQ2FjaGVLZXlzLmZvckVhY2goKGNhY2hlS2V5KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGRvbid0IHBhcnNlIGFueSBub24tY3JlZGVudGlhbCB0eXBlIGNhY2hlIGVudGl0aWVzXHJcbiAgICAgICAgICAgIGlmIChDcmVkZW50aWFsRW50aXR5LmdldENyZWRlbnRpYWxUeXBlKGNhY2hlS2V5KSA9PT0gQ29uc3RhbnRzLk5PVF9ERUZJTkVEKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlRW50aXR5OiBDcmVkZW50aWFsRW50aXR5ID0gdGhpcy5nZXRJdGVtKGNhY2hlS2V5LCBDYWNoZVNjaGVtYVR5cGUuQ1JFREVOVElBTCkgYXMgQ3JlZGVudGlhbEVudGl0eTtcclxuXHJcbiAgICAgICAgICAgIGlmICghIWNhY2hlRW50aXR5ICYmIGFjY291bnRJZCA9PT0gY2FjaGVFbnRpdHkuZ2VuZXJhdGVBY2NvdW50SWQoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDcmVkZW50aWFsKGNhY2hlRW50aXR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgYSBib29sZWFuIGlmIHRoZSBnaXZlbiBjcmVkZW50aWFsIGlzIHJlbW92ZWRcclxuICAgICAqIEBwYXJhbSBjcmVkZW50aWFsXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUNyZWRlbnRpYWwoY3JlZGVudGlhbDogQ3JlZGVudGlhbEVudGl0eSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGNyZWRlbnRpYWwuZ2VuZXJhdGVDcmVkZW50aWFsS2V5KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlSXRlbShrZXksIENhY2hlU2NoZW1hVHlwZS5DUkVERU5USUFMKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBwYXJhbSBob21lQWNjb3VudElkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbWF0Y2hIb21lQWNjb3VudElkKFxyXG4gICAgICAgIGVudGl0eTogQWNjb3VudEVudGl0eSB8IENyZWRlbnRpYWxFbnRpdHksXHJcbiAgICAgICAgaG9tZUFjY291bnRJZDogc3RyaW5nXHJcbiAgICApOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gaG9tZUFjY291bnRJZCA9PT0gZW50aXR5LmhvbWVBY2NvdW50SWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gZW52aXJvbm1lbnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtYXRjaEVudmlyb25tZW50KFxyXG4gICAgICAgIGVudGl0eTogQWNjb3VudEVudGl0eSB8IENyZWRlbnRpYWxFbnRpdHksXHJcbiAgICAgICAgZW52aXJvbm1lbnQ6IHN0cmluZ1xyXG4gICAgKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgY2xvdWRNZXRhZGF0YSA9IFRydXN0ZWRBdXRob3JpdHkuZ2V0Q2xvdWREaXNjb3ZlcnlNZXRhZGF0YShlbnZpcm9ubWVudCk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBjbG91ZE1ldGFkYXRhICYmXHJcbiAgICAgICAgICAgIGNsb3VkTWV0YWRhdGEuYWxpYXNlcy5pbmRleE9mKGVudGl0eS5lbnZpcm9ubWVudCkgPiAtMVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZW50aXR5XHJcbiAgICAgKiBAcGFyYW0gY3JlZGVudGlhbFR5cGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtYXRjaENyZWRlbnRpYWxUeXBlKGVudGl0eTogQ3JlZGVudGlhbEVudGl0eSwgY3JlZGVudGlhbFR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBjcmVkZW50aWFsVHlwZS50b0xvd2VyQ2FzZSgpID09PSBlbnRpdHkuY3JlZGVudGlhbFR5cGUudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZW50aXR5XHJcbiAgICAgKiBAcGFyYW0gY2xpZW50SWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtYXRjaENsaWVudElkKGVudGl0eTogQ3JlZGVudGlhbEVudGl0eSwgY2xpZW50SWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBjbGllbnRJZCA9PT0gZW50aXR5LmNsaWVudElkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlbnRpdHlcclxuICAgICAqIEBwYXJhbSByZWFsbVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1hdGNoUmVhbG0oZW50aXR5OiBBY2NvdW50RW50aXR5IHwgQ3JlZGVudGlhbEVudGl0eSwgcmVhbG06IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiByZWFsbSA9PT0gZW50aXR5LnJlYWxtO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSB0YXJnZXQgc2NvcGVzIGFyZSBhIHN1YnNldCBvZiB0aGUgY3VycmVudCBlbnRpdHkncyBzY29wZXMsIGZhbHNlIG90aGVyd2lzZS5cclxuICAgICAqIEBwYXJhbSBlbnRpdHlcclxuICAgICAqIEBwYXJhbSB0YXJnZXRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtYXRjaFRhcmdldChlbnRpdHk6IENyZWRlbnRpYWxFbnRpdHksIHRhcmdldDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgZW50aXR5U2NvcGVTZXQ6IFNjb3BlU2V0ID0gU2NvcGVTZXQuZnJvbVN0cmluZyhlbnRpdHkudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCByZXF1ZXN0VGFyZ2V0U2NvcGVTZXQ6IFNjb3BlU2V0ID0gU2NvcGVTZXQuZnJvbVN0cmluZyh0YXJnZXQpO1xyXG4gICAgICAgIHJldHVybiBlbnRpdHlTY29wZVNldC5jb250YWluc1Njb3BlU2V0KHJlcXVlc3RUYXJnZXRTY29wZVNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGlmIGEgZ2l2ZW4gY2FjaGUgZW50aXR5IGlzIG9mIHRoZSB0eXBlIGFwcG1ldGFkYXRhXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaXNBcHBNZXRhZGF0YShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBrZXkuaW5kZXhPZihBUFBfTUVUQV9EQVRBKSAhPT0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgdG8gY29udmVydCBzZXJpYWxpemVkIGRhdGEgdG8gb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gb2JqXHJcbiAgICAgKiBAcGFyYW0ganNvblxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdG9PYmplY3Q8VD4ob2JqOiBULCBqc29uOiBvYmplY3QpOiBUIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5TmFtZSBpbiBqc29uKSB7XHJcbiAgICAgICAgICAgIG9ialtwcm9wZXJ0eU5hbWVdID0ganNvbltwcm9wZXJ0eU5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdFN0b3JhZ2VDbGFzcyBleHRlbmRzIENhY2hlTWFuYWdlciB7XHJcbiAgICBzZXRJdGVtKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG5vdEltcGxFcnIgPSBcIlN0b3JhZ2UgaW50ZXJmYWNlIC0gc2V0SXRlbSgpIGhhcyBub3QgYmVlbiBpbXBsZW1lbnRlZCBmb3IgdGhlIGNhY2hlU3RvcmFnZSBpbnRlcmZhY2UuXCI7XHJcbiAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihub3RJbXBsRXJyKTtcclxuICAgIH1cclxuICAgIGdldEl0ZW0oKTogc3RyaW5nIHwgb2JqZWN0IHtcclxuICAgICAgICBjb25zdCBub3RJbXBsRXJyID0gXCJTdG9yYWdlIGludGVyZmFjZSAtIGdldEl0ZW0oKSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQgZm9yIHRoZSBjYWNoZVN0b3JhZ2UgaW50ZXJmYWNlLlwiO1xyXG4gICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3Iobm90SW1wbEVycik7XHJcbiAgICB9XHJcbiAgICByZW1vdmVJdGVtKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IG5vdEltcGxFcnIgPSBcIlN0b3JhZ2UgaW50ZXJmYWNlIC0gcmVtb3ZlSXRlbSgpIGhhcyBub3QgYmVlbiBpbXBsZW1lbnRlZCBmb3IgdGhlIGNhY2hlU3RvcmFnZSBpbnRlcmZhY2UuXCI7XHJcbiAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihub3RJbXBsRXJyKTtcclxuICAgIH1cclxuICAgIGNvbnRhaW5zS2V5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IG5vdEltcGxFcnIgPSBcIlN0b3JhZ2UgaW50ZXJmYWNlIC0gY29udGFpbnNLZXkoKSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQgZm9yIHRoZSBjYWNoZVN0b3JhZ2UgaW50ZXJmYWNlLlwiO1xyXG4gICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3Iobm90SW1wbEVycik7XHJcbiAgICB9XHJcbiAgICBnZXRLZXlzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBjb25zdCBub3RJbXBsRXJyID0gXCJTdG9yYWdlIGludGVyZmFjZSAtIGdldEtleXMoKSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQgZm9yIHRoZSBjYWNoZVN0b3JhZ2UgaW50ZXJmYWNlLlwiO1xyXG4gICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3Iobm90SW1wbEVycik7XHJcbiAgICB9XHJcbiAgICBjbGVhcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBub3RJbXBsRXJyID0gXCJTdG9yYWdlIGludGVyZmFjZSAtIGNsZWFyKCkgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkIGZvciB0aGUgY2FjaGVTdG9yYWdlIGludGVyZmFjZS5cIjtcclxuICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKG5vdEltcGxFcnIpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSU5ldHdvcmtNb2R1bGUgfSBmcm9tIFwiLi4vbmV0d29yay9JTmV0d29ya01vZHVsZVwiO1xyXG5pbXBvcnQgeyBJQ3J5cHRvLCBQa2NlQ29kZXMgfSBmcm9tIFwiLi4vY3J5cHRvL0lDcnlwdG9cIjtcclxuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL0F1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBJTG9nZ2VyQ2FsbGJhY2ssIExvZ0xldmVsIH0gZnJvbSBcIi4uL2xvZ2dlci9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSBcIi4uLy4uL3BhY2thZ2UuanNvblwiO1xyXG5pbXBvcnQgeyBBdXRob3JpdHkgfSBmcm9tIFwiLi4vYXV0aG9yaXR5L0F1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBDYWNoZU1hbmFnZXIsIERlZmF1bHRTdG9yYWdlQ2xhc3MgfSBmcm9tIFwiLi4vY2FjaGUvQ2FjaGVNYW5hZ2VyXCI7XHJcblxyXG4vLyBUb2tlbiByZW5ld2FsIG9mZnNldCBkZWZhdWx0IGluIHNlY29uZHNcclxuY29uc3QgREVGQVVMVF9UT0tFTl9SRU5FV0FMX09GRlNFVF9TRUMgPSAzMDA7XHJcblxyXG4vKipcclxuICogVXNlIHRoZSBjb25maWd1cmF0aW9uIG9iamVjdCB0byBjb25maWd1cmUgTVNBTCBNb2R1bGVzIGFuZCBpbml0aWFsaXplIHRoZSBiYXNlIGludGVyZmFjZXMgZm9yIE1TQUwuXHJcbiAqXHJcbiAqIFRoaXMgb2JqZWN0IGFsbG93cyB5b3UgdG8gY29uZmlndXJlIGltcG9ydGFudCBlbGVtZW50cyBvZiBNU0FMIGZ1bmN0aW9uYWxpdHk6XHJcbiAqIC0gYXV0aE9wdGlvbnMgICAgICAgICAgICAgICAgLSBBdXRoZW50aWNhdGlvbiBmb3IgYXBwbGljYXRpb25cclxuICogLSBjcnlwdG9JbnRlcmZhY2UgICAgICAgICAgICAtIEltcGxlbWVudGF0aW9uIG9mIGNyeXB0byBmdW5jdGlvbnNcclxuICogLSBsaWJyYXJ5SW5mbyAgICAgICAgICAgICAgICAtIExpYnJhcnktc3BlY2lmaWMgb3B0aW9uc1xyXG4gKiAtIGxvZ2dlck9wdGlvbnMgICAgICAgICAgICAgIC0gTG9nZ2luZyBmb3IgYXBwbGljYXRpb25cclxuICogLSBuZXR3b3JrSW50ZXJmYWNlICAgICAgICAgICAtIE5ldHdvcmsgaW1wbGVtZW50YXRpb25cclxuICogLSBzdG9yYWdlSW50ZXJmYWNlICAgICAgICAgICAtIFN0b3JhZ2UgaW1wbGVtZW50YXRpb25cclxuICogLSBzeXN0ZW1PcHRpb25zICAgICAgICAgICAgICAtIFN0b3JhZ2Ugb3B0aW9uc1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ2xpZW50Q29uZmlndXJhdGlvbiA9IHtcclxuICAgIGF1dGhPcHRpb25zOiBBdXRoT3B0aW9ucyxcclxuICAgIHN5c3RlbU9wdGlvbnM/OiBTeXN0ZW1PcHRpb25zLFxyXG4gICAgbG9nZ2VyT3B0aW9ucz86IExvZ2dlck9wdGlvbnMsXHJcbiAgICBzdG9yYWdlSW50ZXJmYWNlPzogQ2FjaGVNYW5hZ2VyLFxyXG4gICAgbmV0d29ya0ludGVyZmFjZT86IElOZXR3b3JrTW9kdWxlLFxyXG4gICAgY3J5cHRvSW50ZXJmYWNlPzogSUNyeXB0byxcclxuICAgIGxpYnJhcnlJbmZvPzogTGlicmFyeUluZm9cclxufTtcclxuXHJcbi8qKlxyXG4gKiBVc2UgdGhpcyB0byBjb25maWd1cmUgdGhlIGF1dGggb3B0aW9ucyBpbiB0aGUgQ29uZmlndXJhdGlvbiBvYmplY3RcclxuICpcclxuICogLSBjbGllbnRJZCAgICAgICAgICAgICAgICAgICAgLSBDbGllbnQgSUQgb2YgeW91ciBhcHAgcmVnaXN0ZXJlZCB3aXRoIG91ciBBcHBsaWNhdGlvbiByZWdpc3RyYXRpb24gcG9ydGFsIDogaHR0cHM6Ly9wb3J0YWwuYXp1cmUuY29tLyNibGFkZS9NaWNyb3NvZnRfQUFEX0lBTS9BY3RpdmVEaXJlY3RvcnlNZW51QmxhZGUvUmVnaXN0ZXJlZEFwcHNQcmV2aWV3IGluIE1pY3Jvc29mdCBJZGVudGl0eSBQbGF0Zm9ybVxyXG4gKiAtIGF1dGhvcml0eSAgICAgICAgICAgICAgICAgICAtIFlvdSBjYW4gY29uZmlndXJlIGEgc3BlY2lmaWMgYXV0aG9yaXR5LCBkZWZhdWx0cyB0byBcIiBcIiBvciBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb25cIlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQXV0aE9wdGlvbnMgPSB7XHJcbiAgICBjbGllbnRJZDogc3RyaW5nO1xyXG4gICAgYXV0aG9yaXR5PzogQXV0aG9yaXR5O1xyXG4gICAga25vd25BdXRob3JpdGllcz86IEFycmF5PHN0cmluZz47XHJcbiAgICBjbG91ZERpc2NvdmVyeU1ldGFkYXRhPzogc3RyaW5nO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFVzZSB0aGlzIHRvIGNvbmZpZ3VyZSB0aGUgdGVsZW1ldHJ5IG9wdGlvbnMgaW4gdGhlIENvbmZpZ3VyYXRpb24gb2JqZWN0XHJcbiAqXHJcbiAqIC0gYXBwbGljYXRpb25OYW1lICAgICAgICAgICAgICAtIE5hbWUgb2YgdGhlIGNvbnN1bWluZyBhcHBzIGFwcGxpY2F0aW9uXHJcbiAqIC0gYXBwbGljYXRpb25WZXJzaW9uICAgICAgICAgICAtIFZlcnNpb24gb2YgdGhlIGNvbnN1bWluZyBhcHBsaWNhdGlvblxyXG4gKiAtIHRlbGVtZXRyeUVtaXR0ZXIgICAgICAgICAgICAgLSBGdW5jdGlvbiB3aGVyZSB0ZWxlbWV0cnkgZXZlbnRzIGFyZSBmbHVzaGVkIHRvXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBUZWxlbWV0cnlPcHRpb25zID0ge1xyXG4gICAgYXBwbGljYXRpb25OYW1lOiBzdHJpbmc7XHJcbiAgICBhcHBsaWNhdGlvblZlcnNpb246IHN0cmluZztcclxuICAgIC8vIFRPRE8sIGFkZCBvbmx5QWRkRmFpbHVyZVRlbGVtZXRyeSBvcHRpb25cclxufTtcclxuXHJcbi8qKlxyXG4gKiBVc2UgdGhpcyB0byBjb25maWd1cmUgdG9rZW4gcmVuZXdhbCBhbmQgdGVsZW1ldHJ5IGluZm8gaW4gdGhlIENvbmZpZ3VyYXRpb24gb2JqZWN0XHJcbiAqXHJcbiAqIC0gdG9rZW5SZW5ld2FsT2Zmc2V0U2Vjb25kcyAgICAtIFNldHMgdGhlIHdpbmRvdyBvZiBvZmZzZXQgbmVlZGVkIHRvIHJlbmV3IHRoZSB0b2tlbiBiZWZvcmUgZXhwaXJ5XHJcbiAqIC0gdGVsZW1ldHJ5ICAgICAgICAgICAgICAgICAgICAtIFRlbGVtZXRyeSBvcHRpb25zIGZvciBsaWJyYXJ5IG5ldHdvcmsgcmVxdWVzdHNcclxuICovXHJcbmV4cG9ydCB0eXBlIFN5c3RlbU9wdGlvbnMgPSB7XHJcbiAgICB0b2tlblJlbmV3YWxPZmZzZXRTZWNvbmRzPzogbnVtYmVyO1xyXG4gICAgdGVsZW1ldHJ5PzogVGVsZW1ldHJ5T3B0aW9ucztcclxufTtcclxuXHJcbi8qKlxyXG4gKiAgVXNlIHRoaXMgdG8gY29uZmlndXJlIHRoZSBsb2dnaW5nIHRoYXQgTVNBTCBkb2VzLCBieSBjb25maWd1cmluZyBsb2dnZXIgb3B0aW9ucyBpbiB0aGUgQ29uZmlndXJhdGlvbiBvYmplY3RcclxuICogXHJcbiAqIC0gbG9nZ2VyQ2FsbGJhY2sgICAgICAgICAgICAgICAgLSBDYWxsYmFjayBmb3IgbG9nZ2VyXHJcbiAqIC0gcGlpTG9nZ2luZ0VuYWJsZWQgICAgICAgICAgICAgLSBTZXRzIHdoZXRoZXIgcGlpIGxvZ2dpbmcgaXMgZW5hYmxlZFxyXG4gKiAtIGxvZ0xldmVsICAgICAgICAgICAgICAgICAgICAgIC0gU2V0cyB0aGUgbGV2ZWwgYXQgd2hpY2ggbG9nZ2luZyBoYXBwZW5zXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBMb2dnZXJPcHRpb25zID0ge1xyXG4gICAgbG9nZ2VyQ2FsbGJhY2s/OiBJTG9nZ2VyQ2FsbGJhY2ssXHJcbiAgICBwaWlMb2dnaW5nRW5hYmxlZD86IGJvb2xlYW4sXHJcbiAgICBsb2dMZXZlbD86IExvZ0xldmVsXHJcbn07XHJcblxyXG4vKipcclxuICogVXNlIHRoaXMgdG8gY29uZmlndXJlIHRoZSBsaWJyYXJ5LXNwZWNpZmljIG9wdGlvbnNcclxuICovXHJcbmV4cG9ydCB0eXBlIExpYnJhcnlJbmZvID0ge1xyXG4gICAgc2t1OiBzdHJpbmcsXHJcbiAgICB2ZXJzaW9uOiBzdHJpbmcsXHJcbiAgICBjcHU6IHN0cmluZyxcclxuICAgIG9zOiBzdHJpbmdcclxufTtcclxuXHJcbmNvbnN0IERFRkFVTFRfQVVUSF9PUFRJT05TOiBBdXRoT3B0aW9ucyA9IHtcclxuICAgIGNsaWVudElkOiBcIlwiLFxyXG4gICAgYXV0aG9yaXR5OiBudWxsLFxyXG4gICAga25vd25BdXRob3JpdGllczogW10sXHJcbiAgICBjbG91ZERpc2NvdmVyeU1ldGFkYXRhOiBcIlwiXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9TWVNURU1fT1BUSU9OUzogU3lzdGVtT3B0aW9ucyA9IHtcclxuICAgIHRva2VuUmVuZXdhbE9mZnNldFNlY29uZHM6IERFRkFVTFRfVE9LRU5fUkVORVdBTF9PRkZTRVRfU0VDLFxyXG4gICAgdGVsZW1ldHJ5OiBudWxsXHJcbn07XHJcblxyXG5jb25zdCBERUZBVUxUX0xPR0dFUl9JTVBMRU1FTlRBVElPTjogTG9nZ2VyT3B0aW9ucyA9IHtcclxuICAgIGxvZ2dlckNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgLy8gYWxsb3cgdXNlcnMgdG8gbm90IHNldCBsb2dnZXJDYWxsYmFja1xyXG4gICAgfSxcclxuICAgIHBpaUxvZ2dpbmdFbmFibGVkOiBmYWxzZSxcclxuICAgIGxvZ0xldmVsOiBMb2dMZXZlbC5JbmZvXHJcbn07XHJcblxyXG5jb25zdCBERUZBVUxUX05FVFdPUktfSU1QTEVNRU5UQVRJT046IElOZXR3b3JrTW9kdWxlID0ge1xyXG4gICAgYXN5bmMgc2VuZEdldFJlcXVlc3RBc3luYzxUPigpOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICBjb25zdCBub3RJbXBsRXJyID0gXCJOZXR3b3JrIGludGVyZmFjZSAtIHNlbmRHZXRSZXF1ZXN0QXN5bmMoKSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWRcIjtcclxuICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKG5vdEltcGxFcnIpO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIHNlbmRQb3N0UmVxdWVzdEFzeW5jPFQ+KCk6IFByb21pc2U8VD4ge1xyXG4gICAgICAgIGNvbnN0IG5vdEltcGxFcnIgPSBcIk5ldHdvcmsgaW50ZXJmYWNlIC0gc2VuZFBvc3RSZXF1ZXN0QXN5bmMoKSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWRcIjtcclxuICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKG5vdEltcGxFcnIpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgREVGQVVMVF9DUllQVE9fSU1QTEVNRU5UQVRJT046IElDcnlwdG8gPSB7XHJcbiAgICBjcmVhdGVOZXdHdWlkOiAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICBjb25zdCBub3RJbXBsRXJyID0gXCJDcnlwdG8gaW50ZXJmYWNlIC0gY3JlYXRlTmV3R3VpZCgpIGhhcyBub3QgYmVlbiBpbXBsZW1lbnRlZFwiO1xyXG4gICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3Iobm90SW1wbEVycik7XHJcbiAgICB9LFxyXG4gICAgYmFzZTY0RGVjb2RlOiAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICBjb25zdCBub3RJbXBsRXJyID0gXCJDcnlwdG8gaW50ZXJmYWNlIC0gYmFzZTY0RGVjb2RlKCkgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkXCI7XHJcbiAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihub3RJbXBsRXJyKTtcclxuICAgIH0sXHJcbiAgICBiYXNlNjRFbmNvZGU6ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5vdEltcGxFcnIgPSBcIkNyeXB0byBpbnRlcmZhY2UgLSBiYXNlNjRFbmNvZGUoKSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWRcIjtcclxuICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKG5vdEltcGxFcnIpO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGdlbmVyYXRlUGtjZUNvZGVzKCk6IFByb21pc2U8UGtjZUNvZGVzPiB7XHJcbiAgICAgICAgY29uc3Qgbm90SW1wbEVyciA9IFwiQ3J5cHRvIGludGVyZmFjZSAtIGdlbmVyYXRlUGtjZUNvZGVzKCkgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkXCI7XHJcbiAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihub3RJbXBsRXJyKTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IERFRkFVTFRfTElCUkFSWV9JTkZPOiBMaWJyYXJ5SW5mbyA9IHtcclxuICAgIHNrdTogQ29uc3RhbnRzLlNLVSxcclxuICAgIHZlcnNpb246IHZlcnNpb24sXHJcbiAgICBjcHU6IFwiXCIsXHJcbiAgICBvczogXCJcIlxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHRoYXQgc2V0cyB0aGUgZGVmYXVsdCBvcHRpb25zIHdoZW4gbm90IGV4cGxpY2l0bHkgY29uZmlndXJlZCBmcm9tIGFwcCBkZXZlbG9wZXJcclxuICpcclxuICogQHBhcmFtIENvbmZpZ3VyYXRpb25cclxuICpcclxuICogQHJldHVybnMgQ29uZmlndXJhdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ2xpZW50Q29uZmlndXJhdGlvbihcclxuICAgIHtcclxuICAgICAgICBhdXRoT3B0aW9uczogdXNlckF1dGhPcHRpb25zLFxyXG4gICAgICAgIHN5c3RlbU9wdGlvbnM6IHVzZXJTeXN0ZW1PcHRpb25zLFxyXG4gICAgICAgIGxvZ2dlck9wdGlvbnM6IHVzZXJMb2dnZXJPcHRpb24sXHJcbiAgICAgICAgc3RvcmFnZUludGVyZmFjZTogc3RvcmFnZUltcGxlbWVudGF0aW9uLFxyXG4gICAgICAgIG5ldHdvcmtJbnRlcmZhY2U6IG5ldHdvcmtJbXBsZW1lbnRhdGlvbixcclxuICAgICAgICBjcnlwdG9JbnRlcmZhY2U6IGNyeXB0b0ltcGxlbWVudGF0aW9uLFxyXG4gICAgICAgIGxpYnJhcnlJbmZvOiBsaWJyYXJ5SW5mb1xyXG4gICAgfSA6IENsaWVudENvbmZpZ3VyYXRpb24pOiBDbGllbnRDb25maWd1cmF0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aE9wdGlvbnM6IHsgLi4uREVGQVVMVF9BVVRIX09QVElPTlMsIC4uLnVzZXJBdXRoT3B0aW9ucyB9LFxyXG4gICAgICAgIHN5c3RlbU9wdGlvbnM6IHsgLi4uREVGQVVMVF9TWVNURU1fT1BUSU9OUywgLi4udXNlclN5c3RlbU9wdGlvbnMgfSxcclxuICAgICAgICBsb2dnZXJPcHRpb25zOiB7IC4uLkRFRkFVTFRfTE9HR0VSX0lNUExFTUVOVEFUSU9OLCAuLi51c2VyTG9nZ2VyT3B0aW9uIH0sXHJcbiAgICAgICAgc3RvcmFnZUludGVyZmFjZTogc3RvcmFnZUltcGxlbWVudGF0aW9uIHx8IG5ldyBEZWZhdWx0U3RvcmFnZUNsYXNzKCksXHJcbiAgICAgICAgbmV0d29ya0ludGVyZmFjZTogbmV0d29ya0ltcGxlbWVudGF0aW9uIHx8IERFRkFVTFRfTkVUV09SS19JTVBMRU1FTlRBVElPTixcclxuICAgICAgICBjcnlwdG9JbnRlcmZhY2U6IGNyeXB0b0ltcGxlbWVudGF0aW9uIHx8IERFRkFVTFRfQ1JZUFRPX0lNUExFTUVOVEFUSU9OLFxyXG4gICAgICAgIGxpYnJhcnlJbmZvOiB7IC4uLkRFRkFVTFRfTElCUkFSWV9JTkZPLCAuLi5saWJyYXJ5SW5mbyB9XHJcbiAgICB9O1xyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbiwgYnVpbGRDbGllbnRDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL2NvbmZpZy9DbGllbnRDb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IElOZXR3b3JrTW9kdWxlIH0gZnJvbSBcIi4uL25ldHdvcmsvSU5ldHdvcmtNb2R1bGVcIjtcclxuaW1wb3J0IHsgSUNyeXB0byB9IGZyb20gXCIuLi9jcnlwdG8vSUNyeXB0b1wiO1xyXG5pbXBvcnQgeyBBdXRob3JpdHkgfSBmcm9tIFwiLi4vYXV0aG9yaXR5L0F1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vbG9nZ2VyL0xvZ2dlclwiO1xyXG5pbXBvcnQgeyBBQURTZXJ2ZXJQYXJhbUtleXMsIENvbnN0YW50cywgSGVhZGVyTmFtZXMgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IE5ldHdvcmtSZXNwb25zZSB9IGZyb20gXCIuLi9uZXR3b3JrL05ldHdvcmtNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlIH0gZnJvbSBcIi4uL3NlcnZlci9TZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZVwiO1xyXG5pbXBvcnQgeyBUcnVzdGVkQXV0aG9yaXR5IH0gZnJvbSBcIi4uL2F1dGhvcml0eS9UcnVzdGVkQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IENhY2hlTWFuYWdlciB9IGZyb20gXCIuLi9jYWNoZS9DYWNoZU1hbmFnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBCYXNlIGFwcGxpY2F0aW9uIGNsYXNzIHdoaWNoIHdpbGwgY29uc3RydWN0IHJlcXVlc3RzIHRvIHNlbmQgdG8gYW5kIGhhbmRsZSByZXNwb25zZXMgZnJvbSB0aGUgTWljcm9zb2Z0IFNUUyB1c2luZyB0aGUgYXV0aG9yaXphdGlvbiBjb2RlIGZsb3cuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUNsaWVudCB7XHJcbiAgICAvLyBMb2dnZXIgb2JqZWN0XHJcbiAgICBwdWJsaWMgbG9nZ2VyOiBMb2dnZXI7XHJcblxyXG4gICAgLy8gQXBwbGljYXRpb24gY29uZmlnXHJcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBDbGllbnRDb25maWd1cmF0aW9uO1xyXG5cclxuICAgIC8vIENyeXB0byBJbnRlcmZhY2VcclxuICAgIHByb3RlY3RlZCBjcnlwdG9VdGlsczogSUNyeXB0bztcclxuXHJcbiAgICAvLyBTdG9yYWdlIEludGVyZmFjZVxyXG4gICAgcHJvdGVjdGVkIGNhY2hlTWFuYWdlcjogQ2FjaGVNYW5hZ2VyO1xyXG5cclxuICAgIC8vIE5ldHdvcmsgSW50ZXJmYWNlXHJcbiAgICBwcm90ZWN0ZWQgbmV0d29ya0NsaWVudDogSU5ldHdvcmtNb2R1bGU7XHJcblxyXG4gICAgLy8gRGVmYXVsdCBhdXRob3JpdHkgb2JqZWN0XHJcbiAgICBwcm90ZWN0ZWQgYXV0aG9yaXR5OiBBdXRob3JpdHk7XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb246IENsaWVudENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICAvLyBTZXQgdGhlIGNvbmZpZ3VyYXRpb25cclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGJ1aWxkQ2xpZW50Q29uZmlndXJhdGlvbihjb25maWd1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgbG9nZ2VyXHJcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyKHRoaXMuY29uZmlnLmxvZ2dlck9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplIGNyeXB0b1xyXG4gICAgICAgIHRoaXMuY3J5cHRvVXRpbHMgPSB0aGlzLmNvbmZpZy5jcnlwdG9JbnRlcmZhY2U7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgc3RvcmFnZSBpbnRlcmZhY2VcclxuICAgICAgICB0aGlzLmNhY2hlTWFuYWdlciA9IHRoaXMuY29uZmlnLnN0b3JhZ2VJbnRlcmZhY2U7XHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgbmV0d29yayBpbnRlcmZhY2VcclxuICAgICAgICB0aGlzLm5ldHdvcmtDbGllbnQgPSB0aGlzLmNvbmZpZy5uZXR3b3JrSW50ZXJmYWNlO1xyXG5cclxuICAgICAgICBUcnVzdGVkQXV0aG9yaXR5LnNldFRydXN0ZWRBdXRob3JpdGllc0Zyb21Db25maWcodGhpcy5jb25maWcuYXV0aE9wdGlvbnMua25vd25BdXRob3JpdGllcywgdGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xvdWREaXNjb3ZlcnlNZXRhZGF0YSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXV0aG9yaXR5ID0gdGhpcy5jb25maWcuYXV0aE9wdGlvbnMuYXV0aG9yaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBkZWZhdWx0IGhlYWRlcnMgZm9yIHJlcXVlc3RzIHRvIHRva2VuIGVuZHBvaW50XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjcmVhdGVEZWZhdWx0VG9rZW5SZXF1ZXN0SGVhZGVycygpOiBNYXA8c3RyaW5nLCBzdHJpbmc+IHtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5jcmVhdGVEZWZhdWx0TGlicmFyeUhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLnNldChIZWFkZXJOYW1lcy5DT05URU5UX1RZUEUsIENvbnN0YW50cy5VUkxfRk9STV9DT05URU5UX1RZUEUpO1xyXG5cclxuICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZExpYnJhcnlEYXRhXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjcmVhdGVEZWZhdWx0TGlicmFyeUhlYWRlcnMoKTogTWFwPHN0cmluZywgc3RyaW5nPiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XHJcblxyXG4gICAgICAgIC8vIGNsaWVudCBpbmZvIGhlYWRlcnNcclxuICAgICAgICBoZWFkZXJzLnNldChgJHtBQURTZXJ2ZXJQYXJhbUtleXMuWF9DTElFTlRfU0tVfWAsdGhpcy5jb25maWcubGlicmFyeUluZm8uc2t1KTtcclxuICAgICAgICBoZWFkZXJzLnNldChgJHtBQURTZXJ2ZXJQYXJhbUtleXMuWF9DTElFTlRfVkVSfWAsIHRoaXMuY29uZmlnLmxpYnJhcnlJbmZvLnZlcnNpb24pO1xyXG4gICAgICAgIGhlYWRlcnMuc2V0KGAke0FBRFNlcnZlclBhcmFtS2V5cy5YX0NMSUVOVF9PU31gLCB0aGlzLmNvbmZpZy5saWJyYXJ5SW5mby5vcyk7XHJcbiAgICAgICAgaGVhZGVycy5zZXQoYCR7QUFEU2VydmVyUGFyYW1LZXlzLlhfQ0xJRU5UX0NQVX1gLCB0aGlzLmNvbmZpZy5saWJyYXJ5SW5mby5jcHUpO1xyXG5cclxuICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEh0dHAgcG9zdCB0byB0b2tlbiBlbmRwb2ludFxyXG4gICAgICogQHBhcmFtIHRva2VuRW5kcG9pbnRcclxuICAgICAqIEBwYXJhbSBxdWVyeVN0cmluZ1xyXG4gICAgICogQHBhcmFtIGhlYWRlcnNcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGV4ZWN1dGVQb3N0VG9Ub2tlbkVuZHBvaW50KHRva2VuRW5kcG9pbnQ6IHN0cmluZywgcXVlcnlTdHJpbmc6IHN0cmluZywgaGVhZGVyczogTWFwPHN0cmluZywgc3RyaW5nPik6IFByb21pc2U8TmV0d29ya1Jlc3BvbnNlPFNlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmtDbGllbnQuc2VuZFBvc3RSZXF1ZXN0QXN5bmM8XHJcbiAgICAgICAgU2VydmVyQXV0aG9yaXphdGlvblRva2VuUmVzcG9uc2VcclxuICAgICAgICA+KHRva2VuRW5kcG9pbnQsIHtcclxuICAgICAgICAgICAgYm9keTogcXVlcnlTdHJpbmcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuLy4uL3V0aWxzL1N0cmluZ1V0aWxzXCI7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuLy4uL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xyXG5pbXBvcnQgeyBQcm9tcHRWYWx1ZSwgQ29kZUNoYWxsZW5nZU1ldGhvZFZhbHVlc30gZnJvbSBcIi4vLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFN0cmluZ0RpY3QgfSBmcm9tIFwiLi4vdXRpbHMvTXNhbFR5cGVzXCI7XHJcblxyXG4vKipcclxuICogVmFsaWRhdGVzIHNlcnZlciBjb25zdW1hYmxlIHBhcmFtcyBmcm9tIHRoZSBcInJlcXVlc3RcIiBvYmplY3RzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVxdWVzdFZhbGlkYXRvciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVdGlsaXR5IHRvIGNoZWNrIGlmIHRoZSBgcmVkaXJlY3RVcmlgIGluIHRoZSByZXF1ZXN0IGlzIGEgbm9uLW51bGwgdmFsdWVcclxuICAgICAqIEBwYXJhbSByZWRpcmVjdFVyaVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdmFsaWRhdGVSZWRpcmVjdFVyaShyZWRpcmVjdFVyaTogc3RyaW5nKSA6IHZvaWQge1xyXG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KHJlZGlyZWN0VXJpKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlUmVkaXJlY3RVcmlFbXB0eUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXRpbGl0eSB0byB2YWxpZGF0ZSBwcm9tcHQgc2VudCBieSB0aGUgdXNlciBpbiB0aGUgcmVxdWVzdFxyXG4gICAgICogQHBhcmFtIHByb21wdFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdmFsaWRhdGVQcm9tcHQocHJvbXB0OiBzdHJpbmcpIDogdm9pZCB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBQcm9tcHRWYWx1ZS5MT0dJTixcclxuICAgICAgICAgICAgICAgIFByb21wdFZhbHVlLlNFTEVDVF9BQ0NPVU5ULFxyXG4gICAgICAgICAgICAgICAgUHJvbXB0VmFsdWUuQ09OU0VOVCxcclxuICAgICAgICAgICAgICAgIFByb21wdFZhbHVlLk5PTkVcclxuICAgICAgICAgICAgXS5pbmRleE9mKHByb21wdCkgPCAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkUHJvbXB0RXJyb3IocHJvbXB0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVdGlsaXR5IHRvIHZhbGlkYXRlIGNvZGVfY2hhbGxlbmdlIGFuZCBjb2RlX2NoYWxsZW5nZV9tZXRob2RcclxuICAgICAqIEBwYXJhbSBjb2RlQ2hhbGxlbmdlXHJcbiAgICAgKiBAcGFyYW0gY29kZUNoYWxsZW5nZU1ldGhvZFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdmFsaWRhdGVDb2RlQ2hhbGxlbmdlUGFyYW1zKGNvZGVDaGFsbGVuZ2U6IHN0cmluZywgY29kZUNoYWxsZW5nZU1ldGhvZDogc3RyaW5nKSA6IHZvaWQgIHtcclxuICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShjb2RlQ2hhbGxlbmdlKSB8fCBTdHJpbmdVdGlscy5pc0VtcHR5KGNvZGVDaGFsbGVuZ2VNZXRob2QpKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkQ29kZUNoYWxsZW5nZVBhcmFtc0Vycm9yKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUNvZGVDaGFsbGVuZ2VNZXRob2QoY29kZUNoYWxsZW5nZU1ldGhvZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXRpbGl0eSB0byB2YWxpZGF0ZSBjb2RlX2NoYWxsZW5nZV9tZXRob2RcclxuICAgICAqIEBwYXJhbSBjb2RlQ2hhbGxlbmdlTWV0aG9kXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB2YWxpZGF0ZUNvZGVDaGFsbGVuZ2VNZXRob2QoY29kZUNoYWxsZW5nZU1ldGhvZDogc3RyaW5nKSA6IHZvaWQge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgQ29kZUNoYWxsZW5nZU1ldGhvZFZhbHVlcy5QTEFJTixcclxuICAgICAgICAgICAgICAgIENvZGVDaGFsbGVuZ2VNZXRob2RWYWx1ZXMuUzI1NlxyXG4gICAgICAgICAgICBdLmluZGV4T2YoY29kZUNoYWxsZW5nZU1ldGhvZCkgPCAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkQ29kZUNoYWxsZW5nZU1ldGhvZEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyB1bm5lY2Vzc2FyeSBvciBkdXBsaWNhdGUgcXVlcnkgcGFyYW1ldGVycyBmcm9tIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2FuaXRpemVFUVBhcmFtcyhlUVBhcmFtczogU3RyaW5nRGljdCwgcXVlcnlQYXJhbXM6IE1hcDxzdHJpbmcsIHN0cmluZz4pIDogU3RyaW5nRGljdCB7XHJcbiAgICAgICAgaWYgKCFlUVBhcmFtcykge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBhbnkgcXVlcnkgcGFyYW1ldGVycyBhbHJlYWR5IGluY2x1ZGVkIGluIFNTTyBwYXJhbXNcclxuICAgICAgICBxdWVyeVBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlUVBhcmFtc1trZXldKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgZVFQYXJhbXNba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZVFQYXJhbXM7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBBQURTZXJ2ZXJQYXJhbUtleXMsIENvbnN0YW50cywgUmVzcG9uc2VNb2RlLCBTU09UeXBlcywgQ2xpZW50SW5mbyB9IGZyb20gXCIuLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgU2NvcGVTZXQgfSBmcm9tIFwiLi4vcmVxdWVzdC9TY29wZVNldFwiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XHJcbmltcG9ydCB7IFN0cmluZ0RpY3QgfSBmcm9tIFwiLi4vdXRpbHMvTXNhbFR5cGVzXCI7XHJcbmltcG9ydCB7IFJlcXVlc3RWYWxpZGF0b3IgfSBmcm9tIFwiLi4vcmVxdWVzdC9SZXF1ZXN0VmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IExpYnJhcnlJbmZvIH0gZnJvbSBcIi4uL2NvbmZpZy9DbGllbnRDb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1N0cmluZ1V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXIge1xyXG5cclxuICAgIHByaXZhdGUgcGFyYW1ldGVyczogTWFwPHN0cmluZywgc3RyaW5nPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgcmVzcG9uc2VfdHlwZSA9IGNvZGVcclxuICAgICAqL1xyXG4gICAgYWRkUmVzcG9uc2VUeXBlQ29kZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KFxyXG4gICAgICAgICAgICBBQURTZXJ2ZXJQYXJhbUtleXMuUkVTUE9OU0VfVFlQRSwgZW5jb2RlVVJJQ29tcG9uZW50KENvbnN0YW50cy5DT0RFX1JFU1BPTlNFX1RZUEUpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCByZXNwb25zZV9tb2RlLiBkZWZhdWx0cyB0byBxdWVyeS5cclxuICAgICAqIEBwYXJhbSByZXNwb25zZU1vZGVcclxuICAgICAqL1xyXG4gICAgYWRkUmVzcG9uc2VNb2RlKHJlc3BvbnNlTW9kZT86IFJlc3BvbnNlTW9kZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoXHJcbiAgICAgICAgICAgIEFBRFNlcnZlclBhcmFtS2V5cy5SRVNQT05TRV9NT0RFLFxyXG4gICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoKHJlc3BvbnNlTW9kZSkgPyByZXNwb25zZU1vZGUgOiBSZXNwb25zZU1vZGUuUVVFUlkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBzY29wZXNcclxuICAgICAqIEBwYXJhbSBzY29wZVNldFxyXG4gICAgICovXHJcbiAgICBhZGRTY29wZXMoc2NvcGVTZXQ6IFNjb3BlU2V0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuU0NPUEUsIGVuY29kZVVSSUNvbXBvbmVudChzY29wZVNldC5wcmludFNjb3BlcygpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgY2xpZW50SWRcclxuICAgICAqIEBwYXJhbSBjbGllbnRJZFxyXG4gICAgICovXHJcbiAgICBhZGRDbGllbnRJZChjbGllbnRJZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuQ0xJRU5UX0lELCBlbmNvZGVVUklDb21wb25lbnQoY2xpZW50SWQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCByZWRpcmVjdF91cmlcclxuICAgICAqIEBwYXJhbSByZWRpcmVjdFVyaVxyXG4gICAgICovXHJcbiAgICBhZGRSZWRpcmVjdFVyaShyZWRpcmVjdFVyaTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgUmVxdWVzdFZhbGlkYXRvci52YWxpZGF0ZVJlZGlyZWN0VXJpKHJlZGlyZWN0VXJpKTtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KEFBRFNlcnZlclBhcmFtS2V5cy5SRURJUkVDVF9VUkksIGVuY29kZVVSSUNvbXBvbmVudChyZWRpcmVjdFVyaSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIGRvbWFpbl9oaW50XHJcbiAgICAgKiBAcGFyYW0gZG9tYWluSGludFxyXG4gICAgICovXHJcbiAgICBhZGREb21haW5IaW50KGRvbWFpbkhpbnQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoU1NPVHlwZXMuRE9NQUlOX0hJTlQsIGVuY29kZVVSSUNvbXBvbmVudChkb21haW5IaW50KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgbG9naW5faGludFxyXG4gICAgICogQHBhcmFtIGxvZ2luSGludFxyXG4gICAgICovXHJcbiAgICBhZGRMb2dpbkhpbnQobG9naW5IaW50OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KFNTT1R5cGVzLkxPR0lOX0hJTlQsIGVuY29kZVVSSUNvbXBvbmVudChsb2dpbkhpbnQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBjbGFpbXNcclxuICAgICAqIEBwYXJhbSBjbGFpbXNcclxuICAgICAqL1xyXG4gICAgYWRkQ2xhaW1zKGNsYWltczogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuQ0xBSU1TLCBlbmNvZGVVUklDb21wb25lbnQoY2xhaW1zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgY29ycmVsYXRpb25JZFxyXG4gICAgICogQHBhcmFtIGNvcnJlbGF0aW9uSWRcclxuICAgICAqL1xyXG4gICAgYWRkQ29ycmVsYXRpb25JZChjb3JyZWxhdGlvbklkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KEFBRFNlcnZlclBhcmFtS2V5cy5DTElFTlRfUkVRVUVTVF9JRCwgZW5jb2RlVVJJQ29tcG9uZW50KGNvcnJlbGF0aW9uSWQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBsaWJyYXJ5IGluZm8gcXVlcnkgcGFyYW1zXHJcbiAgICAgKiBAcGFyYW0gbGlicmFyeUluZm9cclxuICAgICAqL1xyXG4gICAgYWRkTGlicmFyeUluZm8obGlicmFyeUluZm86IExpYnJhcnlJbmZvKTogdm9pZCB7XHJcbiAgICAgICAgLy8gVGVsZW1ldHJ5IEluZm9cclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KEFBRFNlcnZlclBhcmFtS2V5cy5YX0NMSUVOVF9TS1UsIGxpYnJhcnlJbmZvLnNrdSk7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuWF9DTElFTlRfVkVSLCBsaWJyYXJ5SW5mby52ZXJzaW9uKTtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KEFBRFNlcnZlclBhcmFtS2V5cy5YX0NMSUVOVF9PUywgbGlicmFyeUluZm8ub3MpO1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoQUFEU2VydmVyUGFyYW1LZXlzLlhfQ0xJRU5UX0NQVSwgbGlicmFyeUluZm8uY3B1KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBwcm9tcHRcclxuICAgICAqIEBwYXJhbSBwcm9tcHRcclxuICAgICAqL1xyXG4gICAgYWRkUHJvbXB0KHByb21wdDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgUmVxdWVzdFZhbGlkYXRvci52YWxpZGF0ZVByb21wdChwcm9tcHQpO1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoYCR7QUFEU2VydmVyUGFyYW1LZXlzLlBST01QVH1gLCBlbmNvZGVVUklDb21wb25lbnQocHJvbXB0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgc3RhdGVcclxuICAgICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBhZGRTdGF0ZShzdGF0ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KHN0YXRlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KEFBRFNlcnZlclBhcmFtS2V5cy5TVEFURSwgZW5jb2RlVVJJQ29tcG9uZW50KHN0YXRlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIG5vbmNlXHJcbiAgICAgKiBAcGFyYW0gbm9uY2VcclxuICAgICAqL1xyXG4gICAgYWRkTm9uY2Uobm9uY2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoQUFEU2VydmVyUGFyYW1LZXlzLk5PTkNFLCBlbmNvZGVVUklDb21wb25lbnQobm9uY2UpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBjb2RlX2NoYWxsZW5nZSBhbmQgY29kZV9jaGFsbGVuZ2VfbWV0aG9kXHJcbiAgICAgKiAtIHRocm93IGlmIGVpdGhlciBvZiB0aGVtIGFyZSBub3QgcGFzc2VkXHJcbiAgICAgKiBAcGFyYW0gY29kZUNoYWxsZW5nZVxyXG4gICAgICogQHBhcmFtIGNvZGVDaGFsbGVuZ2VNZXRob2RcclxuICAgICAqL1xyXG4gICAgYWRkQ29kZUNoYWxsZW5nZVBhcmFtcyhcclxuICAgICAgICBjb2RlQ2hhbGxlbmdlOiBzdHJpbmcsXHJcbiAgICAgICAgY29kZUNoYWxsZW5nZU1ldGhvZDogc3RyaW5nXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBSZXF1ZXN0VmFsaWRhdG9yLnZhbGlkYXRlQ29kZUNoYWxsZW5nZVBhcmFtcyhjb2RlQ2hhbGxlbmdlLCBjb2RlQ2hhbGxlbmdlTWV0aG9kKTtcclxuICAgICAgICBpZiAoY29kZUNoYWxsZW5nZSAmJiBjb2RlQ2hhbGxlbmdlTWV0aG9kKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoQUFEU2VydmVyUGFyYW1LZXlzLkNPREVfQ0hBTExFTkdFLCBlbmNvZGVVUklDb21wb25lbnQoY29kZUNoYWxsZW5nZSkpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KEFBRFNlcnZlclBhcmFtS2V5cy5DT0RFX0NIQUxMRU5HRV9NRVRIT0QsIGVuY29kZVVSSUNvbXBvbmVudChjb2RlQ2hhbGxlbmdlTWV0aG9kKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUludmFsaWRDb2RlQ2hhbGxlbmdlUGFyYW1zRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgdGhlIGBhdXRob3JpemF0aW9uX2NvZGVgIHBhc3NlZCBieSB0aGUgdXNlciB0byBleGNoYW5nZSBmb3IgYSB0b2tlblxyXG4gICAgICogQHBhcmFtIGNvZGVcclxuICAgICAqL1xyXG4gICAgYWRkQXV0aG9yaXphdGlvbkNvZGUoY29kZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuQ09ERSwgZW5jb2RlVVJJQ29tcG9uZW50KGNvZGUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCB0aGUgYGF1dGhvcml6YXRpb25fY29kZWAgcGFzc2VkIGJ5IHRoZSB1c2VyIHRvIGV4Y2hhbmdlIGZvciBhIHRva2VuXHJcbiAgICAgKiBAcGFyYW0gY29kZVxyXG4gICAgICovXHJcbiAgICBhZGREZXZpY2VDb2RlKGNvZGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoQUFEU2VydmVyUGFyYW1LZXlzLkRFVklDRV9DT0RFLCBlbmNvZGVVUklDb21wb25lbnQoY29kZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIHRoZSBgcmVmcmVzaFRva2VuYCBwYXNzZWQgYnkgdGhlIHVzZXJcclxuICAgICAqIEBwYXJhbSByZWZyZXNoVG9rZW5cclxuICAgICAqL1xyXG4gICAgYWRkUmVmcmVzaFRva2VuKHJlZnJlc2hUb2tlbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuUkVGUkVTSF9UT0tFTiwgZW5jb2RlVVJJQ29tcG9uZW50KHJlZnJlc2hUb2tlbikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIHRoZSBgY29kZV92ZXJpZmllcmAgcGFzc2VkIGJ5IHRoZSB1c2VyIHRvIGV4Y2hhbmdlIGZvciBhIHRva2VuXHJcbiAgICAgKiBAcGFyYW0gY29kZVZlcmlmaWVyXHJcbiAgICAgKi9cclxuICAgIGFkZENvZGVWZXJpZmllcihjb2RlVmVyaWZpZXI6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoQUFEU2VydmVyUGFyYW1LZXlzLkNPREVfVkVSSUZJRVIsIGVuY29kZVVSSUNvbXBvbmVudChjb2RlVmVyaWZpZXIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBjbGllbnRfc2VjcmV0XHJcbiAgICAgKiBAcGFyYW0gY2xpZW50U2VjcmV0XHJcbiAgICAgKi9cclxuICAgIC8vIFRPRE8gdW5jb21tZW50IHdoZW4gY29uZmlkZW50aWFsIGNsaWVudCBmbG93IGlzIGFkZGVkLlxyXG4gICAgLy8gYWRkQ2xpZW50U2VjcmV0KGNsaWVudFNlY3JldDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAvLyAgICAgcGFyYW1zLnNldChgJHtBQURTZXJ2ZXJQYXJhbUtleXMuQ0xJRU5UX1NFQ1JFVH1gLCBjbGllbnRTZWNyZXQpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIGdyYW50IHR5cGVcclxuICAgICAqIEBwYXJhbSBncmFudFR5cGVcclxuICAgICAqL1xyXG4gICAgYWRkR3JhbnRUeXBlKGdyYW50VHlwZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuR1JBTlRfVFlQRSwgZW5jb2RlVVJJQ29tcG9uZW50KGdyYW50VHlwZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIGNsaWVudCBpbmZvXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBhZGRDbGllbnRJbmZvKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoQ2xpZW50SW5mbywgXCIxXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIGV4dHJhUXVlcnlQYXJhbXNcclxuICAgICAqIEBwYXJhbSBlUXBhcmFtc1xyXG4gICAgICovXHJcbiAgICBhZGRFeHRyYVF1ZXJ5UGFyYW1ldGVycyhlUXBhcmFtczogU3RyaW5nRGljdCk6IHZvaWQge1xyXG4gICAgICAgIFJlcXVlc3RWYWxpZGF0b3Iuc2FuaXRpemVFUVBhcmFtcyhlUXBhcmFtcywgdGhpcy5wYXJhbWV0ZXJzKTtcclxuICAgICAgICBPYmplY3Qua2V5cyhlUXBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoa2V5LCBlUXBhcmFtc1trZXldKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFV0aWxpdHkgdG8gY3JlYXRlIGEgVVJMIGZyb20gdGhlIHBhcmFtcyBtYXBcclxuICAgICAqL1xyXG4gICAgY3JlYXRlUXVlcnlTdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtZXRlckFycmF5OiBBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJBcnJheS5wdXNoKGAke2tleX09JHt2YWx1ZX1gKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5UGFyYW1ldGVyQXJyYXkuam9pbihcIiZcIik7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcbmltcG9ydCB7IEF1dGhFcnJvciB9IGZyb20gXCIuL0F1dGhFcnJvclwiO1xyXG5cclxuLyoqXHJcbiAqIEVycm9yIHRocm93biB3aGVuIHRoZXJlIGlzIGFuIGVycm9yIHdpdGggdGhlIHNlcnZlciBjb2RlLCBmb3IgZXhhbXBsZSwgdW5hdmFpbGFiaWxpdHkuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2VydmVyRXJyb3IgZXh0ZW5kcyBBdXRoRXJyb3Ige1xyXG5cclxuICAgIHN1YkVycm9yOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZywgc3ViRXJyb3I/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlcnJvckNvZGUsIGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJTZXJ2ZXJFcnJvclwiO1xyXG4gICAgICAgIHRoaXMuc3ViRXJyb3IgPSBzdWJFcnJvcjtcclxuXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFNlcnZlckVycm9yLnByb3RvdHlwZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcbmltcG9ydCB7IElkVG9rZW5DbGFpbXMgfSBmcm9tIFwiLi9JZFRva2VuQ2xhaW1zXCI7XHJcbmltcG9ydCB7IERlY29kZWRKd3QgfSBmcm9tIFwiLi9EZWNvZGVkSnd0XCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgSUNyeXB0byB9IGZyb20gXCIuLi9jcnlwdG8vSUNyeXB0b1wiO1xyXG5cclxuLyoqXHJcbiAqIElkIFRva2VuIHJlcHJlc2VudGF0aW9uIGNsYXNzLiBQYXJzZXMgaWQgdG9rZW4gc3RyaW5nIGFuZCBnZW5lcmF0ZXMgY2xhaW1zIG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJZFRva2VuIHtcclxuXHJcbiAgICAvLyBSYXcgSWQgVG9rZW4gc3RyaW5nXHJcbiAgICByYXdJZFRva2VuOiBzdHJpbmc7XHJcbiAgICAvLyBDbGFpbXMgaW5zaWRlIElkIFRva2VuXHJcbiAgICBjbGFpbXM6IElkVG9rZW5DbGFpbXM7XHJcbiAgICBjb25zdHJ1Y3RvcihyYXdJZFRva2VuOiBzdHJpbmcsIGNyeXB0bzogSUNyeXB0bykge1xyXG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KHJhd0lkVG9rZW4pKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVJZFRva2VuTnVsbE9yRW1wdHlFcnJvcihyYXdJZFRva2VuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmF3SWRUb2tlbiA9IHJhd0lkVG9rZW47XHJcbiAgICAgICAgdGhpcy5jbGFpbXMgPSBJZFRva2VuLmV4dHJhY3RJZFRva2VuKHJhd0lkVG9rZW4sIGNyeXB0byk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeHRyYWN0IElkVG9rZW4gYnkgZGVjb2RpbmcgdGhlIFJBV0lkVG9rZW5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZW5jb2RlZElkVG9rZW5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGV4dHJhY3RJZFRva2VuKGVuY29kZWRJZFRva2VuOiBzdHJpbmcsIGNyeXB0bzogSUNyeXB0byk6IElkVG9rZW5DbGFpbXMge1xyXG4gICAgICAgIC8vIGlkIHRva2VuIHdpbGwgYmUgZGVjb2RlZCB0byBnZXQgdGhlIHVzZXJuYW1lXHJcbiAgICAgICAgY29uc3QgZGVjb2RlZFRva2VuOiBEZWNvZGVkSnd0ID0gU3RyaW5nVXRpbHMuZGVjb2RlSnd0KGVuY29kZWRJZFRva2VuKTtcclxuICAgICAgICBpZiAoIWRlY29kZWRUb2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgYmFzZTY0SWRUb2tlblBheWxvYWQgPSBkZWNvZGVkVG9rZW4uSldTUGF5bG9hZDtcclxuICAgICAgICAgICAgLy8gYmFzZTY0RGVjb2RlKCkgc2hvdWxkIHRocm93IGFuIGVycm9yIGlmIHRoZXJlIGlzIGFuIGlzc3VlXHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2U2NERlY29kZWQgPSBjcnlwdG8uYmFzZTY0RGVjb2RlKGJhc2U2NElkVG9rZW5QYXlsb2FkKTtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoYmFzZTY0RGVjb2RlZCkgYXMgSWRUb2tlbkNsYWltcztcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUlkVG9rZW5QYXJzaW5nRXJyb3IoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG4vKipcclxuICogVXRpbGl0eSBjbGFzcyB3aGljaCBleHBvc2VzIGZ1bmN0aW9ucyBmb3IgbWFuYWdpbmcgZGF0ZSBhbmQgdGltZSBvcGVyYXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRpbWVVdGlscyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm4gdGhlIGN1cnJlbnQgdGltZSBpbiBVbml4IHRpbWUgKHNlY29uZHMpLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbm93U2Vjb25kcygpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIERhdGUuZ2V0VGltZSgpIHJldHVybnMgaW4gbWlsbGlzZWNvbmRzLlxyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMC4wKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBBdXRob3JpdHkgdHlwZXMgc3VwcG9ydGVkIGJ5IE1TQUwuXHJcbiAqL1xyXG5leHBvcnQgZW51bSBBdXRob3JpdHlUeXBlIHtcclxuICAgIERlZmF1bHQsXHJcbiAgICBBZGZzXHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBDcmVkZW50aWFsRW50aXR5IH0gZnJvbSBcIi4vQ3JlZGVudGlhbEVudGl0eVwiO1xyXG5pbXBvcnQgeyBDcmVkZW50aWFsVHlwZSB9IGZyb20gXCIuLi8uLi91dGlscy9Db25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBJRF9UT0tFTiBDYWNoZVxyXG4gKiBcclxuICogS2V5OlZhbHVlIFNjaGVtYTpcclxuICogXHJcbiAqIEtleSBFeGFtcGxlOiB1aWQudXRpZC1sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tLWlkdG9rZW4tY2xpZW50SWQtY29udG9zby5jb20tXHJcbiAqIFxyXG4gKiBWYWx1ZSBTY2hlbWE6XHJcbiAqIHtcclxuICogICAgICBob21lQWNjb3VudElkOiBob21lIGFjY291bnQgaWRlbnRpZmllciBmb3IgdGhlIGF1dGggc2NoZW1lLFxyXG4gKiAgICAgIGVudmlyb25tZW50OiBlbnRpdHkgdGhhdCBpc3N1ZWQgdGhlIHRva2VuLCByZXByZXNlbnRlZCBhcyBhIGZ1bGwgaG9zdFxyXG4gKiAgICAgIGNyZWRlbnRpYWxUeXBlOiBUeXBlIG9mIGNyZWRlbnRpYWwgYXMgYSBzdHJpbmcsIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzogUmVmcmVzaFRva2VuLCBBY2Nlc3NUb2tlbiwgSWRUb2tlbiwgUGFzc3dvcmQsIENvb2tpZSwgQ2VydGlmaWNhdGUsIE90aGVyXHJcbiAqICAgICAgY2xpZW50SWQ6IGNsaWVudCBJRCBvZiB0aGUgYXBwbGljYXRpb25cclxuICogICAgICBzZWNyZXQ6IEFjdHVhbCBjcmVkZW50aWFsIGFzIGEgc3RyaW5nXHJcbiAqICAgICAgcmVhbG06IEZ1bGwgdGVuYW50IG9yIG9yZ2FuaXphdGlvbmFsIGlkZW50aWZpZXIgdGhhdCB0aGUgYWNjb3VudCBiZWxvbmdzIHRvXHJcbiAqIH1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJZFRva2VuRW50aXR5IGV4dGVuZHMgQ3JlZGVudGlhbEVudGl0eSB7XHJcbiAgICByZWFsbTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIElkVG9rZW5FbnRpdHlcclxuICAgICAqIEBwYXJhbSBob21lQWNjb3VudElkXHJcbiAgICAgKiBAcGFyYW0gYXV0aGVudGljYXRpb25SZXN1bHRcclxuICAgICAqIEBwYXJhbSBjbGllbnRJZFxyXG4gICAgICogQHBhcmFtIGF1dGhvcml0eVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlSWRUb2tlbkVudGl0eShcclxuICAgICAgICBob21lQWNjb3VudElkOiBzdHJpbmcsXHJcbiAgICAgICAgZW52aXJvbm1lbnQ6IHN0cmluZyxcclxuICAgICAgICBpZFRva2VuOiBzdHJpbmcsXHJcbiAgICAgICAgY2xpZW50SWQ6IHN0cmluZyxcclxuICAgICAgICB0ZW5hbnRJZDogc3RyaW5nXHJcbiAgICApOiBJZFRva2VuRW50aXR5IHtcclxuICAgICAgICBjb25zdCBpZFRva2VuRW50aXR5ID0gbmV3IElkVG9rZW5FbnRpdHkoKTtcclxuXHJcbiAgICAgICAgaWRUb2tlbkVudGl0eS5jcmVkZW50aWFsVHlwZSA9IENyZWRlbnRpYWxUeXBlLklEX1RPS0VOO1xyXG4gICAgICAgIGlkVG9rZW5FbnRpdHkuaG9tZUFjY291bnRJZCA9IGhvbWVBY2NvdW50SWQ7XHJcbiAgICAgICAgaWRUb2tlbkVudGl0eS5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xyXG4gICAgICAgIGlkVG9rZW5FbnRpdHkuY2xpZW50SWQgPSBjbGllbnRJZDtcclxuICAgICAgICBpZFRva2VuRW50aXR5LnNlY3JldCA9IGlkVG9rZW47XHJcbiAgICAgICAgaWRUb2tlbkVudGl0eS5yZWFsbSA9IHRlbmFudElkO1xyXG5cclxuICAgICAgICByZXR1cm4gaWRUb2tlbkVudGl0eTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENyZWRlbnRpYWxFbnRpdHkgfSBmcm9tIFwiLi9DcmVkZW50aWFsRW50aXR5XCI7XHJcbmltcG9ydCB7IENyZWRlbnRpYWxUeXBlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBUaW1lVXRpbHMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvVGltZVV0aWxzXCI7XHJcblxyXG4vKipcclxuICogQUNDRVNTX1RPS0VOIENyZWRlbnRpYWwgVHlwZVxyXG4gKiBcclxuICogS2V5OlZhbHVlIFNjaGVtYTpcclxuICogXHJcbiAqIEtleSBFeGFtcGxlOiB1aWQudXRpZC1sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tLWFjY2Vzc3Rva2VuLWNsaWVudElkLWNvbnRvc28uY29tLXVzZXIucmVhZFxyXG4gKiBcclxuICogVmFsdWUgU2NoZW1hOlxyXG4gKiB7XHJcbiAqICAgICAgaG9tZUFjY291bnRJZDogaG9tZSBhY2NvdW50IGlkZW50aWZpZXIgZm9yIHRoZSBhdXRoIHNjaGVtZSxcclxuICogICAgICBlbnZpcm9ubWVudDogZW50aXR5IHRoYXQgaXNzdWVkIHRoZSB0b2tlbiwgcmVwcmVzZW50ZWQgYXMgYSBmdWxsIGhvc3RcclxuICogICAgICBjcmVkZW50aWFsVHlwZTogVHlwZSBvZiBjcmVkZW50aWFsIGFzIGEgc3RyaW5nLCBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6IFJlZnJlc2hUb2tlbiwgQWNjZXNzVG9rZW4sIElkVG9rZW4sIFBhc3N3b3JkLCBDb29raWUsIENlcnRpZmljYXRlLCBPdGhlclxyXG4gKiAgICAgIGNsaWVudElkOiBjbGllbnQgSUQgb2YgdGhlIGFwcGxpY2F0aW9uXHJcbiAqICAgICAgc2VjcmV0OiBBY3R1YWwgY3JlZGVudGlhbCBhcyBhIHN0cmluZ1xyXG4gKiAgICAgIGZhbWlseUlkOiBGYW1pbHkgSUQgaWRlbnRpZmllciwgdXN1YWxseSBvbmx5IHVzZWQgZm9yIHJlZnJlc2ggdG9rZW5zXHJcbiAqICAgICAgcmVhbG06IEZ1bGwgdGVuYW50IG9yIG9yZ2FuaXphdGlvbmFsIGlkZW50aWZpZXIgdGhhdCB0aGUgYWNjb3VudCBiZWxvbmdzIHRvXHJcbiAqICAgICAgdGFyZ2V0OiBQZXJtaXNzaW9ucyB0aGF0IGFyZSBpbmNsdWRlZCBpbiB0aGUgdG9rZW4sIG9yIGZvciByZWZyZXNoIHRva2VucywgdGhlIHJlc291cmNlIGlkZW50aWZpZXIuXHJcbiAqICAgICAgY2FjaGVkQXQ6IEFic29sdXRlIGRldmljZSB0aW1lIHdoZW4gZW50cnkgd2FzIGNyZWF0ZWQgaW4gdGhlIGNhY2hlLlxyXG4gKiAgICAgIGV4cGlyZXNPbjogVG9rZW4gZXhwaXJ5IHRpbWUsIGNhbGN1bGF0ZWQgYmFzZWQgb24gY3VycmVudCBVVEMgdGltZSBpbiBzZWNvbmRzLiBSZXByZXNlbnRlZCBhcyBhIHN0cmluZy5cclxuICogICAgICBleHRlbmRlZEV4cGlyZXNPbjogQWRkaXRpb25hbCBleHRlbmRlZCBleHBpcnkgdGltZSB1bnRpbCB3aGVuIHRva2VuIGlzIHZhbGlkIGluIGNhc2Ugb2Ygc2VydmVyLXNpZGUgb3V0YWdlLiBSZXByZXNlbnRlZCBhcyBzdHJpbmcgaW4gVVRDIHNlY29uZHMuXHJcbiAqICAgICAga2V5SWQ6IHVzZWQgZm9yIFBPUCBhbmQgU1NIIHRva2VuVHlwZXNcclxuICogICAgICB0b2tlblR5cGU6IFR5cGUgb2YgdGhlIHRva2VuIGlzc3VlZC4gVXN1YWxseSBcIkJlYXJlclwiXHJcbiAqIH1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlbkVudGl0eSBleHRlbmRzIENyZWRlbnRpYWxFbnRpdHkge1xyXG4gICAgcmVhbG06IHN0cmluZztcclxuICAgIHRhcmdldDogc3RyaW5nO1xyXG4gICAgY2FjaGVkQXQ6IHN0cmluZztcclxuICAgIGV4cGlyZXNPbjogc3RyaW5nO1xyXG4gICAgZXh0ZW5kZWRFeHBpcmVzT24/OiBzdHJpbmc7XHJcbiAgICByZWZyZXNoT24/OiBzdHJpbmc7XHJcbiAgICBrZXlJZD86IHN0cmluZzsgLy8gZm9yIFBPUCBhbmQgU1NIIHRva2VuVHlwZXNcclxuICAgIHRva2VuVHlwZT86IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBBY2Nlc3NUb2tlbkVudGl0eVxyXG4gICAgICogQHBhcmFtIGhvbWVBY2NvdW50SWRcclxuICAgICAqIEBwYXJhbSBlbnZpcm9ubWVudFxyXG4gICAgICogQHBhcmFtIGFjY2Vzc1Rva2VuXHJcbiAgICAgKiBAcGFyYW0gY2xpZW50SWRcclxuICAgICAqIEBwYXJhbSB0ZW5hbnRJZFxyXG4gICAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAgICogQHBhcmFtIGV4cGlyZXNPblxyXG4gICAgICogQHBhcmFtIGV4dEV4cGlyZXNPblxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQWNjZXNzVG9rZW5FbnRpdHkoXHJcbiAgICAgICAgaG9tZUFjY291bnRJZDogc3RyaW5nLFxyXG4gICAgICAgIGVudmlyb25tZW50OiBzdHJpbmcsXHJcbiAgICAgICAgYWNjZXNzVG9rZW46IHN0cmluZyxcclxuICAgICAgICBjbGllbnRJZDogc3RyaW5nLFxyXG4gICAgICAgIHRlbmFudElkOiBzdHJpbmcsXHJcbiAgICAgICAgc2NvcGVzOiBzdHJpbmcsXHJcbiAgICAgICAgZXhwaXJlc09uOiBudW1iZXIsXHJcbiAgICAgICAgZXh0RXhwaXJlc09uOiBudW1iZXJcclxuICAgICk6IEFjY2Vzc1Rva2VuRW50aXR5IHtcclxuICAgICAgICBjb25zdCBhdEVudGl0eTogQWNjZXNzVG9rZW5FbnRpdHkgPSBuZXcgQWNjZXNzVG9rZW5FbnRpdHkoKTtcclxuXHJcbiAgICAgICAgYXRFbnRpdHkuaG9tZUFjY291bnRJZCA9IGhvbWVBY2NvdW50SWQ7XHJcbiAgICAgICAgYXRFbnRpdHkuY3JlZGVudGlhbFR5cGUgPSBDcmVkZW50aWFsVHlwZS5BQ0NFU1NfVE9LRU47XHJcbiAgICAgICAgYXRFbnRpdHkuc2VjcmV0ID0gYWNjZXNzVG9rZW47XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gVGltZVV0aWxzLm5vd1NlY29uZHMoKTtcclxuICAgICAgICBhdEVudGl0eS5jYWNoZWRBdCA9IGN1cnJlbnRUaW1lLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIC8vIFRva2VuIGV4cGlyeSB0aW1lLlxyXG4gICAgICAgIC8vIFRoaXMgdmFsdWUgc2hvdWxkIGJlIOKAr2NhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGN1cnJlbnQgVVRDIHRpbWUgbWVhc3VyZWQgbG9jYWxseSBhbmQgdGhlIHZhbHVlIOKAr2V4cGlyZXNfaW4gUmVwcmVzZW50ZWQgYXMgYSBzdHJpbmcgaW4gSlNPTi5cclxuICAgICAgICBhdEVudGl0eS5leHBpcmVzT24gPSBleHBpcmVzT24udG9TdHJpbmcoKTtcclxuICAgICAgICBhdEVudGl0eS5leHRlbmRlZEV4cGlyZXNPbiA9IGV4dEV4cGlyZXNPbi50b1N0cmluZygpO1xyXG5cclxuICAgICAgICBhdEVudGl0eS5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xyXG4gICAgICAgIGF0RW50aXR5LmNsaWVudElkID0gY2xpZW50SWQ7XHJcbiAgICAgICAgYXRFbnRpdHkucmVhbG0gPSB0ZW5hbnRJZDtcclxuICAgICAgICBhdEVudGl0eS50YXJnZXQgPSBzY29wZXM7XHJcblxyXG4gICAgICAgIHJldHVybiBhdEVudGl0eTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENyZWRlbnRpYWxFbnRpdHkgfSBmcm9tIFwiLi9DcmVkZW50aWFsRW50aXR5XCI7XHJcbmltcG9ydCB7IENyZWRlbnRpYWxUeXBlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIFJFRlJFU0hfVE9LRU4gQ2FjaGVcclxuICogXHJcbiAqIEtleTpWYWx1ZSBTY2hlbWE6XHJcbiAqIFxyXG4gKiBLZXkgRXhhbXBsZTogdWlkLnV0aWQtbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS1yZWZyZXNodG9rZW4tY2xpZW50SWQtLVxyXG4gKiBcclxuICogVmFsdWU6XHJcbiAqIHtcclxuICogICAgICBob21lQWNjb3VudElkOiBob21lIGFjY291bnQgaWRlbnRpZmllciBmb3IgdGhlIGF1dGggc2NoZW1lLFxyXG4gKiAgICAgIGVudmlyb25tZW50OiBlbnRpdHkgdGhhdCBpc3N1ZWQgdGhlIHRva2VuLCByZXByZXNlbnRlZCBhcyBhIGZ1bGwgaG9zdFxyXG4gKiAgICAgIGNyZWRlbnRpYWxUeXBlOiBUeXBlIG9mIGNyZWRlbnRpYWwgYXMgYSBzdHJpbmcsIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzogUmVmcmVzaFRva2VuLCBBY2Nlc3NUb2tlbiwgSWRUb2tlbiwgUGFzc3dvcmQsIENvb2tpZSwgQ2VydGlmaWNhdGUsIE90aGVyXHJcbiAqICAgICAgY2xpZW50SWQ6IGNsaWVudCBJRCBvZiB0aGUgYXBwbGljYXRpb25cclxuICogICAgICBzZWNyZXQ6IEFjdHVhbCBjcmVkZW50aWFsIGFzIGEgc3RyaW5nXHJcbiAqICAgICAgZmFtaWx5SWQ6IEZhbWlseSBJRCBpZGVudGlmaWVyLCAnMScgcmVwcmVzZW50cyBNaWNyb3NvZnQgRmFtaWx5XHJcbiAqICAgICAgcmVhbG06IEZ1bGwgdGVuYW50IG9yIG9yZ2FuaXphdGlvbmFsIGlkZW50aWZpZXIgdGhhdCB0aGUgYWNjb3VudCBiZWxvbmdzIHRvXHJcbiAqICAgICAgdGFyZ2V0OiBQZXJtaXNzaW9ucyB0aGF0IGFyZSBpbmNsdWRlZCBpbiB0aGUgdG9rZW4sIG9yIGZvciByZWZyZXNoIHRva2VucywgdGhlIHJlc291cmNlIGlkZW50aWZpZXIuXHJcbiAqIH1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZWZyZXNoVG9rZW5FbnRpdHkgZXh0ZW5kcyBDcmVkZW50aWFsRW50aXR5IHtcclxuICAgIGZhbWlseUlkPzogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIFJlZnJlc2hUb2tlbkVudGl0eVxyXG4gICAgICogQHBhcmFtIGhvbWVBY2NvdW50SWRcclxuICAgICAqIEBwYXJhbSBhdXRoZW50aWNhdGlvblJlc3VsdFxyXG4gICAgICogQHBhcmFtIGNsaWVudElkXHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXR5XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVSZWZyZXNoVG9rZW5FbnRpdHkoXHJcbiAgICAgICAgaG9tZUFjY291bnRJZDogc3RyaW5nLFxyXG4gICAgICAgIGVudmlyb25tZW50OiBzdHJpbmcsXHJcbiAgICAgICAgcmVmcmVzaFRva2VuOiBzdHJpbmcsXHJcbiAgICAgICAgY2xpZW50SWQ6IHN0cmluZyxcclxuICAgICAgICBmYW1pbHlJZD86IHN0cmluZ1xyXG4gICAgKTogUmVmcmVzaFRva2VuRW50aXR5IHtcclxuICAgICAgICBjb25zdCBydEVudGl0eSA9IG5ldyBSZWZyZXNoVG9rZW5FbnRpdHkoKTtcclxuXHJcbiAgICAgICAgcnRFbnRpdHkuY2xpZW50SWQgPSBjbGllbnRJZDtcclxuICAgICAgICBydEVudGl0eS5jcmVkZW50aWFsVHlwZSA9IENyZWRlbnRpYWxUeXBlLlJFRlJFU0hfVE9LRU47XHJcbiAgICAgICAgcnRFbnRpdHkuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcclxuICAgICAgICBydEVudGl0eS5ob21lQWNjb3VudElkID0gaG9tZUFjY291bnRJZDtcclxuICAgICAgICBydEVudGl0eS5zZWNyZXQgPSByZWZyZXNoVG9rZW47XHJcblxyXG4gICAgICAgIGlmIChmYW1pbHlJZClcclxuICAgICAgICAgICAgcnRFbnRpdHkuZmFtaWx5SWQgPSBmYW1pbHlJZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJ0RW50aXR5O1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgU2VydmVyRXJyb3IgfSBmcm9tIFwiLi9TZXJ2ZXJFcnJvclwiO1xyXG5cclxuLyoqXHJcbiAqIEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlIGNsYXNzIGNvbnRhaW5pbmcgc3RyaW5nIGNvbnN0YW50cyB1c2VkIGJ5IGVycm9yIGNvZGVzIGFuZCBtZXNzYWdlcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZSA9IFtcclxuICAgIFwiaW50ZXJhY3Rpb25fcmVxdWlyZWRcIixcclxuICAgIFwiY29uc2VudF9yZXF1aXJlZFwiLFxyXG4gICAgXCJsb2dpbl9yZXF1aXJlZFwiXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhTdWJFcnJvck1lc3NhZ2UgPSBbXHJcbiAgICBcIm1lc3NhZ2Vfb25seVwiLFxyXG4gICAgXCJhZGRpdGlvbmFsX2FjdGlvblwiLFxyXG4gICAgXCJiYXNpY19hY3Rpb25cIixcclxuICAgIFwidXNlcl9wYXNzd29yZF9leHBpcmVkXCIsXHJcbiAgICBcImNvbnNlbnRfcmVxdWlyZWRcIlxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIEVycm9yIHRocm93biB3aGVuIHVzZXIgaW50ZXJhY3Rpb24gaXMgcmVxdWlyZWQgYXQgdGhlIGF1dGggc2VydmVyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IgZXh0ZW5kcyBTZXJ2ZXJFcnJvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZywgc3ViRXJyb3I/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlcnJvckNvZGUsIGVycm9yTWVzc2FnZSwgc3ViRXJyb3IpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvclwiO1xyXG5cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvci5wcm90b3R5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc0ludGVyYWN0aW9uUmVxdWlyZWRFcnJvcihlcnJvckNvZGU6IHN0cmluZywgZXJyb3JTdHJpbmc6IHN0cmluZywgc3ViRXJyb3I/OiBzdHJpbmcpIDogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgaXNJbnRlcmFjdGlvblJlcXVpcmVkRXJyb3JDb2RlID0gIVN0cmluZ1V0aWxzLmlzRW1wdHkoZXJyb3JDb2RlKSAmJiBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZS5pbmRleE9mKGVycm9yQ29kZSkgPiAtMTtcclxuICAgICAgICBjb25zdCBpc0ludGVyYWN0aW9uUmVxdWlyZWRTdWJFcnJvciA9ICFTdHJpbmdVdGlscy5pc0VtcHR5KHN1YkVycm9yKSAmJiBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aFN1YkVycm9yTWVzc2FnZS5pbmRleE9mKHN1YkVycm9yKSA+IC0xO1xyXG4gICAgICAgIGNvbnN0IGlzSW50ZXJhY3Rpb25SZXF1aXJlZEVycm9yRGVzYyA9ICFTdHJpbmdVdGlscy5pc0VtcHR5KGVycm9yU3RyaW5nKSAmJiBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZS5zb21lKChpckVycm9yQ29kZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3JTdHJpbmcuaW5kZXhPZihpckVycm9yQ29kZSkgPiAtMTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlzSW50ZXJhY3Rpb25SZXF1aXJlZEVycm9yQ29kZSB8fCBpc0ludGVyYWN0aW9uUmVxdWlyZWRFcnJvckRlc2MgfHwgaXNJbnRlcmFjdGlvblJlcXVpcmVkU3ViRXJyb3I7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBJZFRva2VuRW50aXR5IH0gZnJvbSBcIi4vSWRUb2tlbkVudGl0eVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbkVudGl0eSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuRW50aXR5XCI7XHJcbmltcG9ydCB7IFJlZnJlc2hUb2tlbkVudGl0eSB9IGZyb20gXCIuL1JlZnJlc2hUb2tlbkVudGl0eVwiO1xyXG5pbXBvcnQgeyBBY2NvdW50RW50aXR5IH0gZnJvbSBcIi4vQWNjb3VudEVudGl0eVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhY2hlUmVjb3JkIHtcclxuICAgIGFjY291bnQ6IEFjY291bnRFbnRpdHk7XHJcbiAgICBpZFRva2VuOiBJZFRva2VuRW50aXR5O1xyXG4gICAgYWNjZXNzVG9rZW46IEFjY2Vzc1Rva2VuRW50aXR5O1xyXG4gICAgcmVmcmVzaFRva2VuOiBSZWZyZXNoVG9rZW5FbnRpdHk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYWNjb3VudEVudGl0eT86IEFjY291bnRFbnRpdHksIGlkVG9rZW5FbnRpdHk/OiBJZFRva2VuRW50aXR5LCBhY2Nlc3NUb2tlbkVudGl0eT86IEFjY2Vzc1Rva2VuRW50aXR5LCByZWZyZXNoVG9rZW5FbnRpdHk/OiBSZWZyZXNoVG9rZW5FbnRpdHkpIHtcclxuICAgICAgICB0aGlzLmFjY291bnQgPSBhY2NvdW50RW50aXR5O1xyXG4gICAgICAgIHRoaXMuaWRUb2tlbiA9IGlkVG9rZW5FbnRpdHk7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuRW50aXR5O1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFRva2VuID0gcmVmcmVzaFRva2VuRW50aXR5O1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL1N0cmluZ1V0aWxzXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBJQ3J5cHRvIH0gZnJvbSBcIi4uL2NyeXB0by9JQ3J5cHRvXCI7XHJcbmltcG9ydCB7IFRpbWVVdGlscyB9IGZyb20gXCIuL1RpbWVVdGlsc1wiO1xyXG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XHJcblxyXG4vKipcclxuICogVHlwZSB3aGljaCBkZWZpbmVzIHRoZSBvYmplY3QgdGhhdCBpcyBzdHJpbmdpZmllZCwgZW5jb2RlZCBhbmQgc2VudCBpbiB0aGUgc3RhdGUgdmFsdWUuXHJcbiAqIENvbnRhaW5zIHRoZSBmb2xsb3dpbmc6XHJcbiAqIC0gaWQgLSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhpcyByZXF1ZXN0XHJcbiAqIC0gdHMgLSB0aW1lc3RhbXAgZm9yIHRoZSB0aW1lIHRoZSByZXF1ZXN0IHdhcyBtYWRlLiBVc2VkIHRvIGVuc3VyZSB0aGF0IHRva2VuIGV4cGlyYXRpb24gaXMgbm90IGNhbGN1bGF0ZWQgaW5jb3JyZWN0bHkuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBMaWJyYXJ5U3RhdGVPYmplY3QgPSB7XHJcbiAgICBpZDogc3RyaW5nLFxyXG4gICAgdHM6IG51bWJlclxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgd2hpY2ggZGVmaW5lcyB0aGUgc3RyaW5naWZpZWQgYW5kIGVuY29kZWQgb2JqZWN0IHNlbnQgdG8gdGhlIHNlcnZpY2UgaW4gdGhlIGF1dGhvcml6ZSByZXF1ZXN0LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmVxdWVzdFN0YXRlT2JqZWN0ID0ge1xyXG4gICAgdXNlclJlcXVlc3RTdGF0ZTogc3RyaW5nLFxyXG4gICAgbGlicmFyeVN0YXRlOiBMaWJyYXJ5U3RhdGVPYmplY3RcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB3aGljaCBwcm92aWRlcyBoZWxwZXJzIGZvciBPQXV0aCAyLjAgcHJvdG9jb2wgc3BlY2lmaWMgdmFsdWVzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUHJvdG9jb2xVdGlscyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBlbmRzIHVzZXIgc3RhdGUgd2l0aCByYW5kb20gZ3VpZCwgb3IgcmV0dXJucyByYW5kb20gZ3VpZC5cclxuICAgICAqIEBwYXJhbSB1c2VyU3RhdGUgXHJcbiAgICAgKiBAcGFyYW0gcmFuZG9tR3VpZCBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNldFJlcXVlc3RTdGF0ZSh1c2VyU3RhdGU6IHN0cmluZywgY3J5cHRvT2JqOiBJQ3J5cHRvKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBsaWJyYXJ5U3RhdGUgPSBQcm90b2NvbFV0aWxzLmdlbmVyYXRlTGlicmFyeVN0YXRlKGNyeXB0b09iaik7XHJcbiAgICAgICAgcmV0dXJuICFTdHJpbmdVdGlscy5pc0VtcHR5KHVzZXJTdGF0ZSkgPyBgJHtsaWJyYXJ5U3RhdGV9JHtDb25zdGFudHMuUkVTT1VSQ0VfREVMSU19JHt1c2VyU3RhdGV9YCA6IGxpYnJhcnlTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlcyB0aGUgc3RhdGUgdmFsdWUgdXNlZCBieSB0aGUgbGlicmFyeS5cclxuICAgICAqIEBwYXJhbSByYW5kb21HdWlkIFxyXG4gICAgICogQHBhcmFtIGNyeXB0b09iaiBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdlbmVyYXRlTGlicmFyeVN0YXRlKGNyeXB0b09iajogSUNyeXB0byk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCFjcnlwdG9PYmopIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU5vQ3J5cHRvT2JqZWN0RXJyb3IoXCJnZW5lcmF0ZUxpYnJhcnlTdGF0ZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhIHN0YXRlIG9iamVjdCBjb250YWluaW5nIGEgdW5pcXVlIGlkIGFuZCB0aGUgdGltZXN0YW1wIG9mIHRoZSByZXF1ZXN0IGNyZWF0aW9uXHJcbiAgICAgICAgY29uc3Qgc3RhdGVPYmo6IExpYnJhcnlTdGF0ZU9iamVjdCA9IHtcclxuICAgICAgICAgICAgaWQ6IGNyeXB0b09iai5jcmVhdGVOZXdHdWlkKCksXHJcbiAgICAgICAgICAgIHRzOiBUaW1lVXRpbHMubm93U2Vjb25kcygpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhdGVTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShzdGF0ZU9iaik7XHJcblxyXG4gICAgICAgIHJldHVybiBjcnlwdG9PYmouYmFzZTY0RW5jb2RlKHN0YXRlU3RyaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhcnNlcyB0aGUgc3RhdGUgaW50byB0aGUgUmVxdWVzdFN0YXRlT2JqZWN0LCB3aGljaCBjb250YWlucyB0aGUgTGlicmFyeVN0YXRlIGluZm8gYW5kIHRoZSBzdGF0ZSBwYXNzZWQgYnkgdGhlIHVzZXIuXHJcbiAgICAgKiBAcGFyYW0gc3RhdGUgXHJcbiAgICAgKiBAcGFyYW0gY3J5cHRvT2JqIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcGFyc2VSZXF1ZXN0U3RhdGUoc3RhdGU6IHN0cmluZywgY3J5cHRvT2JqOiBJQ3J5cHRvKTogUmVxdWVzdFN0YXRlT2JqZWN0IHtcclxuICAgICAgICBpZiAoIWNyeXB0b09iaikge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTm9DcnlwdG9PYmplY3RFcnJvcihcInBhcnNlUmVxdWVzdFN0YXRlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoc3RhdGUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVJbnZhbGlkU3RhdGVFcnJvcihzdGF0ZSwgXCJOdWxsLCB1bmRlZmluZWQgb3IgZW1wdHkgc3RhdGVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBTcGxpdCB0aGUgc3RhdGUgYmV0d2VlbiBsaWJyYXJ5IHN0YXRlIGFuZCB1c2VyIHBhc3NlZCBzdGF0ZSBhbmQgZGVjb2RlIHRoZW0gc2VwYXJhdGVseVxyXG4gICAgICAgICAgICBjb25zdCBzcGxpdFN0YXRlID0gZGVjb2RlVVJJQ29tcG9uZW50KHN0YXRlKS5zcGxpdChDb25zdGFudHMuUkVTT1VSQ0VfREVMSU0pO1xyXG4gICAgICAgICAgICBjb25zdCBsaWJyYXJ5U3RhdGUgPSBzcGxpdFN0YXRlWzBdO1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyU3RhdGUgPSBzcGxpdFN0YXRlLmxlbmd0aCA+IDEgPyBzcGxpdFN0YXRlLnNsaWNlKDEpLmpvaW4oQ29uc3RhbnRzLlJFU09VUkNFX0RFTElNKSA6IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpYnJhcnlTdGF0ZVN0cmluZyA9IGNyeXB0b09iai5iYXNlNjREZWNvZGUobGlicmFyeVN0YXRlKTtcclxuICAgICAgICAgICAgY29uc3QgbGlicmFyeVN0YXRlT2JqID0gSlNPTi5wYXJzZShsaWJyYXJ5U3RhdGVTdHJpbmcpIGFzIExpYnJhcnlTdGF0ZU9iamVjdDtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHVzZXJSZXF1ZXN0U3RhdGU6ICFTdHJpbmdVdGlscy5pc0VtcHR5KHVzZXJTdGF0ZSkgPyB1c2VyU3RhdGUgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgbGlicmFyeVN0YXRlOiBsaWJyYXJ5U3RhdGVPYmpcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUludmFsaWRTdGF0ZUVycm9yKHN0YXRlLCBlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcbmltcG9ydCB7IFNlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlIH0gZnJvbSBcIi4uL3NlcnZlci9TZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZVwiO1xyXG5pbXBvcnQgeyBidWlsZENsaWVudEluZm8sIENsaWVudEluZm8gfSBmcm9tIFwiLi4vYWNjb3VudC9DbGllbnRJbmZvXCI7XHJcbmltcG9ydCB7IElDcnlwdG8gfSBmcm9tIFwiLi4vY3J5cHRvL0lDcnlwdG9cIjtcclxuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuLi91dGlscy9TdHJpbmdVdGlsc1wiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJBdXRob3JpemF0aW9uQ29kZVJlc3BvbnNlIH0gZnJvbSBcIi4uL3NlcnZlci9TZXJ2ZXJBdXRob3JpemF0aW9uQ29kZVJlc3BvbnNlXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi9sb2dnZXIvTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFNlcnZlckVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL1NlcnZlckVycm9yXCI7XHJcbmltcG9ydCB7IElkVG9rZW4gfSBmcm9tIFwiLi4vYWNjb3VudC9JZFRva2VuXCI7XHJcbmltcG9ydCB7IFNjb3BlU2V0IH0gZnJvbSBcIi4uL3JlcXVlc3QvU2NvcGVTZXRcIjtcclxuaW1wb3J0IHsgVGltZVV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1RpbWVVdGlsc1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJlc3VsdCB9IGZyb20gXCIuL0F1dGhlbnRpY2F0aW9uUmVzdWx0XCI7XHJcbmltcG9ydCB7IEFjY291bnRFbnRpdHkgfSBmcm9tIFwiLi4vY2FjaGUvZW50aXRpZXMvQWNjb3VudEVudGl0eVwiO1xyXG5pbXBvcnQgeyBBdXRob3JpdHkgfSBmcm9tIFwiLi4vYXV0aG9yaXR5L0F1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBBdXRob3JpdHlUeXBlIH0gZnJvbSBcIi4uL2F1dGhvcml0eS9BdXRob3JpdHlUeXBlXCI7XHJcbmltcG9ydCB7IElkVG9rZW5FbnRpdHkgfSBmcm9tIFwiLi4vY2FjaGUvZW50aXRpZXMvSWRUb2tlbkVudGl0eVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbkVudGl0eSB9IGZyb20gXCIuLi9jYWNoZS9lbnRpdGllcy9BY2Nlc3NUb2tlbkVudGl0eVwiO1xyXG5pbXBvcnQgeyBSZWZyZXNoVG9rZW5FbnRpdHkgfSBmcm9tIFwiLi4vY2FjaGUvZW50aXRpZXMvUmVmcmVzaFRva2VuRW50aXR5XCI7XHJcbmltcG9ydCB7IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBDYWNoZVJlY29yZCB9IGZyb20gXCIuLi9jYWNoZS9lbnRpdGllcy9DYWNoZVJlY29yZFwiO1xyXG5pbXBvcnQgeyBUcnVzdGVkQXV0aG9yaXR5IH0gZnJvbSBcIi4uL2F1dGhvcml0eS9UcnVzdGVkQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IENhY2hlTWFuYWdlciB9IGZyb20gXCIuLi9jYWNoZS9DYWNoZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgUHJvdG9jb2xVdGlscywgTGlicmFyeVN0YXRlT2JqZWN0LCBSZXF1ZXN0U3RhdGVPYmplY3QgfSBmcm9tIFwiLi4vdXRpbHMvUHJvdG9jb2xVdGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgaGFuZGxlcyByZXNwb25zZSBwYXJzaW5nLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlc3BvbnNlSGFuZGxlciB7XHJcbiAgICBwcml2YXRlIGNsaWVudElkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGNhY2hlU3RvcmFnZTogQ2FjaGVNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBjcnlwdG9PYmo6IElDcnlwdG87XHJcbiAgICBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyO1xyXG4gICAgcHJpdmF0ZSBjbGllbnRJbmZvOiBDbGllbnRJbmZvO1xyXG4gICAgcHJpdmF0ZSBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjbGllbnRJZDogc3RyaW5nLCBjYWNoZVN0b3JhZ2U6IENhY2hlTWFuYWdlciwgY3J5cHRvT2JqOiBJQ3J5cHRvLCBsb2dnZXI6IExvZ2dlcikge1xyXG4gICAgICAgIHRoaXMuY2xpZW50SWQgPSBjbGllbnRJZDtcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZSA9IGNhY2hlU3RvcmFnZTtcclxuICAgICAgICB0aGlzLmNyeXB0b09iaiA9IGNyeXB0b09iajtcclxuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHdoaWNoIHZhbGlkYXRlcyBzZXJ2ZXIgYXV0aG9yaXphdGlvbiBjb2RlIHJlc3BvbnNlLlxyXG4gICAgICogQHBhcmFtIHNlcnZlclJlc3BvbnNlSGFzaFxyXG4gICAgICogQHBhcmFtIGNhY2hlZFN0YXRlXHJcbiAgICAgKiBAcGFyYW0gY3J5cHRvT2JqXHJcbiAgICAgKi9cclxuICAgIHZhbGlkYXRlU2VydmVyQXV0aG9yaXphdGlvbkNvZGVSZXNwb25zZShzZXJ2ZXJSZXNwb25zZUhhc2g6IFNlcnZlckF1dGhvcml6YXRpb25Db2RlUmVzcG9uc2UsIGNhY2hlZFN0YXRlOiBzdHJpbmcsIGNyeXB0b09iajogSUNyeXB0byk6IHZvaWQge1xyXG4gICAgICAgIGlmIChzZXJ2ZXJSZXNwb25zZUhhc2guc3RhdGUgIT09IGNhY2hlZFN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVTdGF0ZU1pc21hdGNoRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGZvciBlcnJvclxyXG4gICAgICAgIGlmIChzZXJ2ZXJSZXNwb25zZUhhc2guZXJyb3IgfHwgc2VydmVyUmVzcG9uc2VIYXNoLmVycm9yX2Rlc2NyaXB0aW9uIHx8IHNlcnZlclJlc3BvbnNlSGFzaC5zdWJlcnJvcikge1xyXG4gICAgICAgICAgICBpZiAoSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvci5pc0ludGVyYWN0aW9uUmVxdWlyZWRFcnJvcihzZXJ2ZXJSZXNwb25zZUhhc2guZXJyb3IsIHNlcnZlclJlc3BvbnNlSGFzaC5lcnJvcl9kZXNjcmlwdGlvbiwgc2VydmVyUmVzcG9uc2VIYXNoLnN1YmVycm9yKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3Ioc2VydmVyUmVzcG9uc2VIYXNoLmVycm9yLCBzZXJ2ZXJSZXNwb25zZUhhc2guZXJyb3JfZGVzY3JpcHRpb24sIHNlcnZlclJlc3BvbnNlSGFzaC5zdWJlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZXJ2ZXJFcnJvcihzZXJ2ZXJSZXNwb25zZUhhc2guZXJyb3IsIHNlcnZlclJlc3BvbnNlSGFzaC5lcnJvcl9kZXNjcmlwdGlvbiwgc2VydmVyUmVzcG9uc2VIYXNoLnN1YmVycm9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXJ2ZXJSZXNwb25zZUhhc2guY2xpZW50X2luZm8pIHtcclxuICAgICAgICAgICAgYnVpbGRDbGllbnRJbmZvKHNlcnZlclJlc3BvbnNlSGFzaC5jbGllbnRfaW5mbywgY3J5cHRvT2JqKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB3aGljaCB2YWxpZGF0ZXMgc2VydmVyIGF1dGhvcml6YXRpb24gdG9rZW4gcmVzcG9uc2UuXHJcbiAgICAgKiBAcGFyYW0gc2VydmVyUmVzcG9uc2VcclxuICAgICAqL1xyXG4gICAgdmFsaWRhdGVUb2tlblJlc3BvbnNlKHNlcnZlclJlc3BvbnNlOiBTZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZSk6IHZvaWQge1xyXG4gICAgICAgIC8vIENoZWNrIGZvciBlcnJvclxyXG4gICAgICAgIGlmIChzZXJ2ZXJSZXNwb25zZS5lcnJvciB8fCBzZXJ2ZXJSZXNwb25zZS5lcnJvcl9kZXNjcmlwdGlvbiB8fCBzZXJ2ZXJSZXNwb25zZS5zdWJlcnJvcikge1xyXG4gICAgICAgICAgICBpZiAoSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvci5pc0ludGVyYWN0aW9uUmVxdWlyZWRFcnJvcihzZXJ2ZXJSZXNwb25zZS5lcnJvciwgc2VydmVyUmVzcG9uc2UuZXJyb3JfZGVzY3JpcHRpb24sIHNlcnZlclJlc3BvbnNlLnN1YmVycm9yKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3Ioc2VydmVyUmVzcG9uc2UuZXJyb3IsIHNlcnZlclJlc3BvbnNlLmVycm9yX2Rlc2NyaXB0aW9uLCBzZXJ2ZXJSZXNwb25zZS5zdWJlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVyclN0cmluZyA9IGAke3NlcnZlclJlc3BvbnNlLmVycm9yX2NvZGVzfSAtIFske3NlcnZlclJlc3BvbnNlLnRpbWVzdGFtcH1dOiAke3NlcnZlclJlc3BvbnNlLmVycm9yX2Rlc2NyaXB0aW9ufSAtIENvcnJlbGF0aW9uIElEOiAke3NlcnZlclJlc3BvbnNlLmNvcnJlbGF0aW9uX2lkfSAtIFRyYWNlIElEOiAke3NlcnZlclJlc3BvbnNlLnRyYWNlX2lkfWA7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZXJ2ZXJFcnJvcihzZXJ2ZXJSZXNwb25zZS5lcnJvciwgZXJyU3RyaW5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdlbmVyYXRlIGhvbWVBY2NvdW50SWRcclxuICAgICAgICBpZiAoc2VydmVyUmVzcG9uc2UuY2xpZW50X2luZm8pIHtcclxuICAgICAgICAgICAgdGhpcy5jbGllbnRJbmZvID0gYnVpbGRDbGllbnRJbmZvKHNlcnZlclJlc3BvbnNlLmNsaWVudF9pbmZvLCB0aGlzLmNyeXB0b09iaik7XHJcbiAgICAgICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLmNsaWVudEluZm8udWlkKSAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLmNsaWVudEluZm8udXRpZCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9tZUFjY291bnRJZGVudGlmaWVyID0gYCR7dGhpcy5jbGllbnRJbmZvLnVpZH0uJHt0aGlzLmNsaWVudEluZm8udXRpZH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIGNvbnN0cnVjdGVkIHRva2VuIHJlc3BvbnNlIGJhc2VkIG9uIGdpdmVuIHN0cmluZy4gQWxzbyBtYW5hZ2VzIHRoZSBjYWNoZSB1cGRhdGVzIGFuZCBjbGVhbnVwcy5cclxuICAgICAqIEBwYXJhbSBzZXJ2ZXJUb2tlblJlc3BvbnNlXHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXR5XHJcbiAgICAgKi9cclxuICAgIGhhbmRsZVNlcnZlclRva2VuUmVzcG9uc2Uoc2VydmVyVG9rZW5SZXNwb25zZTogU2VydmVyQXV0aG9yaXphdGlvblRva2VuUmVzcG9uc2UsIGF1dGhvcml0eTogQXV0aG9yaXR5LCBjYWNoZWROb25jZT86IHN0cmluZywgY2FjaGVkU3RhdGU/OiBzdHJpbmcpOiBBdXRoZW50aWNhdGlvblJlc3VsdCB7XHJcbiAgICAgICAgLy8gY3JlYXRlIGFuIGlkVG9rZW4gb2JqZWN0IChub3QgZW50aXR5KVxyXG4gICAgICAgIGNvbnN0IGlkVG9rZW5PYmogPSBuZXcgSWRUb2tlbihzZXJ2ZXJUb2tlblJlc3BvbnNlLmlkX3Rva2VuLCB0aGlzLmNyeXB0b09iaik7XHJcblxyXG4gICAgICAgIC8vIHRva2VuIG5vbmNlIGNoZWNrIChUT0RPOiBBZGQgYSB3YXJuaW5nIGlmIG5vIG5vbmNlIGlzIGdpdmVuPylcclxuICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkoY2FjaGVkTm9uY2UpKSB7XHJcbiAgICAgICAgICAgIGlmIChpZFRva2VuT2JqLmNsYWltcy5ub25jZSAhPT0gY2FjaGVkTm9uY2UpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVOb25jZU1pc21hdGNoRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2F2ZSB0aGUgcmVzcG9uc2UgdG9rZW5zXHJcbiAgICAgICAgbGV0IHJlcXVlc3RTdGF0ZU9iajogUmVxdWVzdFN0YXRlT2JqZWN0ID0gbnVsbDtcclxuICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkoY2FjaGVkU3RhdGUpKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RTdGF0ZU9iaiA9IFByb3RvY29sVXRpbHMucGFyc2VSZXF1ZXN0U3RhdGUoY2FjaGVkU3RhdGUsIHRoaXMuY3J5cHRvT2JqKTsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjYWNoZVJlY29yZCA9IHRoaXMuZ2VuZXJhdGVDYWNoZVJlY29yZChzZXJ2ZXJUb2tlblJlc3BvbnNlLCBpZFRva2VuT2JqLCBhdXRob3JpdHksIHJlcXVlc3RTdGF0ZU9iaiAmJiByZXF1ZXN0U3RhdGVPYmoubGlicmFyeVN0YXRlKTtcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zYXZlQ2FjaGVSZWNvcmQoY2FjaGVSZWNvcmQpO1xyXG5cclxuICAgICAgICByZXR1cm4gUmVzcG9uc2VIYW5kbGVyLmdlbmVyYXRlQXV0aGVudGljYXRpb25SZXN1bHQoY2FjaGVSZWNvcmQsIGlkVG9rZW5PYmosIGZhbHNlLCByZXF1ZXN0U3RhdGVPYmogPyByZXF1ZXN0U3RhdGVPYmoudXNlclJlcXVlc3RTdGF0ZSA6IG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIENhY2hlUmVjb3JkXHJcbiAgICAgKiBAcGFyYW0gc2VydmVyVG9rZW5SZXNwb25zZVxyXG4gICAgICogQHBhcmFtIGlkVG9rZW5PYmpcclxuICAgICAqIEBwYXJhbSBhdXRob3JpdHlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZUNhY2hlUmVjb3JkKHNlcnZlclRva2VuUmVzcG9uc2U6IFNlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlLCBpZFRva2VuT2JqOiBJZFRva2VuLCBhdXRob3JpdHk6IEF1dGhvcml0eSwgbGlicmFyeVN0YXRlPzogTGlicmFyeVN0YXRlT2JqZWN0KTogQ2FjaGVSZWNvcmQge1xyXG4gICAgICAgIC8vIEFjY291bnRcclxuICAgICAgICBjb25zdCBjYWNoZWRBY2NvdW50ICA9IHRoaXMuZ2VuZXJhdGVBY2NvdW50RW50aXR5KFxyXG4gICAgICAgICAgICBzZXJ2ZXJUb2tlblJlc3BvbnNlLFxyXG4gICAgICAgICAgICBpZFRva2VuT2JqLFxyXG4gICAgICAgICAgICBhdXRob3JpdHlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCByZXFFbnZpcm9ubWVudCA9IGF1dGhvcml0eS5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLkhvc3ROYW1lQW5kUG9ydDtcclxuICAgICAgICBjb25zdCBlbnYgPSBUcnVzdGVkQXV0aG9yaXR5LmdldENsb3VkRGlzY292ZXJ5TWV0YWRhdGEocmVxRW52aXJvbm1lbnQpID8gVHJ1c3RlZEF1dGhvcml0eS5nZXRDbG91ZERpc2NvdmVyeU1ldGFkYXRhKHJlcUVudmlyb25tZW50KS5wcmVmZXJyZWRfY2FjaGUgOiBcIlwiO1xyXG5cclxuICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShlbnYpKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVJbnZhbGlkQ2FjaGVFbnZpcm9ubWVudEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZFRva2VuXHJcbiAgICAgICAgY29uc3QgY2FjaGVkSWRUb2tlbiA9IElkVG9rZW5FbnRpdHkuY3JlYXRlSWRUb2tlbkVudGl0eShcclxuICAgICAgICAgICAgdGhpcy5ob21lQWNjb3VudElkZW50aWZpZXIsXHJcbiAgICAgICAgICAgIGVudixcclxuICAgICAgICAgICAgc2VydmVyVG9rZW5SZXNwb25zZS5pZF90b2tlbixcclxuICAgICAgICAgICAgdGhpcy5jbGllbnRJZCxcclxuICAgICAgICAgICAgaWRUb2tlbk9iai5jbGFpbXMudGlkXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gQWNjZXNzVG9rZW5cclxuICAgICAgICBjb25zdCByZXNwb25zZVNjb3BlcyA9IFNjb3BlU2V0LmZyb21TdHJpbmcoc2VydmVyVG9rZW5SZXNwb25zZS5zY29wZSk7XHJcblxyXG4gICAgICAgIC8vIEV4cGlyYXRpb24gY2FsY3VsYXRpb25cclxuICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IFRpbWVVdGlscy5ub3dTZWNvbmRzKCk7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSByZXF1ZXN0IHRpbWVzdGFtcCB3YXMgc2VudCBpbiB0aGUgbGlicmFyeSBzdGF0ZSwgdXNlIHRoYXQgdGltZXN0YW1wIHRvIGNhbGN1bGF0ZSBleHBpcmF0aW9uLiBPdGhlcndpc2UsIHVzZSBjdXJyZW50IHRpbWUuXHJcbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbGlicmFyeVN0YXRlID8gbGlicmFyeVN0YXRlLnRzIDogY3VycmVudFRpbWU7XHJcbiAgICAgICAgY29uc3QgdG9rZW5FeHBpcmF0aW9uU2Vjb25kcyA9IHRpbWVzdGFtcCArIHNlcnZlclRva2VuUmVzcG9uc2UuZXhwaXJlc19pbjtcclxuICAgICAgICBjb25zdCBleHRlbmRlZFRva2VuRXhwaXJhdGlvblNlY29uZHMgPSB0b2tlbkV4cGlyYXRpb25TZWNvbmRzICsgc2VydmVyVG9rZW5SZXNwb25zZS5leHRfZXhwaXJlc19pbjtcclxuXHJcbiAgICAgICAgY29uc3QgY2FjaGVkQWNjZXNzVG9rZW4gPSBBY2Nlc3NUb2tlbkVudGl0eS5jcmVhdGVBY2Nlc3NUb2tlbkVudGl0eShcclxuICAgICAgICAgICAgdGhpcy5ob21lQWNjb3VudElkZW50aWZpZXIsXHJcbiAgICAgICAgICAgIGVudixcclxuICAgICAgICAgICAgc2VydmVyVG9rZW5SZXNwb25zZS5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgIHRoaXMuY2xpZW50SWQsXHJcbiAgICAgICAgICAgIGlkVG9rZW5PYmouY2xhaW1zLnRpZCxcclxuICAgICAgICAgICAgcmVzcG9uc2VTY29wZXMucHJpbnRTY29wZXMoKSxcclxuICAgICAgICAgICAgdG9rZW5FeHBpcmF0aW9uU2Vjb25kcyxcclxuICAgICAgICAgICAgZXh0ZW5kZWRUb2tlbkV4cGlyYXRpb25TZWNvbmRzXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gcmVmcmVzaFRva2VuXHJcbiAgICAgICAgY29uc3QgY2FjaGVkUmVmcmVzaFRva2VuID0gUmVmcmVzaFRva2VuRW50aXR5LmNyZWF0ZVJlZnJlc2hUb2tlbkVudGl0eShcclxuICAgICAgICAgICAgdGhpcy5ob21lQWNjb3VudElkZW50aWZpZXIsXHJcbiAgICAgICAgICAgIGVudixcclxuICAgICAgICAgICAgc2VydmVyVG9rZW5SZXNwb25zZS5yZWZyZXNoX3Rva2VuLFxyXG4gICAgICAgICAgICB0aGlzLmNsaWVudElkLFxyXG4gICAgICAgICAgICBzZXJ2ZXJUb2tlblJlc3BvbnNlLmZvY2lcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IENhY2hlUmVjb3JkKGNhY2hlZEFjY291bnQsIGNhY2hlZElkVG9rZW4sIGNhY2hlZEFjY2Vzc1Rva2VuLCBjYWNoZWRSZWZyZXNoVG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgQWNjb3VudFxyXG4gICAgICogQHBhcmFtIHNlcnZlclRva2VuUmVzcG9uc2VcclxuICAgICAqIEBwYXJhbSBpZFRva2VuXHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXR5XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2VuZXJhdGVBY2NvdW50RW50aXR5KHNlcnZlclRva2VuUmVzcG9uc2U6IFNlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlLCBpZFRva2VuOiBJZFRva2VuLCBhdXRob3JpdHk6IEF1dGhvcml0eSk6IEFjY291bnRFbnRpdHkge1xyXG4gICAgICAgIGNvbnN0IGF1dGhvcml0eVR5cGUgPSBhdXRob3JpdHkuYXV0aG9yaXR5VHlwZTtcclxuXHJcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoc2VydmVyVG9rZW5SZXNwb25zZS5jbGllbnRfaW5mbykpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUNsaWVudEluZm9FbXB0eUVycm9yKHNlcnZlclRva2VuUmVzcG9uc2UuY2xpZW50X2luZm8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChhdXRob3JpdHlUeXBlID09PSBBdXRob3JpdHlUeXBlLkFkZnMpPyBcclxuICAgICAgICAgICAgQWNjb3VudEVudGl0eS5jcmVhdGVBREZTQWNjb3VudChhdXRob3JpdHksIGlkVG9rZW4pOiBcclxuICAgICAgICAgICAgQWNjb3VudEVudGl0eS5jcmVhdGVBY2NvdW50KHNlcnZlclRva2VuUmVzcG9uc2UuY2xpZW50X2luZm8sIGF1dGhvcml0eSwgaWRUb2tlbiwgdGhpcy5jcnlwdG9PYmopO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBAQXV0aGVudGljYXRpb25SZXN1bHQgZnJvbSBAQ2FjaGVSZWNvcmQgLCBASWRUb2tlbiAsIGFuZCBhIGJvb2xlYW4gdGhhdCBzdGF0ZXMgd2hldGhlciBvciBub3QgdGhlIHJlc3VsdCBpcyBmcm9tIGNhY2hlLlxyXG4gICAgICogXHJcbiAgICAgKiBPcHRpb25hbGx5IHRha2VzIGEgc3RhdGUgc3RyaW5nIHRoYXQgaXMgc2V0IGFzLWlzIGluIHRoZSByZXNwb25zZS5cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGNhY2hlUmVjb3JkIFxyXG4gICAgICogQHBhcmFtIGlkVG9rZW5PYmogXHJcbiAgICAgKiBAcGFyYW0gZnJvbVRva2VuQ2FjaGUgXHJcbiAgICAgKiBAcGFyYW0gc3RhdGVTdHJpbmcgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZW5lcmF0ZUF1dGhlbnRpY2F0aW9uUmVzdWx0KGNhY2hlUmVjb3JkOiBDYWNoZVJlY29yZCwgaWRUb2tlbk9iajogSWRUb2tlbiwgZnJvbVRva2VuQ2FjaGU6IGJvb2xlYW4sIHN0YXRlU3RyaW5nPzogc3RyaW5nKTogQXV0aGVudGljYXRpb25SZXN1bHQge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlU2NvcGVzID0gU2NvcGVTZXQuZnJvbVN0cmluZyhjYWNoZVJlY29yZC5hY2Nlc3NUb2tlbi50YXJnZXQpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVuaXF1ZUlkOiBpZFRva2VuT2JqLmNsYWltcy5vaWQgfHwgaWRUb2tlbk9iai5jbGFpbXMuc3ViLFxyXG4gICAgICAgICAgICB0ZW5hbnRJZDogaWRUb2tlbk9iai5jbGFpbXMudGlkLFxyXG4gICAgICAgICAgICBzY29wZXM6IHJlc3BvbnNlU2NvcGVzLmFzQXJyYXkoKSxcclxuICAgICAgICAgICAgYWNjb3VudDogY2FjaGVSZWNvcmQuYWNjb3VudC5nZXRBY2NvdW50SW5mbygpLFxyXG4gICAgICAgICAgICBpZFRva2VuOiBpZFRva2VuT2JqLnJhd0lkVG9rZW4sXHJcbiAgICAgICAgICAgIGlkVG9rZW5DbGFpbXM6IGlkVG9rZW5PYmouY2xhaW1zLFxyXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbjogY2FjaGVSZWNvcmQuYWNjZXNzVG9rZW4uc2VjcmV0LFxyXG4gICAgICAgICAgICBmcm9tQ2FjaGU6IGZyb21Ub2tlbkNhY2hlLFxyXG4gICAgICAgICAgICBleHBpcmVzT246IG5ldyBEYXRlKE51bWJlcihjYWNoZVJlY29yZC5hY2Nlc3NUb2tlbi5leHBpcmVzT24pICogMTAwMCksXHJcbiAgICAgICAgICAgIGV4dEV4cGlyZXNPbjogbmV3IERhdGUoTnVtYmVyKGNhY2hlUmVjb3JkLmFjY2Vzc1Rva2VuLmV4dGVuZGVkRXhwaXJlc09uKSAqIDEwMDApLFxyXG4gICAgICAgICAgICBmYW1pbHlJZDogY2FjaGVSZWNvcmQucmVmcmVzaFRva2VuLmZhbWlseUlkIHx8IG51bGwsXHJcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZVN0cmluZyB8fCBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuaW1wb3J0IHsgU2VydmVyQXV0aG9yaXphdGlvbkNvZGVSZXNwb25zZSB9IGZyb20gXCIuLi9zZXJ2ZXIvU2VydmVyQXV0aG9yaXphdGlvbkNvZGVSZXNwb25zZVwiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgSVVyaSB9IGZyb20gXCIuL0lVcmlcIjtcclxuaW1wb3J0IHsgQUFEQXV0aG9yaXR5Q29uc3RhbnRzIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIFVybCBvYmplY3QgY2xhc3Mgd2hpY2ggY2FuIHBlcmZvcm0gdmFyaW91cyB0cmFuc2Zvcm1hdGlvbnMgb24gdXJsIHN0cmluZ3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVXJsU3RyaW5nIHtcclxuXHJcbiAgICAvLyBpbnRlcm5hbCB1cmwgc3RyaW5nIGZpZWxkXHJcbiAgICBwcml2YXRlIF91cmxTdHJpbmc6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgdXJsU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VybFN0cmluZztcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl91cmxTdHJpbmcgPSB1cmw7XHJcbiAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuX3VybFN0cmluZykgJiYgU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLmdldEhhc2goKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fdXJsU3RyaW5nID0gdGhpcy5jYW5vbmljYWxpemVVcmkodXJsKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5fdXJsU3RyaW5nKSkge1xyXG4gICAgICAgICAgICAvLyBUaHJvd3MgZXJyb3IgaWYgdXJsIGlzIGVtcHR5XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVVcmxFbXB0eUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW5zdXJlIHVybHMgYXJlIGxvd2VyIGNhc2UgYW5kIGVuZCB3aXRoIGEgLyBjaGFyYWN0ZXIuXHJcbiAgICAgKiBAcGFyYW0gdXJsIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNhbm9uaWNhbGl6ZVVyaSh1cmw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1cmwgJiYgIXVybC5lbmRzV2l0aChcIi9cIikpIHtcclxuICAgICAgICAgICAgdXJsICs9IFwiL1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBpZiB1cmxTdHJpbmcgcGFzc2VkIGlzIG5vdCBhIHZhbGlkIGF1dGhvcml0eSBVUkkgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICB2YWxpZGF0ZUFzVXJpKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEF0dGVtcHRzIHRvIHBhcnNlIHVybCBmb3IgdXJpIGNvbXBvbmVudHNcclxuICAgICAgICBsZXQgY29tcG9uZW50cztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb21wb25lbnRzID0gdGhpcy5nZXRVcmxDb21wb25lbnRzKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlVXJsUGFyc2VFcnJvcihlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRocm93IGVycm9yIGlmIFVSSSBvciBwYXRoIHNlZ21lbnRzIGFyZSBub3QgcGFyc2VhYmxlLlxyXG4gICAgICAgIGlmICghY29tcG9uZW50cy5Ib3N0TmFtZUFuZFBvcnQgfHwgIWNvbXBvbmVudHMuUGF0aFNlZ21lbnRzIHx8IGNvbXBvbmVudHMuUGF0aFNlZ21lbnRzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVVybFBhcnNlRXJyb3IoYEdpdmVuIHVybCBzdHJpbmc6ICR7dGhpcy51cmxTdHJpbmd9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUaHJvdyBlcnJvciBpZiB1cmkgaXMgaW5zZWN1cmUuXHJcbiAgICAgICAgaWYoIWNvbXBvbmVudHMuUHJvdG9jb2wgfHwgY29tcG9uZW50cy5Qcm90b2NvbC50b0xvd2VyQ2FzZSgpICE9PSBcImh0dHBzOlwiKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnNlY3VyZUF1dGhvcml0eVVyaUVycm9yKHRoaXMudXJsU3RyaW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB0byByZW1vdmUgcXVlcnkgc3RyaW5nIHBhcmFtcyBmcm9tIHVybC4gUmV0dXJucyB0aGUgbmV3IHVybC5cclxuICAgICAqIEBwYXJhbSB1cmxcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKi9cclxuICAgIHVybFJlbW92ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcIihcXFxcJlwiICsgbmFtZSArIFwiPSlbXlxcJl0rXCIpO1xyXG4gICAgICAgIHRoaXMuX3VybFN0cmluZyA9IHRoaXMudXJsU3RyaW5nLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xyXG4gICAgICAgIC8vIG5hbWU9dmFsdWUmXHJcbiAgICAgICAgcmVnZXggPSBuZXcgUmVnRXhwKFwiKFwiICsgbmFtZSArIFwiPSlbXlxcJl0rJlwiKTtcclxuICAgICAgICB0aGlzLl91cmxTdHJpbmcgPSB0aGlzLnVybFN0cmluZy5yZXBsYWNlKHJlZ2V4LCBcIlwiKTtcclxuICAgICAgICAvLyBuYW1lPXZhbHVlXHJcbiAgICAgICAgcmVnZXggPSBuZXcgUmVnRXhwKFwiKFwiICsgbmFtZSArIFwiPSlbXlxcJl0rXCIpO1xyXG4gICAgICAgIHRoaXMuX3VybFN0cmluZyA9IHRoaXMudXJsU3RyaW5nLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVybFN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdpdmVuIGEgdXJsIGxpa2UgaHR0cHM6Ly9hOmIvY29tbW9uL2Q/ZT1mI2csIGFuZCBhIHRlbmFudElkLCByZXR1cm5zIGh0dHBzOi8vYTpiL3RlbmFudElkL2RcclxuICAgICAqIEBwYXJhbSBocmVmIFRoZSB1cmxcclxuICAgICAqIEBwYXJhbSB0ZW5hbnRJZCBUaGUgdGVuYW50IGlkIHRvIHJlcGxhY2VcclxuICAgICAqL1xyXG4gICAgcmVwbGFjZVRlbmFudFBhdGgodGVuYW50SWQ6IHN0cmluZyk6IFVybFN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgdXJsT2JqZWN0ID0gdGhpcy5nZXRVcmxDb21wb25lbnRzKCk7XHJcbiAgICAgICAgY29uc3QgcGF0aEFycmF5ID0gdXJsT2JqZWN0LlBhdGhTZWdtZW50cztcclxuICAgICAgICBpZiAodGVuYW50SWQgJiYgKHBhdGhBcnJheS5sZW5ndGggIT09IDAgJiYgKHBhdGhBcnJheVswXSA9PT0gQUFEQXV0aG9yaXR5Q29uc3RhbnRzLkNPTU1PTiB8fCBwYXRoQXJyYXlbMF0gPT09IEFBREF1dGhvcml0eUNvbnN0YW50cy5PUkdBTklaQVRJT05TKSkpIHtcclxuICAgICAgICAgICAgcGF0aEFycmF5WzBdID0gdGVuYW50SWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBVcmxTdHJpbmcuY29uc3RydWN0QXV0aG9yaXR5VXJpRnJvbU9iamVjdCh1cmxPYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgYW5jaG9yIHBhcnQoIykgb2YgdGhlIFVSTFxyXG4gICAgICovXHJcbiAgICBnZXRIYXNoKCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgaGFzaEluZGV4MSA9IHRoaXMudXJsU3RyaW5nLmluZGV4T2YoXCIjXCIpO1xyXG4gICAgICAgIGNvbnN0IGhhc2hJbmRleDIgPSB0aGlzLnVybFN0cmluZy5pbmRleE9mKFwiIy9cIik7XHJcbiAgICAgICAgaWYgKGhhc2hJbmRleDIgPiAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cmxTdHJpbmcuc3Vic3RyaW5nKGhhc2hJbmRleDIgKyAyKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGhhc2hJbmRleDEgPiAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cmxTdHJpbmcuc3Vic3RyaW5nKGhhc2hJbmRleDEgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGRlc2VyaWFsaXplZCBwb3J0aW9uIG9mIFVSTCBoYXNoXHJcbiAgICAgKi9cclxuICAgIGdldERlc2VyaWFsaXplZEhhc2g8VD4oKTogVCB7XHJcbiAgICAgICAgY29uc3QgaGFzaCA9IHRoaXMuZ2V0SGFzaCgpO1xyXG4gICAgICAgIGNvbnN0IGRlc2VyaWFsaXplZEhhc2g6IFQgPSBTdHJpbmdVdGlscy5xdWVyeVN0cmluZ1RvT2JqZWN0PFQ+KGhhc2gpO1xyXG4gICAgICAgIGlmICghZGVzZXJpYWxpemVkSGFzaCkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSGFzaE5vdERlc2VyaWFsaXplZEVycm9yKEpTT04uc3RyaW5naWZ5KGRlc2VyaWFsaXplZEhhc2gpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRlc2VyaWFsaXplZEhhc2g7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXJzZXMgb3V0IHRoZSBjb21wb25lbnRzIGZyb20gYSB1cmwgc3RyaW5nLlxyXG4gICAgICogQHJldHVybnMgQW4gb2JqZWN0IHdpdGggdGhlIHZhcmlvdXMgY29tcG9uZW50cy4gUGxlYXNlIGNhY2hlIHRoaXMgdmFsdWUgaW5zdGVkIG9mIGNhbGxpbmcgdGhpcyBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZSB1cmwuXHJcbiAgICAgKi9cclxuICAgIGdldFVybENvbXBvbmVudHMoKTogSVVyaSB7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vY3VydGlzei8xMTEzOWIyY2ZjYWVmNGEyNjFlMFxyXG4gICAgICAgIGNvbnN0IHJlZ0V4ID0gUmVnRXhwKFwiXigoW146Lz8jXSspOik/KC8vKFteLz8jXSopKT8oW14/I10qKShcXFxcPyhbXiNdKikpPygjKC4qKSk/XCIpO1xyXG5cclxuICAgICAgICAvLyBJZiB1cmwgc3RyaW5nIGRvZXMgbm90IG1hdGNoIHJlZ0V4LCB3ZSB0aHJvdyBhbiBlcnJvclxyXG4gICAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy51cmxTdHJpbmcubWF0Y2gocmVnRXgpO1xyXG4gICAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVVybFBhcnNlRXJyb3IoYEdpdmVuIHVybCBzdHJpbmc6ICR7dGhpcy51cmxTdHJpbmd9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVcmwgY29tcG9uZW50IG9iamVjdFxyXG4gICAgICAgIGNvbnN0IHVybENvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIFByb3RvY29sOiBtYXRjaFsxXSxcclxuICAgICAgICAgICAgSG9zdE5hbWVBbmRQb3J0OiBtYXRjaFs0XSxcclxuICAgICAgICAgICAgQWJzb2x1dGVQYXRoOiBtYXRjaFs1XVxyXG4gICAgICAgIH0gYXMgSVVyaTtcclxuXHJcbiAgICAgICAgbGV0IHBhdGhTZWdtZW50cyA9IHVybENvbXBvbmVudHMuQWJzb2x1dGVQYXRoLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICBwYXRoU2VnbWVudHMgPSBwYXRoU2VnbWVudHMuZmlsdGVyKCh2YWwpID0+IHZhbCAmJiB2YWwubGVuZ3RoID4gMCk7IC8vIHJlbW92ZSBlbXB0eSBlbGVtZW50c1xyXG4gICAgICAgIHVybENvbXBvbmVudHMuUGF0aFNlZ21lbnRzID0gcGF0aFNlZ21lbnRzO1xyXG4gICAgICAgIHJldHVybiB1cmxDb21wb25lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjb25zdHJ1Y3RBdXRob3JpdHlVcmlGcm9tT2JqZWN0KHVybE9iamVjdDogSVVyaSk6IFVybFN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVcmxTdHJpbmcodXJsT2JqZWN0LlByb3RvY29sICsgXCIvL1wiICsgdXJsT2JqZWN0Lkhvc3ROYW1lQW5kUG9ydCArIFwiL1wiICsgdXJsT2JqZWN0LlBhdGhTZWdtZW50cy5qb2luKFwiL1wiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgaGFzaCBvZiB0aGUgVVJMIHN0cmluZyBjb250YWlucyBrbm93biBwcm9wZXJ0aWVzXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBoYXNoQ29udGFpbnNLbm93blByb3BlcnRpZXModXJsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eSh1cmwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXJsU3RyaW5nID0gbmV3IFVybFN0cmluZyh1cmwpO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB1cmxTdHJpbmcuZ2V0RGVzZXJpYWxpemVkSGFzaDxTZXJ2ZXJBdXRob3JpemF0aW9uQ29kZVJlc3BvbnNlPigpO1xyXG4gICAgICAgIHJldHVybiAhIShcclxuICAgICAgICAgICAgcGFyYW1ldGVycy5jb2RlIHx8XHJcbiAgICAgICAgICAgIHBhcmFtZXRlcnMuZXJyb3JfZGVzY3JpcHRpb24gfHxcclxuICAgICAgICAgICAgcGFyYW1ldGVycy5lcnJvciB8fFxyXG4gICAgICAgICAgICBwYXJhbWV0ZXJzLnN0YXRlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEJhc2VDbGllbnQgfSBmcm9tIFwiLi9CYXNlQ2xpZW50XCI7XHJcbmltcG9ydCB7IEF1dGhvcml6YXRpb25VcmxSZXF1ZXN0IH0gZnJvbSBcIi4uL3JlcXVlc3QvQXV0aG9yaXphdGlvblVybFJlcXVlc3RcIjtcclxuaW1wb3J0IHsgQXV0aG9yaXphdGlvbkNvZGVSZXF1ZXN0IH0gZnJvbSBcIi4uL3JlcXVlc3QvQXV0aG9yaXphdGlvbkNvZGVSZXF1ZXN0XCI7XHJcbmltcG9ydCB7IEF1dGhvcml0eSB9IGZyb20gXCIuLi9hdXRob3JpdHkvQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IFJlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyIH0gZnJvbSBcIi4uL3NlcnZlci9SZXF1ZXN0UGFyYW1ldGVyQnVpbGRlclwiO1xyXG5pbXBvcnQgeyBHcmFudFR5cGUsIEFBRFNlcnZlclBhcmFtS2V5cyB9IGZyb20gXCIuLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9jb25maWcvQ2xpZW50Q29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZSB9IGZyb20gXCIuLi9zZXJ2ZXIvU2VydmVyQXV0aG9yaXphdGlvblRva2VuUmVzcG9uc2VcIjtcclxuaW1wb3J0IHsgTmV0d29ya1Jlc3BvbnNlIH0gZnJvbSBcIi4uL25ldHdvcmsvTmV0d29ya01hbmFnZXJcIjtcclxuaW1wb3J0IHsgU2NvcGVTZXQgfSBmcm9tIFwiLi4vcmVxdWVzdC9TY29wZVNldFwiO1xyXG5pbXBvcnQgeyBSZXNwb25zZUhhbmRsZXIgfSBmcm9tIFwiLi4vcmVzcG9uc2UvUmVzcG9uc2VIYW5kbGVyXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUmVzdWx0IH0gZnJvbSBcIi4uL3Jlc3BvbnNlL0F1dGhlbnRpY2F0aW9uUmVzdWx0XCI7XHJcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1N0cmluZ1V0aWxzXCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgVXJsU3RyaW5nIH0gZnJvbSBcIi4uL3VybC9VcmxTdHJpbmdcIjtcclxuaW1wb3J0IHsgU2VydmVyQXV0aG9yaXphdGlvbkNvZGVSZXNwb25zZSB9IGZyb20gXCIuLi9zZXJ2ZXIvU2VydmVyQXV0aG9yaXphdGlvbkNvZGVSZXNwb25zZVwiO1xyXG5pbXBvcnQgeyBBY2NvdW50RW50aXR5IH0gZnJvbSBcIi4uL2NhY2hlL2VudGl0aWVzL0FjY291bnRFbnRpdHlcIjtcclxuaW1wb3J0IHsgRW5kU2Vzc2lvblJlcXVlc3QgfSBmcm9tIFwiLi4vcmVxdWVzdC9FbmRTZXNzaW9uUmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XHJcblxyXG4vKipcclxuICogT2F1dGgyLjAgQXV0aG9yaXphdGlvbiBDb2RlIGNsaWVudFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEF1dGhvcml6YXRpb25Db2RlQ2xpZW50IGV4dGVuZHMgQmFzZUNsaWVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbjogQ2xpZW50Q29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGUgVVJMIG9mIHRoZSBhdXRob3JpemF0aW9uIHJlcXVlc3QgbGV0dGluZyB0aGUgdXNlciBpbnB1dCBjcmVkZW50aWFscyBhbmQgY29uc2VudCB0byB0aGVcclxuICAgICAqIGFwcGxpY2F0aW9uLiBUaGUgVVJMIHRhcmdldCB0aGUgL2F1dGhvcml6ZSBlbmRwb2ludCBvZiB0aGUgYXV0aG9yaXR5IGNvbmZpZ3VyZWQgaW4gdGhlXHJcbiAgICAgKiBhcHBsaWNhdGlvbiBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogT25jZSB0aGUgdXNlciBpbnB1dHMgdGhlaXIgY3JlZGVudGlhbHMgYW5kIGNvbnNlbnRzLCB0aGUgYXV0aG9yaXR5IHdpbGwgc2VuZCBhIHJlc3BvbnNlIHRvIHRoZSByZWRpcmVjdCBVUklcclxuICAgICAqIHNlbnQgaW4gdGhlIHJlcXVlc3QgYW5kIHNob3VsZCBjb250YWluIGFuIGF1dGhvcml6YXRpb24gY29kZSwgd2hpY2ggY2FuIHRoZW4gYmUgdXNlZCB0byBhY3F1aXJlIHRva2VucyB2aWFcclxuICAgICAqIGFjcXVpcmVUb2tlbihBdXRob3JpemF0aW9uQ29kZVJlcXVlc3QpXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBhc3luYyBnZXRBdXRoQ29kZVVybChyZXF1ZXN0OiBBdXRob3JpemF0aW9uVXJsUmVxdWVzdCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSB0aGlzLmNyZWF0ZUF1dGhDb2RlVXJsUXVlcnlTdHJpbmcocmVxdWVzdCk7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuYXV0aG9yaXR5LmF1dGhvcml6YXRpb25FbmRwb2ludH0/JHtxdWVyeVN0cmluZ31gO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQVBJIHRvIGFjcXVpcmUgYSB0b2tlbiBpbiBleGNoYW5nZSBvZiAnYXV0aG9yaXphdGlvbl9jb2RlYCBhY3F1aXJlZCBieSB0aGUgdXNlciBpbiB0aGUgZmlyc3QgbGVnIG9mIHRoZVxyXG4gICAgICogYXV0aG9yaXphdGlvbl9jb2RlX2dyYW50XHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBhc3luYyBhY3F1aXJlVG9rZW4ocmVxdWVzdDogQXV0aG9yaXphdGlvbkNvZGVSZXF1ZXN0LCBjYWNoZWROb25jZT86IHN0cmluZywgY2FjaGVkU3RhdGU/OiBzdHJpbmcpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uUmVzdWx0PiB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcImluIGFjcXVpcmVUb2tlbiBjYWxsXCIpO1xyXG4gICAgICAgIC8vIElmIG5vIGNvZGUgcmVzcG9uc2UgaXMgZ2l2ZW4sIHdlIGNhbm5vdCBhY3F1aXJlIGEgdG9rZW4uXHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0IHx8IFN0cmluZ1V0aWxzLmlzRW1wdHkocmVxdWVzdC5jb2RlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlVG9rZW5SZXF1ZXN0Q2Fubm90QmVNYWRlRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5leGVjdXRlVG9rZW5SZXF1ZXN0KHRoaXMuYXV0aG9yaXR5LCByZXF1ZXN0KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VIYW5kbGVyID0gbmV3IFJlc3BvbnNlSGFuZGxlcihcclxuICAgICAgICAgICAgdGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50SWQsXHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVNYW5hZ2VyLFxyXG4gICAgICAgICAgICB0aGlzLmNyeXB0b1V0aWxzLFxyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIFZhbGlkYXRlIHJlc3BvbnNlLiBUaGlzIGZ1bmN0aW9uIHRocm93cyBhIHNlcnZlciBlcnJvciBpZiBhbiBlcnJvciBpcyByZXR1cm5lZCBieSB0aGUgc2VydmVyLlxyXG4gICAgICAgIHJlc3BvbnNlSGFuZGxlci52YWxpZGF0ZVRva2VuUmVzcG9uc2UocmVzcG9uc2UuYm9keSk7XHJcbiAgICAgICAgY29uc3QgdG9rZW5SZXNwb25zZSA9IHJlc3BvbnNlSGFuZGxlci5oYW5kbGVTZXJ2ZXJUb2tlblJlc3BvbnNlKHJlc3BvbnNlLmJvZHksIHRoaXMuYXV0aG9yaXR5LCBjYWNoZWROb25jZSwgY2FjaGVkU3RhdGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdG9rZW5SZXNwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdGhlIGhhc2ggZnJhZ21lbnQgcmVzcG9uc2UgZnJvbSBwdWJsaWMgY2xpZW50IGNvZGUgcmVxdWVzdC4gUmV0dXJucyBhIGNvZGUgcmVzcG9uc2UgdXNlZCBieVxyXG4gICAgICogdGhlIGNsaWVudCB0byBleGNoYW5nZSBmb3IgYSB0b2tlbiBpbiBhY3F1aXJlVG9rZW4uXHJcbiAgICAgKiBAcGFyYW0gaGFzaEZyYWdtZW50XHJcbiAgICAgKi9cclxuICAgIGhhbmRsZUZyYWdtZW50UmVzcG9uc2UoaGFzaEZyYWdtZW50OiBzdHJpbmcsIGNhY2hlZFN0YXRlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIEhhbmRsZSByZXNwb25zZXMuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VIYW5kbGVyID0gbmV3IFJlc3BvbnNlSGFuZGxlcih0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZCwgdGhpcy5jYWNoZU1hbmFnZXIsIHRoaXMuY3J5cHRvVXRpbHMsIHRoaXMubG9nZ2VyKTtcclxuICAgICAgICAvLyBEZXNlcmlhbGl6ZSBoYXNoIGZyYWdtZW50IHJlc3BvbnNlIHBhcmFtZXRlcnMuXHJcbiAgICAgICAgY29uc3QgaGFzaFVybFN0cmluZyA9IG5ldyBVcmxTdHJpbmcoaGFzaEZyYWdtZW50KTtcclxuICAgICAgICBjb25zdCBzZXJ2ZXJQYXJhbXMgPSBoYXNoVXJsU3RyaW5nLmdldERlc2VyaWFsaXplZEhhc2g8U2VydmVyQXV0aG9yaXphdGlvbkNvZGVSZXNwb25zZT4oKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IGNvZGUgcmVzcG9uc2VcclxuICAgICAgICByZXNwb25zZUhhbmRsZXIudmFsaWRhdGVTZXJ2ZXJBdXRob3JpemF0aW9uQ29kZVJlc3BvbnNlKHNlcnZlclBhcmFtcywgY2FjaGVkU3RhdGUsIHRoaXMuY3J5cHRvVXRpbHMpO1xyXG4gICAgICAgIHJldHVybiBzZXJ2ZXJQYXJhbXMuY29kZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZSB0byBsb2cgb3V0IHRoZSBjdXJyZW50IHVzZXIsIGFuZCByZWRpcmVjdCB0aGUgdXNlciB0byB0aGUgcG9zdExvZ291dFJlZGlyZWN0VXJpLlxyXG4gICAgICogRGVmYXVsdCBiZWhhdmlvdXIgaXMgdG8gcmVkaXJlY3QgdGhlIHVzZXIgdG8gYHdpbmRvdy5sb2NhdGlvbi5ocmVmYC5cclxuICAgICAqIEBwYXJhbSBhdXRob3JpdHlVcmlcclxuICAgICAqL1xyXG4gICAgZ2V0TG9nb3V0VXJpKGxvZ291dFJlcXVlc3Q6IEVuZFNlc3Npb25SZXF1ZXN0KTogc3RyaW5nIHtcclxuICAgICAgICAvLyBUaHJvdyBlcnJvciBpZiBsb2dvdXRSZXF1ZXN0IGlzIG51bGwvdW5kZWZpbmVkXHJcbiAgICAgICAgaWYgKCFsb2dvdXRSZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVFbXB0eUxvZ291dFJlcXVlc3RFcnJvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxvZ291dFJlcXVlc3QuYWNjb3VudCkge1xyXG4gICAgICAgICAgICAvLyBDbGVhciBnaXZlbiBhY2NvdW50LlxyXG4gICAgICAgICAgICB0aGlzLmNhY2hlTWFuYWdlci5yZW1vdmVBY2NvdW50KEFjY291bnRFbnRpdHkuZ2VuZXJhdGVBY2NvdW50Q2FjaGVLZXkobG9nb3V0UmVxdWVzdC5hY2NvdW50KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQ2xlYXIgYWxsIGFjY291bnRzIGFuZCB0b2tlbnNcclxuICAgICAgICAgICAgdGhpcy5jYWNoZU1hbmFnZXIuY2xlYXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEdldCBwb3N0TG9nb3V0UmVkaXJlY3RVcmkuXHJcbiAgICAgICAgY29uc3QgcG9zdExvZ291dFVyaVBhcmFtID0gbG9nb3V0UmVxdWVzdC5wb3N0TG9nb3V0UmVkaXJlY3RVcmkgPyBcclxuICAgICAgICAgICAgYD8ke0FBRFNlcnZlclBhcmFtS2V5cy5QT1NUX0xPR09VVF9VUkl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KGxvZ291dFJlcXVlc3QucG9zdExvZ291dFJlZGlyZWN0VXJpKX1gIDogXCJcIjtcclxuXHJcbiAgICAgICAgY29uc3QgY29ycmVsYXRpb25JZFBhcmFtID0gbG9nb3V0UmVxdWVzdC5jb3JyZWxhdGlvbklkID8gXHJcbiAgICAgICAgICAgIGAmJHtBQURTZXJ2ZXJQYXJhbUtleXMuQ0xJRU5UX1JFUVVFU1RfSUR9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KGxvZ291dFJlcXVlc3QuY29ycmVsYXRpb25JZCl9YCA6IFwiXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ29uc3RydWN0IGxvZ291dCBVUkkuXHJcbiAgICAgICAgY29uc3QgbG9nb3V0VXJpID0gYCR7dGhpcy5hdXRob3JpdHkuZW5kU2Vzc2lvbkVuZHBvaW50fSR7cG9zdExvZ291dFVyaVBhcmFtfSR7Y29ycmVsYXRpb25JZFBhcmFtfWA7XHJcbiAgICAgICAgcmV0dXJuIGxvZ291dFVyaTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4ZWN1dGVzIFBPU1QgcmVxdWVzdCB0byB0b2tlbiBlbmRwb2ludFxyXG4gICAgICogQHBhcmFtIGF1dGhvcml0eVxyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBleGVjdXRlVG9rZW5SZXF1ZXN0KGF1dGhvcml0eTogQXV0aG9yaXR5LCByZXF1ZXN0OiBBdXRob3JpemF0aW9uQ29kZVJlcXVlc3QpOiBQcm9taXNlPE5ldHdvcmtSZXNwb25zZTxTZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZT4+IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHRoaXMuY3JlYXRlVG9rZW5SZXF1ZXN0Qm9keShyZXF1ZXN0KTtcclxuICAgICAgICBjb25zdCBoZWFkZXJzOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gdGhpcy5jcmVhdGVEZWZhdWx0VG9rZW5SZXF1ZXN0SGVhZGVycygpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlUG9zdFRvVG9rZW5FbmRwb2ludChhdXRob3JpdHkudG9rZW5FbmRwb2ludCwgcmVxdWVzdEJvZHksIGhlYWRlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIGEgbWFwIGZvciBhbGwgdGhlIHBhcmFtcyB0byBiZSBzZW50IHRvIHRoZSBzZXJ2aWNlXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVRva2VuUmVxdWVzdEJvZHkocmVxdWVzdDogQXV0aG9yaXphdGlvbkNvZGVSZXF1ZXN0KTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBwYXJhbWV0ZXJCdWlsZGVyID0gbmV3IFJlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyKCk7XHJcblxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkQ2xpZW50SWQodGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50SWQpO1xyXG5cclxuICAgICAgICAvLyB2YWxpZGF0ZSB0aGUgcmVkaXJlY3RVcmkgKHRvIGJlIGEgbm9uIG51bGwgdmFsdWUpXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRSZWRpcmVjdFVyaShyZXF1ZXN0LnJlZGlyZWN0VXJpKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2NvcGVTZXQgPSBuZXcgU2NvcGVTZXQocmVxdWVzdC5zY29wZXMgfHwgW10pO1xyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkU2NvcGVzKHNjb3BlU2V0KTtcclxuXHJcbiAgICAgICAgLy8gYWRkIGNvZGU6IHVzZXIgc2V0LCBub3QgdmFsaWRhdGVkXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRBdXRob3JpemF0aW9uQ29kZShyZXF1ZXN0LmNvZGUpO1xyXG5cclxuICAgICAgICAvLyBhZGQgY29kZV92ZXJpZmllciBpZiBwYXNzZWRcclxuICAgICAgICBpZiAocmVxdWVzdC5jb2RlVmVyaWZpZXIpIHtcclxuICAgICAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDb2RlVmVyaWZpZXIocmVxdWVzdC5jb2RlVmVyaWZpZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRHcmFudFR5cGUoR3JhbnRUeXBlLkFVVEhPUklaQVRJT05fQ09ERV9HUkFOVCk7XHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDbGllbnRJbmZvKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvcnJlbGF0aW9uSWQgPSByZXF1ZXN0LmNvcnJlbGF0aW9uSWQgfHwgdGhpcy5jb25maWcuY3J5cHRvSW50ZXJmYWNlLmNyZWF0ZU5ld0d1aWQoKTtcclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENvcnJlbGF0aW9uSWQoY29ycmVsYXRpb25JZCk7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJCdWlsZGVyLmNyZWF0ZVF1ZXJ5U3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIEFQSSB2YWxpZGF0ZXMgdGhlIGBBdXRob3JpemF0aW9uQ29kZVVybFJlcXVlc3RgIGFuZCBjcmVhdGVzIGEgVVJMXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZUF1dGhDb2RlVXJsUXVlcnlTdHJpbmcocmVxdWVzdDogQXV0aG9yaXphdGlvblVybFJlcXVlc3QpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlckJ1aWxkZXIgPSBuZXcgUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXIoKTtcclxuXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDbGllbnRJZCh0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjb3BlU2V0ID0gbmV3IFNjb3BlU2V0KHJlcXVlc3Quc2NvcGVzIHx8IFtdKTtcclxuICAgICAgICBpZiAocmVxdWVzdC5leHRyYVNjb3Blc1RvQ29uc2VudCkge1xyXG4gICAgICAgICAgICBzY29wZVNldC5hcHBlbmRTY29wZXMocmVxdWVzdC5leHRyYVNjb3Blc1RvQ29uc2VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkU2NvcGVzKHNjb3BlU2V0KTtcclxuXHJcbiAgICAgICAgLy8gdmFsaWRhdGUgdGhlIHJlZGlyZWN0VXJpICh0byBiZSBhIG5vbiBudWxsIHZhbHVlKVxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkUmVkaXJlY3RVcmkocmVxdWVzdC5yZWRpcmVjdFVyaSk7XHJcblxyXG4gICAgICAgIC8vIGdlbmVyYXRlIHRoZSBjb3JyZWxhdGlvbklkIGlmIG5vdCBzZXQgYnkgdGhlIHVzZXIgYW5kIGFkZFxyXG4gICAgICAgIGNvbnN0IGNvcnJlbGF0aW9uSWQgPSByZXF1ZXN0LmNvcnJlbGF0aW9uSWQgfHwgdGhpcy5jb25maWcuY3J5cHRvSW50ZXJmYWNlLmNyZWF0ZU5ld0d1aWQoKTtcclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENvcnJlbGF0aW9uSWQoY29ycmVsYXRpb25JZCk7XHJcblxyXG4gICAgICAgIC8vIGFkZCByZXNwb25zZV9tb2RlLiBJZiBub3QgcGFzc2VkIGluIGl0IGRlZmF1bHRzIHRvIHF1ZXJ5LlxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkUmVzcG9uc2VNb2RlKHJlcXVlc3QucmVzcG9uc2VNb2RlKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIHJlc3BvbnNlX3R5cGUgPSBjb2RlXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRSZXNwb25zZVR5cGVDb2RlKCk7XHJcblxyXG4gICAgICAgIC8vIGFkZCBsaWJyYXJ5IGluZm8gcGFyYW1ldGVyc1xyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkTGlicmFyeUluZm8odGhpcy5jb25maWcubGlicmFyeUluZm8pO1xyXG5cclxuICAgICAgICAvLyBhZGQgY2xpZW50X2luZm89MVxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkQ2xpZW50SW5mbygpO1xyXG5cclxuICAgICAgICBpZiAocmVxdWVzdC5jb2RlQ2hhbGxlbmdlKSB7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkQ29kZUNoYWxsZW5nZVBhcmFtcyhyZXF1ZXN0LmNvZGVDaGFsbGVuZ2UsIHJlcXVlc3QuY29kZUNoYWxsZW5nZU1ldGhvZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVxdWVzdC5wcm9tcHQpIHtcclxuICAgICAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRQcm9tcHQocmVxdWVzdC5wcm9tcHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlcXVlc3QubG9naW5IaW50KSB7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkTG9naW5IaW50KHJlcXVlc3QubG9naW5IaW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXF1ZXN0LmRvbWFpbkhpbnQpIHtcclxuICAgICAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGREb21haW5IaW50KHJlcXVlc3QuZG9tYWluSGludCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVxdWVzdC5ub25jZSkge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZE5vbmNlKHJlcXVlc3Qubm9uY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlcXVlc3Quc3RhdGUpIHtcclxuICAgICAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRTdGF0ZShyZXF1ZXN0LnN0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXF1ZXN0LmNsYWltcykge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENsYWltcyhyZXF1ZXN0LmNsYWltcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVxdWVzdC5leHRyYVF1ZXJ5UGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZEV4dHJhUXVlcnlQYXJhbWV0ZXJzKHJlcXVlc3QuZXh0cmFRdWVyeVBhcmFtZXRlcnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcmFtZXRlckJ1aWxkZXIuY3JlYXRlUXVlcnlTdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERldmljZUNvZGVSZXNwb25zZSwgU2VydmVyRGV2aWNlQ29kZVJlc3BvbnNlIH0gZnJvbSBcIi4uL3Jlc3BvbnNlL0RldmljZUNvZGVSZXNwb25zZVwiO1xyXG5pbXBvcnQgeyBCYXNlQ2xpZW50IH0gZnJvbSBcIi4vQmFzZUNsaWVudFwiO1xyXG5pbXBvcnQgeyBEZXZpY2VDb2RlUmVxdWVzdCB9IGZyb20gXCIuLi9yZXF1ZXN0L0RldmljZUNvZGVSZXF1ZXN0XCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXIgfSBmcm9tIFwiLi4vc2VydmVyL1JlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cywgR3JhbnRUeXBlIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL2NvbmZpZy9DbGllbnRDb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IFRpbWVVdGlscyB9IGZyb20gXCIuLi91dGlscy9UaW1lVXRpbHNcIjtcclxuaW1wb3J0IHsgU2VydmVyQXV0aG9yaXphdGlvblRva2VuUmVzcG9uc2UgfSBmcm9tIFwiLi4vc2VydmVyL1NlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlXCI7XHJcbmltcG9ydCB7IFNjb3BlU2V0IH0gZnJvbSBcIi4uL3JlcXVlc3QvU2NvcGVTZXRcIjtcclxuXHJcbi8qKlxyXG4gKiBPQXV0aDIuMCBEZXZpY2UgY29kZSBjbGllbnRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBEZXZpY2VDb2RlQ2xpZW50IGV4dGVuZHMgQmFzZUNsaWVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbjogQ2xpZW50Q29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBkZXZpY2UgY29kZSBmcm9tIGRldmljZSBjb2RlIGVuZHBvaW50LCBjYWxscyBiYWNrIHRvIHdpdGggZGV2aWNlIGNvZGUgcmVzcG9uc2UsIGFuZFxyXG4gICAgICogcG9sbHMgdG9rZW4gZW5kcG9pbnQgdG8gZXhjaGFuZ2UgZGV2aWNlIGNvZGUgZm9yIHRva2Vuc1xyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGFjcXVpcmVUb2tlbihyZXF1ZXN0OiBEZXZpY2VDb2RlUmVxdWVzdCk6IFByb21pc2U8c3RyaW5nPiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGRldmljZUNvZGVSZXNwb25zZTogRGV2aWNlQ29kZVJlc3BvbnNlID0gYXdhaXQgdGhpcy5nZXREZXZpY2VDb2RlKHJlcXVlc3QpO1xyXG4gICAgICAgIHJlcXVlc3QuZGV2aWNlQ29kZUNhbGxiYWNrKGRldmljZUNvZGVSZXNwb25zZSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IFNlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlID0gYXdhaXQgdGhpcy5hY3F1aXJlVG9rZW5XaXRoRGV2aWNlQ29kZShcclxuICAgICAgICAgICAgcmVxdWVzdCxcclxuICAgICAgICAgICAgZGV2aWNlQ29kZVJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgLy8gVE9ETyBoYW5kbGUgcmVzcG9uc2VcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBkZXZpY2UgY29kZSByZXF1ZXN0IGFuZCBleGVjdXRlcyBodHRwIEdFVFxyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBnZXREZXZpY2VDb2RlKHJlcXVlc3Q6IERldmljZUNvZGVSZXF1ZXN0KTogUHJvbWlzZTxEZXZpY2VDb2RlUmVzcG9uc2U+IHtcclxuXHJcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSB0aGlzLmNyZWF0ZVF1ZXJ5U3RyaW5nKHJlcXVlc3QpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZURlZmF1bHRMaWJyYXJ5SGVhZGVycygpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlUG9zdFJlcXVlc3RUb0RldmljZUNvZGVFbmRwb2ludCh0aGlzLmF1dGhvcml0eS5kZXZpY2VDb2RlRW5kcG9pbnQsIHF1ZXJ5U3RyaW5nLCBoZWFkZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4ZWN1dGVzIFBPU1QgcmVxdWVzdCB0byBkZXZpY2UgY29kZSBlbmRwb2ludFxyXG4gICAgICogQHBhcmFtIGRldmljZUNvZGVFbmRwb2ludFxyXG4gICAgICogQHBhcmFtIHF1ZXJ5U3RyaW5nXHJcbiAgICAgKiBAcGFyYW0gaGVhZGVyc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIGV4ZWN1dGVQb3N0UmVxdWVzdFRvRGV2aWNlQ29kZUVuZHBvaW50KFxyXG4gICAgICAgIGRldmljZUNvZGVFbmRwb2ludDogc3RyaW5nLFxyXG4gICAgICAgIHF1ZXJ5U3RyaW5nOiBzdHJpbmcsXHJcbiAgICAgICAgaGVhZGVyczogTWFwPHN0cmluZywgc3RyaW5nPik6IFByb21pc2U8RGV2aWNlQ29kZVJlc3BvbnNlPiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgICAgICAgdXNlcl9jb2RlOiB1c2VyQ29kZSxcclxuICAgICAgICAgICAgICAgIGRldmljZV9jb2RlOiBkZXZpY2VDb2RlLFxyXG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uX3VyaTogdmVyaWZpY2F0aW9uVXJpLFxyXG4gICAgICAgICAgICAgICAgZXhwaXJlc19pbjogZXhwaXJlc0luLFxyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWwsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ID0gYXdhaXQgdGhpcy5uZXR3b3JrQ2xpZW50LnNlbmRQb3N0UmVxdWVzdEFzeW5jPFNlcnZlckRldmljZUNvZGVSZXNwb25zZT4oXHJcbiAgICAgICAgICAgIGRldmljZUNvZGVFbmRwb2ludCxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYm9keTogcXVlcnlTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VyQ29kZSxcclxuICAgICAgICAgICAgZGV2aWNlQ29kZSxcclxuICAgICAgICAgICAgdmVyaWZpY2F0aW9uVXJpLFxyXG4gICAgICAgICAgICBleHBpcmVzSW4sXHJcbiAgICAgICAgICAgIGludGVydmFsLFxyXG4gICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBkZXZpY2UgY29kZSBlbmRwb2ludCBxdWVyeSBwYXJhbWV0ZXJzIGFuZCByZXR1cm5zIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVF1ZXJ5U3RyaW5nKHJlcXVlc3Q6IERldmljZUNvZGVSZXF1ZXN0KTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgY29uc3QgcGFyYW1ldGVyQnVpbGRlcjogUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXIgPSBuZXcgUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2NvcGVTZXQgPSBuZXcgU2NvcGVTZXQocmVxdWVzdC5zY29wZXMgfHwgW10pO1xyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkU2NvcGVzKHNjb3BlU2V0KTtcclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENsaWVudElkKHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudElkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcmFtZXRlckJ1aWxkZXIuY3JlYXRlUXVlcnlTdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdG9rZW4gcmVxdWVzdCB3aXRoIGRldmljZSBjb2RlIHJlc3BvbnNlIGFuZCBwb2xscyB0b2tlbiBlbmRwb2ludCBhdCBpbnRlcnZhbCBzZXQgYnkgdGhlIGRldmljZSBjb2RlXHJcbiAgICAgKiByZXNwb25zZVxyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqIEBwYXJhbSBkZXZpY2VDb2RlUmVzcG9uc2VcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBhY3F1aXJlVG9rZW5XaXRoRGV2aWNlQ29kZShcclxuICAgICAgICByZXF1ZXN0OiBEZXZpY2VDb2RlUmVxdWVzdCxcclxuICAgICAgICBkZXZpY2VDb2RlUmVzcG9uc2U6IERldmljZUNvZGVSZXNwb25zZSk6IFByb21pc2U8U2VydmVyQXV0aG9yaXphdGlvblRva2VuUmVzcG9uc2U+IHtcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdEJvZHkgPSB0aGlzLmNyZWF0ZVRva2VuUmVxdWVzdEJvZHkocmVxdWVzdCwgZGV2aWNlQ29kZVJlc3BvbnNlKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJzOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gdGhpcy5jcmVhdGVEZWZhdWx0VG9rZW5SZXF1ZXN0SGVhZGVycygpO1xyXG5cclxuICAgICAgICBjb25zdCBkZXZpY2VDb2RlRXhwaXJhdGlvblRpbWUgPSBUaW1lVXRpbHMubm93U2Vjb25kcygpICsgZGV2aWNlQ29kZVJlc3BvbnNlLmV4cGlyZXNJbjtcclxuICAgICAgICBjb25zdCBwb2xsaW5nSW50ZXJ2YWxNaWxsaSA9IGRldmljZUNvZGVSZXNwb25zZS5pbnRlcnZhbCAqIDEwMDA7XHJcblxyXG4gICAgICAgIC8vIFBvbGwgdG9rZW4gZW5kcG9pbnQgd2hpbGUgKGRldmljZSBjb2RlIGlzIG5vdCBleHBpcmVkIEFORCBvcGVyYXRpb24gaGFzIG5vdCBiZWVuIGNhbmNlbGxlZCBieVxyXG4gICAgICAgIC8vIHNldHRpbmcgQ2FuY2VsbGF0aW9uVG9rZW4uY2FuY2VsID0gdHJ1ZSkuIFBPU1QgcmVxdWVzdCBpcyBzZW50IGF0IGludGVydmFsIHNldCBieSBwb2xsaW5nSW50ZXJ2YWxNaWxsaVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxTZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWxJZDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gPSBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LmNhbmNlbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJUb2tlbiByZXF1ZXN0IGNhbmNlbGxlZCBieSBzZXR0aW5nIERldmljZUNvZGVSZXF1ZXN0LmNhbmNlbCA9IHRydWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlRGV2aWNlQ29kZUNhbmNlbGxlZEVycm9yKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFRpbWVVdGlscy5ub3dTZWNvbmRzKCkgPiBkZXZpY2VDb2RlRXhwaXJhdGlvblRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYERldmljZSBjb2RlIGV4cGlyZWQuIEV4cGlyYXRpb24gdGltZSBvZiBkZXZpY2UgY29kZSB3YXMgJHtkZXZpY2VDb2RlRXhwaXJhdGlvblRpbWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlRGV2aWNlQ29kZUV4cGlyZWRFcnJvcigpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmV4ZWN1dGVQb3N0VG9Ub2tlbkVuZHBvaW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRob3JpdHkudG9rZW5FbmRwb2ludCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RCb2R5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVycyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuYm9keSAmJiByZXNwb25zZS5ib2R5LmVycm9yID09IENvbnN0YW50cy5BVVRIT1JJWkFUSU9OX1BFTkRJTkcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZXIgYXV0aG9yaXphdGlvbiBpcyBwZW5kaW5nLiBTbGVlcCBmb3IgcG9sbGluZyBpbnRlcnZhbCBhbmQgdHJ5IGFnYWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKHJlc3BvbnNlLmJvZHkuZXJyb3JfZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuYm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgcG9sbGluZ0ludGVydmFsTWlsbGkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBxdWVyeSBwYXJhbWV0ZXJzIGFuZCBjb252ZXJ0cyB0byBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICogQHBhcmFtIGRldmljZUNvZGVSZXNwb25zZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVRva2VuUmVxdWVzdEJvZHkocmVxdWVzdDogRGV2aWNlQ29kZVJlcXVlc3QsIGRldmljZUNvZGVSZXNwb25zZTogRGV2aWNlQ29kZVJlc3BvbnNlKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFBhcmFtZXRlcnM6IFJlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyID0gbmV3IFJlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjb3BlU2V0ID0gbmV3IFNjb3BlU2V0KHJlcXVlc3Quc2NvcGVzIHx8IFtdKTtcclxuICAgICAgICByZXF1ZXN0UGFyYW1ldGVycy5hZGRTY29wZXMoc2NvcGVTZXQpO1xyXG4gICAgICAgIHJlcXVlc3RQYXJhbWV0ZXJzLmFkZENsaWVudElkKHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudElkKTtcclxuICAgICAgICByZXF1ZXN0UGFyYW1ldGVycy5hZGRHcmFudFR5cGUoR3JhbnRUeXBlLkRFVklDRV9DT0RFX0dSQU5UKTtcclxuICAgICAgICByZXF1ZXN0UGFyYW1ldGVycy5hZGREZXZpY2VDb2RlKGRldmljZUNvZGVSZXNwb25zZS5kZXZpY2VDb2RlKTtcclxuICAgICAgICBjb25zdCBjb3JyZWxhdGlvbklkID0gcmVxdWVzdC5jb3JyZWxhdGlvbklkIHx8IHRoaXMuY29uZmlnLmNyeXB0b0ludGVyZmFjZS5jcmVhdGVOZXdHdWlkKCk7XHJcbiAgICAgICAgcmVxdWVzdFBhcmFtZXRlcnMuYWRkQ29ycmVsYXRpb25JZChjb3JyZWxhdGlvbklkKTtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdFBhcmFtZXRlcnMuY3JlYXRlUXVlcnlTdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vY29uZmlnL0NsaWVudENvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgQmFzZUNsaWVudCB9IGZyb20gXCIuL0Jhc2VDbGllbnRcIjtcclxuaW1wb3J0IHsgUmVmcmVzaFRva2VuUmVxdWVzdCB9IGZyb20gXCIuLi9yZXF1ZXN0L1JlZnJlc2hUb2tlblJlcXVlc3RcIjtcclxuaW1wb3J0IHsgQXV0aG9yaXR5LCBOZXR3b3JrUmVzcG9uc2UgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgU2VydmVyQXV0aG9yaXphdGlvblRva2VuUmVzcG9uc2UgfSBmcm9tIFwiLi4vc2VydmVyL1NlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlXCI7XHJcbmltcG9ydCB7IFJlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyIH0gZnJvbSBcIi4uL3NlcnZlci9SZXF1ZXN0UGFyYW1ldGVyQnVpbGRlclwiO1xyXG5pbXBvcnQgeyBTY29wZVNldCB9IGZyb20gXCIuLi9yZXF1ZXN0L1Njb3BlU2V0XCI7XHJcbmltcG9ydCB7IEdyYW50VHlwZSB9IGZyb20gXCIuLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgUmVzcG9uc2VIYW5kbGVyIH0gZnJvbSBcIi4uL3Jlc3BvbnNlL1Jlc3BvbnNlSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJlc3VsdCB9IGZyb20gXCIuLi9yZXNwb25zZS9BdXRoZW50aWNhdGlvblJlc3VsdFwiO1xyXG5cclxuLyoqXHJcbiAqIE9BdXRoMi4wIHJlZnJlc2ggdG9rZW4gY2xpZW50XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVmcmVzaFRva2VuQ2xpZW50IGV4dGVuZHMgQmFzZUNsaWVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbjogQ2xpZW50Q29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBhY3F1aXJlVG9rZW4ocmVxdWVzdDogUmVmcmVzaFRva2VuUmVxdWVzdCk6IFByb21pc2U8QXV0aGVudGljYXRpb25SZXN1bHQ+e1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5leGVjdXRlVG9rZW5SZXF1ZXN0KHJlcXVlc3QsIHRoaXMuYXV0aG9yaXR5KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VIYW5kbGVyID0gbmV3IFJlc3BvbnNlSGFuZGxlcihcclxuICAgICAgICAgICAgdGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50SWQsXHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVNYW5hZ2VyLFxyXG4gICAgICAgICAgICB0aGlzLmNyeXB0b1V0aWxzLFxyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJlc3BvbnNlSGFuZGxlci52YWxpZGF0ZVRva2VuUmVzcG9uc2UocmVzcG9uc2UuYm9keSk7XHJcbiAgICAgICAgY29uc3QgdG9rZW5SZXNwb25zZSA9IHJlc3BvbnNlSGFuZGxlci5oYW5kbGVTZXJ2ZXJUb2tlblJlc3BvbnNlKFxyXG4gICAgICAgICAgICByZXNwb25zZS5ib2R5LFxyXG4gICAgICAgICAgICB0aGlzLmF1dGhvcml0eVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB0b2tlblJlc3BvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZXhlY3V0ZVRva2VuUmVxdWVzdChyZXF1ZXN0OiBSZWZyZXNoVG9rZW5SZXF1ZXN0LCBhdXRob3JpdHk6IEF1dGhvcml0eSlcclxuICAgICAgICA6IFByb21pc2U8TmV0d29ya1Jlc3BvbnNlPFNlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlPj4ge1xyXG5cclxuICAgICAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHRoaXMuY3JlYXRlVG9rZW5SZXF1ZXN0Qm9keShyZXF1ZXN0KTtcclxuICAgICAgICBjb25zdCBoZWFkZXJzOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gdGhpcy5jcmVhdGVEZWZhdWx0VG9rZW5SZXF1ZXN0SGVhZGVycygpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlUG9zdFRvVG9rZW5FbmRwb2ludChhdXRob3JpdHkudG9rZW5FbmRwb2ludCwgcmVxdWVzdEJvZHksIGhlYWRlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlVG9rZW5SZXF1ZXN0Qm9keShyZXF1ZXN0OiBSZWZyZXNoVG9rZW5SZXF1ZXN0KTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBwYXJhbWV0ZXJCdWlsZGVyID0gbmV3IFJlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyKCk7XHJcblxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkQ2xpZW50SWQodGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50SWQpO1xyXG5cclxuICAgICAgICBjb25zdCBzY29wZVNldCA9IG5ldyBTY29wZVNldChyZXF1ZXN0LnNjb3BlcyB8fCBbXSk7XHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRTY29wZXMoc2NvcGVTZXQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkR3JhbnRUeXBlKEdyYW50VHlwZS5SRUZSRVNIX1RPS0VOX0dSQU5UKTtcclxuXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDbGllbnRJbmZvKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvcnJlbGF0aW9uSWQgPSByZXF1ZXN0LmNvcnJlbGF0aW9uSWQgfHwgdGhpcy5jb25maWcuY3J5cHRvSW50ZXJmYWNlLmNyZWF0ZU5ld0d1aWQoKTtcclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENvcnJlbGF0aW9uSWQoY29ycmVsYXRpb25JZCk7XHJcblxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkUmVmcmVzaFRva2VuKHJlcXVlc3QucmVmcmVzaFRva2VuKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcmFtZXRlckJ1aWxkZXIuY3JlYXRlUXVlcnlTdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEJhc2VDbGllbnQgfSBmcm9tIFwiLi9CYXNlQ2xpZW50XCI7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vY29uZmlnL0NsaWVudENvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgU2lsZW50Rmxvd1JlcXVlc3QgfSBmcm9tIFwiLi4vcmVxdWVzdC9TaWxlbnRGbG93UmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJlc3VsdCB9IGZyb20gXCIuLi9yZXNwb25zZS9BdXRoZW50aWNhdGlvblJlc3VsdFwiO1xyXG5pbXBvcnQgeyBDcmVkZW50aWFsVHlwZSB9IGZyb20gXCIuLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgSWRUb2tlbkVudGl0eSB9IGZyb20gXCIuLi9jYWNoZS9lbnRpdGllcy9JZFRva2VuRW50aXR5XCI7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuRW50aXR5IH0gZnJvbSBcIi4uL2NhY2hlL2VudGl0aWVzL0FjY2Vzc1Rva2VuRW50aXR5XCI7XHJcbmltcG9ydCB7IFJlZnJlc2hUb2tlbkVudGl0eSB9IGZyb20gXCIuLi9jYWNoZS9lbnRpdGllcy9SZWZyZXNoVG9rZW5FbnRpdHlcIjtcclxuaW1wb3J0IHsgU2NvcGVTZXQgfSBmcm9tIFwiLi4vcmVxdWVzdC9TY29wZVNldFwiO1xyXG5pbXBvcnQgeyBJZFRva2VuIH0gZnJvbSBcIi4uL2FjY291bnQvSWRUb2tlblwiO1xyXG5pbXBvcnQgeyBUaW1lVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvVGltZVV0aWxzXCI7XHJcbmltcG9ydCB7IFJlZnJlc2hUb2tlblJlcXVlc3QgfSBmcm9tIFwiLi4vcmVxdWVzdC9SZWZyZXNoVG9rZW5SZXF1ZXN0XCI7XHJcbmltcG9ydCB7IFJlZnJlc2hUb2tlbkNsaWVudCB9IGZyb20gXCIuL1JlZnJlc2hUb2tlbkNsaWVudFwiO1xyXG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XHJcbmltcG9ydCB7IENyZWRlbnRpYWxGaWx0ZXIsIENyZWRlbnRpYWxDYWNoZSB9IGZyb20gXCIuLi9jYWNoZS91dGlscy9DYWNoZVR5cGVzXCI7XHJcbmltcG9ydCB7IEFjY291bnRFbnRpdHkgfSBmcm9tIFwiLi4vY2FjaGUvZW50aXRpZXMvQWNjb3VudEVudGl0eVwiO1xyXG5pbXBvcnQgeyBDcmVkZW50aWFsRW50aXR5IH0gZnJvbSBcIi4uL2NhY2hlL2VudGl0aWVzL0NyZWRlbnRpYWxFbnRpdHlcIjtcclxuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xyXG5pbXBvcnQgeyBSZXNwb25zZUhhbmRsZXIgfSBmcm9tIFwiLi4vcmVzcG9uc2UvUmVzcG9uc2VIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2lsZW50Rmxvd0NsaWVudCBleHRlbmRzIEJhc2VDbGllbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb246IENsaWVudENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihjb25maWd1cmF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBhIHRva2VuIGZyb20gY2FjaGUgaWYgaXQgaXMgc3RpbGwgdmFsaWQsIG9yIHVzZXMgdGhlIGNhY2hlZCByZWZyZXNoIHRva2VuIHRvIHJlbmV3XHJcbiAgICAgKiB0aGUgZ2l2ZW4gdG9rZW4gYW5kIHJldHVybnMgdGhlIHJlbmV3ZWQgdG9rZW5cclxuICAgICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBhY3F1aXJlVG9rZW4ocmVxdWVzdDogU2lsZW50Rmxvd1JlcXVlc3QpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uUmVzdWx0PiB7XHJcbiAgICAgICAgLy8gQ2Fubm90IHJlbmV3IHRva2VuIGlmIG5vIHJlcXVlc3Qgb2JqZWN0IGlzIGdpdmVuLlxyXG4gICAgICAgIGlmICghcmVxdWVzdCkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlRW1wdHlUb2tlblJlcXVlc3RFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBXZSBjdXJyZW50bHkgZG8gbm90IHN1cHBvcnQgc2lsZW50IGZsb3cgZm9yIGFjY291bnQgPT09IG51bGwgdXNlIGNhc2VzOyBUaGlzIHdpbGwgYmUgcmV2aXNpdGVkIGZvciBjb25maWRlbnRpYWwgZmxvdyB1c2VjYXNlc1xyXG4gICAgICAgIGlmICghcmVxdWVzdC5hY2NvdW50KSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVOb0FjY291bnRJblNpbGVudFJlcXVlc3RFcnJvcigpO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RTY29wZXMgPSBuZXcgU2NvcGVTZXQocmVxdWVzdC5zY29wZXMgfHwgW10pO1xyXG4gICAgXHJcbiAgICAgICAgLy8gR2V0IGFjY291bnQgb2JqZWN0IGZvciB0aGlzIHJlcXVlc3QuXHJcbiAgICAgICAgY29uc3QgYWNjb3VudEtleTogc3RyaW5nID0gQWNjb3VudEVudGl0eS5nZW5lcmF0ZUFjY291bnRDYWNoZUtleShyZXF1ZXN0LmFjY291bnQpO1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZEFjY291bnQgPSB0aGlzLmNhY2hlTWFuYWdlci5nZXRBY2NvdW50KGFjY291bnRLZXkpO1xyXG5cclxuICAgICAgICBjb25zdCBob21lQWNjb3VudElkID0gY2FjaGVkQWNjb3VudC5ob21lQWNjb3VudElkO1xyXG4gICAgICAgIGNvbnN0IGVudmlyb25tZW50ID0gY2FjaGVkQWNjb3VudC5lbnZpcm9ubWVudDtcclxuXHJcbiAgICAgICAgLy8gR2V0IGN1cnJlbnQgY2FjaGVkIHRva2Vuc1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZEFjY2Vzc1Rva2VuID0gdGhpcy5yZWFkQWNjZXNzVG9rZW5Gcm9tQ2FjaGUoaG9tZUFjY291bnRJZCwgZW52aXJvbm1lbnQsIHJlcXVlc3RTY29wZXMsIGNhY2hlZEFjY291bnQucmVhbG0pO1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZFJlZnJlc2hUb2tlbiA9IHRoaXMucmVhZFJlZnJlc2hUb2tlbkZyb21DYWNoZShob21lQWNjb3VudElkLCBlbnZpcm9ubWVudCk7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIHJlZnJlc2ggaXMgZm9yY2VkLCBvciBpZiB0b2tlbnMgYXJlIGV4cGlyZWQuIElmIG5laXRoZXIgYXJlIHRydWUsIHJldHVybiBhIHRva2VuIHJlc3BvbnNlIHdpdGggdGhlIGZvdW5kIHRva2VuIGVudHJ5LlxyXG4gICAgICAgIGlmIChyZXF1ZXN0LmZvcmNlUmVmcmVzaCB8fCAhY2FjaGVkQWNjZXNzVG9rZW4gfHwgdGhpcy5pc1Rva2VuRXhwaXJlZChjYWNoZWRBY2Nlc3NUb2tlbi5leHBpcmVzT24pKSB7XHJcbiAgICAgICAgICAgIC8vIG5vIHJlZnJlc2ggVG9rZW5cclxuICAgICAgICAgICAgaWYgKCFjYWNoZWRSZWZyZXNoVG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVOb1Rva2Vuc0ZvdW5kRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVmcmVzaFRva2VuQ2xpZW50ID0gbmV3IFJlZnJlc2hUb2tlbkNsaWVudCh0aGlzLmNvbmZpZyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZnJlc2hUb2tlblJlcXVlc3Q6IFJlZnJlc2hUb2tlblJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5yZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgcmVmcmVzaFRva2VuOiBjYWNoZWRSZWZyZXNoVG9rZW4uc2VjcmV0XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVmcmVzaFRva2VuQ2xpZW50LmFjcXVpcmVUb2tlbihyZWZyZXNoVG9rZW5SZXF1ZXN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNhY2hlZElkVG9rZW4gPSB0aGlzLnJlYWRJZFRva2VuRnJvbUNhY2hlKGhvbWVBY2NvdW50SWQsIGVudmlyb25tZW50LCBjYWNoZWRBY2NvdW50LnJlYWxtKTtcclxuICAgICAgICBjb25zdCBpZFRva2VuT2JqID0gbmV3IElkVG9rZW4oY2FjaGVkSWRUb2tlbi5zZWNyZXQsIHRoaXMuY29uZmlnLmNyeXB0b0ludGVyZmFjZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBSZXNwb25zZUhhbmRsZXIuZ2VuZXJhdGVBdXRoZW50aWNhdGlvblJlc3VsdCh7XHJcbiAgICAgICAgICAgIGFjY291bnQ6IGNhY2hlZEFjY291bnQsXHJcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBjYWNoZWRBY2Nlc3NUb2tlbixcclxuICAgICAgICAgICAgaWRUb2tlbjogY2FjaGVkSWRUb2tlbixcclxuICAgICAgICAgICAgcmVmcmVzaFRva2VuOiBjYWNoZWRSZWZyZXNoVG9rZW5cclxuICAgICAgICB9LCBpZFRva2VuT2JqLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZldGNoZXMgaWRUb2tlbiBmcm9tIGNhY2hlIGlmIHByZXNlbnRcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZElkVG9rZW5Gcm9tQ2FjaGUoaG9tZUFjY291bnRJZDogc3RyaW5nLCBlbnZpcm9ubWVudDogc3RyaW5nLCBpbnB1dFJlYWxtOiBzdHJpbmcpOiBJZFRva2VuRW50aXR5IHtcclxuICAgICAgICBjb25zdCBpZFRva2VuS2V5OiBzdHJpbmcgPSBDcmVkZW50aWFsRW50aXR5LmdlbmVyYXRlQ3JlZGVudGlhbENhY2hlS2V5KFxyXG4gICAgICAgICAgICBob21lQWNjb3VudElkLFxyXG4gICAgICAgICAgICBlbnZpcm9ubWVudCxcclxuICAgICAgICAgICAgQ3JlZGVudGlhbFR5cGUuSURfVE9LRU4sXHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudElkLFxyXG4gICAgICAgICAgICBpbnB1dFJlYWxtXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZU1hbmFnZXIuZ2V0Q3JlZGVudGlhbChpZFRva2VuS2V5KSBhcyBJZFRva2VuRW50aXR5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZmV0Y2hlcyBhY2Nlc3NUb2tlbiBmcm9tIGNhY2hlIGlmIHByZXNlbnRcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICAgKiBAcGFyYW0gc2NvcGVzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZEFjY2Vzc1Rva2VuRnJvbUNhY2hlKGhvbWVBY2NvdW50SWQ6IHN0cmluZywgZW52aXJvbm1lbnQ6IHN0cmluZywgc2NvcGVzOiBTY29wZVNldCwgaW5wdXRSZWFsbTogc3RyaW5nKTogQWNjZXNzVG9rZW5FbnRpdHkge1xyXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuRmlsdGVyOiBDcmVkZW50aWFsRmlsdGVyID0ge1xyXG4gICAgICAgICAgICBob21lQWNjb3VudElkLFxyXG4gICAgICAgICAgICBlbnZpcm9ubWVudCxcclxuICAgICAgICAgICAgY3JlZGVudGlhbFR5cGU6IENyZWRlbnRpYWxUeXBlLkFDQ0VTU19UT0tFTixcclxuICAgICAgICAgICAgY2xpZW50SWQ6IHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudElkLFxyXG4gICAgICAgICAgICByZWFsbTogaW5wdXRSZWFsbSxcclxuICAgICAgICAgICAgdGFyZ2V0OiBzY29wZXMucHJpbnRTY29wZXMoKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbENhY2hlOiBDcmVkZW50aWFsQ2FjaGUgPSB0aGlzLmNhY2hlTWFuYWdlci5nZXRDcmVkZW50aWFsc0ZpbHRlcmVkQnkoYWNjZXNzVG9rZW5GaWx0ZXIpO1xyXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VucyA9IE9iamVjdC52YWx1ZXMoY3JlZGVudGlhbENhY2hlLmFjY2Vzc1Rva2Vucyk7XHJcbiAgICAgICAgaWYgKGFjY2Vzc1Rva2Vucy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IEZpZ3VyZSBvdXQgd2hhdCB0byB0aHJvdyBvciByZXR1cm4gaGVyZS5cclxuICAgICAgICB9IGVsc2UgaWYgKGFjY2Vzc1Rva2Vucy5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWNjZXNzVG9rZW5zWzBdIGFzIEFjY2Vzc1Rva2VuRW50aXR5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZmV0Y2hlcyByZWZyZXNoVG9rZW4gZnJvbSBjYWNoZSBpZiBwcmVzZW50XHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRSZWZyZXNoVG9rZW5Gcm9tQ2FjaGUoaG9tZUFjY291bnRJZDogc3RyaW5nLCBlbnZpcm9ubWVudDogc3RyaW5nKTogUmVmcmVzaFRva2VuRW50aXR5IHtcclxuICAgICAgICBjb25zdCByZWZyZXNoVG9rZW5LZXk6IHN0cmluZyA9IENyZWRlbnRpYWxFbnRpdHkuZ2VuZXJhdGVDcmVkZW50aWFsQ2FjaGVLZXkoXHJcbiAgICAgICAgICAgIGhvbWVBY2NvdW50SWQsXHJcbiAgICAgICAgICAgIGVudmlyb25tZW50LFxyXG4gICAgICAgICAgICBDcmVkZW50aWFsVHlwZS5SRUZSRVNIX1RPS0VOLFxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVNYW5hZ2VyLmdldENyZWRlbnRpYWwocmVmcmVzaFRva2VuS2V5KSBhcyBSZWZyZXNoVG9rZW5FbnRpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjaGVjayBpZiBhIHRva2VuIGlzIGV4cGlyZWQgYmFzZWQgb24gZ2l2ZW4gVVRDIHRpbWUgaW4gc2Vjb25kcy5cclxuICAgICAqIEBwYXJhbSBleHBpcmVzT25cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpc1Rva2VuRXhwaXJlZChleHBpcmVzT246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIGNoZWNrIGZvciBhY2Nlc3MgdG9rZW4gZXhwaXJ5XHJcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvblNlYyA9IE51bWJlcihleHBpcmVzT24pIHx8IDA7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0Q3VycmVudFRpbWVTZWMgPSBUaW1lVXRpbHMubm93U2Vjb25kcygpICsgdGhpcy5jb25maWcuc3lzdGVtT3B0aW9ucy50b2tlblJlbmV3YWxPZmZzZXRTZWNvbmRzO1xyXG5cclxuICAgICAgICAvLyBJZiBjdXJyZW50IHRpbWUgKyBvZmZzZXQgaXMgZ3JlYXRlciB0aGFuIHRva2VuIGV4cGlyYXRpb24gdGltZSwgdGhlbiB0b2tlbiBpcyBleHBpcmVkLlxyXG4gICAgICAgIHJldHVybiAob2Zmc2V0Q3VycmVudFRpbWVTZWMgPiBleHBpcmF0aW9uU2VjKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuaW1wb3J0IHsgQXV0aG9yaXR5VHlwZSB9IGZyb20gXCIuL0F1dGhvcml0eVR5cGVcIjtcclxuaW1wb3J0IHsgT3BlbklkQ29uZmlnUmVzcG9uc2UgfSBmcm9tIFwiLi9PcGVuSWRDb25maWdSZXNwb25zZVwiO1xyXG5pbXBvcnQgeyBVcmxTdHJpbmcgfSBmcm9tIFwiLi8uLi91cmwvVXJsU3RyaW5nXCI7XHJcbmltcG9ydCB7IElVcmkgfSBmcm9tIFwiLi8uLi91cmwvSVVyaVwiO1xyXG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi8uLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgSU5ldHdvcmtNb2R1bGUgfSBmcm9tIFwiLi8uLi9uZXR3b3JrL0lOZXR3b3JrTW9kdWxlXCI7XHJcbmltcG9ydCB7IE5ldHdvcmtSZXNwb25zZSB9IGZyb20gXCIuLy4uL25ldHdvcmsvTmV0d29ya01hbmFnZXJcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFRydXN0ZWRBdXRob3JpdHkgfSBmcm9tIFwiLi9UcnVzdGVkQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgYXV0aG9yaXR5IGNsYXNzIHZhbGlkYXRlcyB0aGUgYXV0aG9yaXR5IFVSSXMgdXNlZCBieSB0aGUgdXNlciwgYW5kIHJldHJpZXZlcyB0aGUgT3BlbklEIENvbmZpZ3VyYXRpb24gRGF0YSBmcm9tIHRoZVxyXG4gKiBlbmRwb2ludC4gSXQgd2lsbCBzdG9yZSB0aGUgcGVydGluZW50IGNvbmZpZyBkYXRhIGluIHRoaXMgb2JqZWN0IGZvciB1c2UgZHVyaW5nIHRva2VuIGNhbGxzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEF1dGhvcml0eSB7XHJcblxyXG4gICAgLy8gQ2Fub25pY2FsIGF1dGhvcml0eSB1cmwgc3RyaW5nXHJcbiAgICBwcml2YXRlIF9jYW5vbmljYWxBdXRob3JpdHk6IFVybFN0cmluZztcclxuICAgIC8vIENhbm9uaWNhbHkgYXV0aG9yaXR5IHVybCBjb21wb25lbnRzXHJcbiAgICBwcml2YXRlIF9jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzOiBJVXJpO1xyXG4gICAgLy8gVGVuYW50IGRpc2NvdmVyeSByZXNwb25zZSByZXRyaWV2ZWQgZnJvbSBPcGVuSUQgQ29uZmlndXJhdGlvbiBFbmRwb2ludFxyXG4gICAgcHJpdmF0ZSB0ZW5hbnREaXNjb3ZlcnlSZXNwb25zZTogT3BlbklkQ29uZmlnUmVzcG9uc2U7XHJcbiAgICAvLyBOZXR3b3JrIGludGVyZmFjZSB0byBtYWtlIHJlcXVlc3RzIHdpdGguXHJcbiAgICBwcm90ZWN0ZWQgbmV0d29ya0ludGVyZmFjZTogSU5ldHdvcmtNb2R1bGU7XHJcblxyXG4gICAgLy8gU2VlIGFib3ZlIGZvciBBdXRob3JpdHlUeXBlXHJcbiAgICBwdWJsaWMgZ2V0IGF1dGhvcml0eVR5cGUoKTogQXV0aG9yaXR5VHlwZSB7XHJcbiAgICAgICAgY29uc3QgcGF0aFNlZ21lbnRzID0gdGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLlBhdGhTZWdtZW50cztcclxuXHJcbiAgICAgICAgaWYgKHBhdGhTZWdtZW50cy5sZW5ndGggJiYgcGF0aFNlZ21lbnRzWzBdLnRvTG93ZXJDYXNlKCkgPT09IENvbnN0YW50cy5BREZTKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBBdXRob3JpdHlUeXBlLkFkZnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gQXV0aG9yaXR5VHlwZS5EZWZhdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgVVJMIHRoYXQgaXMgdGhlIGF1dGhvcml0eSBzZXQgYnkgdGhlIGRldmVsb3BlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNhbm9uaWNhbEF1dGhvcml0eSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYW5vbmljYWxBdXRob3JpdHkudXJsU3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBjYW5vbmljYWwgYXV0aG9yaXR5LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGNhbm9uaWNhbEF1dGhvcml0eSh1cmw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2Nhbm9uaWNhbEF1dGhvcml0eSA9IG5ldyBVcmxTdHJpbmcodXJsKTtcclxuICAgICAgICB0aGlzLl9jYW5vbmljYWxBdXRob3JpdHkudmFsaWRhdGVBc1VyaSgpO1xyXG4gICAgICAgIHRoaXMuX2Nhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGF1dGhvcml0eSBjb21wb25lbnRzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMoKTogSVVyaSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMgPSB0aGlzLl9jYW5vbmljYWxBdXRob3JpdHkuZ2V0VXJsQ29tcG9uZW50cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGVuYW50IGZvciBhdXRob3JpdHkuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgdGVuYW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cy5QYXRoU2VnbWVudHNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPQXV0aCAvYXV0aG9yaXplIGVuZHBvaW50IGZvciByZXF1ZXN0c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGF1dGhvcml6YXRpb25FbmRwb2ludCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmKHRoaXMuZGlzY292ZXJ5Q29tcGxldGUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlVGVuYW50KHRoaXMudGVuYW50RGlzY292ZXJ5UmVzcG9uc2UuYXV0aG9yaXphdGlvbl9lbmRwb2ludCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUVuZHBvaW50RGlzY292ZXJ5SW5jb21wbGV0ZUVycm9yKFwiRGlzY292ZXJ5IGluY29tcGxldGUuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9BdXRoIC90b2tlbiBlbmRwb2ludCBmb3IgcmVxdWVzdHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCB0b2tlbkVuZHBvaW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYodGhpcy5kaXNjb3ZlcnlDb21wbGV0ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2VUZW5hbnQodGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZS50b2tlbl9lbmRwb2ludCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUVuZHBvaW50RGlzY292ZXJ5SW5jb21wbGV0ZUVycm9yKFwiRGlzY292ZXJ5IGluY29tcGxldGUuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGRldmljZUNvZGVFbmRwb2ludCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmKHRoaXMuZGlzY292ZXJ5Q29tcGxldGUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZS50b2tlbl9lbmRwb2ludC5yZXBsYWNlKFwiL3Rva2VuXCIsIFwiL2RldmljZWNvZGVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUVuZHBvaW50RGlzY292ZXJ5SW5jb21wbGV0ZUVycm9yKFwiRGlzY292ZXJ5IGluY29tcGxldGUuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9BdXRoIGxvZ291dCBlbmRwb2ludCBmb3IgcmVxdWVzdHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBlbmRTZXNzaW9uRW5kcG9pbnQoKTogc3RyaW5nIHtcclxuICAgICAgICBpZih0aGlzLmRpc2NvdmVyeUNvbXBsZXRlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZVRlbmFudCh0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlLmVuZF9zZXNzaW9uX2VuZHBvaW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnREaXNjb3ZlcnlJbmNvbXBsZXRlRXJyb3IoXCJEaXNjb3ZlcnkgaW5jb21wbGV0ZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT0F1dGggaXNzdWVyIGZvciByZXF1ZXN0c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHNlbGZTaWduZWRKd3RBdWRpZW5jZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmKHRoaXMuZGlzY292ZXJ5Q29tcGxldGUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlVGVuYW50KHRoaXMudGVuYW50RGlzY292ZXJ5UmVzcG9uc2UuaXNzdWVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnREaXNjb3ZlcnlJbmNvbXBsZXRlRXJyb3IoXCJEaXNjb3ZlcnkgaW5jb21wbGV0ZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVwbGFjZXMgdGVuYW50IGluIHVybCBwYXRoIHdpdGggY3VycmVudCB0ZW5hbnQuIERlZmF1bHRzIHRvIGNvbW1vbi5cclxuICAgICAqIEBwYXJhbSB1cmxTdHJpbmdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXBsYWNlVGVuYW50KHVybFN0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdXJsU3RyaW5nLnJlcGxhY2UoL3t0ZW5hbnR9fHt0ZW5hbnRpZH0vZywgdGhpcy50ZW5hbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGRlZmF1bHQgb3BlbiBpZCBjb25maWd1cmF0aW9uIGVuZHBvaW50IGZvciBhbnkgY2Fub25pY2FsIGF1dGhvcml0eS5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCBkZWZhdWx0T3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0aG9yaXR5VHlwZSA9PT0gQXV0aG9yaXR5VHlwZS5BZGZzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmNhbm9uaWNhbEF1dGhvcml0eX0ud2VsbC1rbm93bi9vcGVuaWQtY29uZmlndXJhdGlvbmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNhbm9uaWNhbEF1dGhvcml0eX12Mi4wLy53ZWxsLWtub3duL29wZW5pZC1jb25maWd1cmF0aW9uYDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhdXRob3JpdHk6IHN0cmluZywgbmV0d29ya0ludGVyZmFjZTogSU5ldHdvcmtNb2R1bGUpIHtcclxuICAgICAgICB0aGlzLmNhbm9uaWNhbEF1dGhvcml0eSA9IGF1dGhvcml0eTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2Fub25pY2FsQXV0aG9yaXR5LnZhbGlkYXRlQXNVcmkoKTtcclxuICAgICAgICB0aGlzLm5ldHdvcmtJbnRlcmZhY2UgPSBuZXR3b3JrSW50ZXJmYWNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQm9vbGVhbiB0aGF0IHJldHVybnMgd2hldGhyIG9yIG5vdCB0ZW5hbnQgZGlzY292ZXJ5IGhhcyBiZWVuIGNvbXBsZXRlZC5cclxuICAgICAqL1xyXG4gICAgZGlzY292ZXJ5Q29tcGxldGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgT0F1dGggZW5kcG9pbnRzIGZyb20gdGhlIGdpdmVuIE9wZW5JRCBjb25maWd1cmF0aW9uIGVuZHBvaW50LlxyXG4gICAgICogQHBhcmFtIG9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIGRpc2NvdmVyRW5kcG9pbnRzKG9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludDogc3RyaW5nKTogUHJvbWlzZTxOZXR3b3JrUmVzcG9uc2U8T3BlbklkQ29uZmlnUmVzcG9uc2U+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29ya0ludGVyZmFjZS5zZW5kR2V0UmVxdWVzdEFzeW5jPE9wZW5JZENvbmZpZ1Jlc3BvbnNlPihvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlZmF1bHQgQUFEIEluc3RhbmNlIERpc2NvdmVyeSBFbmRwb2ludFxyXG4gICAgcHJpdmF0ZSBnZXQgYWFkSW5zdGFuY2VEaXNjb3ZlcnlFbmRwb2ludFVybCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgJHtDb25zdGFudHMuQUFEX0lOU1RBTkNFX0RJU0NPVkVSWV9FTkRQVH0ke3RoaXMuY2Fub25pY2FsQXV0aG9yaXR5fW9hdXRoMi92Mi4wL2F1dGhvcml6ZWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyB2YWxpZGF0ZUFuZFNldFByZWZlcnJlZE5ldHdvcmsoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgaG9zdCA9IHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cy5Ib3N0TmFtZUFuZFBvcnQ7XHJcbiAgICAgICAgaWYgKFRydXN0ZWRBdXRob3JpdHkuZ2V0VHJ1c3RlZEhvc3RMaXN0KCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IFRydXN0ZWRBdXRob3JpdHkuc2V0VHJ1c3RlZEF1dGhvcml0aWVzRnJvbU5ldHdvcmsodGhpcy5fY2Fub25pY2FsQXV0aG9yaXR5LCB0aGlzLm5ldHdvcmtJbnRlcmZhY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFUcnVzdGVkQXV0aG9yaXR5LklzSW5UcnVzdGVkSG9zdExpc3QoaG9zdCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVVudHJ1c3RlZEF1dGhvcml0eUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcmVmZXJyZWROZXR3b3JrID0gVHJ1c3RlZEF1dGhvcml0eS5nZXRDbG91ZERpc2NvdmVyeU1ldGFkYXRhKGhvc3QpLnByZWZlcnJlZF9uZXR3b3JrO1xyXG4gICAgICAgIGlmIChob3N0ICE9PSBwcmVmZXJyZWROZXR3b3JrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5ID0gdGhpcy5jYW5vbmljYWxBdXRob3JpdHkucmVwbGFjZShob3N0LCBwcmVmZXJyZWROZXR3b3JrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtIGVuZHBvaW50IGRpc2NvdmVyeSB0byBkaXNjb3ZlciB0aGUgL2F1dGhvcml6ZSwgL3Rva2VuIGFuZCBsb2dvdXQgZW5kcG9pbnRzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgcmVzb2x2ZUVuZHBvaW50c0FzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGF3YWl0IHRoaXMudmFsaWRhdGVBbmRTZXRQcmVmZXJyZWROZXR3b3JrKCk7XHJcbiAgICAgICAgY29uc3Qgb3BlbklkQ29uZmlnRW5kcG9pbnQgPSB0aGlzLmRlZmF1bHRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQ7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmRpc2NvdmVyRW5kcG9pbnRzKG9wZW5JZENvbmZpZ0VuZHBvaW50KTtcclxuICAgICAgICB0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlID0gcmVzcG9uc2UuYm9keTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuaW1wb3J0IHsgQXV0aG9yaXR5IH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgSU5ldHdvcmtNb2R1bGUgfSBmcm9tIFwiLi8uLi9uZXR3b3JrL0lOZXR3b3JrTW9kdWxlXCI7XHJcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4vLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhvcml0eUZhY3Rvcnkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGF1dGhvcml0eSBvYmplY3Qgb2YgdGhlIGNvcnJlY3QgdHlwZSBiYXNlZCBvbiB0aGUgdXJsXHJcbiAgICAgKiBQZXJmb3JtcyBiYXNpYyBhdXRob3JpdHkgdmFsaWRhdGlvbiAtIGNoZWNrcyB0byBzZWUgaWYgdGhlIGF1dGhvcml0eSBpcyBvZiBhIHZhbGlkIHR5cGUgKGkuZS4gYWFkLCBiMmMsIGFkZnMpXHJcbiAgICAgKiBcclxuICAgICAqIEFsc28gcGVyZm9ybXMgZW5kcG9pbnQgZGlzY292ZXJ5LlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXR5VXJpXHJcbiAgICAgKiBAcGFyYW0gbmV0d29ya0NsaWVudFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYXN5bmMgY3JlYXRlRGlzY292ZXJlZEluc3RhbmNlKGF1dGhvcml0eVVyaTogc3RyaW5nLCBuZXR3b3JrQ2xpZW50OiBJTmV0d29ya01vZHVsZSk6IFByb21pc2U8QXV0aG9yaXR5PiB7XHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBhdXRob3JpdHkgYW5kIHBlcmZvcm0gZGlzY292ZXJ5IGVuZHBvaW50IGNoZWNrLlxyXG4gICAgICAgIGNvbnN0IGFjcXVpcmVUb2tlbkF1dGhvcml0eTogQXV0aG9yaXR5ID0gQXV0aG9yaXR5RmFjdG9yeS5jcmVhdGVJbnN0YW5jZShhdXRob3JpdHlVcmksIG5ldHdvcmtDbGllbnQpO1xyXG5cclxuICAgICAgICBpZiAoYWNxdWlyZVRva2VuQXV0aG9yaXR5LmRpc2NvdmVyeUNvbXBsZXRlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFjcXVpcmVUb2tlbkF1dGhvcml0eTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGFjcXVpcmVUb2tlbkF1dGhvcml0eS5yZXNvbHZlRW5kcG9pbnRzQXN5bmMoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGFjcXVpcmVUb2tlbkF1dGhvcml0eTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVFbmRwb2ludERpc2NvdmVyeUluY29tcGxldGVFcnJvcihlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gYXV0aG9yaXR5IG9iamVjdCBvZiB0aGUgY29ycmVjdCB0eXBlIGJhc2VkIG9uIHRoZSB1cmxcclxuICAgICAqIFBlcmZvcm1zIGJhc2ljIGF1dGhvcml0eSB2YWxpZGF0aW9uIC0gY2hlY2tzIHRvIHNlZSBpZiB0aGUgYXV0aG9yaXR5IGlzIG9mIGEgdmFsaWQgdHlwZSAoaS5lLiBhYWQsIGIyYywgYWRmcylcclxuICAgICAqIFxyXG4gICAgICogRG9lcyBub3QgcGVyZm9ybSBlbmRwb2ludCBkaXNjb3ZlcnkuXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBhdXRob3JpdHlVcmwgXHJcbiAgICAgKiBAcGFyYW0gbmV0d29ya0ludGVyZmFjZSBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUluc3RhbmNlKGF1dGhvcml0eVVybDogc3RyaW5nLCBuZXR3b3JrSW50ZXJmYWNlOiBJTmV0d29ya01vZHVsZSk6IEF1dGhvcml0eSB7XHJcbiAgICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgYXV0aG9yaXR5IHVybCBpcyBlbXB0eVxyXG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KGF1dGhvcml0eVVybCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVVybEVtcHR5RXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgQXV0aG9yaXR5KGF1dGhvcml0eVVybCwgbmV0d29ya0ludGVyZmFjZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcbmltcG9ydCB7IEFQUF9NRVRBX0RBVEEsIFNlcGFyYXRvcnMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogQVBQX01FVEFfREFUQSBDYWNoZVxyXG4gKiBcclxuICogS2V5OlZhbHVlIFNjaGVtYTpcclxuICogXHJcbiAqIEtleTogYXBwbWV0YWRhdGEtPGVudmlyb25tZW50Pi08Y2xpZW50X2lkPlxyXG4gKiBcclxuICogVmFsdWU6IFxyXG4gKiB7XHJcbiAqICAgICAgY2xpZW50SWQ6IGNsaWVudCBJRCBvZiB0aGUgYXBwbGljYXRpb25cclxuICogICAgICBlbnZpcm9ubWVudDogZW50aXR5IHRoYXQgaXNzdWVkIHRoZSB0b2tlbiwgcmVwcmVzZW50ZWQgYXMgYSBmdWxsIGhvc3RcclxuICogICAgICBmYW1pbHlJZDogRmFtaWx5IElEIGlkZW50aWZpZXIsICcxJyByZXByZXNlbnRzIE1pY3Jvc29mdCBGYW1pbHlcclxuICogfVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFwcE1ldGFkYXRhRW50aXR5IHtcclxuICAgIGNsaWVudElkOiBzdHJpbmc7XHJcbiAgICBlbnZpcm9ubWVudDogc3RyaW5nO1xyXG4gICAgZmFtaWx5SWQ/OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSBBY2NvdW50IENhY2hlIEtleSBhcyBwZXIgdGhlIHNjaGVtYTogPGhvbWVfYWNjb3VudF9pZD4tPGVudmlyb25tZW50Pi08cmVhbG0qPlxyXG4gICAgICovXHJcbiAgICBnZW5lcmF0ZUFwcE1ldGFEYXRhRW50aXR5S2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgYXBwTWV0YURhdGFLZXlBcnJheTogQXJyYXk8c3RyaW5nPiA9IFtBUFBfTUVUQV9EQVRBLCB0aGlzLmVudmlyb25tZW50LCB0aGlzLmNsaWVudElkXTtcclxuICAgICAgICByZXR1cm4gYXBwTWV0YURhdGFLZXlBcnJheS5qb2luKFNlcGFyYXRvcnMuQ0FDSEVfS0VZX1NFUEFSQVRPUikudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFN0cmluZ0RpY3QgfSBmcm9tIFwiLi4vdXRpbHMvTXNhbFR5cGVzXCI7XHJcbmltcG9ydCB7IEFjY291bnRJbmZvIH0gZnJvbSBcIi4uL2FjY291bnQvQWNjb3VudEluZm9cIjtcclxuXHJcbi8qKlxyXG4gKiBSZXN1bHQgcmV0dXJuZWQgZnJvbSB0aGUgYXV0aG9yaXR5J3MgdG9rZW4gZW5kcG9pbnQuXHJcbiAqIC0gdW5pcXVlSWQgICAgICAgICAgICAgICAtIGBvaWRgIG9yIGBzdWJgIGNsYWltIGZyb20gSUQgdG9rZW5cclxuICogLSB0ZW5hbnRJZCAgICAgICAgICAgICAgIC0gYHRpZGAgY2xhaW0gZnJvbSBJRCB0b2tlblxyXG4gKiAtIHNjb3BlcyAgICAgICAgICAgICAgICAgLSBTY29wZXMgdGhhdCBhcmUgdmFsaWRhdGVkIGZvciB0aGUgcmVzcGVjdGl2ZSB0b2tlblxyXG4gKiAtIGFjY291bnQgICAgICAgICAgICAgICAgLSBBbiBhY2NvdW50IG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGUgY3VycmVudGx5IHNpZ25lZC1pbiB1c2VyXHJcbiAqIC0gaWRUb2tlbiAgICAgICAgICAgICAgICAtIElkIHRva2VuIHJlY2VpdmVkIGFzIHBhcnQgb2YgdGhlIHJlc3BvbnNlXHJcbiAqIC0gaWRUb2tlbkNsYWltcyAgICAgICAgICAtIE1TQUwtcmVsZXZhbnQgSUQgdG9rZW4gY2xhaW1zXHJcbiAqIC0gYWNjZXNzVG9rZW4gICAgICAgICAgICAtIEFjY2VzcyB0b2tlbiByZWNlaXZlZCBhcyBwYXJ0IG9mIHRoZSByZXNwb25zZVxyXG4gKiAtIGZyb21DYWNoZSAgICAgICAgICAgICAgLSBCb29sZWFuIGRlbm90aW5nIHdoZXRoZXIgdG9rZW4gY2FtZSBmcm9tIGNhY2hlXHJcbiAqIC0gZXhwaXJlc09uICAgICAgICAgICAgICAtIEphdmFzY3JpcHQgRGF0ZSBvYmplY3QgcmVwcmVzZW50aW5nIHJlbGF0aXZlIGV4cGlyYXRpb24gb2YgYWNjZXNzIHRva2VuXHJcbiAqIC0gZXh0RXhwaXJlc09uICAgICAgICAgICAtIEphdmFzY3JpcHQgRGF0ZSBvYmplY3QgcmVwcmVzZW50aW5nIGV4dGVuZGVkIHJlbGF0aXZlIGV4cGlyYXRpb24gb2YgYWNjZXNzIHRva2VuIGluIGNhc2Ugb2Ygc2VydmVyIG91dGFnZVxyXG4gKiAtIHN0YXRlICAgICAgICAgICAgICAgICAgLSBWYWx1ZSBwYXNzZWQgaW4gYnkgdXNlciBpbiByZXF1ZXN0XHJcbiAqIC0gZmFtaWx5SWQgICAgICAgICAgICAgICAtIEZhbWlseSBJRCBpZGVudGlmaWVyLCB1c3VhbGx5IG9ubHkgdXNlZCBmb3IgcmVmcmVzaCB0b2tlbnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblJlc3VsdCB7XHJcbiAgICB1bmlxdWVJZDogc3RyaW5nO1xyXG4gICAgdGVuYW50SWQ6IHN0cmluZztcclxuICAgIHNjb3BlczogQXJyYXk8c3RyaW5nPjtcclxuICAgIGFjY291bnQ6IEFjY291bnRJbmZvO1xyXG4gICAgaWRUb2tlbjogc3RyaW5nO1xyXG4gICAgaWRUb2tlbkNsYWltczogU3RyaW5nRGljdDtcclxuICAgIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgICBmcm9tQ2FjaGU6IGJvb2xlYW47XHJcbiAgICBleHBpcmVzT246IERhdGU7XHJcbiAgICBleHRFeHBpcmVzT24/OiBEYXRlO1xyXG4gICAgc3RhdGU/OiBzdHJpbmc7XHJcbiAgICBmYW1pbHlJZD86IHN0cmluZztcclxufVxyXG4iXSwibmFtZXMiOlsiTG9nTGV2ZWwiLCJQZXJzaXN0ZW50Q2FjaGVLZXlzIiwiUmVzcG9uc2VNb2RlIiwiQ3JlZGVudGlhbFR5cGUiLCJDYWNoZVNjaGVtYVR5cGUiLCJBdXRob3JpdHlUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFLQTs7O0lBR2EsZ0JBQWdCLEdBQUc7SUFDNUIsZUFBZSxFQUFFO1FBQ2IsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixJQUFJLEVBQUUscUNBQXFDO0tBQzlDO0VBQ0g7QUFFRjs7OztJQUcrQiw2QkFBSztJQU9oQyxt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
