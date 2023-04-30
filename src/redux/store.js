import {combineReducers, createStore} from "redux";
import {postReducer, userReducer} from "./reducers";

export const store = createStore(combineReducers({
    userReducer, postReducer
}));
