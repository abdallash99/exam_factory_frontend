import { CREATE_EXAM, GET_MY_EXAMS, GET_EXAMS, EXAM_FAIL, ADD_EXAM, DELETE_EXAM, SET_EXAM, UPDATE_EXAM } from '../action/type';
import { GET_EXAM_GRADE } from './../action/type';
const init = {
    myExams: [],
    Exams: [],
    resultExams: [],
    exam: null,
    examGrade: []
}

export default function examReducer(state = init, action) {
    const { type, payload } = action;
    switch (type) {
        case CREATE_EXAM: return { ...state, myExams: [...init.myExams, payload] }
        case GET_MY_EXAMS: return { ...state, myExams: [...payload] }
        case GET_EXAMS: return { ...state, Exams: [...payload.finalExams], resultExams: [...payload.result] }
        case DELETE_EXAM: return { ...state, myExams: [...state.myExams.filter((item) => item.examId !== payload)] }
        case SET_EXAM: return { ...state, exam: payload }
        case GET_EXAM_GRADE: return { ...state, examGrade: [...payload] }
        case ADD_EXAM:
        case EXAM_FAIL:
        case UPDATE_EXAM:
        default: return state;
    }
}