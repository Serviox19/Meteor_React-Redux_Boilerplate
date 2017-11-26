import { combineReducers } from 'redux';
import DataReducer from './dataReducer';


const appReducer = combineReducers({
  data: DataReducer
});

export default appReducer;
