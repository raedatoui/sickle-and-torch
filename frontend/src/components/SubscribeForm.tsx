'use client';
import { httpsCallable } from 'firebase/functions';
import { type FC, useState } from 'react';
import { functions } from '@/lib/firebase';

const SubscribeForm: FC = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [buttonLabel, setButtonLabel] = useState('Join The Mob');

    const joinTheMob = async () => {
        if (!email) {
            return;
        }

        setLoading(true);
        try {
            const subscribe = httpsCallable(functions, 'join_the_mob');
            const result = await subscribe({ email });
            const data = result.data as any;
            console.log('Join The Mob response:', data);

            const status = data.result?.status || data.status;
            const message = data.result?.message || data.message;

            // Check for status 200 (success) - using loose equality to handle string/number
            if (status === 200) {
                setButtonLabel('JOINED!');
            }
            // Check for "Email already subscribed" message
            else if (message === 'Email already subscribed') {
                setButtonLabel('Already joined');
            }
        } catch (error: unknown) {
            console.error('Failed to call function:', error);

            if (error instanceof Error) {
                const errorData = error as { code?: string; message?: string };

                // Handle 400 errors (invalid argument)
                if (errorData.code === 'invalid-argument' || errorData.message?.includes('Invalid email')) {
                    setButtonLabel('Invalid email');
                    setEmail('');
                    setTimeout(() => {
                        setButtonLabel('Join The Mob');
                    }, 2000);
                }
                // Handle 500 errors
                else if (errorData.code === 'internal' || errorData.message?.includes('500')) {
                    setButtonLabel('Something went wrong');
                    setTimeout(() => {
                        setButtonLabel('Join The Mob');
                    }, 3000);
                }
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center text-center space-y-8 px-4">
            <div className="w-full max-w-2xl flex flex-col items-center space-y-8">
                <p className="text-2xl md:text-3xl text-gray-300 font-secondary">
                    Sign up for updates and be the first to know when the campaign launches.
                </p>
                <div className="flex flex-col md:flex-row gap-3 w-full">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setButtonLabel('Join The Mob');
                        }}
                        className="flex-1 bg-black/80 border border-gold-dim px-6 py-4 text-white focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary font-secondary rounded-sm transition-all"
                    />
                    <button
                        onClick={() => joinTheMob()}
                        disabled={loading}
                        type="button"
                        className="btn-mob px-6 py-3 md:px-10 md:py-4 font-bold whitespace-nowrap text-xl md:text-3xl rounded-sm cursor-pointer"
                    >
                        {loading ? 'Joining...' : buttonLabel}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubscribeForm;
