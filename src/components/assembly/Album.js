import React, { Component } from 'react';
import customFn from '../../static/js/customFn';
import '../../static/pageStyle/Album.scss';

class Album extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pageName: '翻页相册',
            sizeL: 0,
            sizeR: 1,
            bool: true,
            srcL: '../../static/img/1.jpg',
            srcR: '../../static/img/2.jpg',
            photoList: [
                {src: require('../../static/img/1.jpg')},
                {src: require('../../static/img/2.jpg')},
                {src: require('../../static/img/3.jpg')},
                {src: require('../../static/img/4.jpg')},
                {src: require('../../static/img/5.jpg')},
                {src: require('../../static/img/6.jpg')},
                {src: require('../../static/img/7.jpg')},
                {src: require('../../static/img/8.jpg')}
            ],                       
            pageData: {
                
            }

        }
    }

    render () {
        return (<div className="album-root">
            <div className="album-border">
                <div className="left-photo album-photo">
                    <div className="img-box" onClick={this.repalceImg.bind(this, 'left')}>
                        <img ref="albumImgL" src={this.state.photoList[this.state.sizeL].src} alt=''></img>
                    </div>
                    <p className="describe-text">
                        这就是一些文字描述，所以我随便打了好多好多好多好多好多好多好多好多
                        好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多
                        好多好多好多好多个得字。
                    </p>
                </div>
                <div className="right-photo album-photo">
                    <div className="img-box" onClick={this.repalceImg.bind(this, 'right')}>
                    <img ref="albumImgR" src={this.state.photoList[this.state.sizeR].src} alt=''></img>
                    </div>
                    <p className="describe-text">
                        这就是一些文字描述，所以我随便打了好多好多好多好多好多好多好多好多
                        好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多
                        好多好多好多好多个得字。
                    </p>
                </div>
            </div>
        </div>)
    }

    componentDidMount() {

    }

    repalceImg = (type) => {
        // console.log(type)
        let imgL = this.refs.albumImgL;
        let imgR = this.refs.albumImgR;
        if (type === 'left') { 
            if (this.state.bool) {
                this.setState({
                    bool: false
                })
                let sizeL = this.state.sizeL;
                let sizeR = this.state.sizeR;
                // console.log(sizeL, sizeR)
                if (sizeL === (this.state.photoList.length-1)) {    // 如果左图到达了最大张数                   
                    customFn.cartoon(imgL, {opacity: 30}, 100, () => {
                        sizeR ++; 
                        this.setState({
                            sizeL: 0,
                            sizeR: sizeR
                        })
                        customFn.cartoon(this.refs.albumImgL, {opacity: 100}, 100)
                    })                   
                    setTimeout(() => {
                        this.setState({
                            bool: true
                        })
                    }, 300) 
                    return;
                }
                if (sizeR === (this.state.photoList.length-1)) {    // 如果右边的图到达了最大张数
                    customFn.cartoon(imgL, {opacity: 30}, 100, () => {
                        sizeL ++;                               
                        this.setState({
                            sizeL: sizeL,
                            sizeR: 0
                        })                                          
                        customFn.cartoon(this.refs.albumImgL, {opacity: 100}, 100)                                         
                    })
                    setTimeout(() => {
                        this.setState({
                            bool: true
                        })
                    }, 300) 
                    return;
                }       
                customFn.cartoon(imgL, {opacity: 30}, 100, () => {
                    sizeL ++;
                    sizeR ++;                                 
                    this.setState({
                        sizeL: sizeL,
                        sizeR: sizeR
                    })                                          
                    customFn.cartoon(this.refs.albumImgL, {opacity: 100}, 100)                                         
                })               
                setTimeout(() => {
                    this.setState({
                        bool: true
                    })
                }, 300) 
            } else {
                console.log('别点那么快好不好')
            }   
                                 
        } else {
            if (this.state.bool) {
                this.setState({
                    bool: false
                })
                let sizeL = this.state.sizeL;
                let sizeR = this.state.sizeR;
                // console.log(sizeL, sizeR)
                if (sizeL === 0) {    // 如果左图到达了最小张数                   
                    customFn.cartoon(imgR, {opacity: 30}, 100, () => {
                        sizeR --; 
                        this.setState({
                            sizeL: this.state.photoList.length-1,
                            sizeR: sizeR
                        })
                        customFn.cartoon(this.refs.albumImgR, {opacity: 100}, 100)
                    })                   
                    setTimeout(() => {
                        this.setState({
                            bool: true
                        })
                    }, 300) 
                    return;
                }
                if (sizeR === 0) {    // 如果右边的图到达了最小张数
                    customFn.cartoon(imgR, {opacity: 30}, 100, () => {
                        sizeL --;                               
                        this.setState({
                            sizeL: sizeL,
                            sizeR: this.state.photoList.length-1
                        })                                          
                        customFn.cartoon(this.refs.albumImgR, {opacity: 100}, 100)                                         
                    })
                    setTimeout(() => {
                        this.setState({
                            bool: true
                        })
                    }, 300) 
                    return;
                }       
                customFn.cartoon(imgR, {opacity: 30}, 100, () => {
                    sizeL --;
                    sizeR --;                             
                    this.setState({
                        sizeL: sizeL,
                        sizeR: sizeR
                    })                                          
                    customFn.cartoon(this.refs.albumImgR, {opacity: 100}, 100)                                         
                })               
                setTimeout(() => {
                    this.setState({
                        bool: true
                    })
                }, 300) 
            } else {
                console.log('别点那么快好不好')
            }
        }
    }

    switchImg = (imgEl, direction) => {
        if (this.state.bool) {
            this.setState({
                bool: false
            })
            let sizeL = this.state.sizeL;
            let sizeR = this.state.sizeR;
            console.log(sizeL, sizeR)
            if (sizeL === (this.state.photoList.length-1)) {    // 如果左图到达了最大张数                   
                customFn.cartoon(imgEl, {opacity: 30}, 100, () => {
                    sizeR ++;
                    this.setState({
                        sizeL: 0,
                        sizeR: sizeR
                    })                    
                    customFn.cartoon(imgEl, {opacity: 100}, 100)
                })                   
                setTimeout(() => {
                    this.setState({
                        bool: true
                    })
                }, 300) 
                return;
            }
            if (sizeR === (this.state.photoList.length-1)) {    // 如果右边的图到达了最大张数
                customFn.cartoon(imgEl, {opacity: 30}, 100, () => {
                    sizeL ++;                               
                    this.setState({
                        sizeL: sizeL,
                        sizeR: 0
                    })                                                                                
                    customFn.cartoon(imgEl, {opacity: 100}, 100)                                         
                })
                setTimeout(() => {
                    this.setState({
                        bool: true
                    })
                }, 300) 
                return;
            }       
            customFn.cartoon(imgEl, {opacity: 30}, 100, () => {
                if (direction === 'left') {
                    sizeL ++;
                    sizeR ++;   
                } else {
                    sizeL --;
                    sizeR --; 
                }                                              
                this.setState({
                    sizeL: sizeL,
                    sizeR: sizeR
                })                                          
                customFn.cartoon(imgEl, {opacity: 100}, 100)                                         
            })               
            setTimeout(() => {
                this.setState({
                    bool: true
                })
            }, 300) 
        } else {
            console.log('别点那么快好不好')
        }
    }
}

export default Album;