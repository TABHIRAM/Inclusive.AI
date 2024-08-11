'use server'

import { signIn, signOut } from "@/auth";

// TypeScript type for FormData
export async function doSocialLogin(formData: FormData): Promise<void> {
    const action = formData.get('action') as string | null;
    if (action) {
        await signIn(action, { redirectTo: "/dashboard" });
    } else {
        console.error("No action specified in formData");
    }
}

export async function doLogout(): Promise<void> {
    await signOut({ redirectTo: "/" });
}
