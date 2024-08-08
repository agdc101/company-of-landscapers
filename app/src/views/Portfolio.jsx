import React, { useState } from "react";
import {
   Pagination,
   PaginationContent,
   PaginationEllipsis,
   PaginationItem,
   PaginationNext,
   PaginationPrevious,
 } from "@/components/ui/pagination"
import { Link, useLoaderData } from "react-router-dom";
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
   const [startIndex, setStartIndex] = useState(0);
   const itemsPerPage = 3;
   const endIndex = Math.min(startIndex + itemsPerPage, portfolioEntries.length);

   if (loading) return <p>Loading...</p>;
   if (error) return <Error/>;

   return (
      <>
         <Hero imageUrl={portfolioHomeData.heroImage[0].url} imageAlt={portfolioHomeData.heroImage[0].alt} title={portfolioHomeData.title} />
         <motion.section className="bg-[#fdf1e8]" {...framerAnimations.slideRightFadeIn} >
            <div className="py-6 lg:py-12 xl:py-24 text-center px-4 xl:px-8">
               <p className="text-lg xl:text-2xl xl:mb-32 max-w-5xl text-center mx-auto">{portfolioHomeData.description}</p>
               <motion.div key={startIndex} {...framerAnimations.slideRightFadeIn} className="mt-10 mb-8 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
                  {portfolioEntries.slice(startIndex, endIndex).map((entry, index) => (
                     <Card key={index}>
                        <CardContent className="flex flex-col justify-between h-full pt-4 p-4">
                           <h2 className="text-xl xl:text-3xl font-medium text-center my-2">{entry.title}</h2>
                           <p className="text-center xl:text-xl my-4 xl:my-8 italic">{entry.description}</p>
                           <img src={entry.portfolioImage[0].url} alt={entry.portfolioImage[0].alt} />
                           <Link to={`/portfolio/${entry.slug}`} className="mt-5 border italic block text-center rounded py-2 w-2/6 md:w-3/6 lg:w-3/6 m-auto">View project</Link>
                           </CardContent>
                     </Card>
                  ))}
               </motion.div>
               <Pagination>
                  <PaginationContent>
                     <PaginationItem>
                        <PaginationPrevious onClick={() => {
                           setStartIndex(Math.max(startIndex - itemsPerPage, 0));
                        }} 
                        className={startIndex === 0 ? "pointer-events-none opacity-50 xl:text-xl" : "xl:text-xl"}  
                        />
                     </PaginationItem>

                     <PaginationItem>
                        <PaginationEllipsis />
                     </PaginationItem>

                     <PaginationItem>
                        <PaginationNext onClick={() => {
                           setStartIndex(Math.min(startIndex + itemsPerPage, portfolioEntries.length - itemsPerPage));
                        }} 
                        className={endIndex === portfolioEntries.length ? "pointer-events-none opacity-50 xl:text-xl" : "xl:text-xl"} 
                        />
                     </PaginationItem>
                  </PaginationContent>
               </Pagination>
            </div>
         </motion.section>
      </>
   );
}