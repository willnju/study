/**
 * @class Warning
 * @extends React.Component
 * @desc 如果游戏有问题，则会产生警告
 * @author feixihan(1095714266@qq.com)
 */
import React, { Component } from 'react';

export default class Warning extends Component {
    render() {
        return (
            <section className="dock-card notice cart-warning">
                <h4><i className="icon icon-alert"></i> Attention:</h4>
                <ul>
                    <li>Some products in your cart seem to be unavailable in your country</li>
                </ul>
            </section>
        )
    }
}