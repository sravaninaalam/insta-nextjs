import { users } from '@/consts'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
export const options={
    providers:[
       GithubProvider({
        clientId:process.env.GITHUB_ID,
        clientSecret:process.env.GITHUB_SECRET
       }),

  CredentialsProvider({

    name: "Credentials",
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
     
      const user=users.find((item)=>(item.name.toLowerCase()===credentials.username.toLowerCase()) && 
    (item.password==credentials.password))
      if (user) {
       return user
      } else {
        return null
      }
    }
  }),

       GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,      
      }),
    
    ]
}
