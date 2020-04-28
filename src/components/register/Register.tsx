import React, {Fragment, Component, useImperativeHandle} from 'react'
import Logo from '../../plugin/logo/Logo'
import vailImg from '../../static/images/vail.png'
import { Link } from 'react-router-dom'
import Button from "../../plugin/button/Button";
const register = require('../../style/less/base.module.less')

export default class Register extends Component {
    public render(){
        return (<Fragment>
            <Logo/>
            <div className={register.register}>
                <div className={`${register.phone} ${register.user}`}>
                    <input className={register.input} type="text" placeholder={'手机号'}/>
                </div>
                <div className={register.imgs}>
                    <div className={register.imgbox}>
                        <input type="text" className={`${register.img}`} placeholder={'图片验证码'}/>
                    </div>
                    <div className={`${register.vailImgbox}`}>
                        <img className={`${register.vailImg}`} src={vailImg} alt=""/>
                    </div>
                </div>
                <div className={`${register.user} ${register.messagebox}`}>
                    <div className={register.msgbox}>
                        <input
                            type="text"
                            className={`${register.input} ${register.message}`}
                            placeholder={'短信验证码'}/>
                    </div>
                    <div className={register.vailcode}>
                        <button>获取验证码</button>
                    </div>
                </div>
                <div className={`${register.password} ${register.user}`}>
                    <input className={register.input} type="text" placeholder={'密码'}/>
                </div>
                <div className={`${register.user}`}>
                    <input className={register.input} type="text" placeholder={'确认密码'}/>
                </div>
                <Button title={'注册'}/>
                <div className={register.messlogin}>
                    <p>已有账号，<Link className={register.logincolor} to={'/login'}>立即登录</Link></p>
                </div>
            </div>
        </Fragment>)
    }
}