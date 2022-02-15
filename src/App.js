import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Routes';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    
      <div className="App">                
        <CartProvider>  
          <Routes /> 
        </CartProvider>           
      </div>
    
  );
}

export default App;
