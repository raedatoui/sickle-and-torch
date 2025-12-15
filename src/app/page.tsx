'use client';

import React from 'react';
import Section from '@/components/Section';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import InfoCard from '@/components/InfoCard';
import AdventureCard from '@/components/AdventureCard';
import SubscribeForm from '@/components/SubscribeForm';
import SocialFollow from '@/components/SocialFollow';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col w-full text-gray-200">
            {/* Global Fixed Background */}
            <div className="fixed inset-0 z-[-1] bg-[url('/red_bg.webp')] bg-cover bg-center bg-no-repeat" />

            {/* =========================================
               HERO SECTION
               ========================================= */}
            <Section className="min-h-[90vh] flex justify-center pt-32 pb-12">
                <div className="w-full max-w-7xl px-4 flex flex-col items-center text-center space-y-8">

                    {/* Main Headlines */}
                    <div className="space-y-4">
                        <h2 className="tracking-[0.2em] text-sm md:text-xl uppercase font-bold font-secondary text-gray-100">
                            Everything for Playing
                        </h2>
                        <h1 className="text-4xl md:text-7xl font-bold gold-gradient-text leading-tight drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                            ZERO LEVEL HEROES
                        </h1>
                        <p className="text-xl md:text-3xl font-secondary italic text-gray-300">
                            in one 40-page rules expansion
                        </p>
                    </div>

                    {/* Logo */}
                    <div className="w-full max-w-lg md:max-w-2xl my-8 -mt-4 filter drop-shadow-[0_0_25px_rgba(201,162,39,0.15)]">
                        <img src="/logo_st_black.webp" alt="Sickle & Torch Logo" className="w-full h-auto invert opacity-95 hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* System Callouts - Grid Layout Restored */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl text-xl md:text-2xl font-bold tracking-wide items-center justify-items-center drop-shadow-md text-gray-200 mt-8">
                        <div className="flex flex-col items-center gap-3 text-center">
                            <span>PLAY OUT YOUR</span>
                            <img src="/5e.webp" alt="5E" className="h-12 w-auto" />
                            <span>CHARACTER’S BACKSTORY</span>
                        </div>

                        <div className="flex flex-col items-center gap-3 text-center">
                            <span>RUN AN UNFORGETTABLE</span>
                            <img src="/shadowdark.webp" alt="Shadowdark" className="h-12 w-auto" />
                            <span>GAUNTLET</span>
                        </div>

                        <div className="flex flex-col items-center gap-3 text-center">
                            <span>HAVE EVEN MORE FUN WITH YOUR</span>
                            <img src="/dcc.webp" alt="DCC" className="h-12 w-auto" />
                            <span>FUNNEL!</span>
                        </div>
                    </div>

                    {/* Intro Description */}
                    <p className="max-w-4xl mt-8 text-center text-lg md:text-xl leading-relaxed font-secondary px-4">
                        <span className="text-[var(--color-gold-primary)] font-bold">Sickle & Torch</span> is a rules expansion for{' '}
                        <span className="text-white font-bold">5e</span>, <span className="text-white font-bold">Shadowdark</span> and{' '}
                        <span className="text-white font-bold">Dungeon Crawl Classics</span> that focuses on 0-level commoners on their paths towards
                        becoming heroic level 1 characters.
                    </p>

                    {/* Kickstarter Announcement */}
                    <AnnouncementBanner
                        title="Coming to Kickstarter"
                        date="February 2026"
                        className="mt-12"
                    />

                    {/* Social Follow */}
                    <SocialFollow className="mt-4" />
                </div>
            </Section>

            {/* =========================================
               FEATURES SECTION
               ========================================= */}
            <Section className="bg-black/30 backdrop-blur-sm border-y border-[var(--color-gold-dim)]/20">
                <div className="w-full max-w-7xl px-4 flex flex-col items-center">

                    {/* Placeholder for IMAGE 1 */}
                    <div className="w-full max-w-5xl h-64 md:h-96 bg-black/50 border border-[var(--color-gold-dim)] mb-12 flex items-center justify-center relative overflow-hidden group">
                         {/* Using crowd.webp as placeholder for 'Image 1' (General Atmosphere) */}
                        <img src="/crowd.webp" alt="General Atmosphere" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-2xl md:text-4xl font-bold uppercase text-white text-center px-4 drop-shadow-lg">
                                INCLUDING: Four unique original adventures ready for 0 level or low-level play!
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                        <InfoCard
                            title="PLUG AND PLAY"
                            description="Every mechanic is presented in its own short and sweet chapter, so that any new or alternative rules you like can be simply implemented whether you are already familiar with 0 level play, or easily tried out if you are going zero for the first time."
                        />
                         <InfoCard
                            title="THEY HAVE POTENTIAL…"
                            description={
                                <span>
                                    Roll up your 0-level characters the old school way, randomly determine their background and occupation and off you go! But know one thing - you <span className="text-white font-bold italic">WILL</span> get a chance to increase their ability scores using the new Potential mechanic.
                                </span>
                            }
                        />
                    </div>

                    {/* Full Width Feature with Image 2 Placeholder */}
                    <div className="w-full max-w-6xl mt-12">
                         <InfoCard
                            title="RAISE THE TORCHES!"
                            className="bg-gradient-to-b from-black/60 to-[var(--color-torch-red)]/10"
                            description="Four new Torch classes - inspiring spirits that arise from unjust deaths, sacrifice and martyrdom, ready to guide your 0-levels towards their chosen heroic path!"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mt-12">
                        <InfoCard
                            title="A ONE OF A KIND 0-LEVEL CAMPAIGN"
                            description="Play as a mob of commoners caught in a rebellion against corrupt overlords and evil monsters who have taken over their land! Four adventures which together tell the tale of the Fall of the Dusk Empire, with a unique system for determining random encounters and varying their strength. The adventures can be played in any order - or any one can be used as a starting point for a campaign of your own making!"
                        />
                         <InfoCard
                            title="GO ABOVE ZERO"
                            description="Sickle & Torch mechanics work for 0-level and low-level play in any of the three available systems. Every adventure can also be played by characters of level 1-3 (or even 4 in the 5e version) without any adjustments, using the new Difficulty Die mechanic."
                        />
                    </div>
                </div>
            </Section>

            {/* =========================================
               PICK YOUR SYSTEM SECTION
               ========================================= */}
            <Section className=" backdrop-blur-sm">
                <div className="w-full max-w-7xl px-4 space-y-12">
                     <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-6xl text-white font-old-newspaper">Pick Your System</h2>
                        <p className="text-xl text-[var(--color-gold-dim)] mt-4 font-secondary uppercase tracking-widest">
                            5e &bull; Dungeon Crawl Classics &bull; Shadowdark
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* 5E */}
                        <InfoCard
                            imageSrc="/00_cover_5E.webp"
                            imageAlt="5E Cover"
                            title={
                                <span className="flex items-center gap-2">
                                    <img src="/5e.webp" className="h-8 w-auto" alt="5e" />
                                    HEROIC ORIGINS
                                </span>
                            }
                            description="Play out your 5e character’s heroic origin - your next backstory may be wilder than you could have ever imagined with these new background rules, ability score improvement options and variant mechanics for encounters that scale as your characters advance from commoners to low-level heroes!"
                        />

                        {/* Shadowdark */}
                         <InfoCard
                            imageSrc="/00_cover_shadowdark.webp"
                            imageAlt="Shadowdark Cover"
                             title={
                                <span className="flex items-center gap-2">
                                    <img src="/shadowdark.webp" className="h-8 w-auto" alt="Shadowdark" />
                                    RUN THE GAUNTLET
                                </span>
                            }
                            description="Run through your next Shadowdark gauntlet (or four) using expanded rules for 0-level character play and advancement, and do it alongside an in-game guide who will help you towards the class your character aspires to become - the new Torch mechanic!"
                        />

                        {/* DCC */}
                         <InfoCard
                            imageSrc="/00_cover_DCC.webp"
                            imageAlt="DCC Cover"
                             title={
                                <span className="flex items-center gap-2">
                                    <img src="/dcc.webp" className="h-8 w-auto" alt="DCC" />
                                    ALL IN GOOD FUNNEL
                                </span>
                            }
                            description="Explore new options for 0-level trade goods, birth augurs, rules for 0-level character improvement, Torch guiding spirits and more - and have funnel levels of fun even with character levels 1 to 3 with the new Difficulty Die mechanic for stochastically scaling encounters!"
                        />
                    </div>
                </div>
            </Section>

            {/* =========================================
               ADVENTURES SECTION
               ========================================= */}
            <Section id="adventures">
                <div className="w-full max-w-7xl px-4 flex flex-col items-center">
                    <div className="text-center space-y-4 mb-16">
                         <h2 className="text-4xl md:text-7xl gold-gradient-text leading-none drop-shadow-lg font-old-newspaper">
                            Four Adventures,<br/>Endless Scenarios
                        </h2>
                        <h3 className="text-xl md:text-3xl text-gray-200 font-secondary max-w-3xl mx-auto">
                            Four strongholds of tyranny, ready to be stormed by righteous mobs.
                        </h3>

                        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-10 font-bold uppercase tracking-wider text-sm md:text-base">
                            <span className="px-6 py-2 bg-black/60 border border-[var(--color-gold-dim)]/50 text-[var(--color-gold-primary)] rounded shadow-sm">40+ Encounters</span>
                            <span className="px-6 py-2 bg-black/60 border border-[var(--color-gold-dim)]/50 text-[var(--color-gold-primary)] rounded shadow-sm">No Preset Paths</span>
                            <span className="px-6 py-2 bg-black/60 border border-[var(--color-gold-dim)]/50 text-[var(--color-gold-primary)] rounded shadow-sm">Levels 0-3</span>
                            <span className="px-6 py-2 bg-black/60 border border-[var(--color-gold-dim)]/50 text-[var(--color-gold-primary)] rounded shadow-sm">Replay Value: Incalculable</span>
                        </div>
                    </div>

                    {/* Adventure 1: Thrall Hold */}
                    <AdventureCard
                        title="Thrall Hold of the Blood Bailiff"
                        imageSrc="/bailiff.webp"
                        description={
                            <>
                                <p>The slaves of the Thrall Hold have revolted! The angry mob is storming the gates while the dreadful Blood Bailiff is gearing up to defend his palace and all the blasphemous secrets and dark magics it hides.</p>
                                <p>Your characters are a part of the mob - brave rebels seeking freedom from the slavers commanded by the Blood Bailiff, ready to clear out the fortress of his evil minions, loot the riches he stole from the people, and bring him to justice!</p>
                            </>
                        }
                    />

                    {/* Adventure 2: Perilous Chapel */}
                    <AdventureCard
                        title="Perilous Chapel of the Omni Patriarch"
                        reversed={true}
                        description={
                            <>
                                <p>The glorious New Law Temple is burning - its golden roof aflame with reflections of a thousand torches gathered on the square before its magnificent grand doors. The mass of people has gathered not for a prayer or a vigil, but for justice and revenge.</p>
                                <p>For too long have the inquisitors of the Inner Church burned, quartered or shackled anyone who dares speak their mind. For too long have the priests been wallowing in corrupt luxury, while people toil in misery, and innocents are accused of sin, to be slaughtered and enslaved!</p>
                            </>
                        }
                    />

                     {/* Adventure 3: Panopticon */}
                     <AdventureCard
                        title="Forbidden Citadel of the Panopticon Overmind"
                        description={
                            <>
                                <p>The Panopticon looms over the Dusk Empire, the seat of its intelligence service and the nexus of its supernatural surveillance apparatus. It is whispered that inside the fortress resides a huge magical brain, an overmind that controls all the scrying eyes and directs all the vile spies that observe and oversee every corner of the realm.</p>
                                <p>And what they see is that every corner of the realm is aflame with rebellion. Scrying eyes shot out of the sky, blackguards driven from the villages, and thousands of ordinary people converging on the Panopticon, ready to breach its seemingly impregnable walls and break open its dark secrets!</p>
                            </>
                        }
                    />

                     {/* Adventure 4: Alcazar */}
                     <AdventureCard
                        title="Roving Alcazar of the Golden Principal"
                        reversed={true}
                        description={
                            <>
                                <p>The Roving Alcazar has come to your homeland. An itinerant castle of basalt and gold built on a huge granite rock, it casts a long shadow of obscene splendor wherever it goes. Villages are emptied by its golden guard; livestock and birds are hunted to extinction by the winged beasts that protect it; and its depraved nobles led by the Golden Principal are said to bathe in blood of the innocent.</p>
                                <p>But now the day of reckoning has finally come. The three-storey tall stone wheels turned by elementals have ground to a halt, the flying beasts have been recalled back to its towers and the fabled rainbow bridge has appeared at the foot of the moving rock so that anyone can ascend towards the castle and through its golden gates. The servants of the Alcazar have revolted as the Dusk Empire erupts in rebellion!</p>
                            </>
                        }
                    />

                </div>
            </Section>

            {/* =========================================
               FOOTER / CTA SECTION
               ========================================= */}
            <Section className="!py-0">
                 <div className="w-full relative py-24 flex flex-col items-center space-y-16">
                     {/* Final Announcement */}
                     <div className="w-full flex justify-center px-4">
                        <AnnouncementBanner
                            title="Available"
                            date="April 2026"
                            className="max-w-xl"
                        />
                    </div>

                    {/* Follow Us */}
                    <SocialFollow />

                    {/* Join The Mob */}
                    <SubscribeForm />
                </div>

                {/* Mob Image at the very bottom */}
                <div className="w-full mt-auto">
                    <img src="/crowd.webp" alt="The Mob" className="block w-full h-auto max-h-[40vh] object-cover object-top opacity-80" />
                </div>
            </Section>
        </div>
    );
}
