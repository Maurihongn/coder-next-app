import { Suspense } from 'react';
import Button from '../components/UI/Button';
import AdminProductTable from '../components/admin/AdminProductTable';
import Link from 'next/link';
import LogoutButton from '../components/admin/LogoutButton';

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `Coderhouse app - Admin`,
  };
}

const page = () => {
  return (
    <main className='container m-auto h-page px-4 w-full max-w-7xl lg:px-8 flex flex-col py-4 gap-4'>
      <div className='flex w-full justify-between items-center'>
        <h2 className='text-2xl'>Panel de administración</h2>
        <LogoutButton />
      </div>
      <Link
        href={`/admin/new-product`}
        className='p-2 bg-neutral-900 w-fit text-white rounded-lg'
      >
        Nuevo producto
      </Link>
      <Suspense fallback={<p>Cargando...</p>}>
        <AdminProductTable />
      </Suspense>
    </main>
  );
};

export default page;
