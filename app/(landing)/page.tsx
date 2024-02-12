import Link from 'next/link';
import { Button } from '@/components/ui/button';

const LandingPage = () => {
    return (
        <div className='mx-auto max-w-2xl py-32 px-4 sm:py-48 lg:py-56'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                    Stay up to date with your friends!
                </h1>
                <p className='mt-6 text-lg leading-8 text-gray-600'>
                    Never lose track of your friends and what they are up to. See timezones and
                    remember info easily. Keep track of events, birthdays & more.
                </p>
                <div className='mt-10 flex items-center justify-center gap-x-6'>
                    <Button className='bg-[#DB8787]' asChild>
                        <Link href='/sign-up'>Get started</Link>
                    </Button>
                    <Button
                        asChild
                        variant='link'
                        className='text-sm font-semibold leading-6 text-gray-900 '
                    >
                        <Link href='#'>
                            Learn more <span aria-hidden='true'>→</span>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default LandingPage;
