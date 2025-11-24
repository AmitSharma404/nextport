import nextsvd from '../tom calling.png'
import Image from 'next/image'
export const Card = () => {
    return(
        <div className="top-20 left-2 rounded-lg p-4 bg-foreground/5 sm:fixed xl:block hidden">
            <p className='font-light text-sm'>Want a Developer?</p>
            <div className='size-40 overflow-hidden rounded-full bg-neutral-900'>
                <Image src={nextsvd} alt="" className='size-auto overflow-x-hidden ' />
            </div>
            <button className='border border-foreground px-1 hover:shadow font-semibold rounded-[2px]'>Hire Me!</button>
        </div>
    )
}