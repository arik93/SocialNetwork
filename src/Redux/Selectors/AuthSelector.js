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

export const getAuthId = (state) => {
  return (
    state.auth.id
  )
};

export const getIsAuth = (state) => {
  return (
    state.auth.isAuth
  )
};

export const getLogin = (state) => {
  return (
    state.auth.login
  )
};
