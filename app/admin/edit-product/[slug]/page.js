import EditForm from '@/app/components/admin/edit-product/EditForm';

export const revalidate = 60;
const getProduct = async (slug) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/catalog/detail/${slug}`,
      {
        cache: 'no-store',
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

// export async function generateMetadata({ params }) {
//   const { slug } = params;
//   const product = await getProduct(slug);

//   return {
//     title: `Coderhouse app - Editar producto ${product.title}`,
//   };
// }

const EditProduct = async ({ params }) => {
  const { slug } = params;
  const item = await getProduct(slug);

  if (!item) {
    return <></>;
  }

  // console.log(item);

  return (
    <section className='p-4'>
      <EditForm item={item} />
    </section>
  );
};
export default EditProduct;
