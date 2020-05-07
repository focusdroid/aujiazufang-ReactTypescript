import React, { Fragment } from 'react'
import TitleBar from "../../../plugin/titleBar/TitleBar";
import { Link } from 'react-router-dom'
const mhouse = require('../../../style/less/base.module.less')
const MyHouse = () => {
    return (<Fragment>
        <TitleBar title={'我的房源'}/>
        <div className={mhouse.btn}>
            <Link to={'newhouse'}><button>发布新房源</button></Link>
        </div>
        <h3>我的房源</h3>
    </Fragment>)
}

export default MyHouse