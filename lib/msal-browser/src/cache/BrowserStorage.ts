/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { ICacheStorage } from "./ICacheStorage";
import { BrowserConfigurationAuthError } from "../error/BrowserConfigurationAuthError";
import { BrowserConstants } from "../utils/BrowserConstants";
import { BrowserUtils } from "../utils/BrowserUtils";
import { ValidCacheType } from "@azure/msal-common";

export class BrowserStorage implements ICacheStorage {

    private _windowStorage: Storage;
    private cacheLocation: string;

    public get windowStorage() : Storage {
        if (!this._windowStorage) {
            this._windowStorage = window[this.cacheLocation];
        }

        return this._windowStorage;
    }

    constructor(cacheLocation: string) {
        // Validate cache location
        this.validateWindowStorage(cacheLocation);

        this.cacheLocation = cacheLocation;
    }

    /**
     * Validates the the given cache location string is an expected value:
     * - localStorage
     * - sessionStorage (default)
     * Also validates if given cacheLocation is supported on the browser.
     * @param cacheLocation
     */
    private validateWindowStorage(cacheLocation: string): void {
        BrowserUtils.blockNonBrowserEnvironment();

        if (cacheLocation !== BrowserConstants.CACHE_LOCATION_LOCAL && cacheLocation !== BrowserConstants.CACHE_LOCATION_SESSION) {
            throw BrowserConfigurationAuthError.createStorageNotSupportedError(cacheLocation);
        }

        const storageSupported = !!window[cacheLocation];
        if (!storageSupported) {
            throw BrowserConfigurationAuthError.createStorageNotSupportedError(cacheLocation);
        }
    }

    /**
     * Get the item from the window storage object matching the given key.
     * @param key 
     */
    getItem(key: string): ValidCacheType {
        BrowserUtils.blockNonBrowserEnvironment();
        return this.windowStorage.getItem(key);
    }

    /**
     * Sets the item in the window storage object with the given key.
     * @param key 
     * @param value 
     */
    setItem(key: string, value: ValidCacheType): void {
        BrowserUtils.blockNonBrowserEnvironment();
        if (typeof value === "string") {
            this.windowStorage.setItem(key, value);
        } else {
            this.windowStorage.setItem(key, JSON.stringify(value));
        }
    }

    /**
     * Removes the item in the window storage object matching the given key.
     * @param key 
     */
    removeItem(key: string): void {
        BrowserUtils.blockNonBrowserEnvironment();
        this.windowStorage.removeItem(key);
    }

    /**
     * Get all the keys from the window storage object as an iterable array of strings.
     */
    getKeys(): string[] {
        BrowserUtils.blockNonBrowserEnvironment();
        return Object.keys(this.windowStorage);
    }

    /**
     * Returns true or false if the given key is present in the cache.
     * @param key 
     */
    containsKey(key: string): boolean {
        BrowserUtils.blockNonBrowserEnvironment();
        return this.windowStorage.hasOwnProperty(key);
    }
}
