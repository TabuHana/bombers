import type { Metadata } from 'next';

import { cn } from '@/lib/utils';
import { tabular } from '@/constants/fonts';

import './globals.css';

export const metadata: Metadata = {
    title: 'Bombers Notebook',
    description: 'Remember everything about your friends',
    icons: [
        {
            url: '/notebook-temp.svg',
            href: '/notebook-temp.svg',
        },
    ],
};

// devpass123!!

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={cn('bg-amber-200', tabular.className)}>{children}</body>
        </html>
    );
}
