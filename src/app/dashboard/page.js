'use client'

import Main from '../components/Main'
<<<<<<< HEAD
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
=======
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
>>>>>>> 32371148d0711e87d1b0c3591bfc5dbcdf8427d8
  )
}
