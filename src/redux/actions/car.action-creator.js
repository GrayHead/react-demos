import {END_LOADING, LOAD_CARS, SAVE_CAR, SET_CARS, START_LOADING} from "./car.action";
import {getCars} from "../../services/car.api";

export const startLoading = () => {
    return {type: START_LOADING}
}
export const endLoading = () => {
    return {type: END_LOADING}
}
const setCars = (payload) => {
    return {type: SET_CARS, payload}
}

export const fetchCars = () => async (dispatch) => {
    dispatch(startLoading());
    let response = await getCars();
    console.log(response)
    dispatch(setCars(response.data))
    dispatch(endLoading());

}
