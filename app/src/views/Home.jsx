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
        <div>
          <p className="text-4xl">The Company Of Landscapers - Home</p>
        </div>
      </section>
    </>
  );
}

export default Home;
