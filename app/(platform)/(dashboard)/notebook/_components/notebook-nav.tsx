import { UserButton, auth, currentUser } from '@clerk/nextjs';
import { Sun } from 'lucide-react';
import Image from 'next/image';

export const NotebookNav = async () => {
    const user = await currentUser();

    return (
        <div className='h-14 border-b-2 shadow-md flex items-center justify-between px-24'>
            <div className='flex items-center'>
                <Image src='notebook-temp.svg' alt='logo' height={40} width={40} />
                <div className='text-2xl font-bold ml-2'>BombersNotebook</div>
            </div>
            <div className='flex items-center gap-4'>
                <div>
                    <Sun className='w-4 h-4' />
                </div>
                <div className='flex items-center gap-2 bg-slate-600 p-2 rounded-lg'>
                    <UserButton afterSignOutUrl='/' />
                    <p>{user?.firstName}</p>
                </div>
            </div>
        </div>
    );
};
