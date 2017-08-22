/**
 * @class SalesWithdraw
 * @extends React.Component
 * @desc 提现部分
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import _ from "lodash";

import Placeholder from '../../../plugins/Placeholder';
import { isPrice } from '../../../utils/RegTest';

export default class SalesWithdraw extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDetail: false,
            loading: true,
            data: {
                type: 'bank',
                account: '',
                amount: 0,
                remark: ''
            }
        };
    }

    componentDidMount() {
        const { saleActions, userActions } = this.props;
        userActions.loadUserBalance();
        saleActions.loadWithdrawHistoryList({
            cb: () => {
                this.setState({ loading: false });
            }
        });
    }

    onDataValueChange(key, value) {
        const { data } = this.state;
        let newData = _.cloneDeep(data);
        newData[key] = value;
        this.setState({ data: newData });
    }

    onAmountChange(e) {
        const value = e.target.value;
        if (!isPrice(value)) return;
        this.onDataValueChange("amount", value);
    }

    onSaveWithdrawClick() {
        const { saleActions } = this.props;
        const { data } = this.state;

        saleActions.saveWithdraw({
            data: {
                account: data.account,
                amount: data.amount,
                remark: data.remark
            },
            cb: () => {
                saleActions.loadWithdrawHistoryList();
            }
        });
    }

    // 选择银行卡
    renderTypeBank() {
        const { data } = this.state;
        return (
            <div className="type-bank">
                <div className="bank">
                    <label className="label">&nbsp;</label>
                    <select>
                        <option value="">工商银行</option>
                        <option value="">招商银行</option>
                    </select>
                    <input type="text" value={data.account} onChange={e => this.onDataValueChange("account", e.target.value)} placeholder="请输入银行卡号" />
                    <input type="text" value={data.remark} onChange={e => this.onDataValueChange("remark", e.target.value)} placeholder="收款人姓名" />
                    <p className="warning">
                        提现请保存真实姓名，否则将无法转账。
                    </p>
                </div>
                {/*<div className="method func-clearfix">
                    <label className="label">提现类型</label>
                    <div className="options">
                        <p className="radio-group">
                            <input type="radio" />
                            <label className="radio-label">极速提现，1%手续费，9:30-21:00，2小时内到账。</label>
                        </p>
                        <p className="radio-group">
                            <input type="radio" />
                            <label className="radio-label">快速提现，0.6%手续费，12小时内到账。</label>
                        </p>
                        <p className="radio-group">
                            <input type="radio" />
                            <label className="radio-label">正常提现，免手续费，72小时内到账。</label>
                        </p>
                    </div>
                </div>*/}
                <div className="btn-group">
                    <a href="javascript:;" className="btn" onClick={this.onSaveWithdrawClick.bind(this)}>提交审核</a>
                </div>
            </div>
        )
    }

    // 选择支付宝
    renderTypeAlipay() {
        const { data } = this.state;
        return (
            <div className="type-alipay">
                <div className="alipay">
                    <label className="label">&nbsp;</label>
                    <input type="text" value={data.account} onChange={e => this.onDataValueChange("account", e.target.value)} placeholder="请输入支付宝账户" />
                    <input type="text" value={data.remark} onChange={e => this.onDataValueChange("remark", e.target.value)} placeholder="收款人姓名" />
                </div>
                {/*<div className="method func-clearfix">
                    <label className="label">提现类型</label>
                    <div className="options">
                        <p className="radio-group">
                            <input type="radio" />
                            <label className="radio-label">极速提现，1%手续费，9:30-21:00，2小时内到账。</label>
                        </p>
                        <p className="radio-group">
                            <input type="radio" />
                            <label className="radio-label">快速提现，0.6%手续费，12小时内到账。</label>
                        </p>
                        <p className="radio-group">
                            <input type="radio" />
                            <label className="radio-label">正常提现，免手续费，72小时内到账。</label>
                        </p>
                    </div>
                </div>*/}
                <div className="btn-group">
                    <a href="javascript:;" className="btn" onClick={this.onSaveWithdrawClick.bind(this)}>提交审核</a>
                </div>
            </div>
        )
    }

    renderWithDrawDetail() {
        const  { showDetail, data } = this.state;
        const type = data.type;

        if (!showDetail) return null;

        const getTypeDetail = () => {
            switch(type) {
                case 'bank':
                    return this.renderTypeBank();
                case 'alipay':
                    return this.renderTypeAlipay();
                default:
                    return null;
            }
        }

        return (
            <div className="withdraw-detial">
                <div className="input-group">
                    <label className="label" htmlFor="withdrawPrice">提现金额</label>
                    <input type="text" value={data.amount} onChange={this.onAmountChange.bind(this)} id="producwithdrawPricetName" />
                </div>
                <div className="type-group">
                    <label className="label">收款账户</label>
                    <span className="radio-group">
                        <input type="radio" checked={type === 'bank'} id="bankcard" onChange={this.onDataValueChange.bind(this, "type", "bank")} />
                        <label htmlFor="bankcard" className="radio-label">银行卡（推荐）</label>
                    </span>
                    <span className="radio-group">
                        <input type="radio" id="alipay" checked={type === 'alipay'} onChange={this.onDataValueChange.bind(this, "type", "alipay")} />
                        <label htmlFor="alipay" className="radio-label">支付宝</label>
                    </span>
                </div>
                <div className="type-detail-group">
                    {getTypeDetail()}
                </div>
            </div>
        )
    }

    renderWithdrawHistory() {
        const { withdrawHistoryList } = this.props;
        if (this.state.loading) return <Placeholder type="content"></Placeholder>;

        const renderWithdrawItem = (item, index) => {
            return (
                <tr key={index}>
                    {/*<td>{item.b_id}</td>*/}
                    <td>{item.name}，支付方式，{item.account}，￥{item.amount}</td>
                    <td>￥{item.poundage}</td>
                    <td>{item.verify}</td>
                    <td>{item.apply_time}</td>
                </tr>
            )
        }

        return (
            <div className="withdraw-history">
                <table className="withdraw-history">
                    <thead>
                        <tr>
                            {/*<th>订单号</th>*/}
                            <th>收款信息</th>
                            <th>手续费</th>
                            <th>状态</th>
                            <th>申请时间</th>
                        </tr>
                    </thead>
                    <tbody>
                        {_.map(withdrawHistoryList, renderWithdrawItem)}
                    </tbody>
                </table>
            </div>
        )
    }

    render() {
        const { userBalance } = this.props;
        return (
            <div className="sales-withdraw">
                <h2 className='content-title'>提现</h2>
                <div className="withdraw-header">
                    <div className="cash-detail func-clearfix">
                        <div className="balance func-clearfix">
                            <div className="balance-detail">
                                <p className="price-label">账户余额：</p>
                                <p className="price-detail">￥{userBalance.balance}</p>
                            </div>
                            <div className="btn-group">
                                <a href="javascript:;" onClick={e => this.setState({ showDetail: !this.state.showDetail })} className="btn">提现</a>
                            </div>
                        </div>
                        <div className="income">
                            <div className="income-detail">
                                <p className="price-label">今日收入：</p>
                                <p className="price-detail">￥{userBalance.income}</p>
                            </div>
                        </div>
                        <div className="lock">
                            <div className="lock-detail">
                                <p className="price-label">锁定金额：</p>
                                <p className="price-detail">￥{userBalance.locking}</p>
                                <p><a href="">为什么锁定？</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                {this.renderWithDrawDetail()}

                <h2 className='content-title'>提现记录</h2>
                {this.renderWithdrawHistory()}
            </div>
        )
    }
}
