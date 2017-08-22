/**
 * @file cart.js
 * @desc 购物车相关数据
 * @author wangyong(1223427693@qq.com)
 */
export function cartList(state = [], action) {
    switch (action.type) {
        case 'LOAD_CARTLIST_SUCCESS':
            return action.data;
        case 'UPDATE_CARTLIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

// 下单支付方式，alipay代表支付宝，wechat代表微信支付
export function paymethod(state = 'alipay', action) {
    switch (action.type) {
        case 'INITIAL_PAYMETHOD':
            return 'alipay';
        case 'UPDATE_PAYMETHOD':
            return action.data;
        default:
            return state;
    }
}