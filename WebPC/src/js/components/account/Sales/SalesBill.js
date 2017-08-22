/**
 * @class SalesBill
 * @extends React.Component
 * @desc 对账单
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import _ from 'lodash';

import Placeholder from '../../../plugins/Placeholder';
import Pagination from '../../../plugins/Pagination';

export default class SalesBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            current: 1,
            pageSize: 5
        }
    }

    componentDidMount() {
        const { saleActions } = this.props;
        saleActions.loadBalanceHistoryList({
            cb: () => {
                this.setState({ loading: false });
            }
        })
    }

    renderBillTable() {
        const { loading, pageSize, current } = this.state;
        const { balanceHistoryList } = this.props;
        if (loading) return <Placeholder type="content"></Placeholder>;

        const renderItem = (item, index) => {
            return (
                <tr key={index}>
                    <td>{item.b_id}</td>
                    <td>￥{item.amount}</td>
                    <td>{item.comment}</td>
                    <td>{item.act_time}</td>
                </tr>
            )
        }

        const filterList = balanceHistoryList.slice((current - 1) * pageSize, current * pageSize);

        return (
            <div className="bill-table-container">
                <table className="bill-table">
                    <thead>
                        <tr>
                            <th>订单号</th>
                            <th>金额</th>
                            <th>交易类型</th>
                            <th>交易时间</th>
                        </tr>
                    </thead>
                    <tbody>
                        {_.map(filterList, renderItem)}
                    </tbody>
                </table>
                <Pagination pageSize={pageSize} total={balanceHistoryList.length} onChange={page => this.setState({ current: page })}></Pagination>
            </div>
            
        )
    }

    render() {
        const { pageSize } = this.state;
        const { balanceHistoryList } = this.props;

        return (
            <div className="sales-bill">
                <h2 className='content-title'>余额变动记录</h2>
                {this.renderBillTable()}
            </div>
        )
    }
}