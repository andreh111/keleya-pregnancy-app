import {combineReducers} from 'redux';
import ActivityReducer from './ActivityReducer';
import AuthReducer from './AuthReducer';

const RootReducer = combineReducers({
  auth: AuthReducer,
  activity: ActivityReducer,
});

export default RootReducer;
