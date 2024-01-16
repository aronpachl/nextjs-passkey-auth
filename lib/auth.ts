import Passage from 'next-auth/providers/passage'
import { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    Passage({
      clientId: process.env.PASSAGE_ID!,
      clientSecret: process.env.PASSAGE_SECRET!,
      issuer: process.env.PASSAGE_ISSUER!,
    }),
  ],
}
