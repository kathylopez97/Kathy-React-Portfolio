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
                <p data-aos="fade-left"> Experienced Full Stack Developer with a background in retail sales at Target.Knowledge in leveraging web development skills to enhance operational efficiency, streamline processes, and improve customer experiences. 
Expertise in front and backend technologies, such as CSS, HTML, SQL, NoSQL, MongoDB, Node.js, and Javascript, with a strong foundation in computer science and software engineering principles. Known for delivering high-quality code, troubleshooting complex issues, and collaborating effectively in agile environments. passionate about creating engaging and interactive web experiences. Experienced in building responsive websites and web applications that prioritize user experience and accessibility. Skilled in translating design concepts into functional and visually appealing interfaces. Actively seeking opportunities to contribute to innovative projects and collaborative teams in the tech industry.</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div data-aos="fade-up" className="flex space-x-2">
                            <a href="" className="text-sky-500 hover:text-sky-500 rounded-full glow p-2">
                                <AiFillGithub className="text-[28px]"/>
                            </a>
                            <a href="https://www.linkedin.com/feed/?trk=404_page" className="text-sky-500 hover:text-sky-500 rounded-full glow p-2">
                                <FaLinkedinIn className="text-[28px]"/>
                            </a>
                            <a href="https://twitter.com/home" className="text-sky-500 hover:text-sky-500 rounded-full glow p-2">
                                <FiTwitter className="text-[28px]"/>
                            </a>
                            <a href="https://www.instagram.com/" className="text-sky-500 hover:text-sky-500 rounded-full glow p-2">
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