import { CREATE_QUESTION, GET_EXAM_QUESTIONS, QUESTION_FAIL, GET_QUESTIONS, DELETE_QUESTION, UPDATE_QUESTION } from './type'
const init = {
    myQuestions: [],
    questions: []
}

export default function examReducer(state = init, action) {
    const { type, payload } = action;
    switch (type) {
        case CREATE_QUESTION: return { ...state, myQuestions: [...init.myQuestions, payload] }
        case GET_QUESTIONS: return { ...state, myQuestions: [...payload] }
        case GET_EXAM_QUESTIONS: return { ...state, questions: [...payload] }
        case DELETE_QUESTION: return { ...state, myQuestions: [...state.myQuestions.filter((item) => item.questionId !== payload)] }
        case UPDATE_QUESTION: return { ...state, myQuestions: [...state.myQuestions.filter((item) => item.questionId !== payload.questionId), payload] }
        case QUESTION_FAIL:
        default: return state;
    }
}