"use client";
import { useEffect } from 'react';
import { useState } from "react";
import { TbCircleHalf2 } from "react-icons/tb";

export const ThemeHandle = () => {
  const [isDark, setDark] = useState(true);

  const StoreTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    if(storedTheme == 'dark'){
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.add('light');
    }
  }

  useEffect(() => {
    StoreTheme();
  },[])

  const handleTheme = () => {
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme','dark')
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme','light')
      setDark(false);
    }
  };

  return (
      <a onClick={handleTheme} className="cursor-pointer">
        {<TbCircleHalf2 />}
      </a>
  );
};
