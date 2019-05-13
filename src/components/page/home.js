// 首页
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../../static/pageStyle/home.scss';
import Loopphoto from '../assembly/loopPhoto';
import Album from '../assembly/Album';
import Dynamic from '../assembly/Dynamic';
import Footer from '../assembly/Footer';
import common from '../common/common';
// import store from '../common/store';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageName: '首页',
            scrollUp: false,
            pageData: {
                index: 0,
                parantName: '首页页面',
                sideName: '首页'
            },
            storeData: ''
        }
    }

    render () {
        return (
            <div className="home-root page-root" ref="homePage">
                <Loopphoto ref='loopPhoto'></Loopphoto>
                <div className="page-floor album-area">
                    <h1 className="second-title">LNTRODUCE <span>经典楼盘</span></h1>
                    <Album ref="album"></Album>
                </div>
                <div className="page-floor news-area">
                    <h1 className="second-title">NEWS CENTER <span>新闻动态</span></h1>
                    <Dynamic ref="dynamic"></Dynamic>
                </div>
                <Footer ref="footer"></Footer>
                {
                    this.state.scrollUp ? <span className="icon-circle-up return-top" onClick={this.goTop.bind(this)}></span> : null
                }   
            </div>
        )
    }


    componentDidMount () {
        let homePage = this.refs.homePage;
        let high = homePage.offsetHeight / 2;
        // console.log(high, homePage.offsetHeight)
        window.onscroll = () => {
            let topH = document.documentElement.scrollTop || document.body.scrollTop;
            // console.log(topH, high)     
            if (topH > high) {
                this.setState({
                    scrollUp: true
                })
            } else {
                this.setState({
                    scrollUp: false
                })
            }
        }

        // if (React.$param.getParams('whichPage')) {
        //     console.log(React.$param.getParams('whichPage'))
        // }

        // if (store.getParams('whichPage')) {
        //     this.setState({
        //         storeData: store.getParams('whichPage')
        //     })
        //     setTimeout (() => {
        //         console.log(this.state.storeData)
        //         if (this.state.storeData) {
        //             store.deleteParams('whichPage')
        //         }
        //     })    
        // }

    }

    componentWillMount () {
        // console.log(React)
        // if (React.$param.getParams('ispageName')) {
        //     console.log(React.$parma.getParams('ispageName'))
        // }
    }

    goTop = () => {
        common.goTop();
    }
}
export default Home;