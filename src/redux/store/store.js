import {applyMiddleware, createStore} from "redux";
import {carReducer} from "../reducers";
import thunk from 'redux-thunk';

export let store = createStore(carReducer, applyMiddleware(thunk));
