import {IAppState} from "@/store/interfaces";
import {IAuthError, IUser} from "@/features/Auth/ducks/types";

export const selectCurrentUser = (state: IAppState): IUser | null => state.auth.user;
export const selectUserError = (state: IAppState): IAuthError | null => state.auth.error;
export const selectAuthIsLoading = (state: IAppState): boolean => state.auth.isLoading;
export const selectIsRecoverySent = (state: IAppState): boolean => state.auth.isRecoverySent;
