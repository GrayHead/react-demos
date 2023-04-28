import './App.css';
import {w3cwebsocket as W3CWebSocket} from "websocket";
import {useEffect, useState} from "react";

const url = 'ws://localhost:8080/ws';


function builder() {
    return new W3CWebSocket(url);
}

function App() {
    let [msgs, setMsgs] = useState([]);
    let [client, setClient] = useState(builder);

    useEffect(() => {
        client.onopen = () => {
            console.log('open');
        }
        client.onmessage = (e) => {
            console.log(e.data);
            msgs.push(e.data);
            setMsgs([...msgs]);
        }
    }, [client])

    return (<div>

            <form onSubmit={(e) => {
                e.preventDefault();
                let messageToChat = e.target.message.value;
                client.send(messageToChat);
            }}>
                <input type="text" name={'message'}/>
                <button>send</button>
            </form>
            <div>
                {msgs.map(msg => <div>{msg}</div>)}

            </div>
        </div>

    );
}

export default App;
