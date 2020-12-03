import { LOGIN, SIGNUP_FAIL, LOGUT, SIGNUP, LOGIN_FAIL, LOAD, LOAD_FAIL, GET_USERS, GET_USERS_FAIL } from '../action/type';
const auth = {
    isAuth: false,
    isLoading: true,
    isAdmin: false,
    users: []
}

export default function authRed(state = auth, action) {
    const { type, payload } = action;
    switch (type) {
        case LOAD:
        case SIGNUP:
        case LOGIN: return { ...state, isLoading: false, isAuth: true, isAdmin: payload }
        case LOGUT:
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case LOAD_FAIL: return { ...state, isLoading: false, isAuth: false }
        case GET_USERS: return { ...state, users: payload }
        case GET_USERS_FAIL:
        default: return state;
    }
}