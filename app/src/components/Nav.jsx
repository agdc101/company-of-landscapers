
import { useState } from "react";
import Hamburger from 'hamburger-react';
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import framerAnimations from "../utils/framer-anims";

const Nav = () => {
    const [isOpen, setOpen] = useState(false);

    //disable scrolling when mobile nav is open
    useEffect(() => {
        isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
    }, [isOpen]);

    return (
        <header className="flex justify-between content-center px-2 lg:px-4 z-30 relative text-white h-0">
            <motion.h1 className="card-header-title z-40 text-lg lg:text-2xl lg:font-light pt-3.5" initial={{ opacity: 0 }} animate={{color: isOpen ? '#000000' : '#FFFFFF', opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}>The Company Of Landscapers</motion.h1>
            <motion.nav className="hidden md:flex justify-between pt-3" {...framerAnimations.slideDown}>
                <ul className="card-header-icon md:flex text-lg font-light">
                    <li className="px-4 2xl:px-6 2xl:text-xl"><NavLink to="/" className="font-light">Home</NavLink></li>
                    <li className="px-4 2xl:px-6 2xl:text-xl"><NavLink to="/about" className="font-light">About</NavLink></li>
                    <li className="px-4 2xl:px-6 2xl:text-xl"><NavLink to="/our-work" className="font-light">Our Work</NavLink></li>
                    <li className="px-4 2xl:px-6 2xl:text-xl"><NavLink to="/contact" className="font-light">Contact</NavLink></li>
                </ul>
            </motion.nav>
            {/* Mobile Hamburger Nav */}
            <div className="md:hidden relative z-50 flex justify-end m-2 ml-auto">
                <Hamburger className="bg-red" toggled={isOpen} toggle={setOpen} color={isOpen ? 'black' : 'white'}/>
            </div>
            <AnimatePresence>
                {isOpen &&
                    <nav className="md:hidden">
                        <motion.div className="bg-white absolute top-0 left-0 right-0 bottom-0 z-30 h-screen" {...framerAnimations.mobileNav}>
                            <ul className="card-header-icon font-light mt-24">
                                <li className="p-7 text-3xl"><NavLink to="/" className="font-light text-black">Home</NavLink></li>
                                <li className="p-7 text-3xl"><NavLink to="/about" className="font-light text-black">About</NavLink></li>
                                <li className="p-7 text-3xl"><NavLink to="/our-work" className="font-light text-black">Our Work</NavLink></li>
                                <li className="p-7 text-3xl"><NavLink to="/contact" className="font-light text-black">Contact</NavLink></li>
                            </ul>
                        </motion.div>
                    </nav>
                }
            </AnimatePresence>
            {/* -=-=-=-= */}
        </header>
    )
}

export default Nav;