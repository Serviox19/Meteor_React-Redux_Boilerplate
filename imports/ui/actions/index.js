import axios from 'axios';
import { GET_DATA } from './types';

export const dataFetch = () => {
  return (dispatch) = () => {
    axios.get(//url endpoint)
      .then(() => {

      })
      .catch((error) => {
        console.log(error);
      })
  };
};
