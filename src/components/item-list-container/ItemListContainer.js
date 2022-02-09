import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ItemList from "../item-list/ItemList";

const ItemListContainer = ({welcome}) => {

  const {data, loading} = useProducts();
  
  return (
    <div>
      <h1>{welcome}</h1>
      <hr />
    {loading ? <Spinner animation="border" variant="light" /> :  <ItemList products= {data} />}     
    </div>
    );
};

export default ItemListContainer;


