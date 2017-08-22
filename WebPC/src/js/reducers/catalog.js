/**
 * @file catalog.js
 * @desc 游戏分类相关的数据
 * @author 赵浚哲(1429595365@qq.com)
 */
import Mock, {
    Random
} from 'mockjs';

let gameList = [];
let keyWord={
    'category':'all',
    'type':'',
    'platform':''
};
let viewMoreCount=2;
let totalArray=[];
let list=[];
let defaultPerpage=20;

export function getTotalList(state = totalArray, action) {
    switch (action.type) {
        case 'GET_TOTAL_LIST_SUCCESS':
            return action.data;
        case 'GET_TOTAL_LIST_FAIL':
            return state;
        default:
            return state;
    }
}
// 加载默认游戏列表
export function catalogLoadGamesList(state = gameList, action) {
    switch (action.type) {
        case 'CATALOG_LOAD_GAMES_LIST_SUCCESS':
            return action.data;
        case 'CATALOG_LOAD_GAMES_LIST_FAIL':
            return state;
        default:
            return state;
    }
}

export function loadList(state = list, action) {
    switch (action.type) {
        case 'LOAD_LIST_SUCCESS':
            return action.data;
        case 'LOAD_LIST_FAIL':
            return state;
        default:
            return state;
    }
}
export function loadAttributeList(state = [], action) {
    switch (action.type) {
        case 'LOAD_ATTRIBUTE_LIST_SUCCESS':
            return action.data;
        case 'LOAD_ATTRIBUTE_LIST_SUCCESS_FAIL':
            return state;
        default:
            return state;
    }
}


export function changeType(state = keyWord, action) {
    switch (action.type) {
        case 'CHANG_TYPE_SUCCESS':
            return action.data;
        case 'CHANGE_TYPE_FAIL':
            return state;
        default:
            return state;
    }
}

export function viewMore(state = [], action) {
    switch (action.type) {
        case 'LOAD_ALL_GAMES_LIST_SUCCESS':
            return action.data;
        case 'LOAD_ALL_GAMES_LIST_FAIL':
            return state;
        default:
            return state;
    }
}

//获取分页的数据

export function getCatalogPerpage(state=defaultPerpage, action) {
    switch (action.type) {
        case 'GET_PERPAGE_SUCCESS':
            return action.data;
        case 'GET_PERPAGE_FAIL':
            return state;
        default:
            return state;
    }
}



