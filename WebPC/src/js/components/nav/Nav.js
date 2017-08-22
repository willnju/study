/**
 * @class Nav
 * @extends React.Component
 * @desc 导航栏
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import numeral from 'numeral';
import _ from 'lodash';

import { message } from '../../plugins/Message';
import { API_PRO_PREFIX } from '../../constants/api';

class HeaderCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        const { cartActions } = this.props;
        cartActions.loadCartList({
            cb: () => { this.setState({ loading: false }); }
        });
    }

    componentWillReceiveProps(nextProps) {
        const { userInfo } = this.props;
        const nextUserInfo = nextProps.userInfo;
        const cartActions = nextProps.cartActions;

        if (!_.isEqual(userInfo, nextUserInfo)) {
            this.setState({ loading: true });
            cartActions.loadCartList({
                cb: () => { this.setState({ loading: false }); }
            });
        }
    }

    onUpdateNumberClick(game, type) {
        const { cartActions } = this.props;
        let number = parseInt(game.number);
        switch (type) {
            case 'plus':
                number++;
                break;
            case 'minus':
                number--;
                break;
            default:
                break;
        }
        if (number === 0) {
            cartActions.removeFromCart({
                game: game
            });
        } else {
            cartActions.updateCartNumber({
                game: game,
                number: number
            });
        }
    }

    onRemoveFromCartClick(game) {
        const { cartActions } = this.props;
        cartActions.removeFromCart({
            game: game
        });
    }

    render() {
        const { cartList } = this.props;
        let cart = null;
        if (this.state.loading) {
            cart = (
                <div className="header-cart header-cart-loading">
                    <div className="loading">
                        &nbsp;<i className="fa fa-spinner"></i>
                    </div>
                </div>
            )
        } else if (cartList.length === 0) {
            cart = (
                <div className="header-cart header-cart-empty">
                    <a href="javascript:;" className="link">
                        <i className="fa fa-shopping-cart"></i>
                        <span className="cart-num">0</span>
                    </a>
                </div>
            )
        } else {
            let renderItem = (game, index) => {
                let imgStyle = {
                    backgroundImage: `url(${API_PRO_PREFIX}${game.thumbnail})`
                };
                return (
                    <li key={index} className="item">
                        <Link to={`/item/${game.p_id}`} className="game-img" style={imgStyle}></Link>
                        <div className="game-detail">
                            <p className="title">{game.name_zh}</p>
                            <p className="current"><span className='platform'>{game.s_platform}</span><span className='version'>{game.s_edition}</span></p>
                            <p className="price">
                                <span>￥{game.price} x {game.number}</span>
                                <span className="remove">
                                    <a title='添加一个' onClick={this.onUpdateNumberClick.bind(this, game, 'plus')} href="javascript:;"><i className="fa fa-plus"></i></a>
                                    <a title='删除一个' onClick={this.onUpdateNumberClick.bind(this, game, 'minus')} href="javascript:;"><i className="fa fa-minus"></i></a>
                                    <a title='从购物车删除' onClick={this.onRemoveFromCartClick.bind(this, game)} href="javascript:;"><i className="fa fa-trash"></i></a>
                                </span>
                            </p>
                        </div>
                    </li>
                )
            }
            let totalPrice = (() => {
                let total = 0;
                _.each(cartList, _item => {
                    total += parseFloat(_item.price * _item.number);
                });
                return numeral(total).format('0.00');
            })();
            let totalNum = (() => {
                let total = 0;
                _.each(cartList, _item => {
                    total += parseInt(_item.number);
                });
                return total;
            })();
            cart = (
                <div className="header-cart">
                    <Link to="/cart" className="link">
                        <i className="fa fa-shopping-cart"></i>
                        <span className="cart-num">{totalNum}</span>
                    </Link>
                    <div className="drop-items">
                        <ul className="cart-items">
                            {_.map(cartList, renderItem)}
                        </ul>
                        <div className="checkout">
                            <Link to='/cart' className="btn"><i className="fa fa-shopping-cart"></i>确认下单</Link>
                            <span className="total-price">￥{totalPrice}</span>
                        </div>
                    </div>
                </div>
            )
        }

        return cart;
    }
}

class HeaderNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        const { userActions } = this.props;
        userActions.loadUserInfo({
            cb: () => this.setState({ loading: false })
        });
    }

    onLogoutClick() {
        const { userActions, cartActions, router } = this.props;
        userActions.userLogout({
            cb: () => {
                userActions.loadUserInfo();
                // cartActions.loadCartList();
                router.push('/login');
            }
        });
    }

    // 搜索框回车事件
    onSearchKeyUp(e) {
        const { router, searchActions } = this.props;
        const keyCode = e.keyCode;
        const value = e.target.value.trim();
        const search = this.refs.search;
        if (keyCode !== 13 || value === '') return;
        searchActions.updateSearchQuery({
            query: value,
            cb: () => {
                router.push('/search/0/0/0');
                search.value = '';
            }
        });
    }

    render() {
        const { userInfo } = this.props;

        let account = null;

        if (this.state.loading) {
            account = (
                <div className="nav-item loading">
                    &nbsp;<i className="fa fa-spinner"></i>
                </div>
            );
        } else if (userInfo == null) {
            account = (
                <div className="nav-item logout">
                    <Link to="/login">
                        <i className="fa fa-user"></i>
                        <span className="text">登录</span>
                    </Link>
                </div>
            );
        } else {
            account = (
                <div className="nav-item login">
                    <Link to="/account/details">
                        <img className="acc-icon" src="http://dskhvldhwok3h.cloudfront.net/assets/fe/images/avatar-90fda28ac2f803f1c30ad92f6ea22858.jpg" alt="" />
                        <span className="acc-name">{userInfo.username}</span>
                    </Link>
                    <ul className="drop-items">
                        <li className="item"><Link to="/account/details"><i className="fa fa-user"></i><span className="text">我的账户</span></Link></li>
                        {/*<li className="item"><Link to="/account/games"><i className="fa fa-gamepad"></i><span className="text">我的游戏</span></Link></li>*/}
                        <li className="item"><Link to="/account/orders"><i className="fa fa-list"></i><span className="text">我的订单</span></Link></li>
                        <li className="item"><Link to="/account/sales"><i className="fa fa-gg"></i><span className="text">销售游戏</span></Link></li>
                        <li className="item"><Link to="/account/services"><i className="fa fa-smile-o"></i><span className="text">客服中心</span></Link></li>
                        <li className="item"><a href="javascript:;" onClick={this.onLogoutClick.bind(this)}><i className="fa fa-sign-out"></i><span className="text">注销</span></a></li>
                    </ul>
                </div>
            );
        }

        return (
            <div className="header-nav">
                <nav className="nav-wrapper">
                    <div className="nav-item games">
                        <a href="javascript:;">
                            <i className="fa fa-gamepad"></i>
                            <span className="text">电脑游戏</span>
                        </a>
                        <ul className="drop-items">
                            <li className="item">
                                <Link to="/catalog"><i className="fa fa-certificate"></i><span className="text">类型</span></Link>
                                <ul className="item-more">
                                    <li className="more-item"><Link to='/catalog/pcgame/risk/all?sort=price' href="javascript:;">冒险</Link></li>
                                    <li className="more-item"><a href="javascript:;">动作</a></li>
                                    <li className="more-item"><a href="javascript:;">射击</a></li>
                                    <li className="more-item"><a href="javascript:;">策略</a></li>
                                    <li className="more-item"><a href="javascript:;">模拟</a></li>
                                    <li className="more-item"><a href="javascript:;">体育</a></li>
                                    <li className="more-item"><a href="javascript:;">竞速</a></li>
                                    <li className="more-item"><a href="javascript:;">角色扮演</a></li>
                                    <li className="more-item"><a href="javascript:;">独立</a></li>
                                    <li className="more-item"><a href="javascript:;">休闲</a></li>
                                </ul>
                            </li>
                            <li className="item">
                                <Link to="/catalog"><i className="fa fa-certificate"></i><span className="text">Steam</span></Link>
                            </li>
                            <li className="item">
                                <Link to="/catalog"><i className="fa fa-certificate"></i><span className="text">Uplay</span></Link>
                            </li>
                            <li className="item">
                                <Link to="/catalog"><i className="fa fa-certificate"></i><span className="text">Origin</span></Link>
                            </li>
                            {/*<li className="item">
                                <Link to="/catalog"><i className="fa fa-certificate"></i><span className="text">平台</span></Link>
                                <ul className="item-more">
                                    <li className="more-item"><a href="javascript:;">Steam</a></li>
                                    <li className="more-item"><a href="javascript:;">Uplay</a></li>
                                    <li className="more-item"><a href="javascript:;">Origin</a></li>
                                </ul>
                            </li>*/}
                        </ul>
                    </div>
                    <div className="nav-item deals">
                        <a href="javascript:;">
                            <i className="fa fa-th-large"></i>
                            <span className="text">游戏卡</span>
                        </a>
                        <ul className="drop-items">
                            {/*<li className="item">
                                <a href="javascript:;"><i className="fa fa-certificate"></i><span className="text">类型</span></a>
                                <ul className="item-more">
                                    <li className="more-item"><a href="javascript:;">赛车</a></li>
                                    <li className="more-item"><a href="javascript:;">对战</a></li>
                                    <li className="more-item"><a href="javascript:;">对战</a></li>
                                </ul>
                            </li>*/}
                            <li className="item">
                                <a href="javascript:;"><i className="fa fa-certificate"></i><span className="text">Steam</span></a>
                                {/*<ul className="item-more">
                                    <li className="more-item"><a href="javascript:;">Steam</a></li>
                                    <li className="more-item"><a href="javascript:;">PlayStation</a></li>
                                    <li className="more-item"><a href="javascript:;">Google Play</a></li>
                                    <li className="more-item"><a href="javascript:;">Itunes</a></li>
                                    <li className="more-item"><a href="javascript:;">Nintendo</a></li>
                                    <li className="more-item"><a href="javascript:;">Karma Koin</a></li>
                                </ul>*/}
                            </li>
                            <li className="item">
                                <a href="javascript:;"><i className="fa fa-certificate"></i><span className="text">PlayStation</span></a>
                            </li>
                            <li className="item">
                                <a href="javascript:;"><i className="fa fa-certificate"></i><span className="text">Google Play</span></a>
                            </li>
                            <li className="item">
                                <a href="javascript:;"><i className="fa fa-certificate"></i><span className="text">Itunes</span></a>
                            </li>
                            <li className="item">
                                <a href="javascript:;"><i className="fa fa-certificate"></i><span className="text">Nintendo</span></a>
                            </li>
                            <li className="item">
                                <a href="javascript:;"><i className="fa fa-certificate"></i><span className="text">Karma Koin</span></a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-item deals">
                        <a href="javascript:;">
                            <i className="fa fa-strikethrough"></i>
                            <span className="text">折扣</span>
                        </a>
                    </div>
                    {account}
                    <div className="search">
                        <div className="search-wrapper">
                            <input ref='search' placeholder="搜索游戏" onKeyUp={this.onSearchKeyUp.bind(this)} type="text" className="input" />
                            <a className="icon">
                                <i className="fa fa-search"></i>
                                <span className="text">&nbsp;</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default class Nav extends Component {
    renderHeaderLogo() {
        return (
            <div className="header-logo">
                <Link className="link" to='/'></Link>
            </div>
        )
    }

    renderHeaderCart() {
        return <HeaderCart {...this.props}></HeaderCart>
    }

    renderHeaderNav() {
        return <HeaderNav {...this.props}></HeaderNav>
    }

    render() {
        return (
            <header className="header">
                <div className="header-wrapper">
                    {this.renderHeaderLogo()}
                    {this.renderHeaderCart()}
                    {this.renderHeaderNav()}
                </div>
            </header>
        )
    }
}