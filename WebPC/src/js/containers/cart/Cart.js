/**
 * @class Cart
 * @extends React.Component
 * @desc 购物车
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CartHead from '../../components/cart/CartHead';
import CartList from '../../components/cart/CartList';
import Warning from '../../components/cart/Warning';
import Information from '../../components/cart/Information';
import PaymentMethods from '../../components/cart/PaymentMethods';
import Check from '../../components/cart/Check';
import * as cartActions from '../../actions/cartActions';
import * as orderActions from '../../actions/orderActions';

class Cart extends Component {
  componentDidMount() {
    const { cartActions } = this.props;
    cartActions.initialPayMethod();
  }

  render () {
    // console.log(this.props);
    return (
      <div className='container cart-container'>
        <CartHead></CartHead>
        <section className='cart-main'>
          <div className='cart-left'>
            <CartList {...this.props}></CartList>
            {/*<Warning></Warning>*/}
            <Information></Information>
          </div>
          <div className='cart-right'>
            <PaymentMethods {...this.props}></PaymentMethods>
            <Check {...this.props}></Check>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    console.log(state);
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        cartActions: bindActionCreators(cartActions, dispatch),
        orderActions: bindActionCreators(orderActions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);