import { combineReducers } from 'redux'
import authRed from './auth'
import alert from './alert'
import examReducer from './exam';
import questions from './question';
import attempt from './attempt';
import theme from './theme';
export default combineReducers({
    auth: authRed,
    alert,
    exams: examReducer,
    questions: questions,
    attempt: attempt,
    theme
})