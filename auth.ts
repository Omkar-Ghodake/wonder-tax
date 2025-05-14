import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    // Credentials({
    //   credentials: {
    //     email: {},
    //     password: {},
    //   },
    //   authorize: async (credentials) => {
    //     try {
    //       let user = null

    //       const pwHash = saltAndHashPassword(credentials.password)

    //       user = await getUserFromDb(credentials.email)

    //       if (!user) {
    //         console.log('Invalid Credentials.')
    //         throw new Error('Invalid Credentials.')
    //       }

    //       return user
    //     } catch (error: any) {
    //       console.log('error---->', error.message)
    //       throw new Error(error.message)
    //     }
    //   },
    // }),
  ],
  // callbacks: {
  //   async redirect({ url, baseUrl }) {
  //     return '/mobile'
  //   },
  // },
})
