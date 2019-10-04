/**包含所有的action creator 
 * 同步 action：返回一个对象
 * 异步 action：返回一个函数
*/

import { ADD, MINUS } from './action-types'

// add action
export const add = (step) => {
    return { type: ADD, data: step }
}

// minus action
export const minus = (step) => {
    return { type: MINUS, data: step }
}

// async add action
export const addAsync = (step) => {

    return (dispatch) => {
        // 异步代码
        setTimeout(() => {
            // 1 秒后才分发 action
            dispatch(add(step))
        }, 1000);
    }
}