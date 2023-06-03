import { Accordion } from './Accordion'
import { motion } from 'framer-motion'

const dataPreguntas = [
  {
    id: 1,
    pregunta: '"No confío en las estadísticas y análisis de datos en el béisbol."',
    respuestas: `Entiendo tu preocupación. Sin embargo, es importante destacar que el 
    análisis de datos en el béisbol se ha vuelto fundamental en la toma de decisiones 
    estratégicas tanto para los jugadores como para los apostadores. Los avances 
    tecnológicos h
    an permitido recopilar y analizar datos precisos que pueden proporcionar información 
    valiosa sobre el rendimiento de los jugadores, las tendencias del juego y las probabilidades. 
    Nuestra aplicación utiliza análisis avanzados respaldados por IA para brindarte información 
    confiable y precisa, lo que te ayudará a tomar decisiones informadas y aumentar tus 
    posibilidades de éxito en las apuestas.`
  },
  {
    id: 2,
    pregunta: '"No tengo experiencia en las apuestas deportivas."',
    respuestas: `No te preocupes, nuestra aplicación está diseñada para ser amigable tanto para 
    principiantes como para apostadores experimentados. Ofrecemos recursos educativos y tutoriales 
    para ayudarte a comprender los conceptos básicos de las apuestas deportivas y cómo utilizar los 
    datos y análisis proporcionados por la aplicación. Además, nuestra comunidad de usuarios está 
    llena de personas dispuestas a compartir conocimientos y consejos. Estamos comprometidos en 
    brindarte una experiencia intuitiva y de aprendizaje para que te sientas cómoda y confiada al 
    realizar tus apuestas.`
  },
  {
    id: 3,
    pregunta: ' "No tengo tiempo suficiente para seguir de cerca los datos y estadísticas del béisbol."',
    respuestas: 'Entiendo tu preocupación. Sin embargo, es importante destacar que el análisis de datos en el béisbol se ha vuelto fundamental en la toma de decisiones estratégicas tanto para los jugadores como para los apostadores. Los avances tecnológicos han permitido recopilar y analizar datos precisos que pueden proporcionar información valiosa sobre el rendimiento de los jugadores, las tendencias del juego y las probabilidades. Nuestra aplicación utiliza análisis avanzados respaldados por IA para brindarte información confiable y precisa, lo que te ayudará a tomar decisiones informadas y aumentar tus posibilidades de éxito en las apuestas.'
  },
  {
    id: 1,
    pregunta: '"No confío en las aplicaciones de apuestas en línea. ¿Cómo puedo estar seguro de que mi información personal y financiera estará segura?"',
    respuestas: 'Entendemos tus preocupaciones sobre la seguridad de tu información personal y financiera. Queremos asegurarte que tomamos la seguridad muy en serio. Nuestra aplicación utiliza medidas de seguridad avanzadas para proteger tus datos, incluyendo encriptación de extremo a extremo y sistemas de autenticación seguros. Además, cumplimos con los estándares y regulaciones de privacidad de datos para garantizar la confidencialidad y protección de tu información. Trabajamos constantemente en mantenernos actualizados con los últimos avances tecnológicos en seguridad y colaboramos con proveedores de confianza. Tu tranquilidad y confianza son de suma importancia para nosotros.'
  }

]

export function Pregunta () {
  return (
    <>
      <h1 className='text-3xl font-bold mb-12 text-center'>Preguntas frecuentes</h1>
      <div className=' w-9/12 mx-auto'>
        {dataPreguntas.map((item, id) => {
          const { pregunta, respuestas } = item
          return (
            <motion.div
              key={id}
              className='flex flex-col gap-4 bg-violet-500 bg-opacity-50 p-4 rounded-lg mb-4'
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Accordion pregunta={pregunta} respuestas={respuestas} />
            </motion.div>
          )
        }
        )}
      </div>
    </>
  )
}
