import './App.css';
import A from "./components/A";
import {createContext} from "react";

export let MyContext = createContext('defulat');

function App() {
    let drill = 'some info';
    return (<div>
        app component
        <MyContext.Provider value={'asdqwe'}>
            <A drill={drill}/>
        </MyContext.Provider>

    </div>);
}

export default App;
