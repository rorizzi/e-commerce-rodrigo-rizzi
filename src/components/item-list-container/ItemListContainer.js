import { useState } from "react";
import Item from "../item/Item";

const items = [
  {id:"1", name: "Play Station 5", price: "1200", createdBy: "Sony"},
  {id:"2", name: "Alienware", price: "3500", createdBy: "Dell"},
  {id:"3", name: "Samsung Smart TV 55'", price: "900", createdBy: "Samsung"},
  {id:"4", name: "Aire Acondicionado", price: "350", createdBy:"SmartLife"},
];

const ItemListContainer = () => {
  //Hook para controlar el estado del componente
  const [selectedItem, setSelectedItem ] = useState(null) 

  return (
    <div>        
        <h1>Lista de productos</h1>
        <h3>Producto seleccionado</h3>
        <p>{selectedItem ? selectedItem.name : ""}</p>
        <p>{selectedItem ? `$${selectedItem.price}`  : ""}</p>
        <p>{selectedItem ? selectedItem.id : ""}</p>
        <hr/>
        {items.map( ({id, name, price}) => ( 
          <Item 
            key={id}
            id={id} 
            name={name} 
            price={price}
            setSelectedItem={setSelectedItem} /> 
        ))}
    </div>
    );
};

export default ItemListContainer;
