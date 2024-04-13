import {FaGithub, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import logo from '../assets/images/logo.png'
const Footer = () => {
    return (
       <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="mb-4 md:mb-0">
            <span className="text-3xl font-bold">  <img data-aos="fade-down" src={logo} width={80} height={80} className='rounded border-2 p-1 border-text-sky-500' alt="glowing effect" /></span>
                <p className="text-[18px] my-4">Lorem ipsum dolor sit amet consecte tur, adipisicing elit. Vero praesentium cupiditate, optio id nesciunt quia debitis nostrum blanditiis aperiam tempora!</p>
            </div>
            <div>


                <h2 className="text-[22px] font-semibold text-sky-500  py-2 uppercase">Proficient</h2>
                <ul className="text-[16px] my-4">
                    <li className="my-2">HTML</li>
                    <li className="my-2">CSS</li>
                    <li className="my-2">Javascript</li>
                    <li className="my-2">React</li>
                </ul>
            </div>
            <div className="mb-4 md:mb-0">
                <h2 className="text-[22px] font-semibold text-sky-500  py-2 uppercase">Contact</h2>
                <p className="text-[16px] my-4">Email: kathyylopezz97@gmail.com</p>
                <p className="text-[16px] my-4">Phone: +1 714-206 4272 </p>
            </div>
           <div>
             <h2 className="text-[22px] font-semibold text-sky-500  py-2 uppercase">Follow Me</h2>
            <div className="flex space-x-4">
                <a className="text-white hover:text-text-sky-500  transition-all duration-150 ease-in-out" href="https://github.com/kathylopez97">
                    <FaGithub/>
                </a>
                <a className="text-white hover:text-text-sky-500  transition-all duration-150 ease-in-out" href="https://www.linkedin.com/feed/?trk=404_page">
                    <FaLinkedinIn/>
                </a>
                <a className="text-white hover:text-text-sky-500  transition-all duration-150 ease-in-out" href="https://twitter.com/home">
                    <FaTwitter/>
                </a>
                <a className="text-white hover:text-text-sky-500  transition-all duration-150 ease-in-out" href="https://www.instagram.com/">
                    <FaInstagram/>
                </a>
            </div>
           </div>
        </div>
       </footer>

    );
};

export default Footer;