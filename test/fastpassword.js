import assert from 'assert';
import pass from '../src/fastpassword';

describe('fastpassword', () => {
    describe('#password', () => {
        it('should have specified length', () => {
            assert(pass(0).length === 0);
            assert(pass(1).length === 1);
            assert(pass(100).length === 100);
        });
        it('should not contain repeated characters', () => {
            pass(100).split().reduce((prev, current) => {
                assert(current !== prev);
            }, '');
        });
    });
});
