import {MyContext} from "../App";

export default function C({drill}) {
    return (<div>
        C component
        {drill}
        <MyContext.Consumer>
            {(value) => {
                return <h4>{value}</h4>
            }}

        </MyContext.Consumer>

    </div>);
}
