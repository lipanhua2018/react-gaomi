import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
// import { Switch, Route, Link, NavLink } from 'react-router-dom';  // 还可以引入 Switch  和 Link
import '../../static/pageStyle/header.scss';
import Home from '../page/home';
import JoinUs from '../page/joinUs';
import enterChengtou from '../page/enterChengtou';
import corporateInformation from '../page/corporateInformation';
import classicHouse from '../page/classicHouse';
import Vertical from './Vertical';

class Headers extends Component {
    constructor (props) {
        super (props)
        this.state = {
                pageName: '页头',
                pageData: {
                    src: require('../../static/img/commonImg/logo.png')
                },
                childNav: {
                    enterChengtou: [{name: '公司简介', marker: 'brief'}, 
                    {name: '总经理致辞', marker: 'boss'}, 
                    {name: '企业精神', marker: 'spirit'},
                    {name: '质量方针', marker: 'quality'},
                    {name: '政策法规', marker: 'policy'},
                    {name: '企业荣誉', marker: 'honor'},
                    {name: '联系方式', marker: 'tel'}],
                    corporateInformation: [
                        {name: '业内新闻', marker: 'news'},
                        {name: '公司要闻', marker: 'focus'},                    
                        {name: '公司内刊', marker: 'Internal'},
                        {name: '公司公告', marker: 'notice'},
                        {name: '项目动态', marker: 'project'}],
                    classicHouse: [
                        {name: '经典楼盘', marker: 'classic'},
                        {name: '成功之作', marker: 'success'}]
                },
                childRoute: '',
                downListNav: ''
        }
    }
    goHome=()=>{
        this.props.history.push('/home')
    }
    render() {
      
        return (
            <div className="header-root">                            
                        <div className="heade-route">                            
                            <div className="navigation-box">
                                <h1 className="logo-box">
                                    <img src={this.state.pageData.src} alt="logo" onClick={this.goHome}></img>
                                </h1>
                                <ul className="menu-nav" ref="menuNav">
                             
                                <li onMouseEnter={this.enterPage.bind(this, '首页', '/home')}><NavLink activeClassName="cur-nav" to="/home">首页</NavLink></li>
                                                          
                                <li onMouseEnter={this.enterPage.bind(this, '走进城投', '/enterChengtou')} onMouseLeave={this.leaveNav}>
                                                                            {/* 这里的NavLink to属性采用对象的方式，是因为我在下拉子级导航里使用了this.props.history.push，
                                                                            js的跳转方式，并且传递了参数，而如果路由跳转没有参数则会报错，所以我在这里同样使用了对象的方式，并传递了state参数，
                                                                            并且默认显示目标页面的第一个子级右侧的内容 */}
                                        <NavLink activeClassName="cur-nav" to={{pathname:"/enterChengtou",state: {data: {name: '公司简介', marker: 'brief',index: 0}}}}>走进城投</NavLink>
                                        {this.state.downListNav === '走进城投'?<Vertical childNav = {this.state.childNav.enterChengtou} childRoute={this.state.childRoute}></Vertical>:''}
                                    </li>                                   
                                    
                                    <li onMouseEnter={this.enterPage.bind(this, '企业资讯', '/corporateInformation')} onMouseLeave={this.leaveNav}>
                                        <NavLink activeClassName="cur-nav" to={{pathname:"/corporateInformation",state: {data: {name: '业内新闻', marker: 'news',index: 0}}}}>企业资讯</NavLink>
                                        {this.state.downListNav === '企业资讯'?<Vertical childNav = {this.state.childNav.corporateInformation} childRoute={this.state.childRoute}></Vertical>:''}
                                    </li>
                                                                      
                                    <li onMouseEnter={this.enterPage.bind(this, '经典楼盘', '/classicHouse')} onMouseLeave={this.leaveNav}>
                                        <NavLink activeClassName="cur-nav" to={{pathname:"/classicHouse",state: {data: {name: '经典楼盘', marker: 'classic',index: 0}}}}>经典案例</NavLink>
                                        {this.state.downListNav === '经典楼盘'?<Vertical childNav = {this.state.childNav.classicHouse} childRoute={this.state.childRoute}></Vertical>:''}
                                    </li>
                                                                       
                                    <li onMouseEnter={this.enterPage.bind(this, '加入我们', '/joinUs')}><NavLink activeClassName="cur-nav" to="/joinUs">加入我们</NavLink></li>
                                   
                                </ul>
                                {/* {exact严格匹配} */}
                                    <Route exact path= '/' component = {Home}></Route>                               
                                    <Route exact path= '/home' component = {Home}></Route>
                                    <Route exact path= '/enterChengtou' component = {enterChengtou}></Route>
                                    <Route exact path= '/corporateInformation' component = {corporateInformation}></Route>
                                    <Route exact path= '/classicHouse' component = {classicHouse}></Route>
                                    <Route exact path= '/joinUs' component = {JoinUs}></Route>                                       
                            </div>                                                 
                        </div> 
            </div>
        )
    }
    componentWillMount () {

    }
    componentDidMount ()  {
        // console.log(enterChengtou)
    }
    enterPage = (page, way) => {    // 该方法是鼠标移入导航时，显示对应的下拉导航,设置要去的页面的路由。
        this.setState({
            downListNav: page,
            childRoute: way
        })       
    }
    leaveNav = () => {  // 鼠标离开时
        this.setState({
            downListNav: ''
        })
    }
}

export default withRouter(Headers);