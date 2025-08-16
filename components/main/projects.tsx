"use client";

import { useState } from "react";
import { PROJECTS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

export const Projects = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center py-20 px-6"
    >
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center">
        Featured Projects 🚀
      </h2>
      <p className="mt-2 text-gray-400 text-center max-w-xl">
        A selection of my work. Click to explore more details.
      </p>

      {/* Highlighted Project */}
      <div className="mt-12 w-full max-w-4xl">
        <motion.div
          layout
          className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-600/20 rounded-2xl shadow-lg overflow-hidden hover:shadow-purple-500/30 transition-shadow duration-300"
          onClick={() =>
            setExpanded(expanded === PROJECTS[0].title ? null : PROJECTS[0].title)
          }
        >
          <img
            src={PROJECTS[0].image}
            alt={PROJECTS[0].title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white">
              {PROJECTS[0].title}
            </h3>
            <p className="text-sm text-gray-400">
              {PROJECTS[0].description}
            </p>
          </div>

          <AnimatePresence>
            {expanded === PROJECTS[0].title && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-black/40 border-t border-purple-500/20"
              >
                <p className="text-gray-300 text-sm">
                  ✨Bulit with NextJs, Tailwind CSS and Framer Motion..Graphics done in Canva
                </p>
                <a
                  href={PROJECTS[0].link}
                  target="_blank"
                  className="mt-4 inline-block px-4 py-2 text-sm font-medium rounded-lg bg-purple-600 hover:bg-purple-700 text-white"
                >
                  View Project
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Other Projects (Stacked) */}
      <div className="mt-12 w-full max-w-4xl flex flex-col gap-6">
        {PROJECTS.slice(1).map((project) => (
          <motion.div
            key={project.title}
            layout
            className="bg-white/5 border border-gray-700 rounded-2xl shadow-md overflow-hidden cursor-pointer hover:border-purple-500/40 transition-all"
            onClick={() =>
              setExpanded(expanded === project.title ? null : project.title)
            }
          >
            <div className="flex items-center p-4 gap-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h4 className="text-lg font-semibold text-white">
                  {project.title}
                </h4>
                <p className="text-xs text-gray-400 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>

            <AnimatePresence>
              {expanded === project.title && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 bg-black/30"
                >
                  <p className="text-gray-300 text-sm">
                    Built with Pure HTML5, Bootsrap and custom CSS animations.
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    className="mt-4 inline-block px-4 py-2 text-sm font-medium rounded-lg bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    View Project
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
