'use client';

import { ReactNode } from 'react';

// Reusable Section Component
const Section = ({ 
    children, 
    className = "", 
    id = "" 
}: { 
    children: ReactNode; 
    className?: string;
    id?: string;
}) => (
    <section id={id} className={`w-full py-16 md:py-24 flex flex-col items-center justify-center relative overflow-hidden ${className}`}>
        <div className="w-full flex flex-col items-center z-10">
            {children}
        </div>
    </section>
);

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col w-full">
            {/* Red BG - Global fixed background */}
            <div className="fixed inset-0 z-[-1] bg-[url('/red_bg.webp')] bg-cover bg-center bg-no-repeat" />

            {/* Section 1: Logo & Intro */}
            <Section className="min-h-[60vh]">
                <div className="w-full max-w-7xl px-4 flex flex-col items-center text-center space-y-4 md:space-y-6">
                    <h2 className="tracking-[0.2em] text-sm md:text-xl uppercase font-bold font-secondary">Everything for Playing</h2>
                    <h1 className="text-4xl md:text-7xl font-bold gold-gradient-text leading-tight drop-shadow-lg">ZERO LEVEL HEROES</h1>
                    <p className="text-lg md:text-2xl font-secondary italic text-gray-200">in one 40-page rules expansion</p>
                </div>

                <div className="w-full max-w-sm md:max-w-2xl mt-8 md:mt-12 filter drop-shadow-[0_0_15px_rgba(201,162,39,0.2)] px-4">
                    <img src="/logo_st_black.webp" alt="Sickle & Torch Logo" className="w-full h-auto invert opacity-95 hover:opacity-100 transition-opacity" />
                </div>

                <p className="max-w-3xl mt-8 md:mt-12 text-center text-lg md:text-xl leading-relaxed font-secondary text-gray-200 px-4">
                    <span className="text-[var(--color-gold-primary)] font-bold">Sickle & Torch</span> is a rules expansion for{' '}
                    <span className="text-white font-bold">5e</span>, <span className="text-white font-bold">Shadowdark</span> and{' '}
                    <span className="text-white font-bold">Dungeon Crawl Classics</span> that focuses on 0-level commoners on their paths towards
                    becoming heroic level 1 characters.
                </p>
            </Section>

            {/* Section 2: Covers */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-7xl px-4 place-items-center">
                    {/* 5E */}
                    <div className="flex flex-col items-center space-y-4 group max-w-sm">
                        <h3 className="text-xl md:text-2xl font-bold text-center leading-tight min-h-[3rem] flex items-center justify-center">
                            <span>
                                PLAY OUT YOUR <img src="/5e.webp" alt="5E" className="inline-block h-8 md:h-12 mx-1 align-middle" /> CHARACTER'S BACKSTORY
                            </span>
                        </h3>
                        <div className="w-full aspect-[3/4] shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                            <img src="/00_cover_5E.webp" alt="5E Edition Cover" className="object-cover w-full h-full rounded-sm border border-[var(--color-gold-dim)]/30" />
                        </div>
                    </div>

                    {/* Shadowdark */}
                    <div className="flex flex-col items-center space-y-4 group max-w-sm">
                        <h3 className="text-xl md:text-2xl font-bold text-center leading-tight min-h-[3rem] flex items-center justify-center">
                           <span>
                                RUN AN UNFORGETTABLE <img src="/shadowdark.webp" alt="Shadowdark" className="inline-block h-8 md:h-12 mx-1 align-middle" /> GAUNTLET
                           </span>
                        </h3>
                        <div className="w-full aspect-[3/4] shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                            <img src="/00_cover_shadowdark.webp" alt="Shadowdark Edition Cover" className="object-cover w-full h-full rounded-sm border border-[var(--color-gold-dim)]/30" />
                        </div>
                    </div>

                    {/* DCC */}
                    <div className="flex flex-col items-center space-y-4 group max-w-sm">
                        <h3 className="text-xl md:text-2xl font-bold text-center leading-tight min-h-[3rem] flex items-center justify-center">
                            <span>
                                HAVE EVEN MORE FUN WITH YOUR <img src="/dcc.webp" alt="DCC" className="inline-block h-8 md:h-12 mx-1 align-middle" /> FUNNEL!
                            </span>
                        </h3>
                        <div className="w-full aspect-[3/4] shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                            <img src="/00_cover_DCC.webp" alt="DCC Edition Cover" className="object-cover w-full h-full rounded-sm border border-[var(--color-gold-dim)]/30" />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 3: Adventures + Background Bailiff */}
            <Section className="min-h-[80vh] justify-center">
                {/* Background Bailiff - Absolute within this section */}
                <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-40 pointer-events-none">
                    <img src="/bailiff.webp" alt="" className="h-full w-auto object-cover md:object-contain scale-125 md:scale-100" />
                </div>

                <div className="relative z-10 w-full flex flex-col items-center px-4">
                    <div className="max-w-5xl text-center space-y-6 md:space-y-10">
                        <div>
                            <h2 className="text-4xl md:text-7xl font-bold uppercase text-white leading-none mb-2">Four Adventures</h2>
                            <h2 className="text-4xl md:text-7xl font-bold uppercase gold-gradient-text leading-none">Endless Scenarios</h2>
                        </div>

                        <div className="space-y-4 text-base md:text-2xl font-secondary">
                            <p>
                                <span className="text-[var(--color-gold-primary)] font-bold text-2xl md:text-4xl">40+</span>{' '}
                                <span className="text-white">encounters</span>
                                <span className="text-gray-400">, from </span>
                                <span className="text-green-400 italic">colorful</span>
                                <span className="text-gray-400"> to </span>
                                <span className="text-red-500 italic">terrifying</span>
                            </p>
                            <div className="h-px w-1/3 mx-auto bg-gradient-to-r from-transparent via-[var(--color-gold-dim)] to-transparent my-4" />
                            <p className="text-gray-200">
                                A simple & elegant mechanic to <span className="text-white font-bold">randomize</span> and{' '}
                                <span className="text-white font-bold">scale</span> their strength
                            </p>
                            <p className="text-lg md:text-3xl font-bold text-white mt-4">No preset paths. No fixed encounters.</p>
                            <p className="text-gray-300">
                                Playable with <span className="text-[var(--color-gold-primary)]">0-level</span> or{' '}
                                <span className="text-[var(--color-gold-primary)]">low-level (1-3)</span> characters
                            </p>
                            <div className="h-px w-1/3 mx-auto bg-gradient-to-r from-transparent via-[var(--color-gold-dim)] to-transparent my-4" />
                            <p className="text-xl md:text-3xl">
                                <span className="text-gray-400">Potential replay value:</span>{' '}
                                <span className="gold-gradient-text font-bold tracking-wider">INCALCULABLE</span>
                            </p>
                        </div>

                        {/* Kickstarter Banner moved inside the card for cohesion */}
                        <div className="pt-8 mt-4">
                            <div className="inline-flex flex-col items-center space-y-2 p-6">
                                <p className="text-xs md:text-sm uppercase tracking-widest text-[var(--color-gold-dim)]">Coming to Kickstarter</p>
                                <div className="bg-white text-black px-4 py-1 font-bold rounded text-sm tracking-tighter shadow-[0_0_15px_rgba(255,255,255,0.4)]">KICKSTARTER</div>
                                <h2 className="text-2xl md:text-4xl font-bold text-white">February 2026</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 5: Join The Mob */}
            <Section className="!py-0 !md:py-0">
                <div className="flex flex-col items-center justify-center w-full max-w-2xl text-center space-y-8 mb-16 px-4 pt-16 md:pt-24">
                    <h2 className="text-5xl md:text-8xl font-bold gold-gradient-text uppercase tracking-wide">Join The Mob</h2>
                    <p className="text-lg text-gray-300 font-secondary max-w-lg">
                        Sign up for updates and be the first to know when the campaign launches.
                    </p>

                    <form className="flex flex-col md:flex-row gap-3 w-full">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-black/80 border border-[var(--color-gold-dim)] px-6 py-4 text-white focus:border-[var(--color-gold-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold-primary)] font-secondary rounded-sm transition-all"
                        />
                        <button className="btn-fantasy px-10 py-4 font-bold whitespace-nowrap text-lg rounded-sm cursor-pointer">
                            Subscribe
                        </button>
                    </form>

                    <div className="flex flex-col items-center space-y-4 pt-8">
                        <p className="text-sm uppercase tracking-widest text-[var(--color-text-muted)]">Follow us</p>
                        <div className="flex space-x-6 text-[var(--color-gold-primary)]">
                            <a
                                href="#"
                                className="hover:text-white transition-colors font-bold border border-[var(--color-gold-dim)] hover:border-white px-4 py-2 text-sm rounded uppercase tracking-wider"
                            >
                                Kickstarter
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors font-bold border border-[var(--color-gold-dim)] hover:border-white px-4 py-2 text-sm rounded uppercase tracking-wider"
                            >
                                Facebook
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors font-bold border border-[var(--color-gold-dim)] hover:border-white px-4 py-2 text-sm rounded uppercase tracking-wider"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full relative mt-auto">
                    <img src="/crowd.webp" alt="The Mob" className="block w-full h-auto max-h-[50vh] object-cover object-top" />
                </div>
            </Section>
        </div>
    );
}