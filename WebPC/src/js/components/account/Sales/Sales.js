/**
 * @class Sales
 * @extends React.Component
 * @desc 销售游戏
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import Select from 'react-select';
import classNames from 'classnames';
import $ from 'jquery';
import _ from 'lodash';

import Navs, { NavPane } from '../Navs';
import SalesBill from './SalesBill';
import SalesOnSale from './SalesOnSale';
import SalesProduct from './SalesProduct';
import SalesHistory from './SalesHistory';
import SalesWithdraw from './SalesWithdraw';
import { API_PREFIX } from '../../../constants/api';

export default class Sales extends Component {
    render() {
        return (
            <section className="account-sales">
                <Navs>
                    <NavPane title='销售产品'>
                        <SalesProduct {...this.props}></SalesProduct>
                    </NavPane>
                    <NavPane title='正在销售'>
                        <SalesOnSale {...this.props}></SalesOnSale>
                    </NavPane>
                    <NavPane title='销售历史记录'>
                        <SalesHistory {...this.props}></SalesHistory>
                    </NavPane>
                    <NavPane title='余额变动记录'>
                        <SalesBill {...this.props}></SalesBill>
                    </NavPane>
                    <NavPane title='提现'>
                        <SalesWithdraw {...this.props}></SalesWithdraw>
                    </NavPane>
                </Navs>
            </section>
        )
    }
}