import { usersAPI } from '../../API/API'

const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const SET_USERS = "SET_USERS";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_LOADER = "TOGGLE_LOADER";
const TOGGLE_FOLLOWING = "TOGGLE_FOLLOWING";

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
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

    case SET_USERS_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
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
export const setTotalUsersCount = (totalUsersCount) => {
  return ({
    type: SET_USERS_TOTAL_COUNT,
    totalUsersCount
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

//Thunks:
export const requestUsers = (currentPage, pageSize) => {
  return (
    (dispatch) => {
      dispatch(toggleLoader(true));
      usersAPI.getUsers(currentPage, pageSize)
        .then((data) => {
          dispatch(setCurrentPage(currentPage));
          dispatch(toggleLoader(false));
          dispatch(setUsers(data.items));
          dispatch(setTotalUsersCount(data.totalCount));
        });
    }
  )
};
export const follow = (userId) => {
  return (
    (dispatch) => {
      dispatch(toggleFollowingProgress(true, userId));
      usersAPI.followUser(userId)
        .then((data) => {
          if (data.resultCode === 0) {
            dispatch(followSuccess(userId));
          };
          dispatch(toggleFollowingProgress(false, userId));
        });
    }
  )
};
export const unfollow = (userId) => {
  return (
    (dispatch) => {
      dispatch(toggleFollowingProgress(true, userId));
      usersAPI.unfollowUser(userId)
        .then((data) => {
          if (data.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
          };
          dispatch(toggleFollowingProgress(false, userId));
        });
    }
  )
}

export default UsersReducer;