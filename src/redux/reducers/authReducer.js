import { LOGIN, REGISTER, CLEAR_ERROR, SET_USER, UPDATE_FILES } from "../actions";

const INIT_STATE = {
  hasToken: false,
  error: "",
  user: {},
  update: false
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case REGISTER.REQUEST:
      return state;
    case REGISTER.SUCCESS:
      return { ...state, hasToken: true };
    case REGISTER.FAIL:
      return { ...state, error: action.payload };
    case LOGIN.REQUEST:
      return state;
    case LOGIN.SUCCESS:
      return { ...state, hasToken: true };
    case LOGIN.FAIL:
      return { ...state, error: action.payload };
    case CLEAR_ERROR:
      return { ...state, error: "" };
    case SET_USER:
      return { ...state, user: action.payload };
    case UPDATE_FILES:
      return {...state, update: !state.update}
    default:
      return state;
  }
};
export default authReducer;
