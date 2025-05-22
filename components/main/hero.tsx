import { HeroContent } from "@/components/sub/hero-content";
import { SkillText } from "@/components/sub/skill-text";

export const Hero = () => {
  return (
    <div  className="relative flex flex-col h-full w-full">
      
      <SkillText />
      <HeroContent />

      
      
    </div>
  );
};
