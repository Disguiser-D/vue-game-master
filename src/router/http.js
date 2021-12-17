import axios from 'axios';
import router from './index';

// axios 配置
axios.defaults.timeout = 8000;

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (localStorage.Authorization) { //判断token是否存在
            config.headers.Authorization = localStorage.Authorization;  //将token设置成请求头
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.status !== 200) {
            // TODO: 判断Authorization传入后端后是否还合法
            router.replace('/');
            console.log("token过期");
        }
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);
export default axios;