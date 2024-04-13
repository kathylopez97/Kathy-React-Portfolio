
import React from 'react';
import profile from '../../assets/images/profile.jpg';
const About = () => {
    return (

        <div id='About' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
            <img data-aos="fade-down" src={profile} width={290} height={290} className='circled border-2 p-1 border-text-sky-500 b_glow' alt="glowing effect" />
            <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal text-sky-500 uppercase">About me</h1>
                <p data-aos="fade-left">Hello, My name is Kathy Lopez, I am 26 years old, from Southern California, where I am working as a style consultant , inbound expert, Visual Merchandiser at Target Corporation. Where I have been serving about 8 years in the retail industry. I am currently studying at the University of Minnesota.Where I am further my educating in coding. I also recevied my diploma as a Medical Assistant at UEI College. </p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
    
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;
