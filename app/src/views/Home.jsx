import React from 'react';
import { useQuery } from '@apollo/client';
import { get_homepage } from '../queries';

const Home = () => {
  const { loading, error, data } = useQuery(get_homepage);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <>
      <section>
        <div>
            <div className="hero-image-container h-screen">
              <h1 className="text-4xl text-white font-bold">Welcome to the homepage</h1>
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
