// 经典楼盘
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Levelnav from '../assembly/Levelnav';
import Sidenav from '../assembly/Sidenav';
import Footer from '../assembly/Footer';
import Onebanner from '../assembly/Onebanner';
import Jiugongge from '../assembly/Jiugongge';
import { connect } from 'react-redux';
import * as actions from '../reduxModule/actions';

//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
    // console.log(state)
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

class classicHouse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            childNav: ['经典楼盘', '成功之作'],
            nineImgA: [[{
                src: require('../../static/img/fdc1.jpg'),
                name: '中昂翠屿湖',
                date: '2016-09-10 10:30:00',
                describe: '中昂翠屿湖项目位于广云路和兴业路交界，周围2.5公里以内主要有华涌幼儿园、石门实验中学、依云童梦幼儿园、石门高级中学、狮中幼儿园、狮城中学、新城医院(塘新中路)等，周边配套有待发展，居住舒适，环境良好。'
            },{
                src: require('../../static/img/fdc2.jpg'),
                name: '狮山时代领峰',
                date: '2015-08-15 09:10:00',
                describe: '狮山时代领峰项目位于白坭镇科技大道3号，周围2.5公里内配套设施学校有凯旋幼儿园、灶头幼儿园、白坭中心幼儿园、三水白坭中学、小英才幼儿园、白坭中心小学，商场有宝盈和谐广场、鑫鹏信购物广场，医院有白坭社区卫生服务中心、白坭华立医院等等，周边配套多样，居住舒适。'
            },{
                src: require('../../static/img/fdc3.jpg'),
                name: '万科魅力之城',
                date: '2017-07-05 08:45:00',
                describe: '万科魅力之城项目位于佛山西河路，附近学校主要有时代城中英文幼儿园、御龙湾幼儿园、一级职业信息培训学院，商场主要有时代广场(北江大道)，医院主要有同方河口医院等，周边配套有待发展，生活环境舒适。'
            }],[{
                src: require('../../static/img/fdc4.jpg'),
                name: '海逸桃花源记',
                date: '2018-05-01 11:30:00',
                describe: '海逸桃花源记项目位于西南街道金泉大道，项目周边配套有公交站点、御江南明珠幼儿园、西南第六小学、金花银花购物广场、南岸社区卫生服务站，所需生活配套多样。'
            },{
                src: require('../../static/img/fdc5.jpg'),
                name: '三水冠军城',
                date: '2018-08-10 12:00:00',
                describe: '三水冠军城项目位于芦苞大道新昌小镇东门侧，附近2.5公里之内有学校：独树岗小学，商场：佛山新昌奥特莱斯广场等等，其他配套欠缺，周边配套有待发展。'
            },{
                src: require('../../static/img/fdc6.jpg'),
                name: '龙光玖龙湖',
                date: '2015-12-12 12:30:00',
                describe: '龙光玖龙湖项目位于西南街道健力宝南路与广海大道交叉处，项目占地12万㎡，建筑面积70万㎡，共18栋住宅楼组成，小区内部自建10万方封闭商业街，以及8万㎡绿化生态花园'
            }],[{
                src: require('../../static/img/fdc7.jpg'),
                name: '碧桂园奥斯汀',
                date: '2016-04-05 14:30:00',
                describe: '碧桂园奥斯汀项目位于仙湖旅游度假区“马场”地段（仙湖度假区旁），附近2.5公里之内学校有仙岗幼儿园、祈福英语实验学校、祈福英语实验幼儿园、灶头幼儿园、西城幼儿园(工业大道)，购物商场有清塘潭边购物中心等在，周边配套有待发展。'
            },{
                src: require('../../static/img/fdc8.jpg'),
                name: '新城招商誉府',
                date: '2018-09-18 10:38:00',
                describe: '新城招商誉府位于三水云东海街道南丰大道99号，位置属于佛山三水TOD新城核心板块，三水新城CBD商务水轴地带。占地面积20万㎡，总建筑面积30万㎡，绿化率35%。'
            },{
                src: require('../../static/img/fdc9.jpg'),
                name: '恒大御湖湾',
                date: '2015-05-10 17:35:00',
                describe: '恒大御湖湾府目前在售二期5/6栋高层电梯洋房单位，建面为131-150㎡四至五房单位，楼高48层，3梯4户设计，带装修售价为26000元/㎡。项目后期将推出二期叠墅产品组团锦墅，现已启动诚意登记，分为上、中、下三叠，主推户型建面上叠建面154㎡、中叠建面158㎡、下叠建面164㎡四居室。上叠带露台，下叠带庭院。'
            }]],
            nineImgB: [[{
                src: require('../../static/img/fdc15.jpg'),
                name: '富丰君御',
                date: '2014-09-14 14:30:00',
                describe: '富丰君御项目预计8月推出临街商铺，建面约54㎡，层高6米，目前接受登记中。此外项目在售高层电梯洋房产品，户型涵盖建面为89-160㎡三至四房单位，带装修发售，均价约12500元/㎡，楼高32层，2梯4户设计，预计2019年年底可交付使用。'
            },{
                src: require('../../static/img/fdc12.jpg'),
                name: '嘉濠雅苑',
                date: '2017-01-10 10:10:00',
                describe: '嘉濠雅苑项目在售高层电梯洋房产品，户型建筑面积为95-123㎡单位，三至四房设计，带装修发售，均价约12500元/㎡，楼高30层，2梯4户设计。'
            },{
                src: require('../../static/img/fdc13.jpg'),
                name: '雅瑶绿洲(别墅)',
                date: '2016-08-18 16:38:00',
                describe: '雅瑶绿洲项目位于佛山顺德容桂容奇大桥东侧200米（顺德区容桂容奇大道东以北、祥和过江隧道以西）。目前在售高层电梯洋房产品，户型为建面95-120㎡三至四房单位，楼高33-34层，2梯4户或2梯5户设计，户户望江，通风采光俱佳，带装修发售，均价21000元/㎡。'
            }],[{
                src: require('../../static/img/fdc14.jpg'),
                name: '碧桂园岭南盛世',
                date: '2018-09-19 09:50:00',
                describe: '碧桂园岭南盛世项目位于佛山市禅城区桂澜路与绿景东路交汇处。项目预计5月底开盘，首推20/21座高层电梯洋房产品，户型主打建面100-145㎡三至四房单位，带装修发售，具体开盘时间和售价待定，楼高32层，2梯3户设计。全新带装修样板房已开放，预计2019年年底可交楼。'
            },{
                src: require('../../static/img/fdc10.jpg'),
                name: '融创湖滨世家',
                date: '2017-09-17 10:45:00',
                describe: '融创湖滨世家项目洋房新品具体开售时间和售价待定，新品户型建筑面积为113—159㎡三至四房单位，楼高46层，3梯4户设计，带装修发售，样板间已对外开放。预计2018年9月交付使用，物业费为3.5元/月/㎡。项目位于禅城区文华路与彩虹路交汇处（文华公园东侧）。'
            },{
                src: require('../../static/img/fdc11.jpg'),
                name: '绿地璀璨天城',
                date: '2015-11-11 11:30:00',
                describe: '绿地璀璨天城项目销售中心以及样板房已开放，洋房涵盖建面为约96-137㎡三至四房单位，平层公寓涵盖42-57㎡一到两房单位，以及建面44-69㎡复式loft公寓，目前已接收诚意登记中。预计8月将推售T3栋复式loft公寓，售价待定。项目位于禅城区季华一路29号北侧。'
            }],[{
                src: require('../../static/img/fdc17.jpg'),
                name: '富力广场(商住)',
                date: '2018-03-10 15:45:00',
                describe: '富力广场项目77座建面95/130㎡江景洋房新品待推，现已开启客户诚意登记，样板房现已开放。另外，目前在售壹公馆2座公寓产品，建筑面积涵盖50-85㎡，湖景复式小面积产品，层高4.5米，均价16000元/㎡，带装修出售。项目位于佛山禅城区季华西路绿岛湖禅港路68号。'
            },{
                src: require('../../static/img/fdc18.jpg'),
                name: '奥园上林一品',
                date: '2016-06-16 13:45:00',
                describe: '奥园上林一品项目位于南海区桂城平洲公园东侧。目前在售少量3座大户型洋房尾货，户型建筑面积涵盖125-150㎡三至四房单位，楼高20层，2梯4户设计，所剩房源位于低层，毛坯发售，均价约17000元/㎡，预计2018年7月可交付使用。项目公寓产品已售完。'
            },{
                src: require('../../static/img/fdc16.jpg'),
                name: '鸿晖依岸康堤(别墅)',
                date: '2017-07-27 17:45:00',
                describe: '鸿晖依岸康堤项目销售中心已关闭，目前项目暂无房源在售。2/3座洋房新品推出时间待定，户型建面为98-141㎡三至四房单位，带装修发售，2梯4户设计，具体售价待定，预计2018年年底交楼，物业费为2.47元/月/㎡。项目位于南海区桂城南平西路与桂澜路交界处（礌岗地铁B出口）。'
            }]],
            pageData: {
                index: 0,
                parantName: '经典楼盘',
                sideName: '经典案例',
                curPostiton: ''
            },
            showContent: '',
            levelObj: null
        }
    }

    render () {
        return (
            <div className="classicHouse-root page-root">
                <Onebanner ref="onebanner"></Onebanner>
                <Levelnav ref="levelnav" parentData={this.state.pageData} callback={this.childCallback}></Levelnav>
                <div className="content-area">
                    <div className="side-area">
                        <Sidenav ref="sidenav" listNav={this.state.childNav} parentData={this.state.pageData} methods={this.switchContent}></Sidenav>
                    </div>
                    {/* 右侧内容区域的显示 */}
                    <div className="content-box">
                        {this.state.showContent === '经典楼盘'?<Jiugongge photoList={this.state.nineImgA}></Jiugongge>:''}
                        {this.state.showContent === '成功之作'?<Jiugongge photoList={this.state.nineImgB}></Jiugongge>:''}
                    </div>
                </div>
                <Footer ref="footer"></Footer>
            </div>
        )
    }

    componentWillMount () {
        if (this.props.location.state.data && this.props.location.state.data.name) { 
            this.switchContent(this.props.location.state.data.name, this.props.location.state.data.index)
        }
    }
    childCallback = (self) => {
        this.setState({
            levelObj: self
        })
    }

    switchContent = (test, index) => { // 传递给侧边导航组件使用的方法，切换右侧内容
        let obj = Object.assign({}, this.state.pageData, {index: index, curPostiton: test})       
        this.setState({
            showContent: test,
            showPage: test,
            pageData: obj
        })
        if (this.state.levelObj) {
            this.state.levelObj.upLevelData()
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(classicHouse));