import React, { Component } from 'react';
import '../../static/pageStyle/Jdxiangqing.scss';

class Jdxiangqing extends Component {
    constructor (props) {
        super (props)
        this.state = {
                pageName: '经典楼盘详情',
                projectInfo: '项目位于广云路和兴业路交界，周围2.5公里以内主要有华涌幼儿园、石门实验中学、依云童梦幼儿园、石门高级中学、狮中幼儿园、狮城中学、新城医院(塘新中路)等，周边配套有待发展，居住舒适，环境良好。',
                photoList:  [
                    {src: require('../../static/img/fdc14.jpg')},
                    {src: require('../../static/img/2.jpg')},
                    {src: require('../../static/img/3.jpg')},
                    {src: require('../../static/img/4.jpg')},
                    {src: require('../../static/img/5.jpg')},
                    {src: require('../../static/img/6.jpg')},
                    {src: require('../../static/img/7.jpg')},
                    {src: require('../../static/img/8.jpg')}
                ],
                pageData: {}
        }
    }

    render () {
        return (
            <div className="Jdxiangqing-root content-root">
                <div className="content-info">
                    <span className="close-span" onClick={this.closeDetails}>X</span>
                    <h3 className="details-title">{this.state.pageData.name}</h3>
                    <div className="details-date">{this.state.pageData.date}</div>
                    <div className="details-img">
                        <img src={this.state.pageData.src} alt=""></img>
                    </div>
                    <p className="details-text">{this.state.pageData.describe}</p>
                </div>
            </div>
        )
    }
    componentWillMount () {
        this.setState({
            pageData: this.props.project
        })
    }
    componentDidMount () {
        
    }
    closeDetails = () => {
        this.props.closeDetails(false)  
    }
}

export default Jdxiangqing;
