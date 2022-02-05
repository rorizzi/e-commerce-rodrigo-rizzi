import './App.css';
import NavBar from './components/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import ItemDetailContainer from './components/item-detail-container/ItemDetailContainer';


function App() {
  const welcome = "Bienvenido a APOLON, tu e-commerce"

  return (
    
      <div className="App">
        <NavBar/>        
        
        <ItemDetailContainer />
        {/*<ItemListContainer/> */}
        <br />
            
      </div>
    
  );
}

export default App;
