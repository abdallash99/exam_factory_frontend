import { combineReducers } from 'redux'
import authRed from './auth'
import alert from './alert'
import examReducer from './exam';
export default combineReducers({
    auth: authRed,
    alert,
    exams: examReducer
})