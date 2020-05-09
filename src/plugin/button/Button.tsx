import React, { Fragment } from 'react'
const button = require('../../style/less/base.module.less')

interface IProps {
    title: string;
    onClick?: () => void;
}

const Button = ({title, onClick}:IProps) => {
    return (<Fragment>
        <div className={button.btn}>
            <button onClick={onClick} className={button.button}>{title}</button>
        </div>
    </Fragment>)
}

export default Button