/**
 * @class Hero
 * @extends React.Component
 * @desc 最新游戏部分
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

import Placeholder from '../../plugins/Placeholder';
import { API_PRO_PREFIX } from '../../constants/api';

export default class Latest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        const { gameActions } = this.props;
        gameActions.loadLatestGamesList({
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
        const { latestGamesList } = this.props;

        let renderItem = (game, index) => {
            let imgStyle = {
                backgroundImage: `url(${API_PRO_PREFIX}${game.thumb_img})`
            };
            return (
                <Link  to={`/item/${game.p_id}`} key={index} className="pg-game-card pg-game-card__discount games-list-item">
                    <div className="game-img" style={imgStyle}></div>
                    <div className="game-info">
                        <h3 className="game-title">{game.name_zh}</h3>
                        {/*<ul className="game-os func-clearfix">
                            <li><i className="fa fa-windows"></i></li>
                            <li><i className="fa fa-apple"></i></li>
                            <li><i className="fa fa-linux"></i></li>
                        </ul>*/}
                        <p className="platform"><label>平台：</label><span className="cxt">{game.s_platform}</span></p>
                        <p className="version"><label>版本：</label><span className="cxt">{game.s_edition}</span></p>
                    </div>
                    <div className="game-footer">
                        {/*<span className="game-discount pg-tag-discount">-60%</span>*/}
                        <span className="game-price pg-btn-price pg-btn-price__discount">
                            <span className="price-pre">￥{game.market_price}</span>
                            <span className="price-now">￥{game.price}</span>
                            <span className="addto-cart" onClick={this.onAddToCartClick.bind(this, game)}><i className="fa fa-cart-plus"></i>￥{game.price}</span>
                        </span>
                    </div>
                </Link>
            )
        }

        return (
            <div className="games-list func-clearfix">
                {_.map(latestGamesList, renderItem)}
            </div>
        )
    }

    render() {
        let content = null;
        if (this.state.loading) {
            content = (
                <div className="placeholders">
                    <Placeholder type='content'></Placeholder>
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
            <section className="home-section home-section-latest">
                <div className="latest-component">
                    <div className="latest-head func-clearfix">
                        <h3 className="title">最新</h3>
                        <Link to="/catalog" className="more pg-btn pg-btn__small pg-btn__primary">查看更多</Link>
                    </div>
                    <div className="latest-content">
                        {content}
                    </div>
                </div>
            </section>
        )
    }
}