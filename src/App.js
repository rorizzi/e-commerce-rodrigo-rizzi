import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import ItemDetailContainer from './components/item-detail-container/ItemDetailContainer';
import Routes from './routes/Routes';


function App() {
  const welcome = "Bienvenido a APOLON, tu e-commerce"

  return (
    
      <div className="App">                
        <Routes />          
      </div>
    
  );
}

export default App;
