import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const initUserState = [];
const userReducer = (state = initUserState, action) => {
    switch (action.type) {
        case 'LOAD_USERS':
            return [...action.payload];
        case 'ADD_USER':
            state.push(action.payload)
            return [...state];
    }
    return state;
};

const initPostState = []
const postReducer = (state = initPostState, action) => {
    switch (action.type) {
        case 'LOAD_POSTS':
            return [...action.payload];

    }
    return state;

}

let store = createStore(combineReducers({
    userReducer, postReducer
}));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
