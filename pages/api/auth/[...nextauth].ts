import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github";
import {} from "next.config.js"

const options: NextAuthOptions = {
  theme: {
    colorScheme: "dark",
  },
  debug: true,
  session: {},
  jwt: {},
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {        email: {  label: "Email", type: "email" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/auth/login`,{
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-type": "application/json" }
        })

        const user = await res.json()

        if(res.ok && user){
          return user
        }

        return null
      }
    })
  ]
}

export default NextAuth(options);