/**
 * @class WeChatCode
 * @extends React.Component
 * @desc 微信二维码支付
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import $ from 'jquery';

import Overlay from '../../plugins/Overlay';

let $div = null;
export default class WeChatCode extends Component {
    componentDidMount() {
        const { orderNum } = this.props;
        this.fetchOrderStatus(orderNum);
    }

    fetchOrderStatus(orderNum) {
        const { orderActions, router } = this.props;
        orderActions.getWeChatOrderStatus({
            orderNum: orderNum,
            payedCb: () => {
                if (this.fetchOrderStatusTimeout) {
                    clearTimeout(this.fetchOrderStatusTimeout);
                }
                this.destroy();
            },
            nopayCb: () => {
                this.fetchOrderStatusTimeout = setTimeout(this.fetchOrderStatus.bind(this, orderNum), 2000);
            }
        });
    }

    onJumpClick() {
        if (this.fetchOrderStatusTimeout) {
            clearTimeout(this.fetchOrderStatusTimeout);
        }
        this.destroy();
    }

    destroy() {
        const { onDestroy } = this.props;
        if ($div != null) {
            $div.remove();
        }
        onDestroy();
    }

    render() {
        const { url } = this.props;
        return (
            <Overlay>
                <div className="wechat-code-container">
                    <h3 className='title'></h3>
                    <div className="content">
                        <img className='qrcode' src={`data:image/png;base64,${url}`} />
                        <a onClick={this.onJumpClick.bind(this)} href="#/account/orders" className="link">查看订单</a>
                    </div>
                </div>
            </Overlay>
        )
    }
}

let showWeChatCode = (url, orderNum, onDestroy, props) => {
    $div = $("<div>");
    $('body').append($div);
    ReactDOM.render(<WeChatCode url={url} orderNum={orderNum} onDestroy={onDestroy} {...props} />, $div[0]);
    return () => {
        if ($div != null) {
            $div.remove();
        }
    }
}

export { showWeChatCode };