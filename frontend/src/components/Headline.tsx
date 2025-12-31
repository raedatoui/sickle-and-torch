import type { ReactNode } from 'react';

interface HeadlineProps {
    children: ReactNode;
    className?: string;
}

const Headline = ({ children, className = '' }: HeadlineProps) => {
    return (
        <h1
            className={`text-4xl md:text-7xl font-bold gold-gradient-text leading-tight drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] font-old-newspaper ${className}`}
        >
            {children}
        </h1>
    );
};

export default Headline;
