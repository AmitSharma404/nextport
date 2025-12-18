import Image from "next/image";
import nextsvd from "../data/img.jpg";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
export const Card = () => {
  return (
    <div className="top-20 left-2 p-4 card bg-foreground/5 sm:fixed xl:block hidden h-auto border border-foreground/10">
      <p className="font-light text-sm py-1">Want a Developer?</p>
      <div className="h-30 w-40 overflow-hidden relative my-2 card
      ">
        <Image
          src={nextsvd}
          alt=""
          width={500}
          height={500}
          className="size-auto overflow-x-hidden scale-130 -top-14 absolute
          "
        />
      </div>
      <button className="py-1 hover:shadow font-light rounded-xs mt-2">
        Hire Me!
      </button>
      <div className="flex gap-2">
        <button className="p-2 squircles border border-foreground/20 hover:bg-foreground/10">
          <SiGmail />
        </button>
        <button className="p-2 squircles border border-foreground/20 hover:bg-foreground/10">
          <FaLinkedinIn />
        </button>
      </div>


    </div>
  );
};
