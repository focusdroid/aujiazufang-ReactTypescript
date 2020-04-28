import React, { Fragment, Component } from 'react'
import Logo from '../../plugin/logo/Logo'
import {Link} from "react-router-dom";
import Button from '../../plugin/button/Button'
const login = require('../../style/less/base.module.less')

export default class Login extends Component<any>{
    public render () {
        return (<Fragment>
            <div className={login}>
                <Logo />
                <div>
                    <div className={login.user}>
                        <div><input  className={`${login.username} ${login.input}`} type="text" placeholder={'用户名'}/></div>
                    </div>
                    <div className={login.user}>
                        <div><input className={`${login.password}  ${login.input}`} type="text" placeholder={'密码'}/></div>
                    </div>
                </div>
                <Button title={'登录'}/>
                <div className={login.messlogin}>
                    <p>没有账号，<Link className={login.logincolor} to={'/register'}>立即注册</Link></p>
                </div>
            </div>
        </Fragment>)
    }
}