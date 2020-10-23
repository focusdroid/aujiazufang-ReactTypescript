import React, {Fragment, Component } from 'react'
import Logo from '../../plugin/logo/Logo'
import { Link } from 'react-router-dom'
import Button from "../../plugin/button/Button";
import { get_sms_codes, registerUser } from '../../api'
import { Toast } from 'antd-mobile';
const register = require('../../style/less/base.module.less')

interface IState {
    vailImg?: string
    phone?: any
    code: number,
    imgCode: string
    messageValue: string | number | undefined
    password: string
    password2: string
}


export default class Register extends Component<any, IState> {
    public constructor (props:any) {
        super(props)
        this.state = {
            phone: '', // 手机号
            code: 1234, // 获取验证码的随即标识
            imgCode: '', // 图片验证码输入框信息
            messageValue: '', // 短信验证码信息
            password: '', // 密码
            password2: '' // 确认密码
        }
    }
    public render(){
        return (<Fragment>
            <Logo/>
            <div className={register.register}>
                <div className={`${register.phone} ${register.user}`}>
                    <input
                        onChange={(e:any) => this.setMobile(e)}
                        value={this.state.phone}
                        className={register.input}
                        type="text" placeholder={'手机号'}/>
                </div>
                <div className={register.imgs}>
                    <div className={register.imgbox}>
                        <input
                            onChange={(e:any) => this.getImageCode(e)}
                            value={this.state.imgCode}
                            maxLength={4}
                            type="text" className={`${register.img}`} placeholder={'图片验证码'}/>
                    </div>
                    <div className={`${register.vailImgbox}`}>
                        <img
                            onClick={this.changeImage}
                            className={`${register.vailImg}`}
                            src={this.state.vailImg}
                            alt=""/>
                    </div>
                </div>
                <div className={`${register.user} ${register.messagebox}`}>
                    <div className={register.msgbox}>
                        <input
                            type="text"
                            onChange={(e:any) => this.setMessageValue(e)}
                            value={this.state.messageValue}
                            className={`${register.input} ${register.message}`}
                            placeholder={'短信验证码'}/>
                    </div>
                    <div className={register.vailcode}>
                        <button onClick={this.sendSmsCode}>获取验证码</button>
                    </div>
                </div>
                <div className={`${register.password} ${register.user}`}>
                    <input onChange={(e:any) => this.setPassword(e)} value={this.state.password} className={register.input} type="text" placeholder={'密码'}/>
                </div>
                <div className={`${register.user}`}>
                    <input onChange={(e:any) => this.setConfirmPassword(e)} value={this.state.password2} className={register.input} type="text" placeholder={'确认密码'}/>
                </div>
                <Button title={'注册'} onClick={this.register}/>
                <div className={register.messlogin}>
                    <p>已有账号，<Link className={register.logincolor} to={'/login'}>立即登录</Link></p>
                </div>
            </div>
        </Fragment>)
    }
    componentDidMount() {
        this.changeImage()
    }
    changeImage = () => { // 点击切换验证码
        // 形成图片验证码的后端地址，设置到页面上，让浏览器
       this.setState(() => ({
            code: Math.floor(Math.random()*100000000000000)
        }), () => {
           this.setState(() => ({
               vailImg: `/api/v1.0/get_image_code?image_code_id=${this.state.code}`
           }))
        })
    }
    getImageCode (e:any) { // 点击更换图片验证码
        let value = e.target.value
        this.setState(() => ({
            imgCode: value
        }))
    }
    setMessageValue (e:any) { // 获取用户输入的验证码操作
        let value = e.target.value
        this.setState(() => ({
            messageValue: value
        }))
    }
    sendSmsCode = () => { // 点击发送验证码
        let obj = {
            image_code_id: this.state.code,
            image_code: this.state.imgCode,
            mobile: this.state.phone
        }
        console.log(obj)
        get_sms_codes(obj)
    }
    setMobile (e:any) { // 输入手机号
        let value = e.target.value
        this.setState(() => ({
            phone: value
        }))
    }
    setPassword (e:any) { // 获取密码
        let value = e.target.value
        this.setState(() => ({
            password: value
        }))
    }
    setConfirmPassword (e:any) { // 确认密码
        let value = e.target.value
        this.setState(() => ({
            password2: value
        }))
    }
    register = () => { // 点击注册按钮
        console.log(this.state)
        /*phone: '', // 手机号
            code: 1234, // 获取验证码的随即标识
            imgCode: '', // 图片验证码输入框信息
            messageValue: '', // 短信验证码信息
            password: '', // 密码
            confirmPassword: '' // 确认密码*/
        let {phone, messageValue, password, password2} = this.state
        let obj = {
            mobile: phone,
            sms_code: messageValue,
            password: password,
            password2: password2
        }
        registerUser(obj).then((res:any) => {
            console.log(res)
            if (res.errno === 0 || res.errno === '0') {
                Toast.success('注册成功', 1);
                this.props.history.replace('/')
            } else {
                Toast.info(res.errmsg, 1);
            }
        }).catch((err:any) => {
            Toast.info(err, 1);
        })
    }

}