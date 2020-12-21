import { CREATE_QUESTION, QUESTION_FAIL, GET_QUESTIONS, DELETE_QUESTION, UPDATE_QUESTION } from '../action/type'
const init = {
    myQuestions: []
}

export default function questions(state = init, action) {
    const { type, payload } = action;
    switch (type) {
        case CREATE_QUESTION: return { ...state, myQuestions: [...state.myQuestions, payload] }
        case GET_QUESTIONS: return { ...state, myQuestions: [...payload] }
        case DELETE_QUESTION: return { ...state, myQuestions: [...state.myQuestions.filter((item) => item.questionId !== payload)] }
        case UPDATE_QUESTION: return { ...state, myQuestions: [...state.myQuestions.filter((item) => item.questionId !== payload.questionId), payload] }
        case QUESTION_FAIL:
        default: return state;
    }
}