'use strict';

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _Set = require('babel-runtime/core-js/set')['default'];

var _Map = require('babel-runtime/core-js/map')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

var marked0$0 = [keySequence, take].map(_regeneratorRuntime.mark);

require('core-js');

var _layoutsQwerty = require('./layouts/qwerty');

var _layoutsQwerty2 = _interopRequireDefault(_layoutsQwerty);

var depth = 3; // number of sequential chars that cannot be pressed by one finger

var lastUsedFingers = [];
var allKeys = new _Set();
var bannedKeys = new _Set();
var keyFingerMap = new _Map();
var fingerKeyMap = new _Map();

_Object$keys(_layoutsQwerty2['default']).forEach(function (key) {
    var fingers = new _Set(_layoutsQwerty2['default'][key]);
    allKeys.add(key);
    keyFingerMap.set(key, fingers);
    fingers.forEach(function (finger) {
        if (fingerKeyMap.has(finger)) {
            fingerKeyMap.get(finger).add(key);
        } else {
            fingerKeyMap.set(finger, new _Set([key]));
        }
    });
});

function useFinger(finger) {
    lastUsedFingers.push(finger);
    if (lastUsedFingers.length > depth) {
        lastUsedFingers.shift();
    }
    bannedKeys.clear();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = _getIterator(lastUsedFingers), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var usedFinger = _step.value;

            var keys = fingerKeyMap.get(usedFinger);
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = _getIterator(keys), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var key = _step2.value;

                    bannedKeys.add(key);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                        _iterator2['return']();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

function exclude(set1, set2) {
    var result = new _Set(set1);
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = _getIterator(set1), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var item = _step3.value;

            if (set2.has(item)) {
                result['delete'](item);
            }
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                _iterator3['return']();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    return result;
}

function nextKey() {
    var allowedKeys = exclude(allKeys, bannedKeys);
    var index = Math.round(Math.random() * (allowedKeys.size - 1));
    var key = [].concat(_toConsumableArray(allowedKeys.keys()))[index];
    var fingers = keyFingerMap.get(key);

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = _getIterator(fingers), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var finger = _step4.value;

            useFinger(finger);
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4['return']) {
                _iterator4['return']();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }

    return key;
}

function keySequence() {
    return _regeneratorRuntime.wrap(function keySequence$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                if (!true) {
                    context$1$0.next = 5;
                    break;
                }

                context$1$0.next = 3;
                return nextKey();

            case 3:
                context$1$0.next = 0;
                break;

            case 5:
            case 'end':
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}

function take(sequence, n) {
    var _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, item;

    return _regeneratorRuntime.wrap(function take$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                _iteratorNormalCompletion5 = true;
                _didIteratorError5 = false;
                _iteratorError5 = undefined;
                context$1$0.prev = 3;
                _iterator5 = _getIterator(sequence);

            case 5:
                if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                    context$1$0.next = 15;
                    break;
                }

                item = _step5.value;

                if (!(n <= 0)) {
                    context$1$0.next = 9;
                    break;
                }

                return context$1$0.abrupt('return');

            case 9:
                n--;
                context$1$0.next = 12;
                return item;

            case 12:
                _iteratorNormalCompletion5 = true;
                context$1$0.next = 5;
                break;

            case 15:
                context$1$0.next = 21;
                break;

            case 17:
                context$1$0.prev = 17;
                context$1$0.t0 = context$1$0['catch'](3);
                _didIteratorError5 = true;
                _iteratorError5 = context$1$0.t0;

            case 21:
                context$1$0.prev = 21;
                context$1$0.prev = 22;

                if (!_iteratorNormalCompletion5 && _iterator5['return']) {
                    _iterator5['return']();
                }

            case 24:
                context$1$0.prev = 24;

                if (!_didIteratorError5) {
                    context$1$0.next = 27;
                    break;
                }

                throw _iteratorError5;

            case 27:
                return context$1$0.finish(24);

            case 28:
                return context$1$0.finish(21);

            case 29:
            case 'end':
                return context$1$0.stop();
        }
    }, marked0$0[1], this, [[3, 17, 21, 29], [22,, 24, 28]]);
}

exports['default'] = function (length) {
    var infiniteKeys = keySequence();
    var finiteKeys = take(infiniteKeys, length);

    return [].concat(_toConsumableArray(finiteKeys)).join('');
};

module.exports = exports['default'];