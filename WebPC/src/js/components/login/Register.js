/**
 * @class Register
 * @extends React Component
 * @desc 注册
 * @author xuming(1522188485@qq.com), wangyong(1223427693@qq.com)
 */
import React,{ Component } from 'react';

import { message } from '../../plugins/Message';
import { isEmail } from '../../utils/RegTest'; 

export default class Register extends Component{
    checkForm() {
        const email = this.refs.email.value;
        // const username = this.refs.username.value;
        const password = this.refs.password.value;
        // const repeatPassword = this.refs.repeatPassword.value;
        if (!isEmail(email)) {
            message.warning('邮箱格式不正确');
            return false;
        }
        // if (username.trim() === '') {
        //     message.warning('用户名不能为空');
        //     return false;
        // }
        if (password.trim() === '') {
            message.warning('密码不能为空');
            return false;
        }
        // if (password !== repeatPassword) {
        //     message.warning('两次密码输入不相同');
        //     return false;
        // }
        return true;
    }

    onRegisterClick() {
        const { router, userActions } = this.props;

        if (!this.checkForm()) return;

        const email = this.refs.email.value;
        // const username = this.refs.username.value;
        const password = this.refs.password.value;
        // const repeatPassword = this.refs.repeatPassword.value;
        userActions.userRegister({
            data: {
                email: email,

                password: password,

            }
        })
    }

    render(){
        return(
            <section id="register">
                <h2>注册</h2>
                <form onSubmit={e => e.preventDefault()}>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <input ref='email' type="text" className="input-box" placeholder="*邮箱"/>
                    </div>
                    {/*<div>
                        <i className="fa fa-user"></i>
                        <input ref='username' type="text" className="input-box" placeholder="*用户名"/>
                    </div>*/}
                    <div data-icon="required">
                        <i className="fa fa-key"></i>
                        <input ref='password' type="password" className="input-box" placeholder="*密码" />
                    </div>
                    {/*<div data-icon="required">
                        <i className="fa fa-key"></i>
                        <input ref='repeatPassword' type="password" className="input-box" placeholder="*重复密码" />
                    </div>*/}
                    <div>
                        <input type="checkbox" id="checkbox_1" name="check" className="checkbox"/>
                        <label htmlFor="checkbox_1"></label>
                        <label htmlFor="checkbox_1"> 同意使用邮箱接受相关推送</label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox_2" name="check" className="checkbox"/>
                            <label htmlFor="checkbox_2"></label>
                            <label htmlFor="checkbox_2"> 已阅读且同意相关<a href="">服务条款</a></label>
                    </div>
                    <div>
                        <button className="button" onClick={this.onRegisterClick.bind(this)}>注册</button>
                    </div>
                </form>
            </section>
        )
    }
}