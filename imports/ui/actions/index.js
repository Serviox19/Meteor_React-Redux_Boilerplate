import axios from 'axios';
import { GET_DATA } from './types';

export const dataFetch = () => {
  return (dispatch) = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const data = response;
        console.log(data);
        dispatch({ type: GET_DATA, payload: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
