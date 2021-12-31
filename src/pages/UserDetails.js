import {useLocation} from "react-router-dom";

export default function UserDetails() {
    let {state} = useLocation();
    return (
        <div>
            {
                JSON.stringify(state)

            }

        </div>
    );
}
