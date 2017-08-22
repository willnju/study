/**
 * @class Item
 * @extends React.Component
 * @desc 购物车列表单项
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class CartHead extends Component {
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

    onRemoveClick(game) {
        const { cartActions } = this.props;
        cartActions.removeFromCart({
            game: game
        });
    }

    render() {
        let {item}=this.props
        let onsale=false
        return (
            <div className="cart-item-wrapper">
            <div className="item-image">
                <Link to={`/item/${item.p_id}`} title="Go to the game's page">
                <img alt={item.name_zh} src={item.thumbnail}/>
                </Link>
            </div>
            <div className="item-content">
                <a href={'#/item/'+item.p_id} title="Go to the game's page">
                    <h3 className="product-title">{item.name_zh}</h3>
                    <div className="product-os-info">
                        {/*<ul>
                            <li><i className="fa fa-windows" title="Windows"></i></li>
                            <li><i className="fa fa-apple" title="Mac"></i></li>
                            <li><i className="fa fa-linux" title="Linux"></i></li>
                        </ul>
                        <div className="product-drm">Steam</div>*/}
                        <ul>
                            <li>{item.s_platform}</li>
                            <li>{item.s_edition}</li>
                        </ul>
                    </div>
                        
                    <div className="message message-warning"><i className="fa fa-exclamation-circle"></i> {item.match}</div>
                </a> 
            </div>
            <div className="item-aside">
                <div className="item-price">
                    <span className="product-price">
                    {onsale?<p className="price-pre"><del>$49.99</del></p>:''}
                        
                        <p className="price-now">
                            <sup className="currency-symbol">￥</sup><span className="integer">{item.price} x {item.number}</span>
                        </p> 
                    </span>
                </div>
                <div className="item-action">
                    <a href="javascript:;" onClick={this.onUpdateNumberClick.bind(this, item, 'plus')} className='action'><i className="fa fa-plus"></i></a>
                    <a href="javascript:;" onClick={this.onUpdateNumberClick.bind(this, item, 'minus')} className='action'><i className="fa fa-minus"></i></a>
                    <a href='javascript:;' onClick={this.onRemoveClick.bind(this, item)} className="action" data-action="cartItem:remove">
                        <i className="fa fa-trash"></i>
                    </a>
                </div>
            </div>
            </div>
        )
    }
}