import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ item }) => {
  return (
    <article className='shadow-sm hover:shadow-md bg-white rounded-lg h-full sm:max-w-xs'>
      <Link
        href={`/catalog/detail/${item.slug}`}
        className='flex flex-row sm:flex-col'
      >
        <div className='rounded-lg overflow-hidden w-full h-full aspect-square flex items-center justify-center'>
          <Image
            alt={item.title}
            src={item.image}
            width={500}
            height={500}
            placeholder='blur'
            blurDataURL='data:...'
          />
        </div>

        <div className='py-4 px-4 w-full'>
          <p className='text-2xl font-medium'>$ {item.price}</p>
          <p className='text-sm my-4 line-clamp-3 sm:line-clamp-2'>
            {item.title}
          </p>
        </div>
      </Link>
    </article>
  );
};
export default ProductCard;
