'use client'

import Main from '../components/Main'
import { useSession } from 'next-auth/react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Dashboard () {
  const { data: session } = useSession()

  // If no session exists, display access denied message
  if (!session) {
    return (
      <div className='py-40 pb-60 flex flex-col w-full text-center bg-gray-950 gap-5'>
        <h1 className='text-2xl mx-4'>Necesitas iniciar sesión para acceder a la aplicación</h1>
        <motion.div
          className='landing-btn rounded-lg text-white text-xl font-bold w-36 py-2 mx-auto'
          whileHover={{ scale: 1.1 }}
        >
          <Link href='/api/auth/signin'>Sign In</Link>
        </motion.div>
      </div>
    )
  }
  return (
    <Main />
  )
}
