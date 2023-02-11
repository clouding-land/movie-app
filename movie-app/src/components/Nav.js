import Link from 'next/link'
import navStyle from '@/styles/Nav.module.css'
import { useSelector } from 'react-redux';

const Nav =()=>{
  const state = useSelector((state)=> state.handleCart);
    return(
        // <nav className={navStyle.container}>
        //     <ul>
        //         <li><Link href="/">Home</Link></li>
        //         <li><Link href="/about-us">About us</Link></li>
        //         <li><Link href="/posts">Posts</Link></li>
        //     </ul>
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-white
        py-3 shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" href="/">NETFLIX</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/posts">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about-us">About</Link>
        </li>
        </ul>
        <div className='buttons'>
        <Link href="/cart" className="btn btn-outline-dark ms-2">
            <i className='fa fa-shopping-cart me-1 '></i>Watchlist ({state.length})
        </Link>
     </div>
        </div>
        </div>
        </nav>
    )
}

export default Nav;

{/* <nav className="navbar navbar-expand-lg navbar-light bg-white
    py-3 shadow-sm">
  <div className="container">
    <Link className="navbar-brand fw-bold fs-4" href="/">NETFLIX</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/posts">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
     <div className='buttons'>
        <Link to="/cart" className="btn btn-outline-dark ms-2">
            <i className='fa fa-shopping-cart me-1 '></i>Cart
        </Link>
     </div>
    </div>
  </div>
</nav> */}