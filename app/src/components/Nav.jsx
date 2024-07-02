
import { useState } from "react";
import Hamburger from 'hamburger-react';

const Nav = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className="flex justify-between py-4">
            <h1 className="card-header-title text-base lg:text-2xl font-light">The Company Of Landscapers</h1>
            <nav>
                <ul className="hidden card-header-icon lg:flex text-lg relative font-light">
                    <li className="px-3"><a href="/" className="font-light">Home</a></li>
                    <li className="px-3"><a href="/about" className="font-light">About</a></li>
                    <li className="px-3"><a href="/our-work" className="font-light">Our Work</a></li>
                    <li className="px-3"><a href="/contact" className="font-light">Contact</a></li>
                </ul>
            </nav>
            {/* Mobile Hamburger Nav */}
            <nav className="lg:hidden">
                <Hamburger toggled={isOpen} toggle={setOpen} color="black"/>
                <ul className="hidden card-header-icon text-lg relative font-light">
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