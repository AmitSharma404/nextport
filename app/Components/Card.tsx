import nextsvd from '../tom calling.png'
import Image from 'next/image'
export const Card = () => {
    return(
        <div className="top-20 left-2 rounded-lg p-4 bg-foreground/5 sm:fixed xl:block hidden h-auto">
            <p className='font-light text-sm py-1'>Want a Developer?</p>
            <div className='h-30 w-40 overflow-hidden bg-neutral-900 my-2 rounded-md '>
                <Image src={nextsvd} alt="" className='size-auto overflow-x-hidden ' />
            </div>
            <button className='px-1 hover:shadow font-light rounded-xs mt-2'>Hire Me!</button>
        </div>
    )
}