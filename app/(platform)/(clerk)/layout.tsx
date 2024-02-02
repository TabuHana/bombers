import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
    const { userId } = auth();

    if (userId) {
        redirect('/notebook')
    }


    return <div className='flex justify-center items-center h-full'>{children}</div>;
};
export default ClerkLayout;
