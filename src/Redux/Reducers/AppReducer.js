import { authAPI } from '../../API/API'
import { authUser } from './AuthReducer';

const INITIALIZING_SUCCES = "INITIALIZING_SUCCES";

const initialState = {
  initialized: false
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZING_SUCCES:
      return {
        ...state,
        initialized: true
      };

    default:
      return state;
  }
};


//Actions:
export const initializingSuccess = () => {
  return ({
    type: INITIALIZING_SUCCES
  });
};

//Thunks:
export const initializeApp = () => {
  return (
    (dispatch) => {
      const promise = dispatch(authUser());
      Promise.all([promise])
        .then(() => {
          dispatch(initializingSuccess());
        });
    }
  )
};

export default AppReducer;