import Button from '@/app/components/UI/Button';
import Counter from '@/app/components/UI/Counter';
import QuantitySelector from '@/app/components/catalog/QuantitySelector';
import { productsMockData } from '@/data/mocks';
import Image from 'next/image';

const ProductDetail = ({ params }) => {
  const { slug } = params;

  const product = productsMockData.find((p) => p.slug === slug);
  return (
    <main className='container m-auto h-page px-4 w-full max-w-7xl lg:px-8 flex flex-col py-4 lg:gap-4  lg:flex-row '>
      <section className='flex flex-col p-4 bg-white rounded-t-sm gap-4 max-w-4xl w-full lg:gap-8 lg:p-8 lg:rounded-b-sm'>
        <h2 className='font-semibold text-xl text-neutral-900 lg:hidden'>
          {product.title}
        </h2>
        <div>
          <Image
            src={product.image}
            width={860}
            height={860}
            alt={product.name}
          />
        </div>

        <div>
          <p className='text-lg text-neutral-900'>{product.description}</p>
        </div>
      </section>
      <aside className='flex flex-col p-4 bg-white rounded-sm gap-4 lg:gap-8 lg:p-8 h-fit lg:max-w-sm rounded-b-sm lg:rounded-t-sm'>
        <div className='flex flex-col gap-4 items-start'>
          <h2 className='font-semibold text-xl text-neutral-900 hidden lg:contents'>
            {product.title}
          </h2>
          <p className='text-lg text-neutral-900'>$ {product.price}</p>

          <QuantitySelector product={product} />
        </div>
      </aside>
    </main>
  );
};
export default ProductDetail;
