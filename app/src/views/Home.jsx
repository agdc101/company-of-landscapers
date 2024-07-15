import { useRef } from "react";
import { useLoaderData } from 'react-router-dom';
import { useInView } from "framer-motion";
import Hero from '../components/Hero';
import Nav from '../components/Nav';

const Home = () => {
  const loaderData = useLoaderData();
  const { data, error, loading } = loaderData;
  const homePage = data.homeEntries[0];
  console.log(loaderData);

  const introTextRef = useRef(null);
  const introTextIsInView = useInView(introTextRef, { once: true });

  if (loading) return <><Nav/><h3 className="text-center mt-32 text-2xl">Loading...</h3></>;
  if (error) return ( <><Nav/><h2 className="text-red-900 text-center mt-32 text-2xl">Error: {error.message}</h2></>); //change error message to something generic on production

  return (
    <>
      <Hero imageUrl={homePage.heroImage[0].url} imageAlt={homePage.heroImage[0].alt} title={homePage.heroTitle} text={homePage.heroText} />
      <section className="flex justify-around py-20 px-2 xl:px-10">
        <div ref={introTextRef} className="text-center w-full lg:w-4/5 xl:w-2/5" style={{
            transform: introTextIsInView ? "none" : "translateX(-100px)",
            opacity: introTextIsInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>
          <h4 className="text-4xl">Introduction</h4>
          <p className="mt-14 text-xl xl:text-2xl 2xl:text-3xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt expedita ex eos similique ducimus aliquam aut animi? Quibusdam libero debitis molestiae reprehenderit reiciendis tenetur. Eum possimus velit ipsum aut voluptates!</p>
        </div>
        <div className="hidden xl:block w-2/5 max-w-screen-md">
          <img className="rounded shadow-custom" src={homePage.heroImage[0].url} alt={homePage.heroImage[0].alt} />
        </div>
      </section>

      <section className="flex flex-row-reverse justify-around py-20 px-2 xl:px-10 bg-slate-200">
        <div ref={introTextRef} className="text-center w-full lg:w-4/5 xl:w-2/5" style={{
            transform: introTextIsInView ? "none" : "translateX(-100px)",
            opacity: introTextIsInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>
          <h4 className="text-4xl">Experience</h4>
          <p className="mt-14 text-xl xl:text-2xl 2xl:text-3xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt expedita ex eos similique ducimus aliquam aut animi? Quibusdam libero debitis molestiae reprehenderit reiciendis tenetur. Eum possimus velit ipsum aut voluptates!</p>
        </div>
        <div className="hidden xl:block w-2/5 max-w-screen-md">
          <img className="rounded shadow-custom" src={homePage.heroImage[0].url} alt={homePage.heroImage[0].alt} />
        </div>
      </section>
    </>
  );
}

export default Home;
