import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import {useFetch} from "./hooks/useFetch";

function App() {
    let {setUsers, users} = useFetch();


    return (
        <div>
            <button onClick={() => {
                setUsers([{name: 'xxx'}]);
            }}>asd
            </button>
            {
                users.map((value) => <div> {value.name}</div>)
            }

        </div>
    );
}

export default App;
