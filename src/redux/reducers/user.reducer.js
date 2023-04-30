const initUserState = [];


export const userReducer = (state = initUserState, action) => {
    switch (action.type) {
        case 'LOAD_USERS':
            return [...action.payload];
        case 'ADD_USER':
            state.push(action.payload)
            return [...state];
    }
    return state;
};
