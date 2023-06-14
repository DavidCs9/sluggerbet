'use client'

import Lottie from 'lottie-react'
import animationData from 'public/construction.json'
import { useSession } from 'next-auth/react'

export default function Main () {
  const { data: session } = useSession()
  return (
    <div className=' bg-gray-950 h-screen p-20'>
      <h1 className='text-center text-4xl lg:text-5xl font-extrabold pb-20'>
        Hola {session.user.name}, la aplicacion esta en construccion...
      </h1>
      <div className=' lg:w-2/6 mx-auto'>
        <Lottie animationData={animationData} />
      </div>
    </div>
  )
}
