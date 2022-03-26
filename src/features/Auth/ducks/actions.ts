import {
  AuthTypes,
  IAuth,
  IAuthCredentials,
  IAuthError,
  IAuthFailure,
  IAuthSuccess,
  IRecoverPassword,
  IRecoverPasswordFailure,
  IRecoverPasswordSuccess,
  IUser
} from "@/features/Auth/ducks/types";

export const auth = (credentials: IAuthCredentials): IAuth => ({
  type: AuthTypes.AUTHORIZE_REQUEST,
  payload: credentials,
});

export const authSuccess = (userData: IUser): IAuthSuccess => ({
  type: AuthTypes.AUTHORIZE_SUCCESS,
  payload: userData,
});

export const authFailure = (error: IAuthError): IAuthFailure => ({
  type: AuthTypes.AUTHORIZE_ERROR,
  payload: error,
});

export const recoverPassword = (email: string): IRecoverPassword => ({
  type: AuthTypes.RECOVER_PASSWORD_REQUEST,
  payload: email,
});

export const recoverPasswordSuccess = (): IRecoverPasswordSuccess => ({
  type: AuthTypes.RECOVER_PASSWORD_SUCCESS,
});

export const recoverPasswordFailure = (error: IAuthError): IRecoverPasswordFailure => ({
  type: AuthTypes.RECOVER_PASSWORD_ERROR,
  payload: error,
});


export const AuthActions = {
  auth,
  authSuccess,
  authFailure,
  recoverPassword,
  recoverPasswordSuccess,
  recoverPasswordFailure,
};