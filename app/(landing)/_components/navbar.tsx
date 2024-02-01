import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <div className='px-4 py-4 bg-amber-400 shadow-sm'>
            <div className='md:max-w-6xl mx-auto flex justify-between items-center'>
                <h1 className='font-bold text-2xl'>Bombers</h1>
                <div className='flex items-center justify-between space-x-4 md:w-auto md:block'>
                    <Button size='sm' variant='ghost' asChild>
                        <Link href='/sign-in'>Login</Link>
                    </Button>
                    <Button size='sm' variant='ghost' asChild>
                        <Link href='/sign-up'>Sign Up</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};
