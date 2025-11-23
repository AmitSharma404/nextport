import { BsTwitter, BsTwitterX, BsX } from 'react-icons/bs'
import { SiGmail } from "react-icons/si"
import { TbCircleHalf2 } from "react-icons/tb"
export const Header = () => {
    return(
        <div className="flex items-center justify-between px-5 py-3">
            <div className="flex gap-6">
                <a href="home"
                className="font-extrabold bg-foreground text-background px-1 rounded-md">A</a>
                <div className="flex gap-4">
                    <a href="Projects">Projects</a>
                    <a href="Experience">Experience</a>
                    <a href="Contact Me">Contact Me</a>
                </div>
            </div>
            <div className="px-2">
                <ul className="flex gap-6 ">
                    <li className="p-2 rounded-md border border-foreground/20"><BsTwitterX/></li>
                    <li className="p-2 rounded-md border border-foreground/20"><SiGmail/></li>
                    <li className="p-2 rounded-md border border-foreground/20">
                    <TbCircleHalf2/></li>
                </ul>
            </div>
        </div>
    )
}