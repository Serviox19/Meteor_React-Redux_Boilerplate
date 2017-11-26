import axios from 'axios';
import { GET_DATA } from './types';

// export const dataFetch = () => {
//   return (dispatch) = () => {
//     axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(response => {
//         const data = response.data;
//         dispatch({ type: GET_DATA, payload: data });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };

export const dataFetch = () => {
  const request = axios.get('https://jsonplaceholder.typicode.com/users');

  return {
    type: GET_DATA,
    payload: request
  }
}
