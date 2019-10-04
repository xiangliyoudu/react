
import { combineReducers } from 'redux'

import { DELETE_COMMENT, ADD_COMMENT, RECEIVE_COMMENTS } from './action-types'

const initComments = []
function comments(state = initComments, action) {
    switch (action.type) {
        case ADD_COMMENT: {
            return [action.data, ...state]
        }
        case DELETE_COMMENT: {
            // 过滤index匹配的项，返回新数组
            return state.filter((item, index) => (index !== action.data))
        }
        case RECEIVE_COMMENTS: {
            return action.data
        }
        default: {
            return state
        }
    }
}

function comments2(state = initComments, action) {
    switch (action.type) {
        case ADD_COMMENT: {
            return [action.data, ...state]
        }
        case DELETE_COMMENT: {
            // 过滤index匹配的项，返回新数组
            return state.filter((item, index) => (index !== action.data))
        }
        case RECEIVE_COMMENTS: {
            return action.data
        }
        default: {
            return state
        }
    }
}


export default combineReducers({
    comments,
    comments2
})