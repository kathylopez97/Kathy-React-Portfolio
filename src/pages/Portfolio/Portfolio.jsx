import React from 'react';
import  {useEffect } from 'react';

// import images from assets on portfolio 
import img1 from '../../assets/images/code.png';
import img2 from '../../assets/images/workday.png';
import img3 from '../../assets/images/pwgenerator.png';
import img4 from '../../assets/images/employee.png';
import img5 from '../../assets/images/music.png';
import img6 from '../../assets/images/convention.png';

import Aos from 'aos';

const Portfolio = () => {
    useEffect(()=> {
        Aos.init({duration: 1000});
    }, [])
    return (
       <div id="Portfolio" className="p-20 flex flex-col items-center justify-center">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-sky-500 b_glow-">Portfolio</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">


        
           
           <a href="https://kathylopez97.github.io/code-quiz/">
                <img data-aos="fade-up" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-text-sky-500 b_glow" src={img1} alt="codequiz" />
            </a>
           

             <a href="https://kathylopez97.github.io/code-quiz/">
                
             <img data-aos="fade-down" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-text-sky-500 b_glow" src={img2} alt="workday scheduler" />
            </a>
            
            <a href="https://kathylopez97.github.io/code-quiz/">
                
                <img data-aos="fade-up" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-text-sky-500 b_glow" src={img3} alt="workday scheduler" />
               </a>
               
   
               <a href="https://kathylopez97.github.io/code-quiz/">
                
                <img data-aos="fade-down" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-text-sky-500 b_glow" src={img4} alt="workday scheduler" />
               </a>
               

               <a href="https://kathylopez97.github.io/code-quiz/">
                
                <img data-aos="fade-up" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-text-sky-500 b_glow" src={img5} alt="workday scheduler" />
               </a>
               
   
               <a href="https://kathylopez97.github.io/code-quiz/">
                
                <img data-aos="fade-down" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-text-sky-500 b_glow" src={img6} alt="workday scheduler" />
               </a>
               

   
        </div>
       </div>
    );
};

export default Portfolio;