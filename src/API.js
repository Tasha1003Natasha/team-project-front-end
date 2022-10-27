import axios from 'axios';
export const API = axios.create({
  baseURL: 'https://team-project-back-end.herokuapp.com/api/',
});

export const tokenAuth = {
  set(accessToken) {
    API.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  },

  unset() {
    API.defaults.headers.common.Authorization = ``;
  },
};
