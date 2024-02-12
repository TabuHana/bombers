import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
import { auth, currentUser } from '@clerk/nextjs';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { PageList } from './_components/page-list';

const HomePage = async () => {
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }

    const notebook = await db.notebook.findUnique({
        where: { userId },
    });

    if (!notebook) {
        console.log('No notebook found for user', userId);
    }

    return (
        <div className='grid grid-cols-9 p-8 gap-4 h-[92%]'>
            <div className='col-span-6 flex flex-col gap-y-4'>
                <div className='h-1/3 flex justify-between gap-x-8'>
                    <div className='flex-1 rounded-md shadow-md bg-secondary p-4'>holder side</div>
                    <div className='w-[200px] shadow-md rounded-md bg-secondary p-4'>
                        <h5>actions</h5>
                        <div className='space-y-2 pt-2'>
                            <Button className='w-full'>Create Page</Button>
                            <Button className='w-full'>Create Event</Button>
                            <Button className='w-full'>Invite</Button>
                        </div>
                    </div>
                </div>
                <div className='h-2/3 flex justify-between gap-x-8'>
                    <div className='w-2/5 bg-secondary shadow-md rounded-md p-4'>
                        <h5>Events</h5>
                        <div className='pt-4'>
                            <div className='m-4 p-4 bg-gray-400 shadow-md rounded-md'>Test Event</div>
                            <div className='m-4 p-4 bg-gray-400 shadow-md rounded-md'>Test Event</div>
                            <div className='m-4 p-4 bg-gray-400 shadow-md rounded-md'>Test Event</div>
                            <div className='m-4 p-4 bg-gray-400 shadow-md rounded-md'>Test Event</div>
                        </div>
                    </div>
                    <div className='flex-1 bg-secondary shadow-md rounded-md p-4'>
                        <h5>Favorites</h5>
                        <div className='pt-4'>
                            <div className='m-4 p-4 bg-gray-400 shadow-md rounded-md'>Test Friend</div>
                            <div className='m-4 p-4 bg-gray-400 shadow-md rounded-md'>Test Friend</div>
                            <div className='m-4 p-4 bg-gray-400 shadow-md rounded-md'>Test Friend</div>
                            <div className='m-4 p-4 bg-gray-400 shadow-md rounded-md'>Test Friend</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-3 bg-secondary shadow-md rounded-md p-2 h-full'>
                <div className='p-2'>Search</div>
                <PageList />
            </div>
        </div>
    );
};
export default HomePage;
