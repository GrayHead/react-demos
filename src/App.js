import './App.css';
import {useState} from "react";

function App() {
    // let [login, setLogin] = useState('default');
    // let [password, setPassword] = useState('');
    // const onLoginChange = (e) => {
    //     setLogin(e.target.value);
    // };
    // const onPasswordChange = (e) => {
    //     setPassword(e.target.value);
    // };
    let [formState, setFormState] = useState({login: '', password: ''});

    const onSubmit = (e) => {
        console.log(e.target.login.value);
        console.log(e.target.password.value);
        e.preventDefault();
        console.log(formState);
    };

    const onChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    return (<div>
        <form onSubmit={onSubmit}>
            <input type="text" name={'login'} value={formState.login} onChange={onChange}/>
            <input type="text" name={'password'} value={formState.password} onChange={onChange}/>
            <button>submit</button>
        </form>
    </div>);
}

export default App;
