import { auth } from '@clerk/nextjs';

import { db } from '@/lib/db';
import { redirect } from 'next/navigation';

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
    const { userId } = auth();

    if (!userId) {
        return <div>loading...</div>;
    }

    const holder = await db.holder.findFirst({
        where: { userId },
    });

    if (!holder) {
        redirect('/onboarding');
    }

    return <div>{children}</div>;
};
export default HomeLayout;
