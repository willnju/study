/**
 * @file orderActions.js
 * @desc 订单相关的actions
 * @author wangyong(1223427693@qq.com)
 */
import $ from 'jquery';

import NProgress from '../utils/NProgress';
import { API_PREFIX } from '../constants/api';
import { message } from '../plugins/Message';

// 下单
export function makeOrder(opt = {}) {
    // return (dispatch, getState) => {
    //     const { method = 1, cb = () => {} } = opt;
    //     cb({
    //         "img":"iVBORw0KGgoAAAANSUhEUgAAAG8AAABvAQMAAADYCwwjAAAABlBMVEX\/\/\/8AAABVwtN+AAABIklEQVQ4jdXTzY2FIBAH8L\/hwA0beAltcKMlbWCfNqAtcaMNEhrw3TgYZ0fdr8syXB8hxh8JgRlmgHccPdEc8KEzURJpoNaYupInNNDnmdTi8lqauEZ0oZWToxe1EXyK3fB7yQo5Xr4Sz5\/wK7zGDvc3nf+yp0wlv2gfo0wDjAF9pMMlkX20FNMz7OY+qErj0JGaeD3I5H86047BJ5HGPbpCh85HC0GvYg9n1\/vcOt2jL\/vgzrNEcvlR4HmuiOyv+0PT1\/tWabSddHoWtV17Bbo0eLV5ddxlVqenRZ\/VRQUi7\/xwo5nr9evkXWuwm+aihUjuhZkzo5P5bo0afV6Q50CHRwvXwl+MlJoY0xg4YMjk\/vVqAV9M5hlvxKDt5mS+3\/gEx+Lm0GN6g3MAAAAASUVORK5CYII=",
    //         "out_trade_no":"2017052608572342272"
    //     })
    // }

    return (dispatch, getState) => {
        NProgress.start();
        const { method = 1, cb = () => {}, fb = () => {} } = opt;
        $.post(`${API_PREFIX}/transaction/order`, {
            integral: 0,
            payment_id: method
        }).done(res => {
            if (res.Code === 40000) {
                cb(res.data);
            } else {
                message.error(res.Msg);
                // 未登录情况
                if (res.Code === 40001) {
                    fb();
                }
            }
        }).fail(err => {
            message.error(err.statusText);
        }).always(() => {
            NProgress.done();
        })
    }
}

// 获取订单列表
export function loadOrderList(opt = {}) {
    return (dispatch, getState) => {
        const { cb = () => {} } = opt;
        $.get(
            `${API_PREFIX}/transaction/order`
        ).done(res => {
            if (res.Code === 40000) {
                dispatch({
                    type: 'LOAD_ORDER_LIST_SUCCESS',
                    data: res.data
                });
                cb();
            } else {
                message.error(res.Msg);
            }
        }).fail(err => {
            message.error(err.statusText);
        })
    }
}

// 获取订单详情
export function loadOrderDetail(opt = {}) {
    return (dispatch, getState) => {
        NProgress.start();
        const { orderId, cb = () => {} } = opt;
        $.get(
            `${API_PREFIX}/transaction/order/${orderId}`
        ).done(res => {
            if (res.Code === 40000) {
                cb(res.data);
            } else {
                message.error(res.Msg);
            }
        }).fail(err => {
            message.error(err.statusText);
        }).always(() => {
            NProgress.done();
        })
    }
}

// 查询微信支付状态
export function getWeChatOrderStatus(opt = {}) {
    // return (dispatch, getState) => {
    //     const { cb = () => {}, orderNum = '', payedCb = () => {}, nopayCb = () => {} } = opt;
    //     setTimeout(() => {
    //         payedCb();
    //     }, 3000);
    // }


    return (dispatch, getState) => {
        const { cb = () => {}, orderNum = '', payedCb = () => {}, nopayCb = () => {} } = opt;
        $.get(
            `${API_PREFIX}/transaction/order/${orderNum}/status`
        ).done(res => {
            if (res.Code === 40000) {
                let status = res.data.status;
                if (parseInt(status) === 1) {
                    payedCb();
                } else {
                    nopayCb();
                }
                cb();
            } else {
                message.error(res.Msg);
            }
        }).fail(err => {
            message.error(err.statusText);
        })
    }
}

// 立即支付
export function orderPay(opt = {}) {
    // return (dispatch, getState) => {
    //     const { method = 1, cb = () => {}, orderId = '' } = opt;
    //     console.log(orderId);
    //     cb({
    //         "img":"iVBORw0KGgoAAAANSUhEUgAAAG8AAABvAQMAAADYCwwjAAAABlBMVEX\/\/\/8AAABVwtN+AAABIklEQVQ4jdXTzY2FIBAH8L\/hwA0beAltcKMlbWCfNqAtcaMNEhrw3TgYZ0fdr8syXB8hxh8JgRlmgHccPdEc8KEzURJpoNaYupInNNDnmdTi8lqauEZ0oZWToxe1EXyK3fB7yQo5Xr4Sz5\/wK7zGDvc3nf+yp0wlv2gfo0wDjAF9pMMlkX20FNMz7OY+qErj0JGaeD3I5H86047BJ5HGPbpCh85HC0GvYg9n1\/vcOt2jL\/vgzrNEcvlR4HmuiOyv+0PT1\/tWabSddHoWtV17Bbo0eLV5ddxlVqenRZ\/VRQUi7\/xwo5nr9evkXWuwm+aihUjuhZkzo5P5bo0afV6Q50CHRwvXwl+MlJoY0xg4YMjk\/vVqAV9M5hlvxKDt5mS+3\/gEx+Lm0GN6g3MAAAAASUVORK5CYII=",
    //         "out_trade_no":"2017052608572342272"
    //     })
        
    // }

    return (dispatch, getState) => {
        const { cb = () => {}, orderId = '' } = opt;
        $.post(`${API_PREFIX}/transaction/order/orderPay`, {
            order_id: orderId
        }).done(res => {
            if (res.Code === 40000) {
                cb(res.data);
            } else {
                message.error(res.Msg);
            }
        }).fail(err => {
            message.error(err.statusText);
        })
    }
}

// 查看订单key
export function loadOrderKeys(opt = {}) {
    return (dispatch, getState) => {
        NProgress.start();
        const { orderId, cb = () => {} } = opt;
        $.get(`${API_PREFIX}/transaction/order/key`, {
            order_id: orderId
        }).done(res => {
            if (res.Code === 40000) {
                cb(res.data);
            } else {
                message.error(res.Msg);
            }
        }).fail(err => {
            message.error(err.statusText);
        }).always(() => {
            NProgress.done();
        })
    }
}