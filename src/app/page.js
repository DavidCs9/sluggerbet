'use client'

import Landing from './components/Landing'
import { useSession } from 'next-auth/react'
import Main from './components/Main'

export default function Home () {
  const { data: session } = useSession()
  if (session) {
    return <Main />
  }
  return <Landing />
}
