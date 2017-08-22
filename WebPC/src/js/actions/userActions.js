/**
 * @file userActions.js
 * @desc user相关的actions
 * @author wangyong(1223427693@qq.com)
 */
import $ from 'jquery';
import $cookie from 'jquery.cookie';

import NProgress from '../utils/NProgress';
import { API_PREFIX } from '../constants/api';
import { message } from '../plugins/Message';

export function loadUsers() {
    return (dispatch, getState) => {
        NProgress.start();
        $.get(`${API_PREFIX}/product/show/listing`)
            .done(res => {
                dispatch({
                    type: 'LOAD_USERS_SUCCESS',
                    data: res
                });
            })
            .fail(err => {
                message.error(err.statusText);
            })
            .always(() => {
                NProgress.done();
            });
    }
}

// 获取用户信息
export function loadUserInfo(opt = {}) {
    return (dispatch, getState) => {
        const { cb = () => {} } = opt;
        $.get(`${API_PREFIX}/user/info`)
            .done(res => {
                if (res.Code === 40000) {
                    dispatch({
                        type: 'LOAD_USERINFO_SUCCESS',
                        data: res.data
                    });
                } else {
                    dispatch({
                        type: 'LOAD_USERINFO_SUCCESS',
                        data: null
                    })
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

// 用户登录
export function userLogin(opt = {}) {
    return (dispatch, getState) => {
        NProgress.start();
        const { data, cb = () => {} } = opt;
        $.post(`${API_PREFIX}/user/session`, data)
            .done(res => {
                if (res.Code === 40000) {
                    message.success(res.Msg);
                    cb();
                } else {
                    message.error(res.Msg);
                }
            })
            .fail(err => {
                message.error(err.statusText);
            })
            .always(() => {
                NProgress.done();
            })
    }
}

// 用户注册
export function userRegister(opt = {}) {
    return (dispatch, getState) => {
        NProgress.start();
        const { data, cb = () => {} } = opt;
        $.post(`${API_PREFIX}/user/account`, data)
            .done(res => {
                if (res.Code === 40000) {
                    message.success(res.Msg);
                } else {
                    message.error(res.Msg);
                }
            })
            .fail(err => {
                message.error(err.statusText);
            })
            .always(() => {
                NProgress.done();
            })
    }
}

// 用户注销
export function userLogout(opt = {}) {
    return (dispatch, getState) => {
        NProgress.start();
        const { cb = () => {} } = opt;
        $.ajax({ url: `${API_PREFIX}/user/session`, type: 'delete'})
            .done(res => {
                message.success('注销成功');
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

// 重置密码获取邮箱验证码
export function sendPasswordResetEmailCode(opt = {}) {
    return (dispatch, getState) => {
        NProgress.start();
        const { email, cb = () => {} } = opt;
        $.get(`${API_PREFIX}/user/password/code`, {
            email: email
        }).done(res => {
            if (res.Code === 40000) {
                message.success(res.Msg);
                cb();
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

// 重置用户密码
export function saveResetPassword(opt = {}) {
    return (dispatch, getState) => {
        NProgress.start();
        const { email, verCode, password, confirmPass, cb = () => {} } = opt;
        $.ajax({
            url: `${API_PREFIX}/user/password`,
            type: 'put',
            data: {
                email: email,
                code: verCode,
                password: password,
                confirm_pwd: confirmPass
            }
        }).done(res => {
            if (res.Code === 40000) {
                message.success(res.Msg);
                cb();
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

// 用户重置密码
export function userResetPasw(opt={}){
    return (dispatch, getState) => {
        NProgress.start();
        const { code, email, password, confirm_pwd, cb = () => {} } = opt;
        $.ajax({
            url: `${API_PREFIX}/user/password`,
            type: 'put',
            data: {
                code:code,
                email:email,
                password:password,
                confirm_pwd:confirm_pwd
            }
        }).done(res => {
            if (res.Code === 40000) {
                // 提示修改成功
                message.success(res.Msg);
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

// 重置密码获取验证码
export function getPwdCode(opt = {}) {
    return (dispatch, getState) => {
        const {cb = () => {} } = opt;
        $.get(`${API_PREFIX}/user/password/code`,{email:opt.email})
            .done(res => {
                message.success(res.Msg);
            })
            .fail(err => {
                message.error(err.statusText);
            })
            .always(() => {
                cb();
            })
    }
}

// 获取用户余额相关数据
export function loadUserBalance(opt = {}) {
    return (dispatch, getState) => {
        const { cb = () => {} } = opt;
        $.get(`${API_PREFIX}/user/balance`)
            .done(res => {
                if (res.Code === 40000) {
                    dispatch({
                        type: "LOAD_USER_BALANCE_SUCCESS",
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