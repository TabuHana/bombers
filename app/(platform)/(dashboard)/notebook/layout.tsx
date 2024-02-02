import { auth } from '@clerk/nextjs';

import { redirect } from 'next/navigation';

const NotebookLayout = async ({ children }: { children: React.ReactNode }) => {
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }

    return <div className='h-full bg-blue-200'>{children}</div>;
};
export default NotebookLayout;
