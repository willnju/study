/**
 * @file games.js
 * @desc 游戏相关的数据
 * @author wangyong(1223427693@qq.com)
 */
let sliderGames = {
    1: [
        {
            p_id: 1412412,
            name_zh: 'LKGJLJL',
            market_price: 124.23,
            price: 122,
            p_img: "http://dummyimage.com/1366x768"
        },
        {
            p_id: 1412412,
            name_zh: 'LKGJLJL',
            market_price: 124.23,
            price: 122,
            p_img: "http://dummyimage.com/1366x768"
        },
        {
            p_id: 1412412,
            name_zh: 'LKGJLJL',
            market_price: 124.23,
            price: 122,
            p_img: "http://dummyimage.com/1366x768"
        }
    ],
    2: [
        {
            p_id: 1412412,
            name_zh: 'LKGJLJL',
            market_price: 124.23,
            price: 122,
            p_img: "https://dskhvldhwok3h.cloudfront.net/image/upload/t_quality_80/v1/highlights/58e3ee75216248151f00003e/apvvdb6jqlpckuotllsb.jpg"
        },
        {
            p_id: 1412412,
            name_zh: 'LKGJLJL',
            market_price: 124.23,
            price: 122,
            p_img: "https://dskhvldhwok3h.cloudfront.net/image/upload/t_quality_80/v1/highlights/58e3ee75216248151f00003e/apvvdb6jqlpckuotllsb.jpg"
        },
        {
            p_id: 1412412,
            name_zh: 'LKGJLJL',
            market_price: 124.23,
            price: 122,
            p_img: "https://dskhvldhwok3h.cloudfront.net/image/upload/t_quality_80/v1/highlights/58e3ee75216248151f00003e/apvvdb6jqlpckuotllsb.jpg"
        }
    ],
}
   
// 首页轮播游戏列表
export function sliderGamesList(state = sliderGames, action) {
    switch (action.type) {
        case 'LOAD_SLIDER_GAMES_LIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

// 首页轮播游戏背景图
export function sliderGamesBg(state = '', action) {
    switch (action.type) {
        case 'LOAD_SLIDER_GAMES_BG_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

// 首页最新游戏列表
export function latestGamesList(state = [], action) {
    switch (action.type) {
        case 'LOAD_LATEST_GAMES_LIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

// 首页折扣游戏列表
export function discountGamesList(state = [], action) {
    switch (action.type) {
        case 'LOAD_DISCOUNT_GAMES_LIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

// 首页预售游戏列表
export function preorderGamesList(state = [], action) {
    switch (action.type) {
        case 'LOAD_PREORDER_GAMES_LIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

// 首页畅销游戏列表
export function popularGamesList(state = [], action) {
    switch (action.type) {
        case 'LOAD_POPULAR_GAMES_LIST_SUCCESS':
            return action.data;
        default: 
            return state;
    }
}

// 首页特殊游戏列表
export function specialGamesList(state = [], action) {
    switch (action.type) {
        case 'LOAD_SPECIAL_GAMES_LIST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

// 首页特殊游戏背景
export function specialGamesBg(state = '', action) {
    switch (action.type) {
        case 'LOAD_SPECIAL_GAMES_BG_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

// 游戏详情页游戏对象
export function gameDetail(state = null, action) {
    switch (action.type) {
        case 'LOAD_GAME_DETAIL_SUCCESS':
            return action.data;
        case 'LOAD_GAME_DETAIL_FAIL':
            return null;
        default:
            return state;
    }
}
