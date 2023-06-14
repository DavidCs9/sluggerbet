'use client'
import { motion } from 'framer-motion'

export function Testimonios () {
  return (
    <section id='testimonios' className='mb-32 text-gray-800 text-center m-20 lg:h-screen'>
      <h2 class='text-3xl font-bold mb-12 text-slate-200'>Testimonios</h2>
      <div class='grid md:grid-cols-3 gap-x-6 xl:gap-x-12'>
        <div
          className='mb-6 lg:mb-0'
        >
          <motion.div
            className=' bg-slate-100 block rounded-lg shadow-lg'
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className='relative overflow-hidden bg-no-repeat bg-cover'>
              <img src='/othani.webp' className='w-full rounded-t-lg' />
            </div>
            <div className='p-6'>
              <h5 className='text-lg font-bold mb-2'>Shohei Ohtani</h5>
              <h6 className='font-medium text mb-4'>Two way player</h6>
              <ul className='flex justify-center mb-6'>
                <li>
                  <svg
                    aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star'
                    className='w-4 text-yellow-500' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star'
                    class='w-4 text-yellow-500' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star'
                    class='w-4 text-yellow-500' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star'
                    class='w-4 text-yellow-500' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star'
                    class='w-4 text-yellow-500' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    />
                  </svg>
                </li>
              </ul>
              <p>"Esta app es una gran ventaja. Datos precisos, análisis avanzados y aprendizaje con IA. Mejora mi rendimiento y toma decisiones estratégicas. ¡Recomendada para fanáticos del béisbol!"
              </p>
            </div>
          </motion.div>
        </div>

        <div class='mb-6 lg:mb-0'>
          <motion.div
            class='bg-slate-100 block rounded-lg shadow-lg'
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div class='relative overflow-hidden bg-no-repeat bg-cover'>
              <img src='https://mdbootstrap.com/img/new/avatars/8.jpg' class='w-full rounded-t-lg' />
            </div>
            <div class='p-6'>
              <h5 class='text-lg font-bold mb-2'>John Doe</h5>
              <h6 class='font-medium mb-4'>Web Developer</h6>
              <ul class='flex justify-center mb-6'>
                <li>
                  <svg
                    aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star'
                    class='w-4 text-yellow-500' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star'
                    class='w-4 text-yellow-500' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star'
                    class='w-4 text-yellow-500' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star'
                    class='w-4 text-yellow-500' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star-half-alt'
                    class='w-4 text-yellow-500' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 536 512'
                  >
                    <path
                      fill='currentColor'
                      d='M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z'
                    />
                  </svg>
                </li>
              </ul>
              <p>"Me encanta cómo puedo personalizar mi seguimiento y recibir actualizaciones en tiempo real sobre los jugadores clave. Ha mejorado mi juego y me ha dado una ventaja en las apuestas. ¡Recomiendo esta app a todos los amantes del béisbol!"
              </p>
            </div>
          </motion.div>
        </div>

        <div class=''>
          <motion.div
            class='bg-slate-100 block rounded-lg shadow-lg'
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div class='relative overflow-hidden bg-no-repeat bg-cover'>
              <img src='https://mdbootstrap.com/img/new/avatars/15.jpg' class='w-full rounded-t-lg' />
            </div>
            <div class='p-6'>
              <h5 class='text-lg font-bold mb-2'>Lisa Trey</h5>
              <h6 class='font-medium mb-4'>Public Relations</h6>
              <ul class='flex justify-center mb-6'>
                <li>
                  <svg
                    aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star'
                    class='w-4 text-yellow-500' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star'
                    class='w-4 text-yellow-500' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star'
                    class='w-4 text-yellow-500' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star'
                    class='w-4 text-yellow-500' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden='true' focusable='false' data-prefix='far' data-icon='star'
                    class='w-4 text-yellow-500' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z'
                    />
                  </svg>
                </li>
              </ul>
              <p>"Gracias a esta app, he podido tomar decisiones más informadas en mis apuestas, aumentando mis posibilidades de éxito. Además, su comunidad de apostadores me ha permitido compartir estrategias y recibir consejos valiosos."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
