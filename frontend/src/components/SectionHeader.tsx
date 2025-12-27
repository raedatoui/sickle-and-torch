import type React from 'react';
import type { ReactNode } from 'react';
import Headline from './Headline';

interface SectionHeaderProps {
    title: ReactNode;
    subtitle?: ReactNode;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = '' }) => {
    return (
        <div className={`text-center mb-12 space-y-4 ${className}`}>
            <Headline>{title}</Headline>
            {subtitle && <h3 className="text-xl md:text-3xl text-gray-200 font-secondary max-w-3xl mx-auto">{subtitle}</h3>}
        </div>
    );
};

export default SectionHeader;
