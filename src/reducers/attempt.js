import { GET_EXAM_QUESTIONS, START_EXAM, SET_SELECT, END_EXAM, GET_GRADE } from '../action/type'
const init = {
    exam: {},
    questions: [],
    grade: 0
}

export default function attempt(state = init, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_EXAM_QUESTIONS: return { ...payload }
        case SET_SELECT: return {
            ...state,
            questions: [...state.questions.map(item => {
                if (item.questionId === payload.questionId) {
                    item.correct = payload.correct;
                }
                return item;
            })]
        }
        case GET_GRADE: return { ...state, grade: payload }
        case END_EXAM: return init
        case START_EXAM:
        default: return { ...state };
    }
}