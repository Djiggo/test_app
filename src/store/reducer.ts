import {combineReducers} from 'redux';
import {IAppState} from "./interfaces";
import {AuthReducer} from "@/features/Auth/ducks/reducer";


export const rootState = () => combineReducers<IAppState>({
  auth: AuthReducer
});
