import { Typewriter } from "react-simple-typewriter";

export default function Texting() {
  return (
    <h1 className="text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-mono">
      &nbsp;
      <Typewriter
      words={["Web Developer", "Problem Solver", "Tech Enthusiast"]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={80}
      deleteSpeed={50}
      delaySpeed={1500}
      />
    </h1>
  );
}
