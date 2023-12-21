import TableItem from './TableItem';

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
    <div className='overflow-x-auto bg-white p-4 rounded-md'>
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
              <TableItem key={item.slug} item={item} />
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
