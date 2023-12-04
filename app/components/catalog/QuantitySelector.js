'use client';
import { useState } from 'react';
import Counter from '../UI/Counter';
import Button from '../UI/Button';
import { useCartContext } from '@/context/CartContext';

const QuantitySelector = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { add } = useCartContext();

  const handleAdd = () => {
    add({
      ...product,
      quantity,
    });
  };

  return (
    <>
      <Counter
        counter={quantity}
        setCounter={setQuantity}
        max={product.inStock}
      />
      <Button className='w-full' onClick={handleAdd}>
        Agregar al carrito
      </Button>
    </>
  );
};
export default QuantitySelector;
