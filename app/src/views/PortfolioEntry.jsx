import { useParams, useLoaderData, useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import Error from "./Error";
import { motion } from "framer-motion";
import framerAnimations from "@/utils/framer-anims";
import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function PortfolioEntry() {
   const loaderData = useLoaderData();
   const { portfolioData, error, loading } = loaderData;
   const params = useParams();
   const location = useLocation();

   const currentIndex = portfolioData.portfolioEntries.findIndex(entry => entry.slug === params.slug);
   const nextEntry = portfolioData.portfolioEntries[currentIndex + 1];
   const previousEntry = portfolioData.portfolioEntries[currentIndex - 1];

   console.log("nextEntry", nextEntry);
   console.log("previousEntry", previousEntry);

   const entry = portfolioData.portfolioEntries.find(entry => entry.slug === params.slug);

   if (loading) return <p>Loading...</p>;
   if (error) return <Error/>;

   return (
      <>
         <motion.div key={location.key}>
            <Hero imageUrl={entry.portfolioImage[0].url} imageAlt={entry.portfolioImage[0].alt} title={entry.title} />
            <motion.div key={params.slug} className="grid grid-cols-1 gap-10 lg:gap-4" {...framerAnimations.slideRightFadeIn}>
               <div className="md:pb-10 xl:py-16">
                  <p className="text-xl lg:text-3xl xl:text-4xl text-center py-8 xl:pb-16">{entry.description}</p>
                  <p className="text-center lg:text-xl xl:text-2xl container xl:mb-6">{entry.projectDescription}</p>
               </div>
               <div className="bg-[#fdf1e8] p-4 md:px-16 xl:px-20 mb-6 md:mb-10 lg:py-12 lg:px-6 md:pt-8 flex">
                  <Carousel plugins={[ Autoplay({delay: 4000}) ]} >
                     <p className="mb-4 xl:mb-6 lg:text-xl xl:text-2xl">Our Project in Pictures:</p>
                     <CarouselContent>
                     {entry.portfolioImage.map((image, index) => (
                        <CarouselItem className="basis-1/2 lg:basis-1/3" key={index}>
                           <figure className="mt-auto">
                              <img src={image.url} alt={image.alt} />
                              <figcaption className="italic mt-2 md:mb-2 text-sm xl:text-xl text-center">{image.title}</figcaption>
                           </figure>
                        </CarouselItem>
                     ))}
                     </CarouselContent>
                     <CarouselPrevious />
                     <CarouselNext />
                  </Carousel>
               </div>
            </motion.div>
         </motion.div>
      </>
   );
}