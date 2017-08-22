/**
 * @class Fail
 * @extends React.Component
 * @desc 邮箱验证失败
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';

export default class Fail extends Component {
    render() {
        return (
            <div className="fail-section">
                <p className="text"><i className="fa fa-times-circle"></i>邮箱验证失败，如有问题请联系客服，电话xxxxxxxx！</p>
            </div>
        )
    }
}