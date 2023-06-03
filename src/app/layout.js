import './globals.css'
import { Ovo } from 'next/font/google'

const ovo = Ovo({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'SluggerBet',
  description: 'Aplicacion web para estadisticasa avanzadas y de apuesta de baseball'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={ovo.className}>
        {children}
      </body>
    </html>
  )
}
