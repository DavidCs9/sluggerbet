'use client'

import Main from '../components/Main'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
// import { useEffect } from 'react' // Import useEffect

export default function Home () {
  const { data: session } = useSession()
  const router = useRouter()

  if (!session) {
    router.push('/api/auth/signin') // Redirect to the specified destination
  }

  return (
    <div>
      <Main />
    </div>
  )
}
