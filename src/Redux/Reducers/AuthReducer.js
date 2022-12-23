import { stopSubmit } from 'redux-form';
import { authAPI } from '../../API/API'

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isLoading: false
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};


//Actions:
export const setAuthUserData = (id, email, login, isAuth) => {
  return ({
    type: SET_USER_DATA,
    payload: { id, email, login, isAuth }
  });
};

//Thunks:
export const authUser = () => {
  return (
    (dispatch) => {
      return (authAPI.authMe()
        .then((data) => {
          if (data.resultCode === 0) {
            let { id, email, login } = data.data;
            dispatch(setAuthUserData(id, email, login, true));
          }
        })
      )
    }
  )
};
export const login = (email, password, rememberMe) => {
  return (
    (dispatch) => {
      authAPI.login(email, password, rememberMe)
        .then((data) => {
          if (data.resultCode === 0) {
            dispatch(authUser());
          } else {
            const message = data.messages.length > 0 ? data.messages[0] : "Some Error"
            dispatch(stopSubmit("loginForm", {
              _error: message
            }))
          }
        });
    }
  )
};
export const logout = () => {
  return (
    (dispatch) => {
      authAPI.logout()
        .then((data) => {
          if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
          }
        });
    }
  )
};

export default AuthReducer;