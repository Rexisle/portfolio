import Link from "next/link";
import ContactSlideIn from "./contactSlide";
import { FOOTER_DATA } from "@/constants";
import { SparklesIcon } from "@heroicons/react/24/outline";

export const Footer = () => {
  return (
    <section
      id="footer">
    <div className="w-full h-full bg-black text-gray-200 shadow-lg p-[15px]">
      
      <div className="w-full flex flex-col items-center justify-center m-auto">
    
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
        
         
            <div
             
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px]"></h3>
            
               
             
                
            </div>
            <div
             
             className="min-w-[200px] h-auto flex flex-col items-center justify-start"
           >
            <br />
            <div
              className="Welcome-box py-[8px] px-[7px] p-[25px] border border-[#7042f88b] opacity-[0.9]"
            >
              <br />
              <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 inline-block" />
              <h1 className="Welcome-text text-[13px] inline-block align-middle">
              Work with me and get the best out of your ideas
              </h1>
            </div>
            <ContactSlideIn />
           
              
            
               
           </div>
           <div
             
             className="min-w-[200px] h-auto flex flex-col items-center justify-start"
           >
             <h3 className="font-bold text-[16px]"></h3>
           
              
            
               
           </div>
          
         
          
        </div>

        <div className="mb-[20px] text-[15px] text-center">
       
          &copy; Rexisle {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
    </section>
  );
};
