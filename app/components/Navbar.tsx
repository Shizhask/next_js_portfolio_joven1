"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Hobbies", path: "/hobbies" },
  { name: "Education", path: "/education" },
  { name: "Awards", path: "/awards" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
  { name: "Gallery", path: "/gallery" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-950/80 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="font-bold text-lg tracking-wide">
          MyPortfolio
        </h1>

        <div className="hidden md:flex gap-6 text-sm">
          {links.map((link) => {
            const active = pathname === link.path;

            return (
              <Link key={link.path} href={link.path} className="relative">
                <span className={active ? "text-white" : "text-zinc-400 hover:text-white"}>
                  {link.name}
                </span>

                {active && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-white"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}