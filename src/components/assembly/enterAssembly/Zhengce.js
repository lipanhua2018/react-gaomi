import React, { Component } from 'react';

class Zhengce extends Component {
    constructor (props) {
        super (props)
        this.state = {
                pageName: '政策法规',
                zhengceList: [
                    {catalog: '中华人民共和国建筑法'},
                    {catalog: '城市上屏房预售管理办法'},
                    {catalog: '城市房地产开发经营管理条例'},
                    {catalog: '中华人民共和国城市规划法'},
                    {catalog: '房地产广告发布暂行规定'},
                    {catalog: '商品房销售管理办法'},
                    {catalog: '中华人民共和国招标投标法'}
                ]   
        }
    }

    render () {
        return (
            <div className="Zhengce-root child-root"> 
                {
                    this.state.zhengceList.map((item, index) => {
                        return (<div className="div-catalog" key={index}><h3>{item.catalog}</h3></div>)
                    })
                }             
                
            </div>
        )
    }

    componentDidMount () {
        // dom加载完毕的生命周期函数
    }
}
export default Zhengce;