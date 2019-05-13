import { connect } from 'react-redux'
import Levelnav from '../Levelnav'
import * as actions from '../../reduxModule/actions';

//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};
//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        pushLevel: (...args) => dispatch(actions.pushLevel(...args)),
        deleteLevel: (...args) => dispatch(actions.deleteLevel(...args))
    }
};

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Levelnav)

