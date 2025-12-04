import { IconType } from "react-icons"
import { BiLogoTailwindCss } from "react-icons/bi"
import { DiCss3, DiHtml5, DiIllustrator, DiJavascript } from "react-icons/di"
import { FaPython } from "react-icons/fa"
import { SiMongodb, SiTypescript } from "react-icons/si"


const Navitems = [
    {
        title: "X",
        link: "#https:/twitter.com",
    },
    {
        title: "Work Experience",
        link: "#WorkExperience",
    },
    {
        title: "Projects",
        link: "#Projects"
    }
]

const AboutMe = {
    text: `Hi, I'm Amit, a Full Stack Developer with expertise in the MERN stack, TypeScript, and Socket.io. Experienced in building scalable web apps, with a focus on creating seamless user experiences and robust backend systems.`
}

interface skills {
    id:number,
    name:string,
    icon:IconType
}[];

const skills:skills[] = [
    {
        id: 1,
        name: "Html5",
        icon: DiHtml5,
    },
    {
        id:2,
        name:"CSS3",
        icon: DiCss3
    },
    {
        id:3,
        name:"JavaScript",
        icon:DiJavascript,
    },
    {
        id:4,
        name:"TypeScript",
        icon:SiTypescript,
    },
    {
        id:5,
        name:"Tailwind",
        icon: BiLogoTailwindCss
    },
    {
        id:6,
        name:"python",
        icon:FaPython
    },
    {
        id:7,
        name:"illustrator",
        icon:DiIllustrator
    },
    {
        id:8,
        name:"Mongo DB",
        icon:SiMongodb
    }
]

export  default  {skills,AboutMe,Navitems};