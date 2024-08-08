import { useLoaderData } from 'react-router-dom';
import HomeHero from '../components/HomeHero';
import Nav from '../components/Nav';
import Introduction from "../components/Introduction";
import Experience from "../components/Experience";
import FeaturedProjects from '@/components/FeaturedProjects';
import Error from './Error';

const Home = () => {
  const loaderData = useLoaderData();
  const { homepageData, error, loading } = loaderData;

  const homePage = homepageData.homeEntries[0];
  const featuredProjectsData = homepageData.entries;

  console.log(homepageData);

  if (loading) return <><Nav/><h3 className="text-center mt-32 text-2xl">Loading...</h3></>;
  if (error) return ( <Error /> );

  return (
    <>
      <HomeHero imageUrl={homePage.heroImage[0].url} imageAlt={homePage.heroImage[0].alt} title={homePage.heroTitle} text={homePage.heroText} />
      <Introduction homePage={homePage} />
      <Experience homePage={homePage} />
      <FeaturedProjects projectsData={featuredProjectsData} />
    </>
  );
}

export default Home;
