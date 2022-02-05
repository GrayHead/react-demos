import {END_LOADING, LOAD_CARS, SAVE_CAR, SET_CARS, START_LOADING} from "../actions";

const initState = {
    isLoading: false,
    cars: []
}
export const carReducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {

        case START_LOADING:
            return {...state, isLoading: true};
        case SET_CARS:
            return {...state, cars: action.payload};
        case END_LOADING:
            return {...state, isLoading: false}
        case SAVE_CAR:
            state.cars.push(action.payload)
            return {...state, cars: state.cars};
        default:
            return {...state}

    }

}
