import '@/styles/globals.css'
import Nav from '@/components/Nav'
import "bootstrap/dist/css/bootstrap.css";
import 'font-awesome/css/font-awesome.min.css';
// import '///node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '/node_modules/font-awesome/css/font-awesome.min.css';


export default function App({ Component, pageProps }) {
  return(
  <>
  <Nav />
  <Component {...pageProps} />
  </>
  )
  
}
