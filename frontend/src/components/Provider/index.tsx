import { ClerkProvider } from "@clerk/clerk-react";

export default function Provider({ children }: { children: React.ReactNode }) {
    const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

    if(!CLERK_PUBLISHABLE_KEY) throw new Error("Missing Publishable Key");

    return (
        <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} afterSignOutUrl="/">
            { children }
        </ClerkProvider>    
    )
}