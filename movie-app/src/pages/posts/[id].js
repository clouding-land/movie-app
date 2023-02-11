import Link from 'next/link';
import Image from "next/image";
import {useDispatch } from 'react-redux';
import { addCart } from '@/action';

export default function Home({post}) {

  const dispatch = useDispatch();
    const addProduct = (post)=>{
        dispatch(addCart(post));
    }

  const ShowProduct =({post})=>{
    return(
        <>
        <div className="col-md-6">
            <img src={post.Images[1]} alt={post.Title}
            height="500px" width="600px" />
        </div>
        <div className="col-md-6">
            <h2 className='text-uppercase'>
                {post.Title}-{post.Year}
            </h2>
            <h3 className='display-6'>{post.Genre}</h3>
            <h4 className='lead fw-bolder'>
                Director:{post.Director}
            </h4>
            <p className='display-6 fw-bold my-4'>
               {post.Language}
            </p>
            <p className="lead">{post.Plot}</p>
            <button className='btn btn-outline-dark px-2 py-2'
                onClick={()=>addProduct(post)}
                >
                    Watchlist
            </button>
        </div>
        </>
    )
}

    return (
      <div>
      <div className="container py-5">
          <div className="row py-4">
       {<ShowProduct post={post}/>}
       </div>
      </div>
  </div>
    )
  }

  export const getStaticProps = async (context)=>{
    const res = await fetch(
        `https://movies-database-gold.vercel.app/movies/${context.params.id}`);
    const post = await res.json();
    return{
        props: { post },
    };
  };

  export async function getStaticPaths(){
    const res = await fetch('https://movies-database-gold.vercel.app/movies/');
    const posts = await res.json();
    const ids= posts.map((data)=>data.id);
    const paths = ids.map((id)=>({params: {id:id.toString()}}));
    return{
      paths:paths,
      fallback:false,
    };
  };