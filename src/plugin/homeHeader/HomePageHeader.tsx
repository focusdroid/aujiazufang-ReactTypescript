import React, { Fragment, Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Button from '../../plugin/button/Button'
const homePageHeader = require('../../style/less/base.module.less')


class HomePageHeader extends Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            loginStatus: false,
            user: '',
            mobile: '',
        }
    }
    public render(){
        const {loginStatus, user} = this.state
        return (<Fragment>
            <div className={homePageHeader.homePageHeader}>
                <div className={homePageHeader.box}>
                    <div className={homePageHeader.logo}>iHome</div>
                    {
                        loginStatus ? <div style={{marginRight: 28}} onClick={this.goSetting}>{user}</div> : <div
                            className={homePageHeader.btn}
                            style={{display: 'flex'}}>
                            <Link to={'/register'}><button>注册</button></Link>
                            <Link to={'/login'}><button>登录</button></Link>
                        </div>
                    }

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
                    {/*<div onClick={this.jumpSearch}><Button title={'搜索1'}/></div>*/}
                    <div><Button onClick={this.jumpSearch} title={'搜索1'}/></div>
                </div>
                {/*内容输入部分end*/}
            </div>
        </Fragment>)
    }
    componentDidMount() {
        this.getLocalData()
    }
    getLocalData () { // 获取用户数据展示相
        const userLocal = sessionStorage.user !== undefined ?  JSON.parse(sessionStorage.user) : ''
        if (userLocal !== '') {
            this.setState(() => ({
                loginStatus: true
            }),() => {
                this.setState({
                    user: userLocal.user,
                    mobile: userLocal.mobile
                })
            })
        } else {
            this.setState(() => ({
                loginStatus: false
            }))
        }
    }
    goSetting = () => {
        this.props.history.push({pathname: '/my', query: {name: this.state.user}})
    }
    public jumpSearch = () => {
        this.props.history.push('/search')
    }
}

export default withRouter(HomePageHeader)