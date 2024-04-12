
import React from 'react';
import profile from '../../assets/images/profile.jpg';
const About = () => {
    return (

        <div id='About' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
            <img data-aos="fade-down" src={profile} width={290} height={290} className='circled border-2 p-1 border-text-sky-500 b_glow' alt="glowing effect" />
            <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal text-sky-500 uppercase">About me</h1>
                <p data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia praesentium autem itaque fugiat, dignissimos pariatur ducimus voluptate, iure cupiditate nihil molestias magnam minima temporibus tempora corporis. Illo quaerat enim porro.</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
    
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;
