/* eslint-disable prettier/prettier */

import {createStore, combineReducers} from 'redux';
import CountReducer from '../Reducer/countReducer';

const rootReducer = combineReducers({
  count: CountReducer,
});

export const store = createStore(rootReducer);
