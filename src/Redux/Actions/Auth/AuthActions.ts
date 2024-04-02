import {
  LOGIN_USER,
  REGISTER_USER,
  SET_USER_NAME,
  SET_USER_DATE,
  SET_USER_WORKOUT,
} from './AuthActionTypes';

export const LoginUser = (e: string, p: string) => ({
  type: LOGIN_USER,
  payload: {
    e,
    p,
  },
});

export const registerUser = (email: string, password: string) => ({
  type: REGISTER_USER,
  payload: {
    email,
    password,
  },
});

export const setUserName = (name: string) => ({
  type: SET_USER_NAME,
  payload: {
    name,
  },
});

export const setUserDate = (date: string) => ({
  type: SET_USER_DATE,
  payload: {
    date,
  },
});

export const setUserWorkout = (workout: string) => ({
  type: SET_USER_WORKOUT,
  payload: {
    workout,
  },
});
