'use client';
import { useRouter } from 'next/navigation';
import Button from './components/UI/Button';

export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <main className='container m-auto items-center justify-center flex flex-col gap-4 h-page'>
        <h1 className='text-4xl font-bold uppercase text-center text-neutral-900'>
          404 Página no encontrada
        </h1>
        <p>La ruta a la que intenta acceder no existe</p>

        <Button onClick={() => router.back()}>Volver</Button>
      </main>
    </>
  );
}
