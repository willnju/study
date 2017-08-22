/**
 * @file router.js
 * @desc 路由文件
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import $ from 'jquery';

import store from '../stores/store';
import App from '../containers/app/App';
import Home from '../containers/home/Home';
import Catalog from '../containers/catalog/Catalog';
import Search from '../containers/search/Search';
import Cart from '../containers/cart/Cart';
import Login from '../containers/login/Login';
import Item from '../containers/item/Item';
import Email from '../containers/email/Email';
import Account from '../containers/account/Account';
import NoMatch from '../containers/nomatch/NoMatch';

// const history = syncHistoryWithStore(hashHistory, store);
// history.listen(() => {});

let onEnter = () => {
    $('body').animate({ scrollTop: 0 });
};

const router = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={App} onEnter={onEnter}>
                <IndexRoute component={Home} onEnter={onEnter} />
                <Route path='/catalog/:category/:type/:platform' component={Catalog} onEnter={onEnter}></Route>
                <Redirect path='/catalog' to='/catalog/all/all/all'></Redirect>
                <Route path='/search/:category/:type/:platform' component={Search} onEnter={onEnter}></Route>
                <Route path='/cart' component={Cart} onEnter={onEnter}></Route>
                <Route path='/login' component={Login} onEnter={onEnter}></Route>
                <Route path='/login/:type' component={Login} onEnter={onEnter}></Route>
                <Route path='/item/:id' component={Item} onEnter={onEnter}></Route>
                <Route path='/account/:type' component={Account} onEnter={onEnter}></Route>
                <Redirect path='/account' to="/account/details"></Redirect>
                <Route path='/email/:tmp' component={Email} onEnter={onEnter}></Route>
                <Route path='*' component={NoMatch} onEnter={onEnter}></Route>
            </Route>
        </Router>
    </Provider>
)

export default router;