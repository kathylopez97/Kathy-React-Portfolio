import React from 'react';
import  {useEffect } from 'react';
// import images
import logo from '../../assets/images/logo.png';
import profile from '../../assets/images/profile.jpg';
// import img1 from '../../assets/images/1.jpg';
// import img2 from '../../assets/images/2.png';
// import img3 from '../../assets/images/3.png';
// import img4 from '../../assets/images/4.png';
// import img5 from '../../assets/images/5.png';
// import img6 from '../../assets/images/5.png';

import Aos from 'aos';

const Portfolio = () => {
    useEffect(()=> {
        Aos.init({duration: 1000});
    }, [])
    return (
       <div id="Portfolio" className="p-20 flex flex-col items-center justify-center">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-sky-500">Portfolio</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
            <img data-aos="fade-up" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-text-sky-5000 b_glow" src={logo} alt="" />
            <img data-aos="fade-down" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-text-sky-500 b_glow" src={profile} alt="" />
            <img data-aos="fade-up" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-text-sky-500 b_glow" src={img1} alt="" />
            <img data-aos="fade-down" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-text-sky-500 b_glow" src={img2} alt="" />
            <img data-aos="fade-up" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-text-sky-500 b_glow" src={img3} alt="" />
            <img data-aos="fade-down" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-text-sky-500 b_glow" src={img4} alt="" />
            <img data-aos="fade-up" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-text-sky-500 b_glow" src={img5} alt="" />
            <img data-aos="fade-down" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-text-sky-500 b_glow" src={img6} alt="" />
        </div>
       </div>
    );
};

export default Portfolio;