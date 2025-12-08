import nextsvd from '../img.jpg'
import Image from 'next/image'
import { FaLinkedinIn } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'
export const Card = () => {
    return(
        <div className="top-20 left-2 rounded-lg p-4 bg-foreground/5 sm:fixed xl:block hidden h-auto">
            <p className='font-light text-sm py-1'>Want a Developer?</p>
            <div className='h-30 w-40 overflow-hidden relative bg-neutral-900 my-2 rounded-md '>
                <Image src={nextsvd} alt="" className='size-auto overflow-x-hidden scale-140 -top-14 absolute ' />
            </div>
            <button className='py-1 hover:shadow font-light rounded-xs mt-2'>Hire Me!</button>
            <div className='flex gap-2'>
                <button className='p-2 rounded-md border border-foreground/20 hover:bg-foreground/10'><SiGmail/></button>
                <button className='p-2 rounded-md border border-foreground/20 hover:bg-foreground/10'><FaLinkedinIn/></button>
            </div>
        </div>
    )
}