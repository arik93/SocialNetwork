import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true
});

export const usersAPI = {
  getUserProfile(userId = 26997) {
    return (
      instance.get(`profile/${userId}`)
        .then((res) => {
          return res.data
        })
    )
  },

  getUsers(currentPage = 1, pageSize = 5) {
    return (
      instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then((res) => {
          return res.data
        })
    )
  },

  unfollowUser(userId) {
    return (
      instance.delete(`follow/${userId}`)
        .then((res) => {
          return res.data
        })
    )
  },

  followUser(userId) {
    return (
      instance.post(`follow/${userId}`)
        .then((res) => {
          return res.data
        })
    )
  },
};

export const profileAPI = {
  getUserProfile(userId) {
    return (
      instance.get(`profile/${userId}`)
        .then((res) => {
          return res.data
        })
    )
  },

  getUserStatus(userId) {
    return (
      instance.get(`profile/status/${userId}`)
        .then((res) => {
          return res.data
        })
    )
  },

  updateUserStatus(status) {
    return (
      instance.put(`profile/status`, { status })
        .then((res) => {
          return res.data
        })
    )
  },
};

export const authAPI = {
  authMe() {
    return (
      instance.get(`auth/me`)
        .then((res) => {
          return res.data
        })
    )
  },

  login(email, password, rememberMe) {
    return (
      instance.post(`auth/login`, {
        email,
        password,
        rememberMe
      })
        .then((res) => {
          return res.data
        })
    )
  },

  logout() {
    return (
      instance.delete(`auth/login`)
        .then((res) => {
          return res.data
        })
    )
  }
};

