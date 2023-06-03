import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })]
  // callbacks: {
  //   async redirect ({ url, baseUrl }) {
  //     const user = await getUser()
  //     // Allows relative callback URLs
  //     // If the user is logged in, redirect to the dashboard page
  //     if (user) {
  //       return baseUrl + '/application'
  //     } else {
  //       // Otherwise, redirect to the signin page
  //       return baseUrl + '/api/auth/'
  //     }
  //   }
  // }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
