import {useEffect, useState} from "react";

export const useFetch = (url) => {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(url || 'https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value));

    }, []);
    return {users, setUsers};


};

