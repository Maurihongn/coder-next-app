import Image from 'next/image';
import Counter from './components/UI/Counter';
import Header from './components/UI/Header';

// export const metadata = {
//   title: 'Coderhouse app',
//   description: 'App de muestra en NextJS',
//   heywords: ['Coderhouse', 'NextJS', 'Vercel', 'SSR'],
// };

// export async function generateMetadata({params, searchParams}, parent){
//   const {id} = params;
//   const {name} = searchParams;
//   return {
//     title: `Página ${id} - ${name}`,
//   }

// }

export default function Home() {
  return (
    <main className='m-auto'>
      <Header />
      <Counter />
      <Image
        src={'/maestro-yi.webp'}
        alt='next image'
        width={120}
        height={120}
      />
      <Image
        src={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAbcRh2P5fyrAXj0Tx4-xQK5taYdnNOPAl74VZyIqQagqHPOamtj2u6PVbnf_f-ENoYmg&usqp=CAU'
        }
        alt='next image'
        width={120}
        height={120}
      />
      <h1 className='text-4xl text-blue-600 font-bold my-4'>NextJS</h1>
      <hr />
      <p className='text-base mt-4'>Bienvenidos a Coderhouse</p>
    </main>
  );
}
