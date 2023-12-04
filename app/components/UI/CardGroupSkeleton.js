import CardSkeleton from './CardSkeleton';

const CardGroupSkeleton = () => {
  return (
    <div className='gap-4 grid grid-cols-1 sm:grid-cols-3 lg:gap-8'>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
};
export default CardGroupSkeleton;
