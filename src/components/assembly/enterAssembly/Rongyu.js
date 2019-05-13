import React, { Component } from 'react';
import customFn from '../../../static/js/customFn';

class Rongyu extends Component {
    constructor (props) {
        super (props)
        this.state = {
                pageName: '企业荣誉',
                rongyuImg: [
                    {src: require('../../../static/img/rongyu_1.jpg'), text: '先进基层党组织'},
                    {src: require('../../../static/img/rongyu_2.jpg'), text: '二零一七先进单位'},
                    {src: require('../../../static/img/rongyu_3.jpg'), text: '二零一七优秀企业'},
                    {src: require('../../../static/img/rongyu_4.jpg'), text: '妇女工作先进单位'},
                    {src: require('../../../static/img/rongyu_5.jpg'), text: '十强服务企业'},
                    {src: require('../../../static/img/rongyu_6.jpg'), text: '十强纳税企业'},
                    {src: require('../../../static/img/rongyu_7.jpg'), text: '志愿服务先进集体'},
                    {src: require('../../../static/img/rongyu_8.jpg'), text: '二零一六优秀企业'},
                    {src: require('../../../static/img/rongyu_9.jpg'), text: '税收突出贡献企业'}
                ],
                bool: true       
        }
    }

    render () {
        return (
            <div className="Rongyu-root child-root" ref="rongyu"> 
                {                  
                    this.state.rongyuImg.map((item, index)=>{
                        return (
                                <div className="rongyu-img" key={index}>
                                    <img src={item.src} alt=""></img>
                                    <div className="text">{item.text}</div>
                                </div>
                            )
                        })
                    }             
            </div>
        )
    }

    componentDidMount () {
        // dom加载完毕的生命周期函数
        let rongyu = this.refs.rongyu;
        let rongyuList = rongyu.children;
        let n = 0;
        for (let ry of rongyuList) {
            n++;
        //  console.log(n)
            if (n < 7) {
                ry.classList.add('floor-bottom')
            }
            if (n === 2 || n === 5 || n === 8) {
                ry.classList.add('padding-lr')
            }
            
            ry.onmouseover = () => {
                let textEl = ry.querySelector('.text');
                customFn.cartoon(textEl, {bottom: 0}, 20)
            }
            ry.onmouseout = () => {
                let textEl = ry.querySelector('.text');
                customFn.cartoon(textEl, {bottom: -40}, 20)
            }
            ry.onclick = () => {
                let textEl = ry.querySelector('.text');
                console.log(textEl)
            }
        }
    }
}
export default Rongyu;