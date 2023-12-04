import Skeleton from '@mui/material/Skeleton';

const CardSkeleton = () => {
  return (
    <Skeleton
      variant='rounded'
      width={'100%'}
      height={320}
      sx={{ maxWidth: '320px' }}
    />
  );
};
export default CardSkeleton;
