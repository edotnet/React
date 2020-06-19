import { combineReducers } from 'redux';
import { SIGN_UP, VERIFY_EMAIL, AUTHENTICATE } from './actions';

const initialState = {
  users: [],
  loggedInUser: null
};

const assign = (obj) => Object.assign({}, obj);

const users = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      state.users.push({
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        email: action.user.email,
        password: action.user.password,
        rememberMe: action.user.rememberMe,
        emailVerified: false
      });
      return assign(state);
    case AUTHENTICATE:
      state.loggedInUser = null;
      state.users.map((user) => {
        if (user.email === action.user.email && user.password === action.user.password && user.emailVerified) {
          state.loggedInUser = user;
          state.loggedInUser.rememberMe = action.user.rememberMe;
        }
      });
      return assign(state);
    case VERIFY_EMAIL:
      state.users.map((user) => {
        if (user.email === action.email) {
          user.emailVerified = true;
        }
      });

      return assign(state);
    default:
      return state;
  }
}

const userApp = combineReducers({ users });

export default userApp;
