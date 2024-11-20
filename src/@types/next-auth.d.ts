import NextAuth from 'next-auth'

declare module 'next-auth' {
  export interface User {
    id: string
    name: string
    email: string
    username: string
    avatar_url: string
  }

  // extendendo a interface session que ja existe e adicionando user
  interface Session {
    user: User
  }
}