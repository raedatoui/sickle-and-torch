import type React from 'react';

interface AdventureCardProps {
    title: string;
    description: React.ReactNode;
    imageSrc?: string;
    reversed?: boolean;
}

const AdventureCard: React.FC<AdventureCardProps> = ({ title, description, imageSrc, reversed = false }) => {
    return (
        <div
            className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16 w-full max-w-6xl mx-auto py-12`}
        >
            {/* Image Container */}
            <div className="w-full md:w-2/5 px-4 md:px-0">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-gold-dim)] to-[var(--color-torch-red)] opacity-30 group-hover:opacity-60 blur transition duration-500" />
                    <div
                        className={`relative w-full overflow-hidden border border-[var(--color-gold-dim)] bg-black ${!imageSrc ? 'aspect-[3/4]' : ''}`}
                    >
                        {imageSrc ? (
                            <img
                                src={imageSrc}
                                alt={title}
                                className="w-full h-auto block transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-700">
                                <span className="uppercase tracking-widest text-sm text-center px-4">Image Placeholder</span>
                            </div>
                        )}

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="w-full md:w-3/5 space-y-6 px-4 md:px-0 text-center md:text-left">
                <h3
                    className="text-2xl md:text-5xl font-bold uppercase leading-none gold-gradient-text drop-shadow-md"
                    dangerouslySetInnerHTML={{ __html: title }}
                />

                <div className="w-24 h-1 bg-[var(--color-torch-red)] mx-auto md:mx-0 shadow-[0_0_10px_var(--color-torch-red)]" />

                <div className="text-lg md:text-xl text-gray-200 font-secondary leading-relaxed space-y-4">{description}</div>
            </div>
        </div>
    );
};

export default AdventureCard;
