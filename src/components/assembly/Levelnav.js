import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../reduxModule/actions';
import PropTypes from 'prop-types';
import '../../static/pageStyle/Levelnav.scss';

//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
    return {
        initLevel: state.productReducer
    }
};
//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps);
    return {
        // pushLevel: () => dispatch(ownProps.pushLevel()),
        // deleteLevel: () => dispatch(ownProps.deleteLevel())
    }
};


class Levelnav extends Component {
    static propTypes = {
        payload: PropTypes.array
    }
    constructor (props) {
        super (props)
        this.state = {
                pageName: '横向导航',
                pageData: {
                    
                },
                levelnav: [],
                isGo: false
        }
    }
    
    render () {
        if (this.state.isGo) {   // js跳转方法一
            return <Redirect to={{pathname: '/home'}}></Redirect>
        }
        return (
            <div className="Levelnav">
                <ul className="ul-nav">
                    {
                        this.state.levelnav.map((item, index) => {
                            return (
                                <li key={index} onClick={this.goPage.bind(this, item)}>
                                    <span>{item}&gt;</span>                                  
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    componentWillMount () {

        this.upLevelData();
        if (typeof this.props.callback === 'function') {
            this.props.callback(this)
        }
    }
    componentDidMount () {
        console.log( this.props.initLevel, '此数据接收自redux里的数据' )

    }

    componentDidUpdate () {
        // this.upLevelData();  
    }
    childFn = () => {
        console.log('level子组件方法')
    }
    upLevelData = () => {
        let navArr = ['返回首页','当前位置'];
            navArr.push(this.props.parentData.parantName, this.props.parentData.curPostiton);
            this.setState({
                levelnav: navArr
            })
    }
    goPage = (str) => {
        // js跳转方法一，主要引入react的Redirect重定向组件，在render方法前执行js判断，true还是false来确定执行方法
        // js跳转方法二，使用react路由模块方法withRouter，在export default 导出时执行withRouter(当前组件名称)，
        // 然后在js方法体里使用this.props.history.push('/home')
        if (str === '返回首页') {
            this.setState({
                isGo: true
            })
            // this.props.history.push('/home')            
        }
    }
    mapStateToProps = (state) => {
        return {
           data:state.data
        }
     }
   
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Levelnav);