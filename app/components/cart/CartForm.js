'use client';

import React, { useState } from 'react';
import Button from '../UI/Button';
import { useCartContext } from '@/context/CartContext';
import { Timestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'sonner';

const createOrder = async (values, cart) => {
  const body = JSON.stringify({
    values,
    cart,
  });
  const response = await fetch('/api/cart/checkout', {
    method: 'POST',
    body: body,
  });

  const data = await response.json();

  return data;
};

const CartForm = () => {
  const { cart, total, quantity, clearCart } = useCartContext();

  const [values, setValues] = useState({
    email: '',
    direction: '',
    name: '',
    lastname: '',
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      toast.error('No hay productos en el carrito');
      return;
    }

    const result = await createOrder(values, cart);

    if (result.outOfStock) {
      toast.error(result.message);
      return;
    }

    toast.message(result.message);
    clearCart();
  };
  return (
    <section className=' w-full lg:max-w-sm'>
      <h2 className='text-2xl mb-4'>Resumen</h2>
      <div className='bg-white p-4 rounded-md'>
        <p className='text-lg text-neutral-900'>Total: $ {total()}</p>
        <p className='text-lg text-neutral-900'>N° items: {quantity()}</p>
        <p className='text-lg text-neutral-900'>Envío: $ 10000</p>
        <p className='text-lg text-neutral-900'>Total: $ {total() + 10000}</p>

        <form
          className='w-full flex flex-col gap-4 my-4'
          onSubmit={handleSubmit}
        >
          <input
            type='nombre'
            required
            placeholder='Tu nombre'
            className='p-2 rounded w-full border bg-neutral-200 block '
            name='name'
            onChange={handleChange}
          />
          <input
            type='apellido'
            required
            placeholder='Tu apellido'
            className='p-2 rounded w-full border bg-neutral-200 block'
            name='lastname'
            onChange={handleChange}
          />
          <input
            type='direccion'
            required
            placeholder='Tu dirección'
            className='p-2 rounded w-full border bg-neutral-200 block'
            name='direction'
            onChange={handleChange}
          />
          <input
            type='email'
            required
            placeholder='Tu email'
            className='p-2 rounded w-full border bg-neutral-200 block'
            name='email'
            onChange={handleChange}
          />

          <Button type='submit' className='w-full'>
            Finalizar compra
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CartForm;
