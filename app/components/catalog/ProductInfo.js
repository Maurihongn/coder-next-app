import QuantitySelector from './QuantitySelector';

const ProductInfo = ({ product }) => {
  return (
    <div className='flex flex-col gap-4 items-start'>
      <h2 className='font-semibold text-xl text-neutral-900'>
        {product.title}
      </h2>
      <p className='text-lg text-neutral-900'>$ {product.price}</p>

      <QuantitySelector product={product} />
    </div>
  );
};
export default ProductInfo;
