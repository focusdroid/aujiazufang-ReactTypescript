import React, { Fragment } from 'react'

import TitleBar from "../../../plugin/titleBar/TitleBar";
import img from '../../../static/images/img.jpg'
const profile = require('../../../style/less/base.module.less')

const Profile = () => {
    return (<Fragment>
        <TitleBar title={'个人信息'}/>
        <div className={profile.profile}>
            <div className={profile.userimg}>
                <div className={profile.profiletitle}>头像</div>
                <div className={profile.box}>
                    <div>
                        <img  className={profile.img} src={img} alt=""/>
                    </div>
                    <div className={profile.selectimg}>
                        <div>选择头像</div>
                        <div><input type="file"/></div>
                    </div>
                </div>
            </div>
            <div className={profile.userimg}>
                <div className={profile.profiletitle}>用户名</div>
                <div className={profile.box}>
                    <div><input type="text" placeholder={'用户名'}/></div>
                </div>
            </div>
            <div className={profile.btn}>
                <button>保存</button>
            </div>
        </div>
    </Fragment>)
}

export default Profile