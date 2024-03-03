import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getServerSession } from 'next-auth';
import Provider from '@/components/SessionProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default:"Next.js 14 Homepage",
    template:"%s | Next.js 14"
  },
  description: 'Next.js starter app',
}

export default async function RootLayout({ children }) {

  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
            <div className='container'>
              <Navbar/>
              {children}
              <Footer/>
            </div>
        </Provider>
      </body>
    </html>
  )
}