import React, { Component } from 'react';
import '../../static/pageStyle/Jiugongge.scss';
import Paging from './qiyeAssembly/Paging';
import Jdxiangqing from './Jdxiangqing';

class Jiugongge extends Component {
    constructor (props) {
        super (props)
        this.state = {
                pageName: '九宫格图片组件',
                nineImg: [],
                pageData: {
                   
                },
                lookDetails: false,
                project: {},
                projectName: ''
        }
    }

    componentWillMount () {
        // console.log(React, 22)
        this.setState({
            nineImg: this.props.photoList
        })
    }
    render () {
        if (!this.state.lookDetails) {
            return (
                <div className="jiugongge-root">
                    {
                        this.state.nineImg.map((imgList, idx) => {
                            return (
                                <div key={idx} className={idx===1?'jiugongge-row row-margin':'jiugongge-row'}>
                                    {imgList.map((item, index) => {
                                        return (<div key={index} className="jiugongge-cell" onClick={this.lookDetails.bind(this, item)}>
                                            <img src={item.src} alt=""></img>
                                            <div className="postiton-text">
                                                {item.name}
                                            </div>
                                        </div>)
                                    })}
                                </div>
                            )
                        })
                    }
                    <div className="paging-area">
                        <Paging></Paging>
                    </div>              
                </div>
            )
        } else {
            return (
                <Jdxiangqing project={this.state.project} closeDetails={this.closeDetails.bind(this)}></Jdxiangqing>
            )
        }       
    }

    lookDetails = (project) => {    // 查看详情
        // console.log(project)
        this.setState({
            lookDetails: true,
            project: project,
            projectName: project.name
        })
    }
    closeDetails = (bool) => {  // 关闭详情
        // console.log('我被触发了', bool);
        this.setState({
            lookDetails: bool
        })
    }
}

export default Jiugongge;