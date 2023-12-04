'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const add = (item) => {
    const exists = cart.find((i) => i.slug === item.slug);

    if (exists) {
      // Sumar cantidad
      setCart(
        cart.map((i) =>
          i.slug === item.slug
            ? { ...exists, quantity: exists.quantity + item.quantity }
            : i
        )
      );
    } else {
      // Agregar nuevo item
      setCart([...cart, item]);
    }
  };

  const remove = (slug) => {
    setCart(cart.filter((i) => i.slug !== slug));
  };

  const quantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const total = () => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        add,
        remove,
        quantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
