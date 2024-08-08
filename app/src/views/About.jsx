import { Link } from "react-router-dom";
import Hero from "../components/HomeHero";
import { useQuery } from '@apollo/client';
import { get_homepage } from '../utils/queries';

const About = () => {
  const { loading, error, data } = useQuery(get_homepage);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Hero imageUrl={data.entry.heroImage[0].url} imageAlt={data.entry.heroImage[0].alt} title={data.entry.heroTitle} text={data.entry.heroText} />
      <div>
          <h1>ABOUT US</h1>
          <Link to="/">Go back to the homepage</Link>
      </div>
    </>
  );
}

export default About;