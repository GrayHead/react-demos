import {Outlet, Link} from 'react-router-dom';

export default function Layout() {
    return (
        <div>

            <ul>
                <li><Link to={'users'}>users page</Link></li>
                <li><Link to={'posts'}>posts page</Link></li>
            </ul>
            Layout
            <Outlet/>

        </div>
    );
}
