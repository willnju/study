/**
 * @class Orders
 * @extends React.Component
 * @desc 我的订单页面
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import _ from 'lodash';
import $ from 'jquery';
import numeral from 'numeral';
import classNames from 'classnames';

import Placeholder from '../../plugins/Placeholder';
import Pagination from '../../plugins/Pagination';
import WeChatCode, { showWeChatCode } from '../cart/WeChatCode';
import { modal } from '../../plugins/Modal';

class OrderKeys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            pageSize: 5,
            current: 1,
            keys: []
        };
    }

    componentDidMount() {
        const { order, orderActions } = this.props;
        orderActions.loadOrderKeys({
            orderId: order.order_id,
            cb: (data) => {
                this.setState({ 
                    loading: false,
                    keys: data
                });
            }
        });
    }

    render() {
        const { loading, current, pageSize, keys } = this.state;
        if (loading) return <Placeholder type="content"></Placeholder>;

        const filterKeys = keys.slice((current - 1) * pageSize, current * pageSize);
        const renderKey = (key, index) => {
            return (
                <tr key={index}>
                    <td>{key.name_zh}</td>
                    <td>{key.type}</td>
                    <td>{key.key}</td>
                </tr>
            )
        };

        return (
            <div className="order-keys">
                <div className="order-keys-table">
                    <table>
                        <thead>
                            <tr>
                                <th>游戏</th>
                                <th>类型</th>
                                <th>Key</th>
                            </tr>
                        </thead>
                        <tbody>
                            {_.map(filterKeys, renderKey)}
                        </tbody>
                    </table>
                </div>
                <div className="order-keys-pagination">
                    <Pagination pageSize={pageSize} total={keys.length} onChange={page => this.setState({ current: page })}></Pagination>
                </div>
            </div>
        )
    }
}

class OrderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            orderDetail: null
        };
    }

    componentWillReceiveProps(nextPorps) {
        if (!_.isEqual(this.props.order, nextPorps.order)) {
            this.setState({ active: false });
        }
    }

    onShowOrderDetailClick() {
        const { orderDetail } = this.state;
        const { order, orderActions } = this.props;
        const orderId = order.order_id;

        orderActions.loadOrderDetail({
            orderId: orderId,
            cb: (data) => {
                this.setState({
                    active: true,
                    orderDetail: data
                });
            }
        });
    }

    onHideOrderDetailClick() {
        this.setState({ active: false });
    }

    onPayClick() {
        const { order, onPayClick } = this.props;
        onPayClick(order.order_id);
    }

    onLoadOrderKeysClick() {
        const { order } = this.props;
        modal.show({
            title: order.order_sn,
            content: <OrderKeys {...this.props}></OrderKeys>
        });
    }

    renderNormalItem() {
        const { order } = this.props;
        return (
            <tr>
                <td>{order.order_sn}</td>
                <td>{order.add_time}</td>
                <td>￥{order.amount}</td>
                <td>
                    <p>{order.status}</p>
                    { order.status === '未支付' ? <p><a href="javascript:;" className='btn order-pay' onClick={this.onPayClick.bind(this)} >立即付款</a></p> : null } 
                </td>
                <td className='actions'>
                    <div>
                        <a href="javascript:;" className='btn order-detail' onClick={this.onShowOrderDetailClick.bind(this)}>查看订单</a>
                        <a href="javascript:;" className='btn service-create'>创建客服单</a>
                    </div>
                </td>
            </tr>
        )
    }

    renderActiveItem() {
        const { order } = this.props;
        const { orderDetail } = this.state;
        if (orderDetail == null) return null;
        const payClass = classNames('abstract', {
            'nopay': order.status === '未支付'
        });
        return (
            <tr className='active'>
                <td className='game'>
                    <div className='abstract'>{order.order_sn}</div>
                    <div className='detail'>
                        <div className='detail-head'>游戏名称</div>
                        <div className='detail-body'>
                            {_.map(orderDetail, (_item, _index) => <p key={_index}>{_item.name_zh}</p>)}
                        </div>
                    </div>
                </td>
                <td className='price-count'>
                    <div className='abstract'>
                        {order.add_time}
                    </div>
                    <div className='detail'>
                        <div className='detail-head'>单价 x 数量</div>
                        <div className='detail-body'>
                            {_.map(orderDetail, (_item, _index) => <p key={_index}>￥{_item.sold_price} x {_item.number}</p>)}
                        </div>
                    </div>
                </td>
                <td className='price-count'>
                    <div className='abstract'>
                        ￥{order.amount}
                    </div>
                    <div className='detail'>
                        <div className='detail-head'>总价</div>
                        <div className='detail-body'>
                            {_.map(orderDetail, (_item, _index) => <p key={_index}>￥{numeral(parseFloat(_item.sold_price * _item.number)).format('0.00')}</p>)}
                        </div>
                    </div>
                </td>
                <td>
                    <div className={payClass}>
                        <p>{order.status}</p>
                        { order.status === '未支付' ? <p><a href="javascript:;" className='btn order-pay' onClick={this.onPayClick.bind(this)} >立即付款</a></p> : null } 
                    </div>
                </td>
                <td>
                    <div className='abstract'>
                        <div className='actions'>
                            <a href="javascript:;" className='btn order-detail' onClick={this.onHideOrderDetailClick.bind(this)}>隐藏订单</a>
                            <a href="javascript:;" className='btn service-create'>创建客服单</a>
                        </div>
                    </div>
                    <div className='detail'>
                        <p className='detail-head'>状态</p>
                        <p className='detail-body'><a href="javascript:;" onClick={this.onLoadOrderKeysClick.bind(this)}>查看Key</a></p>
                    </div>
                </td>
            </tr>
        )
    }
    
    render() {
        const { active, loading } = this.state;
        if (active) {
            return this.renderActiveItem();
        } else {
            return this.renderNormalItem();
        }
    }
}

export default class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            current: 1,
            pageSize: 5
        };
    }

    componentDidMount() {
        const { orderActions, orderList } = this.props;
        orderActions.loadOrderList({
            cb: () => {
                this.setState({ loading: false });
            }
        })
    }

    onPayClick(orderId) {
        const { orderActions } = this.props;
        orderActions.orderPay({
            orderId: orderId,
            cb: (data) => {
                // 支付宝支付返回字符串，微信支付返回对象
                if (_.isString(data)) {
                    $('body').append($(data));
                } else {
                    let img = data.img;
                    let orderNum = data.out_trade_no;
                    showWeChatCode(img, orderNum, () => {
                        this.setState({ loading: true });
                        orderActions.loadOrderList({
                            cb: () => {
                                this.setState({ loading: false });
                            }
                        })
                    }, this.props);
                }
            }
        })
    }

    renderOrderList() {
        const { orderList } = this.props;
        const { current, pageSize } = this.state;
        let renderItem = (_order, _index) => {
            return <OrderItem key={_index} {...this.props} order={_order} onPayClick={this.onPayClick.bind(this)}></OrderItem> 
        };

        let currentItems = orderList.slice((current - 1) * pageSize, current * pageSize);

        return (
            <tbody>
                {_.map(currentItems, renderItem)}
            </tbody>
        )
    }

    onPaginationChange(currentPage) {
        this.setState({ current: currentPage });
    }

    render() {
        const { orderList } = this.props;
        const { pageSize } = this.state;

        if (this.state.loading) return <div className="account-orders"><Placeholder type='content'></Placeholder></div>;
        return (
            <section className="account-orders">
                <table className="order-table">
                    <thead>
                        <tr>
                            <th>订单号</th>
                            <th>订单时间</th>
                            <th>订单总金额</th>
                            <th>订单状态</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    {this.renderOrderList()}
                </table>
                {
                    orderList.length < pageSize ? 
                        null :
                        <div className="order-pagination">
                            <Pagination pageSize={pageSize} total={orderList.length} onChange={this.onPaginationChange.bind(this)}></Pagination>
                        </div>
                }
            </section>
        )
    }
}