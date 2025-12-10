'use client'
import { BsTwitterX } from 'react-icons/bs'
import { SiGmail } from "react-icons/si"
import { ThemeHandle } from './ThemeHandle'
export const Header = () => {
    return(
        <div className="flex items-center justify-between px-2 sm:px-5 py-3 w-full border-b border-foreground/10 border-dashed z-10 sticky top-0 bg-background ">
            <div className="flex gap-6">
                <a href="home"
                className="bg-foreground text-background px-1 rounded-md font-bold">A</a>
                <div className="gap-4 hidden sm:flex">
                    <a href="Projects">Projects</a>
                    <a href="Experience">Experience</a>
                    <a href="Contact Me">Contact Me</a>
                </div>  
            </div>
            <div className="px-2">
                <ul className="flex sm:gap-6 gap-3">
                    <li className="p-2 rounded-md border border-foreground/20"><BsTwitterX/></li>
                    <li className="p-2 rounded-md border border-foreground/20"><SiGmail/></li>
                    <li className="p-2 rounded-md border border-foreground/20">
                    <ThemeHandle/></li>
                </ul>
            </div>
        </div>
    )
}