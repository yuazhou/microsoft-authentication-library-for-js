/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { Constants, PersistentCacheKeys, StringUtils, AuthorizationCodeRequest, ICrypto, CacheSchemaType, AccountEntity, IdTokenEntity, CredentialType, AccessTokenEntity, RefreshTokenEntity, AppMetadataEntity, CacheManager, CredentialEntity, ThrottlingEntity, ServerTelemetryCacheValue, Logger, ValidCacheType } from "@azure/msal-common";
import { CacheOptions } from "../config/Configuration";
import { BrowserAuthError } from "../error/BrowserAuthError";
import { BrowserConfigurationAuthError } from "../error/BrowserConfigurationAuthError";
import { BrowserConstants, TemporaryCacheKeys } from "../utils/BrowserConstants";
import { BrowserStorage } from "./BrowserStorage";
import { ICacheStorage } from "./ICacheStorage";
import { InMemoryStorage } from "./InMemoryStorage";

// Cookie life calculation (hours * minutes * seconds * ms)
const COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1000;

export type CacheKVStore = Record<string, ValidCacheType>;

/** 
 * This class implements the cache storage interface for MSAL through browser local or session storage.
 * Cookies are only used if storeAuthStateInCookie is true, and are only used for
 * parameters such as state and nonce, generally.
 */
export class BrowserCacheManager extends CacheManager {

    private logger: Logger;
    // Cache configuration, either set by user or default values.
    private cacheConfig: CacheOptions;
    // Window storage object (either local or sessionStorage)
    private cacheStorage: ICacheStorage;
    // Client id of application. Used in cache keys to partition cache correctly in the case of multiple instances of MSAL.
    private clientId: string;
    

    constructor(clientId: string, cacheConfig: CacheOptions, logger?: Logger) {
        super();
        this.logger = logger;
        
        this.cacheStorage = this.getCacheStorageObject(cacheConfig.cacheLocation)

        this.cacheConfig = cacheConfig;
        this.clientId = clientId;

        // Migrate any cache entries from older versions of MSAL.
        this.migrateCacheEntries();
    }

    /**
     * Initializes and returns the correct cachestorage object.
     * @param cacheLocation 
     */
    private getCacheStorageObject(cacheLocation: string): ICacheStorage {
        if (cacheLocation !== BrowserConstants.CACHE_LOCATION_IN_MEMORY) {
            try {
                return new BrowserStorage(cacheLocation);
            } catch (e) {
                const authError = BrowserConfigurationAuthError.createBrowserStorageInitError(e);
                this.logger.warning(`${authError}`);
            }
        }

        return new InMemoryStorage();        
    }

    /**
     * Migrate all old cache entries to new schema. No rollback supported.
     * @param storeAuthStateInCookie
     */
    private migrateCacheEntries(): void {
        const idTokenKey = `${Constants.CACHE_PREFIX}.${PersistentCacheKeys.ID_TOKEN}`;
        const clientInfoKey = `${Constants.CACHE_PREFIX}.${PersistentCacheKeys.CLIENT_INFO}`;
        const errorKey = `${Constants.CACHE_PREFIX}.${PersistentCacheKeys.ERROR}`;
        const errorDescKey = `${Constants.CACHE_PREFIX}.${PersistentCacheKeys.ERROR_DESC}`;

        const idTokenValue = this.cacheStorage.getItem(idTokenKey) as string;
        const clientInfoValue = this.cacheStorage.getItem(clientInfoKey) as string;
        const errorValue = this.cacheStorage.getItem(errorKey) as string;
        const errorDescValue = this.cacheStorage.getItem(errorDescKey) as string;

        const values = [idTokenValue, clientInfoValue, errorValue, errorDescValue];
        const keysToMigrate = [PersistentCacheKeys.ID_TOKEN, PersistentCacheKeys.CLIENT_INFO, PersistentCacheKeys.ERROR, PersistentCacheKeys.ERROR_DESC];

        keysToMigrate.forEach((cacheKey, index) => this.migrateCacheEntry(cacheKey, values[index]));
    }

