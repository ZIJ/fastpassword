const ITEMS = Symbol();
const MAX_SIZE = Symbol();

export default class Cache {
    constructor (maxSize) {
        this[MAX_SIZE] = maxSize;
        this[ITEMS] = [];
    }

    get size () {
        return this[ITEMS].length;
    }

    put (item) {
        let items = this[ITEMS];
        items.push(item);
        if (items.length > this[MAX_SIZE]) {
            items.shift();
        }
    }

    * [Symbol.iterator]() {
        for (let item of this[ITEMS]) {
            yield item;
        }
    }
}
