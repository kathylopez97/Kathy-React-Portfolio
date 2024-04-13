import React from 'react';
import Aos from "aos";
import { useEffect } from "react";
import MyPDF from '../../components/Resume.pdf';


const Resume = () => {
    useEffect(()=> {
        Aos.init({duration: 1000});
    }, [])
    return (
       <div id="Resume" className="p-20 flex flex-col items-center justify-center">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-sky-500"> Resume</h1>
        <div className="flex space-x-2">

        <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50  text-white border-2 hover:bg-text-sky-500 border-text-sky-500 rounded-lg py-4 px-8 uppercase relative overflow-hidden"> 
        <a href={MyPDF} download="Resume.pdf"> Download My Resume Here </a>
        </button>
        
        </div>

     <div>

</div>
        <h2 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-sky-500"> Proficent  </h2>
        <h3 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-sky-500">   Here is what Coding Languages I am most Proficent in</h3>

        <div>

        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
            <h2 data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold text-sky-500 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-text-sky-500 b_glow">HTML</h2>
            <h2 data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-sky-500 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-text-sky-500 b_glow">CSS</h2>
            <h2 data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold text-sky-500 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-text-sky-500 b_glow">Javascript</h2>
            <h2 data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-sky-500 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-text-sky-500 b_glow">React</h2>
            
        </div>
       </div>
    );
};

export default Resume;