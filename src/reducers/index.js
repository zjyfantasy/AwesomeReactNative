import { combineReducers } from 'redux';
import counter from './counter';
import routes from './routes';

const rootReducer = combineReducers({
  routes,  
  counter,
});

export default rootReducer;
