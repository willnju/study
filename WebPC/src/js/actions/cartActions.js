/**
 * @file cartActions.js
 * @desc 购物车相关的actions
 * @author wangyong(1223427693@qq.com)
 */
import $ from 'jquery';

import NProgress from '../utils/NProgress';
import { API_PREFIX } from '../constants/api';
import { message } from '../plugins/Message';

function clearCartListStorage() {
    localStorage.removeItem("cartList");
}

// 获取购物车列表
export function loadCartList(opt = {}) {
    return (dispatch, getState) => {
        const { cb = () => {} } = opt;
        const userInfo = getState().userInfo;

        // 未登录情况下加载本地购物车列表
        if (userInfo == null)  {
            let cartList = loadCartListStorage();
            dispatch({
                type: 'LOAD_CARTLIST_SUCCESS',
                data: cartList
            });
            cb();
        } else {
            // 已登录情况下需要先判断本地购物车列表是否为空，不如不为空，需要和线上购物车同步
            let cartList = loadCartListStorage();
            if (cartList.length > 0) {
                const cartItems = _.map(cartList, _item => {
                    return {
                        p_id: _item.p_id,
                        s_id: _item.s_id,
                        number: _item.number
                    };
                });
                $.post(`${API_PREFIX}/transaction/cartAdd`, {
                    games: JSON.stringify(cartItems)
                }).done(res => {
                    if (res.Code === 40000) {
                        // 合并本地购物车和线上购物车以后需要清空本地的购物车
                        clearCartListStorage();
                        $.get(`${API_PREFIX}/transaction/cart`)
                            .done(res => {
                                if (res.Code === 40000) {
                                    dispatch({
                                        type: 'LOAD_CARTLIST_SUCCESS',
                                        data: res.data
                                    });
                                } else {
                                    message.error(res.Msg);
                                }
                            })
                            .fail(err => {
                                message.error(err.statusText);
                            })
                            .always(() => {
                                cb();
                            })
                    } else {
                        message.error(res.Msg);
                    }
                }).fail(err => {
                    message.error(err.statusText);
                })
            } else {
                $.get(`${API_PREFIX}/transaction/cart`)
                    .done(res => {
                        if (res.Code === 40000) {
                            dispatch({
                                type: 'LOAD_CARTLIST_SUCCESS',
                                data: res.data
                            });
                        } else {
                            message.error(res.Msg);
                        }
                    })
                    .fail(err => {
                        message.error(err.statusText);
                    })
                    .always(() => {
                        cb();
                    })
            }
        }
    }
}

// 未登录获取购物车列表
function loadCartListStorage() {
    let cartList = localStorage.getItem("cartList") || "[]";
    return JSON.parse(cartList);
}

// 添加游戏到购物车
export function addToCart(opt = {}) {
    return (dispatch, getState) => {
        NProgress.start();
        const { game, cb = () => {} } = opt;
        const userInfo = getState().userInfo;

        // 未登录情况下添加商品到本地购物车列表
        if (userInfo == null) {
            addToCartStorage(game);
            let cartList = loadCartListStorage();
            dispatch({
                type: 'UPDATE_CARTLIST_SUCCESS',
                data: cartList
            });
            NProgress.done();
            cb();
        } else {
            $.post(`${API_PREFIX}/transaction/cart`, {
                p_id: game.p_id,
                s_id: game.s_id || 0,
                number: 1
            }).done(res => {
                if (res.Code === 40000) {
                    // 添加完游戏以后更新购物车
                    $.get(`${API_PREFIX}/transaction/cart`)
                        .done(res => {
                            dispatch({
                                type: 'UPDATE_CARTLIST_SUCCESS',
                                data: res.data
                            });
                            cb();
                        })
                        .fail(err => {
                            message.error(err.statusText);
                        })
                        .always(() => {
                            NProgress.done();
                        })
                } else {
                    NProgress.done();
                    message.error(res.Msg);
                }
            }).fail(err => {
                NProgress.done();
                message.error(err.statusText);
            })
        }
    }
}

