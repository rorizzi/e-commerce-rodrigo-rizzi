import { useContext } from 'react'
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Cart = () => {

  const {items, removeItem, isEmpty, totalAmount, clear} = useContext(CartContext)
  
  return (
    <>
      {isEmpty() ?
        <div className='container-fluid'> 
          <h2>Oops.. nuestras fuentes nos informan que no tienes nada agregado al carrito, porque no pruebas volviendo al menu principal?</h2>
          <Link to='/' className="text-decoration-none">
            <Button variant="secondary">Vuelve al Inicio aqui</Button>
          </Link>
        </div>
      :
        <>         
          <div className='container' style={{marginTop: 50}}>
            <div className='bg-dark p-5 rounded shadow-lg p-3 mb-5'>
              <h3 className="mb-4"style={{color: "#fff"}}>Bienvenido al carrito</h3>
              <Table hover size='sm' style={{backgroundColor: "#fff"}} className='rounded align-items-center justify-content-center'>
                <tbody>
                                      
                    {items.map(item  => (                                    
                      <tr key={item.title}>                  
                        <td style={{backgroundColor: "#fff"}}>
                          <img alt={item.title} src={item.image} className="img-fluid" style={{maxWidth: 100}} />
                        </td>
                        <td> {item.title}</td>
                        <td> U$S {item.price} 
                          {item.quantity > 1 ? ` x ${item.quantity}` : ""} </td>
                          
                        <td>
                          <Button className='rounded' size='sm' variant="outline-danger" onClick={() => removeItem(item.id)}>X</Button>   
                        </td>
                      </tr>
                   
                    ))}                   
                </tbody>               
              </Table>
              <span>                
                <h4 style={{color: '#fff'}}>{`Total a pagar  U$S${totalAmount()}`}</h4>                                
              </span>
              <div className='btn-group btn-sm mt-3'>
                <Button className="mr-5" variant='outline-danger' size='sm' onClick={clear}>Vaciar carrito</Button>
                <Link to= {`/cart/checkout`}>
                  <Button variant="outline-success" size='sm'>Finalizar compra</Button>
                </Link>
              </div>  
            </div>    
          </div>          
          
        </>   
      }
    </>
  )
}

export default Cart;