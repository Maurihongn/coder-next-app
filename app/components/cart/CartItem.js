'use client';
import Image from 'next/image';
import React from 'react';
import Button from '../UI/Button';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { useCartContext } from '@/context/CartContext';

const CartItem = ({ item }) => {
  const { remove } = useCartContext();

  const handleRemove = () => {
    remove(item.slug);
  };
  return (
    <li className='shadow-sm hover:shadow flex items-center gap-4 p-4 my-4 rounded-sm bg-white'>
      <div className=''>
        <Image src={item.image} alt={item.title} width={160} height={160} />
      </div>
      <div>
        <h3 className='line-clamp-2 font-semibold'>{item.title}</h3>
        <p className='text-sm '>${item.price * item.quantity}</p>
        <p className='text-sm'>Cantidad: {item.quantity}</p>
      </div>

      <Button
        className='bg-transparent text-red-600 hover:bg-transparent hover:text-red-800 px-0 py-0 ml-auto'
        onClick={handleRemove}
      >
        <DeleteForeverRoundedIcon color='currentColor' />
      </Button>
    </li>
  );
};

export default CartItem;
