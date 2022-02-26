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
        type: "text"
    },
    {
        label: "Correo Electrónico",
        name: "buyerEmail",
        placeholder: "ejemplo@apolon.com",
        type: "email"
    },
    {
        label: "Telefono de contacto",
        name: "buyerPhone",
        placeholder: "Ej: +598 99 123 456",
        type: "text"
    }
]

const Checkout = () => {
     
    const { items, totalAmount, clear } = useContext(CartContext)
    const [buyer, setBuyer] = useState({
        buyerName: "",
        buyerPhone: "",
        buyerEmail: "",
      })

      const[date, setDate] = useState({
          day:"",
          month: "",
          year: "",
      })
      
      const [orderId, setOrderId] = useState("")

    
    const onChange = (event) => {
        setBuyer({...buyer, [event.target.name]: event.target.value})      
    }
    
    const getOrderDate = () => {
        const orderDate = new Date()
        setDate({
            day: orderDate.getDate(),
            month: orderDate.getMonth(),
            year:orderDate.getFullYear()            
        })
    }
      

    const sendOrder =  (event) => {
        event.preventDefault()
        const db = getFirestore()
        const total = totalAmount()
        getOrderDate()
        
            const order = {
                buyer,
                items,
                total,
                date
            }        
       
            const ordersCollection = collection(db, "orders") 
            console.log(ordersCollection)
            addDoc(ordersCollection, order).then(({ id }) => {
                setOrderId(id)
                clear()
            })
                    
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
    <Form className='container align-items-center justify-content-center h-100 ' style={{backgroundColor: '#4E66AD', marginTop: 100}} >
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
            disabled= {!(buyer.buyerName && buyer.buyerPhone && buyer.buyerEmail)}
            onClick={sendOrder}>
                Finalizar compra
        </Button>
    </Form>

  )
}

export default Checkout