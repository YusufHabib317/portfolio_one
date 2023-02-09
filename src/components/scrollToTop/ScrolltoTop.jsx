import { useEffect, useState } from "react";
import { BiChevronUp } from "react-icons/bi";

const ScrollToTop = () => {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setDisplay(window.scrollY > 400);
    });
  }, []);
  return (
    <>
      {display && (
        <div
          className="fixed right-[5%] bottom-10 bg-red-500 text-[2em] h-8 w-8 rounded-full
        flex items-center justify-center text-white"
        >
          <a href="#home">
            <BiChevronUp />
          </a>
        </div>
      )}
    </>
  );
};
export default ScrollToTop;
