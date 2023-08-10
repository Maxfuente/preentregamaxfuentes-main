import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const cartItemIds = new Set(cart.map(item => item.id));

    console.log(cart);

    const addItem = (item, quantity) => {
        if (!cartItemIds.has(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            console.error('Producto agregado');
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cartItemIds.has(itemId);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext