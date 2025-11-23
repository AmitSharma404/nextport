import Link from "next/link"
import { Navitems } from "../data/data"
import { BsTwitter } from 'react-icons/bs'
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
            <div>
                <ul className="flex gap-4">
                    
                </ul>
            </div>
        </div>
    )
}