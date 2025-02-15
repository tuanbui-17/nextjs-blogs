"use client";

import { MoonIcon } from "@/icons/MoonIcon";
import { SunIcon } from "@/icons/SunIcon";
import React, { useState } from "react";
import { useTheme } from "next-themes";

type Props = {};

const ThemeToggle = (props: Props) => {
  const [triggerTransition, setTriggerTransition] = useState(false);
  const { setTheme, theme } = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const Icon = theme === "dark" ? MoonIcon : SunIcon;

  return (
    <button onClick={toggleDarkMode} aria-label="Toggle theme">
      <Icon
        width={30}
        height={25}
        fill={"none"}
        className="hover:text-accent-400 transition-colors duration-200 ease-in-out"
      />
    </button>
  );
};

export default ThemeToggle;
