import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Vertical extends Component {
    constructor (props) {
        super (props)
        this.state = {
                pageName: '垂直下拉导航'      
        }
    }

    render () {
        return (
            <ul className="child-nav">
                {
                    this.props.childNav.map((item, index) => {
                        return (
                            <li key = {index} onClick = {this.goChildRoute.bind(this, item, index)}> {item.name} </li>
                            )
                        })
                    }
            </ul>
        )
    }

    componentDidMount () {
        // dom加载完毕的生命周期函数
        // console.log(this.props.childRoute)
        // console.log(this.props)
    }
    goChildRoute = (item, index) => {
        item.index = index;
        // console.log(this.props.childRoute, item)
        this.props.history.push({pathname: `${this.props.childRoute}`, state: {data: item}})
    }

}
export default withRouter(Vertical);