    /**
     * Utility function to help with migration.
     * @param newKey
     * @param value
     * @param storeAuthStateInCookie
     */
    private migrateCacheEntry(newKey: string, value: string): void {
        if (value) {
            this.setItem(this.generateCacheKey(newKey), value);
        }
    }

    /**
     * Parses key as JSON object, JSON.parse() will throw an error.
     * @param key
     */
    private validateObjectKey(key: string): void {
        JSON.parse(key);
    }

    /**
     * Sets the cache item with the key and value given.
     * Stores in cookie if storeAuthStateInCookie is set to true.
     * This can cause cookie overflow if used incorrectly.
     * @param key
     * @param value
     */
    setItem(key: string, value: ValidCacheType): void {
        this.cacheStorage.setItem(key, value);
        if (typeof value === "string") {
            const stringVal = value as string;
            this.cacheStorage.setItem(key, stringVal);
            if (this.cacheConfig.storeAuthStateInCookie) {
                this.setItemCookie(key, stringVal);
            }
        }
        /**
        // save the cacheItem
        switch (type) {
            case CacheSchemaType.ACCOUNT:
            case CacheSchemaType.CREDENTIAL:
            case CacheSchemaType.APP_METADATA:
            case CacheSchemaType.THROTTLING:
            case CacheSchemaType.TELEMETRY:
                
                break;
            case CacheSchemaType.TEMPORARY: {
                const stringVal = value as string;
                this.cacheStorage.setItem(key, stringVal);
                if (this.cacheConfig.storeAuthStateInCookie) {
                    this.setItemCookie(key, stringVal);
                }
                break;
            }
            default: {
                throw BrowserAuthError.createInvalidCacheTypeError();
            }
        }
        */
    }

    /**
     * Gets cache item with given key.
     * Will retrieve frm cookies if storeAuthStateInCookie is set to true.
     * @param key
     */
    getItem(key: string): ValidCacheType {
        if (this.cacheConfig.storeAuthStateInCookie) {
            const itemCookie = this.getItemCookie(key);
            if (!StringUtils.isEmpty(itemCookie)) {
                return itemCookie;
            }
        }

        const value = this.cacheStorage.getItem(key);
        if (!value || StringUtils.isEmpty(value as string)) {
            return null;
        }

        return value;

        /**
        switch (type) {
            case CacheSchemaType.ACCOUNT: {
                const account = new AccountEntity();
                return (CacheManager.toObject(account, JSON.parse(value)) as AccountEntity);
            }
            case CacheSchemaType.CREDENTIAL: {
                const credentialType = CredentialEntity.getCredentialType(key);
                switch (credentialType) {
                    case CredentialType.ID_TOKEN: {
                        const idTokenEntity: IdTokenEntity = new IdTokenEntity();
                        return (CacheManager.toObject(idTokenEntity, JSON.parse(value)) as IdTokenEntity);
                    }
                    case CredentialType.ACCESS_TOKEN: {
                        const accessTokenEntity: AccessTokenEntity = new AccessTokenEntity();
                        return (CacheManager.toObject(accessTokenEntity, JSON.parse(value)) as AccessTokenEntity);
                    }
                    case CredentialType.REFRESH_TOKEN: {
                        const refreshTokenEntity: RefreshTokenEntity = new RefreshTokenEntity();
                        return (CacheManager.toObject(refreshTokenEntity, JSON.parse(value)) as RefreshTokenEntity);
                    }
                }
            }
            case CacheSchemaType.APP_METADATA: {
                return (JSON.parse(value) as AppMetadataEntity);
            }
            case CacheSchemaType.THROTTLING: {
                return (JSON.parse(value) as ThrottlingEntity);
            }
            case CacheSchemaType.TELEMETRY: {
                return JSON.parse(value) as ServerTelemetryCacheValue;
            }
            case CacheSchemaType.TEMPORARY: {
                const itemCookie = this.getItemCookie(key);
                if (this.cacheConfig.storeAuthStateInCookie) {
                    return itemCookie;
                }
                return value;
            }
            default: {
                throw BrowserAuthError.createInvalidCacheTypeError();
            }
        }
        */
    }

