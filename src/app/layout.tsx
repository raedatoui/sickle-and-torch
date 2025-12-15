import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const planchette = localFont({
    src: './fonts/planchette.woff2',
    variable: '--font-planchette',
    display: 'swap',
});

const cambria = localFont({
    src: './fonts/Cambria.woff2',
    variable: '--font-cambria',
    display: 'swap',
});

const bahnschrift = localFont({
    src: './fonts/Bahnschrift.woff2',
    variable: '--font-bahnschrift',
    display: 'swap',
});

const oldNewspaper = localFont({
    src: './fonts/OldNewspaperTypes.woff2',
    variable: '--font-old-newspaper',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Sickle & Torch - Zero Level Heroes',
    description: 'A rules expansion for 5e, Shadowdark, and DCC RPG.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${planchette.variable} ${cambria.variable} ${bahnschrift.variable} ${oldNewspaper.variable}`}>
            <body className="min-h-screen bg-[var(--color-void-bg)] text-[var(--color-text-main)] font-body">
                 {children}
            </body>
        </html>
    );
}