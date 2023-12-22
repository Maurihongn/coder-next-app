import ProductList from '@/app/components/catalog/ProductList';
import { Suspense } from 'react';

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `Coderhouse app - ${params.category}`,
  };
}

// export function generateStaticParams() {
//   return [
//     { category: 'all' },
//     { category: 'tvs' },
//     { category: 'hornos' },
//     { category: 'aires' },
//   ];
// }

export const revalidate = 60;

const Products = ({ params }) => {
  const { category } = params;
  return (
    <section>
      <Suspense fallback={<div>Cargando...</div>}>
        <ProductList category={category} />
      </Suspense>
    </section>
  );
};
export default Products;
