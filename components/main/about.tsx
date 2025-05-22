"use client";

import { motion } from "framer-motion";
import { TerminalSquare } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import ContactSlideIn from "./contactSlide";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-transparent text-green-400 font-mono flex items-center justify-center px-4 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="bg-[#0d0d0d] border border-green-500 rounded-lg shadow-xl w-full max-w-3xl p-6"
      >
        <div className="mb-4 text-green-500 flex items-center gap-2">
          <TerminalSquare className="w-5 h-5" />
          <span>rex@about:~$</span>
          <span className="ml-2 text-green-300">
            <Typewriter
              words={['ls -la', 'cd /home/rex', 'cat about.txt', 'npm start', 'git clone', 'yarn install', 'ssh user@server', 'curl -O', 'wget', 'ping google.com', 'echo "About me!"']}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={0}
              delaySpeed={3000}
            />
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <p className="mb-4 pl-6">
            👋 Hey! I'm <span className="text-green-300">Rex</span>, a full-stack
            developer with a passion for creating dynamic and responsive web applications. 
          </p>

          <div className="mb-4 pl-6">
           
            <span className="text-green-300">
            🚀 I have a strong foundation in both front-end and back-end technologies, allowing me to build complete solutions from start to finish.
              
              </span>
          </div>

          
        
        </motion.div>
       
      </motion.div>
    </section>
  );
}
