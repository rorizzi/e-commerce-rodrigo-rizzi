import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore'


const useProducts = () => {
    
    
    const [data, setData ] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {

      const db = getFirestore();
      const productsCollection = collection(db, 'items')
      
      getDocs(productsCollection)
        .then((snapshot) => {
          setData(
            snapshot.docs.map((prod) => ({...prod.data(), id: prod.id})))
        })    
        .finally(() => setLoading(false))
      }, []);

    

    return {
        data,
        loading
        };
};

export default useProducts;
