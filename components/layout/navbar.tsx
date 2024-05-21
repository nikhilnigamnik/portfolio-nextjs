"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "../toggle-theme";


type AnimatedTabsProps = {
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
};

export function Navbar({
  containerClassName,
  activeTabClassName,
  tabClassName,
}: AnimatedTabsProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const tabs = [
    {
      title: "Product",
    },
    {
      title: "Services",
    },
    {
      title: "About",
    },
  ];

  return (
    <nav className="max-w-3xl mx-auto px-4 my-4">
      <div className="flex justify-between items-center  border rounded-xl backdrop-blur-3xl py-2 px-3">
        <h1 className="hidden md:block">Company Name</h1>
        <div
          className={cn(
            "relative flex flex-wrap items-center justify-center",
            containerClassName
          )}
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.title}
              onClick={() => setActiveIdx(index)}
              className={cn(
                "group relative z-[1] rounded-full px-4 py-1 text-nowrap",
                { "z-0": activeIdx === index },
                tabClassName
              )}
            >
              {activeIdx === index && (
                <motion.div
                  layoutId="clicked-button"
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "absolute inset-0 rounded-full dark:bg-white bg-black",
                    activeTabClassName
                  )}
                />
              )}

              <span
                className={cn(
                  "relative text-sm block font-medium duration-200",
                  activeIdx === index && "delay-100 dark:text-black text-white "
                )}
              >
                {tab.title}
              </span>
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center gap-4">
          <GitHubLogoIcon />
          <TwitterLogoIcon />
          <LinkedInLogoIcon />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}