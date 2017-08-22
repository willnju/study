/**
 * @file catalogActions.js
 * @desc 游戏项目相关的actions
 * @author 赵浚哲(1429595365@qq.com)
 */
import Mock, {
    Random
} from 'mockjs';
import $ from 'jquery';

import {
    API_PREFIX
} from '../constants/api';

//加载筛选数据
export function loadList(opt = {}) {
    return (dispatch, getState) => {
        const { price } = opt;
        if(opt.type)
        {
            var type=opt.type;
        }
        if(opt.platform)
        {
            var platform=opt.platform;
        }
        if(opt.page)
        {
            var page=opt.page;
        }
        $.get(`${API_PREFIX}/product/category/1`,{sort:price,type:type,platform:platform,page:page})
            .done(res => {
                //console.log(res);
                let listGames = res.data;

                dispatch({
                    type: 'LOAD_LIST_SUCCESS',
                    data: listGames
                });

            })
            .fail(err => {
                message.error(err.statusText);
            })
    }
}
// 加载默认的游戏列表
export function loadGamesList(opt = {}) {
    return (dispatch, getState) => {
        const { price } = opt;
        if(opt.type)
        {
            var type=opt.type;
        }
        if(opt.platform)
        {
            var platform=opt.platform;
        }
        if(opt.page)
        {
            var page=opt.page;
        }
        if(opt.perpage){
            var perpage=opt.perpage;
        }
            $.get(`${API_PREFIX}/product/category/1`,{sort:price,type:type,platform:platform,page:page,perpage:perpage})
                .done(res => {
                    //console.log(res);
                    let listGames = res.data;

                    dispatch({
                        type: 'CATALOG_LOAD_GAMES_LIST_SUCCESS',
                        data: listGames
                    });

                })
                .fail(err => {
                    message.error(err.statusText);
                })

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
//记录用户做出的筛选选项
export function changeType(opt,type) {
    return (dispatch, getState) => {
        //console.log(getState());
        let option=getState().changeType;
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

export function viewMore(opt={},type) {
    return (dispatch, getState) => {
        if(opt.perpage){
            var perpage=opt.perpage;
        }
        else{
            var perpage=20;
        }
        $.get(`${API_PREFIX}/product/category/1`,{perpage:perpage})
            .done(res => {
                let list = res;
                console.log(res);
                    dispatch({
                        type: 'LOAD_ALL_GAMES_LIST_SUCCESS',
                        data: list
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
        let page=getState().getCatalogPerpage;

        if(opt.page)
        {
            page=opt.page
        }
        console.log('page='+page);
        dispatch({
            type: 'GET_PERPAGE_SUCCESS',
            data: page
        });
    }
}


