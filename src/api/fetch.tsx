import axios from 'axios'

export default class fetch {
    static requestget (url:string, params:Object) {
        return new Promise(() => {
            axios.get(url,{
                params: params
            }).then(response => {
                console.log('------------------------------')
                console.log(response)
                console.log(Promise.resolve(response.data ))
                console.log('------------------------------')
                return Promise.resolve(response)
            }).catch(err => {
                return Promise.reject(err)
            })
        })
    }
}