import { EppObject } from "./epp-object";
import { Storage } from "./storage";

export class Query {
    private storage: Storage;
    constructor(storage: Storage) {
        this.storage = storage;
    }
    async check(o:EppObject): Promise<{ available: boolean, reason?: string }> {
        const key = o.getKey();
        if (await this.storage.get(key)) {
            return { available: false, reason: "In use" };
        } 
        return { available: true };
    }
    // info(): void;
    // poll(): void;
    // transfer(): void;
}