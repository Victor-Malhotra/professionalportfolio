import {Html,Head,Main,NextScript} from 'next/document'
import Navbar from '@/components/Navbar'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className=' overflow-hidden'>
        <Navbar className="absolute"/>
        <Main className="overflow-auto relative"/>
        <NextScript />
      </body>
    </Html>
  )
}
