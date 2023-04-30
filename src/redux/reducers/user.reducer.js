import {ADD_USERS, LOAD_USERS} from "../actions";

const initUserState = [];


export const userReducer = (state = initUserState, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return [...action.payload];
        case ADD_USERS:
            state.push(action.payload)
            return [...state];
    }
    return state;
};
