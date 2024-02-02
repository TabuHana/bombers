import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

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
        <div className='flex flex-col justify-center items-center h-full'>
            <div>Notebook belongs to user: {userId}</div>
        </div>
    );
};
export default HomePage;
