import axios from 'axios';
import axiosAuth from '../auth/axiosAuth';

//Actions for login operation 

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_RESOLVED = 'LOGIN_RESOLVED';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START });

    return axios
        .post('https://dev-desk-queue.herokuapp.com/', credentials)
        .then(res => {
            if (res.status === 200){
                dispatch({
                    type: LOGIN_SUCCESS,
                    user: res.data.user,
                    token: res.data.token,
                    status: 'success',
                    message: res.data.message
                });
                setTimeout(() => 
                    dispatch
                        ({ type: LOGIN_RESOLVED }), 
                        1500
                );
            }
        })
       .catch(err => {
           if(err.response.status === 500 /*|| res.response.status === 404*/) {
               dispatch({
                   type: LOGIN_FAIL,
                   payload: err.response.data.msg,
                   status: 'error'
               });
           }
           setTimeout(() => dispatch
                ({ type: LOGIN_RESOLVED }), 
                1500
            );
       }) ;
};