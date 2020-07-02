import { CacheManager, Logger } from '@azure/msal-common';
import { InMemoryCache, JsonCache } from "./serializer/SerializerTypes";
/**
 * This class implements Storage for node, reading cache from user specified storage location or an  extension library
 */
export declare class Storage extends CacheManager {
    private logger;
    constructor(logger: Logger);
    private inMemoryCache;
    private changeEmitters;
    registerChangeEmitter(func: () => void): void;
    emitChange(): void;
    /**
     * gets the current in memory cache for the client
     */
    getCache(): object;
    /**
     * sets the current in memory cache for the client
     * @param inMemoryCache
     */
    setCache(inMemoryCache: InMemoryCache): void;
    /**
     * Set Item in memory
     * @param key
     * @param value
     * @param type
     * @param inMemory
     */
    setItem(key: string, value: string | object, type?: string): void;
    /**
     * Gets cache item with given key.
     * Will retrieve frm cookies if storeAuthStateInCookie is set to true.
     * @param key
     * @param type
     * @param inMemory
     */
    getItem(key: string, type?: string): string | object;
    /**
     * Removes the cache item from memory with the given key.
     * @param key
     * @param type
     * @param inMemory
     */
    removeItem(key: string, type?: string): boolean;
    /**
     * Checks whether key is in cache.
     * @param key
     * TODO: implement after the lookup implementation
     */
    containsKey(key: string): boolean;
    /**
     * Gets all keys in window.
     */
    getKeys(): string[];
    /**
     * Clears all cache entries created by MSAL (except tokens).
     */
    clear(): void;
    /**
     * Initialize in memory cache from an exisiting cache vault
     * @param cache
     */
    static generateInMemoryCache(cache: string): InMemoryCache;
    /**
     * retrieves the final JSON
     * @param inMemoryCache
     */
    static generateJsonCache(inMemoryCache: InMemoryCache): JsonCache;
}