    /**
     * Removes the cache item with the given key.
     * Will also clear the cookie item if storeAuthStateInCookie is set to true.
     * @param key
     */
    removeItem(key: string): boolean {
        this.cacheStorage.removeItem(key);
        if (this.cacheConfig.storeAuthStateInCookie) {
            this.clearItemCookie(key);
        }
        return true;
    }

    /**
     * Checks whether key is in cache.
     * @param key
     */
    containsKey(key: string): boolean {
        return this.cacheStorage.containsKey(key);
    }

    /**
     * Gets all keys in cache.
     */
    getKeys(): string[] {
        return this.cacheStorage.getKeys();
    }

    /**
     * Clears all cache entries created by MSAL (except tokens).
     */
    clear(): void {
        this.removeAllAccounts();
        this.removeAppMetadata();
        const allKeys = this.getKeys();
        allKeys.forEach((cacheKey: string) => {
            // Check if key contains msal prefix; For now, we are clearing all the cache items created by MSAL.js
            if (this.cacheStorage.containsKey(cacheKey) && ((cacheKey.indexOf(Constants.CACHE_PREFIX) !== -1) || (cacheKey.indexOf(this.clientId) !== -1))) {
                this.removeItem(cacheKey);
            }
        });
    }

    /**
     * Add value to cookies
     * @param cookieName
     * @param cookieValue
     * @param expires
     */
    setItemCookie(cookieName: string, cookieValue: string, expires?: number): void {
        let cookieStr = `${encodeURIComponent(cookieName)}=${encodeURIComponent(cookieValue)};path=/;`;
        if (expires) {
            const expireTime = this.getCookieExpirationTime(expires);
            cookieStr += `expires=${expireTime};`;
        }

        document.cookie = cookieStr;
    }

