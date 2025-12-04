import { SiGmail } from "react-icons/si";
import {  BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import  data from "../data/data";

export const Hero = () => {
  return (
    <div className="sm:px-0 space-x-10 border-x border-foreground/20 border-dashed flex flex-col sm:max-w-[700px] ">
      <h1 className="text-4xl font-semibold my-2 text-foreground">Projects</h1>
      <p className=" border-b border-foreground/20 text-foreground/70 tracking-wide font-light border-dashed">
        {data.AboutMe.text}{" "}
      </p>
      <div className="py-2">
        <h2 className="font-medium text-2xl">Connect With Me!</h2>
      </div>
      <div className="h-10 border-y border-dashed border-foreground/20 gradient"></div>
      <div className="">
        <p className="text-lg py-1 font-medium">Let&#39;s Collaborate</p>
        <p className="text-foreground/60 py-1 text-sm font-light">
           I&#39;m always open to new opportunities,
          collaborations, or simply tech conversations. Feel free to reach out
          or follow my work on below platforms.
        </p>
        <div className="py-3 flex gap-2">
            <button className="btn"><BsTwitterX/>X (Twitter)</button>
            <button className="btn"><BsGithub/>Github</button>
            <button className="btn"><BsLinkedin/>LinkedIn</button>
            <button className="btn"><SiGmail/>Gmail</button>
        </div>
        <div className="h-10 border-y border-dashed border-foreground/20 gradient"></div>
        <div className="work-exp py-4">
            <h2 className="text-2xl font-medium">Work Experience</h2>

        </div>
        <div className="skills flex gap-2 flex-wrap">
            {data.skills.map((skill)=>(
               <button key={skill.id} className="flex items-center skillbtn gap-1 font-normal">
                <skill.icon className="flex"/>{skill.name}
               </button>
            ))}
        </div>
      </div>
    </div>
  );
};
