'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function Hero () {
  return (
    <motion.section
      id='hero'
      className='mb-40 h-screen'
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div class='px-6 py-12 md:px-12 text-center lg:text-left'>
        <div class='container mx-auto xl:px-32'>
          <div class='grid lg:grid-cols-2 gap-12  items-center'>
            <div class='mt-12 lg:mt-0'>
              <h1 class='text-5xl md:text-6xl xl:text-7xl text-slate-200 font-bold tracking-tight mb-12'>
                Apuestas inteligentes<br /><span class=' text-primary'>Datos poderosos</span>
              </h1>
              <motion.div
                className='landing-btn rounded-lg text-white text-xl font-bold shadow-lg  w-40 text-center py-2 m-auto'
                whileHover={{ scale: 1.1 }}
              >
                <Link href='/dashboard'>Dashboard</Link>
              </motion.div>
            </div>
            <div class='mb-12 lg:mb-0 lg:mt-12'>
              <img
                src='hero-foto.webp'
                class='w-9/12 mx-auto rounded-lg shadow-lg'
                alt='Imagen hero'
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
