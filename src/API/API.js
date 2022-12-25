import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true
});

export const usersAPI = {
  async getUserProfile(userId = 26997) {
    const response = await instance.get(`profile/${userId}`);
    return response.data;
  },

  async getUsers(currentPage = 1, pageSize = 5) {
    const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
    return response.data;
  },

  async unfollowUser(userId) {
    const response = await instance.delete(`follow/${userId}`);
    return response.data;
  },

  async followUser(userId) {
    const response = await instance.post(`follow/${userId}`);
    return response.data;
  },
};

export const profileAPI = {
  async getUserProfile(userId) {
    const response = await instance.get(`profile/${userId}`);
    return response.data;
  },

  async getUserStatus(userId) {
    const response = await instance.get(`profile/status/${userId}`);
    return response.data;
  },

  async updateUserStatus(status) {
    const response = await instance.put(`profile/status`, { status });
    return response.data;
  },
};

export const authAPI = {
  async authMe() {
    const response = await instance.get(`auth/me`);
    return response.data;
  },

  async login(email, password, rememberMe) {
    const response = await instance.post(`auth/login`, {
      email,
      password,
      rememberMe
    });
    return response.data;
  },

  async logout() {
    const response = await instance.delete(`auth/login`);
    return response.data;
  }
};

