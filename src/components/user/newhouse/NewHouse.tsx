import React, { Fragment, Component } from 'react'
import { getAreasList } from '../../../api/index'
import TitleBar from "../../../plugin/titleBar/TitleBar";

const newhouse = require('../../../style/less/base.module.less')

interface IState {
    areaList: Array<any>
}


export default class NewHouse extends Component<any, IState> {
    constructor(props:any) {
        super(props);
        this.state = {
            areaList: []
        }
    }
    componentDidMount(){
        this.getAreas()
    }
    render () {
        return (<Fragment>
        <TitleBar title={'发布新房源'}/>
        <div className={newhouse.newhouse}>
            <div className={newhouse.box}>
                <div className={newhouse.titles}>
                    <div>认证信息</div>
                </div>
                <div className={newhouse.table}>
                    <div>
                        <div className={newhouse.name}>房屋标题</div>
                        <div><input type="text" className={newhouse.newhouseinput}/></div>
                    </div>
                    <div>
                        <div className={newhouse.name}>每晚价格</div>
                        <div><input type="text" className={newhouse.newhouseinput}/></div>
                    </div>
                    <div>
                        <div className={newhouse.name}>所在城区</div>
                        <div><input type="text" className={newhouse.newhouseinput}/></div>
                    </div>
                    <div>
                        <div className={newhouse.name}>详细地址</div>
                        <div><input type="text" className={newhouse.newhouseinput}/></div>
                    </div>
                </div>
            </div>
        </div>
        {/*详细信息start*/}
        <div className={newhouse.newhouse}>
            <div className={newhouse.box}>
                <div className={newhouse.titles}>
                    <div>详细信息</div>
                </div>
                <div className={newhouse.table}>
                    <div>
                        <div className={newhouse.name}>出租房间数目</div>
                        <div>
                            <input
                                type="text"
                                className={newhouse.newhouseinput}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={newhouse.name}>房屋面积</div>
                        <div>
                            <input type="text"
                                   className={newhouse.newhouseinput}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={newhouse.name}>户型描述</div>
                        <div>
                            <input type="text"
                                   className={newhouse.newhouseinput}
                                   placeholder={'如：三室两厅两卫'}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={newhouse.name}>宜住人数</div>
                        <div>
                            <input type="text"
                                   className={newhouse.newhouseinput}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={newhouse.name}>卧床配置</div>
                        <div className={newhouse.marauto}>
                            <input type="text"
                                   className={newhouse.newhouseinput}
                                   placeholder={'如：双人床2x1.8x1张'}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={newhouse.name}>押金数额</div>
                        <div>
                            <input type="text"
                                   className={newhouse.newhouseinput}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={newhouse.name}>最少入住天数</div>
                        <div>
                            <input type="text"
                                   className={newhouse.newhouseinput}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={newhouse.name}>最多入住天数</div>
                        <div>
                            <input type="text"
                                   className={newhouse.newhouseinput}
                                   placeholder={'0表示无限制'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*详细信息end*/}
        {/*配套设施start*/}
        <div className={newhouse.newhouse}>
            <div className={newhouse.box}>
                <div className={newhouse.titles}>
                    <div>详细信息</div>
                </div>
                <div className={newhouse.newsdetails}>
                    <ul>
                        <li>
                            <div><input type="checkbox"/></div>
                            <div>ooo</div>
                        </li>
                        <li>
                            <div><input type="checkbox"/></div>
                            <div>热水淋浴</div>
                        </li>
                        <li>
                            <div><input type="checkbox"/></div>
                            <div>空调</div>
                        </li>
                        <li>
                            <div><input type="checkbox"/></div>
                            <div>暖气</div>
                        </li>
                        <li>
                            <div><input type="checkbox"/></div>
                            <div>允许吸烟</div>
                        </li>
                        <li>
                            <div><input type="checkbox"/></div>
                            <div>饮水设备</div>
                        </li>
                        <li>
                            <div><input type="checkbox"/></div>
                            <div>牙具</div>
                        </li>
                        <li>
                            <div><input type="checkbox"/></div>
                            <div>香皂</div>
                        </li>
                        <li>
                            <div><input type="checkbox"/></div>
                            <div>拖鞋</div>
                        </li>
                        <li>
                            <div><input type="checkbox"/></div>
                            <div>手纸</div>
                        </li>
                        <li>
                            <div><input type="checkbox"/></div>
                            <div>毛巾</div>
                        </li>
                        <li>
                            <div><input type="checkbox"/></div>
                            <div>淋浴露、洗发露</div>
                        </li>
                        <li>
                            <div><input type="checkbox"/></div>
                            <div>冰箱</div>
                        </li>
                        <li>
                            <div><input type="checkbox"/></div>
                            <div>洗衣机</div>
                        </li>
                        <li>
                            <div><input type="checkbox"/></div>
                            <div>电梯</div>
                        </li>
                        <li>
                            <div><input type="checkbox"/></div>
                            <div>允许做饭</div>
                        </li>
                        <li>
                            <div><input type="checkbox"/></div>
                            <div>允许带宠物</div>
                        </li>
                        <li>
                            <div><input type="checkbox"/></div>
                            <div>允许聚会</div>
                        </li>
                        <li>
                            <div><input type="checkbox"/></div>
                            <div>门禁系统</div>
                        </li>
                        <li>
                            <div><input type="checkbox"/></div>
                            <div>停车位</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/*配套设施end*/}
        <div className={newhouse.btn}>
            <button>发布新房源</button>
        </div>
    </Fragment>)
    }
    getAreas = () => {
        getAreasList().then((res:any) => {
            console.log(res)
            const data = res.data
            console.log(data)
            /*this.setState(() => ({
                areaList: res.data
            }))*/
        })
    }
}