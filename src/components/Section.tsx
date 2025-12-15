import React, { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

const Section: React.FC<SectionProps> = ({ 
    children, 
    className = "", 
    id = "" 
}) => (
    <section id={id} className={`w-full py-16 md:py-24 flex flex-col items-center justify-center relative overflow-hidden ${className}`}>
        <div className="w-full flex flex-col items-center z-10">
            {children}
        </div>
    </section>
);

export default Section;
