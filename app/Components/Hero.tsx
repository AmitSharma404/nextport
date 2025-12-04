import { SiGmail } from "react-icons/si";
import {  BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import  data from "../data/data";
import { Skills } from "./Skills";
import { Footer } from "./footer";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="sm:px-0 border-x border-foreground/20 border-dashed flex flex-col sm:max-w-[700px] ">
      <h1 className="text-4xl font-semibold my-2 text-foreground">Amit Sharma</h1>
      <p className=" border-b border-foreground/20 text-foreground/70 tracking-wide font-normal border-dashed text-sm sm:text-md">
        {data.AboutMe.text}{" "}
      </p>
      <div className="py-2">
        <h2 className="font-medium text-2xl">Connect With Me!</h2>
      </div>
      <div className="h-10 border-y border-dashed border-foreground/20 gradient"></div>
      <div className="">
        <p className="text-lg py-1 font-medium">Let&#39;s Collaborate</p>
        <p className="text-foreground/60 py-1 text-xs sm:text-sm font-light">
           I&#39;m always open to new opportunities,
          collaborations, or simply tech conversations. Feel free to reach out
          or follow my work on below platforms.
        </p>
        <div className="py-3 flex gap-2 flex-wrap">
            <button className="btn"><BsTwitterX/><Link href="https://x.com/AmitSharma404">X (Twitter)</Link></button>
            <button className="btn"><BsGithub/><Link href="https://github.com/amitsharma404">Github</Link></button>
            <button className="btn"><BsLinkedin/><Link href="https://www.linkedin.com/in/amitsharma404/">LinkedIn</Link></button>
            <button className="btn"><SiGmail/><Link href="mailto:Sandy31524@gmail.com">Gmail</Link></button>
        </div>
        <div className="h-10 border-y border-dashed border-foreground/20 gradient"></div>
        <div className="work-exp border-b border-dashed border-foreground/20">
            <h1 className="text-2xl font-medium">Work Experience</h1>
        </div>

        <div className="Projects border-b border-dashed border-foreground/20 ">
          <h2 className="text-2xl font-medium py-2">Projects</h2>
        </div>
        <div className="gradient h-10 border-b border-dashed border-foreground/20">
        </div>
        <div>
          <h2 className="text-2xl font-medium">Skills</h2>
          <Skills/>
        </div>
      </div>
      <div className="">
        <Footer/>
      </div>
    </div>
  );
};
