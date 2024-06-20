
import { get_homepage } from "../queries";
import { useQuery } from '@apollo/client';

export default function Home() {
  const { loading, error, data } = useQuery(get_homepage);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);


  
  return (
    <section>
        {data.entry.heroImage.map((post, index) => (
        <div key={index}>
          <img src={post.url} alt={post.title} />
        </div>
      ))}
      <div>
        <h2 className="flex-auto" >{data.entry.title}</h2>
        <p>{data.entry.description}</p>
        {/* <p>{post.heroImage.title}</p> */}
      </div>
    </section>
  );
}