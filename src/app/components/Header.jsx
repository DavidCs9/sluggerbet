'use client'
import Link from 'next/link'
import { useSession, signOut, signIn } from 'next-auth/react'

export default function Header () {
  const { data: session } = useSession()

  if (session) {
    return (
      <header>
        <nav className=' pt-3 pb-3 w-full fixed z-10 bg-background flex'>
          <Link href='/'>
            <h1 className='text-xl pl-10'>SluggerBet</h1>
          </Link>
          <div className='flex items-center justify-center gap-4 ml-auto mr-6'>
            <img className=' w-8 h-8 rounded-full' src={session.user.image} />
            <button className='bg-black bg-opacity-50 px-3 rounded-md hover:bg-opacity-80 py-1' onClick={() => signOut()}>Sign out</button>
          </div>
        </nav>
      </header>
    )
  }
  return (
    <header>
      <nav className=' pt-3 pb-3 w-full fixed z-10 bg-background flex'>
        <Link href='/'>
          <h1 className='text-xl pl-10'>SluggerBet</h1>
        </Link>
        <div className='flex items-center justify-center gap-4 ml-auto mr-10 bg-black bg-opacity-50 px-3 py-1 rounded-md hover:bg-opacity-80'>
          <button onClick={() => signIn()}>Sign In</button>
        </div>
      </nav>
    </header>
  )
}
