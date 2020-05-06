import React, { Fragment } from 'react'
import TitleBar from "../../../plugin/titleBar/TitleBar";
import bugImg from '../../../static/images/img2.png'
const detail = require('../../../style/less/base.module.less')

const Detail = () => {
    return (<Fragment>
        <div className={detail.detail}>
            <TitleBar title={'房间信息'}/>
            <div className={detail.imgbox}>
                <img src={bugImg} alt=""/>
            </div>
            detail
        </div>
    </Fragment>)
}
export default Detail