'use client';
import { categoriesMockData } from '@/data/mocks';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FilterMenu = () => {
  const pathname = usePathname();
  return (
    <aside className='bg-white h-fit p-4 rounded-lg hidden lg:block shadow-sm'>
      <h3 className='text-neutral-800 font-bold text-base mb-4'>Categorias</h3>

      <nav className='flex flex-col gap-2'>
        <Link
          href={`/catalog/all`}
          className={`${
            pathname == `/catalog/all` ? 'bg-neutral-100' : 'bg-transparent'
          } px-4 py-2 text-neutral-800 rounded-lg hover:bg-neutral-100 whitespace-nowrap text-ellipsis`}
        >
          Todas las categorias
        </Link>
        {categoriesMockData &&
          categoriesMockData.length > 0 &&
          categoriesMockData.map((category) => (
            <Link
              href={`/catalog/${category.slug}`}
              key={category.id}
              className={`${
                pathname == `/catalog/${category.slug}`
                  ? 'bg-neutral-100'
                  : 'bg-transparent'
              } px-4 py-2 text-neutral-800 rounded-lg hover:bg-neutral-200 whitespace-nowrap text-ellipsis`}
            >
              {category.name}
            </Link>
          ))}
      </nav>
    </aside>
  );
};
export default FilterMenu;
