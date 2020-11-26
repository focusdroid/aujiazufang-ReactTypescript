import fetch from './fetch'

export function TestFetch (obj:Object = {}) {
    console.log(fetch.requestget('https://api.github.com', obj))
    return fetch.requestget('https://api.github.com', obj)
}
export function get_image_code (obj:Object = {}) {
    return fetch.requestget(`/api/v1.0/get_image_code`, obj)
}

export function get_sms_codes (obj:Object= {}) {
    return fetch.requestget(`/api/v1.0/sms_codes`, obj)
}
export function registerUser (obj:Object={}) { // 注册
    return fetch.requestpost(`/api/v1.0/register`, obj)
}

export function get_csrf_token (obj:Object={}) { // 每次刷新页面获取新的csrf_token
    return fetch.requestget(`/api/v1.0/get_csrf_token`, obj)
}
export function Logins (obj:Object={}) { // 登录接口
    return fetch.requestpost(`/api/v1.0/login`, obj)
}
export function loadFiles (obj:Object={}) { // 图像上传接口
    return fetch.loadFiles(`/api/v1.0/users/avatar`, obj)
}