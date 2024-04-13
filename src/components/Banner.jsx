// import github linkedin instagram and twitter
import {AiFillGithub} from 'react-icons/ai';
import {FaLinkedinIn, FaInstagram} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import { useEffect } from 'react';
import logo from '../assets/images/logo.png';

const Banner = () => {

    return (
        <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal uppercase">Welcome To <span className="text-sky-500">My Portfolio</span></h1>
                <p data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia praesentium autem itaque fugiat, dignissimos pariatur ducimus voluptate, iure cupiditate nihil molestias magnam minima temporibus tempora corporis. Illo quaerat enim porro.</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div data-aos="fade-up" className="flex space-x-2">
                            <a href="" className="text-sky-500 hover:text-sky-500 rounded-full glow p-2">
                                <AiFillGithub className="text-[28px]"/>
                            </a>
                            <a href="" className="text-sky-500 hover:text-sky-500 rounded-full glow p-2">
                                <FaLinkedinIn className="text-[28px]"/>
                            </a>
                            <a href="" className="text-sky-500 hover:text-sky-500 rounded-full glow p-2">
                                <FiTwitter className="text-[28px]"/>
                            </a>
                            <a href="" className="text-sky-500 hover:text-sky-500 rounded-full glow p-2">
                                <FaInstagram className="text-[28px]"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img data-aos="fade-up" src={logo} width={290} height={290} className='rounded-full border-2 p-1 border-text-sky-500 img_glow' alt="photo of logo " />

        </div>
        
    );
};

export default Banner;