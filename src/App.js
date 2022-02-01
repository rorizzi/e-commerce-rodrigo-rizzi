import './App.css';
import NavBar from './components/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/item-list-container/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>Bienvenido a APOLON, tu e-commerce</h1>          
      <hr/>
      <ItemListContainer/>    
    </div>
  );
}

export default App;
