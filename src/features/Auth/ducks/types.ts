export enum AuthTypes {
  AUTHORIZE_REQUEST = 'auth/AUTHORIZE_REQUEST',
  AUTHORIZE_SUCCESS = 'auth/AUTHORIZE_SUCCESS',
  AUTHORIZE_ERROR = 'auth/AUTHORIZE_ERROR',

  RECOVER_PASSWORD_REQUEST = 'auth/RECOVER_PASSWORD_REQUEST',
  RECOVER_PASSWORD_SUCCESS = 'auth/RECOVER_PASSWORD_SUCCESS',
  RECOVER_PASSWORD_ERROR = 'auth/RECOVER_PASSWORD_ERROR',
}


export interface IAuth {
  type: AuthTypes.AUTHORIZE_REQUEST;
  payload: IAuthCredentials;
}

export interface IAuthSuccess {
  type: AuthTypes.AUTHORIZE_SUCCESS;
  payload: IUser | null;
}

export interface IAuthFailure {
  type: AuthTypes.AUTHORIZE_ERROR;
  payload: IAuthError;
}

export interface IRecoverPassword {
  type: AuthTypes.RECOVER_PASSWORD_REQUEST;
  payload: string;
}

export interface IRecoverPasswordSuccess {
  type: AuthTypes.RECOVER_PASSWORD_SUCCESS;
}

export interface IRecoverPasswordFailure {
  type: AuthTypes.RECOVER_PASSWORD_ERROR;
  payload: IAuthError;
}


export interface IAuthCredentials {
  username: string;
  password: string;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  login: string;
}


export interface IAuthError {
  error: number;
  error_description: string;
}


export type TAuthActionsTypes =
    | IAuth
    | IAuthSuccess
    | IAuthFailure
    | IRecoverPassword
    | IRecoverPasswordSuccess
    | IRecoverPasswordFailure;


export const isIAuthError = (data: unknown): data is IAuthError => {

  return (data as IAuthError).error !== undefined && (data as IAuthError).error_description !== undefined;
}