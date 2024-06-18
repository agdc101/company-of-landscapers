import { GET_ENTRIES } from "../queries";
import { useQuery } from '@apollo/client';

export default function Portfolio() {
    const { loading, error, data } = useQuery(GET_ENTRIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    console.log(data);
  
    return (
      <div>
        {data.entries.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
          </div>
        ))}
      </div>
    );
}