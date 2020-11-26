import React, { Fragment, Component } from 'react'
import Logo from '../../plugin/logo/Logo'
import {Link} from "react-router-dom";
import Button from '../../plugin/button/Button'
import { Logins } from '../../api/index'
const login = require('../../style/less/base.module.less')

interface IState {
    name: string,
    password: string
}


export default class Login extends Component<any, IState>{
    constructor(props:any) {
        super(props)
        this.state = {
            name: '',
            password: ''
        }
    }
    public render () {
        return (<Fragment>
            <div className={login}>
                <Logo />
                <div>
                    <div className={login.user}>
                        <div>
                            <input
                                className={`${login.username} ${login.input}`}
                                type="text"
                                placeholder={'用户名'}
                                maxLength={11}
                                minLength={11}
                                value={this.state.name}
                                onChange={(e:any) => this.setName(e)}
                            />
                        </div>
                    </div>
                    <div className={login.user}>
                        <div><input
                            className={`${login.password}  ${login.input}`}
                            type="text"
                            placeholder={'密码'}
                            value={this.state.password}
                            onChange={(e:any) => this.setPassword(e)}
                        /></div>
                    </div>
                </div>
                <Button title={'登录'} onClick={this.goLogin}/>
                <div className={login.messlogin}>
                    <p>没有账号，<Link className={login.logincolor} to={'/register'}>立即注册</Link></p>
                </div>
            </div>
        </Fragment>)
    }
    setName = (e:any) => {
        let value = e.target.value
        this.setState(() => ({
            name: value
        }))
    }
    setPassword = (e:any) => {
        let value = e.target.value
        this.setState(() => ({
            password: value
        }))
    }
    goLogin = () => {
        console.log("login start")
        let obj = {
            mobile: this.state.name,
            password: this.state.password,
        }
        Logins(obj).then(function(response:any){
            alert()
            console.log('--------------start--------------')
            console.log(response)
            console.log('--------------end--------------')
        })
        console.log("login end")
    }
}