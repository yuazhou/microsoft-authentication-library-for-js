/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { AuthError } from "@azure/msal-common";

/**
 * BrowserAuthErrorMessage class containing string constants used by error codes and messages.
 */
export const BrowserConfigurationAuthErrorMessage = {
    storageNotSupportedError: {
        code: "storage_not_supported",
        desc: "Given storage configuration option was not supported."
    },
    browserStorageInitError: {
        code: "browser_storage_init_failed",
        desc: "Browser storage was not initialized. Falling back to inMemoryStorage."
    },
    customStorageNotImplementedError: {
        code: "custom_storage_not_implemented",
        desc: "Custom storage was selected but no implementation was passed. Please see the docs here: <TODO: Put docs location here>"
    },
};

/**
 * Browser library error class thrown by the MSAL.js library for SPAs
 */
export class BrowserConfigurationAuthError extends AuthError {

    constructor(errorCode: string, errorMessage?: string) {
        super(errorCode, errorMessage);
        this.name = "BrowserConfigurationAuthError";

        Object.setPrototypeOf(this, BrowserConfigurationAuthError.prototype);
    }

    /**
     * Creates error thrown when given storage location is not supported.
     * @param givenStorageLocation 
     */
    static createStorageNotSupportedError(givenStorageLocation: string): BrowserConfigurationAuthError {
        return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.storageNotSupportedError.code, `${BrowserConfigurationAuthErrorMessage.storageNotSupportedError.desc} Given Location: ${givenStorageLocation}`);
    }

    /**
     * Creates error thrown when custom storage is selected but no implementation is given in config.
     */
    static createCustomStorageNotImplementedError(): BrowserConfigurationAuthError {
        return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.customStorageNotImplementedError.code, BrowserConfigurationAuthErrorMessage.customStorageNotImplementedError.desc);
    }
    
    static createBrowserStorageInitError(givenError: string): BrowserConfigurationAuthError {
        return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.browserStorageInitError.code, `${BrowserConfigurationAuthErrorMessage.browserStorageInitError.desc} Failed With: ${givenError}`);
    }
}
