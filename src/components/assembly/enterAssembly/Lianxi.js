import React, { Component } from 'react';

class Lianxi extends Component {
    constructor (props) {
        super (props)
        this.state = {
                pageName: '联系我们'     
        }
    }

    render () {
        return (
            <div className="Lianxi-root child-root">    
                <h2 className="title-h2 lianxi-title">联系我们</h2>           
                <div className="div">公司名称：高密市城市建设投资集团有限公司</div>
                <div className="div">公司地址：高密市康城大街（东）2999号</div>
                <div className="div">网      址：www.sdgmct.com</div>
                <div className="div">电子邮箱：gmctbgs@163.com</div>
                <div className="div">邮政编码：261500</div>
                <div className="div">联系电话：0536-5608011</div>
            </div>
        )
    }

    componentDidMount () {
        // dom加载完毕的生命周期函数
    }
}
export default Lianxi;