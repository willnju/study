/**
 * @file gameActions.js
 * @desc 游戏相关的actions
 * @author wangyong(1223427693@qq.com)
 */
import $ from 'jquery';

import NProgress from '../utils/NProgress';
import { API_PREFIX } from '../constants/api';
import { message } from '../plugins/Message';
    
// 加载首页轮播游戏列表
export function loadSliderGamesList(opt = {}) {
    return (dispatch, getState) => {
        const { cb = () => {} } = opt;
        $.get(`${API_PREFIX}/product/slider`)
            .done(res => {
                let sliderGames = res.data.games;
                let sliderGamesBg = res.data.bg;
                dispatch({
                    type: 'LOAD_SLIDER_GAMES_LIST_SUCCESS',
                    data: sliderGames
                });
                dispatch({
                    type: 'LOAD_SLIDER_GAMES_BG_SUCCESS',
                    data: sliderGamesBg
                });
                cb();
            })
            .fail(err => {
                message.error(err.statusText);
            });
    }
}

// 加载最新游戏列表
export function loadLatestGamesList(opt = {}) {
    return (dispatch, getState) => {
        const { cb = () => {} } = opt;
        $.get(`${API_PREFIX}/product/new`)
            .done(res => {
                let latestGames = res.data;
                dispatch({
                    type: 'LOAD_LATEST_GAMES_LIST_SUCCESS',
                    data: latestGames
                });
                cb();
            })
            .fail(err => {
                message.error(err.statusText);
            })
    }
}

// 加载畅销游戏列表
export function loadPopularGamesList(opt = {}) {
    return (dispatch, getState) => {
        const { cb = () => {} } = opt;
        $.get(`${API_PREFIX}/product/hot`)
            .done(res => {
                let popularGames = res.data;
                dispatch({
                    type: 'LOAD_POPULAR_GAMES_LIST_SUCCESS',
                    data: popularGames
                });
                cb();
            })
            .fail(err => {
                message.error(err.statusText);
            })
    }
}

// 加载特别游戏列表
export function loadSpecialGamesList(opt = {}) {
    return (dispatch, getState) => {
        const { cb = () => {} } = opt;
        $.get(
            `${API_PREFIX}/product/slider2`
        ).done(res => {
            let specialGames = res.data.games;
            let specialGamesBg = res.data.bg;
            dispatch({
                type: 'LOAD_SPECIAL_GAMES_LIST_SUCCESS',
                data: specialGames
            });
            dispatch({
                type: 'LOAD_SPECIAL_GAMES_BG_SUCCESS',
                data: specialGamesBg
            });
            cb();
        }).fail(err => {
            message.error(err.statusText);
        })
    }
}

// 加载游戏详情
export function loadGameDeatil(opt = {}) {
    return (dispatch, getState) => {
        NProgress.start();
        const { id, cb = () => {} } = opt;
        $.get(`${API_PREFIX}/product/${id}`)
            .done(res => {
                dispatch({
                    type: 'LOAD_GAME_DETAIL_SUCCESS',
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
    }
}

// 加载游戏列表组，包括最新、折扣、预售游戏
export function loadGamesListGroup(opt = {}) {
    return (dispatch, getState) => {
        const { cb = () => {} } = opt;
        Promise.all([
            loadLatestGamesListPromise(),
            loadDiscountGamesListPromise(),
            loadPreorderGamesListPromise()
        ]).then(values => {
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
        }).catch(err => {
            message.error(err);
        })
    }
}

// 加载最新游戏
function loadLatestGamesListPromise() {
    return new Promise((resolve, reject) => {
        $.get(`${API_PREFIX}/product/new`)
            .done(res => {
                if (res.Code === 40000) {
                    resolve(res);
                } else {
                    reject(res.Msg);
                }
            })
            .fail(err => {
                reject(err.statusText)
            })
    })
}

// 加载折扣游戏
function loadDiscountGamesListPromise() {
    return new Promise((resolve, reject) => {
        $.get(`${API_PREFIX}/product/discount`)
            .done(res => {
                if (res.Code === 40000) {
                    resolve(res);
                } else {
                    reject(res.Msg);
                }
            })
            .fail(err => {
                reject(err.statusText);
            })
    })
}

// 加载预售游戏
function loadPreorderGamesListPromise() {
    return new Promise((resolve, reject) => {
        $.get(`${API_PREFIX}/product/presell`)
            .done(res => {
                if (res.Code === 40000) {
                    resolve(res);
                } else {
                    reject(res.Msg);
                }
            })
            .fail(err => {
                reject(err.statusText);
            })
    })
}