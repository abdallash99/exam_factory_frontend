import { CREATE_EXAM, DELETE_EXAM, GET_MY_EXAMS, GET_EXAMS, UPDATE_EXAM } from '../action/type';
const init = {
    myExams: [],
    Exams: []
}

export default function examReducer(state = init, action) {
    const { type, payload } = action;
    switch (type) {
        case CREATE_EXAM: return { ...state, myExams: [...init.myExams, payload] }
        default: return state;
    }
}