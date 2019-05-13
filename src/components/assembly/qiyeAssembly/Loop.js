import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

class Loop extends Component {
    constructor (props) {
        super (props)
        this.state = {
                pageName: '滚动轮播',
                photoList:  [],
                pageData: {
                    
                }
        }
    }

    render () {
        return (
            <div className="swiper-container Loop-root">
                <div className="swiper-wrapper">
                    {
                        this.state.photoList.map((item, index)=> {
                            return (
                                <div className="swiper-slide loop-img" key={index}>
                                    <img src={item.src} alt='loop'></img>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        )
    }
    componentWillMount () {
       this.setState({
           photoList: this.props.photoList
       })
    }
    componentDidMount () {
        new Swiper('.Loop-root', {
            loop: true, // 循环模式选项
            // autoplay: true,//可选选项，自动滑动, 该配置等同下面的对象配置  
            autoplay: {
                delay: 3000, // 多长时间自动切换
                stopOnLastSlide: false,
                disableOnInteraction: false,
                },
            slidesPerView: 3,   // banner里面同时显示几张图片
            spaceBetween: 0, // 图片与图片之间得间距
            navigation: {   // 配置左右箭头按钮
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                hideOnClick: true,
            }
          });
    }
}

export default Loop;
