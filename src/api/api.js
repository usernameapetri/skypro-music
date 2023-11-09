import axios from 'axios';

export const getTrackData = () => {
  return axios.get('https://skypro-music-api.skyeng.tech/catalog/track/all/');
};