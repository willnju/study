/**
 * @file store.js
 * @desc 构造redux store
 * @author wangyong(1223427693@qq.com)
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers/reducer';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;