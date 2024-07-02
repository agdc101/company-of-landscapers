import { Link } from "react-router-dom";

export default function Hero({imageUrl, imageAlt, text}) {
    return (
        <section className="bg-black hero">
            <div className="overlay-content inset-0 z-10 relative px-6 lg:px-10 w-full">
                <h3 className="w-2/3 leading-relaxed absolute text-white top-40 lg:top-60 text-5xl md:text-7xl xl:text-8xl font-light tracking-wider">{text}</h3>
                <Link to={'/about'} className="border-solid border-2 border-white rounded text-white font-bold absolute text-base p-3 md:text-lg top-120 lg:top-160 md:mt-16">Learn more</Link>
            </div>
            <div className="hero-image-container top-0 h-screen">
                <img src={imageUrl} alt={imageAlt} className="hero-image object-cover w-full h-screen inset-0" />
            </div>
        </section>
    );
}   

