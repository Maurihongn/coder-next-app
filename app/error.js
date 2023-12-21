'use client'; // Error components must be Client Components

import Button from '@/app/components/UI/Button';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className='h-page flex items-center justify-center'>
      <div className='m-auto'>
        <h2 className='text-xl'>Algo no salió bien!</h2>
        <hr className='my-6' />
        <Button onClick={reset}>Intentar nuevamente</Button>
      </div>
    </section>
  );
}
