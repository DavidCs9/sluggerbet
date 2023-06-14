'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Lca () {
  return (
    <section id='LCA' className='mx-8 text-center lg:h-screen pb-16 mt-16'>
      <div className='px-6 py-12 md:px-12'>
        <h2 className=' text-4xl lg:text-5xl my-12 font-bold tracking-tight'>
          Aprovecha la <br />prueba
          <span className='text-primary'> gratis</span>
        </h2>
        <motion.div
          className='landing-btn rounded-lg text-white text-xl font-bold shadow-lg  w-40 text-center py-2 m-auto'
          whileHover={{ scale: 1.1 }}
        >
          <Link href='/dashboard'>Dashboard</Link>
        </motion.div>
      </div>
    </section>
  )
}
