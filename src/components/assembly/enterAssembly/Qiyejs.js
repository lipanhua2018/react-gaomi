import React, { Component } from 'react';

class Qiyejs extends Component {
    constructor (props) {
        super (props)
        this.state = {
                pageName: '企业精神',
                src: require('../../../static/img/qiye.png')         
        }
    }

    render () {
        return (
            <div className="qiyejs-root child-root">
                <h2 className="title-h2">企业精神</h2>
                
                <div className="div-img">
                    <img src={this.state.src} alt=""></img>
                </div>
                
            </div>
        )
    }

    componentDidMount () {
        // dom加载完毕的生命周期函数
    }
}
export default Qiyejs;