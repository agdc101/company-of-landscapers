
import { get_homepage } from "../queries";
import { useQuery } from '@apollo/client';

export default function Home() {
    const { loading, error, data } = useQuery(get_homepage);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    console.log(data);
  
    return (
      <div>
        {data.entries.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    );
}