
import { get_homepage } from "../queries";
import { useQuery } from '@apollo/client';

export default function Home() {
  const { loading, error, data } = useQuery(get_homepage);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <>
      <header className="card-header relative">
        <div className="overlay-content inset-0 z-10 absolute top-0 left-0 px-6 lg:px-10 w-full h-full">
          <div className="flex justify-between py-4">
            <h1 className="card-header-title text-base lg:text-2xl text-white font-light">The Company Of Landscapers</h1>
            <nav>
              <ul className="hidden card-header-icon lg:flex text-lg relative font-light">
                <li className="px-3"><a href="/" className="text-white font-light">Home</a></li>
                <li className="px-3"><a href="/about" className="text-white font-light">About</a></li>
                <li className="px-3"><a href="/services" className="text-white font-light">Services</a></li>
                <li className="px-3"><a href="/contact" className="text-white font-light">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="w-2/3 leading-relaxed text-white relative top-20 lg:top-40 text-4xl lg:text-6xl font-light tracking-wider">{data.entry.heroText}</h3>
            <button className="border-white text-white text-base lg:text-lg bg-transparent relative top-[7.5rem] lg:top-[12.5rem]">Learn more</button>
          </div>
        </div>
        {data.entry.heroImage.map((post, index) => (
          <div key={index} className="hero-image-container relative h-screen">
            <img src={post.url} alt={post.title} className="hero-image object-cover w-full h-screen inset-0" />
          </div>
        ))}
      </header>


      <section>
        <div>
          <h2 className="flex-auto" >{data.entry.title}</h2>
          <p>{data.entry.description}</p>
          {/* <p>{post.heroImage.title}</p> */}
        </div>
      </section>
    </>
  );
}