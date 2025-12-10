import { SiGmail } from "react-icons/si";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import data from "../data/data";
import myimg from "../amit.jpg";
import { Skills } from "./Skills";
import { Footer } from "./footer";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="px-2 sm:px-0 border-x border-foreground/10 border-dashed flex flex-col sm:max-w-[700px] overflow-hidden ">
      <div className="sm:flex items-center justify-center border-b border-foreground/10 py-4 gap-4 relative group">
        <div>
          <span className="h-px rounded-full w-30 bg-linear-to-r from-transparent to-sky-500 absolute -bottom-px group-hover:animate-go hidden group-hover:block shadow-sm "></span>
          <div
            className="w-24 h-24 border-4 border-foreground/10 border-t-red-500 
            border-r-blue-500 
            border-b-green-500 
            border-l-yellow-500 
            m-2 overflow-hidden rounded-full relative rotate-354"
          >
            <Image src={myimg} alt="Amit Sharma" className="top-0 absolute" />
          </div>
        </div>
        <div className="">
          <h1 className="sm:text-4xl text-3xl font-semibold my-2 text-foreground">
            Amit Sharma —{" "}
            <span className="text-foreground/50">A full Stack Developer</span>
          </h1>
        </div>
      </div>
      
      <p className="text-foreground/70 tracking-wide font-normal border-dashed text-sm sm:text-md py-4">
        {data.AboutMe.text}{" "}
        <span className="text-sky-500 bg-sky-500/10 m-1 text px-1 py-0.5 shadow-[0_0_5px_inset]">
          {data.AboutMe.text1}
        </span>
        {data.AboutMe.text2}
        <span
          className="text-pink-500 bg-pink-500/10 m-1 text px-1 py-0.5
            shadow-[0_0_5px_inset]"
        >
          {data.AboutMe.text3}
        </span>
        {data.AboutMe.text4}
        <span
          className="text-teal-500 bg-teal-500/10 m-1 text px-1 py-0.5
            shadow-[0_0_5px_inset]"
        >
          {data.AboutMe.text5}
        </span>
      </p>
      <div className="py-2 flex items-center gap-2">
        <h2 className="font-medium text-2xl relative">
          Connect With Me!
          <span className="size-3 bg-green-500 block rounded-full absolute top-2.5 -right-5"></span>
        </h2>
        <span className="size-3 animate-ping bg-green-500 block rounded-full"></span>
      </div>
      <div className="h-10 border-y border-dashed border-foreground/10 gradient"></div>
      <div className="">
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
        <div className="work-exp border-b border-dashed border-foreground/10">
          <h1 className="text-2xl font-medium">Work Experience</h1>
        </div>

        <div className="Projects border-b border-dashed border-foreground/10 ">
          <h2 className="text-2xl font-medium py-2">Projects</h2>
        </div>
        <div className="gradient h-10 border-b border-dashed border-foreground/10"></div>
        <div>
          <h2 className="text-2xl font-medium">Skills</h2>
          <Skills />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};
