import { productsMockData } from '@/data/mocks';
import ProductCard from './ProductCard';

const ProductList = ({ category }) => {
  const items =
    category === 'all'
      ? productsMockData
      : productsMockData.filter((product) => product.type === category);
  return (
    <div className='justify-center items-center gap-4 grid grid-cols-1 sm:grid-cols-3 lg:gap-8'>
      {items.map((product) => (
        <ProductCard key={product.slug} item={product} />
      ))}
    </div>
  );
};
export default ProductList;
