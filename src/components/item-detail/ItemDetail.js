import { useContext, useState } from 'react';
import { Button, Card, Container, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../item-count/ItemCount';

const ItemDetail = ({prod}) => {

  const {id, image, title, shortDescription, longDescription,  price, stock} = prod
  const { onAdd } = useContext(CartContext);
  const [showAddBtn, setShowAddBtn] = useState(true)
  const [selectedQuantity, setSelectedQuantity] = useState(1)

  const handleAddToCart = () => {
    setShowAddBtn(false)
    onAdd(prod, selectedQuantity)            
  }


  return (
    <div className='d-flex justify-content-center align-items-center h-100'>
        <Card className='shadow mb-5 rounded' bg="dark" style={{ width: '50rem', margin: '20px'}}>
            <div style={{backgroundColor: '#fff'}}>
              <Container style={{backgroundColor: '#fff' }}>
                <Card.Img  variant="top" src={image} alt='' style={{ minHeight: '300px', width:"65%", height:"15vw"}}/>
              </Container>
            </div>
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
               {showAddBtn && stock > 0 ? <ItemCount stock={stock} setSelectedQuantity={setSelectedQuantity} handleAddToCart={handleAddToCart} />
                : 
                <div className='btn-group btn-sm'>
                  <Link to='/'>
                    <Button  variant="outline-secondary" style={{marginRight: '10px'}}>Seguir comprando</Button>
                  </Link>
                  <Link to='/cart'>
                    <Button  variant="outline-secondary">Terminar la compra</Button>
                  </Link>
                </div>
               } 
            </Card.Footer>
        </Card>
    </div>
  )
};

export default ItemDetail;
