import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
  baseURL: "https://summer-essentials-store-red.vercel.app"
});

export const { signIn, signUp, useSession } = createAuthClient()