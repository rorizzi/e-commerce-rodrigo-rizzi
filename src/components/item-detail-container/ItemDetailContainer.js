import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect }  from 'react';
import { Spinner } from 'react-bootstrap';
//import { useParams } from 'react-router-dom'; Comentado para entrega de desafio 'Detalles de producto'
import useProducts from '../../hooks/useProducts';
import ItemDetail from '../item-detail/ItemDetail';

const ItemDetailContainer = () => {

    const {data, loading} = useProducts();     
    // const {id} = useParams() Comentado para entrega de desafio 'Detalles de producto' 
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
      if(data.length > 0) {
          const actualProduct = data.find((prod) => prod.id === '4' );
          setSelectedItem(actualProduct);
      }    
    }, [data]);    

    return (
        <div>   
            <br />
            { loading ? <Spinner animation="border" variant="light" /> : <ItemDetail key={selectedItem.id} prod={selectedItem} />}
        </div>
    );
};

export default ItemDetailContainer;