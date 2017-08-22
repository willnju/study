/**
 * @class Sales
 * @extends React.Component
 * @desc 销售游戏
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import Select from 'react-select';
import classNames from 'classnames';
import $ from 'jquery';
import _ from 'lodash';

import Navs, { NavPane } from './Navs';
import { API_PREFIX } from '../../constants/api';

const INITIAL_DATA = {
    game: null,
    pType: 1,
    isSale: 0,
    edition: '',
    platform: '',
    price: '',
    mark: '',
    key: '',
    type: 1
};
// 销售产品
class SalesProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editions: [],
            platforms: [],
            data: _.clone(INITIAL_DATA)
        }
    }

    loadGames(keyword, callback) {
        if (keyword.trim() === '') return callback(null, { options: [] });
        if (this.loadGamesTimeout) {
            clearTimeout(this.loadGamesTimeout);
        }
        this.loadGamesTimeout = setTimeout(this.loadGamesOptions.bind(this, keyword, callback), 500);
    }

    loadGamesOptions(keyword, callback) {
        $.get(`${API_PREFIX}/user/sale/search`, {
            keyword: keyword
        }).done(res => {
            if (res.Code === 40000) {
                let options = _.map(res.data, _game => {
                    return _.assign({}, _game, {
                        value: _game.name_zh,
                        label: _game.name_zh
                    });
                })
                callback(null, { options: options });
            } else {
                callback(null, { options: [] });
            }
        }).fail(err => {
            callback(null, { options: [] });
        })
    }

    onDataChange(key, value) {
        // 价格输入只允许是数字
        if (key === 'price') {
            const numReg =  /^\d+(\.\d{0,2})?$/;
            if (value.trim() !== '' && !numReg.test(value)) return;
        }
       
        const { data } = this.state;
        let newData = _.clone(data);
        newData[key] = value;
        this.setState({ data: newData });
        if (key === 'game') {
            const edition = value.edition;
            const platform = value.platform;
            let editions = _.map(edition, (_e, _i) => { return { value: _i, label: _e } });
            let platforms = _.map(platform, (_p, _i) => { return { value: _i, label: _p } });
            this.setState({ editions: editions, platforms: platforms });
        }
    }

    onSaveClick() {
        const { data } = this.state;
        const { saleActions } = this.props;
        if (!this.canSubmit()) return;
        let keys = data.key.split(" ").join('\n');
        saleActions.saveSaleProduct({
            data: {
                p_id: data.game.p_id,
                p_type: data.pType,
                is_sale: data.isSale,
                price: data.price,
                mark: data.mark,
                key: keys,
                s_edition: data.edition,
                s_platform: data.platform,
                type: data.type
            },
            cb: () => {
                this.setState({ data: INITIAL_DATA });
            }
        });
    }

    canSubmit() {
        const { data } = this.state;
        if (data.game == null || data.price.trim() === '' || data.key.trim() === '' 
            || data.edition.trim() === '' || data.platform.trim() === '') {
            return false;
        }
        return true;
    }

    render() {
        const { data, editions, platforms } = this.state;
        const saveBtnClass = classNames('btn btn-save', {
            'disabled': !this.canSubmit()
        });
        // const keys = data.key.trim() === '' ? [] : data.key.split('\n');
        return (
            <div className="sales-product">
                <h2 className='content-title'>销售产品<span className="info">(您剩余<a href="">5次免费销售</a>，超过限额将向您进行收费，每笔销售收取5%)</span></h2>
                <div className="sales-group">
                    <label className='label'>产品名称</label>
                    <div className="react-select-container">
                        <Select.Async value={data.game} searchPromptText='输入游戏名' noResultsText='暂无结果' loadingPlaceholder='正在搜索...' 
                            placeholder='' loadOptions={this.loadGames.bind(this)} onChange={this.onDataChange.bind(this, 'game')} />
                    </div>
                    {/*<input type="text" id="productName" />*/}
                </div>
                <div className="sales-group">
                    <label className="label">平台</label>
                    <select className='select-group' value={data.platform} onChange={e => this.onDataChange('platform', e.target.value)}>
                        <option value='' disabled>--选择平台--</option>
                        {_.map(platforms, (_p, _i) => <option key={_i} value={_p.value}>{_p.label}</option>)}
                    </select>
                </div>
                <div className="sales-group">
                    <label className="label">版本</label>
                    <select className='select-group' value={data.edition} onChange={e => this.onDataChange('edition', e.target.value)}>
                        <option value='' disabled>--选择版本--</option>
                        {_.map(editions, (_e, _i) => <option key={_i} value={_e.value}>{_e.label}</option>)}
                    </select>
                </div>
                <div className="sales-group product-ptype-group">
                    <label className='label'>商品类型</label>
                    <span className='radio-group'><input className='radio' name='productPtype' type="radio" value='秘钥' id='radioKey' checked={data.pType === 1} onChange={this.onDataChange.bind(this, 'pType', 1)} /><label htmlFor='radioKey'>秘钥</label></span>
                    <span className="radio-group"><input className='radio' name='productPtype' type="radio" value='礼物' id='radioGift' checked={data.pType === 2} onChange={this.onDataChange.bind(this, 'pType', 2)} /><label htmlFor='radioGift'>礼物</label></span>
                </div>
                <div className="sales-group product-sale-group">
                    <label className='label'>是否上架</label>
                    <span className='radio-group'><input className='radio' name='productIsSale' type="radio" value='是' id='radioIsSale' checked={data.isSale === 0} onChange={this.onDataChange.bind(this, 'isSale', 0)} /><label htmlFor='radioIsSale'>否</label></span>
                    <span className="radio-group"><input className='radio' name='productIsSale' type="radio" value='否' id='radioNotSale' checked={data.isSale === 1} onChange={this.onDataChange.bind(this, 'isSale', 1)} /><label htmlFor='radioNotSale'>是</label></span>
                </div>
                <div className="sales-group">
                    <label className='label' htmlFor="price">零售价格</label>
                    <input className='input-text' type="text" id="price" value={data.price} onChange={e => this.onDataChange('price', e.target.value)} />
                </div>
                <div className="sales-group product-type-group">
                    <label className='label'>激活码类型</label>
                    <span className='radio-group'><input className='radio' name='productType' type="radio" value='是' id='radioTypeText' checked={data.type === 1} onChange={this.onDataChange.bind(this, 'type', 1)} /><label htmlFor='radioTypeText'>文本</label></span>
                    <span className="radio-group"><input className='radio' name='productType' type="radio" value='否' id='radioTypeImg' checked={data.type === 2} onChange={this.onDataChange.bind(this, 'type', 2)} /><label htmlFor='radioTypeImg'>图片</label></span>
                </div>
                <div className="sales-group product-keys-group">
                    <label className='label' htmlFor="cdkey">激活码</label>
                    <textarea placeholder="每个key占一行" rows="3" rows="10" id="cdkey" value={data.key} onChange={e => this.onDataChange('key', e.target.value)}>
                        
                    </textarea>
                    {/*<input className='input-text' type="text" id="cdkey" value={data.key}  onChange={e => this.onDataChange('key', e.target.value)} />*/}
                    {/*<span className='keys-length'>(共{keys.length}个key)</span>*/}
                    {/*{ 
                        keys.length > 0 ? 
                            <ul className="key-list">
                                {_.map(keys, (_k, _i) => <li key={_i} className="key-item">{_k}</li> )}
                            </ul> : null
                    }*/}
                </div>
                <div className="sales-group textarea-group">
                    <label className="label">备注</label>
                    <textarea rows="3" rows="10" value={data.mark} onChange={e => this.onDataChange('mark', e.target.value)}></textarea>
                </div>
                <div className="btn-group func-clearfix">
                    <a href="javascript:;" className={saveBtnClass} onClick={this.onSaveClick.bind(this)}><i className="fa fa-check"></i>更新产品</a>
                </div>
            </div>
        )
    }
}

