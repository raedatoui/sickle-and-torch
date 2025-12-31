import type { FC, ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

const Section: FC<SectionProps> = ({ children, className = '', id = '' }) => (
    <section id={id} className={`w-full flex py-8 flex-col items-center justify-center relative overflow-hidden ${className}`}>
        <div className="w-full flex flex-col items-center z-10">{children}</div>
    </section>
);

export default Section;
