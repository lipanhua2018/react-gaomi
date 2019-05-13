// 加入我们
import React, { Component } from 'react'
import '../../static/pageStyle/joinUs.scss';
import Levelnav from '../assembly/Levelnav';
import Sidenav from '../assembly/Sidenav';
import Footer from '../assembly/Footer';
import Onebanner from '../assembly/Onebanner';

class JoinUs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            childNav: ['加入我们'],
            pageData: {
                index: 0,
                parantName: '加入我们',
                sideName: '加入我们',
                curPostiton: ''
            },
            showContent: ''
        }
    }

    render () {
        return (
            <div className="joinUs-root page-root">
                <Onebanner ref="onebanner"></Onebanner>
                <Levelnav ref="levelnav" parentData={this.state.pageData}></Levelnav>
                <div className="content-area">
                    <div className="side-area">
                        <Sidenav ref="sidenav" listNav={this.state.childNav} parentData={this.state.pageData} methods={this.switchContent}></Sidenav>
                    </div>
                    <div className="content-box">
                        <div className="joinUs-content">
                        <h2>加入我们</h2>
                        <p>高密市城市建设投资集团有限公司成立于2002年3月，注册资本2.195亿元，具有房地产开发贰级资质。营业范围：城建项目投资、国有城建资产运营、房地产开发，建筑装饰装修、土石方、水利、市政、园林绿化工程施工，建筑材料及建设项目咨询。</p>
                        <p>公司名称：高密市城市建设投资集团有限公司</p>
                        <p>公司地址：高密市康城大街（东）2999号</p>
                        <p>网      址：www.sdgmct.com</p>
                        <p>电子邮箱：gmctbgs@163.com</p>
                        <p>邮政编码：261500</p>
                        <p>联系电话：0536-5608011</p>
                        </div>                      
                    </div>
                </div>
                <Footer ref="footer"></Footer>
            </div>
        )
    }

    switchContent = (test, index) => {
        let obj = Object.assign({}, this.state.pageData, {index: index, curPostiton: test})       
        this.setState({
            showContent: test,
            showPage: test,
            pageData: obj
        })

    }
}
export default JoinUs;