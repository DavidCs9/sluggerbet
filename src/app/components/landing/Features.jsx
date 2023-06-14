'use client'
import { motion } from 'framer-motion'

export function Features () {
  return (
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
  )
}
