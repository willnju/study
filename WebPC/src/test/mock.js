const Mock = require('mockjs');
const Random = Mock.Random;

let game = Mock.mock({
    "p_id|1-10000000": 1,
    "name_zh": Mock.mock('@string'),
    "market_price|1-1000.1-2": 2,
    "price|1-1000.1-2": 1,
    "p_img": Random.image('1366x768')
});
let sliderGame = Mock.mock([
    game,
    game,
    game
]);
let sliderGames = Mock.mock([
    sliderGame,
    sliderGame,
    sliderGame
]);
