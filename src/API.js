import axios from 'axios';
export const API = axios.create({
  // baseURL: 'https://team-project-back-end.herokuapp.com/api/',
  // baseURL: 'http://localhost:4000/api',
  baseURL: 'https://team-project-back-end.vercel.app/api/',
});

export const tokenAuth = {
  set(token) {
    API.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    API.defaults.headers.common.Authorization = ``;
  },
};
