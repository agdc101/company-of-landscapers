import { useRef } from "react";
import { useLoaderData } from 'react-router-dom';
import { useInView } from "framer-motion";
import Hero from '../components/Hero';

const Home = () => {
  const loaderData = useLoaderData();
  const { data, error, loading } = loaderData;
  console.log(loaderData);

  const introTextRef = useRef(null);
  const introTextIsInView = useInView(introTextRef, { once: true });

  if (loading) return <p>Loading...</p>;
  if (error) return <h2 className="text-red-900 text-center mt-6 text-2xl">Error: {error.message}</h2>;

  return (
    <>
      <Hero imageUrl={data.entry.heroImage[0].url} imageAlt={data.entry.heroImage[0].alt} title={data.entry.heroTitle} text={data.entry.heroText} />
      <section className="flex justify-around py-20 px-10">
        <div ref={introTextRef} className="text-center w-3/5 xl:w-2/5" style={{
            transform: introTextIsInView ? "none" : "translateX(-100px)",
            opacity: introTextIsInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>
          <p className="text-4xl ">Introduction</p>
          <p className="mt-14 text-xl xl:text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt expedita ex eos similique ducimus aliquam aut animi? Quibusdam libero debitis molestiae reprehenderit reiciendis tenetur. Eum possimus velit ipsum aut voluptates!</p>
        </div>
        <div className="hidden xl:block w-2/5 max-w-screen-md">
          <img className="rounded shadow-custom" src={data.entry.heroImage[0].url} alt={data.entry.heroImage[0].alt} />
        </div>
      </section>
    </>
  );
}

export default Home;
