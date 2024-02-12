import Link from 'next/link';

const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Github', href: '#' },
];

export const Navbar = () => {
    return (
        <header className='absolute inset-x-0 top-0 z-50'>
            <nav
                className='flex items-center justify-between p-6 lg:px-8'
                aria-label='Global'
            >
                <div className='flex flex-1'>
                    <Link href='#'>
                        <h1 className='font-bold text-xl'>Bombers Notebook</h1>
                    </Link>
                </div>
                {/* <div className='hidden lg:flex lg:gap-x-12'>
                    {navigation.map(item => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className='text-sm font-semibold leading-6 text-gray-900'
                        >
                            {item.name}
                        </Link>
                    ))}
                </div> */}
                <div className='flex flex-1 justify-end'>
                    <Link
                        href='/sign-in'
                        className='text-sm font-semibold leading-6 text-gray-900'
                    >
                        Sign in <span aria-hidden='true'>&rarr;</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};
