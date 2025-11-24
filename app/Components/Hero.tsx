import { AboutMe } from "../data/data"

export const Hero = () => {
    return (
        <div className="flex flex-col px-2 sm:px-0 border-x border-foreground/10 min-h-screen">
            <h1 className="text-4xl font-extrabold my-2">Projects</h1>
            <p className="font-grid border-b border-foreground/10">{AboutMe.text} </p>
        </div>
    )
}