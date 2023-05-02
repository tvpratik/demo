/* eslint-disable prettier/prettier */
import {GET_USERS, USERS_ERROR} from '../Types/types';
import axios from 'axios';

export const getUsers = () => async (dispatch: any) => {
  try {
    const res = await axios.get(`http://jsonplaceholder.typicode.com/users`);
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e),
    });
  }
};
