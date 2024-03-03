import axios from 'axios';
export const baseURL = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
export const fetchForAuth = async body => {
  const { data } = await baseURL.post('/users/signup', body);
  return data;
};

export const fetchForLogin = async body => {
  const { data } = await baseURL.post('/users/login', body);
  settoken(data.token);
  return data;
};

export const currentUser = async token => {
  baseURL.defaults.headers.Authorization = `Bearer ${token}`;
  try {
    const { data } = await baseURL.get('/users/current');
    return data;
  } catch (error) {
    baseURL.defaults.headers.Authorization = '';
    throw error;
  }
};
export const fetchForLogOut = async () => {
  const { data } = await baseURL.post('/users/logout');
  settoken();
  return data;
};

const settoken = token => {
  if (token) {
    return (baseURL.defaults.headers.Authorization = `Bearer ${token}`);
  }
  baseURL.defaults.headers.Authorization = '';
};
export default fetchForAuth;
