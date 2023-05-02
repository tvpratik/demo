/* eslint-disable prettier/prettier */

import {createStore, combineReducers, applyMiddleware} from 'redux';
import CountReducer from '../Reducer/countReducer';
import thunk from 'redux-thunk';
import reducer from '../Reducer/reducers';

const rootReducer = combineReducers({
  count: CountReducer,
  reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
