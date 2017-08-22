/**
 * @class Home
 * @extends React.Component
 * @desc 主页
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Hero from '../../components/home/Hero';
import Special from '../../components/home/Special';
import Deals from '../../components/home/Deals';
import Latest from '../../components/home/Latest';
import Group from '../../components/home/Group';
import Popular from '../../components/home/Popular';
import Share from '../../components/share/Share';
import * as gameActions from '../../actions/gameActions';
import * as cartActions from '../../actions/cartActions';

class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="container home-container">
                <Hero {...this.props}></Hero>
                <Special {...this.props}></Special>
                <Group {...this.props}></Group>
                {/*<Latest {...this.props}></Latest>*/}
                <Popular {...this.props}></Popular>
                <Share {...this.props}></Share>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        gameActions: bindActionCreators(gameActions, dispatch),
        cartActions: bindActionCreators(cartActions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);