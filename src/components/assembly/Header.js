import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
// 相对react-router之前版本 react-router4通过withRouter获取history
import '../../static/pageStyle/header.scss'
import Home from '../page/home';
import JoinUs from '../page/joinUs';
import enterChengtou from '../page/enterChengtou';
import corporateInformation from '../page/corporateInformation';
import classicHouse from '../page/classicHouse';
import common from '../common/common';

class Header extends Component {
    constructor (props) {
        super (props)
        this.state = {
                pageName: '页头',
                pageData: {
                    src: require('../../static/img/commonImg/logo.png')
                },
                dongtai: '动态路由传值',
                jumpPage: false
        }
    }

    render() {
        return (
            <div className="header-root" ref="headRoot">           
                    {<Router>
                        <div className="heade-route">                            
                            <div className="navigation-box">
                                <h1 className="logo-box">
                                    <img src={this.state.pageData.src} alt="logo"></img>
                                </h1>
                                <ul className="menu-nav" ref="menuNav">
                                    <li className="cur-nav" onClick={this.goHome}>
                                        <Link to="/home/data">首页</Link>
                                    </li>
                                    <li>
                                        <Link to="/enterChengtou?id=123456789">走进城投</Link>
                                    </li>
                                    <li>
                                        <Link to="/corporateInformation">企业资讯</Link>
                                    </li>
                                    <li>
                                        <Link to="/classicHouse">经典楼盘</Link>
                                    </li>
                                    <li>
                                        <Link to="/joinUs">加入我们</Link>
                                    </li>
                                </ul>
                                {/* {exact严格匹配,info是动态路由里取值的key,Link to上面的data 是数据} */}
                                <Route exact path= '/' component = {Home}></Route>
                                <Route path= '/home/:info' component = {Home}></Route>
                                <Route path= '/enterChengtou' component = {enterChengtou}></Route>
                                <Route path= '/corporateInformation' component = {corporateInformation}></Route>
                                <Route path= '/classicHouse' component = {classicHouse}></Route>
                                <Route path= '/joinUs' component = {JoinUs}></Route>
                            </div>
                        </div>
                    </Router>
                }
            </div>
        )
    }
    componentDidMount () {
        common.switchClassname(this.refs.menuNav, 'cur-nav')
    }   
    goHome = () => {
        // withRouter(Home)
        this.props.history.push(Home)
        // console.log(withRouter)
        this.setState({
            jumpPage: true
        })
    }
}
// export default withRouter(Header);
export default Header;