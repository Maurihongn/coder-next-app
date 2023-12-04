import { productsMockData } from '@/data/mocks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const getAdminItems = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/admin/list`, {
      cache: 'no-store',
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const AdminProductTable = async () => {
  const items = await getAdminItems();

  return (
    <div className='overflow-x-auto bg-white p-4 rounded-sm'>
      <table className='w-full text-xs text-left text-gray-600'>
        <thead className='text-sm text-neutral-900'>
          <tr>
            <th scope='col' className='px-2'>
              Imagen
            </th>
            <th scope='col' className='px-2'>
              Nombre
            </th>
            <th scope='col' className='px-2'>
              Precio
            </th>
            <th scope='col' className='px-2'>
              Stock
            </th>
            <th scope='col' className='px-2'>
              Tipo
            </th>
            <th scope='col' className='px-2'>
              Descripción
            </th>
            <th scope='col' className='px-2'>
              Acciones
            </th>
          </tr>
        </thead>
        {items.data && items.data.length > 0 ? (
          <tbody>
            {items.data.map((item) => (
              <tr key={item.slug}>
                <td className='px-2'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                  />
                </td>
                <td className='line-clamp-2 px-2'>{item.title}</td>
                <td className='px-2'>{item.price}</td>
                <td className='px-2'>{item.inStock}</td>
                <td className='px-2'>{item.type}</td>
                <td className=' truncate max-w-prose px-2'>
                  {item.description}
                </td>
                <td className='flex gap-2 px-2'>
                  <Link
                    href={`/admin`}
                    className='rounded bg-green-500 hover:bg-green-800 p-2 text-white'
                  >
                    <EditRoundedIcon />
                  </Link>

                  <Link
                    href={`/admin`}
                    className='rounded bg-red-500 hover:bg-red-800 p-2 text-white'
                  >
                    <DeleteForeverRoundedIcon />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <h4>No hay productos</h4>
        )}
      </table>
    </div>
  );
};

export default AdminProductTable;
