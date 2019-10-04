/**核心管理对象 */
import { createStore, applyMiddleware } from 'redux'

import reducers from './reducers'
import thunk from 'redux-thunk'


export default createStore(
    reducers,
    applyMiddleware(thunk)
)   