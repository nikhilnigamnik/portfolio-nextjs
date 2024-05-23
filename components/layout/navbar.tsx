"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../toggle-theme";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const tabs = [
    {
      title: "Profile",
      link: "/"
    },
    {
      title: "Blog",
      link: "/blog"
    },
    {
      title: "Projects",
      link: "/projects"
    },
    {
      title: "Contact",
      link: "/contact"
    }
  ];

  const activeIdx = tabs.findIndex(tab => tab.link === pathname);

  return (
    <nav className="max-w-3xl fixed left-4 right-4 mx-auto top-4 z-20">
      <div className="flex justify-between items-center border rounded-full backdrop-blur-3xl py-2 px-3">
        <div
          className={cn(
            "relative flex flex-wrap items-center justify-center",
            containerClassName
          )}
        >
          {tabs.map((tab, index) => (
            <Link
              href={tab.link}
              key={tab.title}
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
                  activeIdx === index && "delay-100 dark:text-black text-white"
                )}
              >
                {tab.title}
              </span>
            </Link>
          ))}
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}
