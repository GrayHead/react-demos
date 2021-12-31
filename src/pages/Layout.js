import {Link, Outlet} from 'react-router-dom';

export default function Layout() {
    return (
        <div>

            <div>
                <h3>sun menu</h3>
                <ol>
                    <li><Link to={'users'}>users page</Link></li>
                    <li><Link to={'posts'}>all posts</Link></li>
                    <li><Link to={'comments'}>comments</Link></li>
                </ol>
            </div>

            <Outlet/>

        </div>
    );
}
