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
                className={`flex flex-col items-center text-center space-y-4 p-6 bg-black/20 border border-[var(--color-gold-dim)]/30 hover:border-[var(--color-gold-dim)] transition-all duration-300 hover:bg-black/60 group ${className}`}
            >
                {imageSrc && (
                    <div className="w-full mb-4 overflow-hidden rounded-sm border border-[var(--color-gold-dim)]/20 group-hover:border-[var(--color-gold-dim)]/50 transition-colors">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                )}

                <div className="min-h-[3rem] flex items-center justify-center w-full">
                    <Headline>{title}</Headline>
                </div>

                <div className="text-gray-300 font-secondary leading-relaxed text-2xl">{description}</div>
            </div>
        </div>
    );
};

export default InfoCard;
