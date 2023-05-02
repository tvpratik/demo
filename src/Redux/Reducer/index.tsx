/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import userReducer from './userReducers';

export default combineReducers({
  users: userReducer,
});
