/**
 * @class Popular
 * @extends React.Component
 * @desc 主页流行游戏部分
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

import Placeholder from '../../plugins/Placeholder';
import { API_PRO_PREFIX } from '../../constants/api';

export default class Popular extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        const { gameActions } = this.props;
        gameActions.loadPopularGamesList({
            cb: () => {
                this.setState({ loading: false });
            }
        });
    }

    onAddToCartClick(game, e) {
        e.preventDefault();
        const { cartActions } = this.props;
        cartActions.addToCart({
            game: game,
            cb: () => { console.log('success') }
        })
    }

    renderGamesList() {
        const { popularGamesList } = this.props;
        
        let renderItem = (game, index) => {
            let imgStyle = {
                backgroundImage: `url(${API_PRO_PREFIX}${game.thumb_img})`
            };
            return (
                <Link to={`/item/${game.p_id}`} key={index} className="game-card-long games-list-item">
                    <div className="game-card-content">
                        <div className="game-img" style={imgStyle}>
                            {/*<span className="count">3</span>*/}
                        </div>
                        <div className="game-info">
                            <h3 className="game-title">{game.name_zh}</h3>
                            {/*<ul className="game-os func-clearfix">
                                <li><i className="fa fa-windows"></i></li>
                                <li><i className="fa fa-apple"></i></li>
                                <li><i className="fa fa-linux"></i></li>
                            </ul>*/}
                            <p className="game-current">
                                <span className="platform">{game.s_platform}</span>
                                <span className="version">{game.s_edition}</span>
                            </p>
                            <div className="game-price-detail">
                                {/*<span className="game-discount pg-tag-discount">-60%</span>*/}
                                <span className="game-price pg-btn-price pg-btn-price__discount">
                                    <span className="price-pre">￥{game.market_price}</span>
                                    <span className="price-now">￥{game.price}</span>
                                    <span className="addto-cart" onClick={this.onAddToCartClick.bind(this, game)}><i className="fa fa-cart-plus"></i>￥{game.price}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            )
        }

        return (
            <div className="games-list func-clearfix">
                {_.map(popularGamesList, renderItem)}
            </div>
        )
    }

    render() {
        let content = null;
        if (this.state.loading) {
            content = (
                <div className="placeholders">
                    <Placeholder type="content"></Placeholder>
                </div>
            )
        } else {
            content = (
                <div>
                    {this.renderGamesList()}
                </div>
            )
        }

        return (
            <section className="home-section home-section-popular">
                <div className="popular-component">
                    <div className="popular-head func-clearfix">
                        <h3 className="title">畅销</h3>
                        <Link to="/catalog" className="more pg-btn pg-btn__small pg-btn__primary">查看更多</Link>
                    </div>
                    <div className="popular-content">
                        {content}
                    </div>
                </div>
            </section>
        )
    }
}