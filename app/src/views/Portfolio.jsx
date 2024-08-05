
import { useParams, useLoaderData } from "react-router-dom";
import Hero from "@/components/Hero";

export default function Portfolio() {

  const loaderData = useLoaderData();
  const { portfolioData, error, loading } = loaderData;

//   const params = useParams();
//   console.log('params:', params.slug);
//   console.log('portfolioData:', portfolioData.portfolioEntries);


//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {/* <Hero imageUrl={entry.portfolioImage[0].url} imageAlt={entry.portfolioImage[0].alt} title={entry.title} text={entry.description} /> */}
      <h1>Our Portfolio</h1>
        {/* <div>
          <h2>{entry.title}</h2>
          <p>{entry.description}</p>
        </div> */}
    </>
  );
}