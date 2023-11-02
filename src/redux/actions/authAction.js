import axios from 'axios';
import {LOGIN_SUCCESS, REGISTER_SUCCESS, LOGIN_FAIL, REGISTER_FAIL} from '../types/authTypes';
import accountApi from '../../apis/accountApi';

export const login = (username,password) => async (dispatch) => {
    try {
        const res = await accountApi.postLogin();
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.msg,
        });
    }
};

export const register = (firstName, lastName, email, password) => async (dispatch) => {
    try {
        const res = await accountApi.postRegisterAccount(firstName, lastName,email, password);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res,
        });
    } catch (err) {
        dispatch({
            type: REGISTER_FAIL,
            payload: err,
        });
    }
};
