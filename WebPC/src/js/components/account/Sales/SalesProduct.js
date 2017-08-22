/**
 * @class SalesProduct
 * @extends React.Component
 * @desc 销售产品
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import Select from 'react-select';
import classNames from 'classnames';
import $ from 'jquery';
import _ from 'lodash';

import { API_PREFIX } from '../../../constants/api';

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
export default class SalesProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editions: [],
            platforms: [],
            data: _.clone(INITIAL_DATA)
        }
    }

    componentDidMount() {
        const { saleActions } = this.props;
        saleActions.loadSaleProductFreeTimes({
            cb: (data) => {
                this.refs.freetimes.innerText = `（${data}）`;
            }
        })
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

        let formData = new FormData();
        formData.append("p_id", data.game.p_id);
        formData.append("p_type", data.pType);
        formData.append("is_sale", data.isSale);
        formData.append("price", data.price);
        formData.append("mark", data.mark);
        formData.append("s_edition", data.edition);
        formData.append("s_platform", data.platform);
        formData.append("type", data.type);
        if (data.type === 1) {
            formData.append("key", keys);
        } else {
            let imgs = this.refs["key-images"].files;
            console.log(imgs);
            formData.append("key", imgs);
        }

        saleActions.saveSaleProduct({
            data: formData,
            cb: () => {
                this.setState({ data: _.clone(INITIAL_DATA) });
            }
        });

        // saleActions.saveSaleProduct({
        //     data: {
        //         p_id: data.game.p_id,
        //         p_type: data.pType,
        //         is_sale: data.isSale,
        //         price: data.price,
        //         mark: data.mark,
        //         key: keys,
        //         s_edition: data.edition,
        //         s_platform: data.platform,
        //         type: data.type
        //     },
        //     cb: () => {
        //         this.setState({ data: _.clone(INITIAL_DATA) });
        //     }
        // });
    }

    canSubmit() {
        const { data } = this.state;
        if (data.game == null || data.price.trim() === '' || (data.type === 1 && data.key.trim() === '' )
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
                <h2 className='content-title'>销售产品<span className="info"><a ref='freetimes' href="javascript:;">（正在加载免费销售次数...）</a></span></h2>
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
                    {
                        data.type === 1 ? 
                            <textarea placeholder="每个key占一行" rows="3" rows="10" id="cdkey" value={data.key} onChange={e => this.onDataChange('key', e.target.value)}></textarea> :
                            <input ref="key-images" type="file" accept="image/*" multiple />
                    }
                    
                </div>
                <div className="sales-group textarea-group">
                    <label className="label">备注（可不填）</label>
                    <textarea rows="3" rows="10" value={data.mark} onChange={e => this.onDataChange('mark', e.target.value)}></textarea>
                </div>
                <div className="btn-group func-clearfix">
                    <a href="javascript:;" className={saveBtnClass} onClick={this.onSaveClick.bind(this)}><i className="fa fa-check"></i>更新产品</a>
                </div>
            </div>
        )
    }
}