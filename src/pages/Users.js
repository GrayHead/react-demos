import {useEffect, useState} from "react";
import UserComponent from "../components/UserComponent";
import {Outlet} from 'react-router-dom';

export default function Users() {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });

    }, []);
    return (
        <div>
            <Outlet/>

            {
                users.map(value => <UserComponent key={value.id} item={value}/>)
            }

        </div>
    );
}
