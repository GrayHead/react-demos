import {useLocation} from "react-router-dom";

export default function UserDetails() {
    let location = useLocation();

    let {state: user} = location;
    return (
        <div>
            {JSON.stringify(user)}


        </div>
    );
}
