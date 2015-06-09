"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

var _Symbol$iterator = require("babel-runtime/core-js/symbol/iterator")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

_Object$defineProperty(exports, "__esModule", {
    value: true
});

var ITEMS = _Symbol();
var MAX_SIZE = _Symbol();

var Cache = (function () {
    function Cache(maxSize) {
        _classCallCheck(this, Cache);

        this[MAX_SIZE] = maxSize;
        this[ITEMS] = [];
    }

    _createClass(Cache, [{
        key: "put",
        value: function put(item) {
            var items = this[ITEMS];
            items.push(item);
            if (items.length > this[MAX_SIZE]) {
                items.shift();
            }
        }
    }, {
        key: _Symbol$iterator,
        value: _regeneratorRuntime.mark(function callee$1$0() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

            return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
                while (1) switch (context$2$0.prev = context$2$0.next) {
                    case 0:
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        context$2$0.prev = 3;
                        _iterator = _getIterator(this[ITEMS]);

                    case 5:
                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                            context$2$0.next = 12;
                            break;
                        }

                        item = _step.value;
                        context$2$0.next = 9;
                        return item;

                    case 9:
                        _iteratorNormalCompletion = true;
                        context$2$0.next = 5;
                        break;

                    case 12:
                        context$2$0.next = 18;
                        break;

                    case 14:
                        context$2$0.prev = 14;
                        context$2$0.t0 = context$2$0["catch"](3);
                        _didIteratorError = true;
                        _iteratorError = context$2$0.t0;

                    case 18:
                        context$2$0.prev = 18;
                        context$2$0.prev = 19;

                        if (!_iteratorNormalCompletion && _iterator["return"]) {
                            _iterator["return"]();
                        }

                    case 21:
                        context$2$0.prev = 21;

                        if (!_didIteratorError) {
                            context$2$0.next = 24;
                            break;
                        }

                        throw _iteratorError;

                    case 24:
                        return context$2$0.finish(21);

                    case 25:
                        return context$2$0.finish(18);

                    case 26:
                    case "end":
                        return context$2$0.stop();
                }
            }, callee$1$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
        })
    }, {
        key: "size",
        get: function () {
            return this[ITEMS].length;
        }
    }]);

    return Cache;
})();

exports["default"] = Cache;
module.exports = exports["default"];