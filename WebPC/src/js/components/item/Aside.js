/**
 * @class Aside
 * @extends React.Component
 * @desc 游戏详情页侧边栏
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import classNames from 'classnames';
import _ from 'lodash';

export default class Aside extends Component {
    constructor(props) {
        super(props);

        this.state = {
            platform: '',
            edition: '',
            platforms: [],
            editions: []
        };
    }

    computePlatFormsAndEditions() {
        const { gameDetail } = this.props;
        const allSales = _.concat(gameDetail.sale, gameDetail.otherSale);
        let platforms = [];
        let editions = [];
        _.each(allSales, _sale => {
            // TODO，临时处理后台数据异常，_sale为null
            if (_sale != null) {
                let _platforms = _sale.s_platform ? _sale.s_platform.split(',') : [];
                _.each(_platforms, _platform => {
                    if (_platform !== '' && _.indexOf(platforms, _platform) === -1) {
                        platforms.push(_platform);
                    }
                });
                let _editions = _sale.s_edition ? _sale.s_edition.split(',') : [];
                _.each(_editions, _edition => {
                    if (_edition !== '' && _.indexOf(editions, _edition) === -1) {
                        editions.push(_edition);
                    }
                })
            }
        });
        this.setState({
            platforms: platforms,
            editions: editions
        });
    }

    componentDidMount() {
        const { gameDetail } = this.props;
        this.computePlatFormsAndEditions();
    }

    onAddToCartClick(game) {
        const { cartActions, gameDetail } = this.props;
        game.p_id = gameDetail.p_id;
        cartActions.addToCart({
            game: game,
            cb: () => { console.log('success') }
        })
    }

    // 获取商城对应游戏
    getMarketGame() {
        const { platform, edition } = this.state;
        const { gameDetail } = this.props;

        const marketSale = gameDetail.sale;
        let game = null;
        if (platform !== '' && edition !== '') {
            _.each(marketSale, _sale => {
                let _platforms = _sale.s_platform.split(',');
                let _editions = _sale.s_edition.split(',');
                if (_.indexOf(_platforms, platform) > -1 && _.indexOf(_editions, edition) > -1) {
                    game = _sale;
                }
            });
        }
        return game;
    }

    // 商城价格
    renderMarketPrice() {
        let game = this.getMarketGame();
        return (
            <div className="game-price func-clearfix">
                {game == null ? null : <div className="price">￥{game.price}</div>}
            </div>
        );
    }

    // 商城自营游戏
    renderMarketBuy() {
        let game = this.getMarketGame();

        return (
            <div className="game-buy func-clearfix">
                {game == null ? null : <div className="cart"><a onClick={this.onAddToCartClick.bind(this, game)} href="javascript:;" className="add-to-cart"><i className="fa fa-cart-plus"></i>加入购物车</a></div> }
            </div>
        );
    }

    // 其他卖家游戏列表
    renderOtherSalesList() {
        const { platform, edition } = this.state;
        const { gameDetail } = this.props;
        
        const otherSale = gameDetail.otherSale;
        let games = [];
        if (platform !== '' && edition !== '') {
            _.each(otherSale, _sale => {
                let _platforms = _sale.s_platform.split(',');
                let _editions = _sale.s_edition.split(',');
                if (_.indexOf(_platforms, platform) > -1 && _.indexOf(_editions, edition) > -1) {
                    games.push(_sale);
                }
            });
        }

        if (games.length === 0) return <p className="empty">暂无其他卖家</p>;

        const renderSaleItem = (sale, index) => {
            return (
                <tr key={index} className="sale-item">
                    <td className="price">￥{sale.price}</td>
                    <td className="seller">{sale.seller}</td>
                    <td className="addcart"><a onClick={this.onAddToCartClick.bind(this, sale)} href="javascript:;">&nbsp;<i className="fa fa-cart-plus"></i></a></td>
                </tr>
            )
        }

        return (
            <table className="sellers-table">
                <thead>
                    <tr>
                        <th>价格</th>
                        <th>卖家</th>
                        <th>加入购物车</th>
                    </tr>
                </thead>
                <tbody>
                    {_.map(games, renderSaleItem)}
                </tbody>
            </table>
        )
    }

    render() {
        const { platform, edition, platforms, editions } = this.state;

        return (
            <div className="detail-main-aside">
                <div className="game-prices">
                    {this.renderMarketPrice()}
                    <div className="option-select func-clearfix">
                        <div className="game-platform">
                            <label className="label">平台</label>
                            <select value={platform} className="platforms" onChange={e => this.setState({ platform: e.target.value})}>
                                <option key='none' value="" disabled>--选择平台--</option>
                                {_.map(platforms, (_p, _i ) => <option key={_i} value={_p}>{_p}</option>)}
                            </select>
                        </div>
                        <div className="game-version">
                            <label className="label">版本</label>
                            <select value={edition} className="versions" onChange={e => this.setState({ edition: e.target.value})}>
                                <option key='none' disabled>--选择版本--</option>
                                {_.map(editions, (_e, _i ) => <option key={_i} value={_e}>{_e}</option>)}
                            </select>
                        </div>
                    </div>
                    {this.renderMarketBuy()}
                </div>
                <div className="game-other-sellers">
                    <h3 className="title">其他价格卖家排行</h3>
                    {this.renderOtherSalesList()}
                </div>
            </div>
        )
    }
}