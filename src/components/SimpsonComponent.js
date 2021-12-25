function SimpsonComponent(props) {
    console.log(props);
    let {itemName, pic} = props;

    let classNameItem = 'card';
    return (
        <div className={classNameItem}>
            <h2>{itemName}</h2>
            <img src={pic}/>
        </div>
    );
}

export default SimpsonComponent;
