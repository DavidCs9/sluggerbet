import { Hero } from './landing/Hero'
import { Features } from './landing/Features'
import { Testimonios } from './landing/Testimonios'
import { Preguntas } from './landing/Preguntas'
import { Lca } from './landing/Lca'

export default function Landing () {
  return (
    <div className='bg-gray-950 text-slate-100'>
      <Hero />
      <Features />
      <Testimonios />
      <Preguntas />
      <Lca />
    </div>
  )
}
