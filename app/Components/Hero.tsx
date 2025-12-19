"use client";
import { SiGmail } from "react-icons/si";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import data from "../data/data";
import myimg from "../amit.jpg";
import { Skills } from "./Skills";
import { Footer } from "./footer";
import Link from "next/link";
import Image from "next/image";
import company from "../company.png";
import { Projects } from "./Projects";
import { Header } from "./Navbar";
export const Hero = () => {
  
  return (
    <div className="w-full flex flex-col items-center justify-center" id="home">
    <Header /> 
    <div className="px-2 sm:px-0 border-x border-foreground/10 border-dashed flex flex-col sm:max-w-[700px] overflow-hidden">
      <div className="sm:flex items-center justify-center border-b border-foreground/10 sm:py-10 py-4 gap-6 relative group">
        <div>
          <span className="h-px rounded-full w-30 bg-linear-to-r from-transparent to-sky-500 absolute -bottom-px group-hover:animate-go hidden group-hover:block shadow-sm "></span>
          <div
            className="w-24 h-24
            sm:mx-4 overflow-hidden card relative rotate-354 shadow-lg shadow-neutral-600/50"
          >
            <Image src={myimg} alt="Amit Sharma" className="top-0 absolute" width={300} height={300} />
          </div>
        </div>
        <div className="">
          <h1 className="sm:text-4xl text-3xl font-semibold my-2 text-foreground">
            Amit Sharma — {" "}
            <span className="text-foreground/50">A full Stack Developer</span>
          </h1>
          <span className="text-xs rounded-full px-2 py-1 shadow-[0px_2px_3px_inset]/40 font-semibold"> Available for work
              <span className="inline-block bg-sky-500 rounded-full size-2 ml-1"></span>
            </span>
        </div>
      </div>
      
      <p className="text-foreground/50 tracking-wide font-light border-dashed text-sm sm:text-[16px] py-4">
        {data.AboutMe.text}{" "}
        <span className="text-sky-500 bg-sky-500/10 m-1 text px-1 py-0.5 shadow-[0px_0px_5px_inset] card">
          {data.AboutMe.text1}
        </span>
        {data.AboutMe.text2}
        <span
          className="text-pink-500 bg-pink-500/10 m-1 text px-1 py-0.5
            shadow-[0_0px_5px_inset] card"
        >
          {data.AboutMe.text3}
        </span>
        {data.AboutMe.text4}
        <span
          className="text-teal-500 bg-teal-500/10 m-1 text px-1 py-0.5
            shadow-[0_0_5px_inset] card"
        >
          {data.AboutMe.text5}
        </span>
      </p>
      <div className="py-2 flex items-center gap-2">
        <h2 className="font-medium text-2xl relative">
          Connect With Me!
          <span className="size-2 bg-green-500 block rounded-full absolute top-3 -right-4"></span>
        </h2>
        <span className="size-2 animate-ping bg-green-500 block rounded-full"></span>
      </div>
      <div className="h-10 border-y border-dashed border-foreground/10 gradient"></div>
      <div className="py-4">
        <p className="text-lg py-1 font-medium">Let&#39;s Collaborate</p>
        <p className="text-foreground/60 py-1 text-xs sm:text-sm font-light">
          I&#39;m always open to new opportunities, collaborations, or simply
          tech conversations. Feel free to reach out or follow my work on below
          platforms.
        </p>
        <div className="py-3 flex gap-2 flex-wrap">
          <button className="btn">
            <BsTwitterX />
            <Link href="https://x.com/AmitSharma404">X (Twitter)</Link>
          </button>
          <button className="btn">
            <BsGithub />
            <Link href="https://github.com/amitsharma404">Github</Link>
          </button>
          <button className="btn">
            <BsLinkedin />
            <Link href="https://www.linkedin.com/in/amitsharma404/">
              LinkedIn
            </Link>
          </button>
          <button className="btn">
            <SiGmail />
            <Link href="mailto:Sandy31524@gmail.com">Gmail</Link>
          </button>
        </div>
        <div className="h-10 border-y border-dashed border-foreground/10 gradient"></div>
        <div className="work-exp border-b border-dashed border-foreground/10 py-2" id="experience">
          <h1 className="text-2xl font-medium">Work Experience</h1>
          <div className="flex items-center gap-4 py-4">
            <div className="h-12 w-12">
              <Image src={company} alt="" className="bg-foreground p-1 card" />
            </div>
            <div>
              <h3 className="font-medium text-foreground/80">Techgrah Consulting</h3>
              <p className="text-foreground/50 text-xs font-normal">Web designer & Graphic (onsite) Jan 2025 - March 2025</p>
            </div>
          </div>
        </div>

        <div className="Projects border-b border-dashed border-foreground/10 ">
          <h2 className="text-2xl font-medium py-2">Projects</h2>
          <Projects/>
        </div>
        <div className="gradient h-10 border-b border-dashed border-foreground/10"></div>
        <div className="pb-24">
          <h2 className="text-2xl font-medium py-2">Skills</h2>
          <Skills />
        </div>
      </div>
      <div className="flex items-end justify-center  mt-2 sm:mt-10 pb-4">
        <Footer />
      </div>
    </div>
    </div>
  );
};
