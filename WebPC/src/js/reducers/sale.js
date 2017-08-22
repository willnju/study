/**
 * @file sale.js
 * @desc 销售部分相关数据
 * @author wangyong(1223427693@qq.com)
 */
// 销售的游戏列表
export function saleProductList(state = [], action) {
    switch (action.type) {
        case 'LOAD_SALE_PRODUCT_LIST_SUCCESS':
            return action.data;
        default: 
            return state;
    }
}

// 销售的游戏详情
export function saleProductDetail(state = {}, action) {
    switch (action.type) {
        case 'LOAD_SALE_PRODUCT_DETAIL_SUCCESS':
            return action.data;
        default:
            return state;
    } 
}

// 提现记录列表
export function withdrawHistoryList(state = [], action) {
    switch (action.type) {
        case 'LOAD_WITHDRAW_HISTORY_LIST_SUCCESS':
            return action.data;
        default: 
            return state;
    }
}

// 销售历史记录
export function saleHistoryList(state = [], action) {
    switch (action.type) {
        case 'LOAD_SALE_HISTORY_LIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

// 余额变动记录
export function balanceHistoryList(state = [], action) {
    switch (action.type) {
        case 'LOAD_BALANCE_HISTORY_LIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}