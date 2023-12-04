'use client';

import { cartMock } from '@/data/mocks';
import React from 'react';
import CartItem from './CartItem';
import { useCartContext } from '@/context/CartContext';

const CartList = () => {
  const { cart } = useCartContext();
  return (
    <section className='w-full lg:max-w-4xl'>
      <h2 className='text-2xl'>Tu carrito</h2>
      <div>
        {cart && cart.length ? (
          <ul>
            {cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </ul>
        ) : (
          <h3>No tenes items en el carrito</h3>
        )}
      </div>
    </section>
  );
};

export default CartList;
