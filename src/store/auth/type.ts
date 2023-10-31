export interface IUser {
  _id: string,
  firstName: string;
  lastName: string;
}

export interface IAuthState {
  authenticated: boolean;
  password: string;
  user?: IUser;
  token?: string;
}

export const AUTH_SIGNIN = 'AUTH_SIGNIN';
export const AUTH_SIGNOUT = 'AUTH_SIGNOUT';

export const SET_AUTH_EVAPORATE_CLIENT = "SET_AUTH_EVAPORATE_CLIENT";

interface AuthSignInAction {
  type: typeof AUTH_SIGNIN,
  payload: IAuthState
}
interface AuthSignOutAction {
  type: typeof AUTH_SIGNOUT
}

export type AuthActionTypes = AuthSignInAction | AuthSignOutAction