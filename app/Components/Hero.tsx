import { AboutMe } from "../data/data"

export const Hero = () => {
    return (
        <div>
            <h1 className="text-4xl font-extrabold my-2">Projects</h1>
            <p className="font-grid">{AboutMe.text} </p>
        </div>
    )
}