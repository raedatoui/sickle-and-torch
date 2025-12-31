import type { FC, ReactNode } from 'react';

interface AdventureCardProps {
    title1: string;
    title2: string;
    description: ReactNode;
    imageSrc: string;
    reversed?: boolean;
    locked?: boolean;
}

const AdventureCard: FC<AdventureCardProps> = ({ title1, title2, description, imageSrc, reversed = false, locked = false }) => {
    return (
        <div
            className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16 w-full max-w-6xl mx-auto py-6 md:py-12`}
        >
            {/* Image Container */}
            <div className="w-full md:w-2/5 px-4 md:px-0">
                <div className="relative group">
                    <div className="absolute -inset-2 bg-linear-to-r from-gold-dim to-torch-red opacity-30 group-hover:opacity-60 blur transition duration-500" />
                    <div className={`relative w-full overflow-hidden border border-gold-dim bg-black ${!imageSrc ? 'aspect-[3/4]' : ''}`}>
                        {locked ? (
                            <div className="relative w-full aspect-[2/3] flex flex-col items-center justify-between bg-torch-red overflow-hidden p-6 transition-transform duration-400 group-hover:scale-105">
                                {/* Background Image */}
                                {/*<img*/}
                                {/*    src="/adventures/red-bg.png"*/}
                                {/*    alt=""*/}
                                {/*    className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"*/}
                                {/*/>*/}

                                {/* Logo at Top */}
                                <img src="/logos/sicke-n-torch.webp" alt="Sickle & Torch" className="relative z-15 w-32 drop-shadow-md" />

                                {/* Main Artwork */}
                                <div className="absolute z-inset-0 flex items-center justify-center p-4 z-10">
                                    <img src={imageSrc} alt={`${title1} ${title2}`} className="w-full h-full object-contain" />
                                </div>

                                {/* Sheen Effect - Always Present, Heavier, Static */}
                                <div className="absolute inset-0 z-20 pointer-events-none bg-black/80 to-transparent opacity-60" />

                                {/* Coming Soon Banner */}
                                <div className="absolute top-3/4 z-20 w-[110%] bg-torch-red text-white text-center py-2 shadow-lg border-y-2 border-gold-primary transform -rotate-12">
                                    <span className="font-old-newspaper uppercase tracking-widest text-lg md:text-xl font-bold drop-shadow-sm">
                                        Cover Coming <br />
                                        to Kickstarter
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <img
                                src={imageSrc}
                                alt={`${title1} ${title2}`}
                                className="w-full h-auto block transition-transform duration-400 group-hover:scale-105"
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="w-full md:w-3/5 space-y-6 px-4 md:px-0 text-center md:text-left">
                <h3 className="text-2xl md:text-5xl font-bold uppercase leading-none gold-gradient-text drop-shadow-md">
                    {title1}
                    <br />
                    {title2}
                </h3>

                <div className="w-24 h-1 bg-torch-red mx-auto md:mx-0 shadow-[0_0_10px_var(--color-torch-red)]" />

                <div className="text-lg md:text-xl text-gray-200 font-secondary leading-relaxed space-y-4">{description}</div>
            </div>
        </div>
    );
};

export default AdventureCard;
