import Link from "next/link";
import ContactSlideIn from "./contactSlide";
import { FOOTER_DATA } from "@/constants";

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
