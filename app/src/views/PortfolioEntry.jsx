
import { useParams, useLoaderData } from "react-router-dom";
import Hero from "@/components/Hero";

export default function PortfolioEntry() {

  const loaderData = useLoaderData();
  const { portfolioData, error, loading } = loaderData;

  const params = useParams();
  console.log('params:', params.slug);
  console.log('portfolioData:', portfolioData.portfolioEntries);

  // in portfolioData.portfolioEntries find the entry with the slug that matches params.slug
  const entry = portfolioData.portfolioEntries.find(entry => entry.slug === params.slug);

  console.log('entry:', entry);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Hero imageUrl={entry.portfolioImage[0].url} imageAlt={entry.portfolioImage[0].alt} title={entry.title} text={entry.description} />
      <h1>Portfolio</h1>
        <div>
          <h2>{entry.title}</h2>
          <p>{entry.description}</p>
        </div>
    </>
  );
}