import React, { Component } from 'react';
import '../../static/pageStyle/Footer.scss';

class Footer extends Component {
    constructor (props) {
        super (props)
        this.state = {
                pageName: '页脚',
                pageData: {
                   
                }
        }
    }

    render () {
        return (
            <div className="footer-root">
                <div>版权所有：高密市城市建设投资集团有限公司 未经授权禁止复制或建立镜像</div>
                <div>Copyright © 2016-2017 Gaomi urban construction investment development Co., LTD 鲁ICP备11021581号</div>
                <div>地址：高密市康城大街（东）2999号 邮编：261500 电话：0536-5608011</div>
                <div>技术支持:北京家源树科技有限公司 <span className="icon-book"></span></div>
            </div>
        )
    }
}

export default Footer;