// import { createSelector } from "reselect";

// const getUsersPrimitive = (state) => {
//   return (
//     state.usersPage.users
//   )
// };
// export const getUsers = createSelector(getUsersPrimitive, (users) => {
//   return (
//     users.filter((u) => { return true })
//   )
// });

export const getProfile = (state) => {
  return (
    state.profilePage.profile
  )
};

export const getStatus = (state) => {
  return (
    state.profilePage.status
  )
};

export const getPosts = (state) => {
  return (
    state.profilePage.posts
  )
};

