import React, { Fragment } from 'react'
import TitleBar from "../../../plugin/titleBar/TitleBar";
const auth = require('../../../style/less/base.module.less')

const Auth = () => {
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
                        <div className={auth.name}>房屋标题</div>
                        <div>
                            <input
                                type="text"
                                className={auth.authinput}
                                placeholder={'房屋标题'}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={auth.name}>每晚价格</div>
                        <div>
                            <input type="text"
                                   className={auth.authinput}
                                   placeholder={'每晚价格'}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={auth.name}>所在城区</div>
                        <div>
                            <input type="text"
                                   className={auth.authinput}
                                   placeholder={'所在城区'}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={auth.name}>详细地址</div>
                        <div className={auth.marauto}>
                            <input type="text"
                                   className={auth.authinput}
                                   placeholder={'详细地址'}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/*基本信息end*/}
            <div className={auth.btn}>
                <button>提交信息</button>
            </div>
        </div>
    </Fragment>)
}
export default Auth