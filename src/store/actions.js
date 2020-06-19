/*
 * action types
 */

export const SIGN_UP = "SIGN_UP";
export const VERIFY_EMAIL = "VERIFY_EMAIL";
export const AUTHENTICATE = "AUTHENTICATE";

/*
 * action creators
 */

export const signUp = (user) => ({ type: SIGN_UP, user });
export const authenticate = (user) => ({ type: AUTHENTICATE, user });
export const verifyEmail = (email) => ({ type: VERIFY_EMAIL, email });
