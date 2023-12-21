import CreateForm from '@/app/components/admin/new-product/CreateForm';

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `Coderhouse app - Nuevo producto`,
  };
}

const NewProduct = () => {
  return (
    <section className='p-4'>
      <CreateForm />
    </section>
  );
};
export default NewProduct;
