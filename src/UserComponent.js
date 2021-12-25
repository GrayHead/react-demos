export default function UserComponent(props) {
    let {item: {id, name, email}} = props;
    return (
        <div>
            <h2>{name} {id}</h2>
            <p>{email}</p>
        </div>);
}
