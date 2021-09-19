import todoReducers from './todoReducers'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    todo: todoReducers
})

export default allReducers