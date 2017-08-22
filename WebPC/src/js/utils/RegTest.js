/**
 * @file RegTest.js
 * @desc 正则匹配通用函数
 * @author wangyong(1223427693@qq.com)
 */
// 邮箱验证
export function isEmail(str = '') {
    const reg = /^.+@.+$/;
    return reg.test(str) || str.trim() === '';
}

// 价格验证
export function isPrice(str = '') {
    const reg = /^\d+(\.\d{0,2})?$/;
    return reg.test(str) || str.trim() === '';
}