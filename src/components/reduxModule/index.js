// npm install --save redux react-redux redux-thunk
// npm install --save-dev redux-logger

// redux核心库，react-redux帮助你完成数据订阅，
// redux-thunk可以放你实现异步action，redux-logger是redux的日志中间件
// import React from 'react';
// import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createStore } from 'redux';
import rootReducers from './reducer';

    let store = createStore(rootReducers);

    // console.log("initial state: ", store.getState());

export default store;