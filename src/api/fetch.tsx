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
                    contentType: "application/json"
                }
            }).then((response:any) => {
                return Promise.resolve(response)
            }).catch((err:any) => {
                return Promise.reject(err)
            })
        })
    }
}