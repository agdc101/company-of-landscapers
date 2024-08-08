
import { useLoaderData } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card"
import Hero from "@/components/Hero";
import Error from "./Error";
import { motion } from "framer-motion";
import framerAnimations from "@/utils/framer-anims";

export default function Portfolio() {
   const loaderData = useLoaderData();
   const { portfolioData, error, loading } = loaderData;
   const portfolioHomeData = portfolioData.portfolioHomeEntries[0];
   const portfolioEntries = portfolioData.portfolioEntries;

   console.log('portfolioData:', portfolioHomeData);

   if (loading) return <p>Loading...</p>;
   if (error) return <Error/>;

   return (
      <>
         <Hero imageUrl={portfolioHomeData.heroImage[0].url} imageAlt={portfolioHomeData.heroImage[0].alt} title={portfolioHomeData.title} />
         <motion.section {...framerAnimations.slideRightFadeIn} >
            <div className="py-6 lg:py-12 text-center bg-[#fdf1e8] container">
               <p>{portfolioHomeData.description}</p>
               <div className="mt-10 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6">
                  {portfolioEntries.map((entry, index) => (
                     <Card key={index} className="">
                        <CardContent>
                           <h2 className="text-xl italic text-center my-6">{entry.title}</h2>
                           <p className="text-center my-4">{entry.description}</p>
                           <img src={entry.portfolioImage[0].url} alt={entry.portfolioImage[0].alt} />
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>
         </motion.section>
      </>
   );
}