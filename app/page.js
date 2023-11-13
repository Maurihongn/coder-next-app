import Image from 'next/image';
import Counter from './components/UI/Counter';
import Header from './components/UI/Header';

export const metadata = {
  title: 'Coderhouse app',
  description: 'App de muestra en NextJS',
  heywords: ['Coderhouse', 'NextJS', 'Vercel', 'SSR'],
};

// export async function generateMetadata({params, searchParams}, parent){
//   const {id} = params;
//   const {name} = searchParams;
//   return {
//     title: `Página ${id} - ${name}`,
//   }

// }

export default function Home() {
  return (
    <main className='container m-auto h-page px-4 w-full max-w-7xl lg:px-8 flex flex-col py-4 gap-4'>
      <h1 className='text-4xl text-blue-600 font-bold my-4'>NextJS</h1>
      <hr />
      <p className='text-base mt-4'>Bienvenidos a Coderhouse</p>
    </main>
  );
}
