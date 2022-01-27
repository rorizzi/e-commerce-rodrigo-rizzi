import { useState } from 'react';
import { Button } from 'react-bootstrap'

const ItemCount = () => {
    const [numbersOfItems, setNumbersOfItems] = useState(0)

    const addItem = () => {
        if(numbersOfItems < 10) {
            setNumbersOfItems(numbersOfItems + 1);
        }
    }

    const removeItem = () => {
        if(numbersOfItems > 0) {
            setNumbersOfItems(numbersOfItems - 1);
        }
    }


  return (
    <div>
        <Button onClick={addItem}>+</Button>
        <span>{numbersOfItems} </span>
        <Button onClick={removeItem}>-</Button>
    </div>);
};

export default ItemCount;
