import { useLoaderData } from 'react-router-dom';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Introduction from "../components/Introduction";
import Experience from "../components/Experience";
import FeaturedProjects from '@/components/FeaturedProjects';

const Home = () => {
  const loaderData = useLoaderData();
  const { homepageData, error, loading } = loaderData;

  const homePage = homepageData.homeEntries[0];
  const featuredProjectsData = homepageData.entries;

  console.log(homepageData);

  if (loading) return <><Nav/><h3 className="text-center mt-32 text-2xl">Loading...</h3></>;
  if (error) return ( <><Nav/><h2 className="text-red-900 text-center mt-32 text-2xl">Error: {error.message}</h2></>); //change error message to something generic on production

  return (
    <>
      <Hero imageUrl={homePage.heroImage[0].url} imageAlt={homePage.heroImage[0].alt} title={homePage.heroTitle} text={homePage.heroText} />
      <Introduction homePage={homePage} />
      <Experience homePage={homePage} />
      <FeaturedProjects projectsData={featuredProjectsData} />
    </>
  );
}

export default Home;
