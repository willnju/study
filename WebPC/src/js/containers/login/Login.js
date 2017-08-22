/**
 * @class Login
 * @extends React.Component
 * @desc 登录注册页面
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Divide from '../../components/login/Divide.js';
import Hotkeys from '../../components/login/Hotkeys.js';
import Log from '../../components/login/log.js';
import Register from '../../components/login/Register.js';
import LoginHeader from '../../components/login/LoginHeader.js';
import ForgetPassword from '../../components/login/forget-password';
import * as userActions from '../../actions/userActions';
import * as cartActions from '../../actions/cartActions';

class Login extends Component {
    render() {
        const { params } = this.props;
        console.log(params.type);

        if (params.type === 'forget-password') {
            return <ForgetPassword {...this.props}></ForgetPassword>;
        }

        return (
           <div id="main-content container login-container">
               <section id="sign-in">
                   <LoginHeader></LoginHeader>
                   <div id="content">
                       <Hotkeys></Hotkeys>
                       <Divide></Divide>
                       <div id="RL" className="func-clearfix">
                           <Register {...this.props}></Register>
                           <Log {...this.props}></Log>
                       </div>
                   </div>
               </section>

           </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        cartActions: bindActionCreators(cartActions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
