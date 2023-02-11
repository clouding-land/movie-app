import Link from 'next/link'
import {useRouter} from "next/router";

export default function AllPosts({ posts }) {
  const router = useRouter();

  const ShowMovies =()=>{
    return(
      <>
      {posts.map((post) =>{
            return(
                <>
                <div className="col-md-4 mb-4 px-5 py-5">
                <div class="card h-100 text-center" key={post.id}>
                    <img src={post.Images[0]} class="card-img-top" alt={post.Title} height="250px" />
                    <div class="card-body">
                        <Link href={`/posts/${post.id}`}>
                     <h3>{post.Title}</h3>
                  </Link>
                  <p>{post.Genre}</p>
                    </div>
                </div>
                </div>
                </>
            )
        })}
      </>
    )
  }

    return (
      <div>
        <div className="col-12 mb-5">
      <h1 className='display-6 fw-bolder text-center py-3'>Latest Movies</h1>
      <hr />
    </div>
    <div className='row justify-content-center p-10'>
        {<ShowMovies posts={posts}/>}
    </div>
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