import FilterMenu from '@/app/components/catalog/FilterMenu';
import MobileFilterMenu from '@/app/components/catalog/MobileFilterMenu';

const ProductosLayout = ({ children }) => {
  return (
    <main className='container m-auto h-page px-4 w-full max-w-7xl lg:px-8 flex flex-col py-4 gap-4 lg:flex-row'>
      <MobileFilterMenu />
      <FilterMenu />
      {children}
    </main>
  );
};

export default ProductosLayout;
