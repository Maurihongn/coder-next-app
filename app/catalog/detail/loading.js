import Skeleton from '@mui/material/Skeleton';

const Loading = () => {
  return (
    <main className='container m-auto h-page px-4 w-full max-w-7xl lg:px-8 flex flex-col py-4 lg:gap-4  lg:flex-row '>
      <Skeleton
        variant='rounded'
        width={'100%'}
        height={'400px'}
        sx={{ maxWidth: '860px', aspectRatio: 1 }}
      />

      <Skeleton
        variant='rounded'
        width={'100%'}
        height={320}
        sx={{ maxWidth: '320px' }}
      />
    </main>
  );
};

export default Loading;
