import { BsInstagram, BsLinkedin, BsTiktok } from 'react-icons/bs'

export default function Footer () {
  return (
    <>
      <footer className=' pb-10 bg-slate-950'>
        <ul className='flex justify-center gap-3 mb-7 text-slate-300 cursor-pointer'>
          <li>
            <BsInstagram />
          </li>
          <li>
            <BsLinkedin />
          </li>
          <li>
            <BsTiktok />
          </li>
        </ul>
        <p className=' text-sm mb-7 text-center opacity-50'>© 2023 Todos los derechos reservados.<br /> Diseñado por David Castro.</p>
      </footer>
    </>
  )
}
