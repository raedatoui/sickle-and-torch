import React from 'react';

interface AnnouncementBannerProps {
    title: string;
    subtitle?: string;
    date?: string;
    className?: string;
}

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({ 
    title, 
    subtitle, 
    date,
    className = ""
}) => {
    return (
        <div className={`w-full max-w-4xl mx-auto my-8 p-1 ${className}`}>
            <div className="relative border border-[var(--color-gold-dim)] bg-black/80 backdrop-blur-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_20px_rgba(201,162,39,0.1)]">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-gold-primary)]" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--color-gold-primary)]" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--color-gold-primary)]" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-gold-primary)]" />

                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
                    {subtitle && (
                        <span className="text-[var(--color-gold-dim)] uppercase tracking-[0.2em] text-xs md:text-sm font-bold">
                            {subtitle}
                        </span>
                    )}
                    <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide font-secondary">
                        {title}
                    </h2>
                </div>

                {date && (
                    <div className="flex flex-col items-center md:items-end">
                        <div className="bg-white text-black px-6 py-2 font-bold text-lg md:text-xl tracking-tighter shadow-[0_0_15px_rgba(255,255,255,0.4)] transform hover:scale-105 transition-transform duration-300">
                            {date}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AnnouncementBanner;
