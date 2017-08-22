/**
 * @class Email
 * @extends React.Component
 * @desc 邮箱验证
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';

import Success from '../../components/email/Success';
import Fail from '../../components/email/Fail';

export default class Email extends Component {
    renderEmailSection() {
        const { params } = this.props;
        let tmp = params.tmp;
        switch (tmp) {
            case 'success':
                return <Success {...this.props}></Success>;
            case 'fail':
                return <Fail {...this.props}></Fail>;
            default:
                return null;
        }
    }

    render() {
        return (
            <div className="container email-container">
                {this.renderEmailSection()}
            </div>
        )
    }
}