    /**
     * Get one item by key from cookies
     * @param cookieName
     */
    getItemCookie(cookieName: string): string {
        const name = `${encodeURIComponent(cookieName)}=`;
        const cookieList = document.cookie.split(";");
        for (let i = 0; i < cookieList.length; i++) {
            let cookie = cookieList[i];
            while (cookie.charAt(0) === " ") {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) === 0) {
                return decodeURIComponent(cookie.substring(name.length, cookie.length));
            }
        }
        return "";
    }

    /**
     * Clear an item in the cookies by key
     * @param cookieName
     */
    clearItemCookie(cookieName: string): void {
        this.setItemCookie(cookieName, "", -1);
    }

    /**
     * Clear all msal cookies
     */
    clearMsalCookie(state?: string): void {
        const nonceKey = state ? `${TemporaryCacheKeys.NONCE_IDTOKEN}|${state}` : TemporaryCacheKeys.NONCE_IDTOKEN;
        this.clearItemCookie(this.generateCacheKey(nonceKey));
        this.clearItemCookie(this.generateCacheKey(TemporaryCacheKeys.REQUEST_STATE));
        this.clearItemCookie(this.generateCacheKey(TemporaryCacheKeys.ORIGIN_URI));
    }

    /**
     * Get cookie expiration time
     * @param cookieLifeDays
     */
    getCookieExpirationTime(cookieLifeDays: number): string {
        const today = new Date();
        const expr = new Date(today.getTime() + cookieLifeDays * COOKIE_LIFE_MULTIPLIER);
        return expr.toUTCString();
    }

    /**
     * Prepend msal.<client-id> to each key; Skip for any JSON object as Key (defined schemas do not need the key appended: AccessToken Keys or the upcoming schema)
     * @param key
     * @param addInstanceId
     */
    generateCacheKey(key: string): string {
        try {
            // Defined schemas do not need the key migrated
            this.validateObjectKey(key);
            return key;
        } catch (e) {
            if (StringUtils.startsWith(key, Constants.CACHE_PREFIX) || StringUtils.startsWith(key, PersistentCacheKeys.ADAL_ID_TOKEN)) {
                return key;
            }
            return `${Constants.CACHE_PREFIX}.${this.clientId}.${key}`;
        }
    }

    /**
     * Create authorityKey to cache authority
     * @param state
     */
    generateAuthorityKey(state: string): string {
        return `${TemporaryCacheKeys.AUTHORITY}${Constants.RESOURCE_DELIM}${state}`;
    }

    /**
     * Create Nonce key to cache nonce
     * @param state
     */
    generateNonceKey(state: string): string {
        return `${TemporaryCacheKeys.NONCE_IDTOKEN}${Constants.RESOURCE_DELIM}${state}`;
    }

    /**
     * Sets the cacheKey for and stores the authority information in cache
     * @param state
     * @param authority
     */
    setAuthorityCache(authority: string, state: string): void {
        // Cache authorityKey
        const authorityKey = this.generateAuthorityKey(state);
        this.setItem(this.generateCacheKey(authorityKey), authority);
    }

    /**
     * Gets the cached authority based on the cached state. Returns empty if no cached state found.
     */
    getCachedAuthority(): string {
        const state = this.getItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_STATE)) as string;
        if (!state) {
            return null;
        }
        return this.getItem(this.generateCacheKey(this.generateAuthorityKey(state))) as string;
    }

    /**
     * Updates account, authority, and state in cache
     * @param serverAuthenticationRequest
     * @param account
     */
    updateCacheEntries(state: string, nonce: string, authorityInstance: string): void {
        // Cache the request state
        this.setItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_STATE), state);

        // Cache the nonce
        this.setItem(this.generateCacheKey(this.generateNonceKey(state)), nonce);

        // Cache authorityKey
        this.setAuthorityCache(authorityInstance, state);
    }

    /**
     * Reset all temporary cache items
     * @param state
     */
    resetRequestCache(state: string): void {
        // check state and remove associated cache items
        if (!StringUtils.isEmpty(state)) {
            this.getKeys().forEach(key => {
                if (key.indexOf(state) !== -1) {
                    this.removeItem(key);
                }
            });
        }

        // delete generic interactive request parameters
        this.removeItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_STATE));
        this.removeItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_PARAMS));
        this.removeItem(this.generateCacheKey(TemporaryCacheKeys.ORIGIN_URI));
        this.removeItem(this.generateCacheKey(TemporaryCacheKeys.URL_HASH));
    }

    cleanRequest(): void {
        // Interaction is completed - remove interaction status.
        this.removeItem(this.generateCacheKey(BrowserConstants.INTERACTION_STATUS_KEY));
        const cachedState = this.getItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_STATE)) as string;
        this.resetRequestCache(cachedState || "");
    }

    cacheCodeRequest(authCodeRequest: AuthorizationCodeRequest, browserCrypto: ICrypto): void {
        this.setItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_PARAMS), browserCrypto.base64Encode(JSON.stringify(authCodeRequest)));
    }

    /**
     * Gets the token exchange parameters from the cache. Throws an error if nothing is found.
     */
    getCachedRequest(state: string, browserCrypto: ICrypto): AuthorizationCodeRequest {
        try {
            // Get token request from cache and parse as TokenExchangeParameters.
            const encodedTokenRequest = this.getItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_PARAMS)) as string;
            const parsedRequest = JSON.parse(browserCrypto.base64Decode(encodedTokenRequest)) as AuthorizationCodeRequest;
            this.removeItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_PARAMS));
            // Get cached authority and use if no authority is cached with request.
            if (StringUtils.isEmpty(parsedRequest.authority)) {
                const authorityKey: string = this.generateAuthorityKey(state);
                const cachedAuthority: string = this.getItem(this.generateCacheKey(authorityKey)) as string;
                parsedRequest.authority = cachedAuthority;
            }
            return parsedRequest;
        } catch (err) {
            throw BrowserAuthError.createTokenRequestCacheError(err);
        }
    }
}
