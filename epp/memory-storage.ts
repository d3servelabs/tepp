import { Storage } from "./storage";
export class MemoryStorage implements Storage {
    private storage: Map<string, any> = new Map();
    async get(key: string): Promise<any> {
        return this.storage.get(key);
    }
    async set(key: string, value: any): Promise<void> {
        this.storage.set(key, value);
    }
}