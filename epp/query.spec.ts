import { describe, it, expect, beforeEach } from 'bun:test';
import { Query } from './query';
import { EppDomain, EppObject } from './epp-object';
import { MemoryStorage } from './memory-storage';

describe('Query', () => {
    let query: Query;
    let storage: MemoryStorage;

    beforeEach(() => {
        storage = new MemoryStorage();
        query = new Query(storage);
    });

    describe('check', () => {
        it('should return available true when object is not in storage', async () => {
            const eppObject = new EppDomain("example.com");
            const result = await query.check(eppObject);
            expect(result).toEqual({ available: true });
        });

        it('should return available false with reason when object is in storage', async () => {
            const eppObject = new EppDomain("example.com"   );
            await storage.set(eppObject.getKey(), eppObject);
            const result = await query.check(eppObject);
            expect(result).toEqual({ available: false, reason: 'In use' });
        });
    });
});
