/**
 * Created by Will on 2017/4/16.
 */
/**
 * @class Login
 * @extends Component
 * @desc 登入
 * @author xuming(1522188485@qq.com), wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

import { message } from '../../plugins/Message';
import { isEmail } from '../../utils/RegTest';


export default class Log extends Component {
    checkForm() {
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        if (!isEmail(email)) {
            message.warning('邮箱格式不正确');
            return false;
        }
        if (password.trim() === '') {
            message.warning('密码不能为空');
            return false;
        }
        return true;
    }

    onLoginClick() {
        const { router, userActions, cartActions } = this.props;

        if (!this.checkForm()) return;

        const email = this.refs.email.value;
        const password = this.refs.password.value;
        userActions.userLogin({
            data: {
                email: email,
                password: password
            },
            cb: () => {
                userActions.loadUserInfo();
                // cartActions.loadCartList();
                router.push('/');
            }
        })
    }

    render() {
        return (
            <section id="login">
                <h2>登录</h2>
                <form onSubmit={e => e.preventDefault()}>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <input ref='email' type="text" className="input-box" placeholder="*邮箱" />
                    </div>
                    <div>
                        <i className="fa fa-key"></i>
                        <input ref='password' type="password" className="input-box" placeholder="*密码" />
                    </div>
                    <div>

                        <input type="checkbox" id="checkbox_3" className="checkbox"/>
                        <label htmlFor="checkbox_3"> 记住密码</label>
                    </div>
                    <div>
                        <label><Link to="/login/forget-password">忘记密码</Link></label>
                    </div>
                    <div id="log_sub_f">
                        <button className="button" onClick={this.onLoginClick.bind(this)}>登录</button>
                    </div>
                </form>
            </section>
        )
    }
}