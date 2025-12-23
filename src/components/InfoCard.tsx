import type React from 'react';
import type { ReactNode } from 'react';
import Headline from './Headline';

interface InfoCardProps {
    title: string | ReactNode;
    description: string | ReactNode;
    imageSrc?: string;
    className?: string;
    imageAlt?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, imageSrc, imageAlt = '', className = '' }) => {
    return (
        <div className="w-full max-w-6xl mt-12">
            <div
                className={`relative flex flex-col items-center text-center space-y-4 p-6 
                bg-[var(--color-void-panel)]/60 backdrop-blur-sm
                border border-[var(--color-gold-dim)]/30 
                transition-all duration-500 ease-out 
                group
                hover:-translate-y-1
                hover:border-[var(--color-gold-primary)] 
                hover:bg-[var(--color-void-panel)]
                hover:shadow-[0_0_40px_-10px_var(--color-torch-glow)]
                ${className}`}
            >
                {imageSrc && (
                    <div className="w-full mb-4 overflow-hidden rounded-sm border border-[var(--color-gold-dim)]/20 group-hover:border-[var(--color-gold-primary)] group-hover:shadow-[0_0_15px_var(--color-gold-glow)] transition-all duration-500">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                    </div>
                )}

                <div className="min-h-[3rem] flex items-center justify-center w-full">
                    <Headline>{title}</Headline>
                </div>

                <div className="text-gray-300 font-secondary leading-relaxed text-2xl group-hover:text-[var(--color-text-main)] transition-colors duration-300">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
