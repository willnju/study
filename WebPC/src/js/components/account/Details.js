/**
 * @class Details
 * @extends React.Component
 * @desc 账户详情修改
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import $ from 'jquery';

import Navs, { NavPane } from './Navs';
import { message } from '../../plugins/Message';

class DetailMyAccount extends Component {
    onSaveBtnClick() {
        const username = this.refs.username.value;
        console.log(username);
        if (username.trim() === "") return message.warning("用户名不能为空");
    }

    render() {
        const { userInfo } = this.props;
        return (
            <div className="edit-account">
                <h2 className="content-title">个人信息</h2>
                {/*<h3 className="detail-title">Public Information</h3>
                <p className="detail-info">This inhtmlFormation will be displayed publicly</p>*/}
                <div className="detail-group">
                    <label className='label' htmlFor="disName">注册邮箱</label>
                    <input className='input-text' disabled type="text" id="disName" defaultValue={userInfo.email} />
                </div>
                <div className="detail-group">
                    <label className='label' htmlFor="disName">用户名</label>
                    <input ref="username" className='input-text' type="text" id="disName" defaultValue={userInfo.username} />
                </div>
                <div className="btn-group func-clearfix">
                    <a href="javascript:;" className="btn btn-save" onClick={this.onSaveBtnClick.bind(this)}><i className="fa fa-check"></i>保存修改</a>
                </div>
            </div>
        )
    }
}

class DetailPassWord extends Component {
    constructor(props) {
        super(props);
    }

    onSendVerCode() {
        const { userInfo, userActions } = this.props;
        userActions.sendPasswordResetEmailCode({
            email: userInfo.email
        });
    }

    onSaveClick() {
        const { verCode, password, confirmPass } = this.refs;
        const { userInfo, userActions } = this.props;
        const verCodeValue = verCode.value.trim();
        const passwordValue = password.value.trim();
        const confirmPassValue = confirmPass.value.trim();
        if (verCodeValue === '') {
            return message.warning('邮箱验证码不能为空');
        }
        if (passwordValue === '' || confirmPassValue === '') {
            return message.warning('新密码不能为空');
        }
        if (passwordValue !== confirmPassValue) {
            return message.warning('两次输入的密码不一样');
        }
        userActions.saveResetPassword({
            verCode: verCodeValue,
            password: passwordValue,
            confirmPass: confirmPassValue,
            email: userInfo.email,
            cb: () => {
                // TODO注销登录
            }
        });
    }

    render() {
        const { userInfo } = this.props;

        return (
            <div className="edit-password">
                <h2 className="content-title">修改密码</h2>
                <div className="detail-group">
                    <label className='label'>注册邮箱</label>
                    <input className='input-text' disabled type="text" defaultValue={userInfo.email} />
                    <a href="javascript:;" className="btn" onClick={this.onSendVerCode.bind(this)}>发送验证码</a>
                </div>
                <div className="detail-group">
                    <label className='label' htmlFor="verCode">验证码</label>
                    <input ref="verCode" className='input-text' type="text" id="verCode" />
                </div>
                <div className="detail-group">
                    <label className='label' htmlFor="newpass">新密码</label>
                    <input ref="password" className='input-text' type="password" id="newpass" />
                </div>
                <div className="detail-group">
                    <label className='label' htmlFor="confirmPass">确认新密码</label>
                    <input ref="confirmPass" className='input-text' type="password" id="confirmPass" />
                </div>
                <div className="btn-group func-clearfix">
                    <a onClick={this.onSaveClick.bind(this)} href="javascript:;" className='btn btn-save'><i className="fa fa-check"></i>重置密码</a>
                </div>
            </div>
        )
    }
}

export default class Details extends Component {
    render() {
        const { userInfo } = this.props;
        return (
            <section className="account-details">
                <div className="account-details-basic func-clearfix">
                    <div className="avatar"></div>
                    <div className="info">
                        <h3 className="display-name">{userInfo.username}</h3>
                        <p className="email">注册邮箱：{userInfo.email}</p>
                        <p className="reg-time">注册时间：{userInfo.reg_time}</p>
                    </div>
                </div>
                <div className="account-details-edit">
                    <Navs>
                        <NavPane title='个人信息'>
                            <DetailMyAccount {...this.props}></DetailMyAccount>
                        </NavPane>
                        <NavPane title='修改密码'>
                            <DetailPassWord {...this.props}></DetailPassWord>
                        </NavPane>
                    </Navs>
                </div>
            </section>
        )
    }
}