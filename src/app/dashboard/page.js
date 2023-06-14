'use client'

import Main from '../components/Main'
import { useSession, signIn } from 'next-auth/react'

export default function Dashboard () {
  const { data: session } = useSession()

  // If no session exists, display access denied message
  if (!session) {
    return (
      <div className='pt-20'>
        <h1>Access Denied</h1>
        <p>
          <a
            href='/api/auth/signin'
            onClick={(e) => {
              e.preventDefault()
              signIn()
            }}
          >
            You must be signed in to view this page
          </a>
        </p>
      </div>
    )
  }
  return (
    <Main />
  )
}
