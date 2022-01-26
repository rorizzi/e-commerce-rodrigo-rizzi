import { Button } from "react-bootstrap";

const Item = ({id, name, price, setSelectedItem}) => {
    const selectItem = () => setSelectedItem({name, price, id})

    return (
        <>
            <h2>Nombre del producto: {name}</h2>
            <h2>Precio del producto: {price}</h2>
            <Button onClick={selectItem}>Seleccionar producto</Button>
            <hr/>
        </>
    );
};

export default Item;
