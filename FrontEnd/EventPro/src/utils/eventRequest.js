import axios from './axios';

export const createEvent = (event) => {
  const res = axios.post('/events', event);
  return res;
}

export const getEventByPromotor = (id) => {
  const res = axios.get(`/events/${id}`);
  return res;
}