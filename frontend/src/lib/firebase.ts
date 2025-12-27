import { getApps, initializeApp } from 'firebase/app';
import { ReCaptchaV3Provider, initializeAppCheck } from 'firebase/app-check';
import { getFunctions } from 'firebase/functions';

// 1. Define Config
// Since this is a static build, these values are "baked" into the JS code at build time.
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// 2. Initialize App (The Singleton Pattern)
// We check getApps() to ensure we don't crash by initializing twice.
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// 3. Export Services
const functions = getFunctions(app, 'us-central1');

// 4. Initialize App Check (Browser Only)
// We check 'typeof window' because this code might try to run during the build process
if (typeof window !== 'undefined') {
    // Use debug token for localhost development
    if (process.env.NODE_ENV === 'development') {
        // @ts-ignore
        self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
    }

    initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''),
        isTokenAutoRefreshEnabled: true,
    });
}

export { app, functions };
