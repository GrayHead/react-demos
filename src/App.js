import logo from './logo.svg';
import './App.css';
import {createRef} from "react";

function App() {
    let login = createRef();
    let password = createRef();
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(login.current.value)
        console.log(password.current.value)
        // create obj & send to api

    }

    return (<div>
        <form onSubmit={onSubmit}>
            <input type="text" name={'login'} ref={login}/>
            <input type="text" name={'password'} ref={password}/>
            <button>log in</button>

        </form>

    </div>);
}

export default App;
