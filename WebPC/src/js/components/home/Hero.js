/**
 * @class Hero
 * @extends React.Component
 * @desc 主页轮播部分
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import _ from 'lodash';

import Placeholder from '../../plugins/Placeholder';
import { API_PRO_PREFIX } from '../../constants/api';

class HeroSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    componentDidMount() {
        this.setAutoPlayTimeout();
    }

    componentWillUnmount() {
        clearTimeout(this.autoPlayTimeout);
    }

    setAutoPlayTimeout() {
        this.autoPlayTimeout = setTimeout(this.autoPlay.bind(this), 3000);
    }

    autoPlay() {
        const { sliderGamesList } = this.props;
        const { current } = this.state;
        const length = _.keys(sliderGamesList).length;
        let next = current + 1;
        if (current === length - 1) {
            next = 0;
        }
        this.setState({ current: next });
        this.setAutoPlayTimeout();
    }

    onPreNavClick() {
        const {
            sliderGamesList
        } = this.props;
        const {
            current
        } = this.state;
        let newCurrent = 0;
        let keys = _.keys(sliderGamesList);
        if (current === 0) {
            newCurrent = keys.length - 1;
        } else {
            newCurrent = current - 1;
        }
        this.setState({
            current: newCurrent
        });
        clearTimeout(this.autoPlayTimeout);
        this.setAutoPlayTimeout();
    }

    onNextNavClick() {
        const {
            sliderGamesList
        } = this.props;
        const {
            current
        } = this.state;
        let newCurrent = 0;
        let keys = _.keys(sliderGamesList);
        if (current === keys.length - 1) {
            newCurrent = 0;
        } else {
            newCurrent = current + 1;
        }
        this.setState({
            current: newCurrent
        });
        clearTimeout(this.autoPlayTimeout);
        this.setAutoPlayTimeout();
    }

    onNavItemClick(next) {
        this.setState({ current: next });
        clearTimeout(this.autoPlayTimeout);
        this.setAutoPlayTimeout();
    }

    onAddToCartClick(game, e) {
        e.preventDefault();
        const { cartActions } = this.props;
        cartActions.addToCart({
            game: game,
            cb: () => { console.log('success') }
        })
    }

    renderItemLink(index) {
        const {
            sliderGamesList
        } = this.props;
        let keys = _.keys(sliderGamesList);
        let currentGames = sliderGamesList[keys[this.state.current]];
        let linkClassName = classNames({
            "item": true,
            "item-top": index === 1,
            "item-bottom": index === 2
        });
        let linkStyle = {
            backgroundImage: `url(${API_PRO_PREFIX}${currentGames[index].thumb_img})`
        };
        return (
            <Link to={`/item/${currentGames[index].p_id}`} className={linkClassName} style={linkStyle}>
                <div className="item-mask"></div>
                <div className="item-content">
                    <div className="top-price">
                        <div className="price">
                            <span className="price-pre">￥{currentGames[index].market_price}</span>
                            <span className="price-now">￥{currentGames[index].price}</span>
                            <span className="addto-cart" onClick={this.onAddToCartClick.bind(this, currentGames[index])}><i className="fa fa-cart-plus"></i>￥{currentGames[index].price}</span>
                        </div>
                        <div className="discount">标准版</div>
                        <div className="discount">PS4</div>
                    </div>
                    <div className="bottom-title">
                        <h3>{currentGames[index].name_zh}</h3>
                    </div>
                </div>
            </Link>
        )
    }

    renderSliderContainer() {
        return (
            <div className="slider-container">
                <div className="slider-items">
                    <div className="items-left">
                        {this.renderItemLink(0)}
                    </div>
                    <div className="items-right">
                        {this.renderItemLink(1)}
                        {this.renderItemLink(2)}
                    </div>
                </div>
            </div>
        )
    }

    renderSliderNavs() {
        const {
            sliderGamesList
        } = this.props;
        let navItems = [];
        let keys = _.keys(sliderGamesList);
        for (let i = 0; i < keys.length; i++) {
            let navItemClassName = classNames({
                "hero-nav-item": true,
                "active": i === this.state.current
            });
            navItems.push(<a key={i} onClick={this.onNavItemClick.bind(this, i)} className={navItemClassName} href="javascript:;">•</a>);
        }
        return (
            <div className="slider-nav">
                <a href="javascript:;" className="nav-pre" onClick={this.onPreNavClick.bind(this)}>
                    <i className="fa fa-chevron-left"></i>
                </a>
                <span className="hero-navs">
                    {navItems}
                </span>
                <a href="javascript:;" className="nav-next" onClick={this.onNextNavClick.bind(this)}>
                    <i className="fa fa-chevron-right"></i>
                </a>
            </div>
        )
    }

    render() {
        return (
            <div className="hero-slider-component">
                {this.renderSliderContainer()}
                {this.renderSliderNavs()}
                <a href="javascript:;" className="side-nav side-nav-pre" onClick={this.onPreNavClick.bind(this)}><i className="fa fa-chevron-left"></i></a>
                <a href="javascript:;" className="side-nav side-nav-next" onClick={this.onNextNavClick.bind(this)}><i className="fa fa-chevron-right"></i></a>
            </div>
        )
    }
}

export default class Hero extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {
            gameActions
        } = this.props;
        gameActions.loadSliderGamesList();
    }

    render() {
        const { sliderGamesBg } = this.props;
        let heroSectionStyle = {
            backgroundImage: `url(${API_PRO_PREFIX}${sliderGamesBg})`
        };
        return (
            <section className="home-section home-section-hero" style={heroSectionStyle}>
                <HeroSlider {...this.props}></HeroSlider>
            </section>
        )
    }
}