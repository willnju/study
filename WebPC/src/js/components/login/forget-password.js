/**
 * @class ForgetPassword
 * @extends Component
 * @desc 忘记密码
 * @author zhaojunzhe xuming(1429595365@qq.com,1522188485@qq.com)
 */
import React, { Component } from 'react';

import { message } from '../../plugins/Message';
import { isEmail } from '../../utils/RegTest';

// import code from './code';

export default class ForgetPassword extends Component {
    checkForm(){
        // message.warning('邮箱格式不正确');

        const email = this.refs.email.value;
        const password = this.refs.password.value;
        const confirm_pwd = this.refs.confirm_pwd.value;
        const code = this.refs.code.value;

        if (!isEmail(email)) {
            message.warning('邮箱格式不正确！');
            return false;
        }
        if (password.trim() === '' || confirm_pwd.trim() === '') {
            message.warning('密码不能为空！');
            return false;
        }
        if (password.trim()!==confirm_pwd.trim()){
            message.warning('两次密码不一致！');
            return false;
        }
        if (code.trim() === ''){
            message.warning('验证码不正确！');
            return false;
        }

        return true;
    }
    onFindPaswClick() {
        const { router, userActions } = this.props;

        if (!this.checkForm()) return;

        const code = this.refs.code.value;
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        const confirm_pwd = this.refs.confirm_pwd.value;
        userActions.userResetPasw({
                code:code,
                email: email,
                password: password,
                confirm_pwd: confirm_pwd
        })
    }
    onGetCodeClick(){
        const { router, userActions } = this.props;
        const email = this.refs.email.value;
        userActions.getPwdCode({'email':email});
    }
    render() {
        return (
            <div className="forgetPassword-wrapper func-clearfix">
                <section id="password">
                    <h1 className="tt">忘记密码？</h1>
                    <div className="bl-content">
                        <p>不用担心！可以通过你的注册邮箱设置新的密码。</p>
                        <form className="frm-wrapper" onSubmit={e => e.preventDefault()}>
                            <input type="hidden" />
                            <div className="frm-item-required">
                                {/*<p>邮箱:</p>*/}
                                <i className="fa fa-envelope"></i>
                                <input ref='email' type="text" className="input-box" placeholder="注册邮箱" />
                                {/*<input ref='email' className="frm-email" type="text"/>*/}
                                <button className="btn-sendCode" onClick={this.onGetCodeClick.bind(this)}>获取验证码</button>
                            </div>
                            <div className="frm-item-required">
                                {/*<p>新密码:</p>*/}
                                <i className="fa fa-key"></i>
                                <input ref='password' className="input-box" type="password" placeholder="新密码"/>
                            </div>
                            <div className="frm-item-required">
                                {/*<p>确认密码:</p>*/}
                                <i className="fa fa-key"></i>
                                <input ref="confirm_pwd" className="input-box" type="password" placeholder="确认密码"/>
                            </div>
                            <div className="frm-item-required">
                                <i className="fa fa-info"></i>
                                {/*<p>验证码:</p>*/}
                                <input ref="code" className="input-box" type="text" placeholder="验证码"/>
                            </div>
                            {/*<code ref='code'/>*/}
                            <div className="frm-item">
                                <button type="submit" className="btn-login" onClick={this.onFindPaswClick.bind(this)}>Send</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}