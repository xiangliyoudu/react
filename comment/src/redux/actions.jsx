/**
* 所有的action creator
*/
import { ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS } from './action-types'
// 同步添加
export const addComment = (comment) => ({ type: ADD_COMMENT, data: comment })

// 同步删除
export const deleteComment = (index) => ({ type: DELETE_COMMENT, data: index })

// 同步接收comments
const receiveComments = (comments) => ({ type: RECEIVE_COMMENTS, data: comments })

// 异步获取数据
export const getComments = () => {
    return dispatch => {
        // 模拟发送ajax，获取数据
        setTimeout(() => {
            const comments = [
                { user: 'mike', content: 'you are beautiful' },
                { user: 'lucy', content: 'yeah, you are right ^_^' }
            ]
            // 分发同步action,
            dispatch(receiveComments(comments))
        }, 1000);
    }
}