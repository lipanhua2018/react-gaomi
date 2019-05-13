import React from 'react';
import ReactDOM from 'react-dom';
import './static/pageStyle/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Params from './components/common/params';
import { Provider } from 'react-redux';
import store from './components/reduxModule/index';
import * as actions from './components/reduxModule/actions';

    // 注意 subscribe() 返回一个函数用来注销监听器
    // let unsubscribe = store.subscribe(() =>
    //     // 这里是获取初始状态   
    //     console.log(store.getState())       
    // );

    // store.dispatch(actions.deletePublicFn('Coffee 500ml', 1, 250));
    store.dispatch(actions.updatePublicFn('Flour 1kg', 2, 110));
    // store.dispatch(actions.addPublicFn('Juice 2L', 1, 250));
    // store.dispatch(actions.pushLevel('走进城投'));
    store.dispatch(actions.pushLevel('走进城投'));
    // store.dispatch(actions.deleteLevel('走进城投'));
    // 停止监听 state 更新
    // unsubscribe();
    console.log(store.getState());
// React.$param = new Params()

// console.log(React)

ReactDOM.render(
    <Provider store={store}>
        {<App />}
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
