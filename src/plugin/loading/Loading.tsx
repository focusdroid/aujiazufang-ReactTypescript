import React, { Fragment } from 'react'
const loading = require('./loading.module.less')

const Loading = () => {
    return (<Fragment>
        <div className={loading.loading}>
            <div className={loading.outside}>
                <div className={loading.inside}></div>
            </div>
            {/*<div className="box">loader 15*/}
            {/*    <div className="loader-15"></div>*/}
            {/*</div>*/}
        </div>
    </Fragment>)
}
export default Loading