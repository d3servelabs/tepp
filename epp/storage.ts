export abstract class Storage {
    abstract get(key: string): Promise<any>;
    abstract set(key: string, value: any): Promise<void>;
}