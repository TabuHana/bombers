import localFont from 'next/font/local';

export const tabular = localFont({
    src: [
        {
            path: '../public/fonts/Tabular-Light.woff2',
            weight: '300',
            style: 'light',
        },
        // {
        //     path: '../public/fonts/Tabular-LightItalic.woff2',
        //     weight: '300',
        //     style: 'light italic',
        // },
        {
            path: '../public/fonts/Tabular-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        // {
        //     path: '../public/fonts/Tabular-Italic.woff2',
        //     weight: '400',
        //     style: 'italic',
        // },
        {
            path: '../public/fonts/Tabular-Medium.woff2',
            weight: '500',
            style: 'medium',
        },
        // {
        //     path: '../public/fonts/Tabular-MediumItalic.woff2',
        //     weight: '500',
        //     style: 'medium italic',
        // },
        {
            path: '../public/fonts/Tabular-Semibold.woff2',
            weight: '600',
            style: 'semi-bold',
        },
        // {
        //     path: '../public/fonts/Tabular-SemiboldItalic.woff2',
        //     weight: '600',
        //     style: 'semi-bold italic',
        // },
        {
            path: '../public/fonts/Tabular-Bold.woff2',
            weight: '700',
            style: 'bold',
        },
        // {
        //     path: '../public/fonts/Tabular-BoldItalic.woff2',
        //     weight: '700',
        //     style: 'italic',
        // },
    ],
});
