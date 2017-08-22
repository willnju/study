/**
 * @file user.js
 * @desc user相关的reducer
 * @author wangyong(1223427693@qq.com)
 */
export function userInfo(state = null, action) {
    switch (action.type) {
        case 'LOAD_USERINFO_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

const INITIAL_BALANCE = {
    balance: "0.00",
    income: "0.00",
    locking: "0.00"
}
export function userBalance(state = INITIAL_BALANCE, action) {
    switch (action.type) {
        case 'LOAD_USER_BALANCE_SUCCESS':
            return action.data;
        default:
            return state;
    }
}