import {AuthTypes, IAuthError, IUser, TAuthActionsTypes} from "@/features/Auth/ducks/types";

export interface IAuthState {
  isLoggedIn: boolean;
  isLoading: boolean;
  isRecoverySent: boolean;
  user: null | IUser;
  error: IAuthError | null;
}

const initialState: IAuthState = {
  isLoading: false,
  isLoggedIn: false,
  isRecoverySent: false,
  user: null,
  error: null,
};

export const AuthReducer = (state: IAuthState = initialState, action: TAuthActionsTypes): IAuthState => {
  switch (action.type) {
    case AuthTypes.AUTHORIZE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case AuthTypes.AUTHORIZE_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        user: action.payload,
      };

    case AuthTypes.AUTHORIZE_ERROR:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload,
      };

    case AuthTypes.RECOVER_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true,
        isRecoverySent: false,
        error: null,
      };

    case AuthTypes.RECOVER_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isRecoverySent: true,
      };

    case AuthTypes.RECOVER_PASSWORD_ERROR:
      return {
        ...state,
        isLoading: false,
        isRecoverySent: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
