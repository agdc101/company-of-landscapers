import { useRef } from "react";
import { Link, useLoaderData } from 'react-router-dom';
import { useInView } from "framer-motion";
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";
import Introduction from "../components/Introduction";

const Home = () => {
  const loaderData = useLoaderData();
  const { data, error, loading } = loaderData;
  const homePage = data.homeEntries[0];
  console.log(loaderData);

  const expTextRef = useRef(null);
  const expTextIsInView = useInView(expTextRef, { once: true });

  if (loading) return <><Nav/><h3 className="text-center mt-32 text-2xl">Loading...</h3></>;
  if (error) return ( <><Nav/><h2 className="text-red-900 text-center mt-32 text-2xl">Error: {error.message}</h2></>); //change error message to something generic on production

  return (
    <>
      <Hero imageUrl={homePage.heroImage[0].url} imageAlt={homePage.heroImage[0].alt} title={homePage.heroTitle} text={homePage.heroText} />

      <Introduction homePage={homePage} />

      <section className="flex flex-col items-center xl:flex-row-reverse justify-around py-20 px-2 xl:px-10 bg-slate-200">
        <div ref={expTextRef} className="text-center w-full lg:w-4/5 xl:w-2/5" style={{
            transform: expTextIsInView ? "none" : "translateX(100px)",
            opacity: expTextIsInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>
          <h4 className="text-4xl">{homePage.experienceTitle}</h4>
          <p className="my-14 text-xl xl:text-2xl 2xl:text-3xl">{homePage.experienceDescription}</p>
        </div>
        <div className="xl:block w-4/5 sm:w-3/5 md:w-2/5 max-w-screen-md">
          <img className="rounded shadow-custom" src={homePage.experienceImage[0].url} alt={homePage.experienceImage[0].alt} />
        </div>
      </section>

      <section className="justify-around py-20 px-14 md:px-20 lg:px-32 xl:px-18 bg-neutral-800">
          <h4 className="text-4xl text-center mb-12 md:mb-16 text-white">Featured Projects</h4>
          <div className="flex flex-col justify-evenly text-center items-center">
            <Carousel opts={{align: "start" }} className="">
              <CarouselContent>
                {homePage.featuredProjects.map((project, index) => (
                  <CarouselItem key={index} className="flex flex-col justify-between items-center px-6 xl:px-8 md:basis-1/2 xl:basis-1/3">
                    <h4 className="text-2xl text-white mt-5">{project.title}</h4>
                    <p className="text-white my-5 md:my-8">{project.description}</p>
                    <img className="rounded shadow-custom md:w-full" src={project.portfolioImage[0].url} alt={project.portfolioImage[0].alt} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <Link to="/our-work" className="mt-14 border block text-center rounded py-2 w-2/6 lg:w-1/6 m-auto text-white">See more projects</Link>
      </section>

    </>
  );
}

export default Home;
