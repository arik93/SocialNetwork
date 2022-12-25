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

export const getDialogUsers = (state) => {
  return (
    state.dialogPage.dialogUsers
  )
};

export const getMessages = (state) => {
  return (
    state.dialogPage.messages
  )
};


