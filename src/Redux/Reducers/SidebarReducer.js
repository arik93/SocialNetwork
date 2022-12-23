const SET_MY_PROFILE = "SET_MY_PROFILE"

const initialState = {
  myProfile: null
};

const SidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_PROFILE:
      return {
        ...state,
        myProfile: action.myProfile
      };

    default:
      return state;
  }
};

export const setMyProfile = (myProfile) => {
  return {
    type: SET_MY_PROFILE,
    myProfile
  }
}

export default SidebarReducer;