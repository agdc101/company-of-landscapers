
// import { get_aboutpage } from "../queries";
import { useQuery } from '@apollo/client';
import Header from "./header";

export default function About() {
//   const { loading, error, data } = useQuery(get_aboutpage);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <>
      {/* <Header data={data} /> */}
      <section>
        <div>
            <h1>ABOUT US</h1>
            {/* <h2 className="flex-auto" >{data.entry.title}</h2> */}
            {/* <p>{data.entry.description}</p> */}
            {/* <p>{post.heroImage.title}</p> */}
        </div>
      </section>
    </>
  );
}