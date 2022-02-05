import {END_LOADING, LOAD_CARS, SAVE_CAR, START_LOADING} from "./car.action";

export const startLoading = () => {
    return {type: START_LOADING}
}
export const endLoading = () => {
    return {type: END_LOADING}
}
export const loadCars = (payload) => {
    return {type: LOAD_CARS, payload}
}
export const saveCar = (payload) => {
    return {type: SAVE_CAR, payload}
}

const saveCar = async ()=> (dispatch)=> {

}
