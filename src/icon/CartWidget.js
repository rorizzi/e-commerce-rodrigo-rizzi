import { useContext } from "react" 
import { CartContext } from '../context/CartContext'; 

const CartIcon = () => {  

  const { numberOfItems } = useContext(CartContext)

    return (
        <div className="d-flex ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="feather feather-shopping-cart"
          viewBox="0 0 24 24"
          width={25}
          height={25}>
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"></path>
      </svg>   
      <h6>{numberOfItems()}</h6>    
    </ div>  
    )
};

export default CartIcon;

