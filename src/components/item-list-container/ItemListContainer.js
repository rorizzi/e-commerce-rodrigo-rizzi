import { Spinner } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";
import ItemList from "../item-list/ItemList";

const ItemListContainer = ({welcome}) => {

  const { loading } = useProducts();
  return (
    <div>
        <h4>{welcome}</h4>
        <hr />
      {loading ? <Spinner animation="border" variant="light" /> :  <ItemList />}     
    </div>
    );
};

export default ItemListContainer;