// 正在销售
class SalesOnSale extends Component {
    render() {
        return (
            <div className="sales-onsale">
                <h2 className='content-title'>正在销售</h2>
                <div className="onsale-header">
                    <div className="toolbar">
                        <div className="search">
                            <input type="text" placeholder="输入游戏名" />
                            <a className="icon" href="javascript:;"><i className="fa fa-search"></i>&nbsp;</a>
                        </div>
                        {/*<div className="sort">
                            <span className="sort-title">排序：</span>
                            <ul className="sort-ways">
                                <li className="sort-way">
                                    <a href="javascript;">销量</a>
                                </li>
                            </ul>
                        </div>*/}
                    </div>
                </div>
                <div className="onsale-main func-clearfix">
                    <a href="javascript:;" className="game-onsale">
                        <div className="game-img"></div>
                        <div className="game-content">
                            <h3 className="title">神偷4</h3>
                            <p className="count">3件已售出，共有10件</p>
                            <p className="price"><span className="self">零售价:￥120<i className="fa fa-edit"></i></span><span className="market">商城最低价:￥110</span></p>
                        </div>
                    </a>
                    <a href="javascript:;" className="game-onsale">
                        <div className="game-img"></div>
                        <div className="game-content">
                            <h3 className="title">神偷4</h3>
                            <p className="count">3件已售出，共有10件</p>
                            <p className="price"><span className="self">零售价:￥120<i className="fa fa-edit"></i></span><span className="market">商城最低价:￥110</span></p>
                        </div>
                    </a>
                    <a href="javascript:;" className="game-onsale">
                        <div className="game-img"></div>
                        <div className="game-content">
                            <h3 className="title">神偷4</h3>
                            <p className="count">3件已售出，共有10件</p>
                            <p className="price"><span className="self">零售价:￥120<i className="fa fa-edit"></i></span><span className="market">商城最低价:￥110</span></p>
                        </div>
                    </a>
                    <a href="javascript:;" className="game-onsale">
                        <div className="game-img"></div>
                        <div className="game-content">
                            <h3 className="title">神偷4</h3>
                            <p className="count">3件已售出，共有10件</p>
                            <p className="price"><span className="self">零售价:￥120<i className="fa fa-edit"></i></span><span className="market">商城最低价:￥110</span></p>
                        </div>
                    </a>
                    <a href="javascript:;" className="game-onsale">
                        <div className="game-img"></div>
                        <div className="game-content">
                            <h3 className="title">神偷4</h3>
                            <p className="count">3件已售出，共有10件</p>
                            <p className="price"><span className="self">零售价:￥120<i className="fa fa-edit"></i></span><span className="market">商城最低价:￥110</span></p>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

// 销售历史记录
class SalesHistory extends Component {
    render() {
        return (
            <div className="sales-history">
                <h2 className='content-title'>销售历史记录</h2>
                <table className="history-table">
                    <thead>
                        <tr>
                            <th>游戏</th>
                            <th>激活码</th>
                            <th>价格</th>
                            <th>销售日期</th>
                            <th>购买用户</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>神偷4</td>
                            <td>XXXXXXXXXXXXXXXXXX</td>
                            <td>￥120</td>
                            <td>2017-03-12 12:33:12</td>
                            <td>hello world</td>
                        </tr>
                        <tr>
                            <td>神偷4</td>
                            <td>XXXXXXXXXXXXXXXXXX</td>
                            <td>￥120</td>
                            <td>2017-03-12 12:33:12</td>
                            <td>hello world</td>
                        </tr>
                        <tr>
                            <td>神偷4</td>
                            <td>XXXXXXXXXXXXXXXXXX</td>
                            <td>￥120</td>
                            <td>2017-03-12 12:33:12</td>
                            <td>hello world</td>
                        </tr>
                        <tr>
                            <td>神偷4</td>
                            <td>XXXXXXXXXXXXXXXXXX</td>
                            <td>￥120</td>
                            <td>2017-03-12 12:33:12</td>
                            <td>hello world</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

// 对账单
class SalesBill extends Component {
    render() {
        return (
            <div className="sales-bill">
                <h2 className='content-title'>对账单</h2>
                <table className="bill-table">
                    <thead>
                        <tr>
                            <th>类型</th>
                            <th>数量</th>
                            <th>价格</th>
                            <th>创建时间</th>
                            <th>状态</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="type">
                                <p>产品：2016010300100402030</p>
                            </td>
                            <td>1</td>
                            <td>￥120</td>
                            <td>2017-03-12 12:33:12</td>
                            <td className="status">
                                <p>无效key<a href="javascript:;" className="btn">创建客服单</a></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>提现手续费</p>
                            </td>
                            <td>1</td>
                            <td>￥120</td>
                            <td>2017-03-12 12:33:12</td>
                            <td>完成</td>
                        </tr>
                        <tr>
                            <td className="type">
                                <p>产品：2016010300100402030</p>
                            </td>
                            <td>1</td>
                            <td>￥120</td>
                            <td>2017-03-12 12:33:12</td>
                            <td className="status">
                                <p>无效key<a href="javascript:;" className="btn">创建客服单</a></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>提现手续费</p>
                            </td>
                            <td>1</td>
                            <td>￥120</td>
                            <td>2017-03-12 12:33:12</td>
                            <td>完成</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

// 提现部分
class Withdraw extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: 'bank'
        };
    }

    // 选择银行卡
    renderTypeBank() {
        return (
            <div className="type-bank">
                <div className="bank">
                    <label className="label">&nbsp;</label>
                    <select>
                        <option value="">工商银行</option>
                        <option value="">招商银行</option>
                    </select>
                    <input type="text" placeholder="请输入银行卡号" />
                    <input type="text" placeholder="收款人姓名" />
                    <p className="warning">
                        提现请保存真实姓名，否则将无法转账。
                    </p>
                </div>
                <div className="method func-clearfix">
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
                </div>
                <div className="btn-group">
                    <a href="javascript:;" className="btn">提交审核</a>
                </div>
            </div>
        )
    }

    // 选择支付宝
    renderTypeAlipay() {
        return (
            <div className="type-alipay">
                <div className="alipay">
                    <label className="label">&nbsp;</label>
                    <input type="text" placeholder="请输入支付宝账户" />
                    <input type="text" placeholder="收款人姓名" />
                </div>
                <div className="method func-clearfix">
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
                </div>
                <div className="btn-group">
                    <a href="javascript:;" className="btn">提交审核</a>
                </div>
            </div>
        )
    }

    render() {
        const  { type } = this.state;

        let typeDetail = null;
        let getTypeDetail = () => {
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
            <div className="sales-withdraw">
                <h2 className='content-title'>提现</h2>
                <div className="withdraw-header">
                    <div className="cash-detail func-clearfix">
                        <div className="balance func-clearfix">
                            <div className="balance-detail">
                                <p className="price-label">账户余额：</p>
                                <p className="price-detail">￥90</p>
                            </div>
                            <div className="btn-group">
                                <a href="javascript:;" className="btn">提现</a>
                            </div>
                        </div>
                        <div className="income">
                            <div className="income-detail">
                                <p className="price-label">今日收入：</p>
                                <p className="price-detail">￥0</p>
                            </div>
                        </div>
                        <div className="lock">
                            <div className="lock-detail">
                                <p className="price-label">锁定金额：</p>
                                <p className="price-detail">￥0</p>
                                <p><a href="">为什么锁定？</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="withdraw-detial">
                    <div className="input-group">
                        <label className="label" htmlFor="withdrawPrice">提现金额</label>
                        <input type="text" id="producwithdrawPricetName" />
                    </div>
                    <div className="type-group">
                        <label className="label">收款账户</label>
                        <span className="radio-group">
                            <input type="radio" checked={type === 'bank'} id="bankcard" onChange={e => this.setState({ type: 'bank' })} />
                            <label htmlFor="bankcard" className="radio-label">银行卡（推荐）</label>
                        </span>
                        <span className="radio-group">
                            <input type="radio" id="alipay" checked={type === 'alipay'} onChange={e => this.setState({ type: 'alipay' })} />
                            <label htmlFor="alipay" className="radio-label">支付宝</label>
                        </span>
                    </div>
                    <div className="type-detail-group">
                        {getTypeDetail()}
                    </div>
                </div>

                <h2 className='content-title'>提现记录</h2>
                <table className="withdraw-history">
                    <thead>
                        <tr>
                            <th>订单号</th>
                            <th>收款信息</th>
                            <th>手续费</th>
                            <th>状态</th>
                            <th>申请时间</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>124241414124</td>
                            <td>李敏，工商银行，32030302030230023，￥120</td>
                            <td>￥12</td>
                            <td>完成</td>
                            <td>2017-01-12 12:12:23</td>
                        </tr>
                        <tr>
                            <td>124241414124</td>
                            <td>李敏，工商银行，32030302030230023，￥120</td>
                            <td>￥12</td>
                            <td>完成</td>
                            <td>2017-01-12 12:12:23</td>
                        </tr>
                        <tr>
                            <td>124241414124</td>
                            <td>李敏，工商银行，32030302030230023，￥120</td>
                            <td>￥12</td>
                            <td>完成</td>
                            <td>2017-01-12 12:12:23</td>
                        </tr>
                        <tr>
                            <td>124241414124</td>
                            <td>李敏，工商银行，32030302030230023，￥120</td>
                            <td>￥12</td>
                            <td>完成</td>
                            <td>2017-01-12 12:12:23</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


export default class Sales extends Component {
    render() {
        return (
            <section className="account-sales">
                <Navs>
                    <NavPane title='销售产品'>
                        <SalesProduct {...this.props}></SalesProduct>
                    </NavPane>
                    <NavPane title='正在销售'>
                        <SalesOnSale {...this.props}></SalesOnSale>
                    </NavPane>
                    <NavPane title='销售历史记录'>
                        <SalesHistory {...this.props}></SalesHistory>
                    </NavPane>
                    <NavPane title='对账单'>
                        <SalesBill {...this.props}></SalesBill>
                    </NavPane>
                    <NavPane title='提现'>
                        <Withdraw {...this.props}></Withdraw>
                    </NavPane>
                </Navs>
            </section>
        )
    }
}