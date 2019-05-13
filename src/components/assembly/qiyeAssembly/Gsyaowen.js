import React, { Component } from 'react';
import Loop from './Loop';
import List from './List';
import Paging from './Paging';

class Gsyaowen extends Component {
    constructor (props) {
        super (props)
        this.state = {
                pageName: '公司要闻',
                listContent: [{
                    title: '公司要闻列表标题呀标题呀题呀标题呀A',
                    content: '公司要闻列表内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀A'
                },{
                    title: '公司要闻列表标题呀标题呀题呀标题呀B',
                    content: '公司要闻列表内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀B'
                },{
                    title: '公司要闻列表标题呀标题呀题呀标题呀C',
                    content: '公司要闻列表内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀C'
                },{
                    title: '公司要闻列表标题呀标题呀题呀标题呀D',
                    content: '公司要闻列表内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀D'
                },{
                    title: '公司要闻列表标题呀标题呀题呀标题呀E',
                    content: '公司要闻列表内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀内容呀D'
                }],
                photoList:  [
                    {src: require('../../../static/img/1.jpg')},
                    {src: require('../../../static/img/2.jpg')},
                    {src: require('../../../static/img/3.jpg')},
                    {src: require('../../../static/img/4.jpg')},
                    {src: require('../../../static/img/5.jpg')},
                    {src: require('../../../static/img/6.jpg')},
                    {src: require('../../../static/img/7.jpg')},
                    {src: require('../../../static/img/8.jpg')}
                ],
                pageData: {
                    
                }
        }
    }

    render () {
        return (
            <div className="gsyaowen-root content-root">
                <Loop ref="loop" photoList={this.state.photoList}></Loop>
                <List ref="list" listContent={this.state.listContent}></List>
                <Paging></Paging>
            </div>
        )
    }
    componentWillMount () {
        
    }
    componentDidMount () {
        
    }
}

export default Gsyaowen;
