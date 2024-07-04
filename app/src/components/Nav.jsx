
import { useState } from "react";
import Hamburger from 'hamburger-react';
import { Link } from "react-router-dom";

const Nav = () => {
    const [isOpen, setOpen] = useState(false);

    //disable scrolling when mobile nav is open
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }

    return (
        <header className="flex justify-between content-center px-2 lg:px-4 z-30 relative text-white h-0">
            <h1 className="card-header-title text-lg lg:text-2xl lg:font-light pt-3">The Company Of Landscapers</h1>
            <nav className="hidden md:flex justify-between pt-3">
                <ul className="card-header-icon md:flex text-lg font-light">
                    <li className="px-4"><Link to="/" className="font-light">Home</Link></li>
                    <li className="px-4"><Link to="/about" className="font-light">About</Link></li>
                    <li className="px-4"><Link to="/our-work" className="font-light">Our Work</Link></li>
                    <li className="px-4"><Link to="/contact" className="font-light">Contact</Link></li>
                </ul>
            </nav>
            {/* Mobile Hamburger Nav */}
            <div className="relative z-50 flex justify-end m-2 ml-auto">
                <Hamburger className="bg-red" toggled={isOpen} toggle={setOpen} color={isOpen ? 'black' : 'white'}/>
            </div>
            {isOpen &&
                <nav className="md:hidden">
                    <div className="bg-white absolute top-0 left-0 right-0 bottom-0 z-30 h-screen" >
                        <ul className="card-header-icon text-lg font-light mt-16">
                            <li className="p-6 text-2xl"><Link to="/" className="font-light text-black">Home</Link></li>
                            <li className="p-6 text-2xl"><Link to="/about" className="font-light text-black">About</Link></li>
                            <li className="p-6 text-2xl"><Link to="/our-work" className="font-light text-black">Our Work</Link></li>
                            <li className="p-6 text-2xl"><Link to="/contact" className="font-light text-black">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            }
            {/* -=-=-=-= */}
        </header>
    )
}

export default Nav;