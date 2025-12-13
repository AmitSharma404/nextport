import Image from "next/image";
import img from "../3.png";
import img2 from "../2.png";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
export const Projects = () => {
  return (
    <div className="flex flex-col gap-5 py-2">
      <div className="gap-4 sm:flex">
        <Image
          src={img}
          width={350}
          height={300}
          alt="img"
          className="rounded-lg"
        />
        <div>
          <h3 className="text-lg font-normal mb-2">Cool Card</h3>
          <p className="text-foreground/70 mb-4 text-sm">
            Clean UI with responsive design
          </p>
          <div className="flex gap-2">
            <Link href="https://new-card-ten.vercel.app" className="btn hover:bg-foreground/10">
              <LuSquareArrowOutUpRight  />
              Live
            </Link>
           
            <Link
              href="https://github.com/AmitSharma404/newCard"
              className="btn hover:bg-foreground/10"
            >
              {" "}
              <BsGithub />
              Github{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="sm:flex gap-4">
        <Image
          src={img2}
          width={350}
          height={300}
          alt="img"
          className="rounded-lg"
        />
        <div>
          <h3 className="text-lg font-normal mb-2">Spotify Clone</h3>
          <p className="text-foreground/70 mb-4 text-sm">
            A clean UI of Spotify
          </p>
          <div className="flex gap-2">
            <Link href="https://amitsharma404.github.io/spotifyUI/" className="btn hover:bg-foreground/10">
              <LuSquareArrowOutUpRight />
              Live
            </Link>
           
            <Link
              href="https://github.com/AmitSharma404/spotifyUI"
              className="btn hover:bg-foreground/10"
            >
              {" "}
              <BsGithub />
              Github{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
