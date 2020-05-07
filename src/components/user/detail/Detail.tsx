import React, { Fragment } from 'react'
import TitleBar from "../../../plugin/titleBar/TitleBar";
import bugImg from '../../../static/images/img2.png'
import img from '../../../static/images/img.jpg'
const detail = require('../../../style/less/base.module.less')

const Detail = () => {
    return (<Fragment>
        <div className={detail.detail}>
            <TitleBar title={'房间信息'}/>
            <div className={detail.imgbox}>
                <img src={bugImg} alt=""/>
            </div>
            {/*房屋信息start*/}
            <div className={detail.roomnews}>
                <div className={`${detail.center}`}>
                    <div className={`${detail.custinfo} ${detail.center}`}>
                        <p>name</p>
                        <p>
                            <img className={detail.img} src={img} alt=""/>
                        </p>
                        <p>房东: focusdroid</p>
                    </div>
                    <div className={`${detail.custinfo} ${detail.center}`}>
                        <p>房屋地址</p>
                        <p>北京市昌平区科学园路21-1</p>
                    </div>
                    {/*房屋居住信息start*/}
                    <div className={detail.custinfo}>
                        <div>
                            <h5>出租6间</h5>
                            <p>房屋面积300平米</p>
                            <p>房屋户型：三室两厅</p>
                        </div>
                        <div>
                            <h5>宜住12人</h5>
                        </div>
                        <div>
                            <h5>卧床配置</h5>
                            <p>双人床一张</p>
                        </div>
                    </div>
                    <div className={detail.custinfo}>
                        <div><h4>房间详情</h4></div>
                        <div className={detail.roomdetail}>
                            <ul>
                                <li>收取押金</li>
                                <li>2000</li>
                            </ul>
                            <ul>
                                <li>最少入住天数</li>
                                <li>1</li>
                            </ul>
                            <ul>
                                <li>最多入住天数</li>
                                <li>无限制</li>
                            </ul>
                        </div>
                    </div>
                    <div className={detail.custinfo}>
                        <div><h5>配套设施</h5></div>
                        <div className={detail.newsdetails}>
                            <ul>
                                <li>无线网络</li>
                                <li>热水淋浴</li>
                                <li>空调</li>
                                <li>暖气</li>
                                <li>允许吸烟</li>
                                <li>饮水设备</li>
                                <li>牙具</li>
                                <li>香皂</li>
                                <li>拖鞋</li>
                                <li>手纸</li>
                                <li>毛巾</li>
                                <li>淋浴露、洗发露</li>
                                <li>冰箱</li>
                                <li>洗衣机</li>
                                <li>电梯</li>
                                <li>允许做饭</li>
                                <li>允许带宠物</li>
                                <li>允许聚会</li>
                                <li>门禁系统</li>
                                <li>停车位</li>
                            </ul>
                        </div>
                    </div>
                    {/*评价信息start*/}
                    <div className={detail.custinfo}>
                        <div><h5>评价信息</h5></div>
                        <div>
                            <ul>
                                <li>
                                    <div style={{padding: '0 10px;'}} className={`${detail.display} ${detail.jcsb}`}>
                                        <p>tree</p>
                                        <p>2002-05-02 12:21:56</p>
                                    </div>
                                    <div style={{textAlign: 'left', textIndent: '20px'}}>
                                        <p>居住体验非常好居住体验非常好居住体验非常好居住体验非常好</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*评价信息end*/}
                    {/*房屋居住信息end*/}
                </div>
            </div>
            {/*房屋信息end*/}
            {<div className={`${detail.btn} ${detail.btnposition}`}>
                <button className={detail.button}>即刻预定</button>
            </div>}
        </div>
    </Fragment>)
}
export default Detail