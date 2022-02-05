import { useEffect, useState } from 'react';
import { getProds } from '../data/products';

const useProducts = () => {
    
    const [data, setData ] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getProds
        .then((res) => { 
          if(res.length === 0) {
            throw new Error('Array no valido');
          }
          setData(res)})
        .catch((err) => console.log('Error: ', err))
        .finally(() => setLoading(false))
      }, []);

    

    return {
        data,
        loading
        };
};

export default useProducts;
