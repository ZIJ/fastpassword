import 'core-js';

import layout from './layouts/qwerty';

let depth = 3;          // number of sequential chars that cannot be pressed by one finger

let lastUsedFingers = [];
let allKeys = new Set();
let bannedKeys = new Set();
let keyFingerMap = new Map();
let fingerKeyMap = new Map();

Object.keys(layout).forEach(key => {
    let fingers = new Set(layout[key]);
    allKeys.add(key);
    keyFingerMap.set(key, fingers);
    fingers.forEach(finger => {
        if (fingerKeyMap.has(finger)) {
            fingerKeyMap.get(finger).add(key);
        } else {
            fingerKeyMap.set(finger, new Set([key]));
        }
    });
});

function useFinger(finger) {
    lastUsedFingers.push(finger);
    if (lastUsedFingers.length > depth) {
        lastUsedFingers.shift();
    }
    bannedKeys.clear();
    for (let usedFinger of lastUsedFingers) {
        let keys = fingerKeyMap.get(usedFinger);
        for (let key of keys) {
            bannedKeys.add(key);
        }
    }
}

function exclude(set1, set2) {
    let result = new Set(set1);
    for (let item of set1) {
        if (set2.has(item)) {
            result.delete(item);
        }
    }
    return result;
}

function nextKey() {
    let allowedKeys = exclude(allKeys, bannedKeys);
    let index = Math.round(Math.random() * (allowedKeys.size - 1));
    let key = [... allowedKeys.keys()][index];
    let fingers = keyFingerMap.get(key);

    for (let finger of fingers) {
        useFinger(finger);
    }

    return key;
}

function* keySequence() {
    while (true) {
        yield nextKey();
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

export default function(length) {
    let infiniteKeys = keySequence();
    let finiteKeys = take(infiniteKeys, length);

    return [... finiteKeys].join('');
}
