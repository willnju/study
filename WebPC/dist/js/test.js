webpackJsonp([1],{

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Message = __webpack_require__(19);

var _Message2 = _interopRequireDefault(_Message);

var _Overlay = __webpack_require__(63);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Pagination = __webpack_require__(26);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _Modal = __webpack_require__(49);

var _Modal2 = _interopRequireDefault(_Modal);

var _Tabs = __webpack_require__(50);

var _Tabs2 = _interopRequireDefault(_Tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file test.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 测试入口文件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


console.log(_Modal.modal);

var Main = function (_Component) {
    _inherits(Main, _Component);

    function Main() {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
    }

    _createClass(Main, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Pagination2.default, { total: 100 });
        }
    }]);

    return Main;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(Main, null), document.getElementById('app'));

/***/ })

},[223]);
//# sourceMappingURL=test.js.map