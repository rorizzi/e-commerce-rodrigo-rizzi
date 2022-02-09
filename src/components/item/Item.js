import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({prod}) => {
    
    const {id, image, title, shortDescription, price, stock} = prod

    return (
        <>
            <Card bg="dark">
                <Card.Img className="img'fluid" src={image} style={{ minHeight: '300px', width:"100%", height:"15vw"}}/>
                <Card.Body >
                    <Card.Title className="text-light">{title}</Card.Title>
                    <Card.Text className="text-secondary">{shortDescription}</Card.Text>
                    <Card.Text className="text-secondary">U$S{price}</Card.Text>
                </Card.Body>
                <Card.Footer className="p-3">
                    <Link to= {`item/${id}`}>
                        <Button  variant="outline-secondary">Detalle de producto</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </>
    );
};

export default Item;