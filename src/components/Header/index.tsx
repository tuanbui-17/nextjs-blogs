'use client';

import Link from "next/link";
import { MoonIcon } from "@/icons/MoonIcon";
import { GithubIcon } from "@/icons/GithubIcon";
import { LinkedinIcon } from "@/icons/LinkedinIcon";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Archive", path: "/archive" },
  { name: "Blog", path: "/blog" },
];

const Header = () => {
  const toggleTheme = () => {
    // TODO: Implement theme toggling
  };

  return (
    <div className="py-6 text-lg">
      <div className="flex flex-row justify-between items-center">
        <div className="flex space-x-6">
          {menuItems.map((item) => (
            <div
              key={item.path}
              className="relative hover:underline hover:underline-offset-4 hover:underline-offset-transparent"
            >
              <Link href={item.path}>{item.name}</Link>
            </div>
          ))}
        </div>
        <div className="flex space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon width={30} height={25} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <GithubIcon width={30} height={25} />
          </a>
          <button onClick={toggleTheme} aria-label="Toggle theme">
            <MoonIcon width={30} height={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
