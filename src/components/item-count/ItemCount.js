import { useState } from 'react';
import { Button } from 'react-bootstrap'

const ItemCount = ({stock, onAdd}) => {
    
    const initial = 1;
    const [quantity, setQuantity] = useState(initial)

    const addItem = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1);            
        }
    }

    const removeItem = () => {
        if(quantity > initial) {
            setQuantity(quantity - 1);
        }
    }


  return (
    <div>
        <Button variant='outline-secondary' style={{margin:'5px'}} onClick={removeItem}>-</Button>
        <span className='text-light' style={{margin:'5px'}}>{quantity}</span>
        <Button variant='outline-secondary' onClick={addItem}>+</Button>
        <br />
        <br />
        <Button onClick={() => onAdd(quantity)} variant="outline-secondary">Agregar al carrito</Button>
    </div>);
};

export default ItemCount;
