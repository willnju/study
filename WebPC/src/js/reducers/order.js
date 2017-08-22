/**
 * @file order.js
 * @desc 订单相关数据
 * @author wangyong(1223427693@qq.com)
 */
export function orderList(state = [], action) {
    switch (action.type) {
        case 'LOAD_ORDER_LIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}