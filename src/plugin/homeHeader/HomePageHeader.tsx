import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../plugin/button/Button'
const homePageHeader = require('../../style/less/base.module.less')

export default class HomePageHeader extends Component<any> {
    state = {
        loginStatus: false
    }
    public render(){
        return (<Fragment>
            <div className={homePageHeader.homePageHeader}>
                <div className={homePageHeader.box}>
                    <div className={homePageHeader.logo}>iHome</div>
                    <div className={homePageHeader.btn} style={{display: this.state.loginStatus ? 'none' : 'line'}}>
                        <Link to={'/register'}><button>注册</button></Link>
                        <Link to={'/login'}><button>登录</button></Link>
                    </div>
                    <div className={homePageHeader.username} style={{display: !this.state.loginStatus ? 'none' : 'line'}}>
                        <Link to={'/my'}><span>name</span></Link>
                    </div>
                </div>
                <div></div>
                {/*内容输入部分start*/}
                <div className={`${homePageHeader.homecontent} ${homePageHeader.center}`}>
                    <div>
                        <input className={homePageHeader.input} type="text" placeholder={'您要居住的城区'}/>
                    </div>
                    <div>
                        <input className={homePageHeader.input} type="text" placeholder={'入住时间'}/>
                    </div>
                    <Button title={'搜索'}/>
                </div>
                {/*内容输入部分end*/}
            </div>
        </Fragment>)
    }
}