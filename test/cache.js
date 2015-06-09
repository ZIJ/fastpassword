import assert from 'assert';
import Cache from '../src/cache';

describe('cache', () => {
    describe('#size', () => {
        it('should be 1 after first addition', () => {
            let cache = new Cache(10);
            cache.put(1);
            assert(cache.size === 1);
        });
        it('should not exceed max size', () => {
            let cache = new Cache(1);
            cache.put(1);
            cache.put(2);
            assert(cache.size === 1);
        });
    });
    describe('#iteration', () => {
        it('should be iterable', () => {
            let cache = new Cache(1);
            let isIterable = false;
            cache.put(1);
            for (let item of cache) {
                isIterable = true;
            }
            assert(isIterable);
        });
    });
});
