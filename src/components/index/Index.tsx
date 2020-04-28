import React, { Fragment, Component } from 'react'
import HomePageHeader from '../../plugin/homeHeader/HomePageHeader'
import Carousels from '../../plugin/carousel/Carousel'


export default class Index extends Component<any>{
    public render() {
        return(<Fragment>
            <HomePageHeader />
            <Carousels />
        </Fragment>)
    }
}