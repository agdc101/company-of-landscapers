import React from 'react';
import { useQuery } from '@apollo/client';
import { get_homepage } from '../utils/queries';
import Hero from '../components/Hero';

const Home = () => {
  const { loading, error, data } = useQuery(get_homepage);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <>
      <Hero imageUrl={data.entry.heroImage[0].url} imageAlt={data.entry.heroImage[0].alt} title={data.entry.heroTitle} text={data.entry.heroText} />
      <section className="flex justify-around py-20 px-10">
        <div className="text-center w-3/5 xl:w-2/5">
          <p className="text-4xl">Introduction</p>
          <p className="mt-14 text-xl xl:text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt expedita ex eos similique ducimus aliquam aut animi? Quibusdam libero debitis molestiae reprehenderit reiciendis tenetur. Eum possimus velit ipsum aut voluptates!</p>
        </div>
        <div className="hidden xl:block w-2/5 max-w-screen-md">
          <img className="rounded" src={data.entry.heroImage[0].url} alt={data.entry.heroImage[0].alt} />
        </div>
      </section>
    </>
  );
}

export default Home;
