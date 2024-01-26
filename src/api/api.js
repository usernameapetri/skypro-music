import axios from 'axios';

export const getTrackData = () => {
  return axios.get('https://skypro-music-api.skyeng.tech/catalog/track/all/');
};

export const loginUser = ({ email, password }) => {
  return axios.post(
    'https://skypro-music-api.skyeng.tech/user/login/',
    {
      email: email,
      password: password,
    },
    {
      headers: {
        'content-type': 'application/json',
      },
    },
  );
};

export const registerUser = ({ email, password }) => {
  return axios.post(
    'https://skypro-music-api.skyeng.tech/user/signup/',
    {
      email: email,
      password: password,
      username: email,
    },
    {
      headers: {
        'content-type': 'application/json',
      },
    },
  );
};

export const getAccesToken = ({ email, password }) => {
  return axios.post(
    'https://skypro-music-api.skyeng.tech/user/token/',
    {
      email: email,
      password: password,
    },

    {
      headers: {
        'content-type': 'application/json',
      },
    },
  );
};

export const refreshToken = ({ token }) => {
  return axios.post(
    'https://skypro-music-api.skyeng.tech/user/token/refresh/',

    {
      refresh: token,
    },

    {
      headers: {
        'content-type': 'application/json',
      },
    },
  );
};
