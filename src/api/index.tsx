import fetch from './fetch'

export function TestFetch (obj:Object = {}) {
    // console.log(fetch.requestget('https://api.github.com', obj))
    return fetch.requestget('https://api.github.com', obj)
}