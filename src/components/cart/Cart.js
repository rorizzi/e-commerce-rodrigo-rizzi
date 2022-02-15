import React, { useContext } from 'react'
import { Button, Table } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';

const Cart = () => {

  const {items, removeItem} = useContext(CartContext)
  console.log(items)
  return (
    <>
      <h1>Work in progress...</h1>
      <h4>Pero puedes agregar productos, veras su nombre y su precio, y podras eliminarlos del carrito</h4>
      <h4>La proxima actualizacion incorporara este componente al 100% !!!</h4>
      <div className='container d-flex align-items-center justify-content-center h-100'>
          <Table striped bordered hover variant='dark'>
            <tbody>
            {items.map(item  => 
              <>
              <tr>
                <td>
                <Button  variant="outline-secondary" onClick={() => removeItem(item.id)}>Borrar</Button>   
                </td>
                <td> {item.title}</td>
                <td> U$S {item.price}</td>
              </tr>
              </>
              )}
            </tbody>  
          </Table>       
      </div>
    </>
  )
}

export default Cart;