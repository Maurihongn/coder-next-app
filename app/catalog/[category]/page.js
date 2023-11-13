import ProductList from '@/app/components/catalog/ProductList';

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `Coderhouse app - ${params.category}`,
  };
}

const Products = ({ params }) => {
  const { category } = params;
  return (
    <section>
      <ProductList category={category} />
    </section>
  );
};
export default Products;
