import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext, useState } from 'react'
import { Form , Button, Alert } from "react-bootstrap"; 
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const imputs = [
    {
        label: "Nombre",
        name: "buyerName",
        placeholder: "Nombre",
        type:"text"
    },
    {
        label: "Correo Electrónico",
        name: "buyerEmail",
        placeholder: "ejemplo@apolon.com",
        type:"email"
    },
    {
        label: "Telefono de contacto",
        name: "buyerPhone",
        placeholder: "Ej: +598 99 123 456",
        type:"text"
    }
]

const Checkout = () => {
     
    const { items, totalAmount, clear, updateStock } = useContext(CartContext)
    const [buyer, setBuyer] = useState({
        buyerName: "",
        buyerPhone: "",
        buyerEmail: "",
      })

      const orderDate = new Date()
      
      const date = {          
          day: orderDate.getDate(),
          month: orderDate.getMonth() + 1,
          year: orderDate.getFullYear(),
          time:  `${orderDate.getHours()}:${orderDate.getMinutes()}`
      } 
      
      const [orderId, setOrderId] = useState("")

    
    const onChange = (event) => {
        setBuyer({...buyer, [event.target.name]: event.target.value})
    }
            

    const sendOrder = () => {            
        const db = getFirestore();
        const total = totalAmount();

        const order = {
            buyer,
            items,
            total,
            date
        };
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({ id }) => {
               setOrderId(id);
           });
           updateStock()
           clear()        
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        sendOrder()
    }       
      

  return (  
      
    orderId ? 
        <>
            <Alert variant='success'> Tu orden fue procesada correctamente con el numero {orderId}</Alert>
            <Link to='/' className="text-decoration-none">
                <Button variant="success">Vuelve al Inicio aqui</Button>
            </Link>
        </>
    :
        <>
            <div>
                <Alert variant='info'>Coloca aqui tus datos para generar la orden de compra!</Alert>            
                <div className='d-flex align-items-center justify-content-center'>    
                    <Form className='rounded p-4 p-sm-3 bg-dark shadow-lg' onSubmit={handleSubmit}>
                        {imputs.map((imput) => (
                            <Form.Group key={imput.name} className='mb-3 pt-3'>
                                <Form.Control 
                                    type={imput.type} 
                                    placeholder={imput.placeholder}
                                    value={buyer[imput.name]}
                                    onChange={onChange}
                                    name={imput.name}
                                />                    
                            </Form.Group>
                        ))}    
                        <Button 
                            className='mb-3'
                            variant="success" 
                            type="submit" 
                            disabled= {!(buyer.buyerName && buyer.buyerPhone && buyer.buyerEmail)}>                            
                                Finalizar compra
                        </Button>
                    </Form>
                </div>
            </div>
        </>               
  )
}

export default Checkout;