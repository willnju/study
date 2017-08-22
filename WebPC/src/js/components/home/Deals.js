/**
 * @class Hero
 * @extends React.Component
 * @desc 主页交易游戏部分
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Deals extends Component {
    render() {
        return (
            <section className="home-section home-section-deals">
                <div className="deals-component">
                    <div className="deals-head func-clearfix">
                        <h3 className="title">Deals</h3>
                        <Link to="/catalog" className="more pg-btn pg-btn__small pg-btn__primary">查看更多</Link>
                    </div>
                    <div className="deals-content">
                        <div className="games-list func-clearfix">
                            <a className="pg-game-card games-list-item" href="javascript:;">
                                <div className="game-img"></div>
                                <div className="game-info">
                                    <h3 className="game-title">F1™ 2016</h3>
                                    <ul className="game-os func-clearfix">
                                        <li><i className="fa fa-windows"></i></li>
                                        <li><i className="fa fa-apple"></i></li>
                                        <li><i className="fa fa-linux"></i></li>
                                    </ul>
                                </div>
                                <div className="game-footer">
                                    <span className="game-price pg-btn-price">
                                        <span className="price-now">$23.99</span>
                                        <span className="addto-cart"><i className="fa fa-cart-plus"></i>$23.99</span>
                                    </span>
                                </div>
                            </a>
                            <a className="pg-game-card games-list-item" href="javascript:;">
                                <div className="game-img"></div>
                                <div className="game-info">
                                    <h3 className="game-title">F1™ 2016</h3>
                                    <ul className="game-os func-clearfix">
                                        <li><i className="fa fa-windows"></i></li>
                                        <li><i className="fa fa-apple"></i></li>
                                        <li><i className="fa fa-linux"></i></li>
                                    </ul>
                                </div>
                                <div className="game-footer">
                                    <span className="game-price pg-btn-price">
                                        <span className="price-now">$23.99</span>
                                        <span className="addto-cart"><i className="fa fa-cart-plus"></i>$23.99</span>
                                    </span>
                                </div>
                            </a>
                            <a className="pg-game-card games-list-item" href="javascript:;">
                                <div className="game-img"></div>
                                <div className="game-info">
                                    <h3 className="game-title">F1™ 2016</h3>
                                    <ul className="game-os func-clearfix">
                                        <li><i className="fa fa-windows"></i></li>
                                        <li><i className="fa fa-apple"></i></li>
                                        <li><i className="fa fa-linux"></i></li>
                                    </ul>
                                </div>
                                <div className="game-footer">
                                    <span className="game-price pg-btn-price">
                                        <span className="price-now">$23.99</span>
                                        <span className="addto-cart"><i className="fa fa-cart-plus"></i>$23.99</span>
                                    </span>
                                </div>
                            </a>
                            <a className="pg-game-card games-list-item" href="javascript:;">
                                <div className="game-img"></div>
                                <div className="game-info">
                                    <h3 className="game-title">F1™ 2016</h3>
                                    <ul className="game-os func-clearfix">
                                        <li><i className="fa fa-windows"></i></li>
                                        <li><i className="fa fa-apple"></i></li>
                                        <li><i className="fa fa-linux"></i></li>
                                    </ul>
                                </div>
                                <div className="game-footer">
                                    <span className="game-price pg-btn-price">
                                        <span className="price-now">$23.99</span>
                                        <span className="addto-cart"><i className="fa fa-cart-plus"></i>$23.99</span>
                                    </span>
                                </div>
                            </a>
                            <a className="pg-game-card pg-game-card__discount games-list-item" href="javascript:;">
                                <div className="game-img"></div>
                                <div className="game-info">
                                    <h3 className="game-title">F1™ 2016</h3>
                                    <ul className="game-os func-clearfix">
                                        <li><i className="fa fa-windows"></i></li>
                                        <li><i className="fa fa-apple"></i></li>
                                        <li><i className="fa fa-linux"></i></li>
                                    </ul>
                                </div>
                                <div className="game-footer">
                                    {/*<span className="game-discount pg-tag-discount">-60%</span>*/}
                                    <span className="game-price pg-btn-price pg-btn-price__discount">
                                        <span className="price-pre">$59.99</span>
                                        <span className="price-now">$23.99</span>
                                        <span className="addto-cart"><i className="fa fa-cart-plus"></i>$23.99</span>
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}