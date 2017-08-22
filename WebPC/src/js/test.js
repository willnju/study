/**
 * @file test.js
 * @desc 测试入口文件
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Message, { message } from './plugins/Message';
import Overlay from './plugins/Overlay';
import Pagination from './plugins/Pagination';
import Modal, { modal } from './plugins/Modal';
import Tabs, { TabPane } from './plugins/Tabs';

console.log(modal);
class Main extends Component {
    render() {
        return (
            <Pagination total={100}></Pagination>  
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));
