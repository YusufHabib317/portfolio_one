import hero from "../../assets/hero.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="section flex justify-center items-center" id="home">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <div
          className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden shadow-heroShadow
      border-[20px] border-solid border-red-100
      "
        >
          <img
            src={hero}
            alt="heroImg"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-grey sm:text-3xl mb-4">
            FrontEnd Design and Developer
          </div>
          <h2 className="text-[2rem] sm:text-[5rem] font-bold mb-4">
            Yusuf Habib
          </h2>
          <p className="opacity-80 text-[0.9rem]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            ipsa facere saepe repudiandae eveniet voluptatum quibusdam unde nemo
            quos nam aperiam, fugit veritatis consectetur atque eligendi
            architecto et a quaerat?
          </p>
          <div className="mt-4 flex gap-4">
            <Link
              to="/"
              className="py-2 px-4 border-[2px] border-solid border-red-500 text-[0.9rem] rounded-[1rem] shadow-md"
            >
              CV
            </Link>
            <a
              href="#contact"
              className="py-2 px-4 border-[2px] border-solid border-grey text-[0.9rem] rounded-[1rem]
              transition-all hover:border-red-500
              "
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
