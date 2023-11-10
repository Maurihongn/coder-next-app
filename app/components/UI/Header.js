'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className='w-full bg-neutral-900'>
      <div className='container mx-auto py-8 flex justify-between items-center px-4 w-full max-w-7xl lg:px-8'>
        {/* Menu desplegable en movil */}
        <Link href={'/'}>
          <Image
            src={'/coderlogo.svg'}
            alt='coderhouse-logo'
            width={0}
            height={0}
            className='h-full w-auto'
          />
        </Link>
        <nav className='flex justify-between gap-4'>
          <Link
            href='/'
            className={pathname == '/' ? 'text-slate-400' : 'text-slate-100'}
          >
            Home
          </Link>
          <Link
            href={'/'}
            className={
              pathname == '/account' ? 'text-slate-400' : 'text-slate-100'
            }
          >
            Cuenta
          </Link>
          <Link
            href={'/'}
            className={
              pathname == '/account' ? 'text-slate-400' : 'text-slate-100'
            }
          >
            Carrito
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
