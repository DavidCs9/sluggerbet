'use client'
import { motion } from 'framer-motion'
import { Pregunta } from './components/Pregunta'
import Link from 'next/link'

export default function Home () {
  return (
    <main className=' bg-gray-950 text-slate-100'>
      <header>
        <h1 className='text-center text-slate-100 pt-3 pb-3 w-full text-xl fixed z-10 bg-background'>SluggerBet</h1>
      </header>
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
                <Link
                  href='/application'
                  className=' bg-primary p-3 rounded-xl text-gray-950 px-4 text-xl font-bold'
                >Pruebalo
                </Link>
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
      <section id='features' className='mb-32 text-center m-12 lg:h-screen'>
        <h2 class='text-3xl font-bold mb-12'>Porque es tan<u class='text-primary'> bueno?</u></h2>
        <div class='grid md:grid-cols-3 lg:gap-x-12'>
          <motion.div
            className='mb-12 md:mb-0'
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
          >
            <div class='p-3 bg-primary rounded-lg shadow-lg inline-block mb-6'>
              <svg className=' text-white' xmlns='http://www.w3.org/2000/svg' height='1.3em' viewBox='0 0 512 512'>
                <path
                  d='M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z'
                />
              </svg>
            </div>
            <h5 class='text-lg font-bold mb-4'>Datos actualizados 24/7</h5>
            <p class='text-gray-200'>
              Toma decisiones informadas para tus apuestas y mantente al tanto de los acontecimientos más recientes del béisbol con nuestra función de datos actualizados 24/7, siempre un paso adelante.
            </p>
          </motion.div>

          <motion.div
            className='mb-12 md:mb-0'
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
          >
            <div class='p-3 bg-primary rounded-lg shadow-lg inline-block mb-6'>
              <svg xmlns='http://www.w3.org/2000/svg' height='1.3em' viewBox='0 0 640 512'>
                <path
                  d='M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z'
                />
              </svg>
            </div>
            <h5 class='text-lg font-bold mb-4'>Aprende con IA</h5>
            <p class='text-gray-200'>
              Consulta a nuestra IA sobre el significado de las estadísticas que desees.
              Obtén respuestas claras y comprensibles para comprender mejor el juego.
            </p>
          </motion.div>

          <motion.div
            className='mb-12 md:mb-0'
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
          >
            <div class='p-3 bg-primary rounded-lg shadow-lg inline-block mb-6'>
              <svg xmlns='http://www.w3.org/2000/svg' height='1.3em' viewBox='0 0 576 512'>
                <path
                  d='M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z'
                />
              </svg>
            </div>
            <h5 class='text-lg font-bold mb-4'>Seguimiento de tus equipos favoritos</h5>
            <p class='text-gray-200'>
              Recibe actualizaciones en tiempo real sobre sus actuaciones, estadísticas destacadas y
              noticias relevantes. Mantente al día con el rendimiento de los jugadores clave y obtén
              información exclusiva para tomar decisiones más informadas en tus apuestas.
            </p>
          </motion.div>
        </div>
      </section>
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
              transition={{ duration: 2 }}
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
              transition={{ duration: 2 }}
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
              transition={{ duration: 2 }}
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
      <section id='preguntas' className='lg:h-screen'>
        <Pregunta />
      </section>
      <section id='LCA' className='m-20 text-center lg:h-screen'>
        <div className='px-6 py-12 md:px-12'>
          <h2 className='text-5xl my-12 font-bold tracking-tight'>
            Aprovecha la prueba<br />
            <span className='text-primary'>Gratis</span>
          </h2>
          <motion.a
            className=' text-gray-950 px-7 py-3 bg-primary font-bold text-sm  rounded shadow-md  mb-2 md:mr-2'
            role='button'
            whileHover={{ scale: 1.1 }}
          >Acceder
          </motion.a>
        </div>
      </section>
      <footer className=''>
        <ul className='flex justify-center gap-3 mb-7 text-slate-300 cursor-pointer'>
          <li>
            <i className='fa-solid fa-phone' />
          </li>
          <li>
            <i className='fa-brands fa-instagram' />
          </li>
          <li>
            <i className='fa-brands fa-facebook-f' />
          </li>
          <li>
            <i className='fa-brands fa-tiktok' />
          </li>
        </ul>
        <p className=' text-sm mb-7 text-center opacity-50'>© 2023 Todos los derechos reservados.<br /> Diseñado por David Castro.</p>
      </footer>
    </main>
  )
}
