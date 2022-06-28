import './App.css';
import {useForm} from "react-hook-form";
import {savePost} from "./services/post.api.service";

function App() {

    let {register, handleSubmit, watch, formState: {errors}} = useForm({defaultValues: {title: 'title default'}});
    const onSubmit = (data) => {
        console.log(data);
        savePost(data).then(({data}) => console.log(data));


    }


    return (<div>


        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title", {required: true})}/>
            {errors.title && <span>field is required</span>}
            <input {...register("body")}/>
            <input type="submit" value={'save post'}/>

            <select {...register("userId")}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </form>

    </div>);
}

export default App;
