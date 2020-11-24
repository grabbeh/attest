import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import dotenv from 'dotenv'
dotenv.config({ path: '../../.env' })

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Email({
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD
      },
      from: process.env.EMAIL_FROM
    })
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.MONGODB_CONNECTION_STRING
}

export default (req, res) => NextAuth(req, res, options)
