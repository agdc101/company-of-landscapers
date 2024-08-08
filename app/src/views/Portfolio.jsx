
import { useLoaderData } from "react-router-dom";
import Hero from "@/components/Hero";
import Error from "./Error";

export default function Portfolio() {
  const loaderData = useLoaderData();
  const { portfolioData, error, loading } = loaderData;
  const portfolioHomeData = portfolioData.portfolioHomeEntries[0];

  console.log('portfolioData:', portfolioHomeData);

  if (loading) return <p>Loading...</p>;
  if (error) return <Error/>;

  return (
    <>
      <Hero imageUrl={portfolioHomeData.heroImage[0].url} imageAlt={portfolioHomeData.heroImage[0].alt} title={portfolioHomeData.title} />
      <h1>Our Portfolio</h1>
        {/* <div>
          <h2>{entry.title}</h2>
          <p>{entry.description}</p>
        </div> */}
    </>
  );
}