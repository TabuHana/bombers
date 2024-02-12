import { auth } from '@clerk/nextjs';

import { redirect } from 'next/navigation';
import { NotebookNav } from './_components/notebook-nav';

const NotebookLayout = async ({ children }: { children: React.ReactNode }) => {
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }

    return (
        <div className='h-full'>
            <NotebookNav />
            {children}
        </div>
    );
};
export default NotebookLayout;
