import Provider from './components/Provider'
import './globals.css'
import { Ovo } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const ovo = Ovo({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'SluggerBet',
  description: 'Aplicacion web para estadisticas avanzadas y de apuesta de baseball'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={ovo.className}>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
