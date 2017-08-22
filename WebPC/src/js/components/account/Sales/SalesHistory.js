/**
 * @class SalesHistory
 * @extends React.Component
 * @desc 销售历史记录
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import _ from 'lodash';

import Pagination from '../../../plugins/Pagination';
import Placeholder from '../../../plugins/Placeholder';
import { modal } from '../../../plugins/Modal';

class SaleDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            keys: [],
            pageSize: 5,
            current: 1
        };
    }

    componentDidMount() {
        const { item, saleActions } = this.props;
        saleActions.loadSaleHistoryDetail({
            id: item.s_id,
            cb: (data) => {
                this.setState({
                    loading: false,
                    keys: data
                });
            }
        })
    }

    render() {
        const { keys, loading, pageSize, current } = this.state;
        if (loading) return <Placeholder type="content"></Placeholder>;

        const filterKeys = keys.slice((current - 1) * pageSize, current * pageSize);
        const renderKeyItem = (item, index) => {
            return (
                <tr key={index}>
                    <td>{item.key}</td>
                    <td>{item.sale_price}</td>
                    <td>{item.order_sn}</td>
                    <td>{item.add_time}</td>
                    <td>{item.username}</td>
                </tr>
            )
        }

        return (
            <div className="sale-history-detail">
                <table className="detail-table">
                    <thead>
                        <tr>
                            <th>Key</th>
                            <th>售价</th>
                            <th>订单号</th>
                            <th>订单时间</th>
                            <th>购买用户</th>
                        </tr>
                    </thead>
                    <tbody>
                        {_.map(filterKeys, renderKeyItem)}
                    </tbody>
                </table>
                <Pagination pageSize={pageSize} total={keys.length} onChange={page => this.setState({ current: page })}></Pagination>
            </div>
        )
    }
}

export default class SalesHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            pageSize: 5,
            current: 1
        };
    }

    componentDidMount() {
        const { saleActions } = this.props;
        saleActions.loadSaleHistoryList({
            cb: () => {
                this.setState({ loading: false })
            }
        });
    }

    onShowDetailClick(item) {
        modal.show({
            title: item.name_zh,
            content: <SaleDetail {...this.props} item={item}></SaleDetail>
        });
    }

    renderSaleHistoryList() {
        const { saleHistoryList } = this.props;
        const { current, pageSize } = this.state;
        if (this.state.loading) return <Placeholder type="content"></Placeholder>
        
        const filterList = saleHistoryList.slice((current - 1) * pageSize, current * pageSize);

        const renderHistoryItem = (item, index) => {
            return (
                <tr key={index}>
                    <td>{item.name_zh}</td>
                    <td>{item.price}</td>
                    <td>{item.s_platform}</td>
                    <td>{item.s_edition}</td>
                    <td>{item.is_sale}</td>
                    <td><a href="javascript:;" className="btn" onClick={this.onShowDetailClick.bind(this, item)}>查看详情</a></td>
                </tr>
            )
        }

        return (
            <div className="sale-history-list">
                <table className="history-table">
                    <thead>
                        <tr>
                            <th>游戏</th>
                            <th>售价</th>
                            <th>平台</th>
                            <th>版本</th>
                            <th>状态</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {_.map(filterList, renderHistoryItem)}
                    </tbody>
                </table>
                <Pagination pageSize={pageSize} total={saleHistoryList.length} onChange={page => this.setState({ current: page })}></Pagination>
            </div>
        )
    }

    render() {
        return (
            <div className="sales-history">
                <h2 className='content-title'>销售历史记录</h2>
                {this.renderSaleHistoryList()}
            </div>
        )
    }
}