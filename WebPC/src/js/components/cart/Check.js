/**
 * @class Check
 * @extends React.Component
 * @desc 结账，付款
 * @author feixihan(1095714266@qq.com), wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import _ from 'lodash';
import $ from 'jquery';
import numeral from 'numeral';
import classNames from 'classnames';

import WeChatCode, { showWeChatCode } from './WeChatCode';

export default class Check extends Component {
    getTotalPrice() {
        const { cartList } = this.props;
        let total = 0;
        _.each(cartList, _item => {
            total += parseFloat(_item.price * _item.number);
        });
        return numeral(total).format('0.00');
    }

    onCheckoutClick() {
        const { cartList, orderActions, cartActions, paymethod, router } = this.props;
        if (cartList.length === 0) return;

        let methodKey = {
            'alipay': 1,
            'wechat': 2
        };

        orderActions.makeOrder({
            method: methodKey[paymethod],
            cb: data => {
                switch (paymethod) {
                    case 'alipay':
                        $('body').append($(data));
                        break;
                    case 'wechat':
                        let img = data.img;
                        let orderNum = data.out_trade_no;
                        showWeChatCode(img, orderNum, () => {
                            router.push('/account/orders');
                        }, this.props);
                        break;
                    default:
                        break;
                }
                cartActions.loadCartList();
            },
            fb: () => {
                router.push("/login");
            }
        });
    }

    render() {
        const { cartList } = this.props;
        const checkoutBtnClass = classNames('pay-btn', {
            'disable': cartList.length === 0
        });
        return (
            <section className="dock-card">
                <div className="dock-row">
                    <div>
                        <label className='promo-code' htmlFor="promoCode">优惠码</label>
                        <div className="form-group-back">
                            <input type="text" className='code' name="promoCode"/>
                            <input type="button" className='apply' value="使用优惠码"/>
                        </div>
                    </div>
                </div>
                <div className="dock-row money-check">
                    <span>总价</span>
                    {/*<div><sup className="currency-symbol">￥</sup><span className="integer">6</span><span className="decimal">.99</span></div>*/}
                    <div><sup className="currency-symbol">￥</sup><span>{this.getTotalPrice()}</span></div>
                </div>
                <div  className="dock-row">
                    <button type="button" className={checkoutBtnClass} onClick={this.onCheckoutClick.bind(this)}><i className='fa fa-shopping-cart'></i>确认下单</button>
                </div>
            </section>
        )
    }
}