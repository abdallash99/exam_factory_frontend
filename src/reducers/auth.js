import { LOGIN, SIGNUP_FAIL, LOGUT, SIGNUP, LOGIN_FAIL, LOAD, LOAD_FAIL } from '../action/type';
const auth = {
    isAuth: false,
    isLoading: true,
    email: null
}

export default function authRed(state = auth, action) {
    const { type, payload } = action;
    switch (type) {
        case LOAD:
        case LOGIN: return { ...state, isLoading: false, isAuth: payload && payload.attributes ? payload.attributes.email_verified : false, email: payload.attributes.email }
        case LOGUT:
        case SIGNUP:
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case LOAD_FAIL: return { ...state, isLoading: false, isAuth: false }
        default: return state;
    }
}