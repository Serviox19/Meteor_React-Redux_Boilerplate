import { combineReducers } from 'redux';
import DataReducer from './dataReducer';


const reducers = combineReducers({
  data: DataReducer
});

export default reducers;
