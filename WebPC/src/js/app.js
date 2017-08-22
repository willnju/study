/**
 * @file app.js
 * @desc 入口文件
 * @author wangyong(1223427693@qq.com)
 */
import ReactDOM from 'react-dom';

import router from './routes/router';

console.log(process.env.NODE_ENV);

ReactDOM.render(router, document.getElementById('app'));
