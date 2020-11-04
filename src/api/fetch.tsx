import axios from 'axios'

export default class fetch {
    static requestget (url:string, params:Object) {
        return new Promise(() => {
            axios.get(url,{
                params: params
            }).then(response => {
                return Promise.resolve(response)
            }).catch(err => {
                return Promise.reject(err)
            })
        })
    }
    static requestpost (url:string, params:Object) {
        return new Promise((resolve, reject) => {
            axios.post(url,params, {
                headers: {
                    contentType: "application/json",
                    "X-CSRFToken": this.getCookie("csrf_token")
                }
            }).then((response:any) => {
                return Promise.resolve(response)
            }).catch((err:any) => {
                return Promise.reject(err)
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