import {get} from './helpers'

// 静态资源
const getHome = get('/api/gameInfo/HomeInfo')
const getGameContent = get('./data/gameContent.json')
const getUserInfo = get('/api/user/get_info')
const getOut = get('/api/user/logout')
const userLogin = 'api/user/login'
const userRegister = 'api/user/register'
const shopInfo = '/api/gameInfo/CommodityInfo?commodityId='

export {
    getHome,
    getGameContent,
    getUserInfo,
    getOut,
    userLogin,
    userRegister,
    shopInfo
}
