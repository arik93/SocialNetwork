import { usersAPI } from '../../API/API'

const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const SET_USERS = "SET_USERS";
const SET_USERS_TOTAL_AMOUNT = "SET_USERS_TOTAL_AMOUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_LOADER = "TOGGLE_LOADER";
const TOGGLE_FOLLOWING = "TOGGLE_FOLLOWING";

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersAmount: 0,
  currentPage: 1,
  isLoading: false,
  followingInProgress: [],
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true
            };
          }
          return user;
        }),
      };

    case UNFOLLOW_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: false
            };
          }
          return user;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users
      };

    case SET_USERS_TOTAL_AMOUNT:
      return {
        ...state,
        totalUsersAmount: action.totalUsersAmount
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };

    case TOGGLE_LOADER:
      return {
        ...state,
        isLoading: action.isLoading
      };

    case TOGGLE_FOLLOWING:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      };

    default:
      return state;
  }
};

//Actions:
export const followSuccess = (userId) => {
  return ({
    type: FOLLOW_SUCCESS,
    userId
  });
};
export const unfollowSuccess = (userId) => {
  return ({
    type: UNFOLLOW_SUCCESS,
    userId
  });
};
export const setUsers = (users) => {
  return ({
    type: SET_USERS,
    users
  });
};
export const setTotalUsersAmount = (totalUsersAmount) => {
  return ({
    type: SET_USERS_TOTAL_AMOUNT,
    totalUsersAmount
  });
};
export const setCurrentPage = (currentPage) => {
  return ({
    type: SET_CURRENT_PAGE,
    currentPage
  });
};
export const toggleLoader = (isLoading) => {
  return ({
    type: TOGGLE_LOADER,
    isLoading
  });
};
export const toggleFollowingProgress = (isFetching, userId) => {
  return ({
    type: TOGGLE_FOLLOWING,
    isFetching,
    userId
  });
};

// Common:
const followAndUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId));
  const data = await apiMethod(userId);

  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  };

  dispatch(toggleFollowingProgress(false, userId));
};

//Thunks:
export const requestUsers = (currentPage, pageSize) => {
  return (
    async (dispatch) => {
      dispatch(toggleLoader(true));
      const data = await usersAPI.getUsers(currentPage, pageSize);
      dispatch(setCurrentPage(currentPage));
      dispatch(toggleLoader(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersAmount(data.totalAmount));
    }
  )
};
export const follow = (userId) => {
  return (
    async (dispatch) => {
      const apiMethod = usersAPI.followUser.bind(usersAPI);
      followAndUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
    }
  )
};
export const unfollow = (userId) => {
  return (
    async (dispatch) => {
      const apiMethod = usersAPI.unfollowUser.bind(usersAPI);
      followAndUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess);
    }
  )
}

export default UsersReducer;