import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import App from './App'

import Loading from './plugin/loading/Loading'

let routes = [
    {id: 0, author: 1, name: 'Hello', path: '/hello', component: lazy(() => import('./components/Hello'))},
    {id: 1, author: 1, name: 'Login', path: '/login', component: lazy(() => import('./components/login/Login'))},
    {id: 2, author: 1, name: 'Register', path: '/register', component: lazy(() => import('./components/register/Register'))},
    {id: 3, author: 1, name: 'Index', path: '/', exact: true, component: lazy(() => import('./components/index/Index'))},
    {id: 4, author: 1, name: 'My', path: '/my', component: lazy(() => import('./components/user/my/My'))},
    {id: 5, author: 1, name: 'Search', path: '/search', component: lazy(() => import('./components/user/search/Search'))},
    {id: 6, author: 1, name: 'Detail', path: '/detail', component: lazy(() => import('./components/user/detail/Detail'))},
    {id: 7, author: 1, name: 'Auth', path: '/auth', component: lazy(() => import('./components/user/auth/Auth'))},
    {id: 8, author: 1, name: 'Orders', path: '/orders', component: lazy(() => import('./components/user/orders/Orders'))},
    {id: 9, author: 1, name: 'NewHouse', path: '/newhouse', component: lazy(() => import('./components/user/newhouse/NewHouse'))},
    {id: 10, author: 1, name: 'MyHouse', path: '/myhouse', component: lazy(() => import('./components/user/myhouse/MyHouse'))},
    {id: 11, author: 1, name: 'Lorders', path: '/lorders', component: lazy(() => import('./components/user/lorders/Lorders'))},
    {id: 12, author: 1, name: 'Booking', path: '/booking', component: lazy(() => import('./components/user/booking/Booking'))},
    {id: 13, author: 1, name: 'Profile', path: '/profile', component: lazy(() => import('./components/user/profile/Profile'))}
]

const Router = () => {
    return (<BrowserRouter>
        <App>
            <Suspense fallback={<Loading/>}>
                <Switch>
                    {routes.map((item) => {
                        return <Route key={item.id} name={item.name} path={item.path} component={item.component}/>
                    })}
                </Switch>
            </Suspense>
        </App>
    </BrowserRouter>)
}
export default Router


/*const Hello = lazy(() => import('./components/Hello'))
const Login = lazy(() => import('./components/login/Login'))
const Register = lazy(() => import('./components/register/Register'))
const Index = lazy(() => import('./components/index/Index'))
const My = lazy(() => import('./components/user/my/My'))
const Search = lazy(() => import('./components/user/search/Search'))
const Detail = lazy(() => import('./components/user/detail/Detail'))
const Auth = lazy(() => import('./components/user/auth/Auth'))
const NewHouse = lazy(() => import('./components/user/newhouse/NewHouse'))
const MyHouse = lazy(() => import('./components/user/myhouse/MyHouse'))
const Lorders = lazy(() => import('./components/user/lorders/Lorders'))
const Booking = lazy(() => import('./components/user/booking/Booking'))
const Profile = lazy(() => import('./components/user/profile/Profile'))
const Router = () => {
    return (<BrowserRouter>
        <App>
            <Suspense fallback={<Loading/>}>
                <Switch>
                    <Route exact path={'/'} component={Index}></Route>
                    <Route path={'/login'} component={Login}></Route>
                    <Route path={'/register'} component={Register}></Route>
                    <Route path={'/search'} component={Search}></Route>
                    <Route path={'/my'} component={My}></Route>
                    <Route path={'/detail'} component={Detail}></Route>
                    <Route path={'/orders'} component={lazy(() => import('./components/user/orders/Orders'))}></Route>
                    <Route path={'/auth'} component={Auth}></Route>
                    <Route path={'/newhouse'} component={NewHouse}></Route>
                    <Route path={'/myhouse'} component={MyHouse}></Route>
                    <Route path={'/lorders'} component={Lorders}></Route>
                    <Route path={'/booking'} component={Booking}></Route>
                    <Route path={'/profile'} component={Profile}></Route>
                    <Route path={'/hello'} component={Hello}></Route>
                </Switch>
            </Suspense>
        </App>
    </BrowserRouter>)
}
export default Router*/