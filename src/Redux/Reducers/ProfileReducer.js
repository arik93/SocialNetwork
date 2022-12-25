import { profileAPI } from '../../API/API';

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

const initialState = {
  profile: null,
  status: "",
  posts: [
    {
      id: 1,
      text: "yoyo",
    },
    {
      id: 2,
      text: "hello world",
    },
    {
      id: 3,
      text: "hello!",
    }
    , {
      id: 4,
      text: "How are you doing?",
    }
  ],
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 5, text: action.newPostBody }],
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };

    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status
      };

    default:
      return state;
  }
};

//Actions:
export const addPost = (newPostBody) => {
  return ({
    type: ADD_POST,
    newPostBody
  });
};
export const setUserProfile = (profile) => {
  return ({
    type: SET_USER_PROFILE,
    profile
  })
};
export const setUserStatus = (status) => {
  return ({
    type: SET_USER_STATUS,
    status
  })
};

//Thunks:
export const getUserProfile = (userId) => {
  return (
    async (dispatch) => {
      const data = await profileAPI.getUserProfile(userId);
      dispatch(setUserProfile(data));
    }
  )
};
export const getUserStatus = (userId) => {
  return (
    async (dispatch) => {
      const data = await profileAPI.getUserStatus(userId);
      dispatch(setUserStatus(data));
    }
  )
};
export const updateUserStatus = (status) => {
  return (
    async (dispatch) => {
      const data = await profileAPI.updateUserStatus(status);
      if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
      };
    }
  )
};

export default ProfileReducer;