import React, { Component } from 'react';

class Zhiliang extends Component {
    constructor (props) {
        super (props)
        this.state = {
                pageName: '质量方针',
                src: require('../../../static/img/zhiliang.png')         
        }
    }

    render () {
        return (
            <div className="Zhiliang-root child-root">               
                <div className="div-img">
                    <img src={this.state.src} alt=""></img>
                </div>
                <b className="zhiliang-b">高密市城市建设投资集团有限公司 <span>质量方针</span></b>
            </div>
        )
    }

    componentDidMount () {
        // dom加载完毕的生命周期函数
    }
}
export default Zhiliang;