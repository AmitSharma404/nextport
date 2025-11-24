import nextsvd from '../tom calling.png'
import Image from 'next/image'
export const Card = () => {
    return(
        <div className="top-20 left-2 rounded-lg p-4 bg-foreground/5 sm:fixed lg:block hidden">
            <div className='size-40 overflow-hidden rounded-full'>
                <Image src={nextsvd} alt="" className='size-auto overflow-x-hidden ' />
            </div>
            <p className='font-bold text-sm'>Want a Developer!</p>
            <button className='border border-foreground px-1 hover:shadow font-semibold'>Hire Me!</button>
        </div>
    )
}