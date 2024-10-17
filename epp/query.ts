import { EppObject } from "./epp-object";
import { Storage } from "./storage";

export class Query {
    private storage: Storage;
    constructor(storage: Storage) {
        this.storage = storage;
    }
    async check(objs:EppObject[]): Promise<{ available: boolean, reason?: string }[]> {
        const results = await Promise.all(objs.map(async (o) => {
            const key = o.getKey();
            if (await this.storage.get(key)) {
                return { available: false, reason: "In use" };
            } 
            return { available: true };
        }));
        return results;
    }
    // info(): void;
    // poll(): void;
    // transfer(): void;
}