/**
 * @class PaymentMethods
 * @extends React.Component
 * @desc 支付方式
 * @author feixihan(1095714266@qq.com)
 */
import React, { Component } from 'react'
import classNames from 'classnames'
export default class PaymentMethods extends Component {
  componentWillMount() {
  //   fetch('/api/Product/hot').then(res=>console.log(res))
  //  console.log(0)
  }

  onPayMethodClick(method) {
    const { cartActions } = this.props;
    cartActions.updatePayMethod(method); 
  }
  
  render () {
    const { paymethod } = this.props;
    return (
      <section className='dock-card'>
        <div className='dock-head'>
          <span>支付方式</span>
        </div>
        <div className='dock-row'>
          <ul className='paylist'>
            <li>
              <input type="radio" className='pay-radio' checked={paymethod === 'alipay'} onChange={this.onPayMethodClick.bind(this, 'alipay')} /><div className={classNames('pay','zfb',{active: paymethod === 'alipay' })} onClick={this.onPayMethodClick.bind(this, 'alipay')}></div>
            </li>
            <li>
              <input type="radio" className='pay-radio' checked={paymethod === 'wechat'} onChange={this.onPayMethodClick.bind(this, 'wechat')} /><div className={classNames('pay','wx',{active: paymethod === 'wechat' })} onClick={this.onPayMethodClick.bind(this, 'wechat')}></div>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}
