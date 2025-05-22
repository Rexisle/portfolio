import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";

import { Timeline } from "@/components/main/experience";
import ContactSlidein from "@/components/main/contactSlide";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
      <Encryption />
     
    <Timeline />
      <Hero />
     
       
        
       
        <Projects />
      </div>
    </main>
  );
}
