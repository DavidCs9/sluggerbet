'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BiChevronDown } from 'react-icons/bi'

export function Accordion ({ pregunta, respuestas }) {
  const [show, setShow] = useState(false)

  return (
    <>
      <div onClick={() => setShow(!show)} className='flex justify-between items-center cursor-pointer'>
        <h2 className='text-lg text-white font-semibold'>{pregunta}</h2>
        <BiChevronDown
          className={`text-5xl transition-all duration-500 ${show ? 'rotate-180' : ''}`}
        />
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className=' overflow-clip'
          >
            <h2 className='text-md'>{respuestas}</h2>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  )
}
