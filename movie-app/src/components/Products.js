import Link from 'next/link'
import {useRouter} from "next/router";

export default function Products({ posts }) {
  const router = useRouter();
    return (
      <div>
        <h1>Products Page</h1>
        <ul>
            {posts.map((post)=>(
                    <div key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            <h3>{post.Title}</h3>
                        </Link>
                    </div>
                ))}
        </ul>
      </div>
    )
  }

  export const getStaticProps =async (context) => {
    const res = await fetch('https://movies-database-gold.vercel.app/movies');
    const posts = await res.json();
    return{
        props:{
            posts,
        },
    };
  };