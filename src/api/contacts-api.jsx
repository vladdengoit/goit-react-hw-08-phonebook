import { baseURL } from './auth-api';

export const requestAllContacts = async () => {
  const { data } = await baseURL.get('/contacts');
  return data;
};
export const requestAddContacts = async body => {
  const { data } = await baseURL.post('/contacts', body);
  return data;
};

export const requestDeleteContact = async id => {
  const { data } = await baseURL.delete(`/contacts/${id}`);
  return data;
};
