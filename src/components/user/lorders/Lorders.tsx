import React, { Fragment } from 'react'
import TitleBar from "../../../plugin/titleBar/TitleBar";
import img from "../../../static/images/img.jpg";

const loader = require('../../../style/less/base.module.less')

const Lloaders = () => {
    return (<Fragment>
        <TitleBar title={'客户订单'}/>
        <div className={loader.loader}>
            <ul>
                <li className={loader.box}>
                    <div>
                        <div className={loader.title}>
                            <div>订单编号: <span>7</span></div>
                            <div>
                                <button className={loader.orderbtn}>接单</button>
                                <button style={{backgroundColor: 'red'}} className={`${loader.orderbtn}`}>拒单</button>
                            </div>
                        </div>
                        <div className={loader.content}>
                            <div className={loader.contOne}>
                                <img src={img} alt=""/>
                            </div>
                            <div className={loader.contTwo}>
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
                <li className={loader.box}>
                    <div>
                        <div className={loader.title}>
                            <div>订单编号: <span>7</span></div>
                            <div><button className={loader.orderbtn}>发表评价</button></div>
                        </div>
                        <div className={loader.content}>
                            <div className={loader.contOne}>
                                <img src={img} alt=""/>
                            </div>
                            <div className={loader.contTwo}>
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
                <li className={loader.box}>
                    <div>
                        <div className={loader.title}>
                            <div>订单编号: <span>7</span></div>
                            <div><button className={loader.orderbtn}>发表评价</button></div>
                        </div>
                        <div className={loader.content}>
                            <div className={loader.contOne}>
                                <img src={img} alt=""/>
                            </div>
                            <div className={loader.contTwo}>
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
                <li className={loader.box}>
                    <div>
                        <div className={loader.title}>
                            <div>订单编号: <span>7</span></div>
                            <div><button className={loader.orderbtn}>发表评价</button></div>
                        </div>
                        <div className={loader.content}>
                            <div className={loader.contOne}>
                                <img src={img} alt=""/>
                            </div>
                            <div className={loader.contTwo}>
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
                <li className={loader.box}>
                    <div>
                        <div className={loader.title}>
                            <div>订单编号: <span>7</span></div>
                            <div><button className={loader.orderbtn}>发表评价</button></div>
                        </div>
                        <div className={loader.content}>
                            <div className={loader.contOne}>
                                <img src={img} alt=""/>
                            </div>
                            <div className={loader.contTwo}>
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
                <li className={loader.box}>
                    <div>
                        <div className={loader.title}>
                            <div>订单编号: <span>7</span></div>
                            <div><button className={loader.orderbtn}>发表评价</button></div>
                        </div>
                        <div className={loader.content}>
                            <div className={loader.contOne}>
                                <img src={img} alt=""/>
                            </div>
                            <div className={loader.contTwo}>
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

        <h2>客户订单</h2>
    </Fragment>)
}

export default Lloaders