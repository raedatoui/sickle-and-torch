import type React from 'react';

interface SocialFollowProps {
    className?: string;
    captionColor?: string;
    linkColor?: string;
    hoverColor?: string;
    caption?: string;
}

const SocialFollow: React.FC<SocialFollowProps> = ({
    className = '',
    captionColor = 'text-[var(--color-text-main)]',
    linkColor = 'text-[var(--color-text-main)]',
    hoverColor = 'hover:text-[var(--color-gold-primary)]',
    caption = 'Follow us',
}) => {
    return (
        <div className={`flex flex-col items-center space-y-2 ${className}`}>
            <p className={`text-sm uppercase tracking-widest ${captionColor}`}>{caption}</p>
            <div className="flex space-x-6">
                <a href="#" className={`${linkColor} ${hoverColor} cursor-pointer transition-colors font-bold uppercase tracking-wider`}>
                    KICKSTARTER
                </a>
                <a href="#" className={`${linkColor} ${hoverColor} cursor-pointer transition-colors font-bold uppercase tracking-wider`}>
                    FACEBOOK
                </a>
                <a href="#" className={`${linkColor} ${hoverColor} cursor-pointer transition-colors font-bold uppercase tracking-wider`}>
                    TWITTER
                </a>
            </div>
        </div>
    );
};

export default SocialFollow;
