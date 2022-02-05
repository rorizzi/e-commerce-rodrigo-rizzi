import { Spinner } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";
import ItemList from "../item-list/ItemList";

const ItemListContainer = () => {


  const {data, loading} = useProducts();
  
  return (
    <div>
    {loading ? <Spinner animation="border" variant="light" /> :  <ItemList products= {data} />}     
    </div>
    );
};

export default ItemListContainer;


