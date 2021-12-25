const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())


}
const getUser = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(value => value.json())
}
export {getUsers, getUser}
