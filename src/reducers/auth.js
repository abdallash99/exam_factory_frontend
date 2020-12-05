import { LOGIN, SIGNUP_FAIL, LOGUT, SIGNUP, LOGIN_FAIL, LOAD, LOAD_FAIL } from '../action/type';
const auth = {
    isAuth: false,
    isLoading: true,
}

export default function authRed(state = auth, action) {
    const { type, payload } = action;
    switch (type) {
        case LOAD:
        case SIGNUP:
        case LOGIN: return { ...state, isLoading: false, isAuth: payload }
        case LOGUT:
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case LOAD_FAIL: return { ...state, isLoading: false, isAuth: false }
        default: return state;
    }
}