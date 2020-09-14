import { ValidCacheType } from "@azure/msal-common";
import { CacheKVStore } from "./BrowserCacheManager";
import { ICacheStorage } from "./ICacheStorage";

export class InMemoryStorage implements ICacheStorage {

    private inMemoryStorage: CacheKVStore;

    constructor() {
        this.inMemoryStorage = {};
    }

    getItem(key: string): ValidCacheType {
        return this.inMemoryStorage[key];
    }

    setItem(key: string, value: ValidCacheType): void {
        this.inMemoryStorage[key] = value;
    }

    removeItem(key: string): void {
        delete this.inMemoryStorage[key];
    }

    getKeys(): string[] {
        return Object.keys(this.inMemoryStorage);
    }

    containsKey(key: string): boolean {
        return this.inMemoryStorage.hasOwnProperty(key);
    }
}
