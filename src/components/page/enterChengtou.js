// 走进高投
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../../static/pageStyle/enterChengtou.scss';
import Levelnav from '../assembly/Levelnav';
import Sidenav from '../assembly/Sidenav';
import Footer from '../assembly/Footer';
import Onebanner from '../assembly/Onebanner';
import Jianjie from '../assembly/enterAssembly/Jianjie';
import Zhici from '../assembly/enterAssembly/Zhici';
import Qiyejs from '../assembly/enterAssembly/Qiyejs';
import Zhiliang from '../assembly/enterAssembly/Zhiliang';
import Rongyu from '../assembly/enterAssembly/Rongyu';
import Lianxi from '../assembly/enterAssembly/Lianxi';
import Zhengce from '../assembly/enterAssembly/Zhengce';
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


class enterChengtou extends Component {
    constructor(props) {
        super(props)
        this.state = {
            childNav: ['公司简介', '总经理致辞', '企业精神', '质量方针', '政策法规', '企业荣誉', '联系方式'],
            pageData: {
                index: 0,
                parantName: '走进高投',
                sideName: '走进高投',
                curPostiton: ''
            },
            showContent: '',
            levelObj: null
        }
    }

    render () {
        return (
            <div className="enterChengtou-root page-root">
                <Onebanner ref="onebanner"></Onebanner>
                <Levelnav ref="levelnav" parentData={this.state.pageData} callback={this.childCallback}></Levelnav>
                <div className="content-area">
                    <div className="side-area">
                        <Sidenav ref="sidenav" listNav={this.state.childNav} parentData={this.state.pageData} methods={this.switchContent}></Sidenav>
                    </div>
                    {/* 右侧内容区域的显示 */}
                    <div className="content-box">
                        {this.state.showContent === '公司简介'? <Jianjie ref="jianjie"></Jianjie> : ''}
                        {this.state.showContent === '总经理致辞'? <Zhici></Zhici> : ''}
                        {this.state.showContent === '企业精神'? <Qiyejs></Qiyejs> : ''}
                        {this.state.showContent === '质量方针'? <Zhiliang></Zhiliang> : ''}
                        {this.state.showContent === '企业荣誉'? <Rongyu></Rongyu> : ''}      
                        {this.state.showContent === '联系方式'? <Lianxi></Lianxi> : ''}  
                        {this.state.showContent === '政策法规'? <Zhengce></Zhengce> : ''}                 
                    </div>
                </div>
                <Footer ref="footer"></Footer>
            </div>
        )
    }
    componentWillMount () {

        if (this.props.location.state.data && this.props.location.state.data.name) {    // 判断路由参数里的数据是否存在，设置显示相应的子级内容
            this.switchContent(this.props.location.state.data.name, this.props.location.state.data.index)
            // console.log(this.props.location.state, this.state.showContent, Sidenav)
        }
    }
    componentDidMount () {
        // 获取get传值得方式 console.log(this.props.location.search)
        // console.log(this.refs.sidenav)
    }

    childCallback = (self) => { // 把子组件Levelnav的this绑定到当前页面
        this.setState({
            levelObj: self
        })
    }

    switchContent = (test, index) => { // 切换当前页要显示得内容,index索引是用来给侧边导航添加显示的当前高亮的
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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(enterChengtou));