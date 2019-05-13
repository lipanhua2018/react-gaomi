import React, { Component } from 'react';

class List extends Component {
    constructor (props) {
        super (props)
        this.state = {
                pageName: '列表组件',
                listContent: [],
                pageData: {
                    
                }
        }
    }

    render () {
        return (
            <div className="List-root content-scroll">
                {
                    this.state.listContent.map((item, index) => {
                        return(<div className="row-list" key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                            <span>阅读全文</span>
                        </div>)
                    })
                }
            </div>
        )
    }
    componentWillMount () {
        this.setState({
            listContent: this.props.listContent
        })
    }
    componentDidMount () {
        
    }
}

export default List;
