import type { Metadata } from 'next';
import Script from 'next/script';
import localFont from 'next/font/local';
import './globals.css';

const cambria = localFont({
    src: './fonts/Cambria.woff2',
    variable: '--font-cambria',
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
    icons: {
        icon: '/favicon.png',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${cambria.variable} ${oldNewspaper.variable}`}>
            <body className="min-h-screen bg-[var(--color-void-bg)] text-[var(--color-text-main)] font-body">
                {children}
                <Script id="google-analytics" src="https://www.googletagmanager.com/gtag/js?id=G-CNWD59EVHJ" strategy="afterInteractive" />
                <Script strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-CNWD59EVHJ');
                    `}
                </Script>
            </body>
        </html>
    );
}
