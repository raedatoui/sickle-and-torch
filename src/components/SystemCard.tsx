import type React from 'react';

interface SystemCardProps {
    title: string;
    description: string;
    coverImage: string;
    systemIcon: string;
    systemName: string;
    invertIcon?: boolean;
}

const SystemCard: React.FC<SystemCardProps> = ({ title, description, coverImage, systemIcon, systemName, invertIcon = false }) => {
    return (
        <div className="flex flex-col items-center text-center space-y-4 p-6 bg-black/20 border border-[var(--color-gold-dim)]/30 hover:border-[var(--color-gold-dim)] transition-all duration-300 hover:bg-black/60 group h-full">
            <div className="w-full mb-4 overflow-hidden rounded-sm border border-[var(--color-gold-dim)]/20 group-hover:border-[var(--color-gold-dim)]/50 transition-colors">
                <img
                    src={coverImage}
                    alt={`${systemName} Cover`}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="min-h-[3rem] flex flex-col items-center justify-center w-full gap-3">
                <img src={systemIcon} className={`max-h-[100px]  ${invertIcon ? 'invert' : ''}`} alt={systemName} />
                <h3 className="text-2xl md:text-3xl font-bold gold-gradient-text leading-tight drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] font-old-newspaper uppercase">
                    {title}
                </h3>
            </div>

            <div className="text-gray-300 font-secondary leading-relaxed text-lg">{description}</div>
        </div>
    );
};

export default SystemCard;
