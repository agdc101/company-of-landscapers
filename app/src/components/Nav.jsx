
import { useState } from "react";
import Hamburger from 'hamburger-react';

const Nav = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className="flex justify-between content-center px-2 z-20 relative text-white h-0">
            <h1 className="card-header-title text-lg lg:text-2xl lg:font-light pt-3">The Company Of Landscapers</h1>
            <nav className="flex justify-between pt-3">
                <ul className="hidden card-header-icon lg:flex text-lg font-light">
                    <li className="px-4"><a href="/" className="font-light">Home</a></li>
                    <li className="px-4"><a href="/about" className="font-light">About</a></li>
                    <li className="px-4"><a href="/our-work" className="font-light">Our Work</a></li>
                    <li className="px-4"><a href="/contact" className="font-light">Contact</a></li>
                </ul>
            </nav>
            {/* Mobile Hamburger Nav */}
            <nav className="flex lg:hidden">
                <Hamburger toggled={isOpen} toggle={setOpen} color="white"/>
                <ul className="hidden card-header-icon text-lg font-light">
                    <li className="px-3"><a href="/" className="font-light">Home</a></li>
                    <li className="px-3"><a href="/about" className="font-light">About</a></li>
                    <li className="px-3"><a href="/our-work" className="font-light">Our Work</a></li>
                    <li className="px-3"><a href="/contact" className="font-light">Contact</a></li>
                </ul>
            </nav>
            {/* -=-=-=-=-= */}
        </header>
    )
}

export default Nav;