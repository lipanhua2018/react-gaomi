import React, { Component } from 'react';

class Zhici extends Component {
    constructor (props) {
        super (props)
        this.state = {
                pageName: '总经理致辞',                
        }
    }

    render () {
        return (
            <div className="zhici-root child-root">
                <h2 className="title-h2">总经理致辞</h2>
                <p className="p">衷心感谢关注高密市城市建设投资集团有限公司的每一位朋友，因为您的理解和信任、关心与支持，高密市城市建设投资集团有限公司得以稳步、快速的发展。</p>
                <p className="p">公司的成立和运营,为高密的城市经营及城市发展铺垫了雄厚的基础。本公司严谨的制度,规范的管理,优质的服务和雄厚的实力在社会各界赢得了广泛的赞誉。公司一贯秉承“促进发展，造福社会”的宗旨，为高密的经济社会发展和市民生活水平的提高做出了应有的贡献。在事业发展过程中，得到了社会各界的热心关爱和大力支持。在此，我代表公司全体员工向大家致以衷心的感谢！</p>
                <p className="p">精工细作，我们脚踏实地；胸怀天下，我们志存高远！</p>
                <p className="p">怀着时不我待的紧迫感、舍我其谁的使命感，我们深信，城投集团一定能快速、健康的成长。我们将与大家一道，一如既往地抢抓机遇，开拓创新，与时俱进，与城市共享辉煌！</p>                
                <div className="div-b"><b>总经理：郑立强</b></div>
            </div>
        )
    }

    componentDidMount () {
        // dom加载完毕的生命周期函数
    }
}
export default Zhici;