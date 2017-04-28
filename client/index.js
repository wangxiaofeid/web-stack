import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router'

import routes from './router'
import './style/index.less'

const rootElement = document.getElementById('root')

// const history = syncHistoryWithStore(browserHistory, store)

// 注意 subscribe() 返回一个函数用来注销监听器
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// render(
//   <Provider store={store}>
//     <Router history={history} routes={routes} />
//   </Provider>,
//   rootElement
// )

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  rootElement
)
