import React, { Fragment, useRef, useState } from 'react'
import TitleBar from "../../../plugin/titleBar/TitleBar";
import img from '../../../static/images/img.jpg'
import Button from "../../../plugin/button/Button";
import {loadFiles} from '../../../api/index'
const profile = require('../../../style/less/base.module.less')

const Profile = () => {
    const file = useRef(null);
    const [img_url, setImgUrl] = useState(null)
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
                        <div><input type="file" ref={file}/></div>
                        <Button title={'上传'} onClick={loadImage} />
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
                <button onClick={saveMessage}>保存</button>
            </div>
        </div>
    </Fragment>)
    function saveMessage () {

    }
    function loadImage () {
        // @ts-ignore
        const filee = file.current.files[0]
        let data = new FormData()
        data.append('avatar', filee, filee.name)
        loadFiles(data).then((res:any) => {
            // console.log(res)
            if (res.errno === 0 || res.errno === '0') {
                // setImgUrl(img_url: res.data.avatar_url)
            }
        })
    }
}

export default Profile