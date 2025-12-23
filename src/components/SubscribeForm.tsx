import type React from 'react';


const SubscribeForm: React.FC = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center text-center space-y-8 px-4">
            <div className="w-full max-w-2xl flex flex-col items-center space-y-8">
                <p className="text-lg text-gray-300 font-secondary">Sign up for updates and be the first to know when the campaign launches.</p>

                <form className="flex flex-col md:flex-row gap-3 w-full" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 bg-black/80 border border-[var(--color-gold-dim)] px-6 py-4 text-white focus:border-[var(--color-gold-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold-primary)] font-secondary rounded-sm transition-all"
                    />
                    <button type="submit" className="btn-fantasy px-6 py-3 md:px-10 md:py-4 font-bold whitespace-nowrap text-3xl md:text-4xl rounded-sm cursor-pointer">
                        Join The Mob
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SubscribeForm;
