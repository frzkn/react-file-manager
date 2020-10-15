import { login, register } from "../../services/api";
import { setToken } from "../../utils";

export const LOGIN = {
  REQUEST: "LOGIN REQUEST",
  SUCCESS: "LOGIN SUCCESS",
  FAIL: "LOGIN FAIL",
};

export const REGISTER = {
  REQUEST: "REGISTER REQUEST",
  SUCCESS: "REGISTER SUCCESS",
  FAIL: "REGISTER FAIL",
};

export const CLEAR_ERROR = "CLEAR ERROR";
export const SET_USER = "SET USER"
export const UPDATE_FILES= "UPDATE FILES"

export const loginUser = (user) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN.REQUEST });
    try {
      const response = await login(user);
      dispatch({ type: LOGIN.SUCCESS });
      setToken(response.data.token);
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: LOGIN.FAIL,
        payload: e.response?.data?.non_field_errors[0],
      });
      console.log(e);
    }
  };
};

export const registerUser = (user) => {
  console.log("In action user is");
  return async (dispatch) => {
    dispatch({ type: REGISTER.REQUEST });
    try {
      const response = await register(user);
      dispatch({ type: REGISTER.SUCCESS });
      setToken(response.data.token);
      console.log(response.data);
    } catch (e) {
      dispatch({ type: REGISTER.FAIL, payload: e.response?.data });
      console.log(e);
    }
  };
};

export const clearError = () => ({
  type: CLEAR_ERROR,
  payload: {},
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const updateFiles = () => ({
  type: UPDATE_FILES,
})
