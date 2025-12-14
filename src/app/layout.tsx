import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Roboto_Condensed } from 'next/font/google';
import './globals.css';

const planchette = localFont({
    src: './fonts/planchette.woff2',
    variable: '--font-planchette',
    display: 'swap',
});

const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    variable: '--font-roboto',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Sickle & Torch - Zero Level Heroes',
    description: 'A rules expansion for 5e, Shadowdark, and DCC RPG.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${planchette.variable} ${robotoCondensed.variable}`}>
            <body className="min-h-screen bg-[var(--color-void-bg)] text-[var(--color-text-main)]">
                 {children}
            </body>
        </html>
    );
}