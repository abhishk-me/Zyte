import {
  AUTH_SIGNOUT,
  AuthActionTypes,
  IAuthState,
  AUTH_SIGNIN,
} from './type';

export function authSignInAction(payload: IAuthState): AuthActionTypes {
  return {
    type: AUTH_SIGNIN,
    payload
  }
}

export function authSignOutAction(): AuthActionTypes {
  return {
    type: AUTH_SIGNOUT
  }
}