import fetch from './fetch'

export function get_image_code (obj:Object = {}) {
    return fetch.requestget(`/api/v1.0/get_image_code`, obj)
}

export function get_sms_codes (obj:Object= {}) {
    return fetch.requestget(`/api/v1.0/get_sms_codes`, obj)
}