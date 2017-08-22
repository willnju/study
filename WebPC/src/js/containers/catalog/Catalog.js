/**
 * @class Catalog
 * @extends React.Component
 * @desc Catalog Container
 * @author zhaojunzhe(1429595365@qq.com)
 */
import {
	connect
} from 'react-redux';
import {
	bindActionCreators
} from 'redux';
import React, {
	Component
} from 'react';
import _ from 'lodash';

import RenderHeader from '../../components/catalog/RenderHeader'
import RenderMore from '../../components/catalog/RenderMore'
import RenderProduct from '../../components/catalog/RenderProduct'
import Share from '../../components/share/Share';
import * as catalogAction from '../../actions/catalogAction'
import * as cartActions from '../../actions/cartActions'


class Catalog extends Component {
	componentDidMount() {
		const { params } = this.props;
	}

	componentWillReceiveProps(nextProps) {
		const { params } = this.props;
		const nextParams = nextProps.params;
		console.log(_.isEqual(params, nextParams));
	}

	render() {
		return (
			<div className="container catalog-container">
           		<RenderHeader {...this.props}></RenderHeader>
            	<RenderProduct {...this.props}></RenderProduct>
            	<RenderMore {...this.props}></RenderMore>
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
		catalogAction: bindActionCreators(catalogAction, dispatch),
        cartActions: bindActionCreators(cartActions, dispatch)
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);