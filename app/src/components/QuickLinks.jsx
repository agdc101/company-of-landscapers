import { useRef } from "react";
import { Link } from "react-router-dom";

export default function QuickLinks({homePage}) {
    return (
        <section className="quicklinks">
            <div>
                <div>
                    <h3>Quicklinks</h3>
                    <ul>
                        <li><Link href="#introduction">Introduction</Link></li>
                        <li><Link href="#experience">Experience</Link></li>
                        <li><Link href="#featured-projects">Featured Projects</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Latest Projects</h3>
                    <ul>
                        <li><Link href="#introduction">Introduction</Link></li>
                        <li><Link href="#experience">Experience</Link></li>
                        <li><Link href="#featured-projects">Featured Projects</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact us</h3>
                    <ul>
                        <li><Link href="#introduction">Introduction</Link></li>
                        <li><Link href="#experience">Experience</Link></li>
                        <li><Link href="#featured-projects">Featured Projects</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}