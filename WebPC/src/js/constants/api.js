/**
 * @file api.js
 * @desc api相关的常量
 * @author wangyong(1223427693@qq.com)
 */
// API前缀
let API_PREFIX = '';
let API_PRO_PREFIX = '';
switch (process.env.NODE_ENV) {
    case 'development':
        API_PREFIX = '/lsnew/api';
        API_PRO_PREFIX = '/lsnew';
        break;
    case 'production':
        API_PREFIX = '/api';
        API_PRO_PREFIX = '';
        break;
    default:
        API_PREFIX = '/lsnew/api';
        API_PRO_PREFIX = '/lsnew';
        break;
}

export { API_PREFIX };
export { API_PRO_PREFIX };
