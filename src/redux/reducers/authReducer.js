import {LOGIN_SUCCESS, REGISTER_SUCCESS, LOGIN_FAIL, REGISTER_FAIL} from '../types/authTypes';

const REGISTER = 'REGISTER';
const LOGIN = 'LOGIN';

const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                error: null,
            };
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };
        case REGISTER:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: null,
            };
        case LOGIN:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: null,
            };
        default:
            return state;
    }
};

export default authReducer;
