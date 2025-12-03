'use client'
import { useState } from 'react';
import { BsTwitter, BsTwitterX, BsX } from 'react-icons/bs'
import { SiGmail } from "react-icons/si"
import { TbCircleHalf2 } from "react-icons/tb"
import { ThemeHandle } from './ThemeHandle'
import { GiHamburgerMenu } from 'react-icons/gi';
export const Header = () => {

    return(
        <div className="flex items-center justify-between px-5 py-3 w-full border-b border-foreground/10">
            <div className="flex gap-6">
                <a href="home"
                className="bg-foreground text-background px-1 rounded-md">A</a>
                <div className="gap-4 hidden sm:flex">
                    <a href="Projects">Projects</a>
                    <a href="Experience">Experience</a>
                    <a href="Contact Me">Contact Me</a>
                </div>  
            </div>
            <div className="px-2">
                <ul className="flex gap-6">
                    <li className="p-2 rounded-md border border-foreground/20"><BsTwitterX/></li>
                    <li className="p-2 rounded-md border border-foreground/20"><SiGmail/></li>
                    <li className="p-2 rounded-md border border-foreground/20">
                    <ThemeHandle/></li>
                </ul>
            </div>
        </div>
    )
}