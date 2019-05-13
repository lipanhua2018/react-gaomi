// 企业资讯
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Levelnav from '../assembly/Levelnav';
import Sidenav from '../assembly/Sidenav';
import Footer from '../assembly/Footer';
import Onebanner from '../assembly/Onebanner';
import Newsindex from '../assembly/qiyeAssembly/Newsindex';
import Gsgonggao from '../assembly/qiyeAssembly/Gsgonggao';
import Gsneikang from '../assembly/qiyeAssembly/Gsneikang';
import Gsyaowen from '../assembly/qiyeAssembly/Gsyaowen';
import Qyjingshen from '../assembly/qiyeAssembly/Qyjingshen';
import Xmdongtai from '../assembly/qiyeAssembly/Xmdongtai';
import '../../static/pageStyle/corporateInformation.scss';
import { connect } from 'react-redux';
import * as actions from '../reduxModule/actions';

//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
    // console.log(state)
return {
    initLevel: state.productReducer
}
};
//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
return {
    pushLevel: (...args) => dispatch(actions.pushLevel(...args)),
    deleteLevel: (...args) => dispatch(actions.deleteLevel(...args))
}
};


class corporateInformation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            childNav: ['业内新闻', '公司要闻', '公司内刊', '公司公告', '项目动态'],
            pageData: {
                index: 0,
                parantName: '企业资讯',
                sideName: '企业资讯',
                curPostiton: ''
            },
            showContent: '',
            levelObj: null
        }
    }

    render () {
        return (
            <div className="corporate-root page-root">
                <Onebanner ref="onebanner"></Onebanner>
                <Levelnav ref="levelnav" parentData={this.state.pageData} callback={this.childCallback}></Levelnav>
                <div className="content-area">
                    <div className="side-area">
                        <Sidenav ref="sidenav" listNav={this.state.childNav} parentData={this.state.pageData} methods={this.switchContent}></Sidenav>
                    </div>
                    {/* 右侧内容区域的显示 */}
                    <div className="content-box">
                        {this.state.showContent === '业内新闻'?<Newsindex></Newsindex>:''}
                        {this.state.showContent === '公司要闻'?<Gsyaowen></Gsyaowen>:''}
                        {this.state.showContent === '企业精神'?<Qyjingshen></Qyjingshen>:''}
                        {this.state.showContent === '公司内刊'?<Gsneikang></Gsneikang>:''}
                        {this.state.showContent === '公司公告'?<Gsgonggao></Gsgonggao>:''}
                        {this.state.showContent === '项目动态'?<Xmdongtai></Xmdongtai>:''}
                    </div>
                </div>
                <Footer ref="footer"></Footer>
            </div>
        )
    }
    componentWillMount () {
        if (this.props.location.state.data && this.props.location.state.data.name) {
            this.switchContent(this.props.location.state.data.name, this.props.location.state.data.index)
            // console.log(this.props.location.state, this.state.showContent)   
        }
    }

    childCallback = (self) => {
        this.setState({
            levelObj: self
        })
    }

    switchContent = (test, index) => {
        let obj = Object.assign({}, this.state.pageData, {index: index, curPostiton: test})       
        this.setState({
            showContent: test,
            showPage: test,
            pageData: obj
        })
        if (this.state.levelObj) {
            this.state.levelObj.upLevelData()
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(corporateInformation));