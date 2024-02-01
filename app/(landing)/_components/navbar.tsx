import { Logo } from '@/components/logo';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className='px-4 py-6'>
      <div className='mx-auto flex gap-x-48 items-center max-w-4xl'>
        <Logo />
        <div className='bg-amber-100 rounded-full px-6 py-2 font-bold space-x-8 mx-auto shadow-md'>
          <Link href='/about' className='hover:border-b hover:border-black'>
            About
          </Link>
          <Link href='/faqs' className='hover:border-b hover:border-black'>
            FAQs
          </Link>
          <Link href='/sign-up' className='hover:border-b hover:border-black'>
            Sign Up
          </Link>
          <Link href='/sign-in' className='hover:border-b hover:border-black'>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};
