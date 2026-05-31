"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-start">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold"
      >
        Hi, I’m Joven R. Molina! 👋
      </motion.h1>

      <p className="mt-6 text-zinc-400 text-lg max-w-xl">
        I’m an IT student passionate about building modern web applications.
      </p>

    </section>
  );
}