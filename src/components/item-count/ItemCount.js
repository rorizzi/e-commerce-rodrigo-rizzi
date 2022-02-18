import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'

const ItemCount = ({stock, setSelectedQuantity, handleAddToCart}) => {
    
    const initial = 1;
    const [counter, setCounter] = useState(initial)

    useEffect(() => {
      setSelectedQuantity(counter)
    }, [counter])
    
    
    const addItem = () => {
        if(counter < stock) {
            setCounter(counter + 1);            
        }
    }

    const removeItem = () => {
        if(counter > initial) {
            setCounter(counter - 1);
        }
    }


  return (
    <div>
        <Button variant='outline-secondary' style={{margin:'5px'}} onClick={removeItem}>-</Button>
        <span className='text-light' style={{margin:'5px'}}>{counter}</span>
        <Button variant='outline-secondary' onClick={addItem}>+</Button>
        <br />
        <br />
        <Button onClick={() => handleAddToCart()} variant="outline-secondary">Agregar al carrito</Button>
    </div>);
};

export default ItemCount;
