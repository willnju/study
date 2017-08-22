/**
 * @file saleActions.js
 * @desc 销售游戏相关的actions
 * @author wangyong(1223427693@qq.com)
 */
import $ from 'jquery';
import _ from 'lodash';

import NProgress from '../utils/NProgress';
import { API_PREFIX } from '../constants/api';
import { message } from '../plugins/Message';

// 销售游戏
export function saveSaleProduct(opt = {}) {
    return (dispatch, getState) => {
        const { data = {}, cb = () => {} } = opt;
        $.ajax({
            url: `${API_PREFIX}/user/sale`,
            type: "post",
            data: data,
            processData: false,
            contentType: false
        }).done(res => {
            if (res.Code === 40000) {
                message.success(res.Msg);
                cb();
            } else {
                message.error(res.Msg);
            }
        }).fail(err => {
            message.error(err.statusText);
        })
    }
}

// 获取销售的游戏列表
export function loadSaleProductList(opt = {}) {
    return (dispatch, getState) => {
        const { cb = () => {} } = opt;
        $.get(`${API_PREFIX}/user/sale`).done(res => {
            if (res.Code === 40000) {
                dispatch({
                    type: 'LOAD_SALE_PRODUCT_LIST_SUCCESS',
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

// 获取剩余免费销售次数
export function loadSaleProductFreeTimes(opt = {}) {
    return (dispatch, getState) => {
        const { cb = () => {} } = opt;
        $.get(`${API_PREFIX}/user/times`).done(res => {
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

// 获取销售商品详情
export function loadSaleProductDetail(opt = {}) {
    return (dispatch, getState) => {
        const { id, cb = () => {} } = opt;
        $.get(`${API_PREFIX}/user/sale/${id}`).done(res => {
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

// 修改商品上下架状态
export function updateProductSaleStatue(opt = {}) {
    return (dispatch, getState) => {
        NProgress.start();
        const { id, onSale, cb = () => {} } = opt;
        $.ajax({
            type: 'put',
            url: `${API_PREFIX}/user/isSale`,
            data: {
                id: id,
                is_sale: onSale
            }
        }).done(res => {
            if (res.Code === 40000) {
                // 修改上下架状态以后需要更新列表
                $.get(`${API_PREFIX}/user/sale`).done(res2 => {
                    if (res2.Code === 40000) {
                        message.success(res.Msg);
                        dispatch({
                            type: 'LOAD_SALE_PRODUCT_LIST_SUCCESS',
                            data: res2.data
                        });
                        cb();
                    } else {
                        message.error(res2.Msg);
                    }
                }).fail(err => {
                    message.error(err.statusText);
                }).always(() => {
                    NProgress.done();
                })
            } else {
                message.error(res.Msg);
                NProgress.done();
            }
        }).fail(err => {
            message.error(err.statusText);
            NProgress.done();
        });
    }
}

// 修改商品价格
export function updateProductSalePrice(opt = {}) {
    return (dispatch, getState) => {
        NProgress.start();
        const { id, price, cb = () => {} } = opt;
        $.ajax({
            type: 'put',
            url: `${API_PREFIX}/user/price`,
            data: {
                s_id: id,
                price: price
            }
        }).done(res => {
            if (res.Code === 40000) {
                // 修改价格以后需要更新列表
                $.get(`${API_PREFIX}/user/sale`).done(res2 => {
                    if (res2.Code === 40000) {
                        message.success(res.Msg);
                        dispatch({
                            type: 'LOAD_SALE_PRODUCT_LIST_SUCCESS',
                            data: res2.data
                        });
                        cb();
                    } else {
                        message.error(res2.Msg);
                    }
                }).fail(err => {
                    message.error(err.statusText);
                }).always(() => {
                    NProgress.done();
                })
            } else {
                message.error(res.Msg);
                NProgress.done();
            }
        }).fail(err => {
            message.error(err.statusText);
            NProgress.done();
        });
    }
}

// 销售游戏添加key
export function saveAddKeysToSaleProduct(opt = {}) {
    return (dispatch, getState) => {
        NProgress.start();
        const { key, type, game, cb = () => {} } = opt;
        $.post(`${API_PREFIX}/user/sale/key`, {
            p_id: game.p_id,
            type: type,
            sale_price: game.price,
            s_id: game.s_id,
            key: key
        }).done(res => {
            if (res.Code === 40000) {
                $.get(`${API_PREFIX}/user/sale/${game.s_id}`).done(res2 => {
                    if (res2.Code === 40000) {
                        message.success(res.Msg);
                        cb(res2.data);
                    } else {
                        message.error(res2.Msg);
                    }
                }).fail(err => {
                    message.error(err.statusText);
                }).always(() => {
                    NProgress.done();
                })
            } else {
                message.error(res.Msg);
                NProgress.done();
            }
        }).fail(err => {
            message.error(err.statusText);
            NProgress.done();
        });
    }
}

// 删除key
export function saveRemoveKeysFromSaleProduct(opt = {}) {
    return (dispatch, getState) => {
        NProgress.start();
        const { game, keys, cb = () => {} } = opt;
        // TODO, 临时fix，后台不支持双引号，把key都转换成数字
        const numKeys = _.map(keys, _key => {
            return parseInt(_key);
        });
        $.ajax({
            url: `${API_PREFIX}/user/sale/key`,
            type: 'delete',
            data: {
                s_id: game.s_id,
                key_id: JSON.stringify(numKeys)
            },
        }).done(res => {
            if (res.Code === 40000) {
                $.get(`${API_PREFIX}/user/sale/${game.s_id}`).done(res2 => {
                    if (res2.Code === 40000) {
                        message.success(res.Msg);
                        cb(res2.data);
                    } else {
                        message.error(res2.Msg);
                    }
                }).fail(err => {
                    message.error(err.statusText);
                }).always(() => {
                    NProgress.done();
                })
            } else {
                message.error(res.Msg);
                NProgress.done();
            }
        }).fail(err => {
            message.error(err.statusText);
            NProgress.done();
        });
    }
}

// 获取提现记录
export function loadWithdrawHistoryList(opt = {}) {
    return (dispatch, getState) => {
        const { cb = () => {} } = opt;
        $.get(`${API_PREFIX}/user/log/withdrawals`).done(res => {
            if (res.Code === 40000) {
                dispatch({
                    type: 'LOAD_WITHDRAW_HISTORY_LIST_SUCCESS',
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

// 提现申请
export function saveWithdraw(opt = {}) {
    return (dispatch, getState) => {
        const { cb = () => {}, data } = opt;
        $.post(`${API_PREFIX}/user/balance/application`, data).done(res => {
            if (res.Code === 40000) {
                message.success(res.Msg);
                cb();
            } else {
                message.error(res.Msg);
            }
        }).fail(err => {
            message.error(err.statusText);
        })
    }
}

// 获取销售历史记录
export function loadSaleHistoryList(opt = {}) {
    return (dispatch, getState) => {
        const { cb = () => {} } = opt;
        $.get(`${API_PREFIX}/user/history`).done(res => {
            if (res.Code === 40000) {
                dispatch({
                    type: "LOAD_SALE_HISTORY_LIST_SUCCESS",
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

// 获取销售历史详情
export function loadSaleHistoryDetail(opt = {}) {
    return (dispatch, getState) => {
        const { id, cb = () => {} } = opt;
        $.get(`${API_PREFIX}/user/sale/saleDetail`, {
            s_id: id
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

// 获取余额变动记录
export function loadBalanceHistoryList(opt = {}) {
    return (dispatch, getState) => {
        const { cb = () => {} } = opt;
        $.get(`${API_PREFIX}/user/balance/log`)
            .done(res => {
                if (res.Code === 40000) {
                    dispatch({
                        type: 'LOAD_BALANCE_HISTORY_LIST_SUCCESS',
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