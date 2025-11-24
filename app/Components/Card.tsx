import nextsvd from '../favicon.ico'
import Image from 'next/image'
export const Card = () => {
    return(
        <div className="top-20 left-2 rounded-lg p-4 bg-foreground/5 fixed">
            <Image src={nextsvd} alt="" className='size-40 rounded-lg mb-2' />
            <p className='font-bold text-sm'>Want a Developer!</p>
            <button className='border border-foreground px-1 hover:shadow font-semibold'>Hire Me!</button>
        </div>
    )
}