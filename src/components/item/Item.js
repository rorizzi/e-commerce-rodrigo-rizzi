const Item = ({id, name, price, setSelectedItem}) => {
    const selectItem = () => setSelectedItem({name, price, id})

    return (
        <>
            <h2>Nombre del producto: {name}</h2>
            <h2>Precio del producto: {price}</h2>
            <button onClick={selectItem}>Seleccionar producto</button>
            <hr/>
        </>
    );
};

export default Item;
