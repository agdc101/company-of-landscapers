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
  const expTextRef = useRef(null);
  const introTextIsInView = useInView(introTextRef, { once: true });
  const expTextIsInView = useInView(expTextRef, { once: true });

  if (loading) return <><Nav/><h3 className="text-center mt-32 text-2xl">Loading...</h3></>;
  if (error) return ( <><Nav/><h2 className="text-red-900 text-center mt-32 text-2xl">Error: {error.message}</h2></>); //change error message to something generic on production

  return (
    <>
      <Hero imageUrl={homePage.heroImage[0].url} imageAlt={homePage.heroImage[0].alt} title={homePage.heroTitle} text={homePage.heroText} />
      <section className="flex flex-col items-center xl:flex-row justify-around py-20 px-2 xl:px-10">
        <div ref={introTextRef} className="text-center w-full lg:w-4/5 xl:w-2/5" style={{
            transform: introTextIsInView ? "none" : "translateX(-100px)",
            opacity: introTextIsInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>
          <h4 className="text-4xl">{homePage.introTitle}</h4>
          <p className="my-14 text-xl xl:text-2xl 2xl:text-3xl">{homePage.introDescription}</p>
        </div>
        <div className="xl:block w-2/5 max-w-screen-md">
          <img className="rounded shadow-custom" src={homePage.introImage[0].url} alt={homePage.introImage[0].alt} />
        </div>
      </section>

      <section className="flex flex-col items-center xl:flex-row-reverse justify-around py-20 px-2 xl:px-10 bg-slate-200">
        <div ref={expTextRef} className="text-center w-full lg:w-4/5 xl:w-2/5" style={{
            transform: expTextIsInView ? "none" : "translateX(100px)",
            opacity: expTextIsInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>
          <h4 className="text-4xl">{homePage.experienceTitle}</h4>
          <p className="my-14 text-xl xl:text-2xl 2xl:text-3xl">{homePage.experienceDescription}</p>
        </div>
        <div className="xl:block w-2/5 max-w-screen-md">
          <img className="rounded shadow-custom" src={homePage.experienceImage[0].url} alt={homePage.experienceImage[0].alt} />
        </div>
      </section>

      <section className="justify-around py-20 px-2 xl:px-10 bg-stone-800">
          <h4 className="text-4xl text-center mb-16 text-white">Latest Projects</h4>
          <div className="flex flex-col justify-evenly items-center">
            <div className="mb-12">
              <p className="text-2xl mb-4 text-white">Project 1</p>
              <img src="https://via.placeholder.com/400" alt="placeholder" />
            </div>
            <div className="mb-12">
              <p className="text-2xl mb-4 text-white">Project 2</p>
              <img src="https://via.placeholder.com/400" alt="placeholder" />
            </div>
            <div className="mb-12">
              <p className="text-2xl mb-4 text-white">Project 3</p>
              <img src="https://via.placeholder.com/400" alt="placeholder" />
            </div>
          </div>
      </section>

    </>
  );
}

export default Home;
