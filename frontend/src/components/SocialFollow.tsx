import type { FC } from 'react';

interface SocialFollowProps {
    className?: string;
    captionColor?: string;
    linkColor?: string;
    hoverColor?: string;
    caption?: string;
}

const SocialFollow: FC<SocialFollowProps> = ({ className = '', captionColor = 'text-[var(--color-text-main)]', caption = 'Follow us' }) => {
    return (
        <div className={`flex flex-col items-center space-y-2 ${className}`}>
            <p className={`text-lg pb-4 uppercase tracking-widest ${captionColor}`}>{caption}</p>
            <div className="flex space-x-6 items-center scale-150">
                <a
                    href="https://www.kickstarter.com/projects/loreplaypress/1466325150"
                    className="cursor-pointer transition-transform hover:scale-110"
                >
                    <img src="/socials/kickstarter.png" alt="Kickstarter" className="h-8 w-auto" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61584073951471#" className="cursor-pointer transition-transform hover:scale-110">
                    <img src="/socials/fb.png" alt="Facebook" className="h-8 w-auto" />
                </a>
                <a href="https://x.com/loreplaypress" className="cursor-pointer transition-transform hover:scale-110">
                    <img src="/socials/x.png" alt="Twitter" className="h-8 w-auto" />
                </a>
            </div>
        </div>
    );
};

export default SocialFollow;
