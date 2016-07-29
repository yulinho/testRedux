
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import { apiFetchDesks ,getBills ,getOrders ,apiFetchCates , apiFetchMenus} from './actions'


import thunk from 'redux-thunk';

// let store = createStore(todoApp) //这里的 todoApp 就是刚才的 reducers 里面的函数

const store = createStore(
  todoApp,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(thunk)
);

// let store = createStore(todoApp, window.devToolsExtension && window.devToolsExtension());

store.dispatch(apiFetchDesks());
store.dispatch(apiFetchCates());
store.dispatch(apiFetchMenus());

// store.dispatch(getBills(store.dispatch,store));
// store.dispatch(getOrders(store.dispatch));
//Store 就是把 Reducer 和 action 联系到一起的对象。Store 有以下职责：
// 维持应用的 state；
// 提供 getState() 方法获取 state；
// 提供 dispatch(action) 方法更新 state；
// 通过 subscribe(listener) 注册监听器；

// 然后你可以通过 dispatch 一个 action 来让它改变状态：
// store.dispatch( changeText() );
// store.getState(); // { text : 'Hello Stark' }

render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
)


var reactRoot = document.querySelector('div[data-reactroot]');   
reactRoot.className = "full";

// console.log("done")