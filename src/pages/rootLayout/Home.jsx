import "./home.scss";
import Hero from "../../components/hero/Hero";
import Projects from "../../components/projects/Projects";
import Services from "../../components/services/Services";
import Blogs from "../../components/blogs/Blogs";
import Testimonials from "../../components/testimonial/Testimonials";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <Blogs />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
