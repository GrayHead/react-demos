import './App.css';
import {useRoutes} from 'react-router-dom';
import Layout from "./pages/Layout";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import UserDetails from "./pages/UserDetails";

function App() {

    let routes = [
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    element: <Users/>,
                    path: 'users',
                    children: [
                        {path: ':id', element: <UserDetails/>}
                    ]

                },
                {element: <Posts/>, path: 'posts'}
            ]
        }
    ]

    let element = useRoutes(routes);

    return (
        <div>

            {element}

        </div>
    );
}

export default App;
