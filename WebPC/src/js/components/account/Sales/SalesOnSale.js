/**
 * @class SalesOnSale
 * @extends React.Component
 * @desc 正在销售
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import _ from 'lodash';

import { API_PRO_PREFIX } from '../../../constants/api';
import Placeholder from '../../../plugins/Placeholder';
import Pagination from '../../../plugins/Pagination';
import Modal, { modal } from '../../../plugins/Modal';
import Tabs, { TabPane } from '../../../plugins/Tabs';
import EditSaleKeys from './EditSaleKeys';

// 上架状态修改
class EditSaleStatus extends Component {
    constructor(props) {
        super(props);
        const onSale = props.game.is_sale === '正在销售' ? 1 : 0;
        this.state = {
            onSale: onSale
        }
    }

    onOnSaleChange(value) {
        this.setState({ onSale: value });
    }

    onSaveClick() {
        const { onSale } = this.state;
        const { game, saleActions } = this.props;
        saleActions.updateProductSaleStatue({
            onSale: onSale,
            id: game.s_id
        });
    }

    render() {
        const { onSale } = this.state;
        return (
            <div className="edit-sale-status">
                <div className="form-group">
                    <p className="status-group">
                        <label className="label">是否上架</label>
                        <span className="radio-group">
                            <input type="radio" className="radio" value="是" id="saleStatusYes" checked={onSale === 1} onChange={this.onOnSaleChange.bind(this, 1)} />
                            <label htmlFor="saleStatusYes">是</label>
                        </span>
                        <span className="radio-group">
                            <input type="radio" className="radio" value="否" id="saleStatusNo" checked={onSale === 0} onChange={this.onOnSaleChange.bind(this, 0)} />
                            <label htmlFor="saleStatusNo">否</label>
                        </span>
                    </p>
                </div>
                <div className="btn-group func-clearfix">
                    <a href="javascript:;" className="btn btn-save" onClick={this.onSaveClick.bind(this)}>保存修改</a>
                </div>
            </div>
        )
    }
}

// 零售价修改
class EditSalePrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: props.game.price
        }
    }

    onPriceChange(e) {
        const numReg =  /^\d+(\.\d{0,2})?$/;
        const value = e.target.value.trim();
        if (value !== '' && !numReg.test(value)) return;
        this.setState({ price: value });
    }

    onSaveClick() {
        const { price } = this.state;
        const { game, saleActions } = this.props;
        saleActions.updateProductSalePrice({
            id: game.s_id,
            price: price
        });
    }

    render() {
        const { price } = this.state;
        const { game } = this.props;
        return (
            <div className="edit-sale-price">
                <div className="form-group">
                    <p className="price-group">
                        <label className="label">零售价格</label>
                        <input className="input-text" ref="price" type="text" value={price} onChange={this.onPriceChange.bind(this)} />
                    </p>
                </div>
                <div className="btn-group func-clearfix">
                    <a href="javascript:;" className="btn btn-save" onClick={this.onSaveClick.bind(this)}>保存修改</a>
                </div>
            </div>
        )
    }
}

// 销售列表
export default class SalesOnSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            current: 1,
            pageSize: 5,
            searchQuery: ''
        };
    }

    componentDidMount() {
        const { saleActions } = this.props;
        saleActions.loadSaleProductList({
            cb: () => this.setState({ loading: false })
        });
    }

    onSearchChange(e) {
        const value = e.target.value;
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        this.searchTimeout = setTimeout(() => {
            this.setState({
                searchQuery: value,
                current: 1
            })
        }, 500);
    }

    onEditSaleStatusClick(game) {
        modal.show({
            title: game.name_zh,
            content: <EditSaleStatus {...this.props} game={game}></EditSaleStatus>
        });
    }

    onEditSalePriceClick(game) {
        modal.show({
            title: game.name_zh,
            content: <EditSalePrice {...this.props} game={game}></EditSalePrice>
        })
    }

    onEditKeysClick(game) {
        modal.show({
            title: game.name_zh,
            content: <EditSaleKeys {...this.props} game={game}></EditSaleKeys>
        })
    }

    render() {
        const { loading, current, pageSize, searchQuery } = this.state;
        const { saleProductList } = this.props;
        let content = null;
        if (this.state.loading) {
            content = <Placeholder></Placeholder>;
        } else {
            // 过滤搜索字段
            let searchList = _.filter(saleProductList, game => {
                return game.name_zh.indexOf(searchQuery) > -1;
            });
            // 获取当前页游戏
            let filterList = searchList.slice((current - 1) * pageSize, current * pageSize);
            let renderGameItem = (game, index) => {
                const gameImgStyle = {
                    backgroundImage: `url(${API_PRO_PREFIX}${game.thumbnail})`
                }
                return (
                    <a key={index} href="javascript:;" className="game-onsale">
                        <div className="game-img" style={gameImgStyle}></div>
                        <div className="game-content">
                            <h3 className="title">{game.name_zh}</h3>
                            <p className="count">{game.sold}件已售出，共有{game.total}件<span><i onClick={this.onEditKeysClick.bind(this, game)} title="编辑key" className="fa fa-edit"></i></span></p>
                            <p className="price">
                                <span className="self">零售价:￥{game.price}
                                    <i onClick={this.onEditSalePriceClick.bind(this, game)} title="修改价格" className="fa fa-edit"></i>
                                </span>
                                <span className="market">商城最低价:￥{game.min_price}</span>
                            </p>
                        </div>
                        {/*<p className="game-status"><span>{game.is_sale}<i title="修改上架状态" className="fa fa-edit"></i></span></p>*/}
                        <p className="game-edit"><span>{game.is_sale}</span><span onClick={this.onEditSaleStatusClick.bind(this, game)}><i title="修改上架状态" className="fa fa-edit"></i></span></p>
                    </a>
                )
            }
            content = (
                <div>
                    <div className="onsale-header">
                        <div className="toolbar">
                            <div className="search">
                                <input type="text" placeholder="输入游戏名" onChange={this.onSearchChange.bind(this)} />
                                <a className="icon" href="javascript:;"><i className="fa fa-search"></i>&nbsp;</a>
                            </div>
                        </div>
                    </div>
                    <div className="onsale-main func-clearfix">
                        {_.map(filterList, renderGameItem)}
                    </div>
                    <Pagination pageSize={pageSize} total={searchList.length} onChange={current => this.setState({ current: current })}></Pagination>
                </div>
            )
        }
        
        return (
            <div className="sales-onsale">
                <h2 className='content-title'>正在销售</h2>
                {content}
            </div>
        )
    }
}