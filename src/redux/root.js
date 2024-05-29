import { combineReducers } from 'redux';
import productReducer from './reducers';

const rootReducer = combineReducers({
  product: productReducer,
  });

export default rootReducer;
