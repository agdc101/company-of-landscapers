import { Link } from "react-router-dom";

export default function Hero({imageUrl, imageAlt, title, text}) {
    return (
        <section className="bg-black hero">
            <div className="overlay-content inset-0 z-10 relative px-6 lg:px-10 w-full">
                <div className="absolute top-40 sm:top-40 w-2/3" >
                    <h3 className="leading-relaxed text-white text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-light tracking-wider my-6">{title}</h3>
                    <p className="hidden md:block leading-relaxed text-white text-lg md:text-xl xl:text-2xl font-light tracking-wider">{text}</p>
                    <Link to={'/about'} className="border-solid border-2 border-white rounded text-white font-bold absolute text-base p-3 md:text-lg mt-8 md:mt-16">Learn more</Link>
                </div>
            </div>
            <div className="hero-image-container top-0 h-screen">
                <img src={imageUrl} alt={imageAlt} className="hero-image object-cover w-full h-screen inset-0" />
            </div>
        </section>
    );
}   

