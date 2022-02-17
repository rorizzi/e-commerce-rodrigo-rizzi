import { useContext, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Cart = () => {

  const {items, removeItem, isEmpty, totalAmount} = useContext(CartContext)

  return (
    <>
      {isEmpty() ?
        <div className='container'> 
          <h2>Oops.. nuestras fuentes nos informan que no tienes nada agregado al carrito, porque no pruebas volviendo al menu principal?</h2>
          <Link to='/' className="text-decoration-none">
            <Button variant="secondary">Vuelve al Inicio aqui</Button>
          </Link>
        </div>
      :
        <div className='container d-flex align-items-center justify-content-center h-100'>
            <Table striped bordered hover variant='dark'>
              <tbody>
              {items.map(item  => 
                <>
                <tr>
                  <td>
                  <Button  variant="outline-secondary" onClick={() => removeItem(item.id)}>X</Button>   
                  </td>
                  <td> {item.title}</td>
                  <td> U$S {item.price}</td>
                </tr>
                </>
                )}
              </tbody>  
            </Table>
            <h3>El monto total de todo es: U$S {totalAmount()}</h3>       
        </div>
      }
    </>
  )
}

export default Cart;