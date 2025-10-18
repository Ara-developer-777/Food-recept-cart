'use client'
import { useState, createContext, useEffect } from "react"
export const CartContext = createContext();

export default function CartProvider({children}) {

    const [orders, setOrders] =useState([]);

    useEffect(() => {
        const data = localStorage.getItem('orders');
        if (data) {
            setOrders(JSON.parse(data));
        } 
    }, [])

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders])

    const add = (product) => {
        const existingProduct = orders.find(elem => elem.idMeal === product.idMeal)

        if (!existingProduct) {
            setOrders([...orders, product])
        }
    }

    const removeOrder = (id) => {
        const newOrders = orders.filter(elem => elem.idMeal !== id);
        setOrders([...newOrders])

    }

    const count = orders.length;

  return (
    <CartContext.Provider value={{orders, removeOrder, add, count}}>
        {children}
    </CartContext.Provider>
  )
}
