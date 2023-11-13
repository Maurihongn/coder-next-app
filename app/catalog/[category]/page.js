import ProductList from '@/app/components/catalog/ProductList';

const Products = ({ params }) => {
  const { category } = params;
  return (
    <section>
      <ProductList category={category} />
    </section>
  );
};
export default Products;
