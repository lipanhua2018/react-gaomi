import React, { Component } from 'react';

class Paging extends Component {
    constructor (props) {
        super (props)
        this.state = {
                pageName: '分页组件',
                value: 1
                
        }
    }

    render () {
        return (
            <div className="paging-root">
               <span>
                   共<b>10</b>页
               </span>
               <span className="blue-span">
                   首页
               </span>
               <span className="blue-span">
                   上一页
               </span>
               <span className="blue-span">
                   下一页
               </span>
               <span>
                   第
                   <input type="text" defaultValue={this.state.value}></input>
                   页
               </span>
               <span className="blue-span">
                   跳转
               </span>
            </div>
        )
    }
    componentWillMount () {
        
    }
    componentDidMount () {
        
    }
}

export default Paging;
