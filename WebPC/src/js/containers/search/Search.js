/**
 * @class Search
 * @extends React.Component
 * @desc 搜索页面
 * @author zhaojunzhe(1429595365@qq.com)
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as searchActions from '../../actions/searchActions'
import SearchHeader from '../../components/search/searchHeader'
import SearchProduct from '../../components/search/searchProduct'
import SearchMore from '../../components/search/searchMore'
import * as gameActions from '../../actions/gameActions';
import * as cartActions from '../../actions/cartActions';
import * as catalogAction from '../../actions/catalogAction'

class Search extends Component {
    componentDidMount() {
        const { params } = this.props;
    }

    componentWillReceiveProps(nextProps) {
        const { params } = this.props;
        const nextParams = nextProps.params;
        console.log(_.isEqual(params, nextParams));
    }

    render() {
        const { searchQuery } = this.props;
        return (
            <div className="container catalog-container">
                <SearchHeader {...this.props}></SearchHeader>
                <SearchProduct {...this.props}></SearchProduct>
                <SearchMore {...this.props}/>
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
        cartActions: bindActionCreators(cartActions, dispatch),
        catalogAction: bindActionCreators(catalogAction, dispatch),
        searchActions: bindActionCreators(searchActions, dispatch),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);