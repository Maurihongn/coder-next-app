import EditForm from '@/app/components/admin/edit-product/EditForm';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const product = await fetch(
    `http://localhost:3000/api/catalog/detail/${slug}`,
    {
      cache: 'no-store',
    }
  ).then((r) => r.json());

  return {
    title: `Coderhouse app - Editar producto ${product.title}`,
  };
}

const EditProduct = async ({ params }) => {
  const { slug } = params;
  const item = await fetch(`http://localhost:3000/api/catalog/detail/${slug}`, {
    cache: 'no-store',
  }).then((r) => r.json());

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
