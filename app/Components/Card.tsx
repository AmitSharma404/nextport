import nextsvd from '../favicon.ico'
import Image from 'next/image'
export const Card = () => {
    return(
        <div className="fixed top-20 left-2 rounded-lg p-4 bg-foreground/5">
            <Image src={nextsvd} alt="" className='size-40 rounded-lg' />
        </div>
    )
}