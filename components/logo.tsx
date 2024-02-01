import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href='/'>
      <h1 className='font-bold text-2xl hidden md:block'>Bomber's Notebook</h1>
    </Link>
  );
};
