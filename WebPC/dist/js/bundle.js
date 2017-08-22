webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @file api.js
 * @desc api相关的常量
 * @author wangyong(1223427693@qq.com)
 */
// API前缀
var API_PREFIX = '';
var API_PRO_PREFIX = '';
switch ("development") {
    case 'development':
        exports.API_PREFIX = API_PREFIX = '/lsnew/api';
        exports.API_PRO_PREFIX = API_PRO_PREFIX = '/lsnew';
        break;
    case 'production':
        exports.API_PREFIX = API_PREFIX = '/api';
        exports.API_PRO_PREFIX = API_PRO_PREFIX = '';
        break;
    default:
        exports.API_PREFIX = API_PREFIX = '/lsnew/api';
        exports.API_PRO_PREFIX = API_PRO_PREFIX = '/lsnew';
        break;
}

exports.API_PREFIX = API_PREFIX;
exports.API_PRO_PREFIX = API_PRO_PREFIX;

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Placeholder
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 占位组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Placeholder = function (_Component) {
    _inherits(Placeholder, _Component);

    function Placeholder() {
        _classCallCheck(this, Placeholder);

        return _possibleConstructorReturn(this, (Placeholder.__proto__ || Object.getPrototypeOf(Placeholder)).apply(this, arguments));
    }

    _createClass(Placeholder, [{
        key: 'render',
        value: function render() {
            var type = this.props.type;


            var phHeader = null;
            switch (type) {
                case 'default':
                    phHeader = _react2.default.createElement(
                        'div',
                        { className: 'ph-header func-clearfix' },
                        _react2.default.createElement(
                            'div',
                            { className: 'left' },
                            _react2.default.createElement('p', { className: 'element' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'right' },
                            _react2.default.createElement('p', { className: 'first element' }),
                            _react2.default.createElement('p', { className: 'second element' })
                        )
                    );
                    break;
                case 'content':
                    break;
                default:
                    break;
            }

            return _react2.default.createElement(
                'div',
                { className: 'plugin-placeholder' },
                phHeader,
                _react2.default.createElement(
                    'div',
                    { className: 'ph-content' },
                    _react2.default.createElement('p', { className: 'first element' }),
                    _react2.default.createElement('p', { className: 'second element' }),
                    _react2.default.createElement('p', { className: 'third element' })
                )
            );
        }
    }]);

    return Placeholder;
}(_react.Component);

exports.default = Placeholder;

Placeholder.propsType = {
    type: _propTypes2.default.string
};
Placeholder.defaultProps = {
    type: 'default'
};

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadCartList = loadCartList;
exports.addToCart = addToCart;
exports.updateCartNumber = updateCartNumber;
exports.removeFromCart = removeFromCart;
exports.initialPayMethod = initialPayMethod;
exports.updatePayMethod = updatePayMethod;

var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _NProgress = __webpack_require__(42);

var _NProgress2 = _interopRequireDefault(_NProgress);

var _api = __webpack_require__(10);

var _Message = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file cartActions.js
 * @desc 购物车相关的actions
 * @author wangyong(1223427693@qq.com)
 */
function clearCartListStorage() {
    localStorage.removeItem("cartList");
}

// 获取购物车列表
function loadCartList() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var _opt$cb = opt.cb,
            cb = _opt$cb === undefined ? function () {} : _opt$cb;

        var userInfo = getState().userInfo;

        // 未登录情况下加载本地购物车列表
        if (userInfo == null) {
            var cartList = loadCartListStorage();
            dispatch({
                type: 'LOAD_CARTLIST_SUCCESS',
                data: cartList
            });
            cb();
        } else {
            // 已登录情况下需要先判断本地购物车列表是否为空，不如不为空，需要和线上购物车同步
            var _cartList = loadCartListStorage();
            if (_cartList.length > 0) {
                var cartItems = _.map(_cartList, function (_item) {
                    return {
                        p_id: _item.p_id,
                        s_id: _item.s_id,
                        number: _item.number
                    };
                });
                _jquery2.default.post(_api.API_PREFIX + '/transaction/cartAdd', {
                    games: JSON.stringify(cartItems)
                }).done(function (res) {
                    if (res.Code === 40000) {
                        // 合并本地购物车和线上购物车以后需要清空本地的购物车
                        clearCartListStorage();
                        _jquery2.default.get(_api.API_PREFIX + '/transaction/cart').done(function (res) {
                            if (res.Code === 40000) {
                                dispatch({
                                    type: 'LOAD_CARTLIST_SUCCESS',
                                    data: res.data
                                });
                            } else {
                                _Message.message.error(res.Msg);
                            }
                        }).fail(function (err) {
                            _Message.message.error(err.statusText);
                        }).always(function () {
                            cb();
                        });
                    } else {
                        _Message.message.error(res.Msg);
                    }
                }).fail(function (err) {
                    _Message.message.error(err.statusText);
                });
            } else {
                _jquery2.default.get(_api.API_PREFIX + '/transaction/cart').done(function (res) {
                    if (res.Code === 40000) {
                        dispatch({
                            type: 'LOAD_CARTLIST_SUCCESS',
                            data: res.data
                        });
                    } else {
                        _Message.message.error(res.Msg);
                    }
                }).fail(function (err) {
                    _Message.message.error(err.statusText);
                }).always(function () {
                    cb();
                });
            }
        }
    };
}

// 未登录获取购物车列表
function loadCartListStorage() {
    var cartList = localStorage.getItem("cartList") || "[]";
    return JSON.parse(cartList);
}

// 添加游戏到购物车
function addToCart() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        _NProgress2.default.start();
        var game = opt.game,
            _opt$cb2 = opt.cb,
            cb = _opt$cb2 === undefined ? function () {} : _opt$cb2;

        var userInfo = getState().userInfo;

        // 未登录情况下添加商品到本地购物车列表
        if (userInfo == null) {
            addToCartStorage(game);
            var cartList = loadCartListStorage();
            dispatch({
                type: 'UPDATE_CARTLIST_SUCCESS',
                data: cartList
            });
            _NProgress2.default.done();
            cb();
        } else {
            _jquery2.default.post(_api.API_PREFIX + '/transaction/cart', {
                p_id: game.p_id,
                s_id: game.s_id || 0,
                number: 1
            }).done(function (res) {
                if (res.Code === 40000) {
                    // 添加完游戏以后更新购物车
                    _jquery2.default.get(_api.API_PREFIX + '/transaction/cart').done(function (res) {
                        dispatch({
                            type: 'UPDATE_CARTLIST_SUCCESS',
                            data: res.data
                        });
                        cb();
                    }).fail(function (err) {
                        _Message.message.error(err.statusText);
                    }).always(function () {
                        _NProgress2.default.done();
                    });
                } else {
                    _NProgress2.default.done();
                    _Message.message.error(res.Msg);
                }
            }).fail(function (err) {
                _NProgress2.default.done();
                _Message.message.error(err.statusText);
            });
        }
    };
}

// 未登录加入购物车
function addToCartStorage(game) {
    var cartList = loadCartListStorage();
    var index = _.findIndex(cartList, {
        s_id: game.s_id
    });
    if (index > -1) {
        cartList[index].number = cartList[index].number + 1;
    } else {
        var cartItem = _.assign({}, game, {
            number: 1,
            thumbnail: game.thumb_img,
            cart_id: new Date() * 1
        });
        cartList.push(cartItem);
    }
    localStorage.setItem('cartList', JSON.stringify(cartList));
}

// 修改购物车数量
function updateCartNumber() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        _NProgress2.default.start();
        var game = opt.game,
            number = opt.number,
            _opt$cb3 = opt.cb,
            cb = _opt$cb3 === undefined ? function () {} : _opt$cb3;

        var userInfo = getState().userInfo;

        // 未登录情况下修改本地购物车数量
        if (userInfo == null) {
            updateCartNumberStorage(game, number);
            var cartList = loadCartListStorage();
            dispatch({
                type: 'UPDATE_CARTLIST_SUCCESS',
                data: cartList
            });
            _NProgress2.default.done();
            cb();
        } else {
            _jquery2.default.ajax({
                url: _api.API_PREFIX + '/transaction/cart',
                type: 'put',
                data: {
                    cart_id: game.cart_id,
                    number: number
                }
            }).done(function (res) {
                if (res.Code === 40000) {
                    // 删除以后更新购物车
                    _jquery2.default.get(_api.API_PREFIX + '/transaction/cart').done(function (res) {
                        dispatch({
                            type: 'UPDATE_CARTLIST_SUCCESS',
                            data: res.data
                        });
                        cb();
                    }).fail(function (err) {
                        _Message.message.error(err.statusText);
                    }).always(function () {
                        _NProgress2.default.done();
                    });
                } else {
                    _NProgress2.default.done();
                    _Message.message.error(res.Msg);
                }
            }).fail(function (err) {
                _NProgress2.default.done();
                _Message.message.error(err.statusText);
            });
        }
    };
}

// 未登录情况下修改购物车数量
function updateCartNumberStorage(game, number) {
    var cartList = loadCartListStorage();
    var index = _.findIndex(cartList, {
        cart_id: game.cart_id
    });
    if (index > -1) {
        cartList[index].number = number;
    }
    localStorage.setItem("cartList", JSON.stringify(cartList));
}

// 删除购物车游戏
function removeFromCart() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        _NProgress2.default.start();
        var game = opt.game,
            _opt$cb4 = opt.cb,
            cb = _opt$cb4 === undefined ? function () {} : _opt$cb4;

        var userInfo = getState().userInfo;

        // 未登录情况下删除购物车
        if (userInfo == null) {
            removeFromCartStorage(game);
            var cartList = loadCartListStorage();
            dispatch({
                type: 'UPDATE_CARTLIST_SUCCESS',
                data: cartList
            });
            _NProgress2.default.done();
            cb();
        } else {
            _jquery2.default.ajax({
                url: _api.API_PREFIX + '/transaction/cart',
                type: 'delete',
                data: { cart_id: game.cart_id }
            }).done(function (res) {
                if (res.Code === 40000) {
                    // 删除以后更新购物车
                    _jquery2.default.get(_api.API_PREFIX + '/transaction/cart').done(function (res) {
                        dispatch({
                            type: 'UPDATE_CARTLIST_SUCCESS',
                            data: res.data
                        });
                        cb();
                    }).fail(function (err) {
                        _Message.message.error(err.statusText);
                    }).always(function () {
                        _NProgress2.default.done();
                    });
                } else {
                    _NProgress2.default.done();
                    _Message.message.error(res.Msg);
                }
            }).fail(function (err) {
                _NProgress2.default.done();
                _Message.message.error(err.statusText);
            });
        }
    };
}

// 未登录情况下删除购物车
function removeFromCartStorage(game) {
    var cartList = loadCartListStorage();
    cartList = _.filter(cartList, function (_item) {
        return _item.cart_id !== game.cart_id;
    });
    localStorage.setItem("cartList", JSON.stringify(cartList));
}

// 初始化支付方式
function initialPayMethod() {
    return {
        type: 'INITIAL_PAYMETHOD'
    };
}
// 更新支付方式
function updatePayMethod(method) {
    return {
        type: 'UPDATE_PAYMETHOD',
        data: method
    };
}

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nprogress = __webpack_require__(263);

var _nprogress2 = _interopRequireDefault(_nprogress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NProgress.configure({ showSpinner: false });
exports.default = _nprogress2.default; /**
                                        * @file NProgress.js
                                        * @desc NProgress配置好的对象
                                        * @author wangyong(1223427693@qq.com)
                                        */

/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/react-select
*/



Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(13);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactInputAutosize = __webpack_require__(379);

var _reactInputAutosize2 = _interopRequireDefault(_reactInputAutosize);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsDefaultArrowRenderer = __webpack_require__(385);

var _utilsDefaultArrowRenderer2 = _interopRequireDefault(_utilsDefaultArrowRenderer);

var _utilsDefaultFilterOptions = __webpack_require__(155);

var _utilsDefaultFilterOptions2 = _interopRequireDefault(_utilsDefaultFilterOptions);

var _utilsDefaultMenuRenderer = __webpack_require__(156);

var _utilsDefaultMenuRenderer2 = _interopRequireDefault(_utilsDefaultMenuRenderer);

var _utilsDefaultClearRenderer = __webpack_require__(386);

var _utilsDefaultClearRenderer2 = _interopRequireDefault(_utilsDefaultClearRenderer);

var _Async = __webpack_require__(380);

var _Async2 = _interopRequireDefault(_Async);

var _AsyncCreatable = __webpack_require__(381);

var _AsyncCreatable2 = _interopRequireDefault(_AsyncCreatable);

var _Creatable = __webpack_require__(382);

var _Creatable2 = _interopRequireDefault(_Creatable);

var _Option = __webpack_require__(383);

var _Option2 = _interopRequireDefault(_Option);

var _Value = __webpack_require__(384);

var _Value2 = _interopRequireDefault(_Value);

function stringifyValue(value) {
	var valueType = typeof value;
	if (valueType === 'string') {
		return value;
	} else if (valueType === 'object') {
		return JSON.stringify(value);
	} else if (valueType === 'number' || valueType === 'boolean') {
		return String(value);
	} else {
		return '';
	}
}

var stringOrNode = _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].node]);

var instanceId = 1;

var Select = (0, _createReactClass2['default'])({

	displayName: 'Select',

	propTypes: {
		addLabelText: _propTypes2['default'].string, // placeholder displayed when you want to add a label on a multi-value input
		'aria-describedby': _propTypes2['default'].string, // HTML ID(s) of element(s) that should be used to describe this input (for assistive tech)
		'aria-label': _propTypes2['default'].string, // Aria label (for assistive tech)
		'aria-labelledby': _propTypes2['default'].string, // HTML ID of an element that should be used as the label (for assistive tech)
		arrowRenderer: _propTypes2['default'].func, // Create drop-down caret element
		autoBlur: _propTypes2['default'].bool, // automatically blur the component when an option is selected
		autofocus: _propTypes2['default'].bool, // autofocus the component on mount
		autosize: _propTypes2['default'].bool, // whether to enable autosizing or not
		backspaceRemoves: _propTypes2['default'].bool, // whether backspace removes an item if there is no text input
		backspaceToRemoveMessage: _propTypes2['default'].string, // Message to use for screenreaders to press backspace to remove the current item - {label} is replaced with the item label
		className: _propTypes2['default'].string, // className for the outer element
		clearAllText: stringOrNode, // title for the "clear" control when multi: true
		clearRenderer: _propTypes2['default'].func, // create clearable x element
		clearValueText: stringOrNode, // title for the "clear" control
		clearable: _propTypes2['default'].bool, // should it be possible to reset value
		deleteRemoves: _propTypes2['default'].bool, // whether backspace removes an item if there is no text input
		delimiter: _propTypes2['default'].string, // delimiter to use to join multiple values for the hidden field value
		disabled: _propTypes2['default'].bool, // whether the Select is disabled or not
		escapeClearsValue: _propTypes2['default'].bool, // whether escape clears the value when the menu is closed
		filterOption: _propTypes2['default'].func, // method to filter a single option (option, filterString)
		filterOptions: _propTypes2['default'].any, // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
		ignoreAccents: _propTypes2['default'].bool, // whether to strip diacritics when filtering
		ignoreCase: _propTypes2['default'].bool, // whether to perform case-insensitive filtering
		inputProps: _propTypes2['default'].object, // custom attributes for the Input
		inputRenderer: _propTypes2['default'].func, // returns a custom input component
		instanceId: _propTypes2['default'].string, // set the components instanceId
		isLoading: _propTypes2['default'].bool, // whether the Select is loading externally or not (such as options being loaded)
		joinValues: _propTypes2['default'].bool, // joins multiple values into a single form field with the delimiter (legacy mode)
		labelKey: _propTypes2['default'].string, // path of the label value in option objects
		matchPos: _propTypes2['default'].string, // (any|start) match the start or entire string when filtering
		matchProp: _propTypes2['default'].string, // (any|label|value) which option property to filter on
		menuBuffer: _propTypes2['default'].number, // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
		menuContainerStyle: _propTypes2['default'].object, // optional style to apply to the menu container
		menuRenderer: _propTypes2['default'].func, // renders a custom menu with options
		menuStyle: _propTypes2['default'].object, // optional style to apply to the menu
		multi: _propTypes2['default'].bool, // multi-value input
		name: _propTypes2['default'].string, // generates a hidden <input /> tag with this field name for html forms
		noResultsText: stringOrNode, // placeholder displayed when there are no matching search results
		onBlur: _propTypes2['default'].func, // onBlur handler: function (event) {}
		onBlurResetsInput: _propTypes2['default'].bool, // whether input is cleared on blur
		onChange: _propTypes2['default'].func, // onChange handler: function (newValue) {}
		onClose: _propTypes2['default'].func, // fires when the menu is closed
		onCloseResetsInput: _propTypes2['default'].bool, // whether input is cleared when menu is closed through the arrow
		onFocus: _propTypes2['default'].func, // onFocus handler: function (event) {}
		onInputChange: _propTypes2['default'].func, // onInputChange handler: function (inputValue) {}
		onInputKeyDown: _propTypes2['default'].func, // input keyDown handler: function (event) {}
		onMenuScrollToBottom: _propTypes2['default'].func, // fires when the menu is scrolled to the bottom; can be used to paginate options
		onOpen: _propTypes2['default'].func, // fires when the menu is opened
		onValueClick: _propTypes2['default'].func, // onClick handler for value labels: function (value, event) {}
		openAfterFocus: _propTypes2['default'].bool, // boolean to enable opening dropdown when focused
		openOnFocus: _propTypes2['default'].bool, // always open options menu on focus
		optionClassName: _propTypes2['default'].string, // additional class(es) to apply to the <Option /> elements
		optionComponent: _propTypes2['default'].func, // option component to render in dropdown
		optionRenderer: _propTypes2['default'].func, // optionRenderer: function (option) {}
		options: _propTypes2['default'].array, // array of options
		pageSize: _propTypes2['default'].number, // number of entries to page when using page up/down keys
		placeholder: stringOrNode, // field placeholder, displayed when there's no value
		required: _propTypes2['default'].bool, // applies HTML5 required attribute when needed
		resetValue: _propTypes2['default'].any, // value to use when you clear the control
		scrollMenuIntoView: _propTypes2['default'].bool, // boolean to enable the viewport to shift so that the full menu fully visible when engaged
		searchable: _propTypes2['default'].bool, // whether to enable searching feature or not
		simpleValue: _propTypes2['default'].bool, // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
		style: _propTypes2['default'].object, // optional style to apply to the control
		tabIndex: _propTypes2['default'].string, // optional tab index of the control
		tabSelectsValue: _propTypes2['default'].bool, // whether to treat tabbing out while focused to be value selection
		value: _propTypes2['default'].any, // initial field value
		valueComponent: _propTypes2['default'].func, // value component to render
		valueKey: _propTypes2['default'].string, // path of the label value in option objects
		valueRenderer: _propTypes2['default'].func, // valueRenderer: function (option) {}
		wrapperStyle: _propTypes2['default'].object },

	// optional style to apply to the component wrapper
	statics: { Async: _Async2['default'], AsyncCreatable: _AsyncCreatable2['default'], Creatable: _Creatable2['default'] },

	getDefaultProps: function getDefaultProps() {
		return {
			addLabelText: 'Add "{label}"?',
			arrowRenderer: _utilsDefaultArrowRenderer2['default'],
			autosize: true,
			backspaceRemoves: true,
			backspaceToRemoveMessage: 'Press backspace to remove {label}',
			clearable: true,
			clearAllText: 'Clear all',
			clearRenderer: _utilsDefaultClearRenderer2['default'],
			clearValueText: 'Clear value',
			deleteRemoves: true,
			delimiter: ',',
			disabled: false,
			escapeClearsValue: true,
			filterOptions: _utilsDefaultFilterOptions2['default'],
			ignoreAccents: true,
			ignoreCase: true,
			inputProps: {},
			isLoading: false,
			joinValues: false,
			labelKey: 'label',
			matchPos: 'any',
			matchProp: 'any',
			menuBuffer: 0,
			menuRenderer: _utilsDefaultMenuRenderer2['default'],
			multi: false,
			noResultsText: 'No results found',
			onBlurResetsInput: true,
			onCloseResetsInput: true,
			optionComponent: _Option2['default'],
			pageSize: 5,
			placeholder: 'Select...',
			required: false,
			scrollMenuIntoView: true,
			searchable: true,
			simpleValue: false,
			tabSelectsValue: true,
			valueComponent: _Value2['default'],
			valueKey: 'value'
		};
	},

	getInitialState: function getInitialState() {
		return {
			inputValue: '',
			isFocused: false,
			isOpen: false,
			isPseudoFocused: false,
			required: false
		};
	},

	componentWillMount: function componentWillMount() {
		this._instancePrefix = 'react-select-' + (this.props.instanceId || ++instanceId) + '-';
		var valueArray = this.getValueArray(this.props.value);

		if (this.props.required) {
			this.setState({
				required: this.handleRequired(valueArray[0], this.props.multi)
			});
		}
	},

	componentDidMount: function componentDidMount() {
		if (this.props.autofocus) {
			this.focus();
		}
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		var valueArray = this.getValueArray(nextProps.value, nextProps);

		if (nextProps.required) {
			this.setState({
				required: this.handleRequired(valueArray[0], nextProps.multi)
			});
		}
	},

	componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
		if (nextState.isOpen !== this.state.isOpen) {
			this.toggleTouchOutsideEvent(nextState.isOpen);
			var handler = nextState.isOpen ? nextProps.onOpen : nextProps.onClose;
			handler && handler();
		}
	},

	componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
		// focus to the selected option
		if (this.menu && this.focused && this.state.isOpen && !this.hasScrolledToOption) {
			var focusedOptionNode = _reactDom2['default'].findDOMNode(this.focused);
			var menuNode = _reactDom2['default'].findDOMNode(this.menu);
			menuNode.scrollTop = focusedOptionNode.offsetTop;
			this.hasScrolledToOption = true;
		} else if (!this.state.isOpen) {
			this.hasScrolledToOption = false;
		}

		if (this._scrollToFocusedOptionOnUpdate && this.focused && this.menu) {
			this._scrollToFocusedOptionOnUpdate = false;
			var focusedDOM = _reactDom2['default'].findDOMNode(this.focused);
			var menuDOM = _reactDom2['default'].findDOMNode(this.menu);
			var focusedRect = focusedDOM.getBoundingClientRect();
			var menuRect = menuDOM.getBoundingClientRect();
			if (focusedRect.bottom > menuRect.bottom || focusedRect.top < menuRect.top) {
				menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
			}
		}
		if (this.props.scrollMenuIntoView && this.menuContainer) {
			var menuContainerRect = this.menuContainer.getBoundingClientRect();
			if (window.innerHeight < menuContainerRect.bottom + this.props.menuBuffer) {
				window.scrollBy(0, menuContainerRect.bottom + this.props.menuBuffer - window.innerHeight);
			}
		}
		if (prevProps.disabled !== this.props.disabled) {
			this.setState({ isFocused: false }); // eslint-disable-line react/no-did-update-set-state
			this.closeMenu();
		}
	},

	componentWillUnmount: function componentWillUnmount() {
		if (!document.removeEventListener && document.detachEvent) {
			document.detachEvent('ontouchstart', this.handleTouchOutside);
		} else {
			document.removeEventListener('touchstart', this.handleTouchOutside);
		}
	},

	toggleTouchOutsideEvent: function toggleTouchOutsideEvent(enabled) {
		if (enabled) {
			if (!document.addEventListener && document.attachEvent) {
				document.attachEvent('ontouchstart', this.handleTouchOutside);
			} else {
				document.addEventListener('touchstart', this.handleTouchOutside);
			}
		} else {
			if (!document.removeEventListener && document.detachEvent) {
				document.detachEvent('ontouchstart', this.handleTouchOutside);
			} else {
				document.removeEventListener('touchstart', this.handleTouchOutside);
			}
		}
	},

	handleTouchOutside: function handleTouchOutside(event) {
		// handle touch outside on ios to dismiss menu
		if (this.wrapper && !this.wrapper.contains(event.target)) {
			this.closeMenu();
		}
	},

	focus: function focus() {
		if (!this.input) return;
		this.input.focus();
	},

	blurInput: function blurInput() {
		if (!this.input) return;
		this.input.blur();
	},

	handleTouchMove: function handleTouchMove(event) {
		// Set a flag that the view is being dragged
		this.dragging = true;
	},

	handleTouchStart: function handleTouchStart(event) {
		// Set a flag that the view is not being dragged
		this.dragging = false;
	},

	handleTouchEnd: function handleTouchEnd(event) {
		// Check if the view is being dragged, In this case
		// we don't want to fire the click event (because the user only wants to scroll)
		if (this.dragging) return;

		// Fire the mouse events
		this.handleMouseDown(event);
	},

	handleTouchEndClearValue: function handleTouchEndClearValue(event) {
		// Check if the view is being dragged, In this case
		// we don't want to fire the click event (because the user only wants to scroll)
		if (this.dragging) return;

		// Clear the value
		this.clearValue(event);
	},

	handleMouseDown: function handleMouseDown(event) {
		// if the event was triggered by a mousedown and not the primary
		// button, or if the component is disabled, ignore it.
		if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
			return;
		}

		if (event.target.tagName === 'INPUT') {
			return;
		}

		// prevent default event handlers
		event.stopPropagation();
		event.preventDefault();

		// for the non-searchable select, toggle the menu
		if (!this.props.searchable) {
			this.focus();
			return this.setState({
				isOpen: !this.state.isOpen
			});
		}

		if (this.state.isFocused) {
			// On iOS, we can get into a state where we think the input is focused but it isn't really,
			// since iOS ignores programmatic calls to input.focus() that weren't triggered by a click event.
			// Call focus() again here to be safe.
			this.focus();

			var input = this.input;
			if (typeof input.getInput === 'function') {
				// Get the actual DOM input if the ref is an <AutosizeInput /> component
				input = input.getInput();
			}

			// clears the value so that the cursor will be at the end of input when the component re-renders
			input.value = '';

			// if the input is focused, ensure the menu is open
			this.setState({
				isOpen: true,
				isPseudoFocused: false
			});
		} else {
			// otherwise, focus the input and open the menu
			this._openAfterFocus = true;
			this.focus();
		}
	},

	handleMouseDownOnArrow: function handleMouseDownOnArrow(event) {
		// if the event was triggered by a mousedown and not the primary
		// button, or if the component is disabled, ignore it.
		if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
			return;
		}
		// If the menu isn't open, let the event bubble to the main handleMouseDown
		if (!this.state.isOpen) {
			return;
		}
		// prevent default event handlers
		event.stopPropagation();
		event.preventDefault();
		// close the menu
		this.closeMenu();
	},

	handleMouseDownOnMenu: function handleMouseDownOnMenu(event) {
		// if the event was triggered by a mousedown and not the primary
		// button, or if the component is disabled, ignore it.
		if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
			return;
		}
		event.stopPropagation();
		event.preventDefault();

		this._openAfterFocus = true;
		this.focus();
	},

	closeMenu: function closeMenu() {
		if (this.props.onCloseResetsInput) {
			this.setState({
				isOpen: false,
				isPseudoFocused: this.state.isFocused && !this.props.multi,
				inputValue: ''
			});
		} else {
			this.setState({
				isOpen: false,
				isPseudoFocused: this.state.isFocused && !this.props.multi,
				inputValue: this.state.inputValue
			});
		}
		this.hasScrolledToOption = false;
	},

	handleInputFocus: function handleInputFocus(event) {
		if (this.props.disabled) return;
		var isOpen = this.state.isOpen || this._openAfterFocus || this.props.openOnFocus;
		if (this.props.onFocus) {
			this.props.onFocus(event);
		}
		this.setState({
			isFocused: true,
			isOpen: isOpen
		});
		this._openAfterFocus = false;
	},

	handleInputBlur: function handleInputBlur(event) {
		// The check for menu.contains(activeElement) is necessary to prevent IE11's scrollbar from closing the menu in certain contexts.
		if (this.menu && (this.menu === document.activeElement || this.menu.contains(document.activeElement))) {
			this.focus();
			return;
		}

		if (this.props.onBlur) {
			this.props.onBlur(event);
		}
		var onBlurredState = {
			isFocused: false,
			isOpen: false,
			isPseudoFocused: false
		};
		if (this.props.onBlurResetsInput) {
			onBlurredState.inputValue = '';
		}
		this.setState(onBlurredState);
	},

	handleInputChange: function handleInputChange(event) {
		var newInputValue = event.target.value;

		if (this.state.inputValue !== event.target.value && this.props.onInputChange) {
			var nextState = this.props.onInputChange(newInputValue);
			// Note: != used deliberately here to catch undefined and null
			if (nextState != null && typeof nextState !== 'object') {
				newInputValue = '' + nextState;
			}
		}

		this.setState({
			isOpen: true,
			isPseudoFocused: false,
			inputValue: newInputValue
		});
	},

	handleKeyDown: function handleKeyDown(event) {
		if (this.props.disabled) return;

		if (typeof this.props.onInputKeyDown === 'function') {
			this.props.onInputKeyDown(event);
			if (event.defaultPrevented) {
				return;
			}
		}

		switch (event.keyCode) {
			case 8:
				// backspace
				if (!this.state.inputValue && this.props.backspaceRemoves) {
					event.preventDefault();
					this.popValue();
				}
				return;
			case 9:
				// tab
				if (event.shiftKey || !this.state.isOpen || !this.props.tabSelectsValue) {
					return;
				}
				this.selectFocusedOption();
				return;
			case 13:
				// enter
				if (!this.state.isOpen) return;
				event.stopPropagation();
				this.selectFocusedOption();
				break;
			case 27:
				// escape
				if (this.state.isOpen) {
					this.closeMenu();
					event.stopPropagation();
				} else if (this.props.clearable && this.props.escapeClearsValue) {
					this.clearValue(event);
					event.stopPropagation();
				}
				break;
			case 38:
				// up
				this.focusPreviousOption();
				break;
			case 40:
				// down
				this.focusNextOption();
				break;
			case 33:
				// page up
				this.focusPageUpOption();
				break;
			case 34:
				// page down
				this.focusPageDownOption();
				break;
			case 35:
				// end key
				if (event.shiftKey) {
					return;
				}
				this.focusEndOption();
				break;
			case 36:
				// home key
				if (event.shiftKey) {
					return;
				}
				this.focusStartOption();
				break;
			case 46:
				// backspace
				if (!this.state.inputValue && this.props.deleteRemoves) {
					event.preventDefault();
					this.popValue();
				}
				return;
			default:
				return;
		}
		event.preventDefault();
	},

	handleValueClick: function handleValueClick(option, event) {
		if (!this.props.onValueClick) return;
		this.props.onValueClick(option, event);
	},

	handleMenuScroll: function handleMenuScroll(event) {
		if (!this.props.onMenuScrollToBottom) return;
		var target = event.target;

		if (target.scrollHeight > target.offsetHeight && !(target.scrollHeight - target.offsetHeight - target.scrollTop)) {
			this.props.onMenuScrollToBottom();
		}
	},

	handleRequired: function handleRequired(value, multi) {
		if (!value) return true;
		return multi ? value.length === 0 : Object.keys(value).length === 0;
	},

	getOptionLabel: function getOptionLabel(op) {
		return op[this.props.labelKey];
	},

	/**
  * Turns a value into an array from the given options
  * @param	{String|Number|Array}	value		- the value of the select input
  * @param	{Object}		nextProps	- optionally specify the nextProps so the returned array uses the latest configuration
  * @returns	{Array}	the value of the select represented in an array
  */
	getValueArray: function getValueArray(value, nextProps) {
		var _this = this;

		/** support optionally passing in the `nextProps` so `componentWillReceiveProps` updates will function as expected */
		var props = typeof nextProps === 'object' ? nextProps : this.props;
		if (props.multi) {
			if (typeof value === 'string') value = value.split(props.delimiter);
			if (!Array.isArray(value)) {
				if (value === null || value === undefined) return [];
				value = [value];
			}
			return value.map(function (value) {
				return _this.expandValue(value, props);
			}).filter(function (i) {
				return i;
			});
		}
		var expandedValue = this.expandValue(value, props);
		return expandedValue ? [expandedValue] : [];
	},

	/**
  * Retrieve a value from the given options and valueKey
  * @param	{String|Number|Array}	value	- the selected value(s)
  * @param	{Object}		props	- the Select component's props (or nextProps)
  */
	expandValue: function expandValue(value, props) {
		var valueType = typeof value;
		if (valueType !== 'string' && valueType !== 'number' && valueType !== 'boolean') return value;
		var options = props.options;
		var valueKey = props.valueKey;

		if (!options) return;
		for (var i = 0; i < options.length; i++) {
			if (options[i][valueKey] === value) return options[i];
		}
	},

	setValue: function setValue(value) {
		var _this2 = this;

		if (this.props.autoBlur) {
			this.blurInput();
		}
		if (!this.props.onChange) return;
		if (this.props.required) {
			var required = this.handleRequired(value, this.props.multi);
			this.setState({ required: required });
		}
		if (this.props.simpleValue && value) {
			value = this.props.multi ? value.map(function (i) {
				return i[_this2.props.valueKey];
			}).join(this.props.delimiter) : value[this.props.valueKey];
		}
		this.props.onChange(value);
	},

	selectValue: function selectValue(value) {
		var _this3 = this;

		//NOTE: update value in the callback to make sure the input value is empty so that there are no styling issues (Chrome had issue otherwise)
		this.hasScrolledToOption = false;
		if (this.props.multi) {
			this.setState({
				inputValue: '',
				focusedIndex: null
			}, function () {
				_this3.addValue(value);
			});
		} else {
			this.setState({
				isOpen: false,
				inputValue: '',
				isPseudoFocused: this.state.isFocused
			}, function () {
				_this3.setValue(value);
			});
		}
	},

	addValue: function addValue(value) {
		var valueArray = this.getValueArray(this.props.value);
		var visibleOptions = this._visibleOptions.filter(function (val) {
			return !val.disabled;
		});
		var lastValueIndex = visibleOptions.indexOf(value);
		this.setValue(valueArray.concat(value));
		if (visibleOptions.length - 1 === lastValueIndex) {
			// the last option was selected; focus the second-last one
			this.focusOption(visibleOptions[lastValueIndex - 1]);
		} else if (visibleOptions.length > lastValueIndex) {
			// focus the option below the selected one
			this.focusOption(visibleOptions[lastValueIndex + 1]);
		}
	},

	popValue: function popValue() {
		var valueArray = this.getValueArray(this.props.value);
		if (!valueArray.length) return;
		if (valueArray[valueArray.length - 1].clearableValue === false) return;
		this.setValue(valueArray.slice(0, valueArray.length - 1));
	},

	removeValue: function removeValue(value) {
		var valueArray = this.getValueArray(this.props.value);
		this.setValue(valueArray.filter(function (i) {
			return i !== value;
		}));
		this.focus();
	},

	clearValue: function clearValue(event) {
		// if the event was triggered by a mousedown and not the primary
		// button, ignore it.
		if (event && event.type === 'mousedown' && event.button !== 0) {
			return;
		}
		event.stopPropagation();
		event.preventDefault();
		this.setValue(this.getResetValue());
		this.setState({
			isOpen: false,
			inputValue: ''
		}, this.focus);
	},

	getResetValue: function getResetValue() {
		if (this.props.resetValue !== undefined) {
			return this.props.resetValue;
		} else if (this.props.multi) {
			return [];
		} else {
			return null;
		}
	},

	focusOption: function focusOption(option) {
		this.setState({
			focusedOption: option
		});
	},

	focusNextOption: function focusNextOption() {
		this.focusAdjacentOption('next');
	},

	focusPreviousOption: function focusPreviousOption() {
		this.focusAdjacentOption('previous');
	},

	focusPageUpOption: function focusPageUpOption() {
		this.focusAdjacentOption('page_up');
	},

	focusPageDownOption: function focusPageDownOption() {
		this.focusAdjacentOption('page_down');
	},

	focusStartOption: function focusStartOption() {
		this.focusAdjacentOption('start');
	},

	focusEndOption: function focusEndOption() {
		this.focusAdjacentOption('end');
	},

	focusAdjacentOption: function focusAdjacentOption(dir) {
		var options = this._visibleOptions.map(function (option, index) {
			return { option: option, index: index };
		}).filter(function (option) {
			return !option.option.disabled;
		});
		this._scrollToFocusedOptionOnUpdate = true;
		if (!this.state.isOpen) {
			this.setState({
				isOpen: true,
				inputValue: '',
				focusedOption: this._focusedOption || (options.length ? options[dir === 'next' ? 0 : options.length - 1].option : null)
			});
			return;
		}
		if (!options.length) return;
		var focusedIndex = -1;
		for (var i = 0; i < options.length; i++) {
			if (this._focusedOption === options[i].option) {
				focusedIndex = i;
				break;
			}
		}
		if (dir === 'next' && focusedIndex !== -1) {
			focusedIndex = (focusedIndex + 1) % options.length;
		} else if (dir === 'previous') {
			if (focusedIndex > 0) {
				focusedIndex = focusedIndex - 1;
			} else {
				focusedIndex = options.length - 1;
			}
		} else if (dir === 'start') {
			focusedIndex = 0;
		} else if (dir === 'end') {
			focusedIndex = options.length - 1;
		} else if (dir === 'page_up') {
			var potentialIndex = focusedIndex - this.props.pageSize;
			if (potentialIndex < 0) {
				focusedIndex = 0;
			} else {
				focusedIndex = potentialIndex;
			}
		} else if (dir === 'page_down') {
			var potentialIndex = focusedIndex + this.props.pageSize;
			if (potentialIndex > options.length - 1) {
				focusedIndex = options.length - 1;
			} else {
				focusedIndex = potentialIndex;
			}
		}

		if (focusedIndex === -1) {
			focusedIndex = 0;
		}

		this.setState({
			focusedIndex: options[focusedIndex].index,
			focusedOption: options[focusedIndex].option
		});
	},

	getFocusedOption: function getFocusedOption() {
		return this._focusedOption;
	},

	getInputValue: function getInputValue() {
		return this.state.inputValue;
	},

	selectFocusedOption: function selectFocusedOption() {
		if (this._focusedOption) {
			return this.selectValue(this._focusedOption);
		}
	},

	renderLoading: function renderLoading() {
		if (!this.props.isLoading) return;
		return _react2['default'].createElement(
			'span',
			{ className: 'Select-loading-zone', 'aria-hidden': 'true' },
			_react2['default'].createElement('span', { className: 'Select-loading' })
		);
	},

	renderValue: function renderValue(valueArray, isOpen) {
		var _this4 = this;

		var renderLabel = this.props.valueRenderer || this.getOptionLabel;
		var ValueComponent = this.props.valueComponent;
		if (!valueArray.length) {
			return !this.state.inputValue ? _react2['default'].createElement(
				'div',
				{ className: 'Select-placeholder' },
				this.props.placeholder
			) : null;
		}
		var onClick = this.props.onValueClick ? this.handleValueClick : null;
		if (this.props.multi) {
			return valueArray.map(function (value, i) {
				return _react2['default'].createElement(
					ValueComponent,
					{
						id: _this4._instancePrefix + '-value-' + i,
						instancePrefix: _this4._instancePrefix,
						disabled: _this4.props.disabled || value.clearableValue === false,
						key: 'value-' + i + '-' + value[_this4.props.valueKey],
						onClick: onClick,
						onRemove: _this4.removeValue,
						value: value
					},
					renderLabel(value, i),
					_react2['default'].createElement(
						'span',
						{ className: 'Select-aria-only' },
						' '
					)
				);
			});
		} else if (!this.state.inputValue) {
			if (isOpen) onClick = null;
			return _react2['default'].createElement(
				ValueComponent,
				{
					id: this._instancePrefix + '-value-item',
					disabled: this.props.disabled,
					instancePrefix: this._instancePrefix,
					onClick: onClick,
					value: valueArray[0]
				},
				renderLabel(valueArray[0])
			);
		}
	},

	renderInput: function renderInput(valueArray, focusedOptionIndex) {
		var _classNames,
		    _this5 = this;

		var className = (0, _classnames2['default'])('Select-input', this.props.inputProps.className);
		var isOpen = !!this.state.isOpen;

		var ariaOwns = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, this._instancePrefix + '-list', isOpen), _defineProperty(_classNames, this._instancePrefix + '-backspace-remove-message', this.props.multi && !this.props.disabled && this.state.isFocused && !this.state.inputValue), _classNames));

		// TODO: Check how this project includes Object.assign()
		var inputProps = _extends({}, this.props.inputProps, {
			role: 'combobox',
			'aria-expanded': '' + isOpen,
			'aria-owns': ariaOwns,
			'aria-haspopup': '' + isOpen,
			'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
			'aria-describedby': this.props['aria-describedby'],
			'aria-labelledby': this.props['aria-labelledby'],
			'aria-label': this.props['aria-label'],
			className: className,
			tabIndex: this.props.tabIndex,
			onBlur: this.handleInputBlur,
			onChange: this.handleInputChange,
			onFocus: this.handleInputFocus,
			ref: function ref(_ref) {
				return _this5.input = _ref;
			},
			required: this.state.required,
			value: this.state.inputValue
		});

		if (this.props.inputRenderer) {
			return this.props.inputRenderer(inputProps);
		}

		if (this.props.disabled || !this.props.searchable) {
			var _props$inputProps = this.props.inputProps;
			var inputClassName = _props$inputProps.inputClassName;

			var divProps = _objectWithoutProperties(_props$inputProps, ['inputClassName']);

			var _ariaOwns = (0, _classnames2['default'])(_defineProperty({}, this._instancePrefix + '-list', isOpen));

			return _react2['default'].createElement('div', _extends({}, divProps, {
				role: 'combobox',
				'aria-expanded': isOpen,
				'aria-owns': _ariaOwns,
				'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
				className: className,
				tabIndex: this.props.tabIndex || 0,
				onBlur: this.handleInputBlur,
				onFocus: this.handleInputFocus,
				ref: function (ref) {
					return _this5.input = ref;
				},
				'aria-readonly': '' + !!this.props.disabled,
				style: { border: 0, width: 1, display: 'inline-block' } }));
		}

		if (this.props.autosize) {
			return _react2['default'].createElement(_reactInputAutosize2['default'], _extends({}, inputProps, { minWidth: '5' }));
		}
		return _react2['default'].createElement(
			'div',
			{ className: className },
			_react2['default'].createElement('input', inputProps)
		);
	},

	renderClear: function renderClear() {

		if (!this.props.clearable || this.props.value === undefined || this.props.value === null || this.props.multi && !this.props.value.length || this.props.disabled || this.props.isLoading) return;
		var clear = this.props.clearRenderer();

		return _react2['default'].createElement(
			'span',
			{ className: 'Select-clear-zone', title: this.props.multi ? this.props.clearAllText : this.props.clearValueText,
				'aria-label': this.props.multi ? this.props.clearAllText : this.props.clearValueText,
				onMouseDown: this.clearValue,
				onTouchStart: this.handleTouchStart,
				onTouchMove: this.handleTouchMove,
				onTouchEnd: this.handleTouchEndClearValue
			},
			clear
		);
	},

	renderArrow: function renderArrow() {
		var onMouseDown = this.handleMouseDownOnArrow;
		var isOpen = this.state.isOpen;
		var arrow = this.props.arrowRenderer({ onMouseDown: onMouseDown, isOpen: isOpen });

		return _react2['default'].createElement(
			'span',
			{
				className: 'Select-arrow-zone',
				onMouseDown: onMouseDown
			},
			arrow
		);
	},

	filterOptions: function filterOptions(excludeOptions) {
		var filterValue = this.state.inputValue;
		var options = this.props.options || [];
		if (this.props.filterOptions) {
			// Maintain backwards compatibility with boolean attribute
			var filterOptions = typeof this.props.filterOptions === 'function' ? this.props.filterOptions : _utilsDefaultFilterOptions2['default'];

			return filterOptions(options, filterValue, excludeOptions, {
				filterOption: this.props.filterOption,
				ignoreAccents: this.props.ignoreAccents,
				ignoreCase: this.props.ignoreCase,
				labelKey: this.props.labelKey,
				matchPos: this.props.matchPos,
				matchProp: this.props.matchProp,
				valueKey: this.props.valueKey
			});
		} else {
			return options;
		}
	},

	onOptionRef: function onOptionRef(ref, isFocused) {
		if (isFocused) {
			this.focused = ref;
		}
	},

	renderMenu: function renderMenu(options, valueArray, focusedOption) {
		if (options && options.length) {
			return this.props.menuRenderer({
				focusedOption: focusedOption,
				focusOption: this.focusOption,
				instancePrefix: this._instancePrefix,
				labelKey: this.props.labelKey,
				onFocus: this.focusOption,
				onSelect: this.selectValue,
				optionClassName: this.props.optionClassName,
				optionComponent: this.props.optionComponent,
				optionRenderer: this.props.optionRenderer || this.getOptionLabel,
				options: options,
				selectValue: this.selectValue,
				valueArray: valueArray,
				valueKey: this.props.valueKey,
				onOptionRef: this.onOptionRef
			});
		} else if (this.props.noResultsText) {
			return _react2['default'].createElement(
				'div',
				{ className: 'Select-noresults' },
				this.props.noResultsText
			);
		} else {
			return null;
		}
	},

	renderHiddenField: function renderHiddenField(valueArray) {
		var _this6 = this;

		if (!this.props.name) return;
		if (this.props.joinValues) {
			var value = valueArray.map(function (i) {
				return stringifyValue(i[_this6.props.valueKey]);
			}).join(this.props.delimiter);
			return _react2['default'].createElement('input', {
				type: 'hidden',
				ref: function (ref) {
					return _this6.value = ref;
				},
				name: this.props.name,
				value: value,
				disabled: this.props.disabled });
		}
		return valueArray.map(function (item, index) {
			return _react2['default'].createElement('input', { key: 'hidden.' + index,
				type: 'hidden',
				ref: 'value' + index,
				name: _this6.props.name,
				value: stringifyValue(item[_this6.props.valueKey]),
				disabled: _this6.props.disabled });
		});
	},

	getFocusableOptionIndex: function getFocusableOptionIndex(selectedOption) {
		var options = this._visibleOptions;
		if (!options.length) return null;

		var valueKey = this.props.valueKey;
		var focusedOption = this.state.focusedOption || selectedOption;
		if (focusedOption && !focusedOption.disabled) {
			var focusedOptionIndex = -1;
			options.some(function (option, index) {
				var isOptionEqual = option[valueKey] === focusedOption[valueKey];
				if (isOptionEqual) {
					focusedOptionIndex = index;
				}
				return isOptionEqual;
			});
			if (focusedOptionIndex !== -1) {
				return focusedOptionIndex;
			}
		}

		for (var i = 0; i < options.length; i++) {
			if (!options[i].disabled) return i;
		}
		return null;
	},

	renderOuter: function renderOuter(options, valueArray, focusedOption) {
		var _this7 = this;

		var menu = this.renderMenu(options, valueArray, focusedOption);
		if (!menu) {
			return null;
		}

		return _react2['default'].createElement(
			'div',
			{ ref: function (ref) {
					return _this7.menuContainer = ref;
				}, className: 'Select-menu-outer', style: this.props.menuContainerStyle },
			_react2['default'].createElement(
				'div',
				{ ref: function (ref) {
						return _this7.menu = ref;
					}, role: 'listbox', className: 'Select-menu', id: this._instancePrefix + '-list',
					style: this.props.menuStyle,
					onScroll: this.handleMenuScroll,
					onMouseDown: this.handleMouseDownOnMenu },
				menu
			)
		);
	},

	render: function render() {
		var _this8 = this;

		var valueArray = this.getValueArray(this.props.value);
		var options = this._visibleOptions = this.filterOptions(this.props.multi ? this.getValueArray(this.props.value) : null);
		var isOpen = this.state.isOpen;
		if (this.props.multi && !options.length && valueArray.length && !this.state.inputValue) isOpen = false;
		var focusedOptionIndex = this.getFocusableOptionIndex(valueArray[0]);

		var focusedOption = null;
		if (focusedOptionIndex !== null) {
			focusedOption = this._focusedOption = options[focusedOptionIndex];
		} else {
			focusedOption = this._focusedOption = null;
		}
		var className = (0, _classnames2['default'])('Select', this.props.className, {
			'Select--multi': this.props.multi,
			'Select--single': !this.props.multi,
			'is-clearable': this.props.clearable,
			'is-disabled': this.props.disabled,
			'is-focused': this.state.isFocused,
			'is-loading': this.props.isLoading,
			'is-open': isOpen,
			'is-pseudo-focused': this.state.isPseudoFocused,
			'is-searchable': this.props.searchable,
			'has-value': valueArray.length
		});

		var removeMessage = null;
		if (this.props.multi && !this.props.disabled && valueArray.length && !this.state.inputValue && this.state.isFocused && this.props.backspaceRemoves) {
			removeMessage = _react2['default'].createElement(
				'span',
				{ id: this._instancePrefix + '-backspace-remove-message', className: 'Select-aria-only', 'aria-live': 'assertive' },
				this.props.backspaceToRemoveMessage.replace('{label}', valueArray[valueArray.length - 1][this.props.labelKey])
			);
		}

		return _react2['default'].createElement(
			'div',
			{ ref: function (ref) {
					return _this8.wrapper = ref;
				},
				className: className,
				style: this.props.wrapperStyle },
			this.renderHiddenField(valueArray),
			_react2['default'].createElement(
				'div',
				{ ref: function (ref) {
						return _this8.control = ref;
					},
					className: 'Select-control',
					style: this.props.style,
					onKeyDown: this.handleKeyDown,
					onMouseDown: this.handleMouseDown,
					onTouchEnd: this.handleTouchEnd,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove
				},
				_react2['default'].createElement(
					'span',
					{ className: 'Select-multi-value-wrapper', id: this._instancePrefix + '-value' },
					this.renderValue(valueArray, isOpen),
					this.renderInput(valueArray, focusedOptionIndex)
				),
				removeMessage,
				this.renderLoading(),
				this.renderClear(),
				this.renderArrow()
			),
			isOpen ? this.renderOuter(options, !this.props.multi ? valueArray : null, focusedOption) : null
		);
	}

});

exports['default'] = Select;
module.exports = exports['default'];

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isEmail = isEmail;
exports.isPrice = isPrice;
/**
 * @file RegTest.js
 * @desc 正则匹配通用函数
 * @author wangyong(1223427693@qq.com)
 */
// 邮箱验证
function isEmail() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    var reg = /^.+@.+$/;
    return reg.test(str) || str.trim() === '';
}

// 价格验证
function isPrice() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    var reg = /^\d+(\.\d{0,2})?$/;
    return reg.test(str) || str.trim() === '';
}

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadSliderGamesList = loadSliderGamesList;
exports.loadLatestGamesList = loadLatestGamesList;
exports.loadPopularGamesList = loadPopularGamesList;
exports.loadSpecialGamesList = loadSpecialGamesList;
exports.loadGameDeatil = loadGameDeatil;
exports.loadGamesListGroup = loadGamesListGroup;

var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _NProgress = __webpack_require__(42);

var _NProgress2 = _interopRequireDefault(_NProgress);

var _api = __webpack_require__(10);

var _Message = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 加载首页轮播游戏列表
/**
 * @file gameActions.js
 * @desc 游戏相关的actions
 * @author wangyong(1223427693@qq.com)
 */
function loadSliderGamesList() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var _opt$cb = opt.cb,
            cb = _opt$cb === undefined ? function () {} : _opt$cb;

        _jquery2.default.get(_api.API_PREFIX + '/product/slider').done(function (res) {
            var sliderGames = res.data.games;
            var sliderGamesBg = res.data.bg;
            dispatch({
                type: 'LOAD_SLIDER_GAMES_LIST_SUCCESS',
                data: sliderGames
            });
            dispatch({
                type: 'LOAD_SLIDER_GAMES_BG_SUCCESS',
                data: sliderGamesBg
            });
            cb();
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        });
    };
}

// 加载最新游戏列表
function loadLatestGamesList() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var _opt$cb2 = opt.cb,
            cb = _opt$cb2 === undefined ? function () {} : _opt$cb2;

        _jquery2.default.get(_api.API_PREFIX + '/product/new').done(function (res) {
            var latestGames = res.data;
            dispatch({
                type: 'LOAD_LATEST_GAMES_LIST_SUCCESS',
                data: latestGames
            });
            cb();
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        });
    };
}

// 加载畅销游戏列表
function loadPopularGamesList() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var _opt$cb3 = opt.cb,
            cb = _opt$cb3 === undefined ? function () {} : _opt$cb3;

        _jquery2.default.get(_api.API_PREFIX + '/product/hot').done(function (res) {
            var popularGames = res.data;
            dispatch({
                type: 'LOAD_POPULAR_GAMES_LIST_SUCCESS',
                data: popularGames
            });
            cb();
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        });
    };
}

// 加载特别游戏列表
function loadSpecialGamesList() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var _opt$cb4 = opt.cb,
            cb = _opt$cb4 === undefined ? function () {} : _opt$cb4;

        _jquery2.default.get(_api.API_PREFIX + '/product/slider2').done(function (res) {
            var specialGames = res.data.games;
            var specialGamesBg = res.data.bg;
            dispatch({
                type: 'LOAD_SPECIAL_GAMES_LIST_SUCCESS',
                data: specialGames
            });
            dispatch({
                type: 'LOAD_SPECIAL_GAMES_BG_SUCCESS',
                data: specialGamesBg
            });
            cb();
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        });
    };
}

// 加载游戏详情
function loadGameDeatil() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        _NProgress2.default.start();
        var id = opt.id,
            _opt$cb5 = opt.cb,
            cb = _opt$cb5 === undefined ? function () {} : _opt$cb5;

        _jquery2.default.get(_api.API_PREFIX + '/product/' + id).done(function (res) {
            dispatch({
                type: 'LOAD_GAME_DETAIL_SUCCESS',
                data: res.data
            });
            cb();
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        }).always(function () {
            _NProgress2.default.done();
        });
    };
}

// 加载游戏列表组，包括最新、折扣、预售游戏
function loadGamesListGroup() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var _opt$cb6 = opt.cb,
            cb = _opt$cb6 === undefined ? function () {} : _opt$cb6;

        Promise.all([loadLatestGamesListPromise(), loadDiscountGamesListPromise(), loadPreorderGamesListPromise()]).then(function (values) {
            dispatch({
                type: 'LOAD_LATEST_GAMES_LIST_SUCCESS',
                data: values[0].data
            });
            dispatch({
                type: 'LOAD_DISCOUNT_GAMES_LIST_SUCCESS',
                data: values[1].data
            });
            dispatch({
                type: 'LOAD_PREORDER_GAMES_LIST_SUCCESS',
                data: values[2].data
            });
            cb();
        }).catch(function (err) {
            _Message.message.error(err);
        });
    };
}

// 加载最新游戏
function loadLatestGamesListPromise() {
    return new Promise(function (resolve, reject) {
        _jquery2.default.get(_api.API_PREFIX + '/product/new').done(function (res) {
            if (res.Code === 40000) {
                resolve(res);
            } else {
                reject(res.Msg);
            }
        }).fail(function (err) {
            reject(err.statusText);
        });
    });
}

// 加载折扣游戏
function loadDiscountGamesListPromise() {
    return new Promise(function (resolve, reject) {
        _jquery2.default.get(_api.API_PREFIX + '/product/discount').done(function (res) {
            if (res.Code === 40000) {
                resolve(res);
            } else {
                reject(res.Msg);
            }
        }).fail(function (err) {
            reject(err.statusText);
        });
    });
}

// 加载预售游戏
function loadPreorderGamesListPromise() {
    return new Promise(function (resolve, reject) {
        _jquery2.default.get(_api.API_PREFIX + '/product/presell').done(function (res) {
            if (res.Code === 40000) {
                resolve(res);
            } else {
                reject(res.Msg);
            }
        }).fail(function (err) {
            reject(err.statusText);
        });
    });
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadUsers = loadUsers;
exports.loadUserInfo = loadUserInfo;
exports.userLogin = userLogin;
exports.userRegister = userRegister;
exports.userLogout = userLogout;
exports.sendPasswordResetEmailCode = sendPasswordResetEmailCode;
exports.saveResetPassword = saveResetPassword;
exports.userResetPasw = userResetPasw;
exports.getPwdCode = getPwdCode;
exports.loadUserBalance = loadUserBalance;

var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _jquery3 = __webpack_require__(245);

var _jquery4 = _interopRequireDefault(_jquery3);

var _NProgress = __webpack_require__(42);

var _NProgress2 = _interopRequireDefault(_NProgress);

var _api = __webpack_require__(10);

var _Message = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadUsers() {
    return function (dispatch, getState) {
        _NProgress2.default.start();
        _jquery2.default.get(_api.API_PREFIX + '/product/show/listing').done(function (res) {
            dispatch({
                type: 'LOAD_USERS_SUCCESS',
                data: res
            });
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        }).always(function () {
            _NProgress2.default.done();
        });
    };
}

// 获取用户信息
/**
 * @file userActions.js
 * @desc user相关的actions
 * @author wangyong(1223427693@qq.com)
 */
function loadUserInfo() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var _opt$cb = opt.cb,
            cb = _opt$cb === undefined ? function () {} : _opt$cb;

        _jquery2.default.get(_api.API_PREFIX + '/user/info').done(function (res) {
            if (res.Code === 40000) {
                dispatch({
                    type: 'LOAD_USERINFO_SUCCESS',
                    data: res.data
                });
            } else {
                dispatch({
                    type: 'LOAD_USERINFO_SUCCESS',
                    data: null
                });
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        }).always(function () {
            cb();
        });
    };
}

// 用户登录
function userLogin() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        _NProgress2.default.start();
        var data = opt.data,
            _opt$cb2 = opt.cb,
            cb = _opt$cb2 === undefined ? function () {} : _opt$cb2;

        _jquery2.default.post(_api.API_PREFIX + '/user/session', data).done(function (res) {
            if (res.Code === 40000) {
                _Message.message.success(res.Msg);
                cb();
            } else {
                _Message.message.error(res.Msg);
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        }).always(function () {
            _NProgress2.default.done();
        });
    };
}

// 用户注册
function userRegister() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        _NProgress2.default.start();
        var data = opt.data,
            _opt$cb3 = opt.cb,
            cb = _opt$cb3 === undefined ? function () {} : _opt$cb3;

        _jquery2.default.post(_api.API_PREFIX + '/user/account', data).done(function (res) {
            if (res.Code === 40000) {
                _Message.message.success(res.Msg);
            } else {
                _Message.message.error(res.Msg);
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        }).always(function () {
            _NProgress2.default.done();
        });
    };
}

// 用户注销
function userLogout() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        _NProgress2.default.start();
        var _opt$cb4 = opt.cb,
            cb = _opt$cb4 === undefined ? function () {} : _opt$cb4;

        _jquery2.default.ajax({ url: _api.API_PREFIX + '/user/session', type: 'delete' }).done(function (res) {
            _Message.message.success('注销成功');
            cb();
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        }).always(function () {
            _NProgress2.default.done();
        });
    };
}

// 重置密码获取邮箱验证码
function sendPasswordResetEmailCode() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        _NProgress2.default.start();
        var email = opt.email,
            _opt$cb5 = opt.cb,
            cb = _opt$cb5 === undefined ? function () {} : _opt$cb5;

        _jquery2.default.get(_api.API_PREFIX + '/user/password/code', {
            email: email
        }).done(function (res) {
            if (res.Code === 40000) {
                _Message.message.success(res.Msg);
                cb();
            } else {
                _Message.message.error(res.Msg);
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        }).always(function () {
            _NProgress2.default.done();
        });
    };
}

// 重置用户密码
function saveResetPassword() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        _NProgress2.default.start();
        var email = opt.email,
            verCode = opt.verCode,
            password = opt.password,
            confirmPass = opt.confirmPass,
            _opt$cb6 = opt.cb,
            cb = _opt$cb6 === undefined ? function () {} : _opt$cb6;

        _jquery2.default.ajax({
            url: _api.API_PREFIX + '/user/password',
            type: 'put',
            data: {
                email: email,
                code: verCode,
                password: password,
                confirm_pwd: confirmPass
            }
        }).done(function (res) {
            if (res.Code === 40000) {
                _Message.message.success(res.Msg);
                cb();
            } else {
                _Message.message.error(res.Msg);
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        }).always(function () {
            _NProgress2.default.done();
        });
    };
}

// 用户重置密码
function userResetPasw() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        _NProgress2.default.start();
        var code = opt.code,
            email = opt.email,
            password = opt.password,
            confirm_pwd = opt.confirm_pwd,
            _opt$cb7 = opt.cb,
            cb = _opt$cb7 === undefined ? function () {} : _opt$cb7;

        _jquery2.default.ajax({
            url: _api.API_PREFIX + '/user/password',
            type: 'put',
            data: {
                code: code,
                email: email,
                password: password,
                confirm_pwd: confirm_pwd
            }
        }).done(function (res) {
            if (res.Code === 40000) {
                // 提示修改成功
                _Message.message.success(res.Msg);
            } else {
                _NProgress2.default.done();
                _Message.message.error(res.Msg);
            }
        }).fail(function (err) {
            _NProgress2.default.done();
            _Message.message.error(err.statusText);
        });
    };
}

// 重置密码获取验证码
function getPwdCode() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var _opt$cb8 = opt.cb,
            cb = _opt$cb8 === undefined ? function () {} : _opt$cb8;

        _jquery2.default.get(_api.API_PREFIX + '/user/password/code', { email: opt.email }).done(function (res) {
            _Message.message.success(res.Msg);
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        }).always(function () {
            cb();
        });
    };
}

// 获取用户余额相关数据
function loadUserBalance() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var _opt$cb9 = opt.cb,
            cb = _opt$cb9 === undefined ? function () {} : _opt$cb9;

        _jquery2.default.get(_api.API_PREFIX + '/user/balance').done(function (res) {
            if (res.Code === 40000) {
                dispatch({
                    type: "LOAD_USER_BALANCE_SUCCESS",
                    data: res.data
                });
                cb();
            } else {
                _Message.message.error(res.Msg);
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        });
    };
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavPane = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__(6);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Navs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 我的账户Navs组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var NavPane = exports.NavPane = function (_Component) {
    _inherits(NavPane, _Component);

    function NavPane() {
        _classCallCheck(this, NavPane);

        return _possibleConstructorReturn(this, (NavPane.__proto__ || Object.getPrototypeOf(NavPane)).apply(this, arguments));
    }

    _createClass(NavPane, [{
        key: 'render',
        value: function render() {
            var children = this.props.children;

            return children ? children : null;
        }
    }]);

    return NavPane;
}(_react.Component);

NavPane.propTypes = {
    title: _propTypes2.default.string.isRequired
};
NavPane.defaultProps = {
    title: ''
};

var Navs = function (_Component2) {
    _inherits(Navs, _Component2);

    function Navs(props) {
        _classCallCheck(this, Navs);

        var _this2 = _possibleConstructorReturn(this, (Navs.__proto__ || Object.getPrototypeOf(Navs)).call(this, props));

        _this2.state = {
            active: 0
        };
        return _this2;
    }

    _createClass(Navs, [{
        key: 'onItemClick',
        value: function onItemClick(index) {
            this.setState({
                active: index
            });
        }
    }, {
        key: 'renderNavItems',
        value: function renderNavItems(navPanes) {
            var _this3 = this;

            return _react2.default.createElement(
                'ul',
                { className: 'nav' },
                _lodash2.default.map(navPanes, function (pane, index) {
                    var itemClass = (0, _classnames2.default)({
                        'nav-item': true,
                        'active': index === _this3.state.active
                    });
                    return _react2.default.createElement(
                        'li',
                        { key: index, className: itemClass, onClick: _this3.onItemClick.bind(_this3, index) },
                        _react2.default.createElement(
                            'a',
                            { href: 'javascript:;' },
                            pane.props.title
                        )
                    );
                })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children;

            var navPanes = [];
            if ((typeof children === 'undefined' ? 'undefined' : _typeof(children)) === 'object' && children.type === NavPane) {
                navPanes = [children];
            }
            if (_lodash2.default.isArray(children)) {
                _lodash2.default.each(children, function (child) {
                    navPanes.push(child);
                });
            }
            var navContainerClass = (0, _classnames2.default)(_defineProperty({
                'account-nav-container func-clearfix': true
            }, className, true));
            return _react2.default.createElement(
                'div',
                { className: navContainerClass },
                _react2.default.createElement(
                    'aside',
                    { className: 'nav-aside' },
                    this.renderNavItems(navPanes)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'nav-content' },
                    navPanes[this.state.active]
                )
            );
        }
    }]);

    return Navs;
}(_react.Component);

exports.default = Navs;

Navs.propTypes = {
    className: _propTypes2.default.string
};
Navs.defaultProps = {
    className: ''
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Login
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 分享页面
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Share = function (_Component) {
    _inherits(Share, _Component);

    function Share() {
        _classCallCheck(this, Share);

        return _possibleConstructorReturn(this, (Share.__proto__ || Object.getPrototypeOf(Share)).apply(this, arguments));
    }

    _createClass(Share, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var share = this.refs.share;
            try {
                socialShare(share);
            } catch (e) {
                console.log(e);
            }
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "share" },
                _react2.default.createElement(
                    "h3",
                    { className: "share-title" },
                    "\u5206\u4EAB"
                ),
                _react2.default.createElement("div", { ref: "share", className: "social-share", "data-sites": "wechat, weibo, qq, qzone" })
            );
        }
    }]);

    return Share;
}(_react.Component);

exports.default = Share;

/***/ }),
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */

(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        global.numeral = factory();
    }
}(this, function () {
    /************************************
        Variables
    ************************************/

    var numeral,
        _,
        VERSION = '2.0.6',
        formats = {},
        locales = {},
        defaults = {
            currentLocale: 'en',
            zeroFormat: null,
            nullFormat: null,
            defaultFormat: '0,0',
            scalePercentBy100: true
        },
        options = {
            currentLocale: defaults.currentLocale,
            zeroFormat: defaults.zeroFormat,
            nullFormat: defaults.nullFormat,
            defaultFormat: defaults.defaultFormat,
            scalePercentBy100: defaults.scalePercentBy100
        };


    /************************************
        Constructors
    ************************************/

    // Numeral prototype object
    function Numeral(input, number) {
        this._input = input;

        this._value = number;
    }

    numeral = function(input) {
        var value,
            kind,
            unformatFunction,
            regexp;

        if (numeral.isNumeral(input)) {
            value = input.value();
        } else if (input === 0 || typeof input === 'undefined') {
            value = 0;
        } else if (input === null || _.isNaN(input)) {
            value = null;
        } else if (typeof input === 'string') {
            if (options.zeroFormat && input === options.zeroFormat) {
                value = 0;
            } else if (options.nullFormat && input === options.nullFormat || !input.replace(/[^0-9]+/g, '').length) {
                value = null;
            } else {
                for (kind in formats) {
                    regexp = typeof formats[kind].regexps.unformat === 'function' ? formats[kind].regexps.unformat() : formats[kind].regexps.unformat;

                    if (regexp && input.match(regexp)) {
                        unformatFunction = formats[kind].unformat;

                        break;
                    }
                }

                unformatFunction = unformatFunction || numeral._.stringToNumber;

                value = unformatFunction(input);
            }
        } else {
            value = Number(input)|| null;
        }

        return new Numeral(input, value);
    };

    // version number
    numeral.version = VERSION;

    // compare numeral object
    numeral.isNumeral = function(obj) {
        return obj instanceof Numeral;
    };

    // helper functions
    numeral._ = _ = {
        // formats numbers separators, decimals places, signs, abbreviations
        numberToFormat: function(value, format, roundingFunction) {
            var locale = locales[numeral.options.currentLocale],
                negP = false,
                optDec = false,
                leadingCount = 0,
                abbr = '',
                trillion = 1000000000000,
                billion = 1000000000,
                million = 1000000,
                thousand = 1000,
                decimal = '',
                neg = false,
                abbrForce, // force abbreviation
                abs,
                min,
                max,
                power,
                int,
                precision,
                signed,
                thousands,
                output;

            // make sure we never format a null value
            value = value || 0;

            abs = Math.abs(value);

            // see if we should use parentheses for negative number or if we should prefix with a sign
            // if both are present we default to parentheses
            if (numeral._.includes(format, '(')) {
                negP = true;
                format = format.replace(/[\(|\)]/g, '');
            } else if (numeral._.includes(format, '+') || numeral._.includes(format, '-')) {
                signed = numeral._.includes(format, '+') ? format.indexOf('+') : value < 0 ? format.indexOf('-') : -1;
                format = format.replace(/[\+|\-]/g, '');
            }

            // see if abbreviation is wanted
            if (numeral._.includes(format, 'a')) {
                abbrForce = format.match(/a(k|m|b|t)?/);

                abbrForce = abbrForce ? abbrForce[1] : false;

                // check for space before abbreviation
                if (numeral._.includes(format, ' a')) {
                    abbr = ' ';
                }

                format = format.replace(new RegExp(abbr + 'a[kmbt]?'), '');

                if (abs >= trillion && !abbrForce || abbrForce === 't') {
                    // trillion
                    abbr += locale.abbreviations.trillion;
                    value = value / trillion;
                } else if (abs < trillion && abs >= billion && !abbrForce || abbrForce === 'b') {
                    // billion
                    abbr += locale.abbreviations.billion;
                    value = value / billion;
                } else if (abs < billion && abs >= million && !abbrForce || abbrForce === 'm') {
                    // million
                    abbr += locale.abbreviations.million;
                    value = value / million;
                } else if (abs < million && abs >= thousand && !abbrForce || abbrForce === 'k') {
                    // thousand
                    abbr += locale.abbreviations.thousand;
                    value = value / thousand;
                }
            }

            // check for optional decimals
            if (numeral._.includes(format, '[.]')) {
                optDec = true;
                format = format.replace('[.]', '.');
            }

            // break number and format
            int = value.toString().split('.')[0];
            precision = format.split('.')[1];
            thousands = format.indexOf(',');
            leadingCount = (format.split('.')[0].split(',')[0].match(/0/g) || []).length;

            if (precision) {
                if (numeral._.includes(precision, '[')) {
                    precision = precision.replace(']', '');
                    precision = precision.split('[');
                    decimal = numeral._.toFixed(value, (precision[0].length + precision[1].length), roundingFunction, precision[1].length);
                } else {
                    decimal = numeral._.toFixed(value, precision.length, roundingFunction);
                }

                int = decimal.split('.')[0];

                if (numeral._.includes(decimal, '.')) {
                    decimal = locale.delimiters.decimal + decimal.split('.')[1];
                } else {
                    decimal = '';
                }

                if (optDec && Number(decimal.slice(1)) === 0) {
                    decimal = '';
                }
            } else {
                int = numeral._.toFixed(value, 0, roundingFunction);
            }

            // check abbreviation again after rounding
            if (abbr && !abbrForce && Number(int) >= 1000 && abbr !== locale.abbreviations.trillion) {
                int = String(Number(int) / 1000);

                switch (abbr) {
                    case locale.abbreviations.thousand:
                        abbr = locale.abbreviations.million;
                        break;
                    case locale.abbreviations.million:
                        abbr = locale.abbreviations.billion;
                        break;
                    case locale.abbreviations.billion:
                        abbr = locale.abbreviations.trillion;
                        break;
                }
            }


            // format number
            if (numeral._.includes(int, '-')) {
                int = int.slice(1);
                neg = true;
            }

            if (int.length < leadingCount) {
                for (var i = leadingCount - int.length; i > 0; i--) {
                    int = '0' + int;
                }
            }

            if (thousands > -1) {
                int = int.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + locale.delimiters.thousands);
            }

            if (format.indexOf('.') === 0) {
                int = '';
            }

            output = int + decimal + (abbr ? abbr : '');

            if (negP) {
                output = (negP && neg ? '(' : '') + output + (negP && neg ? ')' : '');
            } else {
                if (signed >= 0) {
                    output = signed === 0 ? (neg ? '-' : '+') + output : output + (neg ? '-' : '+');
                } else if (neg) {
                    output = '-' + output;
                }
            }

            return output;
        },
        // unformats numbers separators, decimals places, signs, abbreviations
        stringToNumber: function(string) {
            var locale = locales[options.currentLocale],
                stringOriginal = string,
                abbreviations = {
                    thousand: 3,
                    million: 6,
                    billion: 9,
                    trillion: 12
                },
                abbreviation,
                value,
                i,
                regexp;

            if (options.zeroFormat && string === options.zeroFormat) {
                value = 0;
            } else if (options.nullFormat && string === options.nullFormat || !string.replace(/[^0-9]+/g, '').length) {
                value = null;
            } else {
                value = 1;

                if (locale.delimiters.decimal !== '.') {
                    string = string.replace(/\./g, '').replace(locale.delimiters.decimal, '.');
                }

                for (abbreviation in abbreviations) {
                    regexp = new RegExp('[^a-zA-Z]' + locale.abbreviations[abbreviation] + '(?:\\)|(\\' + locale.currency.symbol + ')?(?:\\))?)?$');

                    if (stringOriginal.match(regexp)) {
                        value *= Math.pow(10, abbreviations[abbreviation]);
                        break;
                    }
                }

                // check for negative number
                value *= (string.split('-').length + Math.min(string.split('(').length - 1, string.split(')').length - 1)) % 2 ? 1 : -1;

                // remove non numbers
                string = string.replace(/[^0-9\.]+/g, '');

                value *= Number(string);
            }

            return value;
        },
        isNaN: function(value) {
            return typeof value === 'number' && isNaN(value);
        },
        includes: function(string, search) {
            return string.indexOf(search) !== -1;
        },
        insert: function(string, subString, start) {
            return string.slice(0, start) + subString + string.slice(start);
        },
        reduce: function(array, callback /*, initialValue*/) {
            if (this === null) {
                throw new TypeError('Array.prototype.reduce called on null or undefined');
            }

            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' is not a function');
            }

            var t = Object(array),
                len = t.length >>> 0,
                k = 0,
                value;

            if (arguments.length === 3) {
                value = arguments[2];
            } else {
                while (k < len && !(k in t)) {
                    k++;
                }

                if (k >= len) {
                    throw new TypeError('Reduce of empty array with no initial value');
                }

                value = t[k++];
            }
            for (; k < len; k++) {
                if (k in t) {
                    value = callback(value, t[k], k, t);
                }
            }
            return value;
        },
        /**
         * Computes the multiplier necessary to make x >= 1,
         * effectively eliminating miscalculations caused by
         * finite precision.
         */
        multiplier: function (x) {
            var parts = x.toString().split('.');

            return parts.length < 2 ? 1 : Math.pow(10, parts[1].length);
        },
        /**
         * Given a variable number of arguments, returns the maximum
         * multiplier that must be used to normalize an operation involving
         * all of them.
         */
        correctionFactor: function () {
            var args = Array.prototype.slice.call(arguments);

            return args.reduce(function(accum, next) {
                var mn = _.multiplier(next);
                return accum > mn ? accum : mn;
            }, 1);
        },
        /**
         * Implementation of toFixed() that treats floats more like decimals
         *
         * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
         * problems for accounting- and finance-related software.
         */
        toFixed: function(value, maxDecimals, roundingFunction, optionals) {
            var splitValue = value.toString().split('.'),
                minDecimals = maxDecimals - (optionals || 0),
                boundedPrecision,
                optionalsRegExp,
                power,
                output;

            // Use the smallest precision value possible to avoid errors from floating point representation
            if (splitValue.length === 2) {
              boundedPrecision = Math.min(Math.max(splitValue[1].length, minDecimals), maxDecimals);
            } else {
              boundedPrecision = minDecimals;
            }

            power = Math.pow(10, boundedPrecision);

            // Multiply up by precision, round accurately, then divide and use native toFixed():
            output = (roundingFunction(value + 'e+' + boundedPrecision) / power).toFixed(boundedPrecision);

            if (optionals > maxDecimals - boundedPrecision) {
                optionalsRegExp = new RegExp('\\.?0{1,' + (optionals - (maxDecimals - boundedPrecision)) + '}$');
                output = output.replace(optionalsRegExp, '');
            }

            return output;
        }
    };

    // avaliable options
    numeral.options = options;

    // avaliable formats
    numeral.formats = formats;

    // avaliable formats
    numeral.locales = locales;

    // This function sets the current locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    numeral.locale = function(key) {
        if (key) {
            options.currentLocale = key.toLowerCase();
        }

        return options.currentLocale;
    };

    // This function provides access to the loaded locale data.  If
    // no arguments are passed in, it will simply return the current
    // global locale object.
    numeral.localeData = function(key) {
        if (!key) {
            return locales[options.currentLocale];
        }

        key = key.toLowerCase();

        if (!locales[key]) {
            throw new Error('Unknown locale : ' + key);
        }

        return locales[key];
    };

    numeral.reset = function() {
        for (var property in defaults) {
            options[property] = defaults[property];
        }
    };

    numeral.zeroFormat = function(format) {
        options.zeroFormat = typeof(format) === 'string' ? format : null;
    };

    numeral.nullFormat = function (format) {
        options.nullFormat = typeof(format) === 'string' ? format : null;
    };

    numeral.defaultFormat = function(format) {
        options.defaultFormat = typeof(format) === 'string' ? format : '0.0';
    };

    numeral.register = function(type, name, format) {
        name = name.toLowerCase();

        if (this[type + 's'][name]) {
            throw new TypeError(name + ' ' + type + ' already registered.');
        }

        this[type + 's'][name] = format;

        return format;
    };


    numeral.validate = function(val, culture) {
        var _decimalSep,
            _thousandSep,
            _currSymbol,
            _valArray,
            _abbrObj,
            _thousandRegEx,
            localeData,
            temp;

        //coerce val to string
        if (typeof val !== 'string') {
            val += '';

            if (console.warn) {
                console.warn('Numeral.js: Value is not string. It has been co-erced to: ', val);
            }
        }

        //trim whitespaces from either sides
        val = val.trim();

        //if val is just digits return true
        if (!!val.match(/^\d+$/)) {
            return true;
        }

        //if val is empty return false
        if (val === '') {
            return false;
        }

        //get the decimal and thousands separator from numeral.localeData
        try {
            //check if the culture is understood by numeral. if not, default it to current locale
            localeData = numeral.localeData(culture);
        } catch (e) {
            localeData = numeral.localeData(numeral.locale());
        }

        //setup the delimiters and currency symbol based on culture/locale
        _currSymbol = localeData.currency.symbol;
        _abbrObj = localeData.abbreviations;
        _decimalSep = localeData.delimiters.decimal;
        if (localeData.delimiters.thousands === '.') {
            _thousandSep = '\\.';
        } else {
            _thousandSep = localeData.delimiters.thousands;
        }

        // validating currency symbol
        temp = val.match(/^[^\d]+/);
        if (temp !== null) {
            val = val.substr(1);
            if (temp[0] !== _currSymbol) {
                return false;
            }
        }

        //validating abbreviation symbol
        temp = val.match(/[^\d]+$/);
        if (temp !== null) {
            val = val.slice(0, -1);
            if (temp[0] !== _abbrObj.thousand && temp[0] !== _abbrObj.million && temp[0] !== _abbrObj.billion && temp[0] !== _abbrObj.trillion) {
                return false;
            }
        }

        _thousandRegEx = new RegExp(_thousandSep + '{2}');

        if (!val.match(/[^\d.,]/g)) {
            _valArray = val.split(_decimalSep);
            if (_valArray.length > 2) {
                return false;
            } else {
                if (_valArray.length < 2) {
                    return ( !! _valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx));
                } else {
                    if (_valArray[0].length === 1) {
                        return ( !! _valArray[0].match(/^\d+$/) && !_valArray[0].match(_thousandRegEx) && !! _valArray[1].match(/^\d+$/));
                    } else {
                        return ( !! _valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx) && !! _valArray[1].match(/^\d+$/));
                    }
                }
            }
        }

        return false;
    };


    /************************************
        Numeral Prototype
    ************************************/

    numeral.fn = Numeral.prototype = {
        clone: function() {
            return numeral(this);
        },
        format: function(inputString, roundingFunction) {
            var value = this._value,
                format = inputString || options.defaultFormat,
                kind,
                output,
                formatFunction;

            // make sure we have a roundingFunction
            roundingFunction = roundingFunction || Math.round;

            // format based on value
            if (value === 0 && options.zeroFormat !== null) {
                output = options.zeroFormat;
            } else if (value === null && options.nullFormat !== null) {
                output = options.nullFormat;
            } else {
                for (kind in formats) {
                    if (format.match(formats[kind].regexps.format)) {
                        formatFunction = formats[kind].format;

                        break;
                    }
                }

                formatFunction = formatFunction || numeral._.numberToFormat;

                output = formatFunction(value, format, roundingFunction);
            }

            return output;
        },
        value: function() {
            return this._value;
        },
        input: function() {
            return this._input;
        },
        set: function(value) {
            this._value = Number(value);

            return this;
        },
        add: function(value) {
            var corrFactor = _.correctionFactor.call(null, this._value, value);

            function cback(accum, curr, currI, O) {
                return accum + Math.round(corrFactor * curr);
            }

            this._value = _.reduce([this._value, value], cback, 0) / corrFactor;

            return this;
        },
        subtract: function(value) {
            var corrFactor = _.correctionFactor.call(null, this._value, value);

            function cback(accum, curr, currI, O) {
                return accum - Math.round(corrFactor * curr);
            }

            this._value = _.reduce([value], cback, Math.round(this._value * corrFactor)) / corrFactor;

            return this;
        },
        multiply: function(value) {
            function cback(accum, curr, currI, O) {
                var corrFactor = _.correctionFactor(accum, curr);
                return Math.round(accum * corrFactor) * Math.round(curr * corrFactor) / Math.round(corrFactor * corrFactor);
            }

            this._value = _.reduce([this._value, value], cback, 1);

            return this;
        },
        divide: function(value) {
            function cback(accum, curr, currI, O) {
                var corrFactor = _.correctionFactor(accum, curr);
                return Math.round(accum * corrFactor) / Math.round(curr * corrFactor);
            }

            this._value = _.reduce([this._value, value], cback);

            return this;
        },
        difference: function(value) {
            return Math.abs(numeral(this._value).subtract(value).value());
        }
    };

    /************************************
        Default Locale && Format
    ************************************/

    numeral.register('locale', 'en', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function(number) {
            var b = number % 10;
            return (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
        },
        currency: {
            symbol: '$'
        }
    });

    

(function() {
        numeral.register('format', 'bps', {
            regexps: {
                format: /(BPS)/,
                unformat: /(BPS)/
            },
            format: function(value, format, roundingFunction) {
                var space = numeral._.includes(format, ' BPS') ? ' ' : '',
                    output;

                value = value * 10000;

                // check for space before BPS
                format = format.replace(/\s?BPS/, '');

                output = numeral._.numberToFormat(value, format, roundingFunction);

                if (numeral._.includes(output, ')')) {
                    output = output.split('');

                    output.splice(-1, 0, space + 'BPS');

                    output = output.join('');
                } else {
                    output = output + space + 'BPS';
                }

                return output;
            },
            unformat: function(string) {
                return +(numeral._.stringToNumber(string) * 0.0001).toFixed(15);
            }
        });
})();


(function() {
        var decimal = {
            base: 1000,
            suffixes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        },
        binary = {
            base: 1024,
            suffixes: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
        };

    var allSuffixes =  decimal.suffixes.concat(binary.suffixes.filter(function (item) {
            return decimal.suffixes.indexOf(item) < 0;
        }));
        var unformatRegex = allSuffixes.join('|');
        // Allow support for BPS (http://www.investopedia.com/terms/b/basispoint.asp)
        unformatRegex = '(' + unformatRegex.replace('B', 'B(?!PS)') + ')';

    numeral.register('format', 'bytes', {
        regexps: {
            format: /([0\s]i?b)/,
            unformat: new RegExp(unformatRegex)
        },
        format: function(value, format, roundingFunction) {
            var output,
                bytes = numeral._.includes(format, 'ib') ? binary : decimal,
                suffix = numeral._.includes(format, ' b') || numeral._.includes(format, ' ib') ? ' ' : '',
                power,
                min,
                max;

            // check for space before
            format = format.replace(/\s?i?b/, '');

            for (power = 0; power <= bytes.suffixes.length; power++) {
                min = Math.pow(bytes.base, power);
                max = Math.pow(bytes.base, power + 1);

                if (value === null || value === 0 || value >= min && value < max) {
                    suffix += bytes.suffixes[power];

                    if (min > 0) {
                        value = value / min;
                    }

                    break;
                }
            }

            output = numeral._.numberToFormat(value, format, roundingFunction);

            return output + suffix;
        },
        unformat: function(string) {
            var value = numeral._.stringToNumber(string),
                power,
                bytesMultiplier;

            if (value) {
                for (power = decimal.suffixes.length - 1; power >= 0; power--) {
                    if (numeral._.includes(string, decimal.suffixes[power])) {
                        bytesMultiplier = Math.pow(decimal.base, power);

                        break;
                    }

                    if (numeral._.includes(string, binary.suffixes[power])) {
                        bytesMultiplier = Math.pow(binary.base, power);

                        break;
                    }
                }

                value *= (bytesMultiplier || 1);
            }

            return value;
        }
    });
})();


(function() {
        numeral.register('format', 'currency', {
        regexps: {
            format: /(\$)/
        },
        format: function(value, format, roundingFunction) {
            var locale = numeral.locales[numeral.options.currentLocale],
                symbols = {
                    before: format.match(/^([\+|\-|\(|\s|\$]*)/)[0],
                    after: format.match(/([\+|\-|\)|\s|\$]*)$/)[0]
                },
                output,
                symbol,
                i;

            // strip format of spaces and $
            format = format.replace(/\s?\$\s?/, '');

            // format the number
            output = numeral._.numberToFormat(value, format, roundingFunction);

            // update the before and after based on value
            if (value >= 0) {
                symbols.before = symbols.before.replace(/[\-\(]/, '');
                symbols.after = symbols.after.replace(/[\-\)]/, '');
            } else if (value < 0 && (!numeral._.includes(symbols.before, '-') && !numeral._.includes(symbols.before, '('))) {
                symbols.before = '-' + symbols.before;
            }

            // loop through each before symbol
            for (i = 0; i < symbols.before.length; i++) {
                symbol = symbols.before[i];

                switch (symbol) {
                    case '$':
                        output = numeral._.insert(output, locale.currency.symbol, i);
                        break;
                    case ' ':
                        output = numeral._.insert(output, ' ', i + locale.currency.symbol.length - 1);
                        break;
                }
            }

            // loop through each after symbol
            for (i = symbols.after.length - 1; i >= 0; i--) {
                symbol = symbols.after[i];

                switch (symbol) {
                    case '$':
                        output = i === symbols.after.length - 1 ? output + locale.currency.symbol : numeral._.insert(output, locale.currency.symbol, -(symbols.after.length - (1 + i)));
                        break;
                    case ' ':
                        output = i === symbols.after.length - 1 ? output + ' ' : numeral._.insert(output, ' ', -(symbols.after.length - (1 + i) + locale.currency.symbol.length - 1));
                        break;
                }
            }


            return output;
        }
    });
})();


(function() {
        numeral.register('format', 'exponential', {
        regexps: {
            format: /(e\+|e-)/,
            unformat: /(e\+|e-)/
        },
        format: function(value, format, roundingFunction) {
            var output,
                exponential = typeof value === 'number' && !numeral._.isNaN(value) ? value.toExponential() : '0e+0',
                parts = exponential.split('e');

            format = format.replace(/e[\+|\-]{1}0/, '');

            output = numeral._.numberToFormat(Number(parts[0]), format, roundingFunction);

            return output + 'e' + parts[1];
        },
        unformat: function(string) {
            var parts = numeral._.includes(string, 'e+') ? string.split('e+') : string.split('e-'),
                value = Number(parts[0]),
                power = Number(parts[1]);

            power = numeral._.includes(string, 'e-') ? power *= -1 : power;

            function cback(accum, curr, currI, O) {
                var corrFactor = numeral._.correctionFactor(accum, curr),
                    num = (accum * corrFactor) * (curr * corrFactor) / (corrFactor * corrFactor);
                return num;
            }

            return numeral._.reduce([value, Math.pow(10, power)], cback, 1);
        }
    });
})();


(function() {
        numeral.register('format', 'ordinal', {
        regexps: {
            format: /(o)/
        },
        format: function(value, format, roundingFunction) {
            var locale = numeral.locales[numeral.options.currentLocale],
                output,
                ordinal = numeral._.includes(format, ' o') ? ' ' : '';

            // check for space before
            format = format.replace(/\s?o/, '');

            ordinal += locale.ordinal(value);

            output = numeral._.numberToFormat(value, format, roundingFunction);

            return output + ordinal;
        }
    });
})();


(function() {
        numeral.register('format', 'percentage', {
        regexps: {
            format: /(%)/,
            unformat: /(%)/
        },
        format: function(value, format, roundingFunction) {
            var space = numeral._.includes(format, ' %') ? ' ' : '',
                output;

            if (numeral.options.scalePercentBy100) {
                value = value * 100;
            }

            // check for space before %
            format = format.replace(/\s?\%/, '');

            output = numeral._.numberToFormat(value, format, roundingFunction);

            if (numeral._.includes(output, ')')) {
                output = output.split('');

                output.splice(-1, 0, space + '%');

                output = output.join('');
            } else {
                output = output + space + '%';
            }

            return output;
        },
        unformat: function(string) {
            var number = numeral._.stringToNumber(string);
            if (numeral.options.scalePercentBy100) {
                return number * 0.01;
            }
            return number;
        }
    });
})();


(function() {
        numeral.register('format', 'time', {
        regexps: {
            format: /(:)/,
            unformat: /(:)/
        },
        format: function(value, format, roundingFunction) {
            var hours = Math.floor(value / 60 / 60),
                minutes = Math.floor((value - (hours * 60 * 60)) / 60),
                seconds = Math.round(value - (hours * 60 * 60) - (minutes * 60));

            return hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
        },
        unformat: function(string) {
            var timeArray = string.split(':'),
                seconds = 0;

            // turn hours and minutes into seconds and add them all up
            if (timeArray.length === 3) {
                // hours
                seconds = seconds + (Number(timeArray[0]) * 60 * 60);
                // minutes
                seconds = seconds + (Number(timeArray[1]) * 60);
                // seconds
                seconds = seconds + Number(timeArray[2]);
            } else if (timeArray.length === 2) {
                // minutes
                seconds = seconds + (Number(timeArray[0]) * 60);
                // seconds
                seconds = seconds + Number(timeArray[1]);
            }
            return Number(seconds);
        }
    });
})();

return numeral;
}));


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadList = loadList;
exports.loadGamesList = loadGamesList;
exports.loadAttributeList = loadAttributeList;
exports.changeType = changeType;
exports.viewMore = viewMore;
exports.changePerpage = changePerpage;

var _mockjs = __webpack_require__(64);

var _mockjs2 = _interopRequireDefault(_mockjs);

var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//加载筛选数据
function loadList() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var price = opt.price;

        if (opt.type) {
            var type = opt.type;
        }
        if (opt.platform) {
            var platform = opt.platform;
        }
        if (opt.page) {
            var page = opt.page;
        }
        _jquery2.default.get(_api.API_PREFIX + '/product/category/1', { sort: price, type: type, platform: platform, page: page }).done(function (res) {
            //console.log(res);
            var listGames = res.data;

            dispatch({
                type: 'LOAD_LIST_SUCCESS',
                data: listGames
            });
        }).fail(function (err) {
            message.error(err.statusText);
        });
    };
}
// 加载默认的游戏列表
/**
 * @file catalogActions.js
 * @desc 游戏项目相关的actions
 * @author 赵浚哲(1429595365@qq.com)
 */
function loadGamesList() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var price = opt.price;

        if (opt.type) {
            var type = opt.type;
        }
        if (opt.platform) {
            var platform = opt.platform;
        }
        if (opt.page) {
            var page = opt.page;
        }
        if (opt.perpage) {
            var perpage = opt.perpage;
        }
        _jquery2.default.get(_api.API_PREFIX + '/product/category/1', { sort: price, type: type, platform: platform, page: page, perpage: perpage }).done(function (res) {
            //console.log(res);
            var listGames = res.data;

            dispatch({
                type: 'CATALOG_LOAD_GAMES_LIST_SUCCESS',
                data: listGames
            });
        }).fail(function (err) {
            message.error(err.statusText);
        });
    };
}
//加载属性列表
function loadAttributeList() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        _jquery2.default.get(_api.API_PREFIX + '/product/attribute').done(function (res) {
            //console.log(res);
            var attributeList = res.data;
            console.log(attributeList);
            dispatch({
                type: 'LOAD_ATTRIBUTE_LIST_SUCCESS',
                data: attributeList
            });
        }).fail(function (err) {
            message.error(err.statusText);
        });
    };
}
//记录用户做出的筛选选项
function changeType(opt, type) {
    return function (dispatch, getState) {
        //console.log(getState());
        var option = getState().changeType;
        if (type === 'category') {
            option.category = opt;
        } else if (type === 'type') {
            option.type = opt;
        } else if (type === 'platform') {
            option.platform = opt;
        }

        dispatch({
            type: 'CHANG_TYPE_SUCCESS',
            data: option
        });
    };
}

function viewMore() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var type = arguments[1];

    return function (dispatch, getState) {
        if (opt.perpage) {
            var perpage = opt.perpage;
        } else {
            var perpage = 20;
        }
        _jquery2.default.get(_api.API_PREFIX + '/product/category/1', { perpage: perpage }).done(function (res) {
            var list = res;
            console.log(res);
            dispatch({
                type: 'LOAD_ALL_GAMES_LIST_SUCCESS',
                data: list
            });
        }).fail(function (err) {
            message.error(err.statusText);
        });
    };
}
function changePerpage() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        //console.log(getState());
        var page = getState().getCatalogPerpage;

        if (opt.page) {
            page = opt.page;
        }
        console.log('page=' + page);
        dispatch({
            type: 'GET_PERPAGE_SUCCESS',
            data: page
        });
    };
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.makeOrder = makeOrder;
exports.loadOrderList = loadOrderList;
exports.loadOrderDetail = loadOrderDetail;
exports.getWeChatOrderStatus = getWeChatOrderStatus;
exports.orderPay = orderPay;
exports.loadOrderKeys = loadOrderKeys;

var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _NProgress = __webpack_require__(42);

var _NProgress2 = _interopRequireDefault(_NProgress);

var _api = __webpack_require__(10);

var _Message = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 下单
/**
 * @file orderActions.js
 * @desc 订单相关的actions
 * @author wangyong(1223427693@qq.com)
 */
function makeOrder() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // return (dispatch, getState) => {
    //     const { method = 1, cb = () => {} } = opt;
    //     cb({
    //         "img":"iVBORw0KGgoAAAANSUhEUgAAAG8AAABvAQMAAADYCwwjAAAABlBMVEX\/\/\/8AAABVwtN+AAABIklEQVQ4jdXTzY2FIBAH8L\/hwA0beAltcKMlbWCfNqAtcaMNEhrw3TgYZ0fdr8syXB8hxh8JgRlmgHccPdEc8KEzURJpoNaYupInNNDnmdTi8lqauEZ0oZWToxe1EXyK3fB7yQo5Xr4Sz5\/wK7zGDvc3nf+yp0wlv2gfo0wDjAF9pMMlkX20FNMz7OY+qErj0JGaeD3I5H86047BJ5HGPbpCh85HC0GvYg9n1\/vcOt2jL\/vgzrNEcvlR4HmuiOyv+0PT1\/tWabSddHoWtV17Bbo0eLV5ddxlVqenRZ\/VRQUi7\/xwo5nr9evkXWuwm+aihUjuhZkzo5P5bo0afV6Q50CHRwvXwl+MlJoY0xg4YMjk\/vVqAV9M5hlvxKDt5mS+3\/gEx+Lm0GN6g3MAAAAASUVORK5CYII=",
    //         "out_trade_no":"2017052608572342272"
    //     })
    // }

    return function (dispatch, getState) {
        _NProgress2.default.start();
        var _opt$method = opt.method,
            method = _opt$method === undefined ? 1 : _opt$method,
            _opt$cb = opt.cb,
            cb = _opt$cb === undefined ? function () {} : _opt$cb,
            _opt$fb = opt.fb,
            fb = _opt$fb === undefined ? function () {} : _opt$fb;

        _jquery2.default.post(_api.API_PREFIX + '/transaction/order', {
            integral: 0,
            payment_id: method
        }).done(function (res) {
            if (res.Code === 40000) {
                cb(res.data);
            } else {
                _Message.message.error(res.Msg);
                // 未登录情况
                if (res.Code === 40001) {
                    fb();
                }
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        }).always(function () {
            _NProgress2.default.done();
        });
    };
}

// 获取订单列表
function loadOrderList() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var _opt$cb2 = opt.cb,
            cb = _opt$cb2 === undefined ? function () {} : _opt$cb2;

        _jquery2.default.get(_api.API_PREFIX + '/transaction/order').done(function (res) {
            if (res.Code === 40000) {
                dispatch({
                    type: 'LOAD_ORDER_LIST_SUCCESS',
                    data: res.data
                });
                cb();
            } else {
                _Message.message.error(res.Msg);
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        });
    };
}

// 获取订单详情
function loadOrderDetail() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        _NProgress2.default.start();
        var orderId = opt.orderId,
            _opt$cb3 = opt.cb,
            cb = _opt$cb3 === undefined ? function () {} : _opt$cb3;

        _jquery2.default.get(_api.API_PREFIX + '/transaction/order/' + orderId).done(function (res) {
            if (res.Code === 40000) {
                cb(res.data);
            } else {
                _Message.message.error(res.Msg);
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        }).always(function () {
            _NProgress2.default.done();
        });
    };
}

// 查询微信支付状态
function getWeChatOrderStatus() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // return (dispatch, getState) => {
    //     const { cb = () => {}, orderNum = '', payedCb = () => {}, nopayCb = () => {} } = opt;
    //     setTimeout(() => {
    //         payedCb();
    //     }, 3000);
    // }


    return function (dispatch, getState) {
        var _opt$cb4 = opt.cb,
            cb = _opt$cb4 === undefined ? function () {} : _opt$cb4,
            _opt$orderNum = opt.orderNum,
            orderNum = _opt$orderNum === undefined ? '' : _opt$orderNum,
            _opt$payedCb = opt.payedCb,
            payedCb = _opt$payedCb === undefined ? function () {} : _opt$payedCb,
            _opt$nopayCb = opt.nopayCb,
            nopayCb = _opt$nopayCb === undefined ? function () {} : _opt$nopayCb;

        _jquery2.default.get(_api.API_PREFIX + '/transaction/order/' + orderNum + '/status').done(function (res) {
            if (res.Code === 40000) {
                var status = res.data.status;
                if (parseInt(status) === 1) {
                    payedCb();
                } else {
                    nopayCb();
                }
                cb();
            } else {
                _Message.message.error(res.Msg);
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        });
    };
}

// 立即支付
function orderPay() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // return (dispatch, getState) => {
    //     const { method = 1, cb = () => {}, orderId = '' } = opt;
    //     console.log(orderId);
    //     cb({
    //         "img":"iVBORw0KGgoAAAANSUhEUgAAAG8AAABvAQMAAADYCwwjAAAABlBMVEX\/\/\/8AAABVwtN+AAABIklEQVQ4jdXTzY2FIBAH8L\/hwA0beAltcKMlbWCfNqAtcaMNEhrw3TgYZ0fdr8syXB8hxh8JgRlmgHccPdEc8KEzURJpoNaYupInNNDnmdTi8lqauEZ0oZWToxe1EXyK3fB7yQo5Xr4Sz5\/wK7zGDvc3nf+yp0wlv2gfo0wDjAF9pMMlkX20FNMz7OY+qErj0JGaeD3I5H86047BJ5HGPbpCh85HC0GvYg9n1\/vcOt2jL\/vgzrNEcvlR4HmuiOyv+0PT1\/tWabSddHoWtV17Bbo0eLV5ddxlVqenRZ\/VRQUi7\/xwo5nr9evkXWuwm+aihUjuhZkzo5P5bo0afV6Q50CHRwvXwl+MlJoY0xg4YMjk\/vVqAV9M5hlvxKDt5mS+3\/gEx+Lm0GN6g3MAAAAASUVORK5CYII=",
    //         "out_trade_no":"2017052608572342272"
    //     })

    // }

    return function (dispatch, getState) {
        var _opt$cb5 = opt.cb,
            cb = _opt$cb5 === undefined ? function () {} : _opt$cb5,
            _opt$orderId = opt.orderId,
            orderId = _opt$orderId === undefined ? '' : _opt$orderId;

        _jquery2.default.post(_api.API_PREFIX + '/transaction/order/orderPay', {
            order_id: orderId
        }).done(function (res) {
            if (res.Code === 40000) {
                cb(res.data);
            } else {
                _Message.message.error(res.Msg);
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        });
    };
}

// 查看订单key
function loadOrderKeys() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        _NProgress2.default.start();
        var orderId = opt.orderId,
            _opt$cb6 = opt.cb,
            cb = _opt$cb6 === undefined ? function () {} : _opt$cb6;

        _jquery2.default.get(_api.API_PREFIX + '/transaction/order/key', {
            order_id: orderId
        }).done(function (res) {
            if (res.Code === 40000) {
                cb(res.data);
            } else {
                _Message.message.error(res.Msg);
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        }).always(function () {
            _NProgress2.default.done();
        });
    };
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateSearchQuery = updateSearchQuery;
exports.loadSearchList = loadSearchList;
exports.changeTypes = changeTypes;
exports.loadAttributeList = loadAttributeList;
exports.changePerpage = changePerpage;

var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file searchActions.js
 * @desc 搜索相关actions
 * @author wangyong(1223427693@qq.com)
 *         zhaojunzhe（1429595365@qq.com）
 */
function updateSearchQuery() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var _opt$query = opt.query,
            query = _opt$query === undefined ? '' : _opt$query,
            _opt$cb = opt.cb,
            cb = _opt$cb === undefined ? function () {} : _opt$cb;

        dispatch({
            type: 'UPDATE_SEARCH_QUERY_SUCCESS',
            data: query
        });
        cb();
    };
}

function loadSearchList() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var text = opt.text;
        var price = opt.price;

        if (opt.type) {
            var type = opt.type;
        }
        if (opt.platform) {
            var platform = opt.platform;
        }
        console.log(opt);
        if (opt.type) {
            var type = opt.type;
        }
        if (opt.page) {
            var page = opt.page;
        }
        if (opt.perpage) {
            var perpage = opt.perpage;
        }

        _jquery2.default.get(_api.API_PREFIX + '/product/search/' + text, { sort: price, type: type, platform: platform, page: page, perpage: perpage }).done(function (res) {
            //console.log(res);
            var listGames = res.data;
            dispatch({
                type: 'GET_TOTAL_SUCCESS',
                data: res
            });

            dispatch({
                type: 'LOAD_SEARCH_LIST_SUCCESS',
                data: listGames
            });
        }).fail(function (err) {
            message.error(err.statusText);
        });
    };
}

function changeTypes(opt, type) {
    return function (dispatch, getState) {
        //console.log(getState());
        var option = getState().changeTypes;
        console.log(option);
        if (type === 'category') {
            option.category = opt;
        } else if (type === 'type') {
            option.type = opt;
        } else if (type === 'platform') {
            option.platform = opt;
        }

        dispatch({
            type: 'CHANG_TYPE_SUCCESS',
            data: option
        });
    };
}

//加载属性列表
function loadAttributeList() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        _jquery2.default.get(_api.API_PREFIX + '/product/attribute').done(function (res) {
            //console.log(res);
            var attributeList = res.data;
            console.log(attributeList);
            dispatch({
                type: 'LOAD_ATTRIBUTE_LIST_SUCCESS',
                data: attributeList
            });
        }).fail(function (err) {
            message.error(err.statusText);
        });
    };
}

function changePerpage() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        //console.log(getState());
        var page = getState().getSearchPerpage;

        if (opt.page) {
            page = opt.page;
        }
        console.log('Searchpage=' + page);
        dispatch({
            type: 'GET_SEARCH_PERPAGE_SUCCESS',
            data: page
        });
    };
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showWeChatCode = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(9);

var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _Overlay = __webpack_require__(63);

var _Overlay2 = _interopRequireDefault(_Overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class WeChatCode
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 微信二维码支付
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var $div = null;

var WeChatCode = function (_Component) {
    _inherits(WeChatCode, _Component);

    function WeChatCode() {
        _classCallCheck(this, WeChatCode);

        return _possibleConstructorReturn(this, (WeChatCode.__proto__ || Object.getPrototypeOf(WeChatCode)).apply(this, arguments));
    }

    _createClass(WeChatCode, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var orderNum = this.props.orderNum;

            this.fetchOrderStatus(orderNum);
        }
    }, {
        key: 'fetchOrderStatus',
        value: function fetchOrderStatus(orderNum) {
            var _this2 = this;

            var _props = this.props,
                orderActions = _props.orderActions,
                router = _props.router;

            orderActions.getWeChatOrderStatus({
                orderNum: orderNum,
                payedCb: function payedCb() {
                    if (_this2.fetchOrderStatusTimeout) {
                        clearTimeout(_this2.fetchOrderStatusTimeout);
                    }
                    _this2.destroy();
                },
                nopayCb: function nopayCb() {
                    _this2.fetchOrderStatusTimeout = setTimeout(_this2.fetchOrderStatus.bind(_this2, orderNum), 2000);
                }
            });
        }
    }, {
        key: 'onJumpClick',
        value: function onJumpClick() {
            if (this.fetchOrderStatusTimeout) {
                clearTimeout(this.fetchOrderStatusTimeout);
            }
            this.destroy();
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            var onDestroy = this.props.onDestroy;

            if ($div != null) {
                $div.remove();
            }
            onDestroy();
        }
    }, {
        key: 'render',
        value: function render() {
            var url = this.props.url;

            return _react2.default.createElement(
                _Overlay2.default,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'wechat-code-container' },
                    _react2.default.createElement('h3', { className: 'title' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'content' },
                        _react2.default.createElement('img', { className: 'qrcode', src: 'data:image/png;base64,' + url }),
                        _react2.default.createElement(
                            'a',
                            { onClick: this.onJumpClick.bind(this), href: '#/account/orders', className: 'link' },
                            '\u67E5\u770B\u8BA2\u5355'
                        )
                    )
                )
            );
        }
    }]);

    return WeChatCode;
}(_react.Component);

exports.default = WeChatCode;


var showWeChatCode = function showWeChatCode(url, orderNum, onDestroy, props) {
    $div = (0, _jquery2.default)("<div>");
    (0, _jquery2.default)('body').append($div);
    _reactDom2.default.render(_react2.default.createElement(WeChatCode, _extends({ url: url, orderNum: orderNum, onDestroy: onDestroy }, props)), $div[0]);
    return function () {
        if ($div != null) {
            $div.remove();
        }
    };
};

exports.showWeChatCode = showWeChatCode;

/***/ }),
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _stripDiacritics = __webpack_require__(157);

var _stripDiacritics2 = _interopRequireDefault(_stripDiacritics);

function filterOptions(options, filterValue, excludeOptions, props) {
	var _this = this;

	if (props.ignoreAccents) {
		filterValue = (0, _stripDiacritics2['default'])(filterValue);
	}

	if (props.ignoreCase) {
		filterValue = filterValue.toLowerCase();
	}

	if (excludeOptions) excludeOptions = excludeOptions.map(function (i) {
		return i[props.valueKey];
	});

	return options.filter(function (option) {
		if (excludeOptions && excludeOptions.indexOf(option[props.valueKey]) > -1) return false;
		if (props.filterOption) return props.filterOption.call(_this, option, filterValue);
		if (!filterValue) return true;
		var valueTest = String(option[props.valueKey]);
		var labelTest = String(option[props.labelKey]);
		if (props.ignoreAccents) {
			if (props.matchProp !== 'label') valueTest = (0, _stripDiacritics2['default'])(valueTest);
			if (props.matchProp !== 'value') labelTest = (0, _stripDiacritics2['default'])(labelTest);
		}
		if (props.ignoreCase) {
			if (props.matchProp !== 'label') valueTest = valueTest.toLowerCase();
			if (props.matchProp !== 'value') labelTest = labelTest.toLowerCase();
		}
		return props.matchPos === 'start' ? props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
	});
}

module.exports = filterOptions;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function menuRenderer(_ref) {
	var focusedOption = _ref.focusedOption;
	var instancePrefix = _ref.instancePrefix;
	var labelKey = _ref.labelKey;
	var onFocus = _ref.onFocus;
	var onSelect = _ref.onSelect;
	var optionClassName = _ref.optionClassName;
	var optionComponent = _ref.optionComponent;
	var optionRenderer = _ref.optionRenderer;
	var options = _ref.options;
	var valueArray = _ref.valueArray;
	var valueKey = _ref.valueKey;
	var onOptionRef = _ref.onOptionRef;

	var Option = optionComponent;

	return options.map(function (option, i) {
		var isSelected = valueArray && valueArray.indexOf(option) > -1;
		var isFocused = option === focusedOption;
		var optionClass = (0, _classnames2['default'])(optionClassName, {
			'Select-option': true,
			'is-selected': isSelected,
			'is-focused': isFocused,
			'is-disabled': option.disabled
		});

		return _react2['default'].createElement(
			Option,
			{
				className: optionClass,
				instancePrefix: instancePrefix,
				isDisabled: option.disabled,
				isFocused: isFocused,
				isSelected: isSelected,
				key: 'option-' + i + '-' + option[valueKey],
				onFocus: onFocus,
				onSelect: onSelect,
				option: option,
				optionIndex: i,
				ref: function (ref) {
					onOptionRef(ref, isFocused);
				}
			},
			optionRenderer(option, i)
		);
	});
}

module.exports = menuRenderer;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var map = [{ 'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g }, { 'base': 'AA', 'letters': /[\uA732]/g }, { 'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g }, { 'base': 'AO', 'letters': /[\uA734]/g }, { 'base': 'AU', 'letters': /[\uA736]/g }, { 'base': 'AV', 'letters': /[\uA738\uA73A]/g }, { 'base': 'AY', 'letters': /[\uA73C]/g }, { 'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g }, { 'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g }, { 'base': 'D', 'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g }, { 'base': 'DZ', 'letters': /[\u01F1\u01C4]/g }, { 'base': 'Dz', 'letters': /[\u01F2\u01C5]/g }, { 'base': 'E', 'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g }, { 'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g }, { 'base': 'G', 'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g }, { 'base': 'H', 'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g }, { 'base': 'I', 'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g }, { 'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g }, { 'base': 'K', 'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g }, { 'base': 'L', 'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g }, { 'base': 'LJ', 'letters': /[\u01C7]/g }, { 'base': 'Lj', 'letters': /[\u01C8]/g }, { 'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g }, { 'base': 'N', 'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g }, { 'base': 'NJ', 'letters': /[\u01CA]/g }, { 'base': 'Nj', 'letters': /[\u01CB]/g }, { 'base': 'O', 'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g }, { 'base': 'OI', 'letters': /[\u01A2]/g }, { 'base': 'OO', 'letters': /[\uA74E]/g }, { 'base': 'OU', 'letters': /[\u0222]/g }, { 'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g }, { 'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g }, { 'base': 'R', 'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g }, { 'base': 'S', 'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g }, { 'base': 'T', 'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g }, { 'base': 'TZ', 'letters': /[\uA728]/g }, { 'base': 'U', 'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g }, { 'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g }, { 'base': 'VY', 'letters': /[\uA760]/g }, { 'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g }, { 'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g }, { 'base': 'Y', 'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g }, { 'base': 'Z', 'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g }, { 'base': 'a', 'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g }, { 'base': 'aa', 'letters': /[\uA733]/g }, { 'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g }, { 'base': 'ao', 'letters': /[\uA735]/g }, { 'base': 'au', 'letters': /[\uA737]/g }, { 'base': 'av', 'letters': /[\uA739\uA73B]/g }, { 'base': 'ay', 'letters': /[\uA73D]/g }, { 'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g }, { 'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g }, { 'base': 'd', 'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g }, { 'base': 'dz', 'letters': /[\u01F3\u01C6]/g }, { 'base': 'e', 'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g }, { 'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g }, { 'base': 'g', 'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g }, { 'base': 'h', 'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g }, { 'base': 'hv', 'letters': /[\u0195]/g }, { 'base': 'i', 'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g }, { 'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g }, { 'base': 'k', 'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g }, { 'base': 'l', 'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g }, { 'base': 'lj', 'letters': /[\u01C9]/g }, { 'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g }, { 'base': 'n', 'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g }, { 'base': 'nj', 'letters': /[\u01CC]/g }, { 'base': 'o', 'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g }, { 'base': 'oi', 'letters': /[\u01A3]/g }, { 'base': 'ou', 'letters': /[\u0223]/g }, { 'base': 'oo', 'letters': /[\uA74F]/g }, { 'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g }, { 'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g }, { 'base': 'r', 'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g }, { 'base': 's', 'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g }, { 'base': 't', 'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g }, { 'base': 'tz', 'letters': /[\uA729]/g }, { 'base': 'u', 'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g }, { 'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g }, { 'base': 'vy', 'letters': /[\uA761]/g }, { 'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g }, { 'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g }, { 'base': 'y', 'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }, { 'base': 'z', 'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }];

module.exports = function stripDiacritics(str) {
	for (var i = 0; i < map.length; i++) {
		str = str.replace(map[i].letters, map[i].base);
	}
	return str;
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _reactRedux = __webpack_require__(21);

var _reactRouterRedux = __webpack_require__(65);

var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _store = __webpack_require__(222);

var _store2 = _interopRequireDefault(_store);

var _App = __webpack_require__(205);

var _App2 = _interopRequireDefault(_App);

var _Home = __webpack_require__(209);

var _Home2 = _interopRequireDefault(_Home);

var _Catalog = __webpack_require__(207);

var _Catalog2 = _interopRequireDefault(_Catalog);

var _Search = __webpack_require__(213);

var _Search2 = _interopRequireDefault(_Search);

var _Cart = __webpack_require__(206);

var _Cart2 = _interopRequireDefault(_Cart);

var _Login = __webpack_require__(211);

var _Login2 = _interopRequireDefault(_Login);

var _Item = __webpack_require__(210);

var _Item2 = _interopRequireDefault(_Item);

var _Email = __webpack_require__(208);

var _Email2 = _interopRequireDefault(_Email);

var _Account = __webpack_require__(204);

var _Account2 = _interopRequireDefault(_Account);

var _NoMatch = __webpack_require__(212);

var _NoMatch2 = _interopRequireDefault(_NoMatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file router.js
 * @desc 路由文件
 * @author wangyong(1223427693@qq.com)
 */
var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.hashHistory, _store2.default);
history.listen(function () {});

var onEnter = function onEnter() {
    (0, _jquery2.default)('body').animate({ scrollTop: 0 });
};

var router = _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(
        _reactRouter.Router,
        { history: history },
        _react2.default.createElement(
            _reactRouter.Route,
            { path: '/', component: _App2.default, onEnter: onEnter },
            _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default, onEnter: onEnter }),
            _react2.default.createElement(_reactRouter.Route, { path: '/catalog/:category/:type/:platform', component: _Catalog2.default, onEnter: onEnter }),
            _react2.default.createElement(_reactRouter.Redirect, { path: '/catalog', to: '/catalog/all/all/all' }),
            _react2.default.createElement(_reactRouter.Route, { path: '/search/:category/:type/:platform', component: _Search2.default, onEnter: onEnter }),
            _react2.default.createElement(_reactRouter.Route, { path: '/cart', component: _Cart2.default, onEnter: onEnter }),
            _react2.default.createElement(_reactRouter.Route, { path: '/login', component: _Login2.default, onEnter: onEnter }),
            _react2.default.createElement(_reactRouter.Route, { path: '/login/:type', component: _Login2.default, onEnter: onEnter }),
            _react2.default.createElement(_reactRouter.Route, { path: '/item/:id', component: _Item2.default, onEnter: onEnter }),
            _react2.default.createElement(_reactRouter.Route, { path: '/account/:type', component: _Account2.default, onEnter: onEnter }),
            _react2.default.createElement(_reactRouter.Redirect, { path: '/account', to: '/account/details' }),
            _react2.default.createElement(_reactRouter.Route, { path: '/email/:tmp', component: _Email2.default, onEnter: onEnter }),
            _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NoMatch2.default, onEnter: onEnter })
        )
    )
);

exports.default = router;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.saveSaleProduct = saveSaleProduct;
exports.loadSaleProductList = loadSaleProductList;
exports.loadSaleProductFreeTimes = loadSaleProductFreeTimes;
exports.loadSaleProductDetail = loadSaleProductDetail;
exports.updateProductSaleStatue = updateProductSaleStatue;
exports.updateProductSalePrice = updateProductSalePrice;
exports.saveAddKeysToSaleProduct = saveAddKeysToSaleProduct;
exports.saveRemoveKeysFromSaleProduct = saveRemoveKeysFromSaleProduct;
exports.loadWithdrawHistoryList = loadWithdrawHistoryList;
exports.saveWithdraw = saveWithdraw;
exports.loadSaleHistoryList = loadSaleHistoryList;
exports.loadSaleHistoryDetail = loadSaleHistoryDetail;
exports.loadBalanceHistoryList = loadBalanceHistoryList;

var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(6);

var _lodash2 = _interopRequireDefault(_lodash);

var _NProgress = __webpack_require__(42);

var _NProgress2 = _interopRequireDefault(_NProgress);

var _api = __webpack_require__(10);

var _Message = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 销售游戏
function saveSaleProduct() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var _opt$data = opt.data,
            data = _opt$data === undefined ? {} : _opt$data,
            _opt$cb = opt.cb,
            cb = _opt$cb === undefined ? function () {} : _opt$cb;

        _jquery2.default.ajax({
            url: _api.API_PREFIX + '/user/sale',
            type: "post",
            data: data,
            processData: false,
            contentType: false
        }).done(function (res) {
            if (res.Code === 40000) {
                _Message.message.success(res.Msg);
                cb();
            } else {
                _Message.message.error(res.Msg);
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        });
    };
}

// 获取销售的游戏列表
/**
 * @file saleActions.js
 * @desc 销售游戏相关的actions
 * @author wangyong(1223427693@qq.com)
 */
function loadSaleProductList() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var _opt$cb2 = opt.cb,
            cb = _opt$cb2 === undefined ? function () {} : _opt$cb2;

        _jquery2.default.get(_api.API_PREFIX + '/user/sale').done(function (res) {
            if (res.Code === 40000) {
                dispatch({
                    type: 'LOAD_SALE_PRODUCT_LIST_SUCCESS',
                    data: res.data
                });
                cb();
            } else {
                _Message.message.error(res.Msg);
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        });
    };
}

// 获取剩余免费销售次数
function loadSaleProductFreeTimes() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var _opt$cb3 = opt.cb,
            cb = _opt$cb3 === undefined ? function () {} : _opt$cb3;

        _jquery2.default.get(_api.API_PREFIX + '/user/times').done(function (res) {
            if (res.Code === 40000) {
                cb(res.data);
            } else {
                _Message.message.error(res.Msg);
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        });
    };
}

// 获取销售商品详情
function loadSaleProductDetail() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var id = opt.id,
            _opt$cb4 = opt.cb,
            cb = _opt$cb4 === undefined ? function () {} : _opt$cb4;

        _jquery2.default.get(_api.API_PREFIX + '/user/sale/' + id).done(function (res) {
            if (res.Code === 40000) {
                cb(res.data);
            } else {
                _Message.message.error(res.Msg);
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        });
    };
}

// 修改商品上下架状态
function updateProductSaleStatue() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        _NProgress2.default.start();
        var id = opt.id,
            onSale = opt.onSale,
            _opt$cb5 = opt.cb,
            cb = _opt$cb5 === undefined ? function () {} : _opt$cb5;

        _jquery2.default.ajax({
            type: 'put',
            url: _api.API_PREFIX + '/user/isSale',
            data: {
                id: id,
                is_sale: onSale
            }
        }).done(function (res) {
            if (res.Code === 40000) {
                // 修改上下架状态以后需要更新列表
                _jquery2.default.get(_api.API_PREFIX + '/user/sale').done(function (res2) {
                    if (res2.Code === 40000) {
                        _Message.message.success(res.Msg);
                        dispatch({
                            type: 'LOAD_SALE_PRODUCT_LIST_SUCCESS',
                            data: res2.data
                        });
                        cb();
                    } else {
                        _Message.message.error(res2.Msg);
                    }
                }).fail(function (err) {
                    _Message.message.error(err.statusText);
                }).always(function () {
                    _NProgress2.default.done();
                });
            } else {
                _Message.message.error(res.Msg);
                _NProgress2.default.done();
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
            _NProgress2.default.done();
        });
    };
}

// 修改商品价格
function updateProductSalePrice() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        _NProgress2.default.start();
        var id = opt.id,
            price = opt.price,
            _opt$cb6 = opt.cb,
            cb = _opt$cb6 === undefined ? function () {} : _opt$cb6;

        _jquery2.default.ajax({
            type: 'put',
            url: _api.API_PREFIX + '/user/price',
            data: {
                s_id: id,
                price: price
            }
        }).done(function (res) {
            if (res.Code === 40000) {
                // 修改价格以后需要更新列表
                _jquery2.default.get(_api.API_PREFIX + '/user/sale').done(function (res2) {
                    if (res2.Code === 40000) {
                        _Message.message.success(res.Msg);
                        dispatch({
                            type: 'LOAD_SALE_PRODUCT_LIST_SUCCESS',
                            data: res2.data
                        });
                        cb();
                    } else {
                        _Message.message.error(res2.Msg);
                    }
                }).fail(function (err) {
                    _Message.message.error(err.statusText);
                }).always(function () {
                    _NProgress2.default.done();
                });
            } else {
                _Message.message.error(res.Msg);
                _NProgress2.default.done();
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
            _NProgress2.default.done();
        });
    };
}

// 销售游戏添加key
function saveAddKeysToSaleProduct() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        _NProgress2.default.start();
        var key = opt.key,
            type = opt.type,
            game = opt.game,
            _opt$cb7 = opt.cb,
            cb = _opt$cb7 === undefined ? function () {} : _opt$cb7;

        _jquery2.default.post(_api.API_PREFIX + '/user/sale/key', {
            p_id: game.p_id,
            type: type,
            sale_price: game.price,
            s_id: game.s_id,
            key: key
        }).done(function (res) {
            if (res.Code === 40000) {
                _jquery2.default.get(_api.API_PREFIX + '/user/sale/' + game.s_id).done(function (res2) {
                    if (res2.Code === 40000) {
                        _Message.message.success(res.Msg);
                        cb(res2.data);
                    } else {
                        _Message.message.error(res2.Msg);
                    }
                }).fail(function (err) {
                    _Message.message.error(err.statusText);
                }).always(function () {
                    _NProgress2.default.done();
                });
            } else {
                _Message.message.error(res.Msg);
                _NProgress2.default.done();
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
            _NProgress2.default.done();
        });
    };
}

// 删除key
function saveRemoveKeysFromSaleProduct() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        _NProgress2.default.start();
        var game = opt.game,
            keys = opt.keys,
            _opt$cb8 = opt.cb,
            cb = _opt$cb8 === undefined ? function () {} : _opt$cb8;
        // TODO, 临时fix，后台不支持双引号，把key都转换成数字

        var numKeys = _lodash2.default.map(keys, function (_key) {
            return parseInt(_key);
        });
        _jquery2.default.ajax({
            url: _api.API_PREFIX + '/user/sale/key',
            type: 'delete',
            data: {
                s_id: game.s_id,
                key_id: JSON.stringify(numKeys)
            }
        }).done(function (res) {
            if (res.Code === 40000) {
                _jquery2.default.get(_api.API_PREFIX + '/user/sale/' + game.s_id).done(function (res2) {
                    if (res2.Code === 40000) {
                        _Message.message.success(res.Msg);
                        cb(res2.data);
                    } else {
                        _Message.message.error(res2.Msg);
                    }
                }).fail(function (err) {
                    _Message.message.error(err.statusText);
                }).always(function () {
                    _NProgress2.default.done();
                });
            } else {
                _Message.message.error(res.Msg);
                _NProgress2.default.done();
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
            _NProgress2.default.done();
        });
    };
}

// 获取提现记录
function loadWithdrawHistoryList() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var _opt$cb9 = opt.cb,
            cb = _opt$cb9 === undefined ? function () {} : _opt$cb9;

        _jquery2.default.get(_api.API_PREFIX + '/user/log/withdrawals').done(function (res) {
            if (res.Code === 40000) {
                dispatch({
                    type: 'LOAD_WITHDRAW_HISTORY_LIST_SUCCESS',
                    data: res.data
                });
                cb();
            } else {
                _Message.message.error(res.Msg);
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        });
    };
}

// 提现申请
function saveWithdraw() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var _opt$cb10 = opt.cb,
            cb = _opt$cb10 === undefined ? function () {} : _opt$cb10,
            data = opt.data;

        _jquery2.default.post(_api.API_PREFIX + '/user/balance/application', data).done(function (res) {
            if (res.Code === 40000) {
                _Message.message.success(res.Msg);
                cb();
            } else {
                _Message.message.error(res.Msg);
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        });
    };
}

// 获取销售历史记录
function loadSaleHistoryList() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var _opt$cb11 = opt.cb,
            cb = _opt$cb11 === undefined ? function () {} : _opt$cb11;

        _jquery2.default.get(_api.API_PREFIX + '/user/history').done(function (res) {
            if (res.Code === 40000) {
                dispatch({
                    type: "LOAD_SALE_HISTORY_LIST_SUCCESS",
                    data: res.data
                });
                cb();
            } else {
                _Message.message.error(res.Msg);
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        });
    };
}

// 获取销售历史详情
function loadSaleHistoryDetail() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var id = opt.id,
            _opt$cb12 = opt.cb,
            cb = _opt$cb12 === undefined ? function () {} : _opt$cb12;

        _jquery2.default.get(_api.API_PREFIX + '/user/sale/saleDetail', {
            s_id: id
        }).done(function (res) {
            if (res.Code === 40000) {
                cb(res.data);
            } else {
                _Message.message.error(res.Msg);
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        });
    };
}

// 获取余额变动记录
function loadBalanceHistoryList() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
        var _opt$cb13 = opt.cb,
            cb = _opt$cb13 === undefined ? function () {} : _opt$cb13;

        _jquery2.default.get(_api.API_PREFIX + '/user/balance/log').done(function (res) {
            if (res.Code === 40000) {
                dispatch({
                    type: 'LOAD_BALANCE_HISTORY_LIST_SUCCESS',
                    data: res.data
                });
                cb();
            } else {
                _Message.message.error(res.Msg);
            }
        }).fail(function (err) {
            _Message.message.error(err.statusText);
        });
    };
}

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _router = __webpack_require__(158);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file app.js
 * @desc 入口文件
 * @author wangyong(1223427693@qq.com)
 */
console.log("development");

_reactDom2.default.render(_router2.default, document.getElementById('app'));

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _Navs = __webpack_require__(68);

var _Navs2 = _interopRequireDefault(_Navs);

var _Message = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Details
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 账户详情修改
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var DetailMyAccount = function (_Component) {
    _inherits(DetailMyAccount, _Component);

    function DetailMyAccount() {
        _classCallCheck(this, DetailMyAccount);

        return _possibleConstructorReturn(this, (DetailMyAccount.__proto__ || Object.getPrototypeOf(DetailMyAccount)).apply(this, arguments));
    }

    _createClass(DetailMyAccount, [{
        key: 'onSaveBtnClick',
        value: function onSaveBtnClick() {
            var username = this.refs.username.value;
            console.log(username);
            if (username.trim() === "") return _Message.message.warning("用户名不能为空");
        }
    }, {
        key: 'render',
        value: function render() {
            var userInfo = this.props.userInfo;

            return _react2.default.createElement(
                'div',
                { className: 'edit-account' },
                _react2.default.createElement(
                    'h2',
                    { className: 'content-title' },
                    '\u4E2A\u4EBA\u4FE1\u606F'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'detail-group' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label', htmlFor: 'disName' },
                        '\u6CE8\u518C\u90AE\u7BB1'
                    ),
                    _react2.default.createElement('input', { className: 'input-text', disabled: true, type: 'text', id: 'disName', defaultValue: userInfo.email })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'detail-group' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label', htmlFor: 'disName' },
                        '\u7528\u6237\u540D'
                    ),
                    _react2.default.createElement('input', { ref: 'username', className: 'input-text', type: 'text', id: 'disName', defaultValue: userInfo.username })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group func-clearfix' },
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:;', className: 'btn btn-save', onClick: this.onSaveBtnClick.bind(this) },
                        _react2.default.createElement('i', { className: 'fa fa-check' }),
                        '\u4FDD\u5B58\u4FEE\u6539'
                    )
                )
            );
        }
    }]);

    return DetailMyAccount;
}(_react.Component);

var DetailPassWord = function (_Component2) {
    _inherits(DetailPassWord, _Component2);

    function DetailPassWord(props) {
        _classCallCheck(this, DetailPassWord);

        return _possibleConstructorReturn(this, (DetailPassWord.__proto__ || Object.getPrototypeOf(DetailPassWord)).call(this, props));
    }

    _createClass(DetailPassWord, [{
        key: 'onSendVerCode',
        value: function onSendVerCode() {
            var _props = this.props,
                userInfo = _props.userInfo,
                userActions = _props.userActions;

            userActions.sendPasswordResetEmailCode({
                email: userInfo.email
            });
        }
    }, {
        key: 'onSaveClick',
        value: function onSaveClick() {
            var _refs = this.refs,
                verCode = _refs.verCode,
                password = _refs.password,
                confirmPass = _refs.confirmPass;
            var _props2 = this.props,
                userInfo = _props2.userInfo,
                userActions = _props2.userActions;

            var verCodeValue = verCode.value.trim();
            var passwordValue = password.value.trim();
            var confirmPassValue = confirmPass.value.trim();
            if (verCodeValue === '') {
                return _Message.message.warning('邮箱验证码不能为空');
            }
            if (passwordValue === '' || confirmPassValue === '') {
                return _Message.message.warning('新密码不能为空');
            }
            if (passwordValue !== confirmPassValue) {
                return _Message.message.warning('两次输入的密码不一样');
            }
            userActions.saveResetPassword({
                verCode: verCodeValue,
                password: passwordValue,
                confirmPass: confirmPassValue,
                email: userInfo.email,
                cb: function cb() {
                    // TODO注销登录
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var userInfo = this.props.userInfo;


            return _react2.default.createElement(
                'div',
                { className: 'edit-password' },
                _react2.default.createElement(
                    'h2',
                    { className: 'content-title' },
                    '\u4FEE\u6539\u5BC6\u7801'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'detail-group' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label' },
                        '\u6CE8\u518C\u90AE\u7BB1'
                    ),
                    _react2.default.createElement('input', { className: 'input-text', disabled: true, type: 'text', defaultValue: userInfo.email }),
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:;', className: 'btn', onClick: this.onSendVerCode.bind(this) },
                        '\u53D1\u9001\u9A8C\u8BC1\u7801'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'detail-group' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label', htmlFor: 'verCode' },
                        '\u9A8C\u8BC1\u7801'
                    ),
                    _react2.default.createElement('input', { ref: 'verCode', className: 'input-text', type: 'text', id: 'verCode' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'detail-group' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label', htmlFor: 'newpass' },
                        '\u65B0\u5BC6\u7801'
                    ),
                    _react2.default.createElement('input', { ref: 'password', className: 'input-text', type: 'password', id: 'newpass' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'detail-group' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label', htmlFor: 'confirmPass' },
                        '\u786E\u8BA4\u65B0\u5BC6\u7801'
                    ),
                    _react2.default.createElement('input', { ref: 'confirmPass', className: 'input-text', type: 'password', id: 'confirmPass' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group func-clearfix' },
                    _react2.default.createElement(
                        'a',
                        { onClick: this.onSaveClick.bind(this), href: 'javascript:;', className: 'btn btn-save' },
                        _react2.default.createElement('i', { className: 'fa fa-check' }),
                        '\u91CD\u7F6E\u5BC6\u7801'
                    )
                )
            );
        }
    }]);

    return DetailPassWord;
}(_react.Component);

var Details = function (_Component3) {
    _inherits(Details, _Component3);

    function Details() {
        _classCallCheck(this, Details);

        return _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).apply(this, arguments));
    }

    _createClass(Details, [{
        key: 'render',
        value: function render() {
            var userInfo = this.props.userInfo;

            return _react2.default.createElement(
                'section',
                { className: 'account-details' },
                _react2.default.createElement(
                    'div',
                    { className: 'account-details-basic func-clearfix' },
                    _react2.default.createElement('div', { className: 'avatar' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'info' },
                        _react2.default.createElement(
                            'h3',
                            { className: 'display-name' },
                            userInfo.username
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'email' },
                            '\u6CE8\u518C\u90AE\u7BB1\uFF1A',
                            userInfo.email
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'reg-time' },
                            '\u6CE8\u518C\u65F6\u95F4\uFF1A',
                            userInfo.reg_time
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'account-details-edit' },
                    _react2.default.createElement(
                        _Navs2.default,
                        null,
                        _react2.default.createElement(
                            _Navs.NavPane,
                            { title: '\u4E2A\u4EBA\u4FE1\u606F' },
                            _react2.default.createElement(DetailMyAccount, this.props)
                        ),
                        _react2.default.createElement(
                            _Navs.NavPane,
                            { title: '\u4FEE\u6539\u5BC6\u7801' },
                            _react2.default.createElement(DetailPassWord, this.props)
                        )
                    )
                )
            );
        }
    }]);

    return Details;
}(_react.Component);

exports.default = Details;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Games
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 我的游戏
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Games = function (_Component) {
    _inherits(Games, _Component);

    function Games() {
        _classCallCheck(this, Games);

        return _possibleConstructorReturn(this, (Games.__proto__ || Object.getPrototypeOf(Games)).apply(this, arguments));
    }

    _createClass(Games, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { className: "account-games" },
                _react2.default.createElement(
                    "div",
                    { className: "games-list func-clearfix" },
                    _react2.default.createElement(
                        "a",
                        { href: "javascript:;", className: "game-list-item func-clearfix" },
                        _react2.default.createElement("div", { className: "game-img" }),
                        _react2.default.createElement(
                            "div",
                            { className: "game-content" },
                            _react2.default.createElement(
                                "p",
                                null,
                                "Naruto Online"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "a",
                        { href: "javascript:;", className: "game-list-item func-clearfix" },
                        _react2.default.createElement("div", { className: "game-img" }),
                        _react2.default.createElement(
                            "div",
                            { className: "game-content" },
                            _react2.default.createElement(
                                "p",
                                null,
                                "Naruto Online"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "a",
                        { href: "javascript:;", className: "game-list-item func-clearfix" },
                        _react2.default.createElement("div", { className: "game-img" }),
                        _react2.default.createElement(
                            "div",
                            { className: "game-content" },
                            _react2.default.createElement(
                                "p",
                                null,
                                "Naruto Online"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "a",
                        { href: "javascript:;", className: "game-list-item func-clearfix" },
                        _react2.default.createElement("div", { className: "game-img" }),
                        _react2.default.createElement(
                            "div",
                            { className: "game-content" },
                            _react2.default.createElement(
                                "p",
                                null,
                                "Naruto Online"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "a",
                        { href: "javascript:;", className: "game-list-item func-clearfix" },
                        _react2.default.createElement("div", { className: "game-img" }),
                        _react2.default.createElement(
                            "div",
                            { className: "game-content" },
                            _react2.default.createElement(
                                "p",
                                null,
                                "Naruto Online"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "a",
                        { href: "javascript:;", className: "game-list-item func-clearfix" },
                        _react2.default.createElement("div", { className: "game-img" }),
                        _react2.default.createElement(
                            "div",
                            { className: "game-content" },
                            _react2.default.createElement(
                                "p",
                                null,
                                "Naruto Online"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "a",
                        { href: "javascript:;", className: "game-list-item func-clearfix" },
                        _react2.default.createElement("div", { className: "game-img" }),
                        _react2.default.createElement(
                            "div",
                            { className: "game-content" },
                            _react2.default.createElement(
                                "p",
                                null,
                                "Naruto Online"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Games;
}(_react.Component);

exports.default = Games;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(6);

var _lodash2 = _interopRequireDefault(_lodash);

var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _numeral = __webpack_require__(96);

var _numeral2 = _interopRequireDefault(_numeral);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Placeholder = __webpack_require__(15);

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _Pagination = __webpack_require__(26);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _WeChatCode = __webpack_require__(100);

var _WeChatCode2 = _interopRequireDefault(_WeChatCode);

var _Modal = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Orders
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 我的订单页面
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var OrderKeys = function (_Component) {
    _inherits(OrderKeys, _Component);

    function OrderKeys(props) {
        _classCallCheck(this, OrderKeys);

        var _this = _possibleConstructorReturn(this, (OrderKeys.__proto__ || Object.getPrototypeOf(OrderKeys)).call(this, props));

        _this.state = {
            loading: true,
            pageSize: 5,
            current: 1,
            keys: []
        };
        return _this;
    }

    _createClass(OrderKeys, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var _props = this.props,
                order = _props.order,
                orderActions = _props.orderActions;

            orderActions.loadOrderKeys({
                orderId: order.order_id,
                cb: function cb(data) {
                    _this2.setState({
                        loading: false,
                        keys: data
                    });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                loading = _state.loading,
                current = _state.current,
                pageSize = _state.pageSize,
                keys = _state.keys;

            if (loading) return _react2.default.createElement(_Placeholder2.default, { type: 'content' });

            var filterKeys = keys.slice((current - 1) * pageSize, current * pageSize);
            var renderKey = function renderKey(key, index) {
                return _react2.default.createElement(
                    'tr',
                    { key: index },
                    _react2.default.createElement(
                        'td',
                        null,
                        key.name_zh
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        key.type
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        key.key
                    )
                );
            };

            return _react2.default.createElement(
                'div',
                { className: 'order-keys' },
                _react2.default.createElement(
                    'div',
                    { className: 'order-keys-table' },
                    _react2.default.createElement(
                        'table',
                        null,
                        _react2.default.createElement(
                            'thead',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u6E38\u620F'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u7C7B\u578B'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    'Key'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'tbody',
                            null,
                            _lodash2.default.map(filterKeys, renderKey)
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'order-keys-pagination' },
                    _react2.default.createElement(_Pagination2.default, { pageSize: pageSize, total: keys.length, onChange: function onChange(page) {
                            return _this3.setState({ current: page });
                        } })
                )
            );
        }
    }]);

    return OrderKeys;
}(_react.Component);

var OrderItem = function (_Component2) {
    _inherits(OrderItem, _Component2);

    function OrderItem(props) {
        _classCallCheck(this, OrderItem);

        var _this4 = _possibleConstructorReturn(this, (OrderItem.__proto__ || Object.getPrototypeOf(OrderItem)).call(this, props));

        _this4.state = {
            active: false,
            orderDetail: null
        };
        return _this4;
    }

    _createClass(OrderItem, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextPorps) {
            if (!_lodash2.default.isEqual(this.props.order, nextPorps.order)) {
                this.setState({ active: false });
            }
        }
    }, {
        key: 'onShowOrderDetailClick',
        value: function onShowOrderDetailClick() {
            var _this5 = this;

            var orderDetail = this.state.orderDetail;
            var _props2 = this.props,
                order = _props2.order,
                orderActions = _props2.orderActions;

            var orderId = order.order_id;

            orderActions.loadOrderDetail({
                orderId: orderId,
                cb: function cb(data) {
                    _this5.setState({
                        active: true,
                        orderDetail: data
                    });
                }
            });
        }
    }, {
        key: 'onHideOrderDetailClick',
        value: function onHideOrderDetailClick() {
            this.setState({ active: false });
        }
    }, {
        key: 'onPayClick',
        value: function onPayClick() {
            var _props3 = this.props,
                order = _props3.order,
                onPayClick = _props3.onPayClick;

            onPayClick(order.order_id);
        }
    }, {
        key: 'onLoadOrderKeysClick',
        value: function onLoadOrderKeysClick() {
            var order = this.props.order;

            _Modal.modal.show({
                title: order.order_sn,
                content: _react2.default.createElement(OrderKeys, this.props)
            });
        }
    }, {
        key: 'renderNormalItem',
        value: function renderNormalItem() {
            var order = this.props.order;

            return _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    order.order_sn
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    order.add_time
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    '\uFFE5',
                    order.amount
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        order.status
                    ),
                    order.status === '未支付' ? _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: 'javascript:;', className: 'btn order-pay', onClick: this.onPayClick.bind(this) },
                            '\u7ACB\u5373\u4ED8\u6B3E'
                        )
                    ) : null
                ),
                _react2.default.createElement(
                    'td',
                    { className: 'actions' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: 'javascript:;', className: 'btn order-detail', onClick: this.onShowOrderDetailClick.bind(this) },
                            '\u67E5\u770B\u8BA2\u5355'
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: 'javascript:;', className: 'btn service-create' },
                            '\u521B\u5EFA\u5BA2\u670D\u5355'
                        )
                    )
                )
            );
        }
    }, {
        key: 'renderActiveItem',
        value: function renderActiveItem() {
            var order = this.props.order;
            var orderDetail = this.state.orderDetail;

            if (orderDetail == null) return null;
            var payClass = (0, _classnames2.default)('abstract', {
                'nopay': order.status === '未支付'
            });
            return _react2.default.createElement(
                'tr',
                { className: 'active' },
                _react2.default.createElement(
                    'td',
                    { className: 'game' },
                    _react2.default.createElement(
                        'div',
                        { className: 'abstract' },
                        order.order_sn
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'detail' },
                        _react2.default.createElement(
                            'div',
                            { className: 'detail-head' },
                            '\u6E38\u620F\u540D\u79F0'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'detail-body' },
                            _lodash2.default.map(orderDetail, function (_item, _index) {
                                return _react2.default.createElement(
                                    'p',
                                    { key: _index },
                                    _item.name_zh
                                );
                            })
                        )
                    )
                ),
                _react2.default.createElement(
                    'td',
                    { className: 'price-count' },
                    _react2.default.createElement(
                        'div',
                        { className: 'abstract' },
                        order.add_time
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'detail' },
                        _react2.default.createElement(
                            'div',
                            { className: 'detail-head' },
                            '\u5355\u4EF7 x \u6570\u91CF'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'detail-body' },
                            _lodash2.default.map(orderDetail, function (_item, _index) {
                                return _react2.default.createElement(
                                    'p',
                                    { key: _index },
                                    '\uFFE5',
                                    _item.sold_price,
                                    ' x ',
                                    _item.number
                                );
                            })
                        )
                    )
                ),
                _react2.default.createElement(
                    'td',
                    { className: 'price-count' },
                    _react2.default.createElement(
                        'div',
                        { className: 'abstract' },
                        '\uFFE5',
                        order.amount
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'detail' },
                        _react2.default.createElement(
                            'div',
                            { className: 'detail-head' },
                            '\u603B\u4EF7'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'detail-body' },
                            _lodash2.default.map(orderDetail, function (_item, _index) {
                                return _react2.default.createElement(
                                    'p',
                                    { key: _index },
                                    '\uFFE5',
                                    (0, _numeral2.default)(parseFloat(_item.sold_price * _item.number)).format('0.00')
                                );
                            })
                        )
                    )
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: payClass },
                        _react2.default.createElement(
                            'p',
                            null,
                            order.status
                        ),
                        order.status === '未支付' ? _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: 'javascript:;', className: 'btn order-pay', onClick: this.onPayClick.bind(this) },
                                '\u7ACB\u5373\u4ED8\u6B3E'
                            )
                        ) : null
                    )
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'abstract' },
                        _react2.default.createElement(
                            'div',
                            { className: 'actions' },
                            _react2.default.createElement(
                                'a',
                                { href: 'javascript:;', className: 'btn order-detail', onClick: this.onHideOrderDetailClick.bind(this) },
                                '\u9690\u85CF\u8BA2\u5355'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: 'javascript:;', className: 'btn service-create' },
                                '\u521B\u5EFA\u5BA2\u670D\u5355'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'detail' },
                        _react2.default.createElement(
                            'p',
                            { className: 'detail-head' },
                            '\u72B6\u6001'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'detail-body' },
                            _react2.default.createElement(
                                'a',
                                { href: 'javascript:;', onClick: this.onLoadOrderKeysClick.bind(this) },
                                '\u67E5\u770BKey'
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _state2 = this.state,
                active = _state2.active,
                loading = _state2.loading;

            if (active) {
                return this.renderActiveItem();
            } else {
                return this.renderNormalItem();
            }
        }
    }]);

    return OrderItem;
}(_react.Component);

var Orders = function (_Component3) {
    _inherits(Orders, _Component3);

    function Orders(props) {
        _classCallCheck(this, Orders);

        var _this6 = _possibleConstructorReturn(this, (Orders.__proto__ || Object.getPrototypeOf(Orders)).call(this, props));

        _this6.state = {
            loading: true,
            current: 1,
            pageSize: 5
        };
        return _this6;
    }

    _createClass(Orders, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this7 = this;

            var _props4 = this.props,
                orderActions = _props4.orderActions,
                orderList = _props4.orderList;

            orderActions.loadOrderList({
                cb: function cb() {
                    _this7.setState({ loading: false });
                }
            });
        }
    }, {
        key: 'onPayClick',
        value: function onPayClick(orderId) {
            var _this8 = this;

            var orderActions = this.props.orderActions;

            orderActions.orderPay({
                orderId: orderId,
                cb: function cb(data) {
                    // 支付宝支付返回字符串，微信支付返回对象
                    if (_lodash2.default.isString(data)) {
                        (0, _jquery2.default)('body').append((0, _jquery2.default)(data));
                    } else {
                        var img = data.img;
                        var orderNum = data.out_trade_no;
                        (0, _WeChatCode.showWeChatCode)(img, orderNum, function () {
                            _this8.setState({ loading: true });
                            orderActions.loadOrderList({
                                cb: function cb() {
                                    _this8.setState({ loading: false });
                                }
                            });
                        }, _this8.props);
                    }
                }
            });
        }
    }, {
        key: 'renderOrderList',
        value: function renderOrderList() {
            var _this9 = this;

            var orderList = this.props.orderList;
            var _state3 = this.state,
                current = _state3.current,
                pageSize = _state3.pageSize;

            var renderItem = function renderItem(_order, _index) {
                return _react2.default.createElement(OrderItem, _extends({ key: _index }, _this9.props, { order: _order, onPayClick: _this9.onPayClick.bind(_this9) }));
            };

            var currentItems = orderList.slice((current - 1) * pageSize, current * pageSize);

            return _react2.default.createElement(
                'tbody',
                null,
                _lodash2.default.map(currentItems, renderItem)
            );
        }
    }, {
        key: 'onPaginationChange',
        value: function onPaginationChange(currentPage) {
            this.setState({ current: currentPage });
        }
    }, {
        key: 'render',
        value: function render() {
            var orderList = this.props.orderList;
            var pageSize = this.state.pageSize;


            if (this.state.loading) return _react2.default.createElement(
                'div',
                { className: 'account-orders' },
                _react2.default.createElement(_Placeholder2.default, { type: 'content' })
            );
            return _react2.default.createElement(
                'section',
                { className: 'account-orders' },
                _react2.default.createElement(
                    'table',
                    { className: 'order-table' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u8BA2\u5355\u53F7'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u8BA2\u5355\u65F6\u95F4'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u8BA2\u5355\u603B\u91D1\u989D'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u8BA2\u5355\u72B6\u6001'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u64CD\u4F5C'
                            )
                        )
                    ),
                    this.renderOrderList()
                ),
                orderList.length < pageSize ? null : _react2.default.createElement(
                    'div',
                    { className: 'order-pagination' },
                    _react2.default.createElement(_Pagination2.default, { pageSize: pageSize, total: orderList.length, onChange: this.onPaginationChange.bind(this) })
                )
            );
        }
    }]);

    return Orders;
}(_react.Component);

exports.default = Orders;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(6);

var _lodash2 = _interopRequireDefault(_lodash);

var _Tabs = __webpack_require__(50);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Placeholder = __webpack_require__(15);

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _Pagination = __webpack_require__(26);

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class EditSaleKeys
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc key状态及删除新增key
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var KeysRemove = function (_Component) {
    _inherits(KeysRemove, _Component);

    function KeysRemove(props) {
        _classCallCheck(this, KeysRemove);

        var _this = _possibleConstructorReturn(this, (KeysRemove.__proto__ || Object.getPrototypeOf(KeysRemove)).call(this, props));

        _this.state = {
            current: 1,
            pageSize: 5,
            selected: []
        };
        return _this;
    }

    _createClass(KeysRemove, [{
        key: 'onPaginationChange',
        value: function onPaginationChange(page) {
            this.setState({
                current: page,
                selected: []
            });
        }
    }, {
        key: 'onCheckboxChange',
        value: function onCheckboxChange(key, e) {
            var selected = this.state.selected;

            var newSelected = _lodash2.default.clone(selected);
            var checked = e.target.checked;
            if (checked) {
                newSelected.push(key.key_id);
            } else {
                newSelected = _lodash2.default.without(selected, key.key_id);
            }
            this.setState({
                selected: newSelected
            });
        }
    }, {
        key: 'onSaveClick',
        value: function onSaveClick() {
            var _this2 = this;

            var _props = this.props,
                game = _props.game,
                saleActions = _props.saleActions,
                onSaveKeysUpdate = _props.onSaveKeysUpdate;
            var selected = this.state.selected;

            saleActions.saveRemoveKeysFromSaleProduct({
                game: game,
                keys: selected,
                cb: function cb(data) {
                    _this2.setState({
                        selected: []
                    });
                    onSaveKeysUpdate(data);
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props2 = this.props,
                game = _props2.game,
                keysList = _props2.keysList;
            var _state = this.state,
                current = _state.current,
                pageSize = _state.pageSize,
                selected = _state.selected;

            if (keysList.length === 0) return _react2.default.createElement(
                'div',
                { className: 'edit-keys' },
                _react2.default.createElement(
                    'p',
                    { className: 'info-nokey' },
                    '\u6CA1\u6709key\u76F8\u5173\u4FE1\u606F'
                )
            );

            var filterList = keysList.slice((current - 1) * pageSize, current * pageSize);
            return _react2.default.createElement(
                'div',
                { className: 'edit-keys' },
                _react2.default.createElement(
                    'table',
                    { className: 'keys-table' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u9009\u62E9'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Key'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        _lodash2.default.map(filterList, function (_key, _index) {
                            return _react2.default.createElement(
                                'tr',
                                { key: _index },
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    _react2.default.createElement('input', { checked: _lodash2.default.indexOf(selected, _key.key_id) > -1, onChange: _this3.onCheckboxChange.bind(_this3, _key), type: 'checkbox', className: 'input-checkbox' })
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    _key.key
                                )
                            );
                        })
                    )
                ),
                _react2.default.createElement(_Pagination2.default, { total: keysList.length, pageSize: pageSize, onChange: this.onPaginationChange.bind(this) }),
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group func-clearfix' },
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:;', className: 'btn btn-save', onClick: this.onSaveClick.bind(this) },
                        '\u5220\u9664\u9009\u4E2D'
                    )
                )
            );
        }
    }]);

    return KeysRemove;
}(_react.Component);

var EditSaleKeys = function (_Component2) {
    _inherits(EditSaleKeys, _Component2);

    function EditSaleKeys(props) {
        _classCallCheck(this, EditSaleKeys);

        var _this4 = _possibleConstructorReturn(this, (EditSaleKeys.__proto__ || Object.getPrototypeOf(EditSaleKeys)).call(this, props));

        _this4.state = {
            loading: true,
            detail: {}
        };
        return _this4;
    }

    _createClass(EditSaleKeys, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this5 = this;

            var _props3 = this.props,
                game = _props3.game,
                saleActions = _props3.saleActions;

            saleActions.loadSaleProductDetail({
                id: game.s_id,
                cb: function cb(data) {
                    _this5.setState({
                        loading: false,
                        detail: data
                    });
                }
            });
        }
    }, {
        key: 'onSaveAddKeyClick',
        value: function onSaveAddKeyClick() {
            var _this6 = this;

            var _props4 = this.props,
                game = _props4.game,
                saleActions = _props4.saleActions;

            var keys = this.refs.keys.value.split(" ").join("\n");
            saleActions.saveAddKeysToSaleProduct({
                game: game,
                key: keys,
                type: 1, // TODO 做成radio，文本或者图片
                cb: function cb(data) {
                    _this6.refs.keys.value = '';
                    _this6.setState({
                        detail: data
                    });
                }
            });
        }
    }, {
        key: 'onSaveKeysUpdate',
        value: function onSaveKeysUpdate(data) {
            this.setState({
                detail: data
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state2 = this.state,
                loading = _state2.loading,
                detail = _state2.detail;

            if (loading) return _react2.default.createElement(_Placeholder2.default, { type: 'content' });
            var soldList = [];
            var unsoldList = [];
            _lodash2.default.each(detail.key, function (_key, _index) {
                if (_key.status === '已售') {
                    soldList.push(_key);
                } else {
                    unsoldList.push(_key);
                }
            });
            return _react2.default.createElement(
                'div',
                { className: 'edit-sale-keys' },
                _react2.default.createElement(
                    _Tabs2.default,
                    null,
                    _react2.default.createElement(
                        _Tabs.TabPane,
                        { title: '\u5DF2\u552E' },
                        _react2.default.createElement(KeysRemove, _extends({}, this.props, { keysList: soldList, onSaveKeysUpdate: this.onSaveKeysUpdate.bind(this) }))
                    ),
                    _react2.default.createElement(
                        _Tabs.TabPane,
                        { title: '\u672A\u552E' },
                        _react2.default.createElement(KeysRemove, _extends({}, this.props, { keysList: unsoldList, onSaveKeysUpdate: this.onSaveKeysUpdate.bind(this) }))
                    ),
                    _react2.default.createElement(
                        _Tabs.TabPane,
                        { title: '\u6DFB\u52A0\u65B0KEY' },
                        _react2.default.createElement(
                            'div',
                            { className: 'keys-new' },
                            _react2.default.createElement(
                                'div',
                                { className: 'input-group' },
                                _react2.default.createElement(
                                    'label',
                                    { className: 'label' },
                                    '\u6FC0\u6D3B\u7801'
                                ),
                                _react2.default.createElement('textarea', { ref: 'keys', placeholder: '\u6BCF\u4E2Akey\u5360\u4E00\u884C', id: '', rows: '10' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'btn-group func-clearfix' },
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:;', onClick: this.onSaveAddKeyClick.bind(this), className: 'btn btn-save' },
                                    '\u4FDD\u5B58key'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return EditSaleKeys;
}(_react.Component);

exports.default = EditSaleKeys;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSelect = __webpack_require__(48);

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(6);

var _lodash2 = _interopRequireDefault(_lodash);

var _Navs = __webpack_require__(68);

var _Navs2 = _interopRequireDefault(_Navs);

var _SalesBill = __webpack_require__(166);

var _SalesBill2 = _interopRequireDefault(_SalesBill);

var _SalesOnSale = __webpack_require__(168);

var _SalesOnSale2 = _interopRequireDefault(_SalesOnSale);

var _SalesProduct = __webpack_require__(169);

var _SalesProduct2 = _interopRequireDefault(_SalesProduct);

var _SalesHistory = __webpack_require__(167);

var _SalesHistory2 = _interopRequireDefault(_SalesHistory);

var _SalesWithdraw = __webpack_require__(170);

var _SalesWithdraw2 = _interopRequireDefault(_SalesWithdraw);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Sales
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 销售游戏
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Sales = function (_Component) {
    _inherits(Sales, _Component);

    function Sales() {
        _classCallCheck(this, Sales);

        return _possibleConstructorReturn(this, (Sales.__proto__ || Object.getPrototypeOf(Sales)).apply(this, arguments));
    }

    _createClass(Sales, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { className: 'account-sales' },
                _react2.default.createElement(
                    _Navs2.default,
                    null,
                    _react2.default.createElement(
                        _Navs.NavPane,
                        { title: '\u9500\u552E\u4EA7\u54C1' },
                        _react2.default.createElement(_SalesProduct2.default, this.props)
                    ),
                    _react2.default.createElement(
                        _Navs.NavPane,
                        { title: '\u6B63\u5728\u9500\u552E' },
                        _react2.default.createElement(_SalesOnSale2.default, this.props)
                    ),
                    _react2.default.createElement(
                        _Navs.NavPane,
                        { title: '\u9500\u552E\u5386\u53F2\u8BB0\u5F55' },
                        _react2.default.createElement(_SalesHistory2.default, this.props)
                    ),
                    _react2.default.createElement(
                        _Navs.NavPane,
                        { title: '\u4F59\u989D\u53D8\u52A8\u8BB0\u5F55' },
                        _react2.default.createElement(_SalesBill2.default, this.props)
                    ),
                    _react2.default.createElement(
                        _Navs.NavPane,
                        { title: '\u63D0\u73B0' },
                        _react2.default.createElement(_SalesWithdraw2.default, this.props)
                    )
                )
            );
        }
    }]);

    return Sales;
}(_react.Component);

exports.default = Sales;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(6);

var _lodash2 = _interopRequireDefault(_lodash);

var _Placeholder = __webpack_require__(15);

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _Pagination = __webpack_require__(26);

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class SalesBill
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 对账单
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SalesBill = function (_Component) {
    _inherits(SalesBill, _Component);

    function SalesBill(props) {
        _classCallCheck(this, SalesBill);

        var _this = _possibleConstructorReturn(this, (SalesBill.__proto__ || Object.getPrototypeOf(SalesBill)).call(this, props));

        _this.state = {
            loading: true,
            current: 1,
            pageSize: 5
        };
        return _this;
    }

    _createClass(SalesBill, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var saleActions = this.props.saleActions;

            saleActions.loadBalanceHistoryList({
                cb: function cb() {
                    _this2.setState({ loading: false });
                }
            });
        }
    }, {
        key: 'renderBillTable',
        value: function renderBillTable() {
            var _this3 = this;

            var _state = this.state,
                loading = _state.loading,
                pageSize = _state.pageSize,
                current = _state.current;
            var balanceHistoryList = this.props.balanceHistoryList;

            if (loading) return _react2.default.createElement(_Placeholder2.default, { type: 'content' });

            var renderItem = function renderItem(item, index) {
                return _react2.default.createElement(
                    'tr',
                    { key: index },
                    _react2.default.createElement(
                        'td',
                        null,
                        item.b_id
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        '\uFFE5',
                        item.amount
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        item.comment
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        item.act_time
                    )
                );
            };

            var filterList = balanceHistoryList.slice((current - 1) * pageSize, current * pageSize);

            return _react2.default.createElement(
                'div',
                { className: 'bill-table-container' },
                _react2.default.createElement(
                    'table',
                    { className: 'bill-table' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u8BA2\u5355\u53F7'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u91D1\u989D'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u4EA4\u6613\u7C7B\u578B'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u4EA4\u6613\u65F6\u95F4'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        _lodash2.default.map(filterList, renderItem)
                    )
                ),
                _react2.default.createElement(_Pagination2.default, { pageSize: pageSize, total: balanceHistoryList.length, onChange: function onChange(page) {
                        return _this3.setState({ current: page });
                    } })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var pageSize = this.state.pageSize;
            var balanceHistoryList = this.props.balanceHistoryList;


            return _react2.default.createElement(
                'div',
                { className: 'sales-bill' },
                _react2.default.createElement(
                    'h2',
                    { className: 'content-title' },
                    '\u4F59\u989D\u53D8\u52A8\u8BB0\u5F55'
                ),
                this.renderBillTable()
            );
        }
    }]);

    return SalesBill;
}(_react.Component);

exports.default = SalesBill;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(6);

var _lodash2 = _interopRequireDefault(_lodash);

var _Pagination = __webpack_require__(26);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _Placeholder = __webpack_require__(15);

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _Modal = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class SalesHistory
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 销售历史记录
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SaleDetail = function (_Component) {
    _inherits(SaleDetail, _Component);

    function SaleDetail(props) {
        _classCallCheck(this, SaleDetail);

        var _this = _possibleConstructorReturn(this, (SaleDetail.__proto__ || Object.getPrototypeOf(SaleDetail)).call(this, props));

        _this.state = {
            loading: true,
            keys: [],
            pageSize: 5,
            current: 1
        };
        return _this;
    }

    _createClass(SaleDetail, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var _props = this.props,
                item = _props.item,
                saleActions = _props.saleActions;

            saleActions.loadSaleHistoryDetail({
                id: item.s_id,
                cb: function cb(data) {
                    _this2.setState({
                        loading: false,
                        keys: data
                    });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                keys = _state.keys,
                loading = _state.loading,
                pageSize = _state.pageSize,
                current = _state.current;

            if (loading) return _react2.default.createElement(_Placeholder2.default, { type: 'content' });

            var filterKeys = keys.slice((current - 1) * pageSize, current * pageSize);
            var renderKeyItem = function renderKeyItem(item, index) {
                return _react2.default.createElement(
                    'tr',
                    { key: index },
                    _react2.default.createElement(
                        'td',
                        null,
                        item.key
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        item.sale_price
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        item.order_sn
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        item.add_time
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        item.username
                    )
                );
            };

            return _react2.default.createElement(
                'div',
                { className: 'sale-history-detail' },
                _react2.default.createElement(
                    'table',
                    { className: 'detail-table' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                'Key'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u552E\u4EF7'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u8BA2\u5355\u53F7'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u8BA2\u5355\u65F6\u95F4'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u8D2D\u4E70\u7528\u6237'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        _lodash2.default.map(filterKeys, renderKeyItem)
                    )
                ),
                _react2.default.createElement(_Pagination2.default, { pageSize: pageSize, total: keys.length, onChange: function onChange(page) {
                        return _this3.setState({ current: page });
                    } })
            );
        }
    }]);

    return SaleDetail;
}(_react.Component);

var SalesHistory = function (_Component2) {
    _inherits(SalesHistory, _Component2);

    function SalesHistory(props) {
        _classCallCheck(this, SalesHistory);

        var _this4 = _possibleConstructorReturn(this, (SalesHistory.__proto__ || Object.getPrototypeOf(SalesHistory)).call(this, props));

        _this4.state = {
            loading: true,
            pageSize: 5,
            current: 1
        };
        return _this4;
    }

    _createClass(SalesHistory, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this5 = this;

            var saleActions = this.props.saleActions;

            saleActions.loadSaleHistoryList({
                cb: function cb() {
                    _this5.setState({ loading: false });
                }
            });
        }
    }, {
        key: 'onShowDetailClick',
        value: function onShowDetailClick(item) {
            _Modal.modal.show({
                title: item.name_zh,
                content: _react2.default.createElement(SaleDetail, _extends({}, this.props, { item: item }))
            });
        }
    }, {
        key: 'renderSaleHistoryList',
        value: function renderSaleHistoryList() {
            var _this6 = this;

            var saleHistoryList = this.props.saleHistoryList;
            var _state2 = this.state,
                current = _state2.current,
                pageSize = _state2.pageSize;

            if (this.state.loading) return _react2.default.createElement(_Placeholder2.default, { type: 'content' });

            var filterList = saleHistoryList.slice((current - 1) * pageSize, current * pageSize);

            var renderHistoryItem = function renderHistoryItem(item, index) {
                return _react2.default.createElement(
                    'tr',
                    { key: index },
                    _react2.default.createElement(
                        'td',
                        null,
                        item.name_zh
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        item.price
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        item.s_platform
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        item.s_edition
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        item.is_sale
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: 'javascript:;', className: 'btn', onClick: _this6.onShowDetailClick.bind(_this6, item) },
                            '\u67E5\u770B\u8BE6\u60C5'
                        )
                    )
                );
            };

            return _react2.default.createElement(
                'div',
                { className: 'sale-history-list' },
                _react2.default.createElement(
                    'table',
                    { className: 'history-table' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u6E38\u620F'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u552E\u4EF7'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5E73\u53F0'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u7248\u672C'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u72B6\u6001'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u64CD\u4F5C'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        _lodash2.default.map(filterList, renderHistoryItem)
                    )
                ),
                _react2.default.createElement(_Pagination2.default, { pageSize: pageSize, total: saleHistoryList.length, onChange: function onChange(page) {
                        return _this6.setState({ current: page });
                    } })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'sales-history' },
                _react2.default.createElement(
                    'h2',
                    { className: 'content-title' },
                    '\u9500\u552E\u5386\u53F2\u8BB0\u5F55'
                ),
                this.renderSaleHistoryList()
            );
        }
    }]);

    return SalesHistory;
}(_react.Component);

exports.default = SalesHistory;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(6);

var _lodash2 = _interopRequireDefault(_lodash);

var _api = __webpack_require__(10);

var _Placeholder = __webpack_require__(15);

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _Pagination = __webpack_require__(26);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _Modal = __webpack_require__(49);

var _Modal2 = _interopRequireDefault(_Modal);

var _Tabs = __webpack_require__(50);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _EditSaleKeys = __webpack_require__(164);

var _EditSaleKeys2 = _interopRequireDefault(_EditSaleKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class SalesOnSale
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 正在销售
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// 上架状态修改
var EditSaleStatus = function (_Component) {
    _inherits(EditSaleStatus, _Component);

    function EditSaleStatus(props) {
        _classCallCheck(this, EditSaleStatus);

        var _this = _possibleConstructorReturn(this, (EditSaleStatus.__proto__ || Object.getPrototypeOf(EditSaleStatus)).call(this, props));

        var onSale = props.game.is_sale === '正在销售' ? 1 : 0;
        _this.state = {
            onSale: onSale
        };
        return _this;
    }

    _createClass(EditSaleStatus, [{
        key: 'onOnSaleChange',
        value: function onOnSaleChange(value) {
            this.setState({ onSale: value });
        }
    }, {
        key: 'onSaveClick',
        value: function onSaveClick() {
            var onSale = this.state.onSale;
            var _props = this.props,
                game = _props.game,
                saleActions = _props.saleActions;

            saleActions.updateProductSaleStatue({
                onSale: onSale,
                id: game.s_id
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var onSale = this.state.onSale;

            return _react2.default.createElement(
                'div',
                { className: 'edit-sale-status' },
                _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                        'p',
                        { className: 'status-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'label' },
                            '\u662F\u5426\u4E0A\u67B6'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'radio-group' },
                            _react2.default.createElement('input', { type: 'radio', className: 'radio', value: '\u662F', id: 'saleStatusYes', checked: onSale === 1, onChange: this.onOnSaleChange.bind(this, 1) }),
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'saleStatusYes' },
                                '\u662F'
                            )
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'radio-group' },
                            _react2.default.createElement('input', { type: 'radio', className: 'radio', value: '\u5426', id: 'saleStatusNo', checked: onSale === 0, onChange: this.onOnSaleChange.bind(this, 0) }),
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'saleStatusNo' },
                                '\u5426'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group func-clearfix' },
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:;', className: 'btn btn-save', onClick: this.onSaveClick.bind(this) },
                        '\u4FDD\u5B58\u4FEE\u6539'
                    )
                )
            );
        }
    }]);

    return EditSaleStatus;
}(_react.Component);

// 零售价修改


var EditSalePrice = function (_Component2) {
    _inherits(EditSalePrice, _Component2);

    function EditSalePrice(props) {
        _classCallCheck(this, EditSalePrice);

        var _this2 = _possibleConstructorReturn(this, (EditSalePrice.__proto__ || Object.getPrototypeOf(EditSalePrice)).call(this, props));

        _this2.state = {
            price: props.game.price
        };
        return _this2;
    }

    _createClass(EditSalePrice, [{
        key: 'onPriceChange',
        value: function onPriceChange(e) {
            var numReg = /^\d+(\.\d{0,2})?$/;
            var value = e.target.value.trim();
            if (value !== '' && !numReg.test(value)) return;
            this.setState({ price: value });
        }
    }, {
        key: 'onSaveClick',
        value: function onSaveClick() {
            var price = this.state.price;
            var _props2 = this.props,
                game = _props2.game,
                saleActions = _props2.saleActions;

            saleActions.updateProductSalePrice({
                id: game.s_id,
                price: price
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var price = this.state.price;
            var game = this.props.game;

            return _react2.default.createElement(
                'div',
                { className: 'edit-sale-price' },
                _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                        'p',
                        { className: 'price-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'label' },
                            '\u96F6\u552E\u4EF7\u683C'
                        ),
                        _react2.default.createElement('input', { className: 'input-text', ref: 'price', type: 'text', value: price, onChange: this.onPriceChange.bind(this) })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group func-clearfix' },
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:;', className: 'btn btn-save', onClick: this.onSaveClick.bind(this) },
                        '\u4FDD\u5B58\u4FEE\u6539'
                    )
                )
            );
        }
    }]);

    return EditSalePrice;
}(_react.Component);

// 销售列表


var SalesOnSale = function (_Component3) {
    _inherits(SalesOnSale, _Component3);

    function SalesOnSale(props) {
        _classCallCheck(this, SalesOnSale);

        var _this3 = _possibleConstructorReturn(this, (SalesOnSale.__proto__ || Object.getPrototypeOf(SalesOnSale)).call(this, props));

        _this3.state = {
            loading: true,
            current: 1,
            pageSize: 5,
            searchQuery: ''
        };
        return _this3;
    }

    _createClass(SalesOnSale, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this4 = this;

            var saleActions = this.props.saleActions;

            saleActions.loadSaleProductList({
                cb: function cb() {
                    return _this4.setState({ loading: false });
                }
            });
        }
    }, {
        key: 'onSearchChange',
        value: function onSearchChange(e) {
            var _this5 = this;

            var value = e.target.value;
            if (this.searchTimeout) {
                clearTimeout(this.searchTimeout);
            }
            this.searchTimeout = setTimeout(function () {
                _this5.setState({
                    searchQuery: value,
                    current: 1
                });
            }, 500);
        }
    }, {
        key: 'onEditSaleStatusClick',
        value: function onEditSaleStatusClick(game) {
            _Modal.modal.show({
                title: game.name_zh,
                content: _react2.default.createElement(EditSaleStatus, _extends({}, this.props, { game: game }))
            });
        }
    }, {
        key: 'onEditSalePriceClick',
        value: function onEditSalePriceClick(game) {
            _Modal.modal.show({
                title: game.name_zh,
                content: _react2.default.createElement(EditSalePrice, _extends({}, this.props, { game: game }))
            });
        }
    }, {
        key: 'onEditKeysClick',
        value: function onEditKeysClick(game) {
            _Modal.modal.show({
                title: game.name_zh,
                content: _react2.default.createElement(_EditSaleKeys2.default, _extends({}, this.props, { game: game }))
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var _state = this.state,
                loading = _state.loading,
                current = _state.current,
                pageSize = _state.pageSize,
                searchQuery = _state.searchQuery;
            var saleProductList = this.props.saleProductList;

            var content = null;
            if (this.state.loading) {
                content = _react2.default.createElement(_Placeholder2.default, null);
            } else {
                // 过滤搜索字段
                var searchList = _lodash2.default.filter(saleProductList, function (game) {
                    return game.name_zh.indexOf(searchQuery) > -1;
                });
                // 获取当前页游戏
                var filterList = searchList.slice((current - 1) * pageSize, current * pageSize);
                var renderGameItem = function renderGameItem(game, index) {
                    var gameImgStyle = {
                        backgroundImage: 'url(' + _api.API_PRO_PREFIX + game.thumbnail + ')'
                    };
                    return _react2.default.createElement(
                        'a',
                        { key: index, href: 'javascript:;', className: 'game-onsale' },
                        _react2.default.createElement('div', { className: 'game-img', style: gameImgStyle }),
                        _react2.default.createElement(
                            'div',
                            { className: 'game-content' },
                            _react2.default.createElement(
                                'h3',
                                { className: 'title' },
                                game.name_zh
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'count' },
                                game.sold,
                                '\u4EF6\u5DF2\u552E\u51FA\uFF0C\u5171\u6709',
                                game.total,
                                '\u4EF6',
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    _react2.default.createElement('i', { onClick: _this6.onEditKeysClick.bind(_this6, game), title: '\u7F16\u8F91key', className: 'fa fa-edit' })
                                )
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'price' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'self' },
                                    '\u96F6\u552E\u4EF7:\uFFE5',
                                    game.price,
                                    _react2.default.createElement('i', { onClick: _this6.onEditSalePriceClick.bind(_this6, game), title: '\u4FEE\u6539\u4EF7\u683C', className: 'fa fa-edit' })
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'market' },
                                    '\u5546\u57CE\u6700\u4F4E\u4EF7:\uFFE5',
                                    game.min_price
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'game-edit' },
                            _react2.default.createElement(
                                'span',
                                null,
                                game.is_sale
                            ),
                            _react2.default.createElement(
                                'span',
                                { onClick: _this6.onEditSaleStatusClick.bind(_this6, game) },
                                _react2.default.createElement('i', { title: '\u4FEE\u6539\u4E0A\u67B6\u72B6\u6001', className: 'fa fa-edit' })
                            )
                        )
                    );
                };
                content = _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'onsale-header' },
                        _react2.default.createElement(
                            'div',
                            { className: 'toolbar' },
                            _react2.default.createElement(
                                'div',
                                { className: 'search' },
                                _react2.default.createElement('input', { type: 'text', placeholder: '\u8F93\u5165\u6E38\u620F\u540D', onChange: this.onSearchChange.bind(this) }),
                                _react2.default.createElement(
                                    'a',
                                    { className: 'icon', href: 'javascript:;' },
                                    _react2.default.createElement('i', { className: 'fa fa-search' }),
                                    '\xA0'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'onsale-main func-clearfix' },
                        _lodash2.default.map(filterList, renderGameItem)
                    ),
                    _react2.default.createElement(_Pagination2.default, { pageSize: pageSize, total: searchList.length, onChange: function onChange(current) {
                            return _this6.setState({ current: current });
                        } })
                );
            }

            return _react2.default.createElement(
                'div',
                { className: 'sales-onsale' },
                _react2.default.createElement(
                    'h2',
                    { className: 'content-title' },
                    '\u6B63\u5728\u9500\u552E'
                ),
                content
            );
        }
    }]);

    return SalesOnSale;
}(_react.Component);

exports.default = SalesOnSale;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSelect = __webpack_require__(48);

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(6);

var _lodash2 = _interopRequireDefault(_lodash);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class SalesProduct
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 销售产品
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var INITIAL_DATA = {
    game: null,
    pType: 1,
    isSale: 0,
    edition: '',
    platform: '',
    price: '',
    mark: '',
    key: '',
    type: 1
};

var SalesProduct = function (_Component) {
    _inherits(SalesProduct, _Component);

    function SalesProduct(props) {
        _classCallCheck(this, SalesProduct);

        var _this = _possibleConstructorReturn(this, (SalesProduct.__proto__ || Object.getPrototypeOf(SalesProduct)).call(this, props));

        _this.state = {
            editions: [],
            platforms: [],
            data: _lodash2.default.clone(INITIAL_DATA)
        };
        return _this;
    }

    _createClass(SalesProduct, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var saleActions = this.props.saleActions;

            saleActions.loadSaleProductFreeTimes({
                cb: function cb(data) {
                    _this2.refs.freetimes.innerText = '\uFF08' + data + '\uFF09';
                }
            });
        }
    }, {
        key: 'loadGames',
        value: function loadGames(keyword, callback) {
            if (keyword.trim() === '') return callback(null, { options: [] });
            if (this.loadGamesTimeout) {
                clearTimeout(this.loadGamesTimeout);
            }
            this.loadGamesTimeout = setTimeout(this.loadGamesOptions.bind(this, keyword, callback), 500);
        }
    }, {
        key: 'loadGamesOptions',
        value: function loadGamesOptions(keyword, callback) {
            _jquery2.default.get(_api.API_PREFIX + '/user/sale/search', {
                keyword: keyword
            }).done(function (res) {
                if (res.Code === 40000) {
                    var options = _lodash2.default.map(res.data, function (_game) {
                        return _lodash2.default.assign({}, _game, {
                            value: _game.name_zh,
                            label: _game.name_zh
                        });
                    });
                    callback(null, { options: options });
                } else {
                    callback(null, { options: [] });
                }
            }).fail(function (err) {
                callback(null, { options: [] });
            });
        }
    }, {
        key: 'onDataChange',
        value: function onDataChange(key, value) {
            // 价格输入只允许是数字
            if (key === 'price') {
                var numReg = /^\d+(\.\d{0,2})?$/;
                if (value.trim() !== '' && !numReg.test(value)) return;
            }

            var data = this.state.data;

            var newData = _lodash2.default.clone(data);
            newData[key] = value;
            this.setState({ data: newData });
            if (key === 'game') {
                var edition = value.edition;
                var platform = value.platform;
                var editions = _lodash2.default.map(edition, function (_e, _i) {
                    return { value: _i, label: _e };
                });
                var platforms = _lodash2.default.map(platform, function (_p, _i) {
                    return { value: _i, label: _p };
                });
                this.setState({ editions: editions, platforms: platforms });
            }
        }
    }, {
        key: 'onSaveClick',
        value: function onSaveClick() {
            var _this3 = this;

            var data = this.state.data;
            var saleActions = this.props.saleActions;

            if (!this.canSubmit()) return;
            var keys = data.key.split(" ").join('\n');

            var formData = new FormData();
            formData.append("p_id", data.game.p_id);
            formData.append("p_type", data.pType);
            formData.append("is_sale", data.isSale);
            formData.append("price", data.price);
            formData.append("mark", data.mark);
            formData.append("s_edition", data.edition);
            formData.append("s_platform", data.platform);
            formData.append("type", data.type);
            if (data.type === 1) {
                formData.append("key", keys);
            } else {
                var imgs = this.refs["key-images"].files;
                console.log(imgs);
                formData.append("key", imgs);
            }

            saleActions.saveSaleProduct({
                data: formData,
                cb: function cb() {
                    _this3.setState({ data: _lodash2.default.clone(INITIAL_DATA) });
                }
            });

            // saleActions.saveSaleProduct({
            //     data: {
            //         p_id: data.game.p_id,
            //         p_type: data.pType,
            //         is_sale: data.isSale,
            //         price: data.price,
            //         mark: data.mark,
            //         key: keys,
            //         s_edition: data.edition,
            //         s_platform: data.platform,
            //         type: data.type
            //     },
            //     cb: () => {
            //         this.setState({ data: _.clone(INITIAL_DATA) });
            //     }
            // });
        }
    }, {
        key: 'canSubmit',
        value: function canSubmit() {
            var data = this.state.data;

            if (data.game == null || data.price.trim() === '' || data.type === 1 && data.key.trim() === '' || data.edition.trim() === '' || data.platform.trim() === '') {
                return false;
            }
            return true;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this,
                _React$createElement,
                _React$createElement2;

            var _state = this.state,
                data = _state.data,
                editions = _state.editions,
                platforms = _state.platforms;

            var saveBtnClass = (0, _classnames2.default)('btn btn-save', {
                'disabled': !this.canSubmit()
            });
            // const keys = data.key.trim() === '' ? [] : data.key.split('\n');
            return _react2.default.createElement(
                'div',
                { className: 'sales-product' },
                _react2.default.createElement(
                    'h2',
                    { className: 'content-title' },
                    '\u9500\u552E\u4EA7\u54C1',
                    _react2.default.createElement(
                        'span',
                        { className: 'info' },
                        _react2.default.createElement(
                            'a',
                            { ref: 'freetimes', href: 'javascript:;' },
                            '\uFF08\u6B63\u5728\u52A0\u8F7D\u514D\u8D39\u9500\u552E\u6B21\u6570...\uFF09'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'sales-group' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label' },
                        '\u4EA7\u54C1\u540D\u79F0'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'react-select-container' },
                        _react2.default.createElement(_reactSelect2.default.Async, { value: data.game, searchPromptText: '\u8F93\u5165\u6E38\u620F\u540D', noResultsText: '\u6682\u65E0\u7ED3\u679C', loadingPlaceholder: '\u6B63\u5728\u641C\u7D22...',
                            placeholder: '', loadOptions: this.loadGames.bind(this), onChange: this.onDataChange.bind(this, 'game') })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'sales-group' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label' },
                        '\u5E73\u53F0'
                    ),
                    _react2.default.createElement(
                        'select',
                        { className: 'select-group', value: data.platform, onChange: function onChange(e) {
                                return _this4.onDataChange('platform', e.target.value);
                            } },
                        _react2.default.createElement(
                            'option',
                            { value: '', disabled: true },
                            '--\u9009\u62E9\u5E73\u53F0--'
                        ),
                        _lodash2.default.map(platforms, function (_p, _i) {
                            return _react2.default.createElement(
                                'option',
                                { key: _i, value: _p.value },
                                _p.label
                            );
                        })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'sales-group' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label' },
                        '\u7248\u672C'
                    ),
                    _react2.default.createElement(
                        'select',
                        { className: 'select-group', value: data.edition, onChange: function onChange(e) {
                                return _this4.onDataChange('edition', e.target.value);
                            } },
                        _react2.default.createElement(
                            'option',
                            { value: '', disabled: true },
                            '--\u9009\u62E9\u7248\u672C--'
                        ),
                        _lodash2.default.map(editions, function (_e, _i) {
                            return _react2.default.createElement(
                                'option',
                                { key: _i, value: _e.value },
                                _e.label
                            );
                        })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'sales-group product-ptype-group' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label' },
                        '\u5546\u54C1\u7C7B\u578B'
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'radio-group' },
                        _react2.default.createElement('input', { className: 'radio', name: 'productPtype', type: 'radio', value: '\u79D8\u94A5', id: 'radioKey', checked: data.pType === 1, onChange: this.onDataChange.bind(this, 'pType', 1) }),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'radioKey' },
                            '\u79D8\u94A5'
                        )
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'radio-group' },
                        _react2.default.createElement('input', { className: 'radio', name: 'productPtype', type: 'radio', value: '\u793C\u7269', id: 'radioGift', checked: data.pType === 2, onChange: this.onDataChange.bind(this, 'pType', 2) }),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'radioGift' },
                            '\u793C\u7269'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'sales-group product-sale-group' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label' },
                        '\u662F\u5426\u4E0A\u67B6'
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'radio-group' },
                        _react2.default.createElement('input', { className: 'radio', name: 'productIsSale', type: 'radio', value: '\u662F', id: 'radioIsSale', checked: data.isSale === 0, onChange: this.onDataChange.bind(this, 'isSale', 0) }),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'radioIsSale' },
                            '\u5426'
                        )
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'radio-group' },
                        _react2.default.createElement('input', { className: 'radio', name: 'productIsSale', type: 'radio', value: '\u5426', id: 'radioNotSale', checked: data.isSale === 1, onChange: this.onDataChange.bind(this, 'isSale', 1) }),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'radioNotSale' },
                            '\u662F'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'sales-group' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label', htmlFor: 'price' },
                        '\u96F6\u552E\u4EF7\u683C'
                    ),
                    _react2.default.createElement('input', { className: 'input-text', type: 'text', id: 'price', value: data.price, onChange: function onChange(e) {
                            return _this4.onDataChange('price', e.target.value);
                        } })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'sales-group product-type-group' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label' },
                        '\u6FC0\u6D3B\u7801\u7C7B\u578B'
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'radio-group' },
                        _react2.default.createElement('input', { className: 'radio', name: 'productType', type: 'radio', value: '\u662F', id: 'radioTypeText', checked: data.type === 1, onChange: this.onDataChange.bind(this, 'type', 1) }),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'radioTypeText' },
                            '\u6587\u672C'
                        )
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'radio-group' },
                        _react2.default.createElement('input', { className: 'radio', name: 'productType', type: 'radio', value: '\u5426', id: 'radioTypeImg', checked: data.type === 2, onChange: this.onDataChange.bind(this, 'type', 2) }),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'radioTypeImg' },
                            '\u56FE\u7247'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'sales-group product-keys-group' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label', htmlFor: 'cdkey' },
                        '\u6FC0\u6D3B\u7801'
                    ),
                    data.type === 1 ? _react2.default.createElement('textarea', (_React$createElement = { placeholder: '\u6BCF\u4E2Akey\u5360\u4E00\u884C', rows: '3' }, _defineProperty(_React$createElement, 'rows', '10'), _defineProperty(_React$createElement, 'id', 'cdkey'), _defineProperty(_React$createElement, 'value', data.key), _defineProperty(_React$createElement, 'onChange', function onChange(e) {
                        return _this4.onDataChange('key', e.target.value);
                    }), _React$createElement)) : _react2.default.createElement('input', { ref: 'key-images', type: 'file', accept: 'image/*', multiple: true })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'sales-group textarea-group' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label' },
                        '\u5907\u6CE8\uFF08\u53EF\u4E0D\u586B\uFF09'
                    ),
                    _react2.default.createElement('textarea', (_React$createElement2 = { rows: '3' }, _defineProperty(_React$createElement2, 'rows', '10'), _defineProperty(_React$createElement2, 'value', data.mark), _defineProperty(_React$createElement2, 'onChange', function onChange(e) {
                        return _this4.onDataChange('mark', e.target.value);
                    }), _React$createElement2))
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group func-clearfix' },
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:;', className: saveBtnClass, onClick: this.onSaveClick.bind(this) },
                        _react2.default.createElement('i', { className: 'fa fa-check' }),
                        '\u66F4\u65B0\u4EA7\u54C1'
                    )
                )
            );
        }
    }]);

    return SalesProduct;
}(_react.Component);

exports.default = SalesProduct;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(6);

var _lodash2 = _interopRequireDefault(_lodash);

var _Placeholder = __webpack_require__(15);

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _RegTest = __webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class SalesWithdraw
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 提现部分
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SalesWithdraw = function (_Component) {
    _inherits(SalesWithdraw, _Component);

    function SalesWithdraw(props) {
        _classCallCheck(this, SalesWithdraw);

        var _this = _possibleConstructorReturn(this, (SalesWithdraw.__proto__ || Object.getPrototypeOf(SalesWithdraw)).call(this, props));

        _this.state = {
            showDetail: false,
            loading: true,
            data: {
                type: 'bank',
                account: '',
                amount: 0,
                remark: ''
            }
        };
        return _this;
    }

    _createClass(SalesWithdraw, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var _props = this.props,
                saleActions = _props.saleActions,
                userActions = _props.userActions;

            userActions.loadUserBalance();
            saleActions.loadWithdrawHistoryList({
                cb: function cb() {
                    _this2.setState({ loading: false });
                }
            });
        }
    }, {
        key: 'onDataValueChange',
        value: function onDataValueChange(key, value) {
            var data = this.state.data;

            var newData = _lodash2.default.cloneDeep(data);
            newData[key] = value;
            this.setState({ data: newData });
        }
    }, {
        key: 'onAmountChange',
        value: function onAmountChange(e) {
            var value = e.target.value;
            if (!(0, _RegTest.isPrice)(value)) return;
            this.onDataValueChange("amount", value);
        }
    }, {
        key: 'onSaveWithdrawClick',
        value: function onSaveWithdrawClick() {
            var saleActions = this.props.saleActions;
            var data = this.state.data;


            saleActions.saveWithdraw({
                data: {
                    account: data.account,
                    amount: data.amount,
                    remark: data.remark
                },
                cb: function cb() {
                    saleActions.loadWithdrawHistoryList();
                }
            });
        }

        // 选择银行卡

    }, {
        key: 'renderTypeBank',
        value: function renderTypeBank() {
            var _this3 = this;

            var data = this.state.data;

            return _react2.default.createElement(
                'div',
                { className: 'type-bank' },
                _react2.default.createElement(
                    'div',
                    { className: 'bank' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label' },
                        '\xA0'
                    ),
                    _react2.default.createElement(
                        'select',
                        null,
                        _react2.default.createElement(
                            'option',
                            { value: '' },
                            '\u5DE5\u5546\u94F6\u884C'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '' },
                            '\u62DB\u5546\u94F6\u884C'
                        )
                    ),
                    _react2.default.createElement('input', { type: 'text', value: data.account, onChange: function onChange(e) {
                            return _this3.onDataValueChange("account", e.target.value);
                        }, placeholder: '\u8BF7\u8F93\u5165\u94F6\u884C\u5361\u53F7' }),
                    _react2.default.createElement('input', { type: 'text', value: data.remark, onChange: function onChange(e) {
                            return _this3.onDataValueChange("remark", e.target.value);
                        }, placeholder: '\u6536\u6B3E\u4EBA\u59D3\u540D' }),
                    _react2.default.createElement(
                        'p',
                        { className: 'warning' },
                        '\u63D0\u73B0\u8BF7\u4FDD\u5B58\u771F\u5B9E\u59D3\u540D\uFF0C\u5426\u5219\u5C06\u65E0\u6CD5\u8F6C\u8D26\u3002'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group' },
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:;', className: 'btn', onClick: this.onSaveWithdrawClick.bind(this) },
                        '\u63D0\u4EA4\u5BA1\u6838'
                    )
                )
            );
        }

        // 选择支付宝

    }, {
        key: 'renderTypeAlipay',
        value: function renderTypeAlipay() {
            var _this4 = this;

            var data = this.state.data;

            return _react2.default.createElement(
                'div',
                { className: 'type-alipay' },
                _react2.default.createElement(
                    'div',
                    { className: 'alipay' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label' },
                        '\xA0'
                    ),
                    _react2.default.createElement('input', { type: 'text', value: data.account, onChange: function onChange(e) {
                            return _this4.onDataValueChange("account", e.target.value);
                        }, placeholder: '\u8BF7\u8F93\u5165\u652F\u4ED8\u5B9D\u8D26\u6237' }),
                    _react2.default.createElement('input', { type: 'text', value: data.remark, onChange: function onChange(e) {
                            return _this4.onDataValueChange("remark", e.target.value);
                        }, placeholder: '\u6536\u6B3E\u4EBA\u59D3\u540D' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group' },
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:;', className: 'btn', onClick: this.onSaveWithdrawClick.bind(this) },
                        '\u63D0\u4EA4\u5BA1\u6838'
                    )
                )
            );
        }
    }, {
        key: 'renderWithDrawDetail',
        value: function renderWithDrawDetail() {
            var _this5 = this;

            var _state = this.state,
                showDetail = _state.showDetail,
                data = _state.data;

            var type = data.type;

            if (!showDetail) return null;

            var getTypeDetail = function getTypeDetail() {
                switch (type) {
                    case 'bank':
                        return _this5.renderTypeBank();
                    case 'alipay':
                        return _this5.renderTypeAlipay();
                    default:
                        return null;
                }
            };

            return _react2.default.createElement(
                'div',
                { className: 'withdraw-detial' },
                _react2.default.createElement(
                    'div',
                    { className: 'input-group' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label', htmlFor: 'withdrawPrice' },
                        '\u63D0\u73B0\u91D1\u989D'
                    ),
                    _react2.default.createElement('input', { type: 'text', value: data.amount, onChange: this.onAmountChange.bind(this), id: 'producwithdrawPricetName' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'type-group' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label' },
                        '\u6536\u6B3E\u8D26\u6237'
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'radio-group' },
                        _react2.default.createElement('input', { type: 'radio', checked: type === 'bank', id: 'bankcard', onChange: this.onDataValueChange.bind(this, "type", "bank") }),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'bankcard', className: 'radio-label' },
                            '\u94F6\u884C\u5361\uFF08\u63A8\u8350\uFF09'
                        )
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'radio-group' },
                        _react2.default.createElement('input', { type: 'radio', id: 'alipay', checked: type === 'alipay', onChange: this.onDataValueChange.bind(this, "type", "alipay") }),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'alipay', className: 'radio-label' },
                            '\u652F\u4ED8\u5B9D'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'type-detail-group' },
                    getTypeDetail()
                )
            );
        }
    }, {
        key: 'renderWithdrawHistory',
        value: function renderWithdrawHistory() {
            var withdrawHistoryList = this.props.withdrawHistoryList;

            if (this.state.loading) return _react2.default.createElement(_Placeholder2.default, { type: 'content' });

            var renderWithdrawItem = function renderWithdrawItem(item, index) {
                return _react2.default.createElement(
                    'tr',
                    { key: index },
                    _react2.default.createElement(
                        'td',
                        null,
                        item.name,
                        '\uFF0C\u652F\u4ED8\u65B9\u5F0F\uFF0C',
                        item.account,
                        '\uFF0C\uFFE5',
                        item.amount
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        '\uFFE5',
                        item.poundage
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        item.verify
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        item.apply_time
                    )
                );
            };

            return _react2.default.createElement(
                'div',
                { className: 'withdraw-history' },
                _react2.default.createElement(
                    'table',
                    { className: 'withdraw-history' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u6536\u6B3E\u4FE1\u606F'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u624B\u7EED\u8D39'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u72B6\u6001'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u7533\u8BF7\u65F6\u95F4'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        _lodash2.default.map(withdrawHistoryList, renderWithdrawItem)
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var userBalance = this.props.userBalance;

            return _react2.default.createElement(
                'div',
                { className: 'sales-withdraw' },
                _react2.default.createElement(
                    'h2',
                    { className: 'content-title' },
                    '\u63D0\u73B0'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'withdraw-header' },
                    _react2.default.createElement(
                        'div',
                        { className: 'cash-detail func-clearfix' },
                        _react2.default.createElement(
                            'div',
                            { className: 'balance func-clearfix' },
                            _react2.default.createElement(
                                'div',
                                { className: 'balance-detail' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'price-label' },
                                    '\u8D26\u6237\u4F59\u989D\uFF1A'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'price-detail' },
                                    '\uFFE5',
                                    userBalance.balance
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'btn-group' },
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:;', onClick: function onClick(e) {
                                            return _this6.setState({ showDetail: !_this6.state.showDetail });
                                        }, className: 'btn' },
                                    '\u63D0\u73B0'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'income' },
                            _react2.default.createElement(
                                'div',
                                { className: 'income-detail' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'price-label' },
                                    '\u4ECA\u65E5\u6536\u5165\uFF1A'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'price-detail' },
                                    '\uFFE5',
                                    userBalance.income
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'lock' },
                            _react2.default.createElement(
                                'div',
                                { className: 'lock-detail' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'price-label' },
                                    '\u9501\u5B9A\u91D1\u989D\uFF1A'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'price-detail' },
                                    '\uFFE5',
                                    userBalance.locking
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '' },
                                        '\u4E3A\u4EC0\u4E48\u9501\u5B9A\uFF1F'
                                    )
                                )
                            )
                        )
                    )
                ),
                this.renderWithDrawDetail(),
                _react2.default.createElement(
                    'h2',
                    { className: 'content-title' },
                    '\u63D0\u73B0\u8BB0\u5F55'
                ),
                this.renderWithdrawHistory()
            );
        }
    }]);

    return SalesWithdraw;
}(_react.Component);

exports.default = SalesWithdraw;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Navs = __webpack_require__(68);

var _Navs2 = _interopRequireDefault(_Navs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Services
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 客服中心
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// 创建客服单
var ServicesCreate = function (_Component) {
    _inherits(ServicesCreate, _Component);

    function ServicesCreate() {
        _classCallCheck(this, ServicesCreate);

        return _possibleConstructorReturn(this, (ServicesCreate.__proto__ || Object.getPrototypeOf(ServicesCreate)).apply(this, arguments));
    }

    _createClass(ServicesCreate, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'services-create' },
                _react2.default.createElement(
                    'h2',
                    { className: 'content-title' },
                    '\u521B\u5EFA\u5BA2\u670D\u5355'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'services-group' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label', htmlFor: 'contactEmail' },
                        '\u8054\u7CFB\u90AE\u7BB1'
                    ),
                    _react2.default.createElement('input', { className: 'input-text', type: 'text', id: 'contactEmail', value: 'Young' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'services-group' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label', htmlFor: 'productID' },
                        '\u8BA2\u5355\u53F7'
                    ),
                    _react2.default.createElement('input', { className: 'input-text', type: 'text', id: 'productID', value: 'Young' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'services-group' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label', htmlFor: 'cdkey' },
                        'CDKEY'
                    ),
                    _react2.default.createElement('input', { className: 'input-text', type: 'text', id: 'cdkey', value: 'Young' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'services-group' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label', htmlFor: 'title' },
                        '\u6807\u9898'
                    ),
                    _react2.default.createElement('input', { className: 'input-text', type: 'text', id: 'title', value: 'Young' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'services-group textarea-group' },
                    _react2.default.createElement(
                        'label',
                        { className: 'label', htmlFor: 'desc' },
                        '\u95EE\u9898\u63CF\u8FF0'
                    ),
                    _react2.default.createElement('textarea', { rows: '3', id: 'desc' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group func-clearfix' },
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:;', className: 'btn btn-save' },
                        _react2.default.createElement('i', { className: 'fa fa-check' }),
                        '\u53D1\u9001'
                    )
                )
            );
        }
    }]);

    return ServicesCreate;
}(_react.Component);

// 处理中心


var ServicesDeals = function (_Component2) {
    _inherits(ServicesDeals, _Component2);

    function ServicesDeals() {
        _classCallCheck(this, ServicesDeals);

        return _possibleConstructorReturn(this, (ServicesDeals.__proto__ || Object.getPrototypeOf(ServicesDeals)).apply(this, arguments));
    }

    _createClass(ServicesDeals, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'services-deals' },
                _react2.default.createElement(
                    'h2',
                    { className: 'content-title' },
                    '\u5904\u7406\u4E2D\u5FC3'
                ),
                _react2.default.createElement(
                    'table',
                    { className: 'deals-table' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u8BA2\u5355\u53F7'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'ID'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'CDKEY'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u6807\u9898'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u72B6\u6001'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                '201723293203049'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                'RFD-2235235325'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                'XXXXXXXXXXXXXXXXXX'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                'title title title title'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                '\u5B8C\u6210'
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                '201723293203049'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                'RFD-2235235325'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                'XXXXXXXXXXXXXXXXXX'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                'title title title title'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                '\u5B8C\u6210'
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                '201723293203049'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                'RFD-2235235325'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                'XXXXXXXXXXXXXXXXXX'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                'title title title title'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                '\u5B8C\u6210'
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                '201723293203049'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                'RFD-2235235325'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                'XXXXXXXXXXXXXXXXXX'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                'title title title title'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                '\u5B8C\u6210'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ServicesDeals;
}(_react.Component);

var Services = function (_Component3) {
    _inherits(Services, _Component3);

    function Services() {
        _classCallCheck(this, Services);

        return _possibleConstructorReturn(this, (Services.__proto__ || Object.getPrototypeOf(Services)).apply(this, arguments));
    }

    _createClass(Services, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { className: 'account-services' },
                _react2.default.createElement(
                    _Navs2.default,
                    null,
                    _react2.default.createElement(
                        _Navs.NavPane,
                        { title: '\u521B\u5EFA\u5BA2\u670D\u5355' },
                        _react2.default.createElement(ServicesCreate, null)
                    ),
                    _react2.default.createElement(
                        _Navs.NavPane,
                        { title: '\u5904\u7406\u4E2D\u5FC3' },
                        _react2.default.createElement(ServicesDeals, null)
                    )
                )
            );
        }
    }]);

    return Services;
}(_react.Component);

exports.default = Services;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class CartHead
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 购物车标题
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var CartHead = function (_Component) {
  _inherits(CartHead, _Component);

  function CartHead() {
    _classCallCheck(this, CartHead);

    return _possibleConstructorReturn(this, (CartHead.__proto__ || Object.getPrototypeOf(CartHead)).call(this));
  }

  _createClass(CartHead, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        { className: 'cart-head' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            '\u6211\u7684\u8D2D\u7269\u8F66'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            { className: 'link', to: '/' },
            _react2.default.createElement(
              'button',
              null,
              _react2.default.createElement('i', { className: 'fa fa-chevron-left' }),
              '\xA0\u7EE7\u7EED\u8D2D\u7269'
            )
          )
        )
      );
    }
  }]);

  return CartHead;
}(_react.Component);

exports.default = CartHead;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Item = __webpack_require__(176);

var _Item2 = _interopRequireDefault(_Item);

var _Placeholder = __webpack_require__(15);

var _Placeholder2 = _interopRequireDefault(_Placeholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class CartList
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 订单列表
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var CartList = function (_Component) {
    _inherits(CartList, _Component);

    function CartList(props) {
        _classCallCheck(this, CartList);

        return _possibleConstructorReturn(this, (CartList.__proto__ || Object.getPrototypeOf(CartList)).call(this, props));
        // this.state = {
        //     loading: true
        // };
    }

    _createClass(CartList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            // if (this.state.loading) return <Placeholder type='content'></Placeholder>;

            var cartList = this.props.cartList;

            var isEmpty = cartList.length > 0 ? false : true;

            if (isEmpty) {
                return _react2.default.createElement(
                    'section',
                    { className: 'dock-card dock-empty' },
                    _react2.default.createElement(
                        'p',
                        null,
                        '\u60A8\u7684\u8D2D\u7269\u8F66\u6682\u65F6\u8FD8\u6CA1\u6709\u5546\u54C1 :('
                    ),
                    _react2.default.createElement(
                        'a',
                        null,
                        '\u7EE7\u7EED\u8D2D\u7269\u5427'
                    )
                );
            } else {
                return _react2.default.createElement(
                    'section',
                    { className: 'dock-card' },
                    _react2.default.createElement(
                        'div',
                        { className: 'dock-head' },
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u8D2D\u7269\u8F66\u5217\u8868'
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u4EF7\u683C x \u6570\u91CF'
                        )
                    ),
                    cartList.map(function (x, i) {
                        return _react2.default.createElement(_Item2.default, _extends({}, _this2.props, { item: x, key: i }));
                    })
                );
            }
        }
    }]);

    return CartList;
}(_react.Component);

exports.default = CartList;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(6);

var _lodash2 = _interopRequireDefault(_lodash);

var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _numeral = __webpack_require__(96);

var _numeral2 = _interopRequireDefault(_numeral);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _WeChatCode = __webpack_require__(100);

var _WeChatCode2 = _interopRequireDefault(_WeChatCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Check
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 结账，付款
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author feixihan(1095714266@qq.com), wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Check = function (_Component) {
    _inherits(Check, _Component);

    function Check() {
        _classCallCheck(this, Check);

        return _possibleConstructorReturn(this, (Check.__proto__ || Object.getPrototypeOf(Check)).apply(this, arguments));
    }

    _createClass(Check, [{
        key: 'getTotalPrice',
        value: function getTotalPrice() {
            var cartList = this.props.cartList;

            var total = 0;
            _lodash2.default.each(cartList, function (_item) {
                total += parseFloat(_item.price * _item.number);
            });
            return (0, _numeral2.default)(total).format('0.00');
        }
    }, {
        key: 'onCheckoutClick',
        value: function onCheckoutClick() {
            var _this2 = this;

            var _props = this.props,
                cartList = _props.cartList,
                orderActions = _props.orderActions,
                cartActions = _props.cartActions,
                paymethod = _props.paymethod,
                router = _props.router;

            if (cartList.length === 0) return;

            var methodKey = {
                'alipay': 1,
                'wechat': 2
            };

            orderActions.makeOrder({
                method: methodKey[paymethod],
                cb: function cb(data) {
                    switch (paymethod) {
                        case 'alipay':
                            (0, _jquery2.default)('body').append((0, _jquery2.default)(data));
                            break;
                        case 'wechat':
                            var img = data.img;
                            var orderNum = data.out_trade_no;
                            (0, _WeChatCode.showWeChatCode)(img, orderNum, function () {
                                router.push('/account/orders');
                            }, _this2.props);
                            break;
                        default:
                            break;
                    }
                    cartActions.loadCartList();
                },
                fb: function fb() {
                    router.push("/login");
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var cartList = this.props.cartList;

            var checkoutBtnClass = (0, _classnames2.default)('pay-btn', {
                'disable': cartList.length === 0
            });
            return _react2.default.createElement(
                'section',
                { className: 'dock-card' },
                _react2.default.createElement(
                    'div',
                    { className: 'dock-row' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'label',
                            { className: 'promo-code', htmlFor: 'promoCode' },
                            '\u4F18\u60E0\u7801'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group-back' },
                            _react2.default.createElement('input', { type: 'text', className: 'code', name: 'promoCode' }),
                            _react2.default.createElement('input', { type: 'button', className: 'apply', value: '\u4F7F\u7528\u4F18\u60E0\u7801' })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'dock-row money-check' },
                    _react2.default.createElement(
                        'span',
                        null,
                        '\u603B\u4EF7'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'sup',
                            { className: 'currency-symbol' },
                            '\uFFE5'
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            this.getTotalPrice()
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'dock-row' },
                    _react2.default.createElement(
                        'button',
                        { type: 'button', className: checkoutBtnClass, onClick: this.onCheckoutClick.bind(this) },
                        _react2.default.createElement('i', { className: 'fa fa-shopping-cart' }),
                        '\u786E\u8BA4\u4E0B\u5355'
                    )
                )
            );
        }
    }]);

    return Check;
}(_react.Component);

exports.default = Check;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Information
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 购物车提示信息
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author feixihan(1095714266@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Information = function (_Component) {
    _inherits(Information, _Component);

    function Information() {
        _classCallCheck(this, Information);

        return _possibleConstructorReturn(this, (Information.__proto__ || Object.getPrototypeOf(Information)).apply(this, arguments));
    }

    _createClass(Information, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { className: "notice" },
                _react2.default.createElement(
                    "h4",
                    null,
                    _react2.default.createElement("i", { className: "fa fa-exclamation-circle" }),
                    " \u91CD\u8981\u4FE1\u606F:"
                ),
                _react2.default.createElement(
                    "ul",
                    null,
                    _react2.default.createElement(
                        "li",
                        null,
                        "All items are delivered digitally by download and are not refundable."
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Check the system requirements on each game's page and the Terms of Use before making your purchase."
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "It is not possible to purchase more than one copy of the same game through the same Nuuvem account."
                    )
                )
            );
        }
    }]);

    return Information;
}(_react.Component);

exports.default = Information;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Item
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 购物车列表单项
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var CartHead = function (_Component) {
    _inherits(CartHead, _Component);

    function CartHead() {
        _classCallCheck(this, CartHead);

        return _possibleConstructorReturn(this, (CartHead.__proto__ || Object.getPrototypeOf(CartHead)).apply(this, arguments));
    }

    _createClass(CartHead, [{
        key: 'onUpdateNumberClick',
        value: function onUpdateNumberClick(game, type) {
            var cartActions = this.props.cartActions;

            var number = parseInt(game.number);
            switch (type) {
                case 'plus':
                    number++;
                    break;
                case 'minus':
                    number--;
                    break;
                default:
                    break;
            }
            if (number === 0) {
                cartActions.removeFromCart({
                    game: game
                });
            } else {
                cartActions.updateCartNumber({
                    game: game,
                    number: number
                });
            }
        }
    }, {
        key: 'onRemoveClick',
        value: function onRemoveClick(game) {
            var cartActions = this.props.cartActions;

            cartActions.removeFromCart({
                game: game
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var item = this.props.item;

            var onsale = false;
            return _react2.default.createElement(
                'div',
                { className: 'cart-item-wrapper' },
                _react2.default.createElement(
                    'div',
                    { className: 'item-image' },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/item/' + item.p_id, title: 'Go to the game\'s page' },
                        _react2.default.createElement('img', { alt: item.name_zh, src: item.thumbnail })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'item-content' },
                    _react2.default.createElement(
                        'a',
                        { href: '#/item/' + item.p_id, title: 'Go to the game\'s page' },
                        _react2.default.createElement(
                            'h3',
                            { className: 'product-title' },
                            item.name_zh
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'product-os-info' },
                            _react2.default.createElement(
                                'ul',
                                null,
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    item.s_platform
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    item.s_edition
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'message message-warning' },
                            _react2.default.createElement('i', { className: 'fa fa-exclamation-circle' }),
                            ' ',
                            item.match
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'item-aside' },
                    _react2.default.createElement(
                        'div',
                        { className: 'item-price' },
                        _react2.default.createElement(
                            'span',
                            { className: 'product-price' },
                            onsale ? _react2.default.createElement(
                                'p',
                                { className: 'price-pre' },
                                _react2.default.createElement(
                                    'del',
                                    null,
                                    '$49.99'
                                )
                            ) : '',
                            _react2.default.createElement(
                                'p',
                                { className: 'price-now' },
                                _react2.default.createElement(
                                    'sup',
                                    { className: 'currency-symbol' },
                                    '\uFFE5'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'integer' },
                                    item.price,
                                    ' x ',
                                    item.number
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'item-action' },
                        _react2.default.createElement(
                            'a',
                            { href: 'javascript:;', onClick: this.onUpdateNumberClick.bind(this, item, 'plus'), className: 'action' },
                            _react2.default.createElement('i', { className: 'fa fa-plus' })
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: 'javascript:;', onClick: this.onUpdateNumberClick.bind(this, item, 'minus'), className: 'action' },
                            _react2.default.createElement('i', { className: 'fa fa-minus' })
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: 'javascript:;', onClick: this.onRemoveClick.bind(this, item), className: 'action', 'data-action': 'cartItem:remove' },
                            _react2.default.createElement('i', { className: 'fa fa-trash' })
                        )
                    )
                )
            );
        }
    }]);

    return CartHead;
}(_react.Component);

exports.default = CartHead;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class PaymentMethods
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 支付方式
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author feixihan(1095714266@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var PaymentMethods = function (_Component) {
  _inherits(PaymentMethods, _Component);

  function PaymentMethods() {
    _classCallCheck(this, PaymentMethods);

    return _possibleConstructorReturn(this, (PaymentMethods.__proto__ || Object.getPrototypeOf(PaymentMethods)).apply(this, arguments));
  }

  _createClass(PaymentMethods, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      //   fetch('/api/Product/hot').then(res=>console.log(res))
      //  console.log(0)
    }
  }, {
    key: 'onPayMethodClick',
    value: function onPayMethodClick(method) {
      var cartActions = this.props.cartActions;

      cartActions.updatePayMethod(method);
    }
  }, {
    key: 'render',
    value: function render() {
      var paymethod = this.props.paymethod;

      return _react2.default.createElement(
        'section',
        { className: 'dock-card' },
        _react2.default.createElement(
          'div',
          { className: 'dock-head' },
          _react2.default.createElement(
            'span',
            null,
            '\u652F\u4ED8\u65B9\u5F0F'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'dock-row' },
          _react2.default.createElement(
            'ul',
            { className: 'paylist' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('input', { type: 'radio', className: 'pay-radio', checked: paymethod === 'alipay', onChange: this.onPayMethodClick.bind(this, 'alipay') }),
              _react2.default.createElement('div', { className: (0, _classnames2.default)('pay', 'zfb', { active: paymethod === 'alipay' }), onClick: this.onPayMethodClick.bind(this, 'alipay') })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('input', { type: 'radio', className: 'pay-radio', checked: paymethod === 'wechat', onChange: this.onPayMethodClick.bind(this, 'wechat') }),
              _react2.default.createElement('div', { className: (0, _classnames2.default)('pay', 'wx', { active: paymethod === 'wechat' }), onClick: this.onPayMethodClick.bind(this, 'wechat') })
            )
          )
        )
      );
    }
  }]);

  return PaymentMethods;
}(_react.Component);

exports.default = PaymentMethods;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Warning
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 如果游戏有问题，则会产生警告
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author feixihan(1095714266@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Warning = function (_Component) {
    _inherits(Warning, _Component);

    function Warning() {
        _classCallCheck(this, Warning);

        return _possibleConstructorReturn(this, (Warning.__proto__ || Object.getPrototypeOf(Warning)).apply(this, arguments));
    }

    _createClass(Warning, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { className: "dock-card notice cart-warning" },
                _react2.default.createElement(
                    "h4",
                    null,
                    _react2.default.createElement("i", { className: "icon icon-alert" }),
                    " Attention:"
                ),
                _react2.default.createElement(
                    "ul",
                    null,
                    _react2.default.createElement(
                        "li",
                        null,
                        "Some products in your cart seem to be unavailable in your country"
                    )
                )
            );
        }
    }]);

    return Warning;
}(_react.Component);

exports.default = Warning;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderHeader = function (_Component) {
    _inherits(RenderHeader, _Component);

    function RenderHeader() {
        _classCallCheck(this, RenderHeader);

        return _possibleConstructorReturn(this, (RenderHeader.__proto__ || Object.getPrototypeOf(RenderHeader)).apply(this, arguments));
    }

    _createClass(RenderHeader, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var catalogAction = this.props.catalogAction;

            catalogAction.loadAttributeList();
        }
    }, {
        key: 'sortByString',
        value: function sortByString(str, e) {
            var catalogAction = this.props.catalogAction;

            e.stopPropagation();
            if (str === "priceDown") {
                var page = this.props.viewMore;
                var categorys = this.props.changeType.category;
                var types = this.props.changeType.type;
                var platforms = this.props.changeType.platform;
                var perpage = this.props.getCatalogPerpage;
                if (page == 2) {
                    catalogAction.loadGamesList({ price: 'price_desc', 'type': types, 'platform': platforms });
                } else {
                    catalogAction.loadGamesList({ price: 'price_desc', 'type': types, 'platform': platforms, 'page': page, 'perpage': perpage });
                }
            } else if (str === "priceUp") {
                var _page = this.props.viewMore;
                var _categorys = this.props.changeType.category;
                var _types = this.props.changeType.type;
                var _platforms = this.props.changeType.platform;
                var _perpage = this.props.getCatalogPerpage;
                if (_page == 2) {
                    catalogAction.loadGamesList({ price: 'price_asc', 'type': _types, 'platform': _platforms });
                } else {
                    catalogAction.loadGamesList({ price: 'price_asc', 'type': _types, 'platform': _platforms, 'page': _page, 'perpage': _perpage });
                }
            }
        }
    }, {
        key: 'todo',
        value: function todo(id, e) {
            e.stopPropagation();
            var router = this.props.router;
            var catalogAction = this.props.catalogAction;

            if (id === "category") {
                var category = e.target.getAttribute('value');
                catalogAction.changeType(category, 'category');

                var categorys = this.props.changeType.category;
                var types = this.props.changeType.type;
                var platforms = this.props.changeType.platform;
                var path = '/catalog/' + categorys + '/' + types + '/' + platforms;

                router.push(path);
            } else if (id === 'type') {
                var type = e.target.getAttribute('value');
                catalogAction.changeType(type, 'type');

                var _categorys2 = this.props.changeType.category;
                var _types2 = this.props.changeType.type;
                var _platforms2 = this.props.changeType.platform;
                var perpage = this.props.getCatalogPerpage;
                catalogAction.loadGamesList({ 'type': _types2, 'platform': _platforms2, 'perpage': perpage });
                // const path=`/catalog/${categorys}/${types}/${platforms}`;
                //
                //
                // router.push(path);
            } else if (id === 'platform') {
                var platform = e.target.getAttribute('value');
                catalogAction.changeType(platform, 'platform');

                var _categorys3 = this.props.changeType.category;
                var _types3 = this.props.changeType.type;
                var _platforms3 = this.props.changeType.platform;
                var _perpage2 = this.props.getCatalogPerpage;
                catalogAction.loadGamesList({ 'type': _types3, 'platform': _platforms3, 'perpage': _perpage2 });
                // const path=`/catalog/${categorys}/${types}/${platforms}`;
                //
                // router.push(path);
            }

            //const path=`/catalog/${category}/${type}/${platform}`;
            //router.push(path);
        }
    }, {
        key: 'render',
        value: function render() {
            var that = this;
            var types = this.props.loadAttributeList[3];
            var platforms = this.props.loadAttributeList[2];
            var type = [];
            var platform = [];
            if (types) {
                for (var x in types.child) {
                    type.push(_react2.default.createElement(
                        'li',
                        { key: x },
                        _react2.default.createElement(
                            'label',
                            null,
                            _react2.default.createElement('input', { type: 'radio', name: 'type', value: x }),
                            types.child[x]
                        )
                    ));
                }
            }

            if (platforms) {
                for (var _x in platforms.child) {
                    platform.push(_react2.default.createElement(
                        'li',
                        { key: _x },
                        _react2.default.createElement(
                            'label',
                            null,
                            _react2.default.createElement('input', { type: 'radio', name: 'platforms', value: _x }),
                            platforms.child[_x]
                        )
                    ));
                }
            }

            return _react2.default.createElement(
                'div',
                { className: 'container catalog-container' },
                _react2.default.createElement(
                    'header',
                    { className: 'bl-top' },
                    _react2.default.createElement(
                        'div',
                        { className: 'bar-filter' },
                        _react2.default.createElement(
                            'div',
                            { className: 'bar-filter-item' },
                            _react2.default.createElement(
                                'p',
                                { className: 'tt ' },
                                '\u5546\u54C1\u79CD\u7C7B'
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'drop-item', onClick: that.todo.bind(that, 'category') },
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'label',
                                        null,
                                        _react2.default.createElement('input', { type: 'radio', name: 'category', value: 'all' }),
                                        '\u5168\u90E8'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'label',
                                        null,
                                        _react2.default.createElement('input', { type: 'radio', name: 'category', value: 'pcgame' }),
                                        '\u7535\u8111\u6E38\u620F'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'label',
                                        null,
                                        _react2.default.createElement('input', { type: 'radio', name: 'category', value: 'gameCard' }),
                                        '\u6E38\u620F\u5361'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'bar-filter-item' },
                            _react2.default.createElement(
                                'p',
                                { className: 'tt' },
                                '\u7C7B\u578B'
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'drop-item', onClick: that.todo.bind(that, 'type') },
                                type
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'bar-filter-item' },
                            _react2.default.createElement(
                                'p',
                                { className: 'tt' },
                                '\u5E73\u53F0'
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'drop-item', onClick: that.todo.bind(that, 'platform') },
                                platform
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'bar-filter-order' },
                            _react2.default.createElement(
                                'p',
                                null,
                                '\u6392\u5E8F\uFF1A'
                            ),
                            _react2.default.createElement(
                                'ul',
                                null,
                                _react2.default.createElement(
                                    'li',
                                    { onClick: that.sortByString.bind(that, 'priceDown') },
                                    _react2.default.createElement(
                                        'a',
                                        null,
                                        '\u4EF7\u683C\u964D\u5E8F'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { onClick: that.sortByString.bind(that, 'priceUp') },
                                    _react2.default.createElement(
                                        'a',
                                        null,
                                        '\u4EF7\u683C\u5347\u5E8F'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return RenderHeader;
}(_react.Component);

exports.default = RenderHeader;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Pagination = __webpack_require__(26);

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderMore = function (_Component) {
    _inherits(RenderMore, _Component);

    function RenderMore(props) {
        _classCallCheck(this, RenderMore);

        var _this = _possibleConstructorReturn(this, (RenderMore.__proto__ || Object.getPrototypeOf(RenderMore)).call(this, props));

        _this.state = {
            current: 1,
            pageSize: 2
        };
        return _this;
    }

    _createClass(RenderMore, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var catalogAction = this.props.catalogAction;

            catalogAction.viewMore();
            var page = this.props.getCatalogPerpage;
            catalogAction.loadGamesList({ 'perpage': page, 'page': 1 });
        }
    }, {
        key: 'onPaginationChange',
        value: function onPaginationChange(option, currentPage) {
            var catalogAction = this.props.catalogAction;

            this.setState({ current: currentPage });
            var page = currentPage;
            console.log(currentPage);
            console.log(option);
            var categorys = this.props.changeType.category;
            var types = this.props.changeType.type;
            var platforms = this.props.changeType.platform;
            var perpage = this.props.getCatalogPerpage;
            console.log('perpage=' + perpage);
            catalogAction.loadGamesList({ 'type': types, 'platform': platforms, 'page': option, 'perpage': perpage });
        }
    }, {
        key: 'choosePerpage',
        value: function choosePerpage(e) {
            var catalogAction = this.props.catalogAction;

            console.log(e.currentTarget.value);
            var categorys = this.props.changeType.category;
            var types = this.props.changeType.type;
            var platforms = this.props.changeType.platform;
            var perpage = e.currentTarget.value;
            catalogAction.loadGamesList({ 'type': types, 'platform': platforms, 'perpage': perpage });
            catalogAction.viewMore({ 'perpage': perpage });

            catalogAction.changePerpage({ 'page': e.currentTarget.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var that = this;
            var total = that.props.viewMore.totalpage;
            var perpage = that.props.getCatalogPerpage;
            console.log(perpage);
            return _react2.default.createElement(
                'div',
                { className: 'container-footer' },
                _react2.default.createElement(
                    'div',
                    { className: 'order-pagination' },
                    _react2.default.createElement(_Pagination2.default, { pageSize: perpage, total: total * perpage, onChange: this.onPaginationChange.bind(this) })
                )
            );
        }
    }]);

    return RenderMore;
}(_react.Component);

exports.default = RenderMore;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderProject = function (_Component) {
    _inherits(RenderProject, _Component);

    function RenderProject(props) {
        _classCallCheck(this, RenderProject);

        return _possibleConstructorReturn(this, (RenderProject.__proto__ || Object.getPrototypeOf(RenderProject)).call(this, props));
    }

    _createClass(RenderProject, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var catalogAction = this.props.catalogAction;
            //catalogAction.loadGamesList({'perpage':5});
        }
    }, {
        key: 'handleClick',
        value: function handleClick(id, e) {
            e.stopPropagation();
            var router = this.props.router;

            var path = '/item/' + id;
            //browserHistor.push(path);
            router.push(path);
            console.log(id);
        }
    }, {
        key: 'addToCartClick',
        value: function addToCartClick(game, e) {
            e.preventDefault();
            var cartActions = this.props.cartActions;

            console.log(game);
            cartActions.addToCart({
                game: game,
                cb: function cb() {
                    console.log('success');
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            //var result=this.props.catalogLoadGamesList;
            var result = this.props.catalogLoadGamesList;
            console.log(result);
            var that = this;
            var items = result.map(function (item, index) {
                return _react2.default.createElement(
                    'div',
                    { className: 'products-grid' },
                    _react2.default.createElement(
                        'div',
                        { className: 'products-card', key: item.p_id },
                        _react2.default.createElement(
                            'a',
                            null,
                            _react2.default.createElement(
                                'div',
                                { className: 'product-img', onClick: that.handleClick.bind(that, item.p_id) },
                                _react2.default.createElement('img', { src: '' + _api.API_PRO_PREFIX + item.thumb_img })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'product-card-content' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'product-card-content-wrapper' },
                                    _react2.default.createElement(
                                        'h3',
                                        { className: 'product-title' },
                                        item.name_zh
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'ul',
                                            { className: 'product-os-info' },
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                '\u5E73\u53F0\uFF1A',
                                                _react2.default.createElement(
                                                    'span',
                                                    { style: { marginRight: '5px' } },
                                                    item.s_platform
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                '\u7248\u672C\uFF1A',
                                                _react2.default.createElement(
                                                    'span',
                                                    { style: { marginRight: '5px' } },
                                                    item.s_edition
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'product-card-footer' },
                                _react2.default.createElement(
                                    'button',
                                    { className: 'product-btn-add-to-cart' },
                                    _react2.default.createElement(
                                        'span',
                                        { onClick: that.addToCartClick.bind(that, item) },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'oldPrice' },
                                            '\uFFE5',
                                            item.market_price
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'icon' },
                                            _react2.default.createElement('i', { className: 'fa fa-cart-plus' })
                                        ),
                                        '\uFFE5',
                                        item.price
                                    )
                                )
                            )
                        )
                    )
                );
            });
            return _react2.default.createElement(
                'div',
                { className: 'products' },
                _react2.default.createElement(
                    'div',
                    { className: 'products-main' },
                    items
                )
            );
        }
    }]);

    return RenderProject;
}(_react.Component);

exports.default = RenderProject;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Fail
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 邮箱验证失败
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Fail = function (_Component) {
    _inherits(Fail, _Component);

    function Fail() {
        _classCallCheck(this, Fail);

        return _possibleConstructorReturn(this, (Fail.__proto__ || Object.getPrototypeOf(Fail)).apply(this, arguments));
    }

    _createClass(Fail, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "fail-section" },
                _react2.default.createElement(
                    "p",
                    { className: "text" },
                    _react2.default.createElement("i", { className: "fa fa-times-circle" }),
                    "\u90AE\u7BB1\u9A8C\u8BC1\u5931\u8D25\uFF0C\u5982\u6709\u95EE\u9898\u8BF7\u8054\u7CFB\u5BA2\u670D\uFF0C\u7535\u8BDDxxxxxxxx\uFF01"
                )
            );
        }
    }]);

    return Fail;
}(_react.Component);

exports.default = Fail;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Success
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 邮箱验证成功
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Success = function (_Component) {
    _inherits(Success, _Component);

    function Success() {
        _classCallCheck(this, Success);

        return _possibleConstructorReturn(this, (Success.__proto__ || Object.getPrototypeOf(Success)).apply(this, arguments));
    }

    _createClass(Success, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'success-section' },
                _react2.default.createElement(
                    'p',
                    { className: 'text' },
                    _react2.default.createElement('i', { className: 'fa fa-times-circle' }),
                    '\u606D\u559C\u4F60\uFF0C\u90AE\u7BB1\u9A8C\u8BC1\u6210\u529F\uFF01'
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/', className: 'pg-btn btn-start' },
                    '\u5F00\u59CB\u8D2D\u7269'
                )
            );
        }
    }]);

    return Success;
}(_react.Component);

exports.default = Success;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Footer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 底部信息栏
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'footer',
                { className: 'footer' },
                _react2.default.createElement(
                    'section',
                    { className: 'payment-options' },
                    '\u62B5\u5236\u4E0D\u826F\u6E38\u620F \u62D2\u7EDD\u76D7\u7248\u6E38\u620F \u6CE8\u610F\u81EA\u6211\u4FDD\u62A4 \u8C28\u9632\u4E0A\u5F53\u53D7\u9A97 \u9002\u5EA6\u6E38\u620F\u76CA\u8111 \u6C89\u8FF7\u6E38\u620F\u4F24\u8EAB \u5408\u7406\u5B89\u6392\u65F6\u95F4 \u4EAB\u53D7\u5065\u5EB7\u751F\u6D3B'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'footer-container' },
                    _react2.default.createElement(
                        'section',
                        { className: 'footer-row' },
                        _react2.default.createElement(
                            'nav',
                            { className: 'footer-nav' },
                            _react2.default.createElement(
                                'ul',
                                null,
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/', activeClassName: 'active', onlyActiveOnIndex: true },
                                        '\u4E3B\u9875'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/catalog', activeClassName: 'active', onlyActiveOnIndex: true },
                                        '\u6E38\u620F'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        null,
                                        '\u7528\u6237\u4E2D\u5FC3'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        null,
                                        '\u8054\u7CFB\u6211\u4EEC'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        null,
                                        '\u5173\u4E8E\u6211\u4EEC'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.IndexLink,
                                        { to: '/account/details', activeStyle: { color: 'black' } },
                                        '\u6280\u672F\u652F\u6301'
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'section',
                        { className: 'footer-row', style: { display: "flex" } },
                        _react2.default.createElement(
                            'nav',
                            { className: 'footer-social-nav' },
                            _react2.default.createElement(
                                'ul',
                                null,
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement('a', { className: 'btn-social' })
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement('a', { className: 'btn-social weixin' })
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement('a', { className: 'btn-social weibo' })
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement('a', { className: 'btn-social youku' })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'footer-newsletter' },
                            _react2.default.createElement(
                                'p',
                                { className: 'footer-title' },
                                '\xA9\u5B89\u5FBD\u6E38\u96C6\u7F51\u7EDC\u79D1\u6280\u80A1\u4EFD\u6709\u9650\u516C\u53F8\u7248\u6743\u6240\u6709 \u7696ICP\u590716021300\u53F7 ICP\u8BC1\u7696'
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'footer-info' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'left' },
                                    _react2.default.createElement('a', { className: 'left-icon' }),
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        '\u7696\u7F51\u6587[2016] 6077-109\u53F7'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'right' },
                                    _react2.default.createElement('a', { className: 'right-icon' }),
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        '\u7696\u516C\u7F51\u5B89\u5907 34050302000127\u53F7'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Hero
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 主页交易游戏部分
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Deals = function (_Component) {
    _inherits(Deals, _Component);

    function Deals() {
        _classCallCheck(this, Deals);

        return _possibleConstructorReturn(this, (Deals.__proto__ || Object.getPrototypeOf(Deals)).apply(this, arguments));
    }

    _createClass(Deals, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { className: 'home-section home-section-deals' },
                _react2.default.createElement(
                    'div',
                    { className: 'deals-component' },
                    _react2.default.createElement(
                        'div',
                        { className: 'deals-head func-clearfix' },
                        _react2.default.createElement(
                            'h3',
                            { className: 'title' },
                            'Deals'
                        ),
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/catalog', className: 'more pg-btn pg-btn__small pg-btn__primary' },
                            '\u67E5\u770B\u66F4\u591A'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'deals-content' },
                        _react2.default.createElement(
                            'div',
                            { className: 'games-list func-clearfix' },
                            _react2.default.createElement(
                                'a',
                                { className: 'pg-game-card games-list-item', href: 'javascript:;' },
                                _react2.default.createElement('div', { className: 'game-img' }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'game-info' },
                                    _react2.default.createElement(
                                        'h3',
                                        { className: 'game-title' },
                                        'F1\u2122 2016'
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'game-os func-clearfix' },
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement('i', { className: 'fa fa-windows' })
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement('i', { className: 'fa fa-apple' })
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement('i', { className: 'fa fa-linux' })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'game-footer' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'game-price pg-btn-price' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'price-now' },
                                            '$23.99'
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'addto-cart' },
                                            _react2.default.createElement('i', { className: 'fa fa-cart-plus' }),
                                            '$23.99'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'a',
                                { className: 'pg-game-card games-list-item', href: 'javascript:;' },
                                _react2.default.createElement('div', { className: 'game-img' }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'game-info' },
                                    _react2.default.createElement(
                                        'h3',
                                        { className: 'game-title' },
                                        'F1\u2122 2016'
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'game-os func-clearfix' },
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement('i', { className: 'fa fa-windows' })
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement('i', { className: 'fa fa-apple' })
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement('i', { className: 'fa fa-linux' })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'game-footer' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'game-price pg-btn-price' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'price-now' },
                                            '$23.99'
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'addto-cart' },
                                            _react2.default.createElement('i', { className: 'fa fa-cart-plus' }),
                                            '$23.99'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'a',
                                { className: 'pg-game-card games-list-item', href: 'javascript:;' },
                                _react2.default.createElement('div', { className: 'game-img' }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'game-info' },
                                    _react2.default.createElement(
                                        'h3',
                                        { className: 'game-title' },
                                        'F1\u2122 2016'
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'game-os func-clearfix' },
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement('i', { className: 'fa fa-windows' })
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement('i', { className: 'fa fa-apple' })
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement('i', { className: 'fa fa-linux' })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'game-footer' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'game-price pg-btn-price' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'price-now' },
                                            '$23.99'
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'addto-cart' },
                                            _react2.default.createElement('i', { className: 'fa fa-cart-plus' }),
                                            '$23.99'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'a',
                                { className: 'pg-game-card games-list-item', href: 'javascript:;' },
                                _react2.default.createElement('div', { className: 'game-img' }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'game-info' },
                                    _react2.default.createElement(
                                        'h3',
                                        { className: 'game-title' },
                                        'F1\u2122 2016'
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'game-os func-clearfix' },
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement('i', { className: 'fa fa-windows' })
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement('i', { className: 'fa fa-apple' })
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement('i', { className: 'fa fa-linux' })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'game-footer' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'game-price pg-btn-price' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'price-now' },
                                            '$23.99'
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'addto-cart' },
                                            _react2.default.createElement('i', { className: 'fa fa-cart-plus' }),
                                            '$23.99'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'a',
                                { className: 'pg-game-card pg-game-card__discount games-list-item', href: 'javascript:;' },
                                _react2.default.createElement('div', { className: 'game-img' }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'game-info' },
                                    _react2.default.createElement(
                                        'h3',
                                        { className: 'game-title' },
                                        'F1\u2122 2016'
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'game-os func-clearfix' },
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement('i', { className: 'fa fa-windows' })
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement('i', { className: 'fa fa-apple' })
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement('i', { className: 'fa fa-linux' })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'game-footer' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'game-price pg-btn-price pg-btn-price__discount' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'price-pre' },
                                            '$59.99'
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'price-now' },
                                            '$23.99'
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'addto-cart' },
                                            _react2.default.createElement('i', { className: 'fa fa-cart-plus' }),
                                            '$23.99'
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Deals;
}(_react.Component);

exports.default = Deals;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _lodash = __webpack_require__(6);

var _lodash2 = _interopRequireDefault(_lodash);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Games
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 通用游戏组
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Games = function (_Component) {
    _inherits(Games, _Component);

    function Games() {
        _classCallCheck(this, Games);

        return _possibleConstructorReturn(this, (Games.__proto__ || Object.getPrototypeOf(Games)).apply(this, arguments));
    }

    _createClass(Games, [{
        key: 'onAddToCartClick',
        value: function onAddToCartClick(game, e) {
            e.preventDefault();
            var cartActions = this.props.cartActions;

            cartActions.addToCart({
                game: game,
                cb: function cb() {
                    console.log('success');
                }
            });
        }
    }, {
        key: 'renderGamesList',
        value: function renderGamesList() {
            var _this2 = this;

            var gamesList = this.props.gamesList;


            var renderItem = function renderItem(game, index) {
                var imgStyle = {
                    backgroundImage: 'url(' + _api.API_PRO_PREFIX + game.thumb_img + ')'
                };
                return _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/item/' + game.p_id, key: index, className: 'pg-game-card pg-game-card__discount games-list-item' },
                    _react2.default.createElement('div', { className: 'game-img', style: imgStyle }),
                    _react2.default.createElement(
                        'div',
                        { className: 'game-info' },
                        _react2.default.createElement(
                            'h3',
                            { className: 'game-title' },
                            game.name_zh
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'platform' },
                            _react2.default.createElement(
                                'label',
                                null,
                                '\u5E73\u53F0\uFF1A'
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'cxt' },
                                game.s_platform
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'version' },
                            _react2.default.createElement(
                                'label',
                                null,
                                '\u7248\u672C\uFF1A'
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'cxt' },
                                game.s_edition
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'game-footer' },
                        _react2.default.createElement(
                            'span',
                            { className: 'game-price pg-btn-price pg-btn-price__discount' },
                            _react2.default.createElement(
                                'span',
                                { className: 'price-pre' },
                                '\uFFE5',
                                game.market_price
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'price-now' },
                                '\uFFE5',
                                game.price
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'addto-cart', onClick: _this2.onAddToCartClick.bind(_this2, game) },
                                _react2.default.createElement('i', { className: 'fa fa-cart-plus' }),
                                '\uFFE5',
                                game.price
                            )
                        )
                    )
                );
            };

            return _react2.default.createElement(
                'div',
                { className: 'games-list func-clearfix' },
                _lodash2.default.map(gamesList, renderItem)
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'home-component-games' },
                this.renderGamesList()
            );
        }
    }]);

    return Games;
}(_react.Component);

exports.default = Games;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _Games = __webpack_require__(186);

var _Games2 = _interopRequireDefault(_Games);

var _Placeholder = __webpack_require__(15);

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _Tabs = __webpack_require__(50);

var _Tabs2 = _interopRequireDefault(_Tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Group
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 最新、折扣、预售游戏列表组
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Group = function (_Component) {
    _inherits(Group, _Component);

    function Group(props) {
        _classCallCheck(this, Group);

        var _this = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, props));

        _this.state = {
            loading: true
        };
        return _this;
    }

    _createClass(Group, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            var gameActions = this.props.gameActions;

            gameActions.loadGamesListGroup({
                cb: function cb() {
                    _this2.setState({ loading: false });
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                latestGamesList = _props.latestGamesList,
                discountGamesList = _props.discountGamesList,
                preorderGamesList = _props.preorderGamesList;

            var content = null;
            if (this.state.loading) {
                content = _react2.default.createElement(
                    "div",
                    { className: "placeholders" },
                    _react2.default.createElement(_Placeholder2.default, { type: "content" })
                );
            } else {
                content = _react2.default.createElement(
                    _Tabs2.default,
                    { className: "group-tabs" },
                    _react2.default.createElement(
                        _Tabs.TabPane,
                        { title: "\u6700\u65B0" },
                        _react2.default.createElement(_Games2.default, _extends({}, this.props, { gamesList: latestGamesList }))
                    ),
                    _react2.default.createElement(
                        _Tabs.TabPane,
                        { title: "\u6298\u6263" },
                        _react2.default.createElement(_Games2.default, _extends({}, this.props, { gamesList: discountGamesList }))
                    ),
                    _react2.default.createElement(
                        _Tabs.TabPane,
                        { title: "\u9884\u552E" },
                        _react2.default.createElement(_Games2.default, _extends({}, this.props, { gamesList: preorderGamesList }))
                    )
                );
            }

            return _react2.default.createElement(
                "div",
                { className: "home-section-group" },
                _react2.default.createElement(
                    "div",
                    { className: "group-component" },
                    content,
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: "/catalog", className: "more pg-btn pg-btn__small pg-btn__primary" },
                        "\u67E5\u770B\u66F4\u591A"
                    )
                )
            );
        }
    }]);

    return Group;
}(_react.Component);

exports.default = Group;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__(6);

var _lodash2 = _interopRequireDefault(_lodash);

var _Placeholder = __webpack_require__(15);

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Hero
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 主页轮播部分
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var HeroSlider = function (_Component) {
    _inherits(HeroSlider, _Component);

    function HeroSlider(props) {
        _classCallCheck(this, HeroSlider);

        var _this = _possibleConstructorReturn(this, (HeroSlider.__proto__ || Object.getPrototypeOf(HeroSlider)).call(this, props));

        _this.state = {
            current: 0
        };
        return _this;
    }

    _createClass(HeroSlider, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setAutoPlayTimeout();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(this.autoPlayTimeout);
        }
    }, {
        key: 'setAutoPlayTimeout',
        value: function setAutoPlayTimeout() {
            this.autoPlayTimeout = setTimeout(this.autoPlay.bind(this), 3000);
        }
    }, {
        key: 'autoPlay',
        value: function autoPlay() {
            var sliderGamesList = this.props.sliderGamesList;
            var current = this.state.current;

            var length = _lodash2.default.keys(sliderGamesList).length;
            var next = current + 1;
            if (current === length - 1) {
                next = 0;
            }
            this.setState({ current: next });
            this.setAutoPlayTimeout();
        }
    }, {
        key: 'onPreNavClick',
        value: function onPreNavClick() {
            var sliderGamesList = this.props.sliderGamesList;
            var current = this.state.current;

            var newCurrent = 0;
            var keys = _lodash2.default.keys(sliderGamesList);
            if (current === 0) {
                newCurrent = keys.length - 1;
            } else {
                newCurrent = current - 1;
            }
            this.setState({
                current: newCurrent
            });
            clearTimeout(this.autoPlayTimeout);
            this.setAutoPlayTimeout();
        }
    }, {
        key: 'onNextNavClick',
        value: function onNextNavClick() {
            var sliderGamesList = this.props.sliderGamesList;
            var current = this.state.current;

            var newCurrent = 0;
            var keys = _lodash2.default.keys(sliderGamesList);
            if (current === keys.length - 1) {
                newCurrent = 0;
            } else {
                newCurrent = current + 1;
            }
            this.setState({
                current: newCurrent
            });
            clearTimeout(this.autoPlayTimeout);
            this.setAutoPlayTimeout();
        }
    }, {
        key: 'onNavItemClick',
        value: function onNavItemClick(next) {
            this.setState({ current: next });
            clearTimeout(this.autoPlayTimeout);
            this.setAutoPlayTimeout();
        }
    }, {
        key: 'onAddToCartClick',
        value: function onAddToCartClick(game, e) {
            e.preventDefault();
            var cartActions = this.props.cartActions;

            cartActions.addToCart({
                game: game,
                cb: function cb() {
                    console.log('success');
                }
            });
        }
    }, {
        key: 'renderItemLink',
        value: function renderItemLink(index) {
            var sliderGamesList = this.props.sliderGamesList;

            var keys = _lodash2.default.keys(sliderGamesList);
            var currentGames = sliderGamesList[keys[this.state.current]];
            var linkClassName = (0, _classnames2.default)({
                "item": true,
                "item-top": index === 1,
                "item-bottom": index === 2
            });
            var linkStyle = {
                backgroundImage: 'url(' + _api.API_PRO_PREFIX + currentGames[index].thumb_img + ')'
            };
            return _react2.default.createElement(
                _reactRouter.Link,
                { to: '/item/' + currentGames[index].p_id, className: linkClassName, style: linkStyle },
                _react2.default.createElement('div', { className: 'item-mask' }),
                _react2.default.createElement(
                    'div',
                    { className: 'item-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'top-price' },
                        _react2.default.createElement(
                            'div',
                            { className: 'price' },
                            _react2.default.createElement(
                                'span',
                                { className: 'price-pre' },
                                '\uFFE5',
                                currentGames[index].market_price
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'price-now' },
                                '\uFFE5',
                                currentGames[index].price
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'addto-cart', onClick: this.onAddToCartClick.bind(this, currentGames[index]) },
                                _react2.default.createElement('i', { className: 'fa fa-cart-plus' }),
                                '\uFFE5',
                                currentGames[index].price
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'discount' },
                            '\u6807\u51C6\u7248'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'discount' },
                            'PS4'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'bottom-title' },
                        _react2.default.createElement(
                            'h3',
                            null,
                            currentGames[index].name_zh
                        )
                    )
                )
            );
        }
    }, {
        key: 'renderSliderContainer',
        value: function renderSliderContainer() {
            return _react2.default.createElement(
                'div',
                { className: 'slider-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'slider-items' },
                    _react2.default.createElement(
                        'div',
                        { className: 'items-left' },
                        this.renderItemLink(0)
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'items-right' },
                        this.renderItemLink(1),
                        this.renderItemLink(2)
                    )
                )
            );
        }
    }, {
        key: 'renderSliderNavs',
        value: function renderSliderNavs() {
            var sliderGamesList = this.props.sliderGamesList;

            var navItems = [];
            var keys = _lodash2.default.keys(sliderGamesList);
            for (var i = 0; i < keys.length; i++) {
                var navItemClassName = (0, _classnames2.default)({
                    "hero-nav-item": true,
                    "active": i === this.state.current
                });
                navItems.push(_react2.default.createElement(
                    'a',
                    { key: i, onClick: this.onNavItemClick.bind(this, i), className: navItemClassName, href: 'javascript:;' },
                    '\u2022'
                ));
            }
            return _react2.default.createElement(
                'div',
                { className: 'slider-nav' },
                _react2.default.createElement(
                    'a',
                    { href: 'javascript:;', className: 'nav-pre', onClick: this.onPreNavClick.bind(this) },
                    _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'hero-navs' },
                    navItems
                ),
                _react2.default.createElement(
                    'a',
                    { href: 'javascript:;', className: 'nav-next', onClick: this.onNextNavClick.bind(this) },
                    _react2.default.createElement('i', { className: 'fa fa-chevron-right' })
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'hero-slider-component' },
                this.renderSliderContainer(),
                this.renderSliderNavs(),
                _react2.default.createElement(
                    'a',
                    { href: 'javascript:;', className: 'side-nav side-nav-pre', onClick: this.onPreNavClick.bind(this) },
                    _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
                ),
                _react2.default.createElement(
                    'a',
                    { href: 'javascript:;', className: 'side-nav side-nav-next', onClick: this.onNextNavClick.bind(this) },
                    _react2.default.createElement('i', { className: 'fa fa-chevron-right' })
                )
            );
        }
    }]);

    return HeroSlider;
}(_react.Component);

var Hero = function (_Component2) {
    _inherits(Hero, _Component2);

    function Hero(props) {
        _classCallCheck(this, Hero);

        return _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).call(this, props));
    }

    _createClass(Hero, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var gameActions = this.props.gameActions;

            gameActions.loadSliderGamesList();
        }
    }, {
        key: 'render',
        value: function render() {
            var sliderGamesBg = this.props.sliderGamesBg;

            var heroSectionStyle = {
                backgroundImage: 'url(' + _api.API_PRO_PREFIX + sliderGamesBg + ')'
            };
            return _react2.default.createElement(
                'section',
                { className: 'home-section home-section-hero', style: heroSectionStyle },
                _react2.default.createElement(HeroSlider, this.props)
            );
        }
    }]);

    return Hero;
}(_react.Component);

exports.default = Hero;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _lodash = __webpack_require__(6);

var _lodash2 = _interopRequireDefault(_lodash);

var _Placeholder = __webpack_require__(15);

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Hero
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 最新游戏部分
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Latest = function (_Component) {
    _inherits(Latest, _Component);

    function Latest(props) {
        _classCallCheck(this, Latest);

        var _this = _possibleConstructorReturn(this, (Latest.__proto__ || Object.getPrototypeOf(Latest)).call(this, props));

        _this.state = {
            loading: true
        };
        return _this;
    }

    _createClass(Latest, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var gameActions = this.props.gameActions;

            gameActions.loadLatestGamesList({
                cb: function cb() {
                    _this2.setState({ loading: false });
                }
            });
        }
    }, {
        key: 'onAddToCartClick',
        value: function onAddToCartClick(game, e) {
            e.preventDefault();
            var cartActions = this.props.cartActions;

            cartActions.addToCart({
                game: game,
                cb: function cb() {
                    console.log('success');
                }
            });
        }
    }, {
        key: 'renderGamesList',
        value: function renderGamesList() {
            var _this3 = this;

            var latestGamesList = this.props.latestGamesList;


            var renderItem = function renderItem(game, index) {
                var imgStyle = {
                    backgroundImage: 'url(' + _api.API_PRO_PREFIX + game.thumb_img + ')'
                };
                return _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/item/' + game.p_id, key: index, className: 'pg-game-card pg-game-card__discount games-list-item' },
                    _react2.default.createElement('div', { className: 'game-img', style: imgStyle }),
                    _react2.default.createElement(
                        'div',
                        { className: 'game-info' },
                        _react2.default.createElement(
                            'h3',
                            { className: 'game-title' },
                            game.name_zh
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'platform' },
                            _react2.default.createElement(
                                'label',
                                null,
                                '\u5E73\u53F0\uFF1A'
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'cxt' },
                                game.s_platform
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'version' },
                            _react2.default.createElement(
                                'label',
                                null,
                                '\u7248\u672C\uFF1A'
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'cxt' },
                                game.s_edition
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'game-footer' },
                        _react2.default.createElement(
                            'span',
                            { className: 'game-price pg-btn-price pg-btn-price__discount' },
                            _react2.default.createElement(
                                'span',
                                { className: 'price-pre' },
                                '\uFFE5',
                                game.market_price
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'price-now' },
                                '\uFFE5',
                                game.price
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'addto-cart', onClick: _this3.onAddToCartClick.bind(_this3, game) },
                                _react2.default.createElement('i', { className: 'fa fa-cart-plus' }),
                                '\uFFE5',
                                game.price
                            )
                        )
                    )
                );
            };

            return _react2.default.createElement(
                'div',
                { className: 'games-list func-clearfix' },
                _lodash2.default.map(latestGamesList, renderItem)
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var content = null;
            if (this.state.loading) {
                content = _react2.default.createElement(
                    'div',
                    { className: 'placeholders' },
                    _react2.default.createElement(_Placeholder2.default, { type: 'content' })
                );
            } else {
                content = _react2.default.createElement(
                    'div',
                    null,
                    this.renderGamesList()
                );
            }

            return _react2.default.createElement(
                'section',
                { className: 'home-section home-section-latest' },
                _react2.default.createElement(
                    'div',
                    { className: 'latest-component' },
                    _react2.default.createElement(
                        'div',
                        { className: 'latest-head func-clearfix' },
                        _react2.default.createElement(
                            'h3',
                            { className: 'title' },
                            '\u6700\u65B0'
                        ),
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/catalog', className: 'more pg-btn pg-btn__small pg-btn__primary' },
                            '\u67E5\u770B\u66F4\u591A'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'latest-content' },
                        content
                    )
                )
            );
        }
    }]);

    return Latest;
}(_react.Component);

exports.default = Latest;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _lodash = __webpack_require__(6);

var _lodash2 = _interopRequireDefault(_lodash);

var _Placeholder = __webpack_require__(15);

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Popular
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 主页流行游戏部分
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Popular = function (_Component) {
    _inherits(Popular, _Component);

    function Popular(props) {
        _classCallCheck(this, Popular);

        var _this = _possibleConstructorReturn(this, (Popular.__proto__ || Object.getPrototypeOf(Popular)).call(this, props));

        _this.state = {
            loading: true
        };
        return _this;
    }

    _createClass(Popular, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var gameActions = this.props.gameActions;

            gameActions.loadPopularGamesList({
                cb: function cb() {
                    _this2.setState({ loading: false });
                }
            });
        }
    }, {
        key: 'onAddToCartClick',
        value: function onAddToCartClick(game, e) {
            e.preventDefault();
            var cartActions = this.props.cartActions;

            cartActions.addToCart({
                game: game,
                cb: function cb() {
                    console.log('success');
                }
            });
        }
    }, {
        key: 'renderGamesList',
        value: function renderGamesList() {
            var _this3 = this;

            var popularGamesList = this.props.popularGamesList;


            var renderItem = function renderItem(game, index) {
                var imgStyle = {
                    backgroundImage: 'url(' + _api.API_PRO_PREFIX + game.thumb_img + ')'
                };
                return _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/item/' + game.p_id, key: index, className: 'game-card-long games-list-item' },
                    _react2.default.createElement(
                        'div',
                        { className: 'game-card-content' },
                        _react2.default.createElement('div', { className: 'game-img', style: imgStyle }),
                        _react2.default.createElement(
                            'div',
                            { className: 'game-info' },
                            _react2.default.createElement(
                                'h3',
                                { className: 'game-title' },
                                game.name_zh
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'game-current' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'platform' },
                                    game.s_platform
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'version' },
                                    game.s_edition
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'game-price-detail' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'game-price pg-btn-price pg-btn-price__discount' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'price-pre' },
                                        '\uFFE5',
                                        game.market_price
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'price-now' },
                                        '\uFFE5',
                                        game.price
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'addto-cart', onClick: _this3.onAddToCartClick.bind(_this3, game) },
                                        _react2.default.createElement('i', { className: 'fa fa-cart-plus' }),
                                        '\uFFE5',
                                        game.price
                                    )
                                )
                            )
                        )
                    )
                );
            };

            return _react2.default.createElement(
                'div',
                { className: 'games-list func-clearfix' },
                _lodash2.default.map(popularGamesList, renderItem)
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var content = null;
            if (this.state.loading) {
                content = _react2.default.createElement(
                    'div',
                    { className: 'placeholders' },
                    _react2.default.createElement(_Placeholder2.default, { type: 'content' })
                );
            } else {
                content = _react2.default.createElement(
                    'div',
                    null,
                    this.renderGamesList()
                );
            }

            return _react2.default.createElement(
                'section',
                { className: 'home-section home-section-popular' },
                _react2.default.createElement(
                    'div',
                    { className: 'popular-component' },
                    _react2.default.createElement(
                        'div',
                        { className: 'popular-head func-clearfix' },
                        _react2.default.createElement(
                            'h3',
                            { className: 'title' },
                            '\u7545\u9500'
                        ),
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/catalog', className: 'more pg-btn pg-btn__small pg-btn__primary' },
                            '\u67E5\u770B\u66F4\u591A'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'popular-content' },
                        content
                    )
                )
            );
        }
    }]);

    return Popular;
}(_react.Component);

exports.default = Popular;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouter = __webpack_require__(9);

var _lodash = __webpack_require__(6);

var _lodash2 = _interopRequireDefault(_lodash);

var _Placeholder = __webpack_require__(15);

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Special
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 主页特别游戏部分
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Special = function (_Component) {
    _inherits(Special, _Component);

    function Special(props) {
        _classCallCheck(this, Special);

        var _this = _possibleConstructorReturn(this, (Special.__proto__ || Object.getPrototypeOf(Special)).call(this, props));

        _this.state = {
            scroll: 0,
            loading: true
        };
        return _this;
    }

    _createClass(Special, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var gameActions = this.props.gameActions;

            gameActions.loadSpecialGamesList({
                cb: function cb() {
                    _this2.setState({ loading: false });
                }
            });
        }
    }, {
        key: 'onGamesListPreClick',
        value: function onGamesListPreClick() {
            var scroll = this.state.scroll;
            var specialGamesList = this.props.specialGamesList;

            var count = specialGamesList.length;
            if (scroll === 0 || count <= 5) {
                return;
            } else {
                this.setState({
                    scroll: scroll - 1
                });
            }
        }
    }, {
        key: 'onGamesListNextClick',
        value: function onGamesListNextClick() {
            var scroll = this.state.scroll;
            var specialGamesList = this.props.specialGamesList;

            var count = specialGamesList.length;
            if (scroll === count - 5 || count <= 5) {
                return;
            } else {
                this.setState({
                    scroll: scroll + 1
                });
            }
        }
    }, {
        key: 'onAddToCartClick',
        value: function onAddToCartClick(game, e) {
            e.preventDefault();
            var cartActions = this.props.cartActions;

            cartActions.addToCart({
                game: game,
                cb: function cb() {
                    console.log('success');
                }
            });
        }
    }, {
        key: 'renderGamesList',
        value: function renderGamesList() {
            var _this3 = this;

            var scroll = this.state.scroll;
            var specialGamesList = this.props.specialGamesList;


            var gamesListStyle = {
                width: '1728px',
                transform: 'translateX(-' + 216 * scroll + 'px)'
            };
            var renderItem = function renderItem(_game, _index) {
                var imgStyle = {
                    backgroundImage: 'url(' + _api.API_PRO_PREFIX + _game.thumb_img + ')'
                };
                return _react2.default.createElement(
                    _reactRouter.Link,
                    { key: _index, to: '/item/' + _game.p_id, className: 'pg-game-card games-list-item' },
                    _react2.default.createElement('div', { className: 'game-img', style: imgStyle }),
                    _react2.default.createElement(
                        'div',
                        { className: 'game-info' },
                        _react2.default.createElement(
                            'h3',
                            { className: 'game-title' },
                            _game.name_zh
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'platform' },
                            _react2.default.createElement(
                                'label',
                                null,
                                '\u5E73\u53F0\uFF1A'
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'cxt' },
                                _game.s_platform
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'version' },
                            _react2.default.createElement(
                                'label',
                                null,
                                '\u7248\u672C\uFF1A'
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'cxt' },
                                _game.s_edition
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'game-footer' },
                        _react2.default.createElement(
                            'span',
                            { className: 'game-price pg-btn-price pg-btn-price__discount' },
                            _react2.default.createElement(
                                'span',
                                { className: 'price-pre' },
                                '\uFFE5',
                                _game.market_price
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'price-now' },
                                '\uFFE5',
                                _game.price
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'addto-cart', onClick: _this3.onAddToCartClick.bind(_this3, _game) },
                                _react2.default.createElement('i', { className: 'fa fa-cart-plus' }),
                                '\uFFE5',
                                _game.price
                            )
                        )
                    )
                );
            };

            return _react2.default.createElement(
                'div',
                { className: 'games-list func-clearfix', style: gamesListStyle },
                _lodash2.default.map(specialGamesList, renderItem)
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var content = null;
            if (this.state.loading) {
                content = _react2.default.createElement(
                    'div',
                    { className: 'placeholder' },
                    _react2.default.createElement(_Placeholder2.default, { type: 'content' })
                );
            } else {
                content = this.renderGamesList();
            }

            var scroll = this.state.scroll;
            var _props = this.props,
                specialGamesList = _props.specialGamesList,
                specialGamesBg = _props.specialGamesBg;

            var count = specialGamesList.length;

            var preClass = (0, _classnames2.default)({
                'games-nav games-nav-pre': true,
                'disabled': scroll === 0 || count <= 5
            });
            var nextClass = (0, _classnames2.default)({
                'games-nav games-nav-next': true,
                'disabled': scroll === count - 5 || count <= 5
            });
            var specialSectionStyle = {
                backgroundImage: 'url(' + _api.API_PRO_PREFIX + specialGamesBg + ')'
            };
            return _react2.default.createElement(
                'section',
                { className: 'home-section home-section-special', style: specialSectionStyle },
                _react2.default.createElement(
                    'div',
                    { className: 'speical-component' },
                    _react2.default.createElement(
                        'div',
                        { className: 'special-head func-clearfix' },
                        _react2.default.createElement(
                            'h3',
                            { className: 'title' },
                            '\u7279\u522B\u63A8\u8350'
                        ),
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/catalog', className: 'more pg-btn pg-btn__small pg-btn__primary' },
                            '\u67E5\u770B\u66F4\u591A'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'special-content' },
                        _react2.default.createElement(
                            'div',
                            { className: 'games-scroll' },
                            content
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: 'javascript:;', onClick: this.onGamesListPreClick.bind(this), className: preClass },
                            _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: 'javascript:;', onClick: this.onGamesListNextClick.bind(this), className: nextClass },
                            _react2.default.createElement('i', { className: 'fa fa-chevron-right' })
                        )
                    )
                )
            );
        }
    }]);

    return Special;
}(_react.Component);

exports.default = Special;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__(6);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Aside
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 游戏详情页侧边栏
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Aside = function (_Component) {
    _inherits(Aside, _Component);

    function Aside(props) {
        _classCallCheck(this, Aside);

        var _this = _possibleConstructorReturn(this, (Aside.__proto__ || Object.getPrototypeOf(Aside)).call(this, props));

        _this.state = {
            platform: '',
            edition: '',
            platforms: [],
            editions: []
        };
        return _this;
    }

    _createClass(Aside, [{
        key: 'computePlatFormsAndEditions',
        value: function computePlatFormsAndEditions() {
            var gameDetail = this.props.gameDetail;

            var allSales = _lodash2.default.concat(gameDetail.sale, gameDetail.otherSale);
            var platforms = [];
            var editions = [];
            _lodash2.default.each(allSales, function (_sale) {
                // TODO，临时处理后台数据异常，_sale为null
                if (_sale != null) {
                    var _platforms = _sale.s_platform ? _sale.s_platform.split(',') : [];
                    _lodash2.default.each(_platforms, function (_platform) {
                        if (_platform !== '' && _lodash2.default.indexOf(platforms, _platform) === -1) {
                            platforms.push(_platform);
                        }
                    });
                    var _editions = _sale.s_edition ? _sale.s_edition.split(',') : [];
                    _lodash2.default.each(_editions, function (_edition) {
                        if (_edition !== '' && _lodash2.default.indexOf(editions, _edition) === -1) {
                            editions.push(_edition);
                        }
                    });
                }
            });
            this.setState({
                platforms: platforms,
                editions: editions
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var gameDetail = this.props.gameDetail;

            this.computePlatFormsAndEditions();
        }
    }, {
        key: 'onAddToCartClick',
        value: function onAddToCartClick(game) {
            var _props = this.props,
                cartActions = _props.cartActions,
                gameDetail = _props.gameDetail;

            game.p_id = gameDetail.p_id;
            cartActions.addToCart({
                game: game,
                cb: function cb() {
                    console.log('success');
                }
            });
        }

        // 获取商城对应游戏

    }, {
        key: 'getMarketGame',
        value: function getMarketGame() {
            var _state = this.state,
                platform = _state.platform,
                edition = _state.edition;
            var gameDetail = this.props.gameDetail;


            var marketSale = gameDetail.sale;
            var game = null;
            if (platform !== '' && edition !== '') {
                _lodash2.default.each(marketSale, function (_sale) {
                    var _platforms = _sale.s_platform.split(',');
                    var _editions = _sale.s_edition.split(',');
                    if (_lodash2.default.indexOf(_platforms, platform) > -1 && _lodash2.default.indexOf(_editions, edition) > -1) {
                        game = _sale;
                    }
                });
            }
            return game;
        }

        // 商城价格

    }, {
        key: 'renderMarketPrice',
        value: function renderMarketPrice() {
            var game = this.getMarketGame();
            return _react2.default.createElement(
                'div',
                { className: 'game-price func-clearfix' },
                game == null ? null : _react2.default.createElement(
                    'div',
                    { className: 'price' },
                    '\uFFE5',
                    game.price
                )
            );
        }

        // 商城自营游戏

    }, {
        key: 'renderMarketBuy',
        value: function renderMarketBuy() {
            var game = this.getMarketGame();

            return _react2.default.createElement(
                'div',
                { className: 'game-buy func-clearfix' },
                game == null ? null : _react2.default.createElement(
                    'div',
                    { className: 'cart' },
                    _react2.default.createElement(
                        'a',
                        { onClick: this.onAddToCartClick.bind(this, game), href: 'javascript:;', className: 'add-to-cart' },
                        _react2.default.createElement('i', { className: 'fa fa-cart-plus' }),
                        '\u52A0\u5165\u8D2D\u7269\u8F66'
                    )
                )
            );
        }

        // 其他卖家游戏列表

    }, {
        key: 'renderOtherSalesList',
        value: function renderOtherSalesList() {
            var _this2 = this;

            var _state2 = this.state,
                platform = _state2.platform,
                edition = _state2.edition;
            var gameDetail = this.props.gameDetail;


            var otherSale = gameDetail.otherSale;
            var games = [];
            if (platform !== '' && edition !== '') {
                _lodash2.default.each(otherSale, function (_sale) {
                    var _platforms = _sale.s_platform.split(',');
                    var _editions = _sale.s_edition.split(',');
                    if (_lodash2.default.indexOf(_platforms, platform) > -1 && _lodash2.default.indexOf(_editions, edition) > -1) {
                        games.push(_sale);
                    }
                });
            }

            if (games.length === 0) return _react2.default.createElement(
                'p',
                { className: 'empty' },
                '\u6682\u65E0\u5176\u4ED6\u5356\u5BB6'
            );

            var renderSaleItem = function renderSaleItem(sale, index) {
                return _react2.default.createElement(
                    'tr',
                    { key: index, className: 'sale-item' },
                    _react2.default.createElement(
                        'td',
                        { className: 'price' },
                        '\uFFE5',
                        sale.price
                    ),
                    _react2.default.createElement(
                        'td',
                        { className: 'seller' },
                        sale.seller
                    ),
                    _react2.default.createElement(
                        'td',
                        { className: 'addcart' },
                        _react2.default.createElement(
                            'a',
                            { onClick: _this2.onAddToCartClick.bind(_this2, sale), href: 'javascript:;' },
                            '\xA0',
                            _react2.default.createElement('i', { className: 'fa fa-cart-plus' })
                        )
                    )
                );
            };

            return _react2.default.createElement(
                'table',
                { className: 'sellers-table' },
                _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'th',
                            null,
                            '\u4EF7\u683C'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            '\u5356\u5BB6'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            '\u52A0\u5165\u8D2D\u7269\u8F66'
                        )
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    _lodash2.default.map(games, renderSaleItem)
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _state3 = this.state,
                platform = _state3.platform,
                edition = _state3.edition,
                platforms = _state3.platforms,
                editions = _state3.editions;


            return _react2.default.createElement(
                'div',
                { className: 'detail-main-aside' },
                _react2.default.createElement(
                    'div',
                    { className: 'game-prices' },
                    this.renderMarketPrice(),
                    _react2.default.createElement(
                        'div',
                        { className: 'option-select func-clearfix' },
                        _react2.default.createElement(
                            'div',
                            { className: 'game-platform' },
                            _react2.default.createElement(
                                'label',
                                { className: 'label' },
                                '\u5E73\u53F0'
                            ),
                            _react2.default.createElement(
                                'select',
                                { value: platform, className: 'platforms', onChange: function onChange(e) {
                                        return _this3.setState({ platform: e.target.value });
                                    } },
                                _react2.default.createElement(
                                    'option',
                                    { key: 'none', value: '', disabled: true },
                                    '--\u9009\u62E9\u5E73\u53F0--'
                                ),
                                _lodash2.default.map(platforms, function (_p, _i) {
                                    return _react2.default.createElement(
                                        'option',
                                        { key: _i, value: _p },
                                        _p
                                    );
                                })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'game-version' },
                            _react2.default.createElement(
                                'label',
                                { className: 'label' },
                                '\u7248\u672C'
                            ),
                            _react2.default.createElement(
                                'select',
                                { value: edition, className: 'versions', onChange: function onChange(e) {
                                        return _this3.setState({ edition: e.target.value });
                                    } },
                                _react2.default.createElement(
                                    'option',
                                    { key: 'none', disabled: true },
                                    '--\u9009\u62E9\u7248\u672C--'
                                ),
                                _lodash2.default.map(editions, function (_e, _i) {
                                    return _react2.default.createElement(
                                        'option',
                                        { key: _i, value: _e },
                                        _e
                                    );
                                })
                            )
                        )
                    ),
                    this.renderMarketBuy()
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'game-other-sellers' },
                    _react2.default.createElement(
                        'h3',
                        { className: 'title' },
                        '\u5176\u4ED6\u4EF7\u683C\u5356\u5BB6\u6392\u884C'
                    ),
                    this.renderOtherSalesList()
                )
            );
        }
    }]);

    return Aside;
}(_react.Component);

exports.default = Aside;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__(6);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Gallery
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 游戏详情页轮播组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Gallery = function (_Component) {
    _inherits(Gallery, _Component);

    function Gallery(props) {
        _classCallCheck(this, Gallery);

        var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

        _this.state = {
            active: 0
        };
        return _this;
    }

    _createClass(Gallery, [{
        key: 'onPreClick',
        value: function onPreClick() {
            var active = this.state.active;
            var gameDetail = this.props.gameDetail;

            var gallery = gameDetail.gallery;
            var _active = 0;
            if (active === 0) {
                _active = gallery.length - 1;
            } else {
                _active = active - 1;
            }
            this.setState({
                active: _active
            });
        }
    }, {
        key: 'onNextClick',
        value: function onNextClick() {
            var active = this.state.active;
            var gameDetail = this.props.gameDetail;

            var gallery = gameDetail.gallery;
            var _active = 0;
            if (active === gallery.length - 1) {
                _active = 0;
            } else {
                _active = active + 1;
            }
            this.setState({
                active: _active
            });
        }
    }, {
        key: 'onThumbItemClick',
        value: function onThumbItemClick(index) {
            this.setState({
                active: index
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var active = this.state.active;
            var gameDetail = this.props.gameDetail;

            var gallery = gameDetail.gallery;

            var galleryWrapperStyle = {
                backgroundImage: 'url(' + gallery[active] + ')'
            };
            return _react2.default.createElement(
                'div',
                { className: 'item-gallery' },
                _react2.default.createElement(
                    'div',
                    { className: 'item-gallery-wrapper', style: galleryWrapperStyle },
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:;', onClick: this.onPreClick.bind(this), className: 'item-gallery-nav item-gallery-nav-pre' },
                        _react2.default.createElement('i', { className: 'fa fa-chevron-left' }),
                        '\xA0'
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:;', onClick: this.onNextClick.bind(this), className: 'item-gallery-nav item-gallery-nav-next' },
                        _react2.default.createElement('i', { className: 'fa fa-chevron-right' }),
                        '\xA0'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'item-gallery-thumbs' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'thumbs' },
                        _lodash2.default.map(gallery, function (_img, _index) {
                            var itemStyle = {
                                backgroundImage: 'url(' + _img + ')'
                            };
                            var thumbItemClass = (0, _classnames2.default)({
                                'thumbs-item': true,
                                'active': _index === active
                            });
                            return _react2.default.createElement(
                                'li',
                                { key: _index, className: thumbItemClass, style: itemStyle },
                                _react2.default.createElement('a', { className: 'thumbs-item-mask', href: 'javascript:;', onClick: _this2.onThumbItemClick.bind(_this2, _index) })
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Gallery;
}(_react.Component);

exports.default = Gallery;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Divide
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 分割线
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author xuming(1522188485@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Divide = function (_Component) {
    _inherits(Divide, _Component);

    function Divide() {
        _classCallCheck(this, Divide);

        return _possibleConstructorReturn(this, (Divide.__proto__ || Object.getPrototypeOf(Divide)).apply(this, arguments));
    }

    _createClass(Divide, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "or" },
                _react2.default.createElement("div", null)
            );
        }
    }]);

    return Divide;
}(_react.Component);

exports.default = Divide;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Hotkeys
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 快捷登录键
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author xuming(1522188485@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Hotkeys = function (_Component) {
    _inherits(Hotkeys, _Component);

    function Hotkeys() {
        _classCallCheck(this, Hotkeys);

        return _possibleConstructorReturn(this, (Hotkeys.__proto__ || Object.getPrototypeOf(Hotkeys)).apply(this, arguments));
    }

    _createClass(Hotkeys, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { id: "connect" },
                _react2.default.createElement(
                    "a",
                    null,
                    _react2.default.createElement("i", { className: "fa fa-qq" }),
                    _react2.default.createElement(
                        "span",
                        null,
                        "QQ\u767B\u5F55"
                    )
                ),
                _react2.default.createElement(
                    "a",
                    null,
                    _react2.default.createElement("i", { className: "fa fa-weixin", "aria-hidden": "true" }),
                    _react2.default.createElement(
                        "span",
                        null,
                        "\u5FAE\u4FE1\u767B\u5F55"
                    )
                ),
                _react2.default.createElement(
                    "a",
                    null,
                    _react2.default.createElement("i", null),
                    _react2.default.createElement(
                        "span",
                        null,
                        "steam\u767B\u5F55"
                    )
                )
            );
        }
    }]);

    return Hotkeys;
}(_react.Component);

exports.default = Hotkeys;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class LoginHead
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 注册登录标题
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author xuming(1522188485@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var LoginHeader = function (_Component) {
    _inherits(LoginHeader, _Component);

    function LoginHeader() {
        _classCallCheck(this, LoginHeader);

        return _possibleConstructorReturn(this, (LoginHeader.__proto__ || Object.getPrototypeOf(LoginHeader)).apply(this, arguments));
    }

    _createClass(LoginHeader, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "h1",
                { id: "h" },
                "\u767B\u5F55"
            );
        }
    }]);

    return LoginHeader;
}(_react.Component);

exports.default = LoginHeader;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Message = __webpack_require__(19);

var _RegTest = __webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Register
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 注册
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author xuming(1522188485@qq.com), wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Register = function (_Component) {
    _inherits(Register, _Component);

    function Register() {
        _classCallCheck(this, Register);

        return _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).apply(this, arguments));
    }

    _createClass(Register, [{
        key: 'checkForm',
        value: function checkForm() {
            var email = this.refs.email.value;
            // const username = this.refs.username.value;
            var password = this.refs.password.value;
            // const repeatPassword = this.refs.repeatPassword.value;
            if (!(0, _RegTest.isEmail)(email)) {
                _Message.message.warning('邮箱格式不正确');
                return false;
            }
            // if (username.trim() === '') {
            //     message.warning('用户名不能为空');
            //     return false;
            // }
            if (password.trim() === '') {
                _Message.message.warning('密码不能为空');
                return false;
            }
            // if (password !== repeatPassword) {
            //     message.warning('两次密码输入不相同');
            //     return false;
            // }
            return true;
        }
    }, {
        key: 'onRegisterClick',
        value: function onRegisterClick() {
            var _props = this.props,
                router = _props.router,
                userActions = _props.userActions;


            if (!this.checkForm()) return;

            var email = this.refs.email.value;
            // const username = this.refs.username.value;
            var password = this.refs.password.value;
            // const repeatPassword = this.refs.repeatPassword.value;
            userActions.userRegister({
                data: {
                    email: email,

                    password: password

                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { id: 'register' },
                _react2.default.createElement(
                    'h2',
                    null,
                    '\u6CE8\u518C'
                ),
                _react2.default.createElement(
                    'form',
                    { onSubmit: function onSubmit(e) {
                            return e.preventDefault();
                        } },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('i', { className: 'fa fa-envelope' }),
                        _react2.default.createElement('input', { ref: 'email', type: 'text', className: 'input-box', placeholder: '*\u90AE\u7BB1' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'data-icon': 'required' },
                        _react2.default.createElement('i', { className: 'fa fa-key' }),
                        _react2.default.createElement('input', { ref: 'password', type: 'password', className: 'input-box', placeholder: '*\u5BC6\u7801' })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('input', { type: 'checkbox', id: 'checkbox_1', name: 'check', className: 'checkbox' }),
                        _react2.default.createElement('label', { htmlFor: 'checkbox_1' }),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'checkbox_1' },
                            ' \u540C\u610F\u4F7F\u7528\u90AE\u7BB1\u63A5\u53D7\u76F8\u5173\u63A8\u9001'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('input', { type: 'checkbox', id: 'checkbox_2', name: 'check', className: 'checkbox' }),
                        _react2.default.createElement('label', { htmlFor: 'checkbox_2' }),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'checkbox_2' },
                            ' \u5DF2\u9605\u8BFB\u4E14\u540C\u610F\u76F8\u5173',
                            _react2.default.createElement(
                                'a',
                                { href: '' },
                                '\u670D\u52A1\u6761\u6B3E'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'button',
                            { className: 'button', onClick: this.onRegisterClick.bind(this) },
                            '\u6CE8\u518C'
                        )
                    )
                )
            );
        }
    }]);

    return Register;
}(_react.Component);

exports.default = Register;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Message = __webpack_require__(19);

var _RegTest = __webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class ForgetPassword
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 忘记密码
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author zhaojunzhe xuming(1429595365@qq.com,1522188485@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// import code from './code';

var ForgetPassword = function (_Component) {
    _inherits(ForgetPassword, _Component);

    function ForgetPassword() {
        _classCallCheck(this, ForgetPassword);

        return _possibleConstructorReturn(this, (ForgetPassword.__proto__ || Object.getPrototypeOf(ForgetPassword)).apply(this, arguments));
    }

    _createClass(ForgetPassword, [{
        key: 'checkForm',
        value: function checkForm() {
            // message.warning('邮箱格式不正确');

            var email = this.refs.email.value;
            var password = this.refs.password.value;
            var confirm_pwd = this.refs.confirm_pwd.value;
            var code = this.refs.code.value;

            if (!(0, _RegTest.isEmail)(email)) {
                _Message.message.warning('邮箱格式不正确！');
                return false;
            }
            if (password.trim() === '' || confirm_pwd.trim() === '') {
                _Message.message.warning('密码不能为空！');
                return false;
            }
            if (password.trim() !== confirm_pwd.trim()) {
                _Message.message.warning('两次密码不一致！');
                return false;
            }
            if (code.trim() === '') {
                _Message.message.warning('验证码不正确！');
                return false;
            }

            return true;
        }
    }, {
        key: 'onFindPaswClick',
        value: function onFindPaswClick() {
            var _props = this.props,
                router = _props.router,
                userActions = _props.userActions;


            if (!this.checkForm()) return;

            var code = this.refs.code.value;
            var email = this.refs.email.value;
            var password = this.refs.password.value;
            var confirm_pwd = this.refs.confirm_pwd.value;
            userActions.userResetPasw({
                code: code,
                email: email,
                password: password,
                confirm_pwd: confirm_pwd
            });
        }
    }, {
        key: 'onGetCodeClick',
        value: function onGetCodeClick() {
            var _props2 = this.props,
                router = _props2.router,
                userActions = _props2.userActions;

            var email = this.refs.email.value;
            userActions.getPwdCode({ 'email': email });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'forgetPassword-wrapper func-clearfix' },
                _react2.default.createElement(
                    'section',
                    { id: 'password' },
                    _react2.default.createElement(
                        'h1',
                        { className: 'tt' },
                        '\u5FD8\u8BB0\u5BC6\u7801\uFF1F'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'bl-content' },
                        _react2.default.createElement(
                            'p',
                            null,
                            '\u4E0D\u7528\u62C5\u5FC3\uFF01\u53EF\u4EE5\u901A\u8FC7\u4F60\u7684\u6CE8\u518C\u90AE\u7BB1\u8BBE\u7F6E\u65B0\u7684\u5BC6\u7801\u3002'
                        ),
                        _react2.default.createElement(
                            'form',
                            { className: 'frm-wrapper', onSubmit: function onSubmit(e) {
                                    return e.preventDefault();
                                } },
                            _react2.default.createElement('input', { type: 'hidden' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'frm-item-required' },
                                _react2.default.createElement('i', { className: 'fa fa-envelope' }),
                                _react2.default.createElement('input', { ref: 'email', type: 'text', className: 'input-box', placeholder: '\u6CE8\u518C\u90AE\u7BB1' }),
                                _react2.default.createElement(
                                    'button',
                                    { className: 'btn-sendCode', onClick: this.onGetCodeClick.bind(this) },
                                    '\u83B7\u53D6\u9A8C\u8BC1\u7801'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'frm-item-required' },
                                _react2.default.createElement('i', { className: 'fa fa-key' }),
                                _react2.default.createElement('input', { ref: 'password', className: 'input-box', type: 'password', placeholder: '\u65B0\u5BC6\u7801' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'frm-item-required' },
                                _react2.default.createElement('i', { className: 'fa fa-key' }),
                                _react2.default.createElement('input', { ref: 'confirm_pwd', className: 'input-box', type: 'password', placeholder: '\u786E\u8BA4\u5BC6\u7801' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'frm-item-required' },
                                _react2.default.createElement('i', { className: 'fa fa-info' }),
                                _react2.default.createElement('input', { ref: 'code', className: 'input-box', type: 'text', placeholder: '\u9A8C\u8BC1\u7801' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'frm-item' },
                                _react2.default.createElement(
                                    'button',
                                    { type: 'submit', className: 'btn-login', onClick: this.onFindPaswClick.bind(this) },
                                    'Send'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ForgetPassword;
}(_react.Component);

exports.default = ForgetPassword;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _Message = __webpack_require__(19);

var _RegTest = __webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Will on 2017/4/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
/**
 * @class Login
 * @extends Component
 * @desc 登入
 * @author xuming(1522188485@qq.com), wangyong(1223427693@qq.com)
 */


var Log = function (_Component) {
    _inherits(Log, _Component);

    function Log() {
        _classCallCheck(this, Log);

        return _possibleConstructorReturn(this, (Log.__proto__ || Object.getPrototypeOf(Log)).apply(this, arguments));
    }

    _createClass(Log, [{
        key: 'checkForm',
        value: function checkForm() {
            var email = this.refs.email.value;
            var password = this.refs.password.value;
            if (!(0, _RegTest.isEmail)(email)) {
                _Message.message.warning('邮箱格式不正确');
                return false;
            }
            if (password.trim() === '') {
                _Message.message.warning('密码不能为空');
                return false;
            }
            return true;
        }
    }, {
        key: 'onLoginClick',
        value: function onLoginClick() {
            var _props = this.props,
                router = _props.router,
                userActions = _props.userActions,
                cartActions = _props.cartActions;


            if (!this.checkForm()) return;

            var email = this.refs.email.value;
            var password = this.refs.password.value;
            userActions.userLogin({
                data: {
                    email: email,
                    password: password
                },
                cb: function cb() {
                    userActions.loadUserInfo();
                    // cartActions.loadCartList();
                    router.push('/');
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { id: 'login' },
                _react2.default.createElement(
                    'h2',
                    null,
                    '\u767B\u5F55'
                ),
                _react2.default.createElement(
                    'form',
                    { onSubmit: function onSubmit(e) {
                            return e.preventDefault();
                        } },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('i', { className: 'fa fa-envelope' }),
                        _react2.default.createElement('input', { ref: 'email', type: 'text', className: 'input-box', placeholder: '*\u90AE\u7BB1' })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('i', { className: 'fa fa-key' }),
                        _react2.default.createElement('input', { ref: 'password', type: 'password', className: 'input-box', placeholder: '*\u5BC6\u7801' })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('input', { type: 'checkbox', id: 'checkbox_3', className: 'checkbox' }),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'checkbox_3' },
                            ' \u8BB0\u4F4F\u5BC6\u7801'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'label',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/login/forget-password' },
                                '\u5FD8\u8BB0\u5BC6\u7801'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'log_sub_f' },
                        _react2.default.createElement(
                            'button',
                            { className: 'button', onClick: this.onLoginClick.bind(this) },
                            '\u767B\u5F55'
                        )
                    )
                )
            );
        }
    }]);

    return Log;
}(_react.Component);

exports.default = Log;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _numeral = __webpack_require__(96);

var _numeral2 = _interopRequireDefault(_numeral);

var _lodash = __webpack_require__(6);

var _lodash2 = _interopRequireDefault(_lodash);

var _Message = __webpack_require__(19);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Nav
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 导航栏
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var HeaderCart = function (_Component) {
    _inherits(HeaderCart, _Component);

    function HeaderCart(props) {
        _classCallCheck(this, HeaderCart);

        var _this = _possibleConstructorReturn(this, (HeaderCart.__proto__ || Object.getPrototypeOf(HeaderCart)).call(this, props));

        _this.state = {
            loading: true
        };
        return _this;
    }

    _createClass(HeaderCart, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var cartActions = this.props.cartActions;

            cartActions.loadCartList({
                cb: function cb() {
                    _this2.setState({ loading: false });
                }
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this3 = this;

            var userInfo = this.props.userInfo;

            var nextUserInfo = nextProps.userInfo;
            var cartActions = nextProps.cartActions;

            if (!_lodash2.default.isEqual(userInfo, nextUserInfo)) {
                this.setState({ loading: true });
                cartActions.loadCartList({
                    cb: function cb() {
                        _this3.setState({ loading: false });
                    }
                });
            }
        }
    }, {
        key: 'onUpdateNumberClick',
        value: function onUpdateNumberClick(game, type) {
            var cartActions = this.props.cartActions;

            var number = parseInt(game.number);
            switch (type) {
                case 'plus':
                    number++;
                    break;
                case 'minus':
                    number--;
                    break;
                default:
                    break;
            }
            if (number === 0) {
                cartActions.removeFromCart({
                    game: game
                });
            } else {
                cartActions.updateCartNumber({
                    game: game,
                    number: number
                });
            }
        }
    }, {
        key: 'onRemoveFromCartClick',
        value: function onRemoveFromCartClick(game) {
            var cartActions = this.props.cartActions;

            cartActions.removeFromCart({
                game: game
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var cartList = this.props.cartList;

            var cart = null;
            if (this.state.loading) {
                cart = _react2.default.createElement(
                    'div',
                    { className: 'header-cart header-cart-loading' },
                    _react2.default.createElement(
                        'div',
                        { className: 'loading' },
                        '\xA0',
                        _react2.default.createElement('i', { className: 'fa fa-spinner' })
                    )
                );
            } else if (cartList.length === 0) {
                cart = _react2.default.createElement(
                    'div',
                    { className: 'header-cart header-cart-empty' },
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:;', className: 'link' },
                        _react2.default.createElement('i', { className: 'fa fa-shopping-cart' }),
                        _react2.default.createElement(
                            'span',
                            { className: 'cart-num' },
                            '0'
                        )
                    )
                );
            } else {
                var renderItem = function renderItem(game, index) {
                    var imgStyle = {
                        backgroundImage: 'url(' + _api.API_PRO_PREFIX + game.thumbnail + ')'
                    };
                    return _react2.default.createElement(
                        'li',
                        { key: index, className: 'item' },
                        _react2.default.createElement(_reactRouter.Link, { to: '/item/' + game.p_id, className: 'game-img', style: imgStyle }),
                        _react2.default.createElement(
                            'div',
                            { className: 'game-detail' },
                            _react2.default.createElement(
                                'p',
                                { className: 'title' },
                                game.name_zh
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'current' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'platform' },
                                    game.s_platform
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'version' },
                                    game.s_edition
                                )
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'price' },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    '\uFFE5',
                                    game.price,
                                    ' x ',
                                    game.number
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'remove' },
                                    _react2.default.createElement(
                                        'a',
                                        { title: '\u6DFB\u52A0\u4E00\u4E2A', onClick: _this4.onUpdateNumberClick.bind(_this4, game, 'plus'), href: 'javascript:;' },
                                        _react2.default.createElement('i', { className: 'fa fa-plus' })
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { title: '\u5220\u9664\u4E00\u4E2A', onClick: _this4.onUpdateNumberClick.bind(_this4, game, 'minus'), href: 'javascript:;' },
                                        _react2.default.createElement('i', { className: 'fa fa-minus' })
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { title: '\u4ECE\u8D2D\u7269\u8F66\u5220\u9664', onClick: _this4.onRemoveFromCartClick.bind(_this4, game), href: 'javascript:;' },
                                        _react2.default.createElement('i', { className: 'fa fa-trash' })
                                    )
                                )
                            )
                        )
                    );
                };
                var totalPrice = function () {
                    var total = 0;
                    _lodash2.default.each(cartList, function (_item) {
                        total += parseFloat(_item.price * _item.number);
                    });
                    return (0, _numeral2.default)(total).format('0.00');
                }();
                var totalNum = function () {
                    var total = 0;
                    _lodash2.default.each(cartList, function (_item) {
                        total += parseInt(_item.number);
                    });
                    return total;
                }();
                cart = _react2.default.createElement(
                    'div',
                    { className: 'header-cart' },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/cart', className: 'link' },
                        _react2.default.createElement('i', { className: 'fa fa-shopping-cart' }),
                        _react2.default.createElement(
                            'span',
                            { className: 'cart-num' },
                            totalNum
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'drop-items' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'cart-items' },
                            _lodash2.default.map(cartList, renderItem)
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'checkout' },
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/cart', className: 'btn' },
                                _react2.default.createElement('i', { className: 'fa fa-shopping-cart' }),
                                '\u786E\u8BA4\u4E0B\u5355'
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'total-price' },
                                '\uFFE5',
                                totalPrice
                            )
                        )
                    )
                );
            }

            return cart;
        }
    }]);

    return HeaderCart;
}(_react.Component);

var HeaderNav = function (_Component2) {
    _inherits(HeaderNav, _Component2);

    function HeaderNav(props) {
        _classCallCheck(this, HeaderNav);

        var _this5 = _possibleConstructorReturn(this, (HeaderNav.__proto__ || Object.getPrototypeOf(HeaderNav)).call(this, props));

        _this5.state = {
            loading: true
        };
        return _this5;
    }

    _createClass(HeaderNav, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this6 = this;

            var userActions = this.props.userActions;

            userActions.loadUserInfo({
                cb: function cb() {
                    return _this6.setState({ loading: false });
                }
            });
        }
    }, {
        key: 'onLogoutClick',
        value: function onLogoutClick() {
            var _props = this.props,
                userActions = _props.userActions,
                cartActions = _props.cartActions,
                router = _props.router;

            userActions.userLogout({
                cb: function cb() {
                    userActions.loadUserInfo();
                    // cartActions.loadCartList();
                    router.push('/login');
                }
            });
        }

        // 搜索框回车事件

    }, {
        key: 'onSearchKeyUp',
        value: function onSearchKeyUp(e) {
            var _props2 = this.props,
                router = _props2.router,
                searchActions = _props2.searchActions;

            var keyCode = e.keyCode;
            var value = e.target.value.trim();
            var search = this.refs.search;
            if (keyCode !== 13 || value === '') return;
            searchActions.updateSearchQuery({
                query: value,
                cb: function cb() {
                    router.push('/search/0/0/0');
                    search.value = '';
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var userInfo = this.props.userInfo;


            var account = null;

            if (this.state.loading) {
                account = _react2.default.createElement(
                    'div',
                    { className: 'nav-item loading' },
                    '\xA0',
                    _react2.default.createElement('i', { className: 'fa fa-spinner' })
                );
            } else if (userInfo == null) {
                account = _react2.default.createElement(
                    'div',
                    { className: 'nav-item logout' },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/login' },
                        _react2.default.createElement('i', { className: 'fa fa-user' }),
                        _react2.default.createElement(
                            'span',
                            { className: 'text' },
                            '\u767B\u5F55'
                        )
                    )
                );
            } else {
                account = _react2.default.createElement(
                    'div',
                    { className: 'nav-item login' },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/account/details' },
                        _react2.default.createElement('img', { className: 'acc-icon', src: 'http://dskhvldhwok3h.cloudfront.net/assets/fe/images/avatar-90fda28ac2f803f1c30ad92f6ea22858.jpg', alt: '' }),
                        _react2.default.createElement(
                            'span',
                            { className: 'acc-name' },
                            userInfo.username
                        )
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'drop-items' },
                        _react2.default.createElement(
                            'li',
                            { className: 'item' },
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/account/details' },
                                _react2.default.createElement('i', { className: 'fa fa-user' }),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'text' },
                                    '\u6211\u7684\u8D26\u6237'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'item' },
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/account/orders' },
                                _react2.default.createElement('i', { className: 'fa fa-list' }),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'text' },
                                    '\u6211\u7684\u8BA2\u5355'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'item' },
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/account/sales' },
                                _react2.default.createElement('i', { className: 'fa fa-gg' }),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'text' },
                                    '\u9500\u552E\u6E38\u620F'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'item' },
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/account/services' },
                                _react2.default.createElement('i', { className: 'fa fa-smile-o' }),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'text' },
                                    '\u5BA2\u670D\u4E2D\u5FC3'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'item' },
                            _react2.default.createElement(
                                'a',
                                { href: 'javascript:;', onClick: this.onLogoutClick.bind(this) },
                                _react2.default.createElement('i', { className: 'fa fa-sign-out' }),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'text' },
                                    '\u6CE8\u9500'
                                )
                            )
                        )
                    )
                );
            }

            return _react2.default.createElement(
                'div',
                { className: 'header-nav' },
                _react2.default.createElement(
                    'nav',
                    { className: 'nav-wrapper' },
                    _react2.default.createElement(
                        'div',
                        { className: 'nav-item games' },
                        _react2.default.createElement(
                            'a',
                            { href: 'javascript:;' },
                            _react2.default.createElement('i', { className: 'fa fa-gamepad' }),
                            _react2.default.createElement(
                                'span',
                                { className: 'text' },
                                '\u7535\u8111\u6E38\u620F'
                            )
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'drop-items' },
                            _react2.default.createElement(
                                'li',
                                { className: 'item' },
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { to: '/catalog' },
                                    _react2.default.createElement('i', { className: 'fa fa-certificate' }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'text' },
                                        '\u7C7B\u578B'
                                    )
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'item-more' },
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'more-item' },
                                        _react2.default.createElement(
                                            _reactRouter.Link,
                                            { to: '/catalog/pcgame/risk/all?sort=price', href: 'javascript:;' },
                                            '\u5192\u9669'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'more-item' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'javascript:;' },
                                            '\u52A8\u4F5C'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'more-item' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'javascript:;' },
                                            '\u5C04\u51FB'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'more-item' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'javascript:;' },
                                            '\u7B56\u7565'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'more-item' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'javascript:;' },
                                            '\u6A21\u62DF'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'more-item' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'javascript:;' },
                                            '\u4F53\u80B2'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'more-item' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'javascript:;' },
                                            '\u7ADE\u901F'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'more-item' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'javascript:;' },
                                            '\u89D2\u8272\u626E\u6F14'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'more-item' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'javascript:;' },
                                            '\u72EC\u7ACB'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'more-item' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'javascript:;' },
                                            '\u4F11\u95F2'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'item' },
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { to: '/catalog' },
                                    _react2.default.createElement('i', { className: 'fa fa-certificate' }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'text' },
                                        'Steam'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'item' },
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { to: '/catalog' },
                                    _react2.default.createElement('i', { className: 'fa fa-certificate' }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'text' },
                                        'Uplay'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'item' },
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { to: '/catalog' },
                                    _react2.default.createElement('i', { className: 'fa fa-certificate' }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'text' },
                                        'Origin'
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'nav-item deals' },
                        _react2.default.createElement(
                            'a',
                            { href: 'javascript:;' },
                            _react2.default.createElement('i', { className: 'fa fa-th-large' }),
                            _react2.default.createElement(
                                'span',
                                { className: 'text' },
                                '\u6E38\u620F\u5361'
                            )
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'drop-items' },
                            _react2.default.createElement(
                                'li',
                                { className: 'item' },
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:;' },
                                    _react2.default.createElement('i', { className: 'fa fa-certificate' }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'text' },
                                        'Steam'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'item' },
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:;' },
                                    _react2.default.createElement('i', { className: 'fa fa-certificate' }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'text' },
                                        'PlayStation'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'item' },
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:;' },
                                    _react2.default.createElement('i', { className: 'fa fa-certificate' }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'text' },
                                        'Google Play'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'item' },
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:;' },
                                    _react2.default.createElement('i', { className: 'fa fa-certificate' }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'text' },
                                        'Itunes'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'item' },
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:;' },
                                    _react2.default.createElement('i', { className: 'fa fa-certificate' }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'text' },
                                        'Nintendo'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'item' },
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:;' },
                                    _react2.default.createElement('i', { className: 'fa fa-certificate' }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'text' },
                                        'Karma\xA0Koin'
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'nav-item deals' },
                        _react2.default.createElement(
                            'a',
                            { href: 'javascript:;' },
                            _react2.default.createElement('i', { className: 'fa fa-strikethrough' }),
                            _react2.default.createElement(
                                'span',
                                { className: 'text' },
                                '\u6298\u6263'
                            )
                        )
                    ),
                    account,
                    _react2.default.createElement(
                        'div',
                        { className: 'search' },
                        _react2.default.createElement(
                            'div',
                            { className: 'search-wrapper' },
                            _react2.default.createElement('input', { ref: 'search', placeholder: '\u641C\u7D22\u6E38\u620F', onKeyUp: this.onSearchKeyUp.bind(this), type: 'text', className: 'input' }),
                            _react2.default.createElement(
                                'a',
                                { className: 'icon' },
                                _react2.default.createElement('i', { className: 'fa fa-search' }),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'text' },
                                    '\xA0'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return HeaderNav;
}(_react.Component);

var Nav = function (_Component3) {
    _inherits(Nav, _Component3);

    function Nav() {
        _classCallCheck(this, Nav);

        return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
    }

    _createClass(Nav, [{
        key: 'renderHeaderLogo',
        value: function renderHeaderLogo() {
            return _react2.default.createElement(
                'div',
                { className: 'header-logo' },
                _react2.default.createElement(_reactRouter.Link, { className: 'link', to: '/' })
            );
        }
    }, {
        key: 'renderHeaderCart',
        value: function renderHeaderCart() {
            return _react2.default.createElement(HeaderCart, this.props);
        }
    }, {
        key: 'renderHeaderNav',
        value: function renderHeaderNav() {
            return _react2.default.createElement(HeaderNav, this.props);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'header',
                { className: 'header' },
                _react2.default.createElement(
                    'div',
                    { className: 'header-wrapper' },
                    this.renderHeaderLogo(),
                    this.renderHeaderCart(),
                    this.renderHeaderNav()
                )
            );
        }
    }]);

    return Nav;
}(_react.Component);

exports.default = Nav;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by zhaojunzhe on 2017/5/23.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SearchHeader = function (_Component) {
    _inherits(SearchHeader, _Component);

    function SearchHeader() {
        _classCallCheck(this, SearchHeader);

        return _possibleConstructorReturn(this, (SearchHeader.__proto__ || Object.getPrototypeOf(SearchHeader)).apply(this, arguments));
    }

    _createClass(SearchHeader, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var searchActions = this.props.searchActions;

            searchActions.loadAttributeList();
        }
    }, {
        key: 'sortByString',
        value: function sortByString(str, e) {
            var searchActions = this.props.searchActions;

            e.stopPropagation();
            if (str === "priceDown") {
                searchActions.loadSearchList({ text: this.props.searchQuery, price: 'price_desc' });
            } else if (str === "priceUp") {
                searchActions.loadSearchList({ text: this.props.searchQuery, price: 'price_asc' });
            }
        }
    }, {
        key: 'todo',
        value: function todo(id, e) {
            e.stopPropagation();
            var router = this.props.router;
            var searchActions = this.props.searchActions;

            if (id === "category") {
                var category = e.target.getAttribute('value');
                searchActions.changeTypes(category, 'category');

                var categorys = this.props.changeType.category;
                var types = this.props.changeType.type;
                var platforms = this.props.changeType.platform;
                var path = '/catalog/' + categorys + '/' + types + '/' + platforms;

                router.push(path);
            } else if (id === 'type') {
                var type = e.target.getAttribute('value');
                searchActions.changeTypes(type, 'type');

                var _categorys = this.props.changeTypes.category;
                var _types = this.props.changeTypes.type;
                var _platforms = this.props.changeTypes.platform;
                console.log(this.props.changeTypes);
                searchActions.loadSearchList({ text: this.props.searchQuery, 'type': _types, 'platform': _platforms });
                // const path=`/catalog/${categorys}/${types}/${platforms}`;
                //
                //
                // router.push(path);
            } else if (id === 'platform') {
                var platform = e.target.getAttribute('value');
                searchActions.changeTypes(platform, 'platform');

                var _categorys2 = this.props.changeTypes.category;
                var _types2 = this.props.changeTypes.type;
                var _platforms2 = this.props.changeTypes.platform;
                console.log(this.props.changeTypes);
                searchActions.loadSearchList({ text: this.props.searchQuery, 'type': _types2, 'platform': _platforms2 });
                // const path=`/catalog/${categorys}/${types}/${platforms}`;
                //
                // router.push(path);
            }

            //const path=`/catalog/${category}/${type}/${platform}`;
            //router.push(path);
        }
    }, {
        key: 'render',
        value: function render() {
            var searchText = this.props.searchQuery;
            var that = this;
            var types = this.props.loadAttributeList[3];
            var platforms = this.props.loadAttributeList[2];
            var type = [];
            var platform = [];
            console.log(this.props);
            if (types) {
                for (var x in types.child) {
                    type.push(_react2.default.createElement(
                        'li',
                        { key: x },
                        _react2.default.createElement(
                            'label',
                            null,
                            _react2.default.createElement('input', { type: 'radio', name: 'type', value: x }),
                            types.child[x]
                        )
                    ));
                }
            }

            if (platforms) {
                for (var _x in platforms.child) {
                    platform.push(_react2.default.createElement(
                        'li',
                        { key: _x },
                        _react2.default.createElement(
                            'label',
                            null,
                            _react2.default.createElement('input', { type: 'radio', name: 'platforms', value: _x }),
                            platforms.child[_x]
                        )
                    ));
                }
            }
            return _react2.default.createElement(
                'div',
                { className: 'container catalog-container' },
                _react2.default.createElement(
                    'header',
                    { className: 'bl-top' },
                    _react2.default.createElement(
                        'h1',
                        { className: 'catalogTitles' },
                        _react2.default.createElement('i', { className: 'icon' }),
                        'Results For:',
                        _react2.default.createElement(
                            'span',
                            { className: 'searchText' },
                            searchText
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'bar-filter' },
                        _react2.default.createElement(
                            'div',
                            { className: 'bar-filter-item' },
                            _react2.default.createElement(
                                'p',
                                { className: 'tt ' },
                                '\u5546\u54C1\u79CD\u7C7B'
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'drop-item', onClick: that.todo.bind(that, 'category') },
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'label',
                                        null,
                                        _react2.default.createElement('input', { type: 'radio', name: 'category', value: 'all' }),
                                        '\u5168\u90E8'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'label',
                                        null,
                                        _react2.default.createElement('input', { type: 'radio', name: 'category', value: 'pcgame' }),
                                        '\u7535\u8111\u6E38\u620F'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'label',
                                        null,
                                        _react2.default.createElement('input', { type: 'radio', name: 'category', value: 'gameCard' }),
                                        '\u6E38\u620F\u5361'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'bar-filter-item' },
                            _react2.default.createElement(
                                'p',
                                { className: 'tt' },
                                '\u7C7B\u578B'
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'drop-item', onClick: that.todo.bind(that, 'type') },
                                type
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'bar-filter-item' },
                            _react2.default.createElement(
                                'p',
                                { className: 'tt' },
                                '\u5E73\u53F0'
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'drop-item', onClick: that.todo.bind(that, 'platform') },
                                platform
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'bar-filter-order' },
                            _react2.default.createElement(
                                'p',
                                null,
                                '\u6392\u5E8F\uFF1A'
                            ),
                            _react2.default.createElement(
                                'ul',
                                null,
                                _react2.default.createElement(
                                    'li',
                                    { onClick: that.sortByString.bind(that, 'priceDown') },
                                    _react2.default.createElement(
                                        'a',
                                        null,
                                        '\u4EF7\u683C\u964D\u5E8F'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { onClick: that.sortByString.bind(that, 'priceUp') },
                                    _react2.default.createElement(
                                        'a',
                                        null,
                                        '\u4EF7\u683C\u5347\u5E8F'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return SearchHeader;
}(_react.Component);

exports.default = SearchHeader;

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Pagination = __webpack_require__(26);

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by zhaojunzhe on 2017/5/23.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var RenderMore = function (_Component) {
    _inherits(RenderMore, _Component);

    function RenderMore(props) {
        _classCallCheck(this, RenderMore);

        var _this = _possibleConstructorReturn(this, (RenderMore.__proto__ || Object.getPrototypeOf(RenderMore)).call(this, props));

        _this.state = {
            current: 1,
            pageSize: 2
        };
        return _this;
    }

    _createClass(RenderMore, [{
        key: 'onPaginationChange',
        value: function onPaginationChange(option, currentPage) {
            var searchActions = this.props.searchActions;

            this.setState({ current: currentPage });
            var categorys = this.props.changeTypes.category;
            var types = this.props.changeTypes.type;
            var platforms = this.props.changeTypes.platform;
            var perpage = this.props.getSearchPerpage;
            console.log('改变');
            searchActions.loadSearchList({ text: this.props.searchQuery, 'type': types, 'platform': platforms, 'page': option, 'perpage': perpage });
        }
    }, {
        key: 'choosePerpage',
        value: function choosePerpage(e) {
            var searchActions = this.props.searchActions;

            var perpage = e.currentTarget.value;
            var categorys = this.props.changeTypes.category;
            var types = this.props.changeTypes.type;
            var platforms = this.props.changeTypes.platform;
            searchActions.changePerpage({ 'page': e.currentTarget.value });

            searchActions.loadSearchList({ text: this.props.searchQuery, 'type': types, 'platform': platforms, 'perpage': e.currentTarget.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var that = this;
            var total = that.props.total.totalpage;
            var perpage = that.props.getSearchPerpage;
            return _react2.default.createElement(
                'div',
                { className: 'container-footer' },
                _react2.default.createElement(
                    'div',
                    { className: 'order-pagination' },
                    _react2.default.createElement(_Pagination2.default, { pageSize: perpage, total: total * perpage, onChange: this.onPaginationChange.bind(this) })
                )
            );
        }
    }]);

    return RenderMore;
}(_react.Component);

exports.default = RenderMore;

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by zhaojunzhe on 2017/5/23.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SearchProduct = function (_Component) {
    _inherits(SearchProduct, _Component);

    function SearchProduct(props) {
        _classCallCheck(this, SearchProduct);

        return _possibleConstructorReturn(this, (SearchProduct.__proto__ || Object.getPrototypeOf(SearchProduct)).call(this, props));
    }

    _createClass(SearchProduct, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var searchActions = this.props.searchActions;

            searchActions.loadSearchList({ text: this.props.searchQuery });
        }
    }, {
        key: 'handleClick',
        value: function handleClick(id, e) {
            e.stopPropagation();
            var router = this.props.router;

            var path = '/item/' + id;
            //browserHistor.push(path);
            router.push(path);
            console.log(id);
        }
    }, {
        key: 'addToCartClick',
        value: function addToCartClick(game, e) {
            e.preventDefault();
            var cartActions = this.props.cartActions;

            console.log(game);
            cartActions.addToCart({
                game: game,
                cb: function cb() {
                    console.log('success');
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var result = this.props.loadSearchList;
            console.log(result);
            var that = this;
            var items = result.map(function (item, index) {
                return _react2.default.createElement(
                    'div',
                    { className: 'products-grid', key: item.p_id },
                    _react2.default.createElement(
                        'div',
                        { className: 'products-card' },
                        _react2.default.createElement(
                            'a',
                            null,
                            _react2.default.createElement(
                                'div',
                                { className: 'product-img', onClick: that.handleClick.bind(that, item.p_id) },
                                _react2.default.createElement('img', { src: '' + _api.API_PRO_PREFIX + item.thumb_img })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'product-card-content' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'product-card-content-wrapper' },
                                    _react2.default.createElement(
                                        'h3',
                                        { className: 'product-title' },
                                        item.name_zh
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: { display: 'flex' } },
                                        _react2.default.createElement(
                                            'ul',
                                            { className: 'product-os-info' },
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                '\u5E73\u53F0\uFF1A',
                                                _react2.default.createElement(
                                                    'span',
                                                    { style: { marginRight: '5px' } },
                                                    item.s_platform
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                '\u7248\u672C\uFF1A',
                                                _react2.default.createElement(
                                                    'span',
                                                    { style: { marginRight: '5px' } },
                                                    item.s_edition
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'product-card-footer' },
                                _react2.default.createElement(
                                    'button',
                                    { className: 'product-btn-add-to-cart' },
                                    _react2.default.createElement(
                                        'span',
                                        { onClick: that.addToCartClick.bind(that, item) },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'oldPrice' },
                                            '\uFFE5',
                                            item.market_price
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'icon' },
                                            _react2.default.createElement('i', { className: 'fa fa-cart-plus' })
                                        ),
                                        '\uFFE5',
                                        item.price
                                    )
                                )
                            )
                        )
                    )
                );
            });

            console.log(result);
            return _react2.default.createElement(
                'div',
                { className: 'products' },
                _react2.default.createElement(
                    'div',
                    { className: 'products-main' },
                    items
                )
            );
        }
    }]);

    return SearchProduct;
}(_react.Component);

exports.default = SearchProduct;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouter = __webpack_require__(9);

var _reactRedux = __webpack_require__(21);

var _redux = __webpack_require__(17);

var _Details = __webpack_require__(161);

var _Details2 = _interopRequireDefault(_Details);

var _Orders = __webpack_require__(163);

var _Orders2 = _interopRequireDefault(_Orders);

var _Games = __webpack_require__(162);

var _Games2 = _interopRequireDefault(_Games);

var _Sales = __webpack_require__(165);

var _Sales2 = _interopRequireDefault(_Sales);

var _Services = __webpack_require__(171);

var _Services2 = _interopRequireDefault(_Services);

var _orderActions = __webpack_require__(98);

var orderActions = _interopRequireWildcard(_orderActions);

var _saleActions = __webpack_require__(159);

var saleActions = _interopRequireWildcard(_saleActions);

var _userActions = __webpack_require__(67);

var userActions = _interopRequireWildcard(_userActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Account
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 账户相关页面
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Account = function (_Component) {
    _inherits(Account, _Component);

    function Account() {
        _classCallCheck(this, Account);

        return _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).apply(this, arguments));
    }

    _createClass(Account, [{
        key: 'getAccountContent',
        value: function getAccountContent() {
            var params = this.props.params;

            switch (params.type) {
                case 'details':
                    return _react2.default.createElement(_Details2.default, this.props);
                case 'orders':
                    return _react2.default.createElement(_Orders2.default, this.props);
                case 'games':
                    return _react2.default.createElement(_Games2.default, this.props);
                case 'sales':
                    return _react2.default.createElement(_Sales2.default, this.props);
                case 'services':
                    return _react2.default.createElement(_Services2.default, this.props);
                default:
                    return null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                params = _props.params,
                userInfo = _props.userInfo,
                router = _props.router;


            if (userInfo === null) {
                // router.push('/login');
                return null;
            }

            var content = this.getAccountContent();

            var getNavItemClass = function getNavItemClass(query) {
                return (0, _classnames2.default)({
                    'nav-item': true,
                    'active': query === params.type
                });
            };

            return _react2.default.createElement(
                'div',
                { className: 'container account-container' },
                _react2.default.createElement(
                    'section',
                    { className: 'account-section' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'account-nav func-clearfix' },
                        _react2.default.createElement(
                            'li',
                            { className: getNavItemClass('details') },
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/account/details' },
                                '\u6211\u7684\u8D26\u6237'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: getNavItemClass('orders') },
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/account/orders' },
                                '\u6211\u7684\u8BA2\u5355'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: getNavItemClass('sales') },
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/account/sales' },
                                '\u9500\u552E\u6E38\u620F'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: getNavItemClass('services') },
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/account/services' },
                                '\u5BA2\u670D\u4E2D\u5FC3'
                            )
                        )
                    ),
                    content
                )
            );
        }
    }]);

    return Account;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return state;
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        orderActions: (0, _redux.bindActionCreators)(orderActions, dispatch),
        saleActions: (0, _redux.bindActionCreators)(saleActions, dispatch),
        userActions: (0, _redux.bindActionCreators)(userActions, dispatch)
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Account);

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(17);

var _reactRedux = __webpack_require__(21);

var _userActions = __webpack_require__(67);

var userActions = _interopRequireWildcard(_userActions);

var _cartActions = __webpack_require__(31);

var cartActions = _interopRequireWildcard(_cartActions);

var _searchActions = __webpack_require__(99);

var searchActions = _interopRequireWildcard(_searchActions);

var _Nav = __webpack_require__(200);

var _Nav2 = _interopRequireDefault(_Nav);

var _Footer = __webpack_require__(184);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class App
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc App容器
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var children = this.props.children;


            return _react2.default.createElement(
                'div',
                { className: 'root-app' },
                _react2.default.createElement(_Nav2.default, this.props),
                _react2.default.createElement(
                    'main',
                    { className: 'main' },
                    children
                ),
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);

    return App;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    console.log(state);
    return state;
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        userActions: (0, _redux.bindActionCreators)(userActions, dispatch),
        cartActions: (0, _redux.bindActionCreators)(cartActions, dispatch),
        searchActions: (0, _redux.bindActionCreators)(searchActions, dispatch)
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(21);

var _redux = __webpack_require__(17);

var _CartHead = __webpack_require__(172);

var _CartHead2 = _interopRequireDefault(_CartHead);

var _CartList = __webpack_require__(173);

var _CartList2 = _interopRequireDefault(_CartList);

var _Warning = __webpack_require__(178);

var _Warning2 = _interopRequireDefault(_Warning);

var _Information = __webpack_require__(175);

var _Information2 = _interopRequireDefault(_Information);

var _PaymentMethods = __webpack_require__(177);

var _PaymentMethods2 = _interopRequireDefault(_PaymentMethods);

var _Check = __webpack_require__(174);

var _Check2 = _interopRequireDefault(_Check);

var _cartActions = __webpack_require__(31);

var cartActions = _interopRequireWildcard(_cartActions);

var _orderActions = __webpack_require__(98);

var orderActions = _interopRequireWildcard(_orderActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Cart
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 购物车
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Cart = function (_Component) {
  _inherits(Cart, _Component);

  function Cart() {
    _classCallCheck(this, Cart);

    return _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).apply(this, arguments));
  }

  _createClass(Cart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var cartActions = this.props.cartActions;

      cartActions.initialPayMethod();
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log(this.props);
      return _react2.default.createElement(
        'div',
        { className: 'container cart-container' },
        _react2.default.createElement(_CartHead2.default, null),
        _react2.default.createElement(
          'section',
          { className: 'cart-main' },
          _react2.default.createElement(
            'div',
            { className: 'cart-left' },
            _react2.default.createElement(_CartList2.default, this.props),
            _react2.default.createElement(_Information2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-right' },
            _react2.default.createElement(_PaymentMethods2.default, this.props),
            _react2.default.createElement(_Check2.default, this.props)
          )
        )
      );
    }
  }]);

  return Cart;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  console.log(state);
  return state;
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    cartActions: (0, _redux.bindActionCreators)(cartActions, dispatch),
    orderActions: (0, _redux.bindActionCreators)(orderActions, dispatch)
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Cart);

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(21);

var _redux = __webpack_require__(17);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(6);

var _lodash2 = _interopRequireDefault(_lodash);

var _RenderHeader = __webpack_require__(179);

var _RenderHeader2 = _interopRequireDefault(_RenderHeader);

var _RenderMore = __webpack_require__(180);

var _RenderMore2 = _interopRequireDefault(_RenderMore);

var _RenderProduct = __webpack_require__(181);

var _RenderProduct2 = _interopRequireDefault(_RenderProduct);

var _Share = __webpack_require__(69);

var _Share2 = _interopRequireDefault(_Share);

var _catalogAction = __webpack_require__(97);

var catalogAction = _interopRequireWildcard(_catalogAction);

var _cartActions = __webpack_require__(31);

var cartActions = _interopRequireWildcard(_cartActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Catalog
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc Catalog Container
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author zhaojunzhe(1429595365@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Catalog = function (_Component) {
	_inherits(Catalog, _Component);

	function Catalog() {
		_classCallCheck(this, Catalog);

		return _possibleConstructorReturn(this, (Catalog.__proto__ || Object.getPrototypeOf(Catalog)).apply(this, arguments));
	}

	_createClass(Catalog, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var params = this.props.params;
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var params = this.props.params;

			var nextParams = nextProps.params;
			console.log(_lodash2.default.isEqual(params, nextParams));
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'container catalog-container' },
				_react2.default.createElement(_RenderHeader2.default, this.props),
				_react2.default.createElement(_RenderProduct2.default, this.props),
				_react2.default.createElement(_RenderMore2.default, this.props),
				_react2.default.createElement(_Share2.default, this.props)
			);
		}
	}]);

	return Catalog;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return state;
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		catalogAction: (0, _redux.bindActionCreators)(catalogAction, dispatch),
		cartActions: (0, _redux.bindActionCreators)(cartActions, dispatch)
	};
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Catalog);

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Success = __webpack_require__(183);

var _Success2 = _interopRequireDefault(_Success);

var _Fail = __webpack_require__(182);

var _Fail2 = _interopRequireDefault(_Fail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Email
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 邮箱验证
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Email = function (_Component) {
    _inherits(Email, _Component);

    function Email() {
        _classCallCheck(this, Email);

        return _possibleConstructorReturn(this, (Email.__proto__ || Object.getPrototypeOf(Email)).apply(this, arguments));
    }

    _createClass(Email, [{
        key: 'renderEmailSection',
        value: function renderEmailSection() {
            var params = this.props.params;

            var tmp = params.tmp;
            switch (tmp) {
                case 'success':
                    return _react2.default.createElement(_Success2.default, this.props);
                case 'fail':
                    return _react2.default.createElement(_Fail2.default, this.props);
                default:
                    return null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container email-container' },
                this.renderEmailSection()
            );
        }
    }]);

    return Email;
}(_react.Component);

exports.default = Email;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(21);

var _redux = __webpack_require__(17);

var _Hero = __webpack_require__(188);

var _Hero2 = _interopRequireDefault(_Hero);

var _Special = __webpack_require__(191);

var _Special2 = _interopRequireDefault(_Special);

var _Deals = __webpack_require__(185);

var _Deals2 = _interopRequireDefault(_Deals);

var _Latest = __webpack_require__(189);

var _Latest2 = _interopRequireDefault(_Latest);

var _Group = __webpack_require__(187);

var _Group2 = _interopRequireDefault(_Group);

var _Popular = __webpack_require__(190);

var _Popular2 = _interopRequireDefault(_Popular);

var _Share = __webpack_require__(69);

var _Share2 = _interopRequireDefault(_Share);

var _gameActions = __webpack_require__(66);

var gameActions = _interopRequireWildcard(_gameActions);

var _cartActions = __webpack_require__(31);

var cartActions = _interopRequireWildcard(_cartActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Home
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 主页
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            console.log(this.props);
            return _react2.default.createElement(
                'div',
                { className: 'container home-container' },
                _react2.default.createElement(_Hero2.default, this.props),
                _react2.default.createElement(_Special2.default, this.props),
                _react2.default.createElement(_Group2.default, this.props),
                _react2.default.createElement(_Popular2.default, this.props),
                _react2.default.createElement(_Share2.default, this.props)
            );
        }
    }]);

    return Home;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return state;
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        gameActions: (0, _redux.bindActionCreators)(gameActions, dispatch),
        cartActions: (0, _redux.bindActionCreators)(cartActions, dispatch)
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(21);

var _redux = __webpack_require__(17);

var _Gallery = __webpack_require__(193);

var _Gallery2 = _interopRequireDefault(_Gallery);

var _Aside = __webpack_require__(192);

var _Aside2 = _interopRequireDefault(_Aside);

var _Placeholder = __webpack_require__(15);

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _Share = __webpack_require__(69);

var _Share2 = _interopRequireDefault(_Share);

var _gameActions = __webpack_require__(66);

var gameActions = _interopRequireWildcard(_gameActions);

var _cartActions = __webpack_require__(31);

var cartActions = _interopRequireWildcard(_cartActions);

var _api = __webpack_require__(10);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Item
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 游戏详情页
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Item = function (_Component) {
    _inherits(Item, _Component);

    function Item(props) {
        _classCallCheck(this, Item);

        var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

        _this.state = {
            loading: true
        };
        return _this;
    }

    _createClass(Item, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var _props = this.props,
                params = _props.params,
                gameActions = _props.gameActions;

            var id = params.id;
            gameActions.loadGameDeatil({
                id: id,
                cb: function cb() {
                    _this2.setState({ loading: false });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                params = _props2.params,
                gameDetail = _props2.gameDetail;


            if (this.state.loading) {
                return _react2.default.createElement(
                    'div',
                    { className: 'container item-container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'placeholders' },
                        _react2.default.createElement(_Placeholder2.default, null),
                        _react2.default.createElement(_Placeholder2.default, null)
                    )
                );
            }

            var itemHeroStyle = {
                backgroundImage: 'url(' + _api.API_PRO_PREFIX + gameDetail.bg + ')'
            };

            return _react2.default.createElement(
                'div',
                { className: 'container item-container' },
                _react2.default.createElement('div', { className: 'item-hero', style: itemHeroStyle }),
                _react2.default.createElement(
                    'div',
                    { className: 'item-detail' },
                    _react2.default.createElement(
                        'header',
                        { className: 'item-detail-head func-clearfix' },
                        _react2.default.createElement('div', { className: 'detail-img' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'detail-title' },
                            _react2.default.createElement(
                                'h2',
                                { className: 'title' },
                                gameDetail.name_zh
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'os func-clearfix' },
                                _.map(gameDetail.platform, function (_plat, _index) {
                                    return _react2.default.createElement(
                                        'li',
                                        { key: _index },
                                        _plat
                                    );
                                })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'section',
                        { className: 'item-detail-main func-clearfix' },
                        _react2.default.createElement(
                            'div',
                            { className: 'detail-main-gallery' },
                            _react2.default.createElement(_Gallery2.default, this.props),
                            _react2.default.createElement(
                                'div',
                                { className: 'item-content' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'item-info' },
                                    _react2.default.createElement(
                                        'h3',
                                        { className: 'item-info-title' },
                                        'About the game'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'item-info-content' },
                                        'Revolutionary 3D cell-animation graphics further refined, and more game contents added! The next-generation fighting game "GUILTY GEAR Xrd -REVELATOR-" is now out on Nuuvem! Carrying on the legacy from 1998, comes the next addition to the "Guilty Gear" series! All visuals have been tweaked to the finest detail and hand-polished by the animation masters to produce the top quality hand-drawn anime effect! Game contents revamped to provide for gamers of all skill levels, you cannot miss out on this one!'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'item-require' },
                                    _react2.default.createElement(
                                        'h3',
                                        { className: 'item-require-title' },
                                        'System Requirements'
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'item-require-os func-clearfix' },
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement('i', { className: 'fa fa-windows' }),
                                            'WINDOWS'
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement('i', { className: 'fa fa-apple' }),
                                            'MAC'
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement('i', { className: 'fa fa-linux' }),
                                            'LINUX'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'item-require-mini' },
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'title' },
                                            'MINIMUM'
                                        ),
                                        _react2.default.createElement(
                                            'ul',
                                            { className: 'details' },
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'detail' },
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'label' },
                                                    'OS:'
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'value' },
                                                    'Windows 7/8/10 (64Bit)'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'detail' },
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'label' },
                                                    'Storage:'
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'value' },
                                                    '10 GB'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'detail' },
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'label' },
                                                    'Processor:'
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'value' },
                                                    'Intel Compatible 2.1 GHz Dual Core'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'detail' },
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'label' },
                                                    'Memory:'
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'value' },
                                                    '4 GB'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'detail' },
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'label' },
                                                    'Graphics:'
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'value' },
                                                    'GTX460 2GB'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'detail' },
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'label' },
                                                    'DirectX:'
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'value' },
                                                    '11'
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(_Aside2.default, this.props)
                    )
                ),
                _react2.default.createElement(_Share2.default, this.props)
            );
        }
    }]);

    return Item;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return state;
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        gameActions: (0, _redux.bindActionCreators)(gameActions, dispatch),
        cartActions: (0, _redux.bindActionCreators)(cartActions, dispatch)
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Item);

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(21);

var _redux = __webpack_require__(17);

var _Divide = __webpack_require__(194);

var _Divide2 = _interopRequireDefault(_Divide);

var _Hotkeys = __webpack_require__(195);

var _Hotkeys2 = _interopRequireDefault(_Hotkeys);

var _log = __webpack_require__(199);

var _log2 = _interopRequireDefault(_log);

var _Register = __webpack_require__(197);

var _Register2 = _interopRequireDefault(_Register);

var _LoginHeader = __webpack_require__(196);

var _LoginHeader2 = _interopRequireDefault(_LoginHeader);

var _forgetPassword = __webpack_require__(198);

var _forgetPassword2 = _interopRequireDefault(_forgetPassword);

var _userActions = __webpack_require__(67);

var userActions = _interopRequireWildcard(_userActions);

var _cartActions = __webpack_require__(31);

var cartActions = _interopRequireWildcard(_cartActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Login
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 登录注册页面
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Login = function (_Component) {
    _inherits(Login, _Component);

    function Login() {
        _classCallCheck(this, Login);

        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
    }

    _createClass(Login, [{
        key: 'render',
        value: function render() {
            var params = this.props.params;

            console.log(params.type);

            if (params.type === 'forget-password') {
                return _react2.default.createElement(_forgetPassword2.default, this.props);
            }

            return _react2.default.createElement(
                'div',
                { id: 'main-content container login-container' },
                _react2.default.createElement(
                    'section',
                    { id: 'sign-in' },
                    _react2.default.createElement(_LoginHeader2.default, null),
                    _react2.default.createElement(
                        'div',
                        { id: 'content' },
                        _react2.default.createElement(_Hotkeys2.default, null),
                        _react2.default.createElement(_Divide2.default, null),
                        _react2.default.createElement(
                            'div',
                            { id: 'RL', className: 'func-clearfix' },
                            _react2.default.createElement(_Register2.default, this.props),
                            _react2.default.createElement(_log2.default, this.props)
                        )
                    )
                )
            );
        }
    }]);

    return Login;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return state;
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        userActions: (0, _redux.bindActionCreators)(userActions, dispatch),
        cartActions: (0, _redux.bindActionCreators)(cartActions, dispatch)
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Login);

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class NoMatch
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 404页面
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author wangyong(1223427693@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var NoMatch = function (_Component) {
    _inherits(NoMatch, _Component);

    function NoMatch() {
        _classCallCheck(this, NoMatch);

        return _possibleConstructorReturn(this, (NoMatch.__proto__ || Object.getPrototypeOf(NoMatch)).apply(this, arguments));
    }

    _createClass(NoMatch, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'h1',
                null,
                '404 Not Found!'
            );
        }
    }]);

    return NoMatch;
}(_react.Component);

exports.default = NoMatch;

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(21);

var _redux = __webpack_require__(17);

var _searchActions = __webpack_require__(99);

var searchActions = _interopRequireWildcard(_searchActions);

var _searchHeader = __webpack_require__(201);

var _searchHeader2 = _interopRequireDefault(_searchHeader);

var _searchProduct = __webpack_require__(203);

var _searchProduct2 = _interopRequireDefault(_searchProduct);

var _searchMore = __webpack_require__(202);

var _searchMore2 = _interopRequireDefault(_searchMore);

var _gameActions = __webpack_require__(66);

var gameActions = _interopRequireWildcard(_gameActions);

var _cartActions = __webpack_require__(31);

var cartActions = _interopRequireWildcard(_cartActions);

var _catalogAction = __webpack_require__(97);

var catalogAction = _interopRequireWildcard(_catalogAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Search
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends React.Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 搜索页面
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author zhaojunzhe(1429595365@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Search = function (_Component) {
    _inherits(Search, _Component);

    function Search() {
        _classCallCheck(this, Search);

        return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
    }

    _createClass(Search, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var params = this.props.params;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var params = this.props.params;

            var nextParams = nextProps.params;
            console.log(_.isEqual(params, nextParams));
        }
    }, {
        key: 'render',
        value: function render() {
            var searchQuery = this.props.searchQuery;

            return _react2.default.createElement(
                'div',
                { className: 'container catalog-container' },
                _react2.default.createElement(_searchHeader2.default, this.props),
                _react2.default.createElement(_searchProduct2.default, this.props),
                _react2.default.createElement(_searchMore2.default, this.props)
            );
        }
    }]);

    return Search;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return state;
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        gameActions: (0, _redux.bindActionCreators)(gameActions, dispatch),
        cartActions: (0, _redux.bindActionCreators)(cartActions, dispatch),
        catalogAction: (0, _redux.bindActionCreators)(catalogAction, dispatch),
        searchActions: (0, _redux.bindActionCreators)(searchActions, dispatch)
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Search);

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cartList = cartList;
exports.paymethod = paymethod;
/**
 * @file cart.js
 * @desc 购物车相关数据
 * @author wangyong(1223427693@qq.com)
 */
function cartList() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_CARTLIST_SUCCESS':
            return action.data;
        case 'UPDATE_CARTLIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

// 下单支付方式，alipay代表支付宝，wechat代表微信支付
function paymethod() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'alipay';
    var action = arguments[1];

    switch (action.type) {
        case 'INITIAL_PAYMETHOD':
            return 'alipay';
        case 'UPDATE_PAYMETHOD':
            return action.data;
        default:
            return state;
    }
}

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTotalList = getTotalList;
exports.catalogLoadGamesList = catalogLoadGamesList;
exports.loadList = loadList;
exports.loadAttributeList = loadAttributeList;
exports.changeType = changeType;
exports.viewMore = viewMore;
exports.getCatalogPerpage = getCatalogPerpage;

var _mockjs = __webpack_require__(64);

var _mockjs2 = _interopRequireDefault(_mockjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gameList = []; /**
                    * @file catalog.js
                    * @desc 游戏分类相关的数据
                    * @author 赵浚哲(1429595365@qq.com)
                    */

var keyWord = {
    'category': 'all',
    'type': '',
    'platform': ''
};
var viewMoreCount = 2;
var totalArray = [];
var list = [];
var defaultPerpage = 20;

function getTotalList() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : totalArray;
    var action = arguments[1];

    switch (action.type) {
        case 'GET_TOTAL_LIST_SUCCESS':
            return action.data;
        case 'GET_TOTAL_LIST_FAIL':
            return state;
        default:
            return state;
    }
}
// 加载默认游戏列表
function catalogLoadGamesList() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : gameList;
    var action = arguments[1];

    switch (action.type) {
        case 'CATALOG_LOAD_GAMES_LIST_SUCCESS':
            return action.data;
        case 'CATALOG_LOAD_GAMES_LIST_FAIL':
            return state;
        default:
            return state;
    }
}

function loadList() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : list;
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_LIST_SUCCESS':
            return action.data;
        case 'LOAD_LIST_FAIL':
            return state;
        default:
            return state;
    }
}
function loadAttributeList() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_ATTRIBUTE_LIST_SUCCESS':
            return action.data;
        case 'LOAD_ATTRIBUTE_LIST_SUCCESS_FAIL':
            return state;
        default:
            return state;
    }
}

function changeType() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : keyWord;
    var action = arguments[1];

    switch (action.type) {
        case 'CHANG_TYPE_SUCCESS':
            return action.data;
        case 'CHANGE_TYPE_FAIL':
            return state;
        default:
            return state;
    }
}

function viewMore() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_ALL_GAMES_LIST_SUCCESS':
            return action.data;
        case 'LOAD_ALL_GAMES_LIST_FAIL':
            return state;
        default:
            return state;
    }
}

//获取分页的数据

function getCatalogPerpage() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPerpage;
    var action = arguments[1];

    switch (action.type) {
        case 'GET_PERPAGE_SUCCESS':
            return action.data;
        case 'GET_PERPAGE_FAIL':
            return state;
        default:
            return state;
    }
}

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sliderGamesList = sliderGamesList;
exports.sliderGamesBg = sliderGamesBg;
exports.latestGamesList = latestGamesList;
exports.discountGamesList = discountGamesList;
exports.preorderGamesList = preorderGamesList;
exports.popularGamesList = popularGamesList;
exports.specialGamesList = specialGamesList;
exports.specialGamesBg = specialGamesBg;
exports.gameDetail = gameDetail;
/**
 * @file games.js
 * @desc 游戏相关的数据
 * @author wangyong(1223427693@qq.com)
 */
var sliderGames = {
    1: [{
        p_id: 1412412,
        name_zh: 'LKGJLJL',
        market_price: 124.23,
        price: 122,
        p_img: "http://dummyimage.com/1366x768"
    }, {
        p_id: 1412412,
        name_zh: 'LKGJLJL',
        market_price: 124.23,
        price: 122,
        p_img: "http://dummyimage.com/1366x768"
    }, {
        p_id: 1412412,
        name_zh: 'LKGJLJL',
        market_price: 124.23,
        price: 122,
        p_img: "http://dummyimage.com/1366x768"
    }],
    2: [{
        p_id: 1412412,
        name_zh: 'LKGJLJL',
        market_price: 124.23,
        price: 122,
        p_img: "https://dskhvldhwok3h.cloudfront.net/image/upload/t_quality_80/v1/highlights/58e3ee75216248151f00003e/apvvdb6jqlpckuotllsb.jpg"
    }, {
        p_id: 1412412,
        name_zh: 'LKGJLJL',
        market_price: 124.23,
        price: 122,
        p_img: "https://dskhvldhwok3h.cloudfront.net/image/upload/t_quality_80/v1/highlights/58e3ee75216248151f00003e/apvvdb6jqlpckuotllsb.jpg"
    }, {
        p_id: 1412412,
        name_zh: 'LKGJLJL',
        market_price: 124.23,
        price: 122,
        p_img: "https://dskhvldhwok3h.cloudfront.net/image/upload/t_quality_80/v1/highlights/58e3ee75216248151f00003e/apvvdb6jqlpckuotllsb.jpg"
    }]
};

// 首页轮播游戏列表
function sliderGamesList() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : sliderGames;
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_SLIDER_GAMES_LIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

// 首页轮播游戏背景图
function sliderGamesBg() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_SLIDER_GAMES_BG_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

// 首页最新游戏列表
function latestGamesList() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_LATEST_GAMES_LIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

// 首页折扣游戏列表
function discountGamesList() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_DISCOUNT_GAMES_LIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

// 首页预售游戏列表
function preorderGamesList() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_PREORDER_GAMES_LIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

// 首页畅销游戏列表
function popularGamesList() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_POPULAR_GAMES_LIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

// 首页特殊游戏列表
function specialGamesList() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_SPECIAL_GAMES_LIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

// 首页特殊游戏背景
function specialGamesBg() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_SPECIAL_GAMES_BG_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

// 游戏详情页游戏对象
function gameDetail() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_GAME_DETAIL_SUCCESS':
            return action.data;
        case 'LOAD_GAME_DETAIL_FAIL':
            return null;
        default:
            return state;
    }
}

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.orderList = orderList;
/**
 * @file order.js
 * @desc 订单相关数据
 * @author wangyong(1223427693@qq.com)
 */
function orderList() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_ORDER_LIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
			value: true
});

var _redux = __webpack_require__(17);

var _reactRouterRedux = __webpack_require__(65);

var _user = __webpack_require__(221);

var _games = __webpack_require__(216);

var _catalog = __webpack_require__(215);

var _cart = __webpack_require__(214);

var _search = __webpack_require__(220);

var _order = __webpack_require__(217);

var _sale = __webpack_require__(219);

var reducer = (0, _redux.combineReducers)({
			userInfo: _user.userInfo,
			userBalance: _user.userBalance,
			sliderGamesList: _games.sliderGamesList,
			latestGamesList: _games.latestGamesList,
			popularGamesList: _games.popularGamesList,
			discountGamesList: _games.discountGamesList,
			preorderGamesList: _games.preorderGamesList,
			catalogLoadGamesList: _catalog.catalogLoadGamesList,
			loadList: _catalog.loadList,
			specialGamesList: _games.specialGamesList,
			sliderGamesBg: _games.sliderGamesBg,
			specialGamesBg: _games.specialGamesBg,
			changeType: _catalog.changeType,
			loadAttributeList: _catalog.loadAttributeList,
			viewMore: _catalog.viewMore,
			getTotalList: _catalog.getTotalList,
			cartList: _cart.cartList,
			paymethod: _cart.paymethod,
			gameDetail: _games.gameDetail,
			searchQuery: _search.searchQuery,
			loadSearchList: _search.loadSearchList,
			changeTypes: _search.changeTypes,
			viewMores: _search.viewMores,
			getTotalLists: _search.getTotalLists,
			getSearchPerpage: _search.getSearchPerpage,
			getCatalogPerpage: _catalog.getCatalogPerpage,
			orderList: _order.orderList,
			saleProductList: _sale.saleProductList,
			saleProductDetail: _sale.saleProductDetail,
			withdrawHistoryList: _sale.withdrawHistoryList,
			saleHistoryList: _sale.saleHistoryList,
			balanceHistoryList: _sale.balanceHistoryList,
			total: _search.total,
			routing: _reactRouterRedux.routerReducer
}); /**
     * @file reducer.js
     * @desc 构造redux reducer
     * @author wangyong(1223427693@qq.com)
     * 		   zhaojunzhe(1429595365@qq.com)
     */
exports.default = reducer;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.saleProductList = saleProductList;
exports.saleProductDetail = saleProductDetail;
exports.withdrawHistoryList = withdrawHistoryList;
exports.saleHistoryList = saleHistoryList;
exports.balanceHistoryList = balanceHistoryList;
/**
 * @file sale.js
 * @desc 销售部分相关数据
 * @author wangyong(1223427693@qq.com)
 */
// 销售的游戏列表
function saleProductList() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_SALE_PRODUCT_LIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

// 销售的游戏详情
function saleProductDetail() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_SALE_PRODUCT_DETAIL_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

// 提现记录列表
function withdrawHistoryList() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_WITHDRAW_HISTORY_LIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

// 销售历史记录
function saleHistoryList() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_SALE_HISTORY_LIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

// 余额变动记录
function balanceHistoryList() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_BALANCE_HISTORY_LIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTotalLists = getTotalLists;
exports.searchQuery = searchQuery;
exports.loadSearchList = loadSearchList;
exports.changeTypes = changeTypes;
exports.viewMores = viewMores;
exports.getSearchPerpage = getSearchPerpage;
exports.total = total;
/**
 * @file search.js
 * @desc 搜索页面相关数据
 * @author zhaojunzhe(1223427693@qq.com)
 */
var list = [];
var keyWord = {
    'category': 'all',
    'type': '',
    'platform': ''
};
var viewMoreCounts = 2;
var totalArrays = [];
var defaultPerpage = 20;

function getTotalLists() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : totalArrays;
    var action = arguments[1];

    switch (action.type) {
        case 'GET_TOTAL_LISTS_SUCCESS':
            return action.data;
        case 'GET_TOTAL_LISTS_FAIL':
            return state;
        default:
            return state;
    }
}

function searchQuery() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments[1];

    switch (action.type) {
        case 'UPDATE_SEARCH_QUERY_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

function loadSearchList() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_SEARCH_LIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

function changeTypes() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : keyWord;
    var action = arguments[1];

    switch (action.type) {
        case 'CHANG_TYPE_SUCCESS':
            return action.data;
        case 'CHANGE_TYPE_FAIL':
            return state;
        default:
            return state;
    }
}

function viewMores() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : viewMoreCounts;
    var action = arguments[1];

    switch (action.type) {
        case 'VIEW_MORES_SUCCESS':
            return action.data;
        case 'VIEW_MORES_FAIL':
            return state;
        default:
            return state;
    }
}

function getSearchPerpage() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPerpage;
    var action = arguments[1];

    switch (action.type) {
        case 'GET_SEARCH_PERPAGE_SUCCESS':
            return action.data;
        case 'GET_SEARCH_PERPAGE_FAIL':
            return state;
        default:
            return state;
    }
}

function total() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments[1];

    switch (action.type) {
        case 'GET_TOTAL_SUCCESS':
            return action.data;
        case 'GET_TOTAL_FAIL':
            return state;
        default:
            return state;
    }
}

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.userInfo = userInfo;
exports.userBalance = userBalance;
/**
 * @file user.js
 * @desc user相关的reducer
 * @author wangyong(1223427693@qq.com)
 */
function userInfo() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_USERINFO_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

var INITIAL_BALANCE = {
    balance: "0.00",
    income: "0.00",
    locking: "0.00"
};
function userBalance() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_BALANCE;
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_USER_BALANCE_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(17);

var _reduxThunk = __webpack_require__(371);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducer = __webpack_require__(218);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducer2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default)); /**
                                                                                                            * @file store.js
                                                                                                            * @desc 构造redux store
                                                                                                            * @author wangyong(1223427693@qq.com)
                                                                                                            */
exports.default = store;

/***/ }),
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(11)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));


/***/ }),
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = __webpack_require__(0);
var PropTypes = __webpack_require__(4);
var createClass = __webpack_require__(13);

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var AutosizeInput = createClass({
	propTypes: {
		className: PropTypes.string, // className for the outer element
		defaultValue: PropTypes.any, // default field value
		inputClassName: PropTypes.string, // className for the input element
		inputStyle: PropTypes.object, // css styles for the input element
		minWidth: PropTypes.oneOfType([// minimum width for input element
		PropTypes.number, PropTypes.string]),
		onAutosize: PropTypes.func, // onAutosize handler: function(newWidth) {}
		onChange: PropTypes.func, // onChange handler: function(newValue) {}
		placeholder: PropTypes.string, // placeholder text
		placeholderIsMinWidth: PropTypes.bool, // don't collapse size to less than the placeholder
		style: PropTypes.object, // css styles for the outer element
		value: PropTypes.any },
	// field value
	getDefaultProps: function getDefaultProps() {
		return {
			minWidth: 1
		};
	},
	getInitialState: function getInitialState() {
		return {
			inputWidth: this.props.minWidth
		};
	},
	componentDidMount: function componentDidMount() {
		this.mounted = true;
		this.copyInputStyles();
		this.updateInputWidth();
	},
	componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
		if (prevState.inputWidth !== this.state.inputWidth) {
			if (typeof this.props.onAutosize === 'function') {
				this.props.onAutosize(this.state.inputWidth);
			}
		}
		this.updateInputWidth();
	},
	componentWillUnmount: function componentWillUnmount() {
		this.mounted = false;
	},
	inputRef: function inputRef(el) {
		this.input = el;
	},
	placeHolderSizerRef: function placeHolderSizerRef(el) {
		this.placeHolderSizer = el;
	},
	sizerRef: function sizerRef(el) {
		this.sizer = el;
	},
	copyInputStyles: function copyInputStyles() {
		if (this.mounted || !window.getComputedStyle) {
			return;
		}
		var inputStyle = this.input && window.getComputedStyle(this.input);
		if (!inputStyle) {
			return;
		}
		var widthNode = this.sizer;
		widthNode.style.fontSize = inputStyle.fontSize;
		widthNode.style.fontFamily = inputStyle.fontFamily;
		widthNode.style.fontWeight = inputStyle.fontWeight;
		widthNode.style.fontStyle = inputStyle.fontStyle;
		widthNode.style.letterSpacing = inputStyle.letterSpacing;
		widthNode.style.textTransform = inputStyle.textTransform;
		if (this.props.placeholder) {
			var placeholderNode = this.placeHolderSizer;
			placeholderNode.style.fontSize = inputStyle.fontSize;
			placeholderNode.style.fontFamily = inputStyle.fontFamily;
			placeholderNode.style.fontWeight = inputStyle.fontWeight;
			placeholderNode.style.fontStyle = inputStyle.fontStyle;
			placeholderNode.style.letterSpacing = inputStyle.letterSpacing;
			placeholderNode.style.textTransform = inputStyle.textTransform;
		}
	},
	updateInputWidth: function updateInputWidth() {
		if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
			return;
		}
		var newInputWidth = undefined;
		if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
			newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
		} else {
			newInputWidth = this.sizer.scrollWidth + 2;
		}
		if (newInputWidth < this.props.minWidth) {
			newInputWidth = this.props.minWidth;
		}
		if (newInputWidth !== this.state.inputWidth) {
			this.setState({
				inputWidth: newInputWidth
			});
		}
	},
	getInput: function getInput() {
		return this.input;
	},
	focus: function focus() {
		this.input.focus();
	},
	blur: function blur() {
		this.input.blur();
	},
	select: function select() {
		this.input.select();
	},
	render: function render() {
		var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
			if (previousValue !== null && previousValue !== undefined) {
				return previousValue;
			}
			return currentValue;
		});

		var wrapperStyle = this.props.style || {};
		if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';
		var inputStyle = _extends({}, this.props.inputStyle);
		inputStyle.width = this.state.inputWidth + 'px';
		inputStyle.boxSizing = 'content-box';
		var inputProps = _extends({}, this.props);
		inputProps.className = this.props.inputClassName;
		inputProps.style = inputStyle;
		// ensure props meant for `AutosizeInput` don't end up on the `input`
		delete inputProps.inputClassName;
		delete inputProps.inputStyle;
		delete inputProps.minWidth;
		delete inputProps.onAutosize;
		delete inputProps.placeholderIsMinWidth;
		return React.createElement(
			'div',
			{ className: this.props.className, style: wrapperStyle },
			React.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
			React.createElement(
				'div',
				{ ref: this.sizerRef, style: sizerStyle },
				sizerValue
			),
			this.props.placeholder ? React.createElement(
				'div',
				{ ref: this.placeHolderSizerRef, style: sizerStyle },
				this.props.placeholder
			) : null
		);
	}
});

module.exports = AutosizeInput;

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Select = __webpack_require__(48);

var _Select2 = _interopRequireDefault(_Select);

var _utilsStripDiacritics = __webpack_require__(157);

var _utilsStripDiacritics2 = _interopRequireDefault(_utilsStripDiacritics);

var propTypes = {
	autoload: _propTypes2['default'].bool.isRequired, // automatically call the `loadOptions` prop on-mount; defaults to true
	cache: _propTypes2['default'].any, // object to use to cache results; set to null/false to disable caching
	children: _propTypes2['default'].func.isRequired, // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
	ignoreAccents: _propTypes2['default'].bool, // strip diacritics when filtering; defaults to true
	ignoreCase: _propTypes2['default'].bool, // perform case-insensitive filtering; defaults to true
	loadingPlaceholder: _propTypes2['default'].oneOfType([// replaces the placeholder while options are loading
	_propTypes2['default'].string, _propTypes2['default'].node]),
	loadOptions: _propTypes2['default'].func.isRequired, // callback to load options asynchronously; (inputValue: string, callback: Function): ?Promise
	multi: _propTypes2['default'].bool, // multi-value input
	options: _propTypes2['default'].array.isRequired, // array of options
	placeholder: _propTypes2['default'].oneOfType([// field placeholder, displayed when there's no value (shared with Select)
	_propTypes2['default'].string, _propTypes2['default'].node]),
	noResultsText: _propTypes2['default'].oneOfType([// field noResultsText, displayed when no options come back from the server
	_propTypes2['default'].string, _propTypes2['default'].node]),
	onChange: _propTypes2['default'].func, // onChange handler: function (newValue) {}
	searchPromptText: _propTypes2['default'].oneOfType([// label to prompt for search input
	_propTypes2['default'].string, _propTypes2['default'].node]),
	onInputChange: _propTypes2['default'].func, // optional for keeping track of what is being typed
	value: _propTypes2['default'].any };

// initial field value
var defaultCache = {};

var defaultProps = {
	autoload: true,
	cache: defaultCache,
	children: defaultChildren,
	ignoreAccents: true,
	ignoreCase: true,
	loadingPlaceholder: 'Loading...',
	options: [],
	searchPromptText: 'Type to search'
};

var Async = (function (_Component) {
	_inherits(Async, _Component);

	function Async(props, context) {
		_classCallCheck(this, Async);

		_get(Object.getPrototypeOf(Async.prototype), 'constructor', this).call(this, props, context);

		this._cache = props.cache === defaultCache ? {} : props.cache;

		this.state = {
			isLoading: false,
			options: props.options
		};

		this._onInputChange = this._onInputChange.bind(this);
	}

	_createClass(Async, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var autoload = this.props.autoload;

			if (autoload) {
				this.loadOptions('');
			}
		}
	}, {
		key: 'componentWillUpdate',
		value: function componentWillUpdate(nextProps, nextState) {
			var _this = this;

			var propertiesToSync = ['options'];
			propertiesToSync.forEach(function (prop) {
				if (_this.props[prop] !== nextProps[prop]) {
					_this.setState(_defineProperty({}, prop, nextProps[prop]));
				}
			});
		}
	}, {
		key: 'clearOptions',
		value: function clearOptions() {
			this.setState({ options: [] });
		}
	}, {
		key: 'loadOptions',
		value: function loadOptions(inputValue) {
			var _this2 = this;

			var loadOptions = this.props.loadOptions;

			var cache = this._cache;

			if (cache && cache.hasOwnProperty(inputValue)) {
				this.setState({
					options: cache[inputValue]
				});

				return;
			}

			var callback = function callback(error, data) {
				if (callback === _this2._callback) {
					_this2._callback = null;

					var options = data && data.options || [];

					if (cache) {
						cache[inputValue] = options;
					}

					_this2.setState({
						isLoading: false,
						options: options
					});
				}
			};

			// Ignore all but the most recent request
			this._callback = callback;

			var promise = loadOptions(inputValue, callback);
			if (promise) {
				promise.then(function (data) {
					return callback(null, data);
				}, function (error) {
					return callback(error);
				});
			}

			if (this._callback && !this.state.isLoading) {
				this.setState({
					isLoading: true
				});
			}

			return inputValue;
		}
	}, {
		key: '_onInputChange',
		value: function _onInputChange(inputValue) {
			var _props = this.props;
			var ignoreAccents = _props.ignoreAccents;
			var ignoreCase = _props.ignoreCase;
			var onInputChange = _props.onInputChange;

			if (ignoreAccents) {
				inputValue = (0, _utilsStripDiacritics2['default'])(inputValue);
			}

			if (ignoreCase) {
				inputValue = inputValue.toLowerCase();
			}

			if (onInputChange) {
				onInputChange(inputValue);
			}

			return this.loadOptions(inputValue);
		}
	}, {
		key: 'inputValue',
		value: function inputValue() {
			if (this.select) {
				return this.select.state.inputValue;
			}
			return '';
		}
	}, {
		key: 'noResultsText',
		value: function noResultsText() {
			var _props2 = this.props;
			var loadingPlaceholder = _props2.loadingPlaceholder;
			var noResultsText = _props2.noResultsText;
			var searchPromptText = _props2.searchPromptText;
			var isLoading = this.state.isLoading;

			var inputValue = this.inputValue();

			if (isLoading) {
				return loadingPlaceholder;
			}
			if (inputValue && noResultsText) {
				return noResultsText;
			}
			return searchPromptText;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props3 = this.props;
			var children = _props3.children;
			var loadingPlaceholder = _props3.loadingPlaceholder;
			var placeholder = _props3.placeholder;
			var _state = this.state;
			var isLoading = _state.isLoading;
			var options = _state.options;

			var props = {
				noResultsText: this.noResultsText(),
				placeholder: isLoading ? loadingPlaceholder : placeholder,
				options: isLoading && loadingPlaceholder ? [] : options,
				ref: function ref(_ref) {
					return _this3.select = _ref;
				},
				onChange: function onChange(newValues) {
					if (_this3.props.multi && _this3.props.value && newValues.length > _this3.props.value.length) {
						_this3.clearOptions();
					}
					_this3.props.onChange(newValues);
				}
			};

			return children(_extends({}, this.props, props, {
				isLoading: isLoading,
				onInputChange: this._onInputChange
			}));
		}
	}]);

	return Async;
})(_react.Component);

exports['default'] = Async;

Async.propTypes = propTypes;
Async.defaultProps = defaultProps;

function defaultChildren(props) {
	return _react2['default'].createElement(_Select2['default'], props);
}
module.exports = exports['default'];

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(13);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _Select = __webpack_require__(48);

var _Select2 = _interopRequireDefault(_Select);

function reduce(obj) {
	var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	return Object.keys(obj).reduce(function (props, key) {
		var value = obj[key];
		if (value !== undefined) props[key] = value;
		return props;
	}, props);
}

var AsyncCreatable = (0, _createReactClass2['default'])({
	displayName: 'AsyncCreatableSelect',

	focus: function focus() {
		this.select.focus();
	},

	render: function render() {
		var _this = this;

		return _react2['default'].createElement(
			_Select2['default'].Async,
			this.props,
			function (asyncProps) {
				return _react2['default'].createElement(
					_Select2['default'].Creatable,
					_this.props,
					function (creatableProps) {
						return _react2['default'].createElement(_Select2['default'], _extends({}, reduce(asyncProps, reduce(creatableProps, {})), {
							onInputChange: function (input) {
								creatableProps.onInputChange(input);
								return asyncProps.onInputChange(input);
							},
							ref: function (ref) {
								_this.select = ref;
								creatableProps.ref(ref);
								asyncProps.ref(ref);
							}
						}));
					}
				);
			}
		);
	}
});

module.exports = AsyncCreatable;

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(13);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Select = __webpack_require__(48);

var _Select2 = _interopRequireDefault(_Select);

var _utilsDefaultFilterOptions = __webpack_require__(155);

var _utilsDefaultFilterOptions2 = _interopRequireDefault(_utilsDefaultFilterOptions);

var _utilsDefaultMenuRenderer = __webpack_require__(156);

var _utilsDefaultMenuRenderer2 = _interopRequireDefault(_utilsDefaultMenuRenderer);

var Creatable = (0, _createReactClass2['default'])({
	displayName: 'CreatableSelect',

	propTypes: {
		// Child function responsible for creating the inner Select component
		// This component can be used to compose HOCs (eg Creatable and Async)
		// (props: Object): PropTypes.element
		children: _propTypes2['default'].func,

		// See Select.propTypes.filterOptions
		filterOptions: _propTypes2['default'].any,

		// Searches for any matching option within the set of options.
		// This function prevents duplicate options from being created.
		// ({ option: Object, options: Array, labelKey: string, valueKey: string }): boolean
		isOptionUnique: _propTypes2['default'].func,

		// Determines if the current input text represents a valid option.
		// ({ label: string }): boolean
		isValidNewOption: _propTypes2['default'].func,

		// See Select.propTypes.menuRenderer
		menuRenderer: _propTypes2['default'].any,

		// Factory to create new option.
		// ({ label: string, labelKey: string, valueKey: string }): Object
		newOptionCreator: _propTypes2['default'].func,

		// input change handler: function (inputValue) {}
		onInputChange: _propTypes2['default'].func,

		// input keyDown handler: function (event) {}
		onInputKeyDown: _propTypes2['default'].func,

		// new option click handler: function (option) {}
		onNewOptionClick: _propTypes2['default'].func,

		// See Select.propTypes.options
		options: _propTypes2['default'].array,

		// Creates prompt/placeholder option text.
		// (filterText: string): string
		promptTextCreator: _propTypes2['default'].func,

		// Decides if a keyDown event (eg its `keyCode`) should result in the creation of a new option.
		shouldKeyDownEventCreateNewOption: _propTypes2['default'].func
	},

	// Default prop methods
	statics: {
		isOptionUnique: isOptionUnique,
		isValidNewOption: isValidNewOption,
		newOptionCreator: newOptionCreator,
		promptTextCreator: promptTextCreator,
		shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption
	},

	getDefaultProps: function getDefaultProps() {
		return {
			filterOptions: _utilsDefaultFilterOptions2['default'],
			isOptionUnique: isOptionUnique,
			isValidNewOption: isValidNewOption,
			menuRenderer: _utilsDefaultMenuRenderer2['default'],
			newOptionCreator: newOptionCreator,
			promptTextCreator: promptTextCreator,
			shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption
		};
	},

	createNewOption: function createNewOption() {
		var _props = this.props;
		var isValidNewOption = _props.isValidNewOption;
		var newOptionCreator = _props.newOptionCreator;
		var onNewOptionClick = _props.onNewOptionClick;
		var _props$options = _props.options;
		var options = _props$options === undefined ? [] : _props$options;
		var shouldKeyDownEventCreateNewOption = _props.shouldKeyDownEventCreateNewOption;

		if (isValidNewOption({ label: this.inputValue })) {
			var option = newOptionCreator({ label: this.inputValue, labelKey: this.labelKey, valueKey: this.valueKey });
			var _isOptionUnique = this.isOptionUnique({ option: option });

			// Don't add the same option twice.
			if (_isOptionUnique) {
				if (onNewOptionClick) {
					onNewOptionClick(option);
				} else {
					options.unshift(option);

					this.select.selectValue(option);
				}
			}
		}
	},

	filterOptions: function filterOptions() {
		var _props2 = this.props;
		var filterOptions = _props2.filterOptions;
		var isValidNewOption = _props2.isValidNewOption;
		var options = _props2.options;
		var promptTextCreator = _props2.promptTextCreator;

		// TRICKY Check currently selected options as well.
		// Don't display a create-prompt for a value that's selected.
		// This covers async edge-cases where a newly-created Option isn't yet in the async-loaded array.
		var excludeOptions = arguments[2] || [];

		var filteredOptions = filterOptions.apply(undefined, arguments) || [];

		if (isValidNewOption({ label: this.inputValue })) {
			var _newOptionCreator = this.props.newOptionCreator;

			var option = _newOptionCreator({
				label: this.inputValue,
				labelKey: this.labelKey,
				valueKey: this.valueKey
			});

			// TRICKY Compare to all options (not just filtered options) in case option has already been selected).
			// For multi-selects, this would remove it from the filtered list.
			var _isOptionUnique2 = this.isOptionUnique({
				option: option,
				options: excludeOptions.concat(filteredOptions)
			});

			if (_isOptionUnique2) {
				var _prompt = promptTextCreator(this.inputValue);

				this._createPlaceholderOption = _newOptionCreator({
					label: _prompt,
					labelKey: this.labelKey,
					valueKey: this.valueKey
				});

				filteredOptions.unshift(this._createPlaceholderOption);
			}
		}

		return filteredOptions;
	},

	isOptionUnique: function isOptionUnique(_ref2) {
		var option = _ref2.option;
		var options = _ref2.options;
		var isOptionUnique = this.props.isOptionUnique;

		options = options || this.select.filterOptions();

		return isOptionUnique({
			labelKey: this.labelKey,
			option: option,
			options: options,
			valueKey: this.valueKey
		});
	},

	menuRenderer: function menuRenderer(params) {
		var menuRenderer = this.props.menuRenderer;

		return menuRenderer(_extends({}, params, {
			onSelect: this.onOptionSelect,
			selectValue: this.onOptionSelect
		}));
	},

	onInputChange: function onInputChange(input) {
		var onInputChange = this.props.onInputChange;

		if (onInputChange) {
			onInputChange(input);
		}

		// This value may be needed in between Select mounts (when this.select is null)
		this.inputValue = input;
	},

	onInputKeyDown: function onInputKeyDown(event) {
		var _props3 = this.props;
		var shouldKeyDownEventCreateNewOption = _props3.shouldKeyDownEventCreateNewOption;
		var onInputKeyDown = _props3.onInputKeyDown;

		var focusedOption = this.select.getFocusedOption();

		if (focusedOption && focusedOption === this._createPlaceholderOption && shouldKeyDownEventCreateNewOption({ keyCode: event.keyCode })) {
			this.createNewOption();

			// Prevent decorated Select from doing anything additional with this keyDown event
			event.preventDefault();
		} else if (onInputKeyDown) {
			onInputKeyDown(event);
		}
	},

	onOptionSelect: function onOptionSelect(option, event) {
		if (option === this._createPlaceholderOption) {
			this.createNewOption();
		} else {
			this.select.selectValue(option);
		}
	},

	focus: function focus() {
		this.select.focus();
	},

	render: function render() {
		var _this = this;

		var _props4 = this.props;
		var newOptionCreator = _props4.newOptionCreator;
		var shouldKeyDownEventCreateNewOption = _props4.shouldKeyDownEventCreateNewOption;

		var restProps = _objectWithoutProperties(_props4, ['newOptionCreator', 'shouldKeyDownEventCreateNewOption']);

		var children = this.props.children;

		// We can't use destructuring default values to set the children,
		// because it won't apply work if `children` is null. A falsy check is
		// more reliable in real world use-cases.
		if (!children) {
			children = defaultChildren;
		}

		var props = _extends({}, restProps, {
			allowCreate: true,
			filterOptions: this.filterOptions,
			menuRenderer: this.menuRenderer,
			onInputChange: this.onInputChange,
			onInputKeyDown: this.onInputKeyDown,
			ref: function ref(_ref) {
				_this.select = _ref;

				// These values may be needed in between Select mounts (when this.select is null)
				if (_ref) {
					_this.labelKey = _ref.props.labelKey;
					_this.valueKey = _ref.props.valueKey;
				}
			}
		});

		return children(props);
	}
});

function defaultChildren(props) {
	return _react2['default'].createElement(_Select2['default'], props);
};

function isOptionUnique(_ref3) {
	var option = _ref3.option;
	var options = _ref3.options;
	var labelKey = _ref3.labelKey;
	var valueKey = _ref3.valueKey;

	return options.filter(function (existingOption) {
		return existingOption[labelKey] === option[labelKey] || existingOption[valueKey] === option[valueKey];
	}).length === 0;
};

function isValidNewOption(_ref4) {
	var label = _ref4.label;

	return !!label;
};

function newOptionCreator(_ref5) {
	var label = _ref5.label;
	var labelKey = _ref5.labelKey;
	var valueKey = _ref5.valueKey;

	var option = {};
	option[valueKey] = label;
	option[labelKey] = label;
	option.className = 'Select-create-option-placeholder';
	return option;
};

function promptTextCreator(label) {
	return 'Create option "' + label + '"';
}

function shouldKeyDownEventCreateNewOption(_ref6) {
	var keyCode = _ref6.keyCode;

	switch (keyCode) {
		case 9: // TAB
		case 13: // ENTER
		case 188:
			// COMMA
			return true;
	}

	return false;
};

module.exports = Creatable;

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(13);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var Option = (0, _createReactClass2['default'])({
	propTypes: {
		children: _propTypes2['default'].node,
		className: _propTypes2['default'].string, // className (based on mouse position)
		instancePrefix: _propTypes2['default'].string.isRequired, // unique prefix for the ids (used for aria)
		isDisabled: _propTypes2['default'].bool, // the option is disabled
		isFocused: _propTypes2['default'].bool, // the option is focused
		isSelected: _propTypes2['default'].bool, // the option is selected
		onFocus: _propTypes2['default'].func, // method to handle mouseEnter on option element
		onSelect: _propTypes2['default'].func, // method to handle click on option element
		onUnfocus: _propTypes2['default'].func, // method to handle mouseLeave on option element
		option: _propTypes2['default'].object.isRequired, // object that is base for that option
		optionIndex: _propTypes2['default'].number },
	// index of the option, used to generate unique ids for aria
	blockEvent: function blockEvent(event) {
		event.preventDefault();
		event.stopPropagation();
		if (event.target.tagName !== 'A' || !('href' in event.target)) {
			return;
		}
		if (event.target.target) {
			window.open(event.target.href, event.target.target);
		} else {
			window.location.href = event.target.href;
		}
	},

	handleMouseDown: function handleMouseDown(event) {
		event.preventDefault();
		event.stopPropagation();
		this.props.onSelect(this.props.option, event);
	},

	handleMouseEnter: function handleMouseEnter(event) {
		this.onFocus(event);
	},

	handleMouseMove: function handleMouseMove(event) {
		this.onFocus(event);
	},

	handleTouchEnd: function handleTouchEnd(event) {
		// Check if the view is being dragged, In this case
		// we don't want to fire the click event (because the user only wants to scroll)
		if (this.dragging) return;

		this.handleMouseDown(event);
	},

	handleTouchMove: function handleTouchMove(event) {
		// Set a flag that the view is being dragged
		this.dragging = true;
	},

	handleTouchStart: function handleTouchStart(event) {
		// Set a flag that the view is not being dragged
		this.dragging = false;
	},

	onFocus: function onFocus(event) {
		if (!this.props.isFocused) {
			this.props.onFocus(this.props.option, event);
		}
	},
	render: function render() {
		var _props = this.props;
		var option = _props.option;
		var instancePrefix = _props.instancePrefix;
		var optionIndex = _props.optionIndex;

		var className = (0, _classnames2['default'])(this.props.className, option.className);

		return option.disabled ? _react2['default'].createElement(
			'div',
			{ className: className,
				onMouseDown: this.blockEvent,
				onClick: this.blockEvent },
			this.props.children
		) : _react2['default'].createElement(
			'div',
			{ className: className,
				style: option.style,
				role: 'option',
				onMouseDown: this.handleMouseDown,
				onMouseEnter: this.handleMouseEnter,
				onMouseMove: this.handleMouseMove,
				onTouchStart: this.handleTouchStart,
				onTouchMove: this.handleTouchMove,
				onTouchEnd: this.handleTouchEnd,
				id: instancePrefix + '-option-' + optionIndex,
				title: option.title },
			this.props.children
		);
	}
});

module.exports = Option;

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(13);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var Value = (0, _createReactClass2['default'])({

	displayName: 'Value',

	propTypes: {
		children: _propTypes2['default'].node,
		disabled: _propTypes2['default'].bool, // disabled prop passed to ReactSelect
		id: _propTypes2['default'].string, // Unique id for the value - used for aria
		onClick: _propTypes2['default'].func, // method to handle click on value label
		onRemove: _propTypes2['default'].func, // method to handle removal of the value
		value: _propTypes2['default'].object.isRequired },

	// the option object for this value
	handleMouseDown: function handleMouseDown(event) {
		if (event.type === 'mousedown' && event.button !== 0) {
			return;
		}
		if (this.props.onClick) {
			event.stopPropagation();
			this.props.onClick(this.props.value, event);
			return;
		}
		if (this.props.value.href) {
			event.stopPropagation();
		}
	},

	onRemove: function onRemove(event) {
		event.preventDefault();
		event.stopPropagation();
		this.props.onRemove(this.props.value);
	},

	handleTouchEndRemove: function handleTouchEndRemove(event) {
		// Check if the view is being dragged, In this case
		// we don't want to fire the click event (because the user only wants to scroll)
		if (this.dragging) return;

		// Fire the mouse events
		this.onRemove(event);
	},

	handleTouchMove: function handleTouchMove(event) {
		// Set a flag that the view is being dragged
		this.dragging = true;
	},

	handleTouchStart: function handleTouchStart(event) {
		// Set a flag that the view is not being dragged
		this.dragging = false;
	},

	renderRemoveIcon: function renderRemoveIcon() {
		if (this.props.disabled || !this.props.onRemove) return;
		return _react2['default'].createElement(
			'span',
			{ className: 'Select-value-icon',
				'aria-hidden': 'true',
				onMouseDown: this.onRemove,
				onTouchEnd: this.handleTouchEndRemove,
				onTouchStart: this.handleTouchStart,
				onTouchMove: this.handleTouchMove },
			'×'
		);
	},

	renderLabel: function renderLabel() {
		var className = 'Select-value-label';
		return this.props.onClick || this.props.value.href ? _react2['default'].createElement(
			'a',
			{ className: className, href: this.props.value.href, target: this.props.value.target, onMouseDown: this.handleMouseDown, onTouchEnd: this.handleMouseDown },
			this.props.children
		) : _react2['default'].createElement(
			'span',
			{ className: className, role: 'option', 'aria-selected': 'true', id: this.props.id },
			this.props.children
		);
	},

	render: function render() {
		return _react2['default'].createElement(
			'div',
			{ className: (0, _classnames2['default'])('Select-value', this.props.value.className),
				style: this.props.value.style,
				title: this.props.value.title
			},
			this.renderRemoveIcon(),
			this.renderLabel()
		);
	}

});

module.exports = Value;

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = arrowRenderer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function arrowRenderer(_ref) {
	var onMouseDown = _ref.onMouseDown;

	return _react2["default"].createElement("span", {
		className: "Select-arrow",
		onMouseDown: onMouseDown
	});
}

;
module.exports = exports["default"];

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = clearRenderer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function clearRenderer() {
	return _react2['default'].createElement('span', {
		className: 'Select-clear',
		dangerouslySetInnerHTML: { __html: '&times;' }
	});
}

;
module.exports = exports['default'];

/***/ })
],[160]);
//# sourceMappingURL=bundle.js.map