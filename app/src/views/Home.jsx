import { useLoaderData } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);

  const { data, error, loading } = loaderData;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Hero imageUrl={data.entry.heroImage[0].url} imageAlt={data.entry.heroImage[0].alt} title={data.entry.heroTitle} text={data.entry.heroText} />
      <section className="flex justify-around py-20 px-10">
        <div className="text-center w-3/5 xl:w-2/5">
        {/* <h1 className="text-6xl">{loaderData.message}</h1> */}
          <p className="text-4xl">Introduction</p>
          <p className="mt-14 text-xl xl:text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt expedita ex eos similique ducimus aliquam aut animi? Quibusdam libero debitis molestiae reprehenderit reiciendis tenetur. Eum possimus velit ipsum aut voluptates!</p>
        </div>
        <div className="hidden xl:block w-2/5 max-w-screen-md">
          <img className="rounded shadow-custom" src={data.entry.heroImage[0].url} alt={data.entry.heroImage[0].alt} />
        </div>
      </section>
    </>
  );
}

export default Home;
