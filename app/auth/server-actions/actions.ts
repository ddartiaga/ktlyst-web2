"use server"

import { signIn } from "../auth";

const signInResend = async ({ email }: { email: string }): Promise<{ success: boolean, message: string }> => {
    try {
        const encodedEmail = encodeURIComponent(email);

        const result = await signIn("resend", {
            email,
            redirect: false
        });

        return { success: true, message: `We sent a sign in link to your email: ${email}` }

    } catch (error) {
        
        if (error instanceof Error) {}
        return { success: false, message: `${error}` }
    }
}

export { signInResend }