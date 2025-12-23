import type React from 'react';

interface SubscribeFormProps {
    caption?: string;
    placeholder?: string;
    buttonText?: string;
}

const SubscribeForm: React.FC<SubscribeFormProps> = ({ caption = 'Join The Mob', placeholder = 'Enter your email', buttonText = 'Join The Mob' }) => {
    return (
        <div className="w-full flex flex-col items-center justify-center text-center space-y-8 px-4">
            {/*<h2 className="w-full text-5xl md:text-8xl font-bold gold-gradient-text uppercase tracking-wide font-old-newspaper">{caption}</h2>*/}

            <div className="w-full max-w-2xl flex flex-col items-center space-y-8">
                <p className="text-lg text-gray-300 font-secondary">Sign up for updates and be the first to know when the campaign launches.</p>

                <form className="flex flex-col md:flex-row gap-3 w-full" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder={placeholder}
                        className="flex-1 bg-black/80 border border-[var(--color-gold-dim)] px-6 py-4 text-white focus:border-[var(--color-gold-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold-primary)] font-secondary rounded-sm transition-all"
                    />
                    <button className="btn-fantasy px-10 py-4 font-old-newspaper font-bold whitespace-nowrap text-4xl rounded-sm cursor-pointer">
                        {buttonText}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SubscribeForm;
