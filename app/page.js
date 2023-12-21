export const metadata = {
  title: 'Coderhouse app',
  description: 'App de muestra en NextJS',
  heywords: ['Coderhouse', 'NextJS', 'Vercel', 'SSR'],
};

export default function Home() {
  return (
    <main className='container m-auto h-page px-4 w-full max-w-7xl lg:px-8 flex flex-col py-4 gap-4'>
      <h1 className='text-4xl text-neutral-950 font-bold my-4'>NextJS</h1>
      <hr />
      <p className='text-base mt-4'>Bienvenidos a Coderhouse</p>
    </main>
  );
}
