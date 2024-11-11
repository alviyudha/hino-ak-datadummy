import Footer from "../components/Footer";
import NavbarBootstrap from "../components/NavbarBootstrap";
import ReactFloatingWspComp from "../components/ReactFloatingWspComp";

export default function ErrorPage() {
  return (
    <>
    <NavbarBootstrap />
    <div className="error-page">
      <div className="container text-center">
        <img src="/Hino-Indonesia.png" alt="Ford KAK Logo" className="img-fluid error-logo" />
        <h1 className="error-heading">Oops! Something went wrong.</h1>
        <p className="error-message">The page you are looking for might be temporarily unavailable or does not exist.</p>
      </div>
    </div>
    <ReactFloatingWspComp />
  <Footer />
    </>
  )
}
