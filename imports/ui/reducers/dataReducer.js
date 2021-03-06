import { GET_DATA } from '../actions/types';

export default (state = [], action) => {
  console.log('Action received', action);

  switch (action.type) {
    case GET_DATA:
      return [ ...action.payload.data, ...state ] //new data first
  }

  return state;
}
