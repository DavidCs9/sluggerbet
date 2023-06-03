'use client'

import Lottie from 'lottie-react'
import animationData from 'public/construction.json'

export default function Page () {
  return (
    <div className='m-20 mt-52'>
      <h1 className='text-center text-4xl lg:text-5xl font-extrabold mb-20'>
        La aplicacion esta en construccion...
      </h1>
      <div className=' lg:w-2/6 mx-auto'>
        <Lottie animationData={animationData} />
      </div>
    </div>
  )
}
