import { SectionTitle } from "../sectionTitle/SectionTitle";
import { testimonials } from "../../data/Data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
{
}

const Testimonials = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };
  const item = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div id="testimonials" className="section">
      <SectionTitle title={"Testimonials"} />

      <motion.div
        variants={container}
        className="grid md:gap-20 gap-10 sm:grid-cols-2 mb-16"
        initial="hidden"
        whileInView={"visible"}
      >
        {testimonials.map((testimonial, idx) => {
          const { id, name, image, business } = testimonial;
          return (
            <motion.div
              key={id}
              className="relative shadow-lg p-6 hover:shadow-none"
              variants={item}
            >
              <p className="text-[0.9rem] mt-2 opacity-80 italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, maxime. Natus sunt excepturi officia sint, veritatis
                quidem optio ullam minima.
              </p>
              <div className="mt-6">
                <div className="font-bold">{name}</div>
                <div className="text-[0.9rem] opacity-80 text-red-500">
                  {business}
                </div>
              </div>
              <div className="absolute w-16 h-16 bottom-[1.2rem] right-[2rem] ">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src={image}
                  alt="clientImg"
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div className="text-center">
        <div className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-bold mb-2">
          Want Start Work With Me!
        </div>
        <p className="text-[0.9rem] mb-4 opacity-80 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </p>
        <Link className="text-[0.9rem] text-red-500" to="">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Testimonials;
