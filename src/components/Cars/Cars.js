import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCars} from "../../redux/actions";
import Car from "../Car/Car";

export function Cars() {
    let dispatch = useDispatch();
    let {cars, isLoading} = useSelector((state) => state);
    useEffect(() => {
        console.log('start')
        dispatch(fetchCars());
        console.log('end');
    }, []);

    return (
        <div>
            {
                isLoading ? (<h3 style={{color: 'red'}}>Loading</h3>) : (cars.map((value) => <Car key={value.id}
                                                                                                  item={value}/>))


            }


        </div>
    );
}
