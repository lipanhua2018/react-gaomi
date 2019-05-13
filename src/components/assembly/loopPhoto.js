import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import '../../static/pageStyle/loopphoto.scss';

class Loopphoto extends Component {
    constructor (props) {
        super (props)
        this.state = {
                pageName: '轮播图',
                pageData: {},
                bannerList: [
                    {src: require('../../static/img/1_loop.jpg')},
                    {src: require('../../static/img/2_loop.jpg')},
                    {src: require('../../static/img/3_loop.jpg')}
                ]
        }
    }

    componentDidMount() {
    // console.log('生命周期函数：组建挂载完成02');
    new Swiper('.swiper-container', {
            direction: 'horizontal', // 水平切换选项
			loop: true, // 循环模式选项
            // autoplay: true,//可选选项，自动滑动, 该配置等同下面的对象配置  
            autoplay: {
                delay: 3000, // 多长时间自动切换
                stopOnLastSlide: false,
                disableOnInteraction: false,
                },
            navigation: {   // 配置左右箭头按钮
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                hideOnClick: true,
            },

            pagination: {
                el: '.swiper-pagination',
            },
        });
        // console.log(mySwiper)
    }

    render() {
        return (
                <div className="swiper-container loop-photo" ref='swiperBox'>
                    <div className="swiper-wrapper">
                        {
                            this.state.bannerList.map((item, index) => {
                                return (<div className="swiper-slide" key={index}><img src={item.src} alt='banner'></img></div>)
                            })
                        }
                    </div>

                    <div className="swiper-pagination" ref="paginateID"></div>
                    
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
        )
    }
}

export default Loopphoto;