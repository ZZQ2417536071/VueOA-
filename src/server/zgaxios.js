import axios from 'axios';
import QS from 'qs';

//设置超时时间
axios.defaults.timeout = 10000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//请求携带cookie
//axios.defaults.withCredentials = true;


//对外接口
export default function zgaxios(method, url, params ) {
    if (method == 'GET') {
        return get(url, params);
    } else if (method == 'POST') {
        return post(url, params);
    }
}

// 封装get方法
function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, params).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    });
}

// 封装post方法  {name:"xiaoming",age:123}  --->  name=xiaoming&age=123
function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}


//请求的拦截器
axios.interceptors.request.use(function (request) {
    //console.log("请求执行之前",response)
    return request;
}, function (error) {
    return Promise.reject(error);
});

//响应的拦截器
axios.interceptors.response.use(
    response => {
        //console.log("响应处理之前",response);
        return response
    },
    error => {
        return Promise.reject(error)
    }
)
