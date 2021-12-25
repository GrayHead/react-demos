import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import UserComponent from "./UserComponent";
import {getUsers} from "./services/userService";

function App() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, []);

    return (
        <div>
            {
                users.map(value => <UserComponent
                    key={value.id}
                    item={value}/>)
            }


        </div>
    );
}

export default App;
