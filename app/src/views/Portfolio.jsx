
import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import { get_portfolio } from '@/utils/queries';

export default function Portfolio() {

    const params = useParams();

    console.log('params:', params.slug);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;
  
    return (
      <div>
        <h1>Portfolio</h1>
        {/* {data.entries.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.slug}</p>
            <p>{post.description}</p>
          </div>
        ))} */}
      </div>
    );
}