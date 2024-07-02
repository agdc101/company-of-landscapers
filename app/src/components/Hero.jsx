
export default function Hero({imageUrl, imageAlt, text}) {

    return (
        <section className="bg-black relative hero">
            <div className="overlay-content inset-0 z-10 absolute top-0 left-0 px-6 lg:px-10 w-full h-full">
                <div>
                    <h3 className="w-2/3 leading-relaxed relative text-white top-20 lg:top-40 text-5xl lg:text-6xl font-light tracking-wider">{text}</h3>
                    <button className="border-white text-white text-base lg:text-lg bg-transparent relative top-[7.5rem] lg:top-[12.5rem]">Learn more</button>
                </div>
            </div>
            <div className="hero-image-container relative h-screen">
                <img src={imageUrl} alt={imageAlt} className="hero-image object-cover w-full h-screen inset-0" />
            </div>
        </section>
    );
}   

