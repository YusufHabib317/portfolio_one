import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ScrollToTop from "../../components/scrollToTop/ScrolltoTop";

const Root = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
