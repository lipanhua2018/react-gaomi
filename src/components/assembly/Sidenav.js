import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reduxModule/actions';
import '../../static/pageStyle/Sidenav.scss';
// import common from '../common/common';

//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
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

class Sidenav extends Component {
    constructor (props) {
        super (props)
        this.state = {
                pageName: '侧边导航',
                listNav: [],
                sideName: '',
                pageData: {
                    
                }
        }
    }

    render () {
        return (
            <div className="side-root">
                <h2 className="side-title">{this.state.sideName}</h2>
                <p className="side-p">Focus On</p>
                <ul className="side-ul" ref="sideUl">
                    {
                        this.state.listNav.map((item, index) => {
                            return (
                                // <li key={index} className={!index?'cur-li':''}>{item}</li>
                                <li key={index}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    componentWillMount () {
        // console.log(this.props.parentData)
        // 组件加载时的生命周期函数
        let name = this.state.sideName;       
        let listNav = this.state.listNav;
            listNav = listNav.concat(this.props.listNav);
            name = this.props.parentData.sideName;
            this.setState({
                listNav: listNav,
                sideName: name
            })

        
    }
    componentDidMount () {
        // dom加载完毕的生命周期函数
        // common.switchClassname(this.refs.sideUl, 'cur-li');
        // methods 执行父组件方法 父组件传过来的方法，该方法需传递一个文本值
        this.setHighlight(this.props.parentData)       
    }

    setHighlight = (data) => {  // 设置点击当前的高亮
        // console.log(data)
        let parent = this.refs.sideUl;
        let node = [];
        let childlist = parent.children;
        for (const el of childlist) {
            node.push(el)
        }
        node[data.index].classList.add('cur-li');   // 设置默认进入当前页后，当前侧边导航的高亮
        node.map((item, index) => { // 设置点击后的高亮           
            item.onclick = () => {               
            for (let el of childlist) {
                el.classList.remove('cur-li')
                }
            item.classList.add('cur-li');
                this.props.methods(item.innerText, index);
                this.props.pushLevel([data.parantName, item.innerText]);
            }
            return index;
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidenav);