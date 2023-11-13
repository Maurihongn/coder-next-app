'use client';

import { useState } from 'react';
import Button from './Button';

const Counter = ({ counter, setCounter, max }) => {
  const increase = () => counter < max && setCounter(counter + 1);
  const decrease = () => counter > 1 && setCounter(counter - 1);

  return (
    <div className='w-full mx-auto flex gap-2 items-center max-w-xs'>
      <Button className='w-full' onClick={decrease}>
        -
      </Button>
      <p className='w-full text-center'>{counter}</p>
      <Button className='w-full' onClick={increase}>
        +
      </Button>
    </div>
  );
};
export default Counter;
