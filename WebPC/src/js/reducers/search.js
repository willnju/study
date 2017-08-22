/**
 * @file search.js
 * @desc 搜索页面相关数据
 * @author zhaojunzhe(1223427693@qq.com)
 */
let list=[];
let keyWord={
    'category':'all',
    'type':'',
    'platform':''
};
let viewMoreCounts=2;
let totalArrays=[];
let defaultPerpage=20;

export function getTotalLists(state = totalArrays, action) {
    switch (action.type) {
        case 'GET_TOTAL_LISTS_SUCCESS':
            return action.data;
        case 'GET_TOTAL_LISTS_FAIL':
            return state;
        default:
            return state;
    }
}

export function searchQuery(state = '', action) {
    switch (action.type) {
        case 'UPDATE_SEARCH_QUERY_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

export function loadSearchList(state=[],action){
    switch (action.type) {
        case 'LOAD_SEARCH_LIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

export function changeTypes(state = keyWord, action) {
    switch (action.type) {
        case 'CHANG_TYPE_SUCCESS':
            return action.data;
        case 'CHANGE_TYPE_FAIL':
            return state;
        default:
            return state;
    }
}

export function viewMores(state = viewMoreCounts, action) {
    switch (action.type) {
        case 'VIEW_MORES_SUCCESS':
            return action.data;
        case 'VIEW_MORES_FAIL':
            return state;
        default:
            return state;
    }
}

export function getSearchPerpage(state=defaultPerpage, action) {
    switch (action.type) {
        case 'GET_SEARCH_PERPAGE_SUCCESS':
            return action.data;
        case 'GET_SEARCH_PERPAGE_FAIL':
            return state;
        default:
            return state;
    }
}

export function total(state='', action) {
    switch (action.type) {
        case 'GET_TOTAL_SUCCESS':
            return action.data;
        case 'GET_TOTAL_FAIL':
            return state;
        default:
            return state;
    }
}