import React, { Fragment } from 'react'
import TitleBar from "../../../plugin/titleBar/TitleBar";
import img from '../../../static/images/img.jpg'
const order = require('../../../style/less/base.module.less')

const Orders = () => {
    return (<Fragment>
        <TitleBar title={'我的订单'}/>
        <div className={order.order}>
            <ul>
                <li className={order.box}>
                    <div>
                        <div className={order.title}>
                            <div>订单编号: <span>7</span></div>
                            <div><button className={order.orderbtn}>发表评价</button></div>
                        </div>
                        <div className={order.content}>
                            <div className={order.contOne}>
                                <img src={img} alt=""/>
                            </div>
                            <div className={order.contTwo}>
                                <div>测试订单1</div>
                                <div>创建时间:2002-05-06 15:15:44</div>
                                <div>入住时间:2020-05-06</div>
                                <div>离开时间:2020-05-09</div>
                                <div>合计金额:￥400 (共两晚)</div>
                                <div>订单状态:待接单</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={order.box}>
                    <div>
                        <div className={order.title}>
                            <div>订单编号: <span>7</span></div>
                            <div><button className={order.orderbtn}>发表评价</button></div>
                        </div>
                        <div className={order.content}>
                            <div className={order.contOne}>
                                <img src={img} alt=""/>
                            </div>
                            <div className={order.contTwo}>
                                <div>测试订单1</div>
                                <div>创建时间:2002-05-06 15:15:44</div>
                                <div>入住时间:2020-05-06</div>
                                <div>离开时间:2020-05-09</div>
                                <div>合计金额:￥400 (共两晚)</div>
                                <div>订单状态:待接单</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={order.box}>
                    <div>
                        <div className={order.title}>
                            <div>订单编号: <span>7</span></div>
                            <div><button className={order.orderbtn}>发表评价</button></div>
                        </div>
                        <div className={order.content}>
                            <div className={order.contOne}>
                                <img src={img} alt=""/>
                            </div>
                            <div className={order.contTwo}>
                                <div>测试订单1</div>
                                <div>创建时间:2002-05-06 15:15:44</div>
                                <div>入住时间:2020-05-06</div>
                                <div>离开时间:2020-05-09</div>
                                <div>合计金额:￥400 (共两晚)</div>
                                <div>订单状态:待接单</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={order.box}>
                    <div>
                        <div className={order.title}>
                            <div>订单编号: <span>7</span></div>
                            <div><button className={order.orderbtn}>发表评价</button></div>
                        </div>
                        <div className={order.content}>
                            <div className={order.contOne}>
                                <img src={img} alt=""/>
                            </div>
                            <div className={order.contTwo}>
                                <div>测试订单1</div>
                                <div>创建时间:2002-05-06 15:15:44</div>
                                <div>入住时间:2020-05-06</div>
                                <div>离开时间:2020-05-09</div>
                                <div>合计金额:￥400 (共两晚)</div>
                                <div>订单状态:待接单</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={order.box}>
                    <div>
                        <div className={order.title}>
                            <div>订单编号: <span>7</span></div>
                            <div><button className={order.orderbtn}>发表评价</button></div>
                        </div>
                        <div className={order.content}>
                            <div className={order.contOne}>
                                <img src={img} alt=""/>
                            </div>
                            <div className={order.contTwo}>
                                <div>测试订单1</div>
                                <div>创建时间:2002-05-06 15:15:44</div>
                                <div>入住时间:2020-05-06</div>
                                <div>离开时间:2020-05-09</div>
                                <div>合计金额:￥400 (共两晚)</div>
                                <div>订单状态:待接单</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={order.box}>
                    <div>
                        <div className={order.title}>
                            <div>订单编号: <span>7</span></div>
                            <div><button className={order.orderbtn}>发表评价</button></div>
                        </div>
                        <div className={order.content}>
                            <div className={order.contOne}>
                                <img src={img} alt=""/>
                            </div>
                            <div className={order.contTwo}>
                                <div>测试订单1</div>
                                <div>创建时间:2002-05-06 15:15:44</div>
                                <div>入住时间:2020-05-06</div>
                                <div>离开时间:2020-05-09</div>
                                <div>合计金额:￥400 (共两晚)</div>
                                <div>订单状态:待接单</div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </Fragment>)
}
export default Orders