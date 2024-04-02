import {
  LOGIN_USER,
  REGISTER_USER,
  SET_USER_DATE,
  SET_USER_NAME,
  SET_USER_WORKOUT,
} from '../Actions/Auth/AuthActionTypes';

const initialState = {
  users: [],
};

const AuthReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REGISTER_USER:
      const {email, password} = action.payload;
      return {
        ...state,
        users: [...state.users, {email, password}],
      };
    case SET_USER_NAME: {
      const {name} = action.payload;
      const newState = {...state};
      const user: any = newState.users.slice(-1)[0];
      user.name = name;
      return newState;
    }
    case SET_USER_DATE: {
      const {date} = action.payload;
      const newState = {...state};
      const user: any = newState.users.slice(-1)[0];
      user.date = date;
      return newState;
    }
    case SET_USER_WORKOUT: {
      const {workout} = action.payload;
      const newState = {...state};
      const user: any = newState.users.slice(-1)[0];
      user.workout = workout;
      return newState;
    }

    case LOGIN_USER:
      const {e, p} = action.payload;

      state.users &&
        state.users.find((user: any) => {
          user.email === e && user.password === p;
        });
      return {
        loggedIn: true,
      };

    default:
      return state;
  }
};

export default AuthReducer;
