"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactSlidein from "@/components/main/contactSlide";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiFramer,
  SiPostman,
} from "react-icons/si";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

const skills = [
  { name: "React.js", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Framer Motion", icon: <SiFramer /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git", icon: <SiGit /> },
  { name: "REST APIs", icon: <SiPostman /> },
];

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-10 mt-5 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start max-w-lg md:max-w-xl">
        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 inline-block" />
          <h1 className="Welcome-text text-[13px] inline-block align-middle">
            My skills
          </h1>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-white max-w-[700px] w-auto h-auto"
        >
         

          <motion.div
            className="flex flex-wrap gap-4 mt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-br from-purple-700 to-cyan-600 text-white shadow-md hover:scale-105 transition-transform duration-300 cursor-default"
              >
                <span className="text-lg mr-2">{skill.icon}</span>
                {skill.name}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
      >
        <Image
          src="/hero-bg.svg"
          alt="Work icons background"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
     
    </motion.div>
    
  );
};
