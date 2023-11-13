import React from 'react';
import CartList from '../components/cart/CartList';
import CartForm from '../components/cart/CartForm';

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `Coderhouse app - Carrito`,
  };
}

const Cart = () => {
  return (
    <main className='container m-auto h-page px-4 w-full max-w-7xl lg:px-8 flex flex-col py-4 lg:gap-4 lg:flex-row '>
      <CartList />
      <CartForm />
    </main>
  );
};

export default Cart;
