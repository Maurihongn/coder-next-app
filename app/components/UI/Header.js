'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className='w-full bg-gray-900 px-8'>
      <div className='container mx-auto py-8 flex justify-between items-center'>
        <Image
          src={'/amazon-ar21.svg'}
          alt='amazon-logo'
          width={0}
          height={0}
          className='h-full w-auto'
        />
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
        </nav>
      </div>
    </header>
  );
};
export default Header;
