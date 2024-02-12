import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export const PageList = async () => {
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }

    const notebook = await db.notebook.findUnique({
        where: { userId },
    });

    if (!notebook) {
        return <div>No notebook found</div>;
    }

    const pages = await db.page.findMany({
        where: { userId, notebookId: notebook.id },
    });

    return (
        <div className='space-y-2'>
            {pages.map((page) => (
                <div key={page.id} className='m-4 p-5 bg-gray-400 shadow-md rounded-md'>
                    {page.name}
                </div>
            ))}
        </div>
    );
};
