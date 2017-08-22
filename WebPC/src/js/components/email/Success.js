/**
 * @class Success
 * @extends React.Component
 * @desc 邮箱验证成功
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Success extends Component {
    render() {
        return (
            <div className="success-section">
                <p className="text"><i className="fa fa-times-circle"></i>恭喜你，邮箱验证成功！</p>
                <Link to='/' className="pg-btn btn-start">开始购物</Link>
            </div>
        )
    }
}