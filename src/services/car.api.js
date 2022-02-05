import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'http://91.201.233.14/api/v2/cars',

});
const getCars = () => {
    return axiosInstance.get('');
}
const saveCar = (car) => {
    return axiosInstance.post('', car);

}

export {getCars, saveCar}

