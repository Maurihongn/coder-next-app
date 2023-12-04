'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Menu from './Menu';
import { useCartContext } from '@/context/CartContext';

const Header = () => {
  const pathname = usePathname();
  const { quantity } = useCartContext();

  return (
    <header className='w-full bg-neutral-900 sticky lg:static'>
      <div className='container mx-auto h-16 lg:h-24 flex items-center px-4 w-full max-w-7xl lg:px-8 relative'>
        {/* Menu desplegable en movil */}
        <Menu />
        <Link
          href={'/'}
          className='absolute  right-1/2 translate-x-1/2 lg:static lg:translate-x-0'
        >
          <Image
            src={'/coderlogo.svg'}
            alt='coderhouse-logo'
            width={0}
            height={0}
            className='h-full w-auto'
          />
        </Link>
        <nav className='flex justify-between gap-4 ml-auto items-center'>
          <div className='hidden lg:contents'>
            <Link
              href={'/catalog/all'}
              className={`${
                pathname.startsWith('/catalog/')
                  ? 'bg-neutral-800'
                  : 'bg-transparent'
              } px-4 py-2 text-neutral-50 rounded-sm hover:bg-neutral-700 whitespace-nowrap text-ellipsis`}
            >
              Catalogo
            </Link>
          </div>
          <Link
            href={'/cart'}
            className={`${
              pathname == '/cart' ? 'text-slate-400' : 'text-slate-100'
            }`}
          >
            <ShoppingCartOutlinedIcon />
            <span>{quantity() > 9 ? '+9' : quantity()}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
