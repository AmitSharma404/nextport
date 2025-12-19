"use client";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { ThemeHandle } from "./ThemeHandle";
import { useEffect, useState } from "react";
export const Header = () => {
  const [IsScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    return window.scrollY > 50 ? setIsScroll(true) : setIsScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [IsScroll]);
  return (
    <div
      className={`flex items-center justify-between px-3 sm:px-5 py-3  border-foreground/10 transition-all duration-300 z-10 top-0 bg-none backdrop-blur-lg sticky ${
        IsScroll
          ? "w-full sm:w-[800px] sm:top-5 sm:squircles border border-foreground/10"
          : "bg-transparent w-full border-b sm:border-dashed"
      }`}
    >
      <div className="flex gap-6">
        <a
          href="#"
          className="bg-foreground text-background px-2 card font-bold text-2xl"
        >
          A
        </a>
        <div className="gap-4 hidden sm:flex font-medium items-center">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contactme">Contact Me</a>
        </div>
      </div>
      <div className="sm:px-2">
        <ul className="flex sm:gap-6 gap-3">
          <Link
            href={"https://x.com/AmitSharma404"}
            className="p-2 squircles border border-foreground/20 cursor-pointer hover:bg-foreground/10"
          >
            <BsTwitterX />
          </Link>
          <Link
            href="mailto:sandy31524@gmail.com"
            className="p-2 squircles border border-foreground/20 cursor-pointer hover:bg-foreground/10"
          >
            <SiGmail />
          </Link>
          <li className="p-2 squircles border border-foreground/20 hover:bg-foreground/10 ">
            <ThemeHandle />
          </li>
        </ul>
      </div>
    </div>
  );
};
