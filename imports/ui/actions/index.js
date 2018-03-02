import axios from 'axios';
import { GET_DATA } from './types';

export const dataFetch = () => {
  const request = axios.get('https://jsonplaceholder.typicode.com/users');

  console.log('Request: ' + request);

  return {
    type: GET_DATA,
    payload: request
  }
}
