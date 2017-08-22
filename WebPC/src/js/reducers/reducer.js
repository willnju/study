/**
 * @file reducer.js
 * @desc 构造redux reducer
 * @author wangyong(1223427693@qq.com)
 * 		   zhaojunzhe(1429595365@qq.com)
 */
import {
	combineReducers
} from 'redux';
import {
	routerReducer
} from 'react-router-redux';

import {
	userInfo,
	userBalance
} from './user';
import {
	sliderGamesList,
	latestGamesList,
	popularGamesList,
	specialGamesList,
	discountGamesList,
	preorderGamesList,
	gameDetail,
	sliderGamesBg,
	specialGamesBg
} from './games';
import {
	catalogLoadGamesList,
	loadList,
	changeType,
    loadAttributeList,
	viewMore,
	getTotalList,
	getCatalogPerpage
} from './catalog';
import { cartList, paymethod } from './cart';
import {
	searchQuery,
    loadSearchList,
	changeTypes,
	viewMores,
	getTotalLists,
	getSearchPerpage,
	total
} from './search';
import { orderList } from './order';
import { saleProductList, saleProductDetail, withdrawHistoryList, saleHistoryList, balanceHistoryList } from './sale';

const reducer = combineReducers({
    userInfo,
	userBalance,
    sliderGamesList,
    latestGamesList,
    popularGamesList,
	discountGamesList,
	preorderGamesList,
	catalogLoadGamesList,
    loadList,
	specialGamesList,
	sliderGamesBg,
	specialGamesBg,
    changeType,
    loadAttributeList,
	viewMore,
	getTotalList,
	cartList,
	paymethod,
	gameDetail,
	searchQuery,
    loadSearchList,
	changeTypes,
	viewMores,
	getTotalLists,
    getSearchPerpage,
    getCatalogPerpage,
	orderList,
	saleProductList,
	saleProductDetail,
	withdrawHistoryList,
	saleHistoryList,
	balanceHistoryList,
	total,
    routing: routerReducer
});

export default reducer;