import { IconType } from "react-icons"
import { BiLogoTailwindCss } from "react-icons/bi"
import { DiCss3, DiHtml5, DiIllustrator, DiJava } from "react-icons/di"
import { FaPython } from "react-icons/fa"
import { LiaNodeJs } from "react-icons/lia"
import { SiGit, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiPostman, SiReact, SiRedux, SiTypescript } from "react-icons/si"


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
        icon:SiJavascript,
    },
    {
        id:4,
        name:"TypeScript",
        icon:SiTypescript,
    },
    {
        id:5,
        name:"Tailwind CSS",
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
    },
    {
        id:9,
        name:"PostMan",
        icon:SiPostman
    },
    {
        id:10,
        name:"SQl",
        icon:SiMysql
    },
    {
        id:11,
        name:"Next Js",
        icon:SiNextdotjs
    },
    {
        id:12,
        name:"Node Js",
        icon:LiaNodeJs
    },
    {
        id:13,
        name:"Git",
        icon:SiGit
    },
    {
        id:14,
        name:"React Js",
        icon:SiReact
    },
    {
        id:15,
        name:"Redux",
        icon:SiRedux
    },
    {
        id:16,
        name:"Java",
        icon:DiJava
    }
]

export  default  {skills,AboutMe,Navitems};