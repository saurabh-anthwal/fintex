// actions.ts
import { SET_TOKEN, CLEAR_TOKEN } from './actionTypes';

export const setToken = (token: string) => ({
  type: SET_TOKEN,
  payload: token,
});

export const clearToken = () => ({
  type: CLEAR_TOKEN,
});
