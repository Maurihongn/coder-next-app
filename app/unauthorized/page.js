import Link from 'next/link';

const page = () => {
  return (
    <section className='h-page w-full p-4 flex items-center justify-center'>
      <div className='flex flex-col gap-4 items-center'>
        <h3 className='text-3xl font-semibold'>Usuario no autorizado</h3>
        <Link
          href={`/`}
          className='p-2 bg-neutral-900 text-white rounded-lg text-center w-full max-w-[240px]'
        >
          Ir al home
        </Link>
      </div>
    </section>
  );
};
export default page;
