'use server'

import { auth } from "@/auth"

export async function getCurrentUser() {
    try {
        const session = await auth();

        if (!session) return null;

        return session.user;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return null;
    }
}