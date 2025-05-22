"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles } from "lucide-react";

const experiences = [
  {
    year: "2020",
    title: "Backend Developer",
    desc: "Developed RESTful APIs with Node.js and Express. Integrated MongoDB for data storage.",
  },
  {
    year: "2017",
    title: "Front Developer",
    desc: "Built dynamic interfaces with React & Tailwind. Introduced smooth UI animations with Framer Motion.",
  },
  {
    year: "2016",
    title: "Graduated from University",
    desc: "Completed a degree in Computer Science, focusing on web development and system security.",
  },
];

export const Timeline = () => {
  return (
    <div className="bg-transparent min-h-screen text-[#0ff] py-20 px-4 flex justify-center items-center">
      <div className="max-w-3xl w-full relative before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-[2px] before:bg-[#0ff]/30">
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            side={index % 2 === 0 ? "left" : "right"}
            {...exp}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({
  year,
  title,
  desc,
  side,
}: {
  year: string;
  title: string;
  desc: string;
  side: "left" | "right";
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: side === "left" ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`mb-16 w-full flex ${
        side === "left" ? "justify-start" : "justify-end"
      }`}
    >
      <div className="bg-[#0f0f0f] border border-[#0ff]/30 shadow-[0_0_15px_#0ff] rounded-lg p-6 w-full sm:w-[45%] relative">
        <span className="absolute -left-4 top-2 text-[#0ff]">
          <Sparkles className="h-6 w-6 animate-flicker" />
        </span>
        <h3 className="text-xl font-semibold glitch">{year}</h3>
        <p className="text-lg text-[#fff] mb-1">{title}</p>
        <p className="text-sm text-[#ccc]">{desc}</p>
      </div>
     
    </motion.div>
   
  );
};
