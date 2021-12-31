import {Link} from "react-router-dom";

export default function UserComponent({item}) {
    let {id, name} = item;
    return (
        <div>
            {id} - {name} <Link to={id.toString()} state={{...item}}>details</Link>
        </div>
    );
}
