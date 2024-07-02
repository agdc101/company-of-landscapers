import React from 'react';
import { useQuery } from '@apollo/client';
import { get_homepage } from '../queries';
import Hero from '../components/Hero';

const Home = () => {
  const { loading, error, data } = useQuery(get_homepage);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <>
      <Hero imageUrl={data.entry.heroImage[0].url} imageAlt={data.entry.heroImage[0].alt} text={data.entry.heroText} />
      <section>
            <div className="h-screen">
              <h1 className="text-4xl text-white font-bold">Welcome to the homepage</h1>
            </div>
      </section>
    </>
  );
}

export default Home;
