'use client';
import { useState } from 'react';


const SubscribeForm: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const joinTheMob = async () => {
        if (!email) {
            setMessage('Please enter an email address.');
            return;
        }

        setLoading(true);
        setMessage('');

        try {
            const response = await fetch('/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const text = await response.text();

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${text}`);
            }

            setMessage(`Success! Mailgun says: ${text}`);
        } catch (error: unknown) {
            console.error('Failed to call function:', error);
            if (error instanceof Error) setMessage(`Request failed: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center text-center space-y-8 px-4">
            <div className="w-full max-w-2xl flex flex-col items-center space-y-8">
                <p className="text-lg text-gray-300 font-secondary">Sign up for updates and be the first to know when the campaign launches.</p>
                <div className="flex flex-col md:flex-row gap-3 w-full">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 bg-black/80 border border-gold-dim px-6 py-4 text-white focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary font-secondary rounded-sm transition-all"
                    />
                    <button
                        onClick={() => joinTheMob()}
                        disabled={loading}
                        type="submit"
                        className="btn-fantasy px-6 py-3 md:px-10 md:py-4 font-bold whitespace-nowrap text-3xl md:text-4xl rounded-sm cursor-pointer"
                    >
                        {loading ? 'Joining...' : 'Join The Mob'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubscribeForm;
