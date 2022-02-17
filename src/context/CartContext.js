import { createContext, useState } from "react"

 export const CartContext = createContext()
 

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])
  
    
    const onAdd = (newItem, quantity) => {        
        if (isInCart(newItem.id)) return

        newItem.stock = newItem.stock - quantity
        newItem = {...newItem, quantity: quantity }
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
            }}>
                {children}
        </CartContext.Provider>
    )
}