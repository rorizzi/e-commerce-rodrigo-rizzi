import { Button, Card, Container, Alert } from 'react-bootstrap';
import ItemCount from '../item-count/ItemCount';

const ItemDetail = ({prod}) => {

  const {id, image, title, shortDescription, longDescription,  price, stock} = prod



  return (
    <div className='d-flex justify-content-center align-items-center h-100'>
        <Card className='shadow mb-5 rounded' bg="dark" style={{ width: '50rem', margin: '20px'}}>
            <Container style={{backgroundColor: '#fff' }}>
              <Card.Img  variant="top" src={image} alt='' style={{ minHeight: '300px', width:"65%", height:"15vw"}}/>
            </Container>
            <Card.Body >
                <div className='d-flex justify-content-between'>
                  <Card.Title className="text-light ">{title}</Card.Title>
                  {stock > 0 ?
                        <Alert variant="success">Stock disponible</Alert> :
                        <Alert variant="danger">Producto agotado</Alert>}
                </div>
                <Card.Text className="text-secondary">{longDescription} </Card.Text>
                <Card.Text className="text-secondary">U$S {price}</Card.Text>
            </Card.Body>
            <Card.Footer className="p-3">
                <ItemCount stock={stock} />
                <br />
                <Button  variant="outline-secondary">Agregar al carrito</Button>
            </Card.Footer>
        </Card>
    </div>
  )
};

export default ItemDetail;
