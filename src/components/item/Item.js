import { Button, Card } from "react-bootstrap";
import ItemCount from "../item-count/ItemCount";

const Item = ({prod}) => {
    
    const {id, image, title, description, price, stock} = prod

    return (
        <>
            <Card style={{ width: '18rem', margin: '20px'}}>
                <Card.Img variant="top" src={image} alt="imagen" style={{ minHeight: '100px', width:"100%", height:"15vw" }}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>${price}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary">Detalle de producto</Button>
                </Card.Footer>
            </Card>
        </>
    );
};

export default Item;