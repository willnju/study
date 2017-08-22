/**
 * @class CartList
 * @extends React.Component
 * @desc 订单列表
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';

import Item from './Item';
import Placeholder from '../../plugins/Placeholder';

export default class CartList extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     loading: true
        // };
    }

    componentDidMount() {

    }

    render() {
        // if (this.state.loading) return <Placeholder type='content'></Placeholder>;

        let { cartList }=this.props
        let isEmpty = cartList.length > 0 ? false : true;
   
        if (isEmpty) {
            return (
                <section className="dock-card dock-empty">
                    <p>您的购物车暂时还没有商品 :(</p>
                    <a>继续购物吧</a>
                </section>
            )
        } else {
            return (
                <section className="dock-card">
                <div className="dock-head">
                    <span>购物车列表</span>
                    <span>价格 x 数量</span>
                </div>
                { cartList.map((x,i) => {
                        return <Item {...this.props} item={x} key={i}></Item>
                    })
                }
                </section>
        )
        }
     
    }
}