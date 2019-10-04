import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { counter } from './reducers'

// 生成store对象
export const store = createStore(
    counter,
    applyMiddleware(thunk) // 应用异步中间件：thunk
) // 内部会第一次调用reducer函数得到初始state