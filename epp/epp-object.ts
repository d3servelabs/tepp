export abstract class EppObject {
    // urn:ietf:params:xml:ns:epp-1.0
    name?: string;
    type: string = "object";
    getKey(): string {
        return `${this.type}:${this.name}`;
    }
}
export class EppDomain extends EppObject {
    type = "domain";
    constructor(name: string) {
        super();
        this.name = name;
    }
}