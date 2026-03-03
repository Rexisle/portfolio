import { Typewriter } from "react-simple-typewriter";

export default function Texting() {
  return (
    <h1 className="text-4xl text-center text-transparent bg-clip-text bg-indigo-600 font-mono">
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
