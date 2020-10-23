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