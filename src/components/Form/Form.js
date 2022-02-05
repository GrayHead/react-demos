import {useForm} from "react-hook-form";
import {CarValidator} from "../../validators";
import {joiResolver} from "@hookform/resolvers/joi";

export function Form() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        resolver: joiResolver(CarValidator),
        mode: "onTouched"
    });
    let onSubmitForm = (data) => {
        console.log(data);


    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <input type="text" {...register('model')}/>
                <input type="number" {...register('price')}/>
                <input type="number" {...register('year')}/>
                <button>save</button>
            </form>

        </div>
    );
}
