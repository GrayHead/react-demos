import './App.css';
import {useSelector} from "react-redux";
import UsersComponent from "./components/UsersComponent";
import PostsComponent from "./components/PostsComponent";

function App() {

    return (
        <div>
            <UsersComponent/>
            <PostsComponent/>


        </div>
    );
}

export default App;
