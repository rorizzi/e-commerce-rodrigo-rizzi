import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import ComponentChildren from './components/component-children/ComponentChildren';

const age = 18;

function App() {
  return (
    <div className="App">
      <NavBar/>
      <hr />
      <h1>Hola, inicio de e-commerce de Rodrigo Rizzi</h1>          
      <hr/>
      <ItemListContainer/>     
      {/* <ComponentChildren otherProp={"El titulo"}>
          <h2>Componente hijo</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum sit blanditiis recusandae, 
            debitis eaque atque ullam perferendis vero nostrum, repellat illo, qui dolore sunt id esse 
            repellendus cumque iste tenetur.
          </p>
      </ComponentChildren> */}
    </div>
  );
}

export default App;
