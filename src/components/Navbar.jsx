import { useState} from "react";
import { Link } from "react-scroll";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";
import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo.png'
// Nav BAR when clicked 
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () =>  setClick(!click);
    const content = <>
    
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth={true} to="Banner">

                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                    <NavLink to="/" className="Banner" data-nav-link> Home </NavLink></li>
                </Link>

                <Link spy={true} smooth={true} to="About">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">

                    <NavLink to="/about" className="About" data-nav-link> About me </NavLink>
                        
                    </li>
                </Link>

                <Link spy={true} smooth={true} to="Portfolio">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">

                    <NavLink to="/portfolio" className="Portfolio" data-nav-link> Portfolio </NavLink>

                    </li>
         


                <Link spy={true} smooth={true} to="Contact">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
                    <NavLink to="/contact" className="Contact" data-nav-link>Contact </NavLink>  
                </Link>

                </Link>
                    

                <Link spy={true} smooth={true} to="Resume">

                    <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">

                    <NavLink to="/Resume" className="Resume" data-nav-link> Resume </NavLink> 
                    </li>

                </Link>
            </ul>
        </div>
    </>

    return (
        // return Navbar to show functionality of class names of each component
        // Home, About, Contact, Portfolio, and Resume
        <nav>
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
            <div className="flex items-center flex-1">
                <span className="text-3xl font-bold">  <img data-aos="fade-down" src={logo} width={80} height={80} className='rounded border-2 p-1 border-text-sky-500' alt="glowing effect" /></span>
            </div>
                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-[18px]">
                <Link spy={true} smooth={true} to="Home">
                    <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                    
                    <NavLink to="/" className="Banner" data-nav-link> Home </NavLink></li>

                </Link>
        
                <Link spy={true} smooth={true} to="About">
                
                    <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">

                    <NavLink to="/about" className="About" data-nav-link> About </NavLink></li>
               
                </Link>
              
                <Link spy={true} smooth={true} to="Portfolio">

                    <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">

                    <NavLink to="/portfolio" className="Portfolio" data-nav-link> Portfolio </NavLink></li>

                </Link>
            
                <Link spy={true} smooth={true} to="Contact">

                    <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">

                    <NavLink to="/Contact" className="Contact" data-nav-link> Contact </NavLink> 
                    </li>
                </Link>

              <Link spy={true} smooth={true} to="Resume">

                    <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">

                    <NavLink to="/resume" className="Resume" data-nav-link> Resume </NavLink> 
                    </li>

                </Link>
            </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>

                <button className="block sm:hidden transtion" onClick={handleClick}>
                    {click ? <FaTimes/> : <CiMenuFries/>}
                </button>

            </div>
        </nav>
    );
};

export default Navbar;