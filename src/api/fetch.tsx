import axios from 'axios'
let qs = require('qs');

export default class fetch {
    static requestget (url:string, params:Object) {
        return new Promise((resolve, reject) => {
            axios.get(url,{
                params: params
            }).then(response => {
                if (response.status === 200) {
                    return resolve(response.data)
                }
            }).catch(err => {
                return reject(err)
            })
        })
    }
    static requestpost (url:string, params:Object) {
        return new Promise((resolve, reject) => {
            axios.post(url, params, {
                headers: {
                    contentType: "application/json",
                    "X-CSRFToken": this.getCookie("csrf_token")
                }
            }).then((response:any) => {
                if (response.status === 200) {
                    return resolve(response.data)
                }
            }).catch((err:any) => {
                return reject(err)
            })
        })
    }
    static loadFiles (url:string, params:Object) {
        return new Promise((resolve, reject) => {
            axios.post(url, params, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    "X-CSRFToken": this.getCookie("csrf_token")
                }
            }).then((response:any) => {
                if (response.status === 200) {
                    return resolve(response.data)
                }
            }).catch((err:any) => {
                return reject(err)
            })
        })
    }


    private static getCookie(name: string) {
        let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }
}