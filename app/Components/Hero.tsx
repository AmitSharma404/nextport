import { AboutMe } from "../data/data"

export const Hero = () => {
    return (
        <div className="flex flex-col p-2 sm:px-0 border-x border-foreground/10 min-h-screen ">
            <h1 className="text-4xl font-thin my-2 text-foreground">Projects</h1>
            <p className=" border-b border-foreground/10 text-foreground/70 tracking-wide">{AboutMe.text} </p>
        </div>
    )
}