import { combineReducers } from 'redux'
import profile from './profile/saga/reducer'
import toDoList from './to-do-list/saga/reducer'

const root = combineReducers({
    profile,
    toDoList,
})

export default root
