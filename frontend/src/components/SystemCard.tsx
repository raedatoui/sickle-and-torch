import type { FC } from 'react';

interface SystemCardProps {
    title: string;
    description: string;
    coverImage: string;
    systemIcon: string;
    systemName: string;
    invertIcon?: boolean;
}

const SystemCard: FC<SystemCardProps> = ({ title, description, coverImage, systemIcon, systemName, invertIcon = false }) => {
    return (
        <div
            className="relative flex flex-col items-center text-center space-y-4 p-6
            bg-void-panel/60 backdrop-blur-sm
            border border-gold-dim/30
            transition-all duration-500 ease-out
            group h-full
            hover:-translate-y-1
            hover:border-gold-primary
            hover:bg-void-panel
            hover:shadow-[0_0_40px_-10px_var(--color-torch-glow)]"
        >
            <div className="w-full mb-4 overflow-hidden rounded-sm border border-gold-dim/20 group-hover:border-gold-primary group-hover:shadow-[0_0_15px_var(--color-gold-glow)] transition-all duration-500">
                <img
                    src={coverImage}
                    alt={`${systemName} Cover`}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
            </div>

            <div className="min-h-[3rem] flex flex-col items-center justify-center w-full gap-3">
                <img src={systemIcon} className={`max-h-[100px]  ${invertIcon ? 'invert' : ''}`} alt={systemName} />
                <h3 className="text-2xl md:text-3xl font-bold gold-gradient-text leading-tight drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] font-old-newspaper uppercase">
                    {title}
                </h3>
            </div>

            <div className="text-gray-300 font-secondary leading-relaxed text-lg group-hover:text-[var(--color-text-main)] transition-colors duration-300">
                {description}
            </div>
        </div>
    );
};

export default SystemCard;
