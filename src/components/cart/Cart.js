import { useContext } from 'react'
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
        <>
          <h3>Bienvenido al carrito</h3>
          <div className='container align-items-center justify-content-center h-100' style={{marginTop: 100}}>
            <div>
              <Table striped hover size='sm' variant='dark' className='rounded'>
                <tbody>
                  <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Quitar del carrito</th>
                  </tr>
                    
                    {items.map(item  => (                                    
                      <tr key={item.title}>                  
                        <td> {item.title}</td>
                        <td>{item.shortDescription}</td>
                        <td>{item.quantity} </td>
                        <td> U$S {item.price} (x{item.quantity})</td>
                        <td>
                          <Button  variant="outline-secondary" onClick={() => removeItem(item.id)}>X</Button>   
                        </td>
                      </tr>
                   
                    ))}
                </tbody>  
              </Table>
            </div>     
          </div>
          <h3>{`Total  U$S${totalAmount()}`}</h3>
          <Link to= {`/cart/checkout`}>
            <Button  variant="outline-secondary">Finalizar compra</Button>
          </Link>
        </>   
      }
    </>
  )
}

export default Cart;