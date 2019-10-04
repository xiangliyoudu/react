/**包含所有的action creator */

import { ADD, MINUS } from './action-types'

// add action
export const add = (step) => {
    return { type: ADD, data: step }
}

// add action
export const minus = (step) => {
    return { type: MINUS, data: step }
}