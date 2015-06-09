'use strict';

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _Set = require('babel-runtime/core-js/set')['default'];

var _Map = require('babel-runtime/core-js/map')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

var marked0$0 = [keySequence, take].map(_regeneratorRuntime.mark);

require('core-js');

var _layoutsQwerty = require('./layouts/qwerty');

var _layoutsQwerty2 = _interopRequireDefault(_layoutsQwerty);

var _cache = require('./cache');

var _cache2 = _interopRequireDefault(_cache);

var keyFingerMap = _Object$keys(_layoutsQwerty2['default']).reduce(function (map, key) {
    var fingers = new _Set(_layoutsQwerty2['default'][key]);
    map.set(key, fingers);
    return map;
}, new _Map());

function keySequence() {
    var cacheSize = arguments[0] === undefined ? 3 : arguments[0];

    var allKeys, usedKeys, _loop;

    return _regeneratorRuntime.wrap(function keySequence$(context$1$0) {
        var _this = this;

        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                allKeys = [].concat(_toConsumableArray(keyFingerMap.keys()));
                usedKeys = new _cache2['default'](cacheSize);
                _loop = _regeneratorRuntime.mark(function callee$1$0() {
                    var usedFingers, allowedKeys, index, nextKey;
                    return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
                        while (1) switch (context$2$0.prev = context$2$0.next) {
                            case 0:
                                usedFingers = [].concat(_toConsumableArray(usedKeys)).reduce(function (fingers, key) {
                                    var _iteratorNormalCompletion = true;
                                    var _didIteratorError = false;
                                    var _iteratorError = undefined;

                                    try {
                                        for (var _iterator = _getIterator(keyFingerMap.get(key)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                            var finger = _step.value;

                                            fingers.add(finger);
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

                                    return fingers;
                                }, new _Set());
                                allowedKeys = allKeys.filter(function (key) {
                                    var keyFingers = [].concat(_toConsumableArray(keyFingerMap.get(key)));

                                    return keyFingers.every(function (finger) {
                                        return !usedFingers.has(finger);
                                    });
                                });
                                index = Math.round(Math.random() * (allowedKeys.length - 1));
                                nextKey = allowedKeys[index];

                                usedKeys.put(nextKey);

                                context$2$0.next = 7;
                                return nextKey;

                            case 7:
                            case 'end':
                                return context$2$0.stop();
                        }
                    }, callee$1$0, _this);
                });

            case 3:
                if (!true) {
                    context$1$0.next = 7;
                    break;
                }

                return context$1$0.delegateYield(_loop(), 't0', 5);

            case 5:
                context$1$0.next = 3;
                break;

            case 7:
            case 'end':
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}

function take(sequence, n) {
    var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, item;

    return _regeneratorRuntime.wrap(function take$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                context$1$0.prev = 3;
                _iterator2 = _getIterator(sequence);

            case 5:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                    context$1$0.next = 15;
                    break;
                }

                item = _step2.value;

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
                _iteratorNormalCompletion2 = true;
                context$1$0.next = 5;
                break;

            case 15:
                context$1$0.next = 21;
                break;

            case 17:
                context$1$0.prev = 17;
                context$1$0.t0 = context$1$0['catch'](3);
                _didIteratorError2 = true;
                _iteratorError2 = context$1$0.t0;

            case 21:
                context$1$0.prev = 21;
                context$1$0.prev = 22;

                if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                    _iterator2['return']();
                }

            case 24:
                context$1$0.prev = 24;

                if (!_didIteratorError2) {
                    context$1$0.next = 27;
                    break;
                }

                throw _iteratorError2;

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

exports['default'] = function () {
    var length = arguments[0] === undefined ? 8 : arguments[0];
    var depth = arguments[1] === undefined ? 3 : arguments[1];

    var infiniteKeys = keySequence(depth);
    var finiteKeys = take(infiniteKeys, length);

    return [].concat(_toConsumableArray(finiteKeys)).join('');
};

module.exports = exports['default'];