// 未登录加入购物车
function addToCartStorage(game) {
    let cartList = loadCartListStorage();
    const index = _.findIndex(cartList, {
        s_id: game.s_id
    });
    if (index > -1) {
        cartList[index].number = cartList[index].number + 1;
    } else {
        const cartItem = _.assign({}, game, {
            number: 1,
            thumbnail: game.thumb_img,
            cart_id: (new Date()) * 1
        });
        cartList.push(cartItem);
    }
    localStorage.setItem('cartList', JSON.stringify(cartList));
}

// 修改购物车数量
export function updateCartNumber(opt = {}) {
    return (dispatch, getState) => {
        NProgress.start();
        const { game, number, cb = () => {} } = opt;
        const userInfo = getState().userInfo;

        // 未登录情况下修改本地购物车数量
        if (userInfo == null) {
            updateCartNumberStorage(game, number);
            let cartList = loadCartListStorage();
            dispatch({
                type: 'UPDATE_CARTLIST_SUCCESS',
                data: cartList
            });
            NProgress.done();
            cb();
        } else {
            $.ajax({
                url: `${API_PREFIX}/transaction/cart`,
                type: 'put',
                data: {
                    cart_id: game.cart_id,
                    number: number
                }
            }).done(res => {
                if (res.Code === 40000) {
                    // 删除以后更新购物车
                    $.get(`${API_PREFIX}/transaction/cart`)
                        .done(res => {
                            dispatch({
                                type: 'UPDATE_CARTLIST_SUCCESS',
                                data: res.data
                            });
                            cb();
                        })
                        .fail(err => {
                            message.error(err.statusText);
                        })
                        .always(() => {
                            NProgress.done();
                        })
                } else {
                    NProgress.done();
                    message.error(res.Msg);
                }
            }).fail(err => {
                NProgress.done();
                message.error(err.statusText);
            })
        }
    }
}

// 未登录情况下修改购物车数量
function updateCartNumberStorage(game, number) {
    let cartList = loadCartListStorage();
    const index = _.findIndex(cartList, {
        cart_id: game.cart_id
    });
    if (index > -1) {
        cartList[index].number = number;
    }
    localStorage.setItem("cartList", JSON.stringify(cartList));
}

// 删除购物车游戏
export function removeFromCart(opt = {}) {
    return (dispatch, getState) => {
        NProgress.start();
        const { game, cb = () => {} } = opt;
        const userInfo = getState().userInfo;

        // 未登录情况下删除购物车
        if (userInfo == null) {
            removeFromCartStorage(game);
            let cartList = loadCartListStorage();
            dispatch({
                type: 'UPDATE_CARTLIST_SUCCESS',
                data: cartList
            });
            NProgress.done();
            cb();
        } else {
            $.ajax({
                url: `${API_PREFIX}/transaction/cart`,
                type: 'delete',
                data: { cart_id: game.cart_id }
            }).done(res => {
                if (res.Code === 40000) {
                    // 删除以后更新购物车
                    $.get(`${API_PREFIX}/transaction/cart`)
                        .done(res => {
                            dispatch({
                                type: 'UPDATE_CARTLIST_SUCCESS',
                                data: res.data
                            });
                            cb();
                        })
                        .fail(err => {
                            message.error(err.statusText);
                        })
                        .always(() => {
                            NProgress.done();
                        })
                } else {
                    NProgress.done();
                    message.error(res.Msg);
                }
            }).fail(err => {
                NProgress.done();
                message.error(err.statusText);
            })
        }
    }
}

// 未登录情况下删除购物车
function removeFromCartStorage(game) {
    let cartList = loadCartListStorage();
    cartList = _.filter(cartList, _item => {
        return _item.cart_id !== game.cart_id
    });
    localStorage.setItem("cartList", JSON.stringify(cartList));
}

// 初始化支付方式
export function initialPayMethod() {
    return {
        type: 'INITIAL_PAYMETHOD'
    };
}
// 更新支付方式
export function updatePayMethod(method) {
    return {
        type: 'UPDATE_PAYMETHOD',
        data: method
    }
}