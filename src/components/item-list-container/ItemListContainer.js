import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { getProds } from "../../data/products";
import ItemList from "../item-list/ItemList";

const ItemListContainer = () => {

  const [data, setData ] = useState([]) 
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProds
      .then((res) => { 
        if(res.length === 0) {
          throw new Error('Array no valido');
        }
        setData(res)})
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
      
  }, []);
  
  return (
    <div>
    {loading ? <Spinner animation="border" variant="light" /> :  <ItemList products= {data} />}     
    </div>
    );
};

export default ItemListContainer;


