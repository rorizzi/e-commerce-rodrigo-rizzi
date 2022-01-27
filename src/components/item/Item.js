import { Button } from "react-bootstrap";
import ItemCount from "../item-count/ItemCount";

const Item = ({id, name, price, setSelectedItem}) => {
    const selectItem = () => setSelectedItem({name, price, id})

    return (
        <>
            <h2>Nombre del producto: {name}</h2>
            <h2>Precio del producto: {price}</h2>
            <Button onClick={selectItem}>Seleccionar producto</Button>
            <br />
            <br />
            <ItemCount />
            <hr/>
        </>
    );
};

export default Item;
