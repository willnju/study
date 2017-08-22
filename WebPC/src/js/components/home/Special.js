/**
 * @class Special
 * @extends React.Component
 * @desc 主页特别游戏部分
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import _ from 'lodash';

import Placeholder from '../../plugins/Placeholder';
import { API_PRO_PREFIX } from '../../constants/api';

export default class Special extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scroll: 0,
            loading: true
        };
    }

    componentDidMount() {
        const { gameActions } = this.props;
        gameActions.loadSpecialGamesList({
            cb: () => {
                this.setState({ loading: false });
            }
        })
    }

    onGamesListPreClick() {
        const { scroll } = this.state;
        const { specialGamesList } = this.props;
        const count = specialGamesList.length;
        if (scroll === 0 || count <= 5) {
            return;
        } else {
            this.setState({
                scroll: scroll - 1
            })
        }
    }

    onGamesListNextClick() {
        const { scroll } = this.state;
        const { specialGamesList } = this.props;
        let count = specialGamesList.length;
        if (scroll === count - 5 || count <= 5) {
            return;
        } else {
            this.setState({
                scroll: scroll + 1
            })
        }
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
        const { scroll } = this.state;
        const { specialGamesList } = this.props;

        let gamesListStyle = {
            width: '1728px',
            transform: `translateX(-${216 * scroll}px)`
        };
        let renderItem = (_game, _index) => {
            let imgStyle = {
                backgroundImage: `url(${API_PRO_PREFIX}${_game.thumb_img})`
            };
            return (
                <Link key={_index} to={`/item/${_game.p_id}`} className="pg-game-card games-list-item">
                    <div className="game-img" style={imgStyle}></div>
                    <div className="game-info">
                        <h3 className="game-title">{_game.name_zh}</h3>
                        {/*<ul className="game-os func-clearfix">
                            <li><i className="fa fa-windows"></i></li>
                            <li><i className="fa fa-apple"></i></li>
                            <li><i className="fa fa-linux"></i></li>
                        </ul>*/}
                        <p className="platform"><label>平台：</label><span className="cxt">{_game.s_platform}</span></p>
                        <p className="version"><label>版本：</label><span className="cxt">{_game.s_edition}</span></p>
                    </div>
                    <div className="game-footer">
                        <span className="game-price pg-btn-price pg-btn-price__discount">
                            <span className="price-pre">￥{_game.market_price}</span>
                            <span className="price-now">￥{_game.price}</span>
                            <span className="addto-cart" onClick={this.onAddToCartClick.bind(this, _game)}><i className="fa fa-cart-plus"></i>￥{_game.price}</span>
                        </span>
                    </div>
                </Link>
            )
        }

        return (
            <div className="games-list func-clearfix" style={gamesListStyle}>
                {_.map(specialGamesList, renderItem)}
            </div>
        )
    }

    render() {
        let content = null;
        if (this.state.loading) {
            content = (
                <div className="placeholder">
                    <Placeholder type="content"></Placeholder>
                </div>
            );
        } else {
            content = this.renderGamesList();
        }
        
        const { scroll } = this.state;
        const { specialGamesList, specialGamesBg } = this.props;
        let count = specialGamesList.length;

        let preClass = classNames({
            'games-nav games-nav-pre': true,
            'disabled': scroll === 0 || count <= 5
        });
        let nextClass = classNames({
            'games-nav games-nav-next': true,
            'disabled': scroll === count - 5 || count <= 5
        });
        let specialSectionStyle = {
            backgroundImage: `url(${API_PRO_PREFIX}${specialGamesBg})`
        }
        return (
            <section className="home-section home-section-special" style={specialSectionStyle}>
                <div className="speical-component">
                    <div className="special-head func-clearfix">
                        <h3 className="title">特别推荐</h3>
                        <Link to="/catalog" className="more pg-btn pg-btn__small pg-btn__primary">查看更多</Link>
                    </div>
                    <div className="special-content">
                        <div className="games-scroll">
                            {content}
                        </div>
                        <a href="javascript:;" onClick={this.onGamesListPreClick.bind(this)} className={preClass}><i className="fa fa-chevron-left"></i></a>
                        <a href="javascript:;" onClick={this.onGamesListNextClick.bind(this)} className={nextClass}><i className="fa fa-chevron-right"></i></a>
                    </div>
                </div>
            </section>
        )
    }
}