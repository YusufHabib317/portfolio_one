import { btns } from "../../data/Data";
import { projects } from "../../data/Data";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionTitle } from "../sectionTitle/SectionTitle";

const Projects = () => {
  const [filterImgs, setFilterImgs] = useState(null);
  useEffect(() => {
    setFilterImgs(projects);
  }, []);
  const handleClick = (e) => {
    let btnType = e.target.value;
    const newFilterImg = projects.filter((project) => {
      return project.value === btnType;
    });
    btnType !== "all" ? setFilterImgs(newFilterImg) : setFilterImgs(projects);
  };
  return (
    <div id="projects" className="section">
      <SectionTitle title={"My Collections"} />

      <div className="flex flex-wrap gap-8">
        {btns.map((btn, idx) => {
          return (
            <button key={idx} value={btn.value} onClick={(e) => handleClick(e)}>
              {btn.name}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        <motiondiv className="grid sm:grid-cols-2 md:grid-cols-3 mt-12 gap-3">
          {filterImgs &&
            filterImgs.map((filterImg, idx) => {
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  key={idx}
                >
                  <motion.img src={filterImg.image} alt="" />
                </motion.div>
              );
            })}
        </motiondiv>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
