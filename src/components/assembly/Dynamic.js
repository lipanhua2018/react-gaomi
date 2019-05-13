import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import customFn from '../../static/js/customFn';
import 'swiper/dist/css/swiper.min.css';
import '../../static/pageStyle/Dynamic.scss';

class Dynamic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageName: '首页动态组件',
            time: null,
            target: 0,
            speed: 0,
            newsList: [
                {src: require('../../static/img/1.jpg')},
                {src: require('../../static/img/2.jpg')},
                {src: require('../../static/img/3.jpg')},
                {src: require('../../static/img/4.jpg')},
                {src: require('../../static/img/5.jpg')},
                {src: require('../../static/img/6.jpg')},
                {src: require('../../static/img/7.jpg')},
                {src: require('../../static/img/8.jpg')}
            ],            
            newsDynamic: [{
                title: '标题呀标题呀题呀标题呀A',
                content: '内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀A'
            },{
                title: '标题呀标题呀题呀标题呀B',
                content: '内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀B'
            },{
                title: '标题呀标题呀题呀标题呀C',
                content: '内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀C'
            },{
                title: '标题呀标题呀题呀标题呀D',
                content: '内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀D'
            },{
                title: '标题呀标题呀题呀标题呀E',
                content: '内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀E'
            },{
                title: '标题呀标题呀题呀标题呀F',
                content: '内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀F'
            },{
                title: '标题呀标题呀题呀标题呀G',
                content: '内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀G'
            },{
                title: '标题呀标题呀题呀标题呀H',
                content: '内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀H'
            }]
        }
    }

    render () {
        return (
            <div className="dynamic-root">
                <div className="news-dynamic">
                    <div className="left-newsPhoto dynamic-info">

                    <div className="swiper-wrapper dynamic-wrapper">
                        {
                            this.state.newsList.map((item, index) => {
                                return (<div className="swiper-slide" key={index}><img src={item.src} alt='banner'></img></div>)
                            })
                        }
                    </div>

                    <div className="newsPhoto-pagination swiper-pagination" ref="newsPhoto"></div>
                    </div>

                    <div className="right-newsText dynamic-info">
                        <div className="info-box" ref="infoBox">
                            {
                                this.state.newsDynamic.map((item, index) => {
                                    return(<div className="row-dynamic" key={index} onMouseOver={this.clearLoop}>
                                        <h3>{item.title}</h3>
                                        <p>{item.content}</p>
                                        <span>阅读全文</span>
                                    </div>)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        
        new Swiper('.left-newsPhoto', {
            direction: 'horizontal', // 水平切换选项
            loop: true, // 循环模式选项 
            autoplay: {
                delay: 3000, // 多长时间自动切换
                stopOnLastSlide: false,
                disableOnInteraction: false,
                },
            pagination: {
                el: this.refs.newsPhoto,
            },
        });

        // 无缝滚动
        let infoBox = this.refs.infoBox;        
        
        infoBox.innerHTML += infoBox.innerHTML;

        let target = infoBox.offsetHeight / 2;
        let times = 1500;
        customFn.cartoon(this.refs.infoBox, {'top': -target}, times)

        let time = setInterval(() => {
            if (Math.abs(infoBox.offsetTop) >= target) {
                infoBox.style.top = 0 + 'px';
            }
        })

        infoBox.onmouseover = () => {
            // console.log('鼠标移入', infoBox.offsetTop)
            // 实现原理，target目标值是运动框架需要到达的目标值，因此当鼠标移入时，让它的目标改变成鼠标移入时的offsetTop
            // 然后清除定时器
            target = infoBox.offsetTop;
            times = 0;
            customFn.cartoon(this.refs.infoBox, {'top': -target}, times)      
            clearInterval(time)           
        }
        
        infoBox.onmouseout = () => {
            // console.log('鼠标移出')
            // 鼠标移出后恢复原来的offsetTop的目标值
            target = infoBox.offsetHeight / 2;
            times = 1500;
            customFn.cartoon(this.refs.infoBox, {'top': -target}, times)
            time = setInterval(() => {
                if (Math.abs(infoBox.offsetTop) >= target) {
                    infoBox.style.top = 0 + 'px';
                }
            })
        }
    }

}

export default Dynamic;