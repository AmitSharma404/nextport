import { IconType } from "react-icons"
import { BiLogoTailwindCss } from "react-icons/bi"
import { DiCss3, DiHtml5, DiIllustrator, DiJava } from "react-icons/di"
import { FaPython } from "react-icons/fa"
import { LiaNodeJs } from "react-icons/lia"
import { SiGit, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiPostman, SiReact, SiRedux, SiTypescript } from "react-icons/si"


const Navitems = [
    {
        title: "X",
        link: "#https://twitter.com/AmitSharma404",
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
    text: ` Hi, I'm Amit, a `,
    text1:"Full Stack Developer ",
    text2:` with expertise in the , `,
    text3:" MERN stack ",
    text4:` TypeScript, and Socket.io. Experienced in building scalable web apps, with a focus on creating seamless user experiences and robust `,
    text5:` frontend system.`

}

interface skills {
    id: number,
    name: string,
    icon: IconType,
    color: string
}[];

const skills: skills[] = [
    {
        id: 1,
        name: "Html5",
        icon: DiHtml5,
        color: "#E34F26"
    },
    {
        id: 2,
        name: "CSS3",
        icon: DiCss3,
        color: "#1572B6"
    },
    {
        id: 3,
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E"
    },
    {
        id: 4,
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6"
    },
    {
        id: 5,
        name: "Tailwind CSS",
        icon: BiLogoTailwindCss,
        color: "#38BDF8"
    },
    {
        id: 6,
        name: "Python",
        icon: FaPython,
        color: "#3776AB"
    },
    {
        id: 7,
        name: "Illustrator",
        icon: DiIllustrator,
        color: "#FF9A00"
    },
    {
        id: 8,
        name: "Mongo DB",
        icon: SiMongodb,
        color: "#47A248"
    },
    {
        id: 9,
        name: "PostMan",
        icon: SiPostman,
        color: "#FF6C37"
    },
    {
        id: 10,
        name: "SQL",
        icon: SiMysql,
        color: "#4479A1"
    },
    {
        id: 11,
        name: "Next Js",
        icon: SiNextdotjs,
        color: "#000000"
    },
    {
        id: 12,
        name: "Node Js",
        icon: LiaNodeJs,
        color: "#339933"
    },
    {
        id: 13,
        name: "Git",
        icon: SiGit,
        color: "#F05032"
    },
    {
        id: 14,
        name: "React Js",
        icon: SiReact,
        color: "#61DAFB"
    },
    {
        id: 15,
        name: "Redux",
        icon: SiRedux,
        color: "#764ABC"
    },
    {
        id: 16,
        name: "Java",
        icon: DiJava,
        color: "#007396"
    }

]

export default { skills, AboutMe, Navitems };