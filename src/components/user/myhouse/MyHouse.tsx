import React, { Fragment } from 'react'
import TitleBar from "../../../plugin/titleBar/TitleBar";
import { Link } from 'react-router-dom'
import img from '../../../static/images/img2.png'
const mhouse = require('../../../style/less/base.module.less')

const MyHouse = () => {
    return (<Fragment>
        <TitleBar title={'我的房源'}/>
        <div className={mhouse.btn}>
            <Link to={'/newhouse'}><button>发布新房源</button></Link>
        </div>
        {/*一发布的房源信息start*/}
        <div className={mhouse.mhouse}>
            <ul>
                <li className={mhouse.box}>
                    <div className={mhouse.houtitle}>
                        房屋ID: 1 - 测试1
                    </div>
                    <div className={`${mhouse.display} ${mhouse.desc}`}>
                        <div>
                            <img className={mhouse.mhouseimg} src={img} alt=""/>
                        </div>
                        <div className={mhouse.textbox}>
                            <div>位于：东城区</div>
                            <div>价格：￥200/晚</div>
                            <div>发布时间：2018-05-06</div>
                        </div>
                    </div>
                </li>
                <li className={mhouse.box}>
                    <div className={mhouse.houtitle}>
                        房屋ID: 1 - 测试1
                    </div>
                    <div className={`${mhouse.display} ${mhouse.desc}`}>
                        <div>
                            <img className={mhouse.mhouseimg} src={img} alt=""/>
                        </div>
                        <div className={mhouse.textbox}>
                            <div>位于：东城区</div>
                            <div>价格：￥200/晚</div>
                            <div>发布时间：2018-05-06</div>
                        </div>
                    </div>
                </li>
                <li className={mhouse.box}>
                    <div className={mhouse.houtitle}>
                        房屋ID: 1 - 测试1
                    </div>
                    <div className={`${mhouse.display} ${mhouse.desc}`}>
                        <div>
                            <img className={mhouse.mhouseimg} src={img} alt=""/>
                        </div>
                        <div className={mhouse.textbox}>
                            <div>位于：东城区</div>
                            <div>价格：￥200/晚</div>
                            <div>发布时间：2018-05-06</div>
                        </div>
                    </div>
                </li>
                <li className={mhouse.box}>
                    <div className={mhouse.houtitle}>
                        房屋ID: 1 - 测试1
                    </div>
                    <div className={`${mhouse.display} ${mhouse.desc}`}>
                        <div>
                            <img className={mhouse.mhouseimg} src={img} alt=""/>
                        </div>
                        <div className={mhouse.textbox}>
                            <div>位于：东城区</div>
                            <div>价格：￥200/晚</div>
                            <div>发布时间：2018-05-06</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        {/*一发布的房源信息end*/}
    </Fragment>)
}

export default MyHouse