import React, { Fragment, Component } from 'react'
import TitleBar from "../../../plugin/titleBar/TitleBar";
import bugImg from '../../../static/images/img2.png'
import iconImg from '../../../static/images/img.jpg'
const search = require('../../../style/less/base.module.less')


interface IProps {
    getDetail: () => void;
    history?: any
}

const Search = (props:IProps) => {
   return (<Fragment>
       <TitleBar title={'房源'}/>
       {/*筛选条件start*/}
       <div></div>
       {/*筛选条件end*/}
       {/*    内容显示start*/}
       <ul className={search.search} style={{listStyle: 'none', margin: '0', padding: '0'}}>
           <li className={search.li} onClick={getDetail}>
               <div className={search.searchimgbox}>
                   <img className={search.bugImg} src={bugImg} alt=""/>
               </div>
               <div className={search.iconImgbox}>
                   <img className={search.iconImg} src={iconImg} alt=""/>
                   <p className={search.money}>￥ <span>300</span>/晚上</p>
               </div>
               <div className={search.text}>
                   <p>测试1</p>
                   <p>出租300间 - 0次入住 - 测试地址333</p>
               </div>
           </li>
           <li className={search.li}>
               <div className={search.searchimgbox}>
                   <img className={search.bugImg} src={bugImg} alt=""/>
               </div>
               <div className={search.iconImgbox}>
                   <img className={search.iconImg} src={iconImg} alt=""/>
                   <p className={search.money}>￥ <span>500</span>/晚上</p>
               </div>
               <div className={search.text}>
                   <p>测试1</p>
                   <p>出租300间 - 0次入住 - 测试地址333</p>
               </div>
           </li>
           <li className={search.li}>
               <div className={search.searchimgbox}>
                   <img className={search.bugImg} src={bugImg} alt=""/>
               </div>
               <div className={search.iconImgbox}>
                   <img className={search.iconImg} src={iconImg} alt=""/>
                   <p className={search.money}>￥ <span>460</span>/晚上</p>
               </div>
               <div className={search.text}>
                   <p>测试1</p>
                   <p>出租300间 - 0次入住 - 测试地址333</p>
               </div>
           </li>
       </ul>
       {/*    内容显示end*/}
    </Fragment>)
    function getDetail () {
       props.history.push('/detail')
    }
}
export default Search