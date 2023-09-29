import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Let Him Cook',
  description: 'The place for chefs to share their recipes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className='
      bg-gradient-to-b from-green-100 to-green-200 bg-fixed
      '
      >{children}</body>
    </html>
  )
}
