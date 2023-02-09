import { navLinks } from "../../data/Data";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navlinks from "./Navlinks";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsTop(window.scrollY > 20);
    });
  }, []);

  return (
    <div
      className={`${
        isTop ? "shadow-lg bg-red-100" : ""
      } fixed w-full top-0 left-0 z-20`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-2  ">
        <div className="flex items-center gap-2 hover:text-[1.2rem] cursor-pointer transition-all">
          <div className="rounded-full w-8 h-8 bg-red-500 flex items-center justify-center text-white font-bold">
            YH
          </div>
          <p className="text-xl">
            Yusuf <span className="opacity-50">Habib</span>
          </p>
        </div>

        <div className="md:flex hidden items-center gap-6">
          {navLinks.map((navlink, idx) => {
            return (
              <div key={idx} className="hover:text-red-700 transition-all">
                <a href={`#${navlink.text}`}>{navlink.text}</a>
              </div>
            );
          })}
        </div>

        <HiMenuAlt3
          className="cursor-pointer text-3xl md:hidden"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      {toggle && (
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          className="fixed right-0 top-0 bg-red-500 h-screen text-white w-80"
        >
          <div className="flex flex-col mt-[40%] ml-[30%] gap-8">
            {navLinks.map((navlink, idx) => {
              return <Navlinks key={idx} {...navlink} setToggle={setToggle} />;
            })}
          </div>
          <HiX
            className="absolute right-4 text-3xl top-8 cursor-pointer"
            onClick={(prev) => setToggle(!prev)}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
