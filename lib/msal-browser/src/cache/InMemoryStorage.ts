import { ICacheStorage } from "./ICacheStorage";

export class InMemoryStorage implements ICacheStorage {

    private inMemoryStorage: Record<string, string>;

    constructor() {
        this.inMemoryStorage = {};
    }

    getItem(key: string): string {
        return this.inMemoryStorage[key]
    }

    setItem(key: string, value: string): void {
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
