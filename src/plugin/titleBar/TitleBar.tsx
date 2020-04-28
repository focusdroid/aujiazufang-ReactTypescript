import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import back from '../../static/icon/fanhui-xianxing.svg'
const titlebar = require('./titlebar.module.less')

interface IProps {
    title: string;
    handback?: () => void;
    history?: any
}

const TitleBar = (props:IProps) => {
    return (<Fragment>
        <div className={titlebar.box}>
            <div className={titlebar.titlebar}>
                <div className={titlebar.back} onClick={handback}>
                    <img className={titlebar.iconImg} src={back} alt=""/>
                </div>
                <div className={titlebar.title}>{props.title}</div>
                <div className={titlebar.othen}></div>
            </div>
        </div>
    </Fragment>)
    function handback () {
        props.history.goBack()
    }
}

// @ts-ignore
export default withRouter(TitleBar)