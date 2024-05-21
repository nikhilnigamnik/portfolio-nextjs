"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ModeToggle() {
          const { theme, setTheme } = useTheme();

          const handleChange = () => {
                    setTheme(theme === 'dark' ? 'light' : 'dark');
          };

          return (
                    <Button variant="outline" className={cn('border-none')} size="icon" onClick={handleChange}>
                              {theme === 'dark' ? (
                                        <SunIcon className="transition-transform" />
                              ) : (
                                        <MoonIcon className="transition-transform" />
                              )}
                    </Button>
          );
}
