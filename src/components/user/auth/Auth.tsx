import React, { Fragment, useState } from 'react'
import TitleBar from "../../../plugin/titleBar/TitleBar";
const auth = require('../../../style/less/base.module.less')

interface IProps {
    changeTitle?: () => void;
    changeMoney?: () => void;
    sublimtMessage?: () => void;
}

const Auth = (props: IProps) => {
    const [houseTitle, setHoueseTitle] = useState<string>('')
    const [houseMoney, sethouseMoney] = useState<string>('')
    return (<Fragment>
        <TitleBar title={'实名认证'}/>
        <div className={auth.auth}>
            {/*基本信息start*/}
            <div className={auth.box}>
                <div className={auth.titles}>
                    <div>基本信息</div>
                </div>
                <div className={auth.table}>
                    <div>
                        <div className={auth.name}>真实姓名</div>
                        <div>
                            <input
                                type="text"
                                className={auth.authinput}
                                placeholder={'房屋标题'}
                                value={houseTitle}
                                onChange={changeTitle}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={auth.name}>身份证号码</div>
                        <div>
                            <input type="text"
                                   className={auth.authinput}
                                   placeholder={'每晚价格'}
                                   value={houseMoney}
                                   onChange={changeMoney}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/*基本信息end*/}
            <div className={auth.btn}>
                <button onClick={sublimtMessage}>提交信息</button>
            </div>
        </div>
    </Fragment>)
    function changeTitle(e:any) { // 房屋标题
        setHoueseTitle(e.target.value)
    }
    function changeMoney (e:any) { // 每晚价格 200+----------------------------
        sethouseMoney(e.target.value)
    }
    function sublimtMessage () { // 获取房屋信息
        console.log(houseTitle)
        console.log(houseMoney)
    }
}
export default Auth