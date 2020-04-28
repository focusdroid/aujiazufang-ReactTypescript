import React, { Fragment } from 'react'
const button = require('../../style/less/base.module.less')

interface IProps {
    title: string
}

const Button = ({title}:IProps) => {
    return (<Fragment>
        <div className={button.btn}>
            <button className={button.button}>{title}</button>
        </div>
    </Fragment>)
}

export default Button