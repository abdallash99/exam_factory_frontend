import { combineReducers } from 'redux'
import authRed from './auth'
import alert from './alert'
import examReducer from './exam';
import questions from './question';
import attempt from './attempt';
export default combineReducers({
    auth: authRed,
    alert,
    exams: examReducer,
    questions: questions,
    attempt: attempt
})