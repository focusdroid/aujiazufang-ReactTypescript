import React, { Fragment, useEffect } from 'react'
import TitleBar from "../../../plugin/titleBar/TitleBar";
import img from '../../../static/images/img.jpg'
import { Link } from 'react-router-dom'
import { TestFetch } from "../../../api";
const my = require('../../../style/less/base.module.less')

const My = () => {
    useEffect(() => { // 测试获取ajax数据，
       TestFetch().then((response:any) => {
           console.log(response)
       })
    })
    return (<Fragment>
        <TitleBar title={'我的设置'}/>
    {/*    我的信息、设置start*/}
    <div className={my.my}>
        <div className={` ${my.info}`}>
            <div className={`${my.display} ${my.jcsb}`}>
                <div>个人信息</div>
                <div><Link to={'/profile'}>修改</Link></div>
            </div>
            <div className={`${my.mt10} ${my.display}`}>
                <div>
                    <img style={{width: 'calc(40px + 10vmin)'}} src={img} alt=""/>
                </div>
                <div style={{marginLeft: 'calc(10px + 2vmin)'}}>
                    <p>用户名：focusdroid</p>
                    <p>手机号：15701220000</p>
                </div>
            </div>
        </div>
        <div className={`${my.baseinfo}`}>
            <Link to={'/orders'}><p>我的订单</p></Link>
        </div>
        <div className={`${my.baseinfo}`}>
            <Link to={'/auth'}><p>实名认证</p></Link>
        </div>
        <div className={`${my.baseinfo}`}>
            <Link to={'/myhouse'}><p>我的房源</p></Link>
        </div>
        <div className={`${my.baseinfo}`}>
            <Link to={'/lorders'}><p>客户订单</p></Link>
        </div>
        <div className={`${my.baseinfo}`}>
            <p onClick={goLogin}>退出</p>
        </div>
    </div>
    {/*    我的信息、设置ebd*/}
    </Fragment>)
    function goLogin () {
        // 先请求消除服务器的用户登录信息，在清楚本地登录标识
        sessionStorage.clear()
    }
}

export default My