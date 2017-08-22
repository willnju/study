/**
 * @class App
 * @extends React.Component
 * @desc App容器
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userActions';
import * as cartActions from '../../actions/cartActions';
import * as searchActions from '../../actions/searchActions';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';

class App extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className='root-app'>
                <Nav {...this.props}></Nav>
                <main className='main'>{children}</main>
                <Footer></Footer>
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
        userActions: bindActionCreators(userActions, dispatch),
        cartActions: bindActionCreators(cartActions, dispatch),
        searchActions: bindActionCreators(searchActions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);