import 'bootstrap/dist/css/bootstrap.min.css';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useState, useEffect }  from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ItemDetail from '../item-detail/ItemDetail';

const ItemDetailContainer = () => {

    const { loading } = useProducts()     
    const { idItem } = useParams()  
    const [selectedItem, setSelectedItem] = useState([]);

    useEffect(() => {
        const db = getFirestore()
        const docRef = doc(db, 'items', idItem)
            getDoc(docRef).then((item) => {
                setSelectedItem(({...item.data(), id: item.id}))
            })

    }, []);

    console.log(selectedItem)
    return (
        <div>   
            <br />
            { loading ? <Spinner animation="border" variant="light" /> : <ItemDetail key={selectedItem.id} prod={selectedItem} />}
        </div>
    );
};

export default ItemDetailContainer;