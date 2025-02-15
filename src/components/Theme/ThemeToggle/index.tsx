"use client";

import { MoonIcon } from "@/icons/MoonIcon";
import { SunIcon } from "@/icons/SunIcon";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
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
