import { doc, getFirestore, updateDoc } from "firebase/firestore"
import { createContext, useState } from "react"

 export const CartContext = createContext()
 

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])
  
    
    const onAdd = (newItem, quantity) => {        
        if (isInCart(newItem.id)) return
        newItem = {...newItem, quantity: quantity}
        setItems([...items, newItem])                     
    }

    const isInCart = (id) => {
        return items.some(item => item.id === id)
    }

    const clear = () => {
        setItems([])
    }

    const removeItem = (id) => {        
        const newListOfItems = items.filter(item => item.id !== id)
        setItems(newListOfItems)
    }

    const isEmpty = () => {
        if (items.length === 0) {
            return true
        } 
        return false
    }

    const totalAmount = () => {
        let total = 0
        items.forEach(item => total += (item.price * item.quantity))
        return total
    }

    const numberOfItems = () => {
        return items.reduce((total, actual) => total + actual.quantity, 0)
    }

    const updateStock = () => {
        const db = getFirestore()
        items.map((item) => {
            // console.log(`el item ${item.title} actualiza su stock ${item.stock} - ${item.quantity}`)
            const itemRef = doc(db, "items", item.id)
            updateDoc(itemRef, {stock: item.stock - item.quantity})
        })
    }

    return (
        <CartContext.Provider 
            value={{
                items,
                 onAdd,
                isInCart,
                clear,
                removeItem,
                isEmpty,
                totalAmount,
                numberOfItems,
                updateStock,
            }}>
                {children}
        </CartContext.Provider>
    )
}