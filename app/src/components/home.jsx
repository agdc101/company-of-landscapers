
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
        <div className="overlay-content absolute top-0 left-0 w-full h-full flex justify-between px-4 lg:px-8 py-4">
          <h1 className="card-header-title text-3xl text-white z-10">The Company Of Landscapers</h1>
          <nav>
            <ul className="card-header-icon flex text-lg z-10 relative">
              <li className="px-3"><a href="/" className="text-white">Home</a></li>
              <li className="px-3"><a href="/about" className="text-white">About</a></li>
              <li className="px-3"><a href="/services" className="text-white">Services</a></li>
              <li className="px-3"><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </nav>
        </div>
        {data.entry.heroImage.map((post, index) => (
          <div key={index} className="hero-image-container relative">
            <img src={post.url} alt={post.title} className="hero-image w-full" />
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