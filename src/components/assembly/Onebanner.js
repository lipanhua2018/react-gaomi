import React, { Component } from 'react';
import '../../static/pageStyle/Onebanner.scss';

class Onebanner extends Component {
    constructor (props) {
        super (props)
        this.state = {
                pageName: '一张banner图',
               
        }
    }

    render() {
        return (
            <div className="one-banner"></div>
        )
    }


    componentWillMount () {
        // 组件加载时的生命周期函数
    }
    componentDidMount () {
        // dom加载完毕的生命周期函数
    }
}

export default Onebanner;