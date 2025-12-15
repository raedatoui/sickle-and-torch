import React from 'react';

interface SubscribeFormProps {
    caption?: string;
    placeholder?: string;
    buttonText?: string;
}

const SubscribeForm: React.FC<SubscribeFormProps> = ({
    caption = "Join The Mob",
    placeholder = "Enter your email",
    buttonText = "Subscribe"
}) => {
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-2xl text-center space-y-8 px-4">
            <h2 className="text-5xl md:text-8xl font-bold gold-gradient-text uppercase tracking-wide font-old-newspaper">
                {caption}
            </h2>
            <p className="text-lg text-gray-300 font-secondary max-w-lg">
                Sign up for updates and be the first to know when the campaign launches.
            </p>

            <form className="flex flex-col md:flex-row gap-3 w-full" onSubmit={(e) => e.preventDefault()}>
                <input
                    type="email"
                    placeholder={placeholder}
                    className="flex-1 bg-black/80 border border-[var(--color-gold-dim)] px-6 py-4 text-white focus:border-[var(--color-gold-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold-primary)] font-secondary rounded-sm transition-all"
                />
                <button className="btn-fantasy px-10 py-4 font-bold whitespace-nowrap text-lg rounded-sm cursor-pointer">
                    {buttonText}
                </button>
            </form>
        </div>
    );
};

export default SubscribeForm;
