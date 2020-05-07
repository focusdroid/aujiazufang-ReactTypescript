import React, { Fragment } from 'react'
import TitleBar from "../../../plugin/titleBar/TitleBar";
const auth = require('../../../style/less/base.module.less')

const Auth = () => {
    return (<Fragment>
        <TitleBar title={'实名认证'}/>
        <div className={auth.auth}>
            <div className={auth.box}>
                <div className={auth.titles}>
                    <div>认证信息</div>
                </div>
                <div>
                    <div>
                        <div>真实姓名</div>
                        <div><input type="text" placeholder={'真实姓名'}/></div>
                    </div>
                    <div>
                        <div>身份证号码</div>
                        <div><input type="text" placeholder={'身份证号码'}/></div>
                    </div>
                    <div>
                        <div>手机号码</div>
                        <div><input type="text" placeholder={'手机号码'}/></div>
                    </div>
                    <div>
                        <div>现居住地址</div>
                        <div><input type="text" placeholder={'现居住地址'}/></div>
                    </div>
                </div>
            </div>
            <div className={auth.btn}>
                <button>提交信息</button>
            </div>
        </div>
    </Fragment>)
}
export default Auth