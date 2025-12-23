'use client';

import React from 'react';
import AdventureCard from '@/components/AdventureCard';
import Headline from '@/components/Headline';
import InfoCard from '@/components/InfoCard';
import KickstarterModule from '@/components/KickstarterModule';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import SystemCard from '@/components/SystemCard';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col w-full text-gray-200">
            {/* Global Fixed Background */}
            <div className="fixed inset-0 z-[-1] bg-[url('/red_bg.webp')] bg-cover bg-center bg-no-repeat" />
            <div className="fixed inset-0 z-[-1] bg-black/50" />
            {/* =========================================
               HERO SECTION
               ========================================= */}
            <Section className="min-h-[90vh] flex justify-center">
                <div className="w-full max-w-7xl px-4 flex flex-col items-center text-center space-y-8">
                    {/* Main Headlines */}
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-3xl uppercase font-bold font-secondary text-gray-100">Everything for Playing</h2>
                        <Headline>ZERO LEVEL HEROES</Headline>
                        <p className="text-xl md:text-3xl font-secondary uppercase font-bold text-gray-100">in one 40-page rules expansion</p>
                    </div>

                    {/* Logo */}
                    <div className="w-full max-w-lg md:max-w-2xl my-8 -mt-4 filter drop-shadow-[0_0_25px_rgba(201,162,39,0.15)]">
                        <img
                            src="/logo_st_black.webp"
                            alt="Sickle & Torch Logo"
                            className="w-full h-auto invert opacity-95 hover:opacity-100 transition-opacity duration-500"
                        />
                    </div>

                    {/* System Callouts - Grid Layout Restored */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl text-xl md:text-2xl font-bold tracking-wide items-start justify-items-center drop-shadow-md text-gray-200 mt-8">
                        <div className="flex flex-col items-center gap-3 text-center">
                            <span>PLAY OUT YOUR</span>
                            <img src="/5e.webp" alt="5E" className="h-20 w-auto" />
                            <span>CHARACTER’S BACKSTORY</span>
                        </div>

                        <div className="flex flex-col items-center gap-3 text-center">
                            <span>RUN AN UNFORGETTABLE</span>
                            <img src="/shadowdark.webp" alt="Shadowdark" className="h-20 w-auto invert" />
                            <span>GAUNTLET</span>
                        </div>

                        <div className="flex flex-col items-center gap-3 text-center">
                            <span>
                                HAVE EVEN MORE
                                <br />
                                FUN WITH YOUR
                            </span>
                            <img src="/dcc.webp" alt="DCC" className="h-20 w-auto" />
                            <span>FUNNEL!</span>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="flex justify-center">
                <div className="w-full max-w-7xl px-4 flex flex-col items-center text-center space-y-8">
                    {/* Intro Description */}
                    <p className="max-w-4xl mt-8 text-center text-lg md:text-xl leading-relaxed font-secondary px-4">
                        <span className="text-[var(--color-gold-primary)] font-bold">Sickle & Torch</span> is a rules expansion for{' '}
                        <span className="text-white font-bold">5e</span>, <span className="text-white font-bold">Shadowdark</span> and{' '}
                        <span className="text-white font-bold">Dungeon Crawl Classics</span> that focuses on 0-level commoners on their paths towards
                        becoming heroic level 1 characters.
                    </p>

                    <KickstarterModule className="mt-12" />
                </div>
            </Section>

            {/* =========================================
               FEATURES SECTION
               ========================================= */}
            <Section>
                <div className="w-full max-w-7xl px-4 flex flex-col items-center">
                    {/* Placeholder for IMAGE 1 */}
                    {/*<div className="w-full max-w-5xl h-64 md:h-96 bg-black/50 border border-[var(--color-gold-dim)] mb-12 flex items-center justify-center relative overflow-hidden group">*/}
                    {/*    /!* Using crowd.webp as placeholder for 'Image 1' (General Atmosphere) *!/*/}
                    {/*    <img*/}
                    {/*        src="/crowd.webp"*/}
                    {/*        alt="General Atmosphere"*/}
                    {/*        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"*/}
                    {/*    />*/}
                    {/*    <div className="absolute inset-0 flex items-center justify-center">*/}
                    {/*        <h2 className="text-2xl md:text-4xl font-bold uppercase text-white text-center px-4 drop-shadow-lg">*/}
                    {/*            INCLUDING: Four unique original adventures ready for 0 level or low-level play!*/}
                    {/*        </h2>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <InfoCard
                        title="PLUG AND PLAY"
                        description="Every mechanic is presented in its own short and sweet chapter, so that any new or alternative rules you like can be simply implemented whether you are already familiar with 0 level play, or easily tried out if you are going zero for the first time."
                    />

                    <InfoCard
                        title="THEY HAVE POTENTIAL…"
                        description={
                            <span>
                                Roll up your 0-level characters the old school way, randomly determine their background and occupation and off you go!
                                But know one thing - you <span className="text-white font-bold italic">WILL</span> get a chance to increase their
                                ability scores using the new Potential mechanic.
                            </span>
                        }
                    />

                    <InfoCard
                        title="RAISE THE TORCHES!"
                        description="Four new Torch classes - inspiring spirits that arise from unjust deaths, sacrifice and martyrdom, ready to guide your 0-levels towards their chosen heroic path!"
                    />

                    <InfoCard
                        title="A ONE OF A KIND 0-LEVEL CAMPAIGN"
                        description="Play as a mob of commoners caught in a rebellion against corrupt overlords and evil monsters who have taken over their land! Four adventures which together tell the tale of the Fall of the Dusk Empire, with a unique system for determining random encounters and varying their strength. The adventures can be played in any order - or any one can be used as a starting point for a campaign of your own making!"
                    />
                    <InfoCard
                        title="GO ABOVE ZERO"
                        description="Sickle & Torch mechanics work for 0-level and low-level play in any of the three available systems. Every adventure can also be played by characters of level 1-3 (or even 4 in the 5e version) without any adjustments, using the new Difficulty Die mechanic."
                    />
                </div>
            </Section>

            {/* =========================================
               PICK YOUR SYSTEM SECTION
               ========================================= */}
            <Section>
                <div className="w-full max-w-7xl px-4 space-y-12">
                    <SectionHeader title="Pick Your System" subtitle="5e • Shadowdark • Dungeon Crawl Classics" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* 5E */}
                        <SystemCard
                            coverImage="/00_cover_5E.webp"
                            systemName="5e"
                            systemIcon="/5e.webp"
                            title="HEROIC ORIGINS"
                            description="Play out your 5e character’s heroic origin - your next backstory may be wilder than you could have ever imagined with these new background rules, ability score improvement options and variant mechanics for encounters that scale as your characters advance from commoners to low-level heroes!"
                        />

                        {/* Shadowdark */}
                        <SystemCard
                            coverImage="/00_cover_shadowdark.webp"
                            systemName="Shadowdark"
                            systemIcon="/shadowdark.webp"
                            invertIcon={true}
                            title="RUN THE GAUNTLET"
                            description="Run through your next Shadowdark gauntlet (or four) using expanded rules for 0-level character play and advancement, and do it alongside an in-game guide who will help you towards the class your character aspires to become - the new Torch mechanic!"
                        />

                        {/* DCC */}
                        <SystemCard
                            coverImage="/00_cover_DCC.webp"
                            systemName="DCC"
                            systemIcon="/dcc.webp"
                            title="ALL IN GOOD FUNNEL"
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
                    <div className="flex flex-col items-center w-full mb-16">
                        <SectionHeader
                            title={
                                <>
                                    Four Adventures,
                                    <br />
                                    Endless Scenarios
                                </>
                            }
                            subtitle="Four strongholds of tyranny, ready to be stormed by righteous mobs."
                            className="mb-0"
                        />

                        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-10 font-bold uppercase tracking-wider text-xl md:text-2xl">
                            <span className="px-4 py-2 bg-black/60 border border-[var(--color-gold-dim)]/50 text-[var(--color-gold-primary)] rounded shadow-sm whitespace-nowrap">
                                40+ Encounters
                            </span>
                            <span className="px-4 py-2 bg-black/60 border border-[var(--color-gold-dim)]/50 text-[var(--color-gold-primary)] rounded shadow-sm whitespace-nowrap">
                                No Preset Paths
                            </span>
                            <span className="px-4 py-2 bg-black/60 border border-[var(--color-gold-dim)]/50 text-[var(--color-gold-primary)] rounded shadow-sm whitespace-nowrap">
                                Levels 0-3
                            </span>
                            <span className="px-4 py-2 bg-black/60 border border-[var(--color-gold-dim)]/50 text-[var(--color-gold-primary)] rounded shadow-sm whitespace-nowrap">
                                Replay Value: Incalculable
                            </span>
                        </div>
                    </div>

                    {/* Adventure 1: Thrall Hold */}
                    <AdventureCard
                        title="Thrall Hold of the Blood Bailiff"
                        imageSrc="/bailiff.webp"
                        description={
                            <>
                                <p>
                                    The slaves of the Thrall Hold have revolted! The angry mob is storming the gates while the dreadful Blood Bailiff
                                    is gearing up to defend his palace and all the blasphemous secrets and dark magics it hides.
                                </p>
                                <p>
                                    Your characters are a part of the mob - brave rebels seeking freedom from the slavers commanded by the Blood
                                    Bailiff, ready to clear out the fortress of his evil minions, loot the riches he stole from the people, and bring
                                    him to justice!
                                </p>
                            </>
                        }
                    />

                    {/* Adventure 2: Perilous Chapel */}
                    <AdventureCard
                        title="Perilous Chapel of the Omni Patriarch"
                        reversed={true}
                        description={
                            <>
                                <p>
                                    The glorious New Law Temple is burning - its golden roof aflame with reflections of a thousand torches gathered on
                                    the square before its magnificent grand doors. The mass of people has gathered not for a prayer or a vigil, but
                                    for justice and revenge.
                                </p>
                                <p>
                                    For too long have the inquisitors of the Inner Church burned, quartered or shackled anyone who dares speak their
                                    mind. For too long have the priests been wallowing in corrupt luxury, while people toil in misery, and innocents
                                    are accused of sin, to be slaughtered and enslaved!
                                </p>
                            </>
                        }
                    />

                    {/* Adventure 3: Panopticon */}
                    <AdventureCard
                        title="Forbidden Citadel of the Panopticon Overmind"
                        description={
                            <>
                                <p>
                                    The Panopticon looms over the Dusk Empire, the seat of its intelligence service and the nexus of its supernatural
                                    surveillance apparatus. It is whispered that inside the fortress resides a huge magical brain, an overmind that
                                    controls all the scrying eyes and directs all the vile spies that observe and oversee every corner of the realm.
                                </p>
                                <p>
                                    And what they see is that every corner of the realm is aflame with rebellion. Scrying eyes shot out of the sky,
                                    blackguards driven from the villages, and thousands of ordinary people converging on the Panopticon, ready to
                                    breach its seemingly impregnable walls and break open its dark secrets!
                                </p>
                            </>
                        }
                    />

                    {/* Adventure 4: Alcazar */}
                    <AdventureCard
                        title="Roving Alcazar of the Golden Principal"
                        reversed={true}
                        description={
                            <>
                                <p>
                                    The Roving Alcazar has come to your homeland. An itinerant castle of basalt and gold built on a huge granite rock,
                                    it casts a long shadow of obscene splendor wherever it goes. Villages are emptied by its golden guard; livestock
                                    and birds are hunted to extinction by the winged beasts that protect it; and its depraved nobles led by the Golden
                                    Principal are said to bathe in blood of the innocent.
                                </p>
                                <p>
                                    But now the day of reckoning has finally come. The three-storey tall stone wheels turned by elementals have ground
                                    to a halt, the flying beasts have been recalled back to its towers and the fabled rainbow bridge has appeared at
                                    the foot of the moving rock so that anyone can ascend towards the castle and through its golden gates. The
                                    servants of the Alcazar have revolted as the Dusk Empire erupts in rebellion!
                                </p>
                            </>
                        }
                    />
                </div>
            </Section>

            {/* =========================================
               FOOTER / CTA SECTION
               ========================================= */}
            <Section className="!py-0">
                <div className="w-full relative flex flex-col items-center">
                    <KickstarterModule className="mb-16" />
                </div>

                {/* Mob Image at the very bottom */}
                <div className="w-full mt-auto">
                    <img src="/crowd.webp" alt="The Mob" className="block w-full h-auto max-h-[40vh] object-cover object-top opacity-80" />
                </div>
            </Section>
        </div>
    );
}
