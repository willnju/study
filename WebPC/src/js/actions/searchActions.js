/**
 * @file searchActions.js
 * @desc 搜索相关actions
 * @author wangyong(1223427693@qq.com)
 *         zhaojunzhe（1429595365@qq.com）
 */
import $ from 'jquery';

import {
    API_PREFIX
} from '../constants/api';

export function updateSearchQuery(opt = {}) {
    return (dispatch, getState) => {
        const { query = '', cb = () => {} } = opt;
        dispatch({
            type: 'UPDATE_SEARCH_QUERY_SUCCESS',
            data: query
        });
        cb();
    }
}

export function loadSearchList(opt={}){
    return (dispatch, getState) => {
        const {text}=opt;
        const{price}=opt;
        if(opt.type)
        {
            var type=opt.type;
        }
        if(opt.platform)
        {
            var platform=opt.platform;
        }
        console.log(opt);
        if(opt.type)
        {
            var type=opt.type;
        }
        if(opt.page)
        {
            var page=opt.page;
        }
        if(opt.perpage){
            var perpage=opt.perpage;
        }

        $.get(`${API_PREFIX}/product/search/${text}`,{sort:price,type:type,platform:platform,page:page,perpage:perpage})
            .done(res => {
                //console.log(res);
                let listGames = res.data;
                dispatch({
                    type:'GET_TOTAL_SUCCESS',
                    data:res
                })

                dispatch({
                    type: 'LOAD_SEARCH_LIST_SUCCESS',
                    data: listGames
                });

            })
            .fail(err => {
                message.error(err.statusText);
            })
    }
}

export function changeTypes(opt,type) {
    return (dispatch, getState) => {
        //console.log(getState());
        let option=getState().changeTypes;
        console.log(option);
        if(type==='category')
        {
            option.category=opt;
        }
        else if(type==='type')
        {
            option.type=opt;
        }
        else if(type==='platform')
        {
            option.platform=opt;
        }

        dispatch({
            type: 'CHANG_TYPE_SUCCESS',
            data: option
        });

    }
}

//加载属性列表
export function loadAttributeList(opt = {}) {
    return (dispatch, getState) => {
        $.get(`${API_PREFIX}/product/attribute`)
            .done(res => {
                //console.log(res);
                let attributeList = res.data;
                console.log(attributeList);
                dispatch({
                    type: 'LOAD_ATTRIBUTE_LIST_SUCCESS',
                    data: attributeList
                });
            })
            .fail(err => {
                message.error(err.statusText);
            })
    }
}

export function changePerpage(opt={}) {
    return (dispatch, getState) => {
        //console.log(getState());
        let page=getState().getSearchPerpage;

        if(opt.page)
        {
            page=opt.page
        }
        console.log('Searchpage='+page);
        dispatch({
            type: 'GET_SEARCH_PERPAGE_SUCCESS',
            data: page
        });
    }
}