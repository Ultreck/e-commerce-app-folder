import { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

export const authOptions: NextAuthConfig ={
    providers: [
      GitHub({
       clientId: process.env.AUTH_GITHUB_ID,
       clientSecret: process.env.AUTH_GITHUB_SECRET
      }),
      Google({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
         
        }),
    ],
  }
