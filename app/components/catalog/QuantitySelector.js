'use client';
import { useState } from 'react';
import Counter from '../UI/Counter';
import Button from '../UI/Button';

const QuantitySelector = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Counter
        counter={quantity}
        setCounter={setQuantity}
        max={product.inStock}
      />
      <Button className='w-full'>Agregar al carrito</Button>
    </>
  );
};
export default QuantitySelector;
