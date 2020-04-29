import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import App from './App'

const Hello = lazy(() => import('./components/Hello'))
const Login = lazy(() => import('./components/login/Login'))
const Register = lazy(() => import('./components/register/Register'))
const Index = lazy(() => import('./components/index/Index'))
const My = lazy(() => import('./components/user/my/My'))
const Search = lazy(() => import('./components/user/search/Search'))
const Detail = lazy(() => import('./components/user/detail/Detail'))


const Router = () => {
    // @ts-ignore
    return (<BrowserRouter>
        <App>
            <Suspense fallback={<div>加载中....</div>}>
                <Switch>
                    <Route exact path={'/'} component={Index}></Route>
                    <Route path={'/login'} component={Login}></Route>
                    <Route path={'/register'} component={Register}></Route>
                    <Route path={'/my'} component={My}></Route>
                    <Route path={'/search'} component={Search}></Route>
                    <Route path={'/detail'} component={Detail}></Route>
                    <Route path={'/hello'} component={Hello}></Route>
                </Switch>
            </Suspense>
        </App>
    </BrowserRouter>)
}
export default Router