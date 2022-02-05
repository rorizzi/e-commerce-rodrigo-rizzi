import { useState } from 'react';
import { Button } from 'react-bootstrap'

const ItemCount = (stock) => {
    
    const initial = 1;
    const [numbersOfItems, setNumbersOfItems] = useState(initial)
    console.log(stock)

    const addItem = () => {
        console.log(stock)
        if(numbersOfItems < stock.stock) {
            setNumbersOfItems(numbersOfItems + 1);            
        }
        else {
            console.log('No entra al if')
        }
    }

    const removeItem = () => {
        if(numbersOfItems > initial) {
            setNumbersOfItems(numbersOfItems - 1);
        }
    }


  return (
    <div>
        <Button variant='outline-secondary' style={{margin:'5px'}} onClick={removeItem}>-</Button>
        <span className='text-light' style={{margin:'5px'}}>{numbersOfItems}</span>
        <Button variant='outline-secondary' onClick={addItem}>+</Button>
    </div>);
};

export default ItemCount;
