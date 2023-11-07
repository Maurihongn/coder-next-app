'use client';

import { useState } from 'react';
import Button from './Button';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div className='w-60 mx-auto flex gap-2 items-center'>
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
