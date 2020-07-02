import { Storage } from './Storage';
import { AccountInfo, Logger } from '@azure/msal-common';
import { ICachePlugin } from './ICachePlugin';
/**
 * In-memory token cache manager
 */
export declare class TokenCache {
    private storage;
    private hasChanged;
    private cacheSnapshot;
    private readonly persistence;
    private logger;
    constructor(storage: Storage, logger: Logger, cachePlugin?: ICachePlugin);
    /**
     * Set to true if cache state has changed since last time serialized() or writeToPersistence was called
     */
    cacheHasChanged(): boolean;
    /**
     * Serializes in memory cache to JSON
     */
    serialize(): string;
    /**
     * Deserializes JSON to in-memory cache. JSON should be in MSAL cache schema format
     * @param cache
     */
    deserialize(cache: string): void;
    /**
     * Serializes cache into JSON and calls ICachePlugin.writeToStorage. ICachePlugin must be set on ClientApplication
     */
    writeToPersistence(): Promise<void>;
    /**
     * Calls ICachePlugin.readFromStorage and deserializes JSON to in-memory cache.
     * ICachePlugin must be set on ClientApplication.
     */
    readFromPersistence(): Promise<void>;
    /**
     * API that retrieves all accounts currently in cache to the user
     */
    getAllAccounts(): AccountInfo[];
    /**
     * API to remove a specific account and the relevant data from cache
     * @param account
     */
    removeAccount(account: AccountInfo): void;
    /**
     * Called when the cache has changed state.
     */
    private handleChangeEvent;
    /**
     * Merge in memory cache with the cache snapshot.
     * @param oldState
     * @param currentState
     */
    private mergeState;
    /**
     * Deep update of oldState based on newState values
     * @param oldState
     * @param newState
     */
    private mergeUpdates;
    /**
     * Removes entities in oldState that the were removed from newState. If there are any unknown values in root of
     * oldState that are not recognized, they are left untouched.
     * @param oldState
     * @param newState
     */
    private mergeRemovals;
    private mergeRemovalsDict;
    private overlayDefaults;
}
