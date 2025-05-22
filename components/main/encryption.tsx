"use client";

import { motion } from "framer-motion";
import Texting from "@/components/sub/texting";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Rocket } from "lucide-react";
import Image from "next/image";
import About from "./about";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { useRef } from "react";

export const Encryption = () => {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center">
      {/* Background video */}
      

      {/* Main Content */}
      <div className="z-20 flex flex-col items-center pt-24">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/o.png"
            alt="Lock main"
            width={300}
            height={300}
            className="z-10"
          />
        </motion.div>
   
        <motion.div
          variants={slideInFromRight(1)}
          initial="hidden"
          animate="visible"
          className="Welcome-box py-[2px] px-[7px] border border-[#34158f8b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Hi, My name is Rex..I'm a
          </h1>
        </motion.div>
        <br />

        <motion.div initial="hidden" animate="visible">
          <motion.div
            variants={slideInFromLeft(1)}
            className="py-2 text-center text-white rounded-lg"
          >
            <Texting />
          </motion.div>
        </motion.div>

        {/* Contact Me Button */}
      

        {/* Rocket Scroll Button */}
        <motion.div
          onClick={handleScroll}
          whileHover={{ scale: 1.1, y: 6 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 flex justify-center items-center cursor-pointer animate-bounce"
        >
          <Image
            src="/dd.png"
            alt="Rocket Scroll"
            width={150}
            height={150}
            className="drop-shadow-lg"
           
          />
        </motion.div>
      </div>

      {/* Scroll Target */}
      <div ref={nextSectionRef} className="min-h-screen w-full bg-transparent">
        <About />
      </div>
    </div>
  );
};
