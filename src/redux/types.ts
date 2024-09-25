// Action types
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGOUT = 'USER_LOGOUT';

export interface UserState {
  isLoggedIn: boolean;
  userInfo: object | null;
}

interface UserLoginSuccessAction {
  type: typeof USER_LOGIN_SUCCESS;
  payload: object;
}

interface UserLogoutAction {
  type: typeof USER_LOGOUT;
}

export type UserAction = UserLoginSuccessAction | UserLogoutAction;
