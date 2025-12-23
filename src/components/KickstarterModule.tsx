import type React from 'react';
import SocialFollow from './SocialFollow';
import SubscribeForm from './SubscribeForm';

interface KickstarterModuleProps {
    className?: string;
    title?: string;
    date?: string;
}

const KickstarterModule: React.FC<KickstarterModuleProps> = ({ className = '', title = 'Coming to', date = 'February 2026' }) => {
    return (
        <div className={`w-full flex flex-col items-center space-y-10 ${className}`}>
            {/* Kickstarter Announcement - Single Line, No Box */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-center w-full">
                <div className="flex items-center gap-4 md:gap-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-[var(--color-gold-primary)] uppercase tracking-wide font-secondary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {title}
                    </h2>
                    <img src="/Kickstarter-Logo-PNG4.png" alt="Kickstarter" className="h-6 md:h-8 w-auto invert" />
                </div>
                <div className="btn-fantasy px-8 py-3 font-secondary font-bold whitespace-nowrap text-2xl rounded-sm pointer-events-none">{date}</div>
            </div>

            {/* Subscribe Form */}
            <SubscribeForm />

            {/* Social Follow */}
            <SocialFollow className="mt-2" />
        </div>
    );
};

export default KickstarterModule;
