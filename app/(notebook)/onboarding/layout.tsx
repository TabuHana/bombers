import { auth } from '@clerk/nextjs';

import { db } from '@/lib/db';
import { redirect } from 'next/navigation';

const OnboardingLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (!userId) {
    return <div>loading...</div>;
  }

  const holder = await db.holder.findFirst({
    where: { userId },
  });

  if (holder) {
    redirect('/notebook')
  }

  return <div className=' h-full flex justify-center items-center'>{children}</div>;
};
export default OnboardingLayout;
