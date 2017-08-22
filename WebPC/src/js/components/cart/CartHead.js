/**
 * @class CartHead
 * @extends React.Component
 * @desc 购物车标题
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react'
import { Link } from 'react-router';

export default class CartHead extends Component {
  constructor () {
    super()
  
  }
  render () {
    return (
      <header className='cart-head'>
        <div>
          <h1>我的购物车</h1>
        </div>
        <div>
          <Link className='link' to='/'>
          <button >
            <i className='fa fa-chevron-left'></i>&nbsp;继续购物
          </button>
          </Link>
        </div>
      </header>
    )
  }
}
