import 'core-js';

import layout from './layouts/qwerty';
import Cache from './cache';

let keyFingerMap = Object.keys(layout).reduce((map, key) => {
    let fingers = new Set(layout[key]);
    map.set(key, fingers);
    return map;
}, new Map());

function* keySequence(cacheSize = 3) {
    let allKeys = [... keyFingerMap.keys()];
    let usedKeys = new Cache(cacheSize);

    while (true) {
        let usedFingers = [... usedKeys].reduce((fingers, key) => {
            for (let finger of keyFingerMap.get(key)) {
                fingers.add(finger);
            }
            return fingers;
        }, new Set());

        let allowedKeys = allKeys.filter(key => {
            let keyFingers = [... keyFingerMap.get(key)];

            return keyFingers.every(finger => !usedFingers.has(finger));
        });

        let index = Math.round(Math.random() * (allowedKeys.length - 1));
        let nextKey = allowedKeys[index];

        usedKeys.put(nextKey);

        yield nextKey;
    }
}

function* take(sequence, n) {
    for (let item of sequence) {
        if (n <= 0) {
            return;
        }
        n--;
        yield item;
    }
}

export default function(length = 8, depth = 3) {
    let infiniteKeys = keySequence(depth);
    let finiteKeys = take(infiniteKeys, length);

    return [... finiteKeys].join('');
}
