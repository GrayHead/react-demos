const initPostState = []
export const postReducer = (state = initPostState, action) => {
    switch (action.type) {
        case 'LOAD_POSTS':
            return [...action.payload];
    }
    return state;

}
