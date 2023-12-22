import ProductCard from './ProductCard';

const getItemsByCategory = async (category) => {
  try {
    const response = await fetch(
      `https://localhost:3000/api/catalog/${category}?`,
      {
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      const data = [];
      return data;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const ProductList = async ({ category }) => {
  const { data } = await getItemsByCategory(category);

  if (data === null || data === undefined || data.length === 0)
    return (
      <div className='justify-center items-center'>
        <h1 className='text-2xl font-bold'>No hay productos</h1>
      </div>
    );

  return (
    <div className='justify-center items-center gap-4 grid grid-cols-1 sm:grid-cols-3 lg:gap-8'>
      {data.map((product) => (
        <ProductCard key={product.slug} item={product} />
      ))}
    </div>
  );
};
export default ProductList;
