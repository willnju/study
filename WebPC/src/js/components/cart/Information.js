/**
 * @class Information
 * @extends React.Component
 * @desc 购物车提示信息
 * @author feixihan(1095714266@qq.com)
 */
import React, { Component } from 'react';

export default class Information extends Component {
    render() {
        return (
            <section className="notice">
             <h4><i className="fa fa-exclamation-circle"></i> 重要信息:</h4>
                <ul>
                    <li>All items are delivered digitally by download and are not refundable.</li>
                    <li>Check the system requirements on each game's page and the Terms of Use before making your purchase.</li>
                    <li>It is not possible to purchase more than one copy of the same game through the same Nuuvem account.</li>
                </ul>
            </section>
        )
    }
}