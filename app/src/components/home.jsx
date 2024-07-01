
import { get_homepage } from "../queries";
import { useQuery } from '@apollo/client';
import Header from "./header";

export default function Home() {
  const { loading, error, data } = useQuery(get_homepage);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <>
      <section>
        <div>
            <div className="hero-image-container relative h-screen">
              <p>{data.entry.title}</p>
              <p>{data.entry.description}</p>
            </div>
        </div>
      </section>
    </>
  );
}