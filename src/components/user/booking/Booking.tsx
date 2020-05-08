import React, { Fragment } from 'react'

import TitleBar from "../../../plugin/titleBar/TitleBar";
import img from "../../../static/images/img2.png";
const booking = require('../../../style/less/base.module.less')
const Booking = () => {
    return (<Fragment>
        <TitleBar title={'预定'}/>
        <div className={booking.booking}>
            <ul>
                <li className={booking.box}>
                    <div className={`${booking.display} ${booking.desc}`}>
                        <div>
                            <img className={booking.mhouseimg} src={img} alt=""/>
                        </div>
                        <div className={booking.textbox}>
                            <div>测试1</div>
                            <div>价格：￥200/晚</div>
                        </div>
                    </div>
                </li>
            </ul>
            <div className={booking.times}>
                <div>入住时间</div>
                <div className={`${booking.display} ${booking.timeinput}`}>
                    <div><input type="text"/></div>
                    <div>至</div>
                    <div><input type="text"/></div>
                </div>
            </div>
            <div className={booking.addUp}>
                <div className={booking.addmoney}>订单金额：￥ 200</div>
                <div className={booking.addBtn}>提交订单</div>
            </div>
        </div>
    </Fragment>)
}

export default Booking