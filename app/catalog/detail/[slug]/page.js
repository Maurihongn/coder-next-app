import Button from '@/app/components/UI/Button';
import Counter from '@/app/components/UI/Counter';
import QuantitySelector from '@/app/components/catalog/QuantitySelector';
import { productsMockData } from '@/data/mocks';
import { db } from '@/firebase/config';
import { collection, doc, getDoc, where } from 'firebase/firestore';
import Image from 'next/image';

const getProduct = async (slug) => {
  const productRef = doc(db, 'productos', slug);
  const productDoc = await getDoc(productRef);

  const product = productDoc.data();

  console.log(product);
  return product;
};

export async function generateMetadata({ params }) {
  const { slug } = params;
}

const ProductDetail = async ({ params }) => {
  const { slug } = params;

  const product = await getProduct(slug);
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
