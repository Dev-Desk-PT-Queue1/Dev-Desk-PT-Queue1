import axios from 'axios';
import axiosAuth from '../auth/axiosAuth';

//Actions for login operation 

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_RESOLVED = "LOGIN_RESOLVED";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT_SUCCESS });
};

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post("https://dev-desk-queue.herokuapp.com/api/register", credentials)
    .then(res => {
      if (res.status === 200) {
        dispatch({
          type: LOGIN_SUCCESS,
          user: res.data.user,
          token: res.data.token,
          status: "success",
          message: res.data.message
        });
        setTimeout(() => 
            dispatch({ 
              type: LOGIN_RESOLVED }), 
              1500
        );
      }
    })
    .catch(err => {
      if (err.response.status === 500 || err.response.status === 404) {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response.data.msg,
          status: "error"
        });
      }
      setTimeout(() => dispatch({ type: LOGIN_RESOLVED }), 1500);
    });
};

// Action for creating new users (student)

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_RESOLVED = "SIGNUP_RESOLVED";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const signup = user => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios
    .post("https://dev-desk-queue.herokuapp.com/api/register", user)
    .then(res => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data.msg,
        status: "success"
      });
      setTimeout(() => dispatch({ type: SIGNUP_RESOLVED }), 1500);
    })
    .catch(err => {
      dispatch({ type: SIGNUP_FAIL, payload: err.response });
    });
};

export const GET_USER = "GET_USER";
export const GET_USER_FAIL = "GET_USER_FAIL";

export const getUser = id => dispatch => {
  axiosAuth()
    .get(`https://devdeskqueue-be.herokuapp.com/api/users/${id}`)
    .then(res => {
      dispatch({ type: GET_USER, payload: res.data.username });
    })
    .catch(err => {
      dispatch({ type: GET_USER_FAIL, payload: err });
    });
};

// Action to fetch list of tickets available

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axiosAuth()
    .get(`https://dev-desk-queue.herokuapp.com/api/tickets`)
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAIL, payload: err });
    });
};

//Action for creating a new ticket

export const ADD_TICKET_START = "ADD_TICKET_START";
export const ADD_TICKET_SUCCESS = "ADD_TICKET_SUCCESS";
export const ADD_TICKET_FAIL = "ADD_TICKET_FAIL";

export const addTicket = newTicket => dispatch => {
  dispatch({ type: ADD_TICKET_START });
  axiosAuth()
    .post("https://dev-desk-queue.herokuapp.com/api/tickets", newTicket)
    .then(res => {
      dispatch({
        type: ADD_TICKET_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: ADD_TICKET_FAIL, payload: err.response });
    });
};

// Action to Delete

export const DELETE_TICKET_START = "DELETE_TICKET_START";
export const DELETE_TICKET_SUCCESS = "DELETE_TICKET_SUCCESS";
export const DELETE_TICKET_FAIL = "DELETE_TICKET_FAIL";

export const deleteTicket = id => 
    dispatch => {
        dispatch({ 
        type: DELETE_TICKET_START 
        });
    axiosAuth()
        .delete(`https://dev-desk-queue.herokuapp.com/api/tickets/${id}`)
        .then(res => {
        dispatch({
            type: DELETE_TICKET_SUCCESS,
            payload: res.data
        });
        })
        .catch(err => {
        dispatch({ 
            type: DELETE_TICKET_FAIL, 
            payload: 
            err.response 
        });
        });
    };

    //Action for for helpers to resolve and 'unresolve' tickets

export const RESOLVE_TICKET_START = "RESOLVE_TICKET_START";
export const RESOLVE_TICKET_SUCCESS = "RESOLVE_TICKET_SUCCESS";
export const RESOLVE_TICKET_FAIL = "RESOLVE_TICKET_FAIL";

export const resolveTicket = (id, updatedTicket) => 
    dispatch => {
        dispatch({ 
            type: RESOLVE_TICKET_START, 
            id });
        axiosAuth()
            .put(
            `https://dev-desk-queue.herokuapp.com/api/tickets/${id}`,
            updatedTicket
            )
            .then(res => {
            dispatch({ type: RESOLVE_TICKET_SUCCESS, payload: res.data, id });
            })
            .catch(err => {
            dispatch({ type: RESOLVE_TICKET_FAIL, payload: err });
            });
    };





