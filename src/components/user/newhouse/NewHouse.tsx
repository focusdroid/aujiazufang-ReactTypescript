import React, { Fragment, Component } from 'react'
import {getAreasList, loadFiles} from '../../../api/index'
import TitleBar from "../../../plugin/titleBar/TitleBar";
import Button from "../../../plugin/button/Button";

const newhouse = require('../../../style/less/base.module.less')

interface IState {
    areaList: Array<any>;
    title: string, //  房屋名称标题
    price: string, //  房屋单价
    area_id: string, // 房屋所属城区编号
    address: string, // 房屋地址
    room_count: string, // 房屋包含的房间数目
    acreage: string, //  房屋面积
    unit: string, //  房屋布局（几室几厅）
    capacity: string, // 房屋容纳人数
    beds: string, // 房屋卧床数目
    deposit: string, // 押金
    min_days: string, // 最小入住天数
    max_days: string, // 最大入住天数
    facility: Array<number | string>,
    facility_list: Array<string>
    CheckStatusArr: Array<number>
}

export default class NewHouse extends Component<any, IState> {
    constructor(props:any) {
        super(props);
        this.state = {
            areaList: [],
            title: '',
            price: '',
            area_id: '',
            address: '',
            room_count: '',
            acreage: '',
            unit: '',
            capacity: '',
            beds: '',
            deposit: '',
            min_days: '',
            max_days: '',
            facility: [],
            facility_list: ['高档公寓', '热水淋浴', '空调', '暖气', '允许吸烟', '饮水设备', '牙具', '香皂', '拖鞋', '手纸', '毛巾', '淋浴露、洗发露', '冰箱', '洗衣机', '电梯', '停车位', '门禁系统', '允许聚会', '允许带宠物', '允许做饭'],            CheckStatusArr: []
        }
    }
    componentDidMount(){
        this.getAreas()
    }
    file = React.createRef();
    render () {
        const {facility_list, CheckStatusArr} = this.state
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
                        <div><input type="text" onChange={(e:any) => this.setValue(e.target.value, 'title')} className={newhouse.newhouseinput}/></div>
                    </div>
                    <div>
                        <div className={newhouse.name}>每晚价格</div>
                        <div><input type="text" onChange={(e:any) => this.setValue(e.target.value, 'price')} className={newhouse.newhouseinput}/></div>
                    </div>
                    <div>
                        <div className={newhouse.name}>所在城区</div>
                        <div><input type="text" onChange={(e:any) => this.setValue(e.target.value, 'area_id')} className={newhouse.newhouseinput}/></div>
                    </div>
                    <div>
                        <div className={newhouse.name}>详细地址</div>
                        <div><input type="text" onChange={(e:any) => this.setValue(e.target.value, 'address')} className={newhouse.newhouseinput}/></div>
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
                                onChange={(e:any) => this.setValue(e.target.value, 'room_count')}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={newhouse.name}>房屋面积</div>
                        <div>
                            <input type="text"
                                   className={newhouse.newhouseinput}
                                   onChange={(e:any) => this.setValue(e.target.value, 'acreage')}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={newhouse.name}>户型描述</div>
                        <div>
                            <input type="text"
                                   className={newhouse.newhouseinput}
                                   placeholder={'如：三室两厅两卫'}
                                   onChange={(e:any) => this.setValue(e.target.value, 'unit')}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={newhouse.name}>宜住人数</div>
                        <div>
                            <input
                                type="text"
                                className={newhouse.newhouseinput}
                                onChange={(e:any) => this.setValue(e.target.value, 'capacity')}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={newhouse.name}>卧床配置</div>
                        <div className={newhouse.marauto}>
                            <input
                                type="text"
                                className={newhouse.newhouseinput}
                                placeholder={'如：双人床2x1.8x1张'}
                                onChange={(e:any) => this.setValue(e.target.value, 'beds')}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={newhouse.name}>押金数额</div>
                        <div>
                            <input
                                type="text"
                                className={newhouse.newhouseinput}
                                onChange={(e:any) => this.setValue(e.target.value, 'deposit')}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={newhouse.name}>最少入住天数</div>
                        <div>
                            <input
                                type="text"
                                className={newhouse.newhouseinput}
                                onChange={(e:any) => this.setValue(e.target.value, 'min_days')}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={newhouse.name}>最多入住天数</div>
                        <div>
                            <input type="text"
                                   className={newhouse.newhouseinput}
                                   placeholder={'0表示无限制'}
                                   onChange={(e:any) => this.setValue(e.target.value, 'max_days')}
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
                        {facility_list.map((item, i) => {
                            return (<li key={i}>
                                <div><input type="checkbox" onChange={(e) => this.getCheckStatus(e, i)}/></div>
                                <div>{item}</div>
                            </li>)
                        })}
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <div className={newhouse.selectimg}>
                <div>选择头像</div>
                <div><input type="file" ref={() => this.file}/></div>
                <Button title={'上传图片'} onClick={this.loadImage} />
            </div>
        </div>
        {/*配套设施end*/}
        <div className={newhouse.btn}>
            <button onClick={this.newHouses}>发布新房源</button>
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
    loadImage = () => {
        // @ts-ignore
        const filee = ref.current.files[0]
        let data = new FormData()
        data.append('avatar', filee, filee.name)
        loadFiles(data).then((res:any) => {
            // console.log(res)
            if (res.errno === 0 || res.errno === '0') {
                // setImgUrl(img_url: res.data.avatar_url)
            }
        })
    }
    newHouses = () => {
        console.log(this.state)
    }
    setValue = (ele:string, target:string) => {
        console.log(ele, target)
        // @ts-ignore
        this.setState(() => ({
            [target]: ele
        }))
    }
    getCheckStatus = (e:any, i:number) => {
        console.log(e)
        console.log(e.target,i)
        this.state.CheckStatusArr.push(i)
    }
}