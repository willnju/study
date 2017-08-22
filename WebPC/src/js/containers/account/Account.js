/**
 * @class Account
 * @extends React.Component
 * @desc 账户相关页面
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Details from '../../components/account/Details';
import Orders from '../../components/account/Orders';
import Games from '../../components/account/Games';
import Sales from '../../components/account/Sales/Sales';
import Services from '../../components/account/Services';
import * as orderActions from '../../actions/orderActions';
import * as saleActions from '../../actions/saleActions';
import * as userActions from '../../actions/userActions';

class Account extends Component {
    getAccountContent() {
        const {
            params
        } = this.props;
        switch (params.type) {
            case 'details':
                return <Details {...this.props}></Details>;
            case 'orders':
                return <Orders {...this.props}></Orders>;
            case 'games':
                return <Games {...this.props}></Games>;
            case 'sales':
                return <Sales {...this.props}></Sales>;
            case 'services':
                return <Services {...this.props}></Services>
            default:
                return null;
        }
    }

    render() {
        const { params, userInfo, router } = this.props;
        
        if (userInfo === null) {
            // router.push('/login');
            return null;
        }

        let content = this.getAccountContent();

        let getNavItemClass = (query) => {
            return classNames({
                'nav-item': true,
                'active': query === params.type
            });
        };

        return (
            <div className="container account-container">
                <section className="account-section">
                    <ul className="account-nav func-clearfix">
                        <li className={getNavItemClass('details')}>
                            <Link to='/account/details'>我的账户</Link>
                        </li>
                        {/*<li className={getNavItemClass('games')}>
                            <Link to='/account/games'>我的游戏</Link>
                        </li>*/}
                        <li className={getNavItemClass('orders')}>
                            <Link to='/account/orders'>我的订单</Link>
                        </li>
                        <li className={getNavItemClass('sales')}>
                            <Link to='/account/sales'>销售游戏</Link>
                        </li>
                        <li className={getNavItemClass('services')}>
                            <Link to='/account/services'>客服中心</Link>
                        </li>
                    </ul>
                    {content}
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        orderActions: bindActionCreators(orderActions, dispatch),
        saleActions: bindActionCreators(saleActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Account);