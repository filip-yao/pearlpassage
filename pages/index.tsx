import Image from 'next/image'
import { Inter } from 'next/font/google'
import Menu from '@/components/Menu'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Menu></Menu>
      <div className='flex justify-between'>
      <div className='m-16 font-[Libre Franklin]  text-cervena-menu flex flex-col items-center' >
        
        <p className='border-b-2 border-cervena-menu w-fit text-2xl font-bold text-center'>Kde nás najdete?</p>
        <p className='m-4 font-semibold text-center'>B. Václavka 212, 674 01 Třebíč 1</p>
        <iframe className='w-[500px] h-[333px]' src="https://en.frame.mapy.cz/s/lezomeralo" ></iframe>



      </div>
      <div className='m-16 font-[Libre Franklin]  text-cervena-menu flex flex-col items-center'>
        <p 
        className='border-b-2 border-cervena-menu w-fit text-2xl font-bold text-center'>
          Otevírací doba
        </p>
        
         </div>
    </div>
    </main>
  )